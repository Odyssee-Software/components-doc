# Scheduler et Batching dans Pulse Framework

Le scheduler de Pulse permet de regrouper intelligemment les mises à jour réactives pour éviter les recalculs redondants et améliorer les performances.

## Architecture : Propagation Asynchrone par Défaut

**Point critique :** Pulse utilise des **microtasks** par défaut pour propager les changements de manière asynchrone. Cela signifie que les mises à jour ne se produisent pas immédiatement, mais sont regroupées et exécutées à la fin du tick actuel.

### Signals : Propagation via Microtasks

```typescript
const count = signal(0);

effect(() => {
  console.log('Effect executed:', count());
});

count(1);
count(2);
count(3);
console.log('After signals updated');

// Output:
// "After signals updated"
// "Effect executed: 3"
// ⚡ L'effect ne s'exécute qu'UNE FOIS après les 3 mises à jour !
```

**Comment ça fonctionne :**

```typescript
// Dans signal()
function notifySubscribers(): void {
  schedule(() => {  // ← Utilise le scheduler (microtask par défaut)
    for (const subscriber of subscribers) {
      subscriber(value);
    }
  });
}
```

Les notifications sont **planifiées** via `schedule()` qui utilise `queueMicrotask()` par défaut.

### Computed : Propagation Asynchrone

Les `computed` propagent aussi de manière asynchrone pour éviter les cascades synchrones :

```typescript
const firstName = signal('John');
const lastName = signal('Doe');
const fullName = computed(() => `${firstName()} ${lastName()}`);

effect(() => {
  console.log('Full name:', fullName());
});

// Ces changements sont groupés
firstName('Jane');
lastName('Smith');

// L'effect ne s'exécute qu'une fois avec "Jane Smith"
```

**Avantages de la propagation asynchrone :**
- ✅ **Performance** : Évite les recalculs multiples
- ✅ **Stabilité** : Prévient les cascades infinies
- ✅ **Prévisibilité** : Ordre d'exécution cohérent

### Microtasks vs Macrotasks

```typescript
const count = signal(0);

// Microtask (défaut Pulse)
count(1);
queueMicrotask(() => console.log('Microtask'));
console.log('Sync');

// Output:
// "Sync"
// "Microtask"
// Effect de Pulse s'exécute ici

// vs Macrotask (setTimeout)
setTimeout(() => console.log('Macrotask'), 0);

// Les microtasks s'exécutent AVANT les macrotasks
```

**Ordre d'exécution :**
1. Code synchrone
2. Microtasks (Pulse effects, Promises)
3. Render du navigateur
4. Macrotasks (setTimeout, setInterval)

## Le Problème

Sans batching, chaque modification de signal déclenche immédiatement tous les computed et effects :

```typescript
const firstName = signal('John')
const lastName = signal('Doe')
const fullName = computed(() => `${firstName()} ${lastName()}`)

// ❌ Sans batching : fullName est recalculé 2 fois !
firstName('Jane')  // → fullName recalcule
lastName('Smith')  // → fullName recalcule encore
```

## La Solution : Batching Automatique

Pulse intègre un scheduler qui regroupe automatiquement les updates :

```typescript
import { signal, computed, batch } from 'pulse-framework'

const firstName = signal('John')
const lastName = signal('Doe')
const fullName = computed(() => {
  console.log('Computing fullName...')
  return `${firstName()} ${lastName()}`
})

// ✅ Avec batching : fullName n'est recalculé qu'une seule fois !
batch(() => {
  firstName('Jane')
  lastName('Smith')
  // Les deux changements sont groupés
})
// → "Computing fullName..." s'affiche une seule fois
```

## API du Scheduler

### `batch(fn)`

Regroupe tous les updates dans une fonction :

```typescript
batch(() => {
  signal1(value1)
  signal2(value2)
  signal3(value3)
  // Tous les computed/effects se mettent à jour ensemble
})
```

### `flush()`

Force l'exécution immédiate de toutes les tâches en attente :

```typescript
import { signal, flush } from 'pulse-framework'

const count = signal(0)

count(1)
count(2)
count(3)

// Force l'exécution des updates
flush()
```

### Modes de Scheduling

Par défaut, Pulse utilise des **microtasks** pour le batching automatique. Vous pouvez changer ce comportement selon vos besoins :

```typescript
import { setDefaultScheduleMode } from 'pulse-framework'

// Mode synchrone - propagation immédiate, pas de batching
setDefaultScheduleMode('sync')

// Mode microtask - batching automatique via queueMicrotask() (DÉFAUT)
setDefaultScheduleMode('micro')

// Mode manuel - vous contrôlez l'exécution avec flush()
setDefaultScheduleMode('manual')
```

#### Mode Synchrone vs Microtask

```typescript
// Mode SYNC
setDefaultScheduleMode('sync');

const count = signal(0);
effect(() => console.log('Count:', count()));

count(1);  // → "Count: 1" (immédiat)
count(2);  // → "Count: 2" (immédiat)
count(3);  // → "Count: 3" (immédiat)
// ❌ 3 exécutions !

// Mode MICRO (défaut)
setDefaultScheduleMode('micro');

const count2 = signal(0);
effect(() => console.log('Count2:', count2()));

count2(1);
count2(2);
count2(3);
console.log('After updates');
// Output:
// "After updates"
// "Count2: 3" (une seule fois)
// ✅ 1 exécution !
```

## Exemples Pratiques

### Formulaire avec Validation

```typescript
const formData = {
  email: signal(''),
  password: signal(''),
  confirmPassword: signal('')
}

const isValid = computed(() => {
  console.log('Validating...')
  return (
    formData.email().includes('@') &&
    formData.password().length >= 8 &&
    formData.password() === formData.confirmPassword()
  )
})

// Sans batching : validation exécutée 3 fois
formData.email('user@example.com')
formData.password('securepass')
formData.confirmPassword('securepass')

// Avec batching : validation exécutée 1 seule fois
batch(() => {
  formData.email('user@example.com')
  formData.password('securepass')
  formData.confirmPassword('securepass')
})
// → "Validating..." s'affiche une seule fois
```

### Animation Coordonnée

```typescript
const x = signal(0)
const y = signal(0)
const rotation = signal(0)

const transform = computed(() => 
  `translate(${x()}px, ${y()}px) rotate(${rotation()}deg)`
)

// Animer plusieurs propriétés simultanément
function animateStep(progress: number) {
  batch(() => {
    x(progress * 100)
    y(Math.sin(progress * Math.PI) * 50)
    rotation(progress * 360)
  })
}

// Une seule mise à jour DOM par frame
requestAnimationFrame(() => animateStep(0.5))
```

### Mise à Jour d'État Complexe

```typescript
interface User {
  id: number
  name: string
  email: string
  role: string
}

const users = signal<User[]>([])
const selectedId = signal<number | null>(null)
const filter = signal('')

const selectedUser = computed(() => 
  users().find(u => u.id === selectedId())
)

const filteredUsers = computed(() => 
  users().filter(u => 
    u.name.toLowerCase().includes(filter().toLowerCase())
  )
)

// Mettre à jour plusieurs états liés
function loadUserData(data: User[]) {
  batch(() => {
    users(data)
    selectedId(data[0]?.id ?? null)
    filter('')
  })
  // Tous les computed se mettent à jour ensemble
}
```

## Batching Automatique vs Manuel

### Automatique (Microtask)

Par défaut, Pulse utilise des microtasks pour regrouper automatiquement les updates dans le même tick :

```typescript
// Ces trois updates seront automatiquement groupés
count(1)
count(2)
count(3)
// → Une seule propagation à la fin du tick
```

### Manuel (batch)

Utilisez `batch()` quand vous voulez un contrôle explicite :

```typescript
batch(() => {
  // Groupement explicite garanti
  count(1)
  count(2)
  count(3)
})
```

## Performance

### Benchmark : Avec vs Sans Batching

```typescript
import { signal, computed, batch } from 'pulse-framework'

const signals = Array.from({ length: 100 }, () => signal(0))
const sum = computed(() => signals.reduce((acc, s) => acc + s(), 0))

// Sans batching
console.time('without-batch')
signals.forEach((s, i) => s(i))
console.timeEnd('without-batch')
// → ~50ms (100 recalculs)

// Avec batching
console.time('with-batch')
batch(() => {
  signals.forEach((s, i) => s(i))
})
console.timeEnd('with-batch')
// → ~2ms (1 seul recalcul)
```

### Gain : 25x plus rapide ! ⚡

## Best Practices

### 1. Batcher les mises à jour liées

```typescript
// ✅ Bon - update groupé
batch(() => {
  user.firstName('John')
  user.lastName('Doe')
  user.email('john@example.com')
})

// ❌ Moins optimal - 3 updates séparés
user.firstName('John')
user.lastName('Doe')
user.email('john@example.com')
```

### 2. Utiliser batch dans les event handlers

```typescript
function handleFormSubmit(event: Event) {
  event.preventDefault()
  
  batch(() => {
    formData.submitting(true)
    formData.errors([])
    formData.lastSubmit(Date.now())
  })
}
```

### 3. Batcher les updates asynchrones

```typescript
async function fetchAndUpdate() {
  const data = await fetch('/api/data').then(r => r.json())
  
  batch(() => {
    loading(false)
    items(data.items)
    total(data.total)
    lastUpdate(Date.now())
  })
}
```

### 4. Ne pas sur-utiliser batch

```typescript
// ❌ Inutile - un seul signal
batch(() => {
  count(count() + 1)
})

// ✅ Mieux - direct
count(count() + 1)
```

## Intégration avec le Debug

Le scheduler expose des stats pour le debugging :

```typescript
import { getSchedulerStats } from 'pulse-framework'

const stats = getSchedulerStats()
console.log(stats)
// {
//   pendingTasks: 5,
//   pendingMicrotasks: 2,
//   isFlushingSync: false,
//   isFlushingMicro: false,
//   isBatching: true
// }
```

## Mode Avancé : Scheduling Manuel

Pour un contrôle total, utilisez le mode manuel :

```typescript
import { 
  setDefaultScheduleMode, 
  flush,
  signal 
} from 'pulse-framework'

setDefaultScheduleMode('manual')

const count = signal(0)

// Les updates sont accumulés
count(1)
count(2)
count(3)

// Rien ne se passe jusqu'à flush()
flush()  // → Maintenant tous les effects s'exécutent
```

Utile pour :
- Tests unitaires
- Animations synchronisées
- Contrôle précis du timing

## Propagation Asynchrone et Effects Détruits

Un pattern important : les computed vérifient si un effect est toujours actif avant de le notifier :

```typescript
import { bindEffectToElement } from 'pulse-framework';

const Carousel: Pulse.Fn = () => {
  const currentSlide = signal(0);
  
  const carouselElement = <div class="carousel" /> as HTMLElement;
  
  // Effect lié au lifecycle de l'élément
  bindEffectToElement(carouselElement, () => {
    console.log('Slide changed to:', currentSlide());
  });
  
  return carouselElement;
};

// Quand l'élément est supprimé du DOM :
// 1. bindEffectToElement marque l'effect comme inactif
// 2. Les computed vérifient si l'effect est actif avant de propager
// 3. Les notifications sont ignorées pour les effects inactifs
// ✅ Pas de fuites mémoire !
```

**Implémentation interne :**

```typescript
// Le computed propage de manière asynchrone
schedule(() => {
  for (const subscriber of subscribers) {
    // Vérifie si l'effect est toujours actif
    if (activeEffects.has(subscriber)) {
      subscriber(newValue);
    }
    // Sinon, ignore silencieusement
  }
});
```

Cette approche asynchrone permet au cleanup de s'exécuter AVANT que les notifications soient envoyées, évitant ainsi les appels à des effects détruits.

## Microtasks et Event Loop

### Comprendre le Timing

```typescript
console.log('1. Sync start');

const count = signal(0);
effect(() => {
  console.log('3. Effect:', count());
});

count(1);  // Planifie une microtask

console.log('2. Sync end');

// Output:
// "1. Sync start"
// "2. Sync end"
// "3. Effect: 1"

// ⚡ L'effect s'exécute après le code synchrone mais avant le render
```

### Interaction avec les Promises

```typescript
const data = signal(null);

fetch('/api/data')
  .then(response => response.json())
  .then(result => {
    data(result);  // Planifie une microtask
    console.log('Data updated');
  });

effect(() => {
  console.log('Effect sees:', data());
});

// Les deux s'exécutent dans la même "vague" de microtasks
```

### Best Practice : Batching dans les Async

```typescript
async function loadUserData(userId: number) {
  const user = await fetchUser(userId);
  const posts = await fetchPosts(userId);
  const comments = await fetchComments(userId);
  
  // ✅ Grouper les updates
  batch(() => {
    currentUser(user);
    userPosts(posts);
    userComments(comments);
    loading(false);
  });
  // Une seule propagation pour tout !
}
```

## Conclusion

Le scheduler de Pulse offre :
- ⚡ **Performance** : 10-50x plus rapide avec batching
- 🎯 **Automatique** : Propagation asynchrone par défaut via microtasks
- 🔧 **Contrôle** : API `batch()` pour contrôle explicite
- 🐛 **Debuggable** : Stats et modes pour diagnostic
- 🚀 **Flexible** : Modes sync/micro/manual selon les besoins
- 🛡️ **Sûr** : Vérifie les effects actifs avant propagation

**Points clés à retenir :**
1. Les mises à jour sont **asynchrones** par défaut (microtasks)
2. Les computed propagent aussi de manière **asynchrone**
3. Utilisez `batch()` pour **grouper explicitement** les updates
4. Le mode `sync` désactive le batching (utile pour debug)
5. Les microtasks s'exécutent **avant le render** du navigateur

Le batching et la propagation asynchrone sont essentiels pour des applications Pulse performantes et sans fuites mémoire !
