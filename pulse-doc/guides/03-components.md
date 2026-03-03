# Composants avec Pulse Framework

## Approche Moderne : Function Components avec JSX

Pulse Framework adopte une approche **DOM-first** avec JSX pour créer des composants réutilisables. Contrairement à React, Pulse ne repose pas sur un Virtual DOM : **les composants JSX retournent directement des éléments DOM réels**.

### "What You See Is What You Get"

Quand vous écrivez `<MyComponent />`, vous obtenez immédiatement un `HTMLElement` ou `DocumentFragment` concret :

```tsx
import { signal } from 'pulse-framework';

const MyComponent: Pulse.Fn = () => {
  return <div>Hello World</div>;
};

// <MyComponent /> retourne un vrai HTMLDivElement
const element = <MyComponent />;
document.body.appendChild(element); // Montage direct dans le DOM
```

**Pas de Virtual DOM, pas de réconciliation, pas de re-render** : chaque composant produit du DOM réel que vous manipulez directement.

## Le Type `Pulse.Fn`

`Pulse.Fn` est le type TypeScript pour les Function Components :

```tsx
type Pulse.Fn<PROPS extends Record<string, any> = Record<string, any>> = (
  props: PROPS
) => Pulse.JSX.Element | null
```

### Premier Composant

```tsx
import { signal } from 'pulse-framework';

// Function Component simple
const Greeting: Pulse.Fn = () => {
  return <h1>Bonjour Pulse Framework !</h1>;
};

// Montage direct
document.body.appendChild(<Greeting />);
```

### Avec État Local (Signals)

```tsx
const Counter: Pulse.Fn = () => {
  // Signal local au composant
  const count = signal(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => count(count() + 1)}>
        Increment
      </button>
    </div>
  );
};
```

**Point clé** : Dans JSX pour l'affichage, les signals ne doivent PAS être appelés avec `()`. Le moteur de rendu crée automatiquement les bindings réactifs.

## Props et TypeScript

### Props Typées

```tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: Pulse.Fn<ButtonProps> = ({ label, onClick, variant = 'primary', disabled = false }) => {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

// Utilisation avec auto-complétion TypeScript
<Button 
  label="Sauvegarder" 
  onClick={() => console.log('Saved')} 
  variant="primary" 
/>
```

### Props Réactives

Les props peuvent contenir des signals ou computed values :

```tsx
import { Signal } from 'pulse-framework';

interface DisplayProps {
  value: Signal<number>;
  label: string;
}

const Display: Pulse.Fn<DisplayProps> = ({ value, label }) => {
  return (
    <div>
      <span>{label}: </span>
      <strong>{value}</strong>
    </div>
  );
};

// Utilisation
const count = signal(42);
<Display value={count} label="Counter" />
```

## Composition et Children

### Pattern Children

```tsx
interface CardProps {
  title: string;
  children?: any;
}

const Card: Pulse.Fn<CardProps> = ({ title, children }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

// Utilisation
<Card title="Mon Titre">
  <p>Contenu de la carte</p>
  <button>Action</button>
</Card>
```

### Fragments pour Grouper Sans Wrapper

Les fragments permettent de grouper des éléments sans ajouter de nœud DOM :

```tsx
const List: Pulse.Fn = () => {
  return (
    <>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </>
  );
};

// Ou avec Fragment explicite
import { Fragment } from 'pulse-framework';

const List: Pulse.Fn = () => {
  return (
    <Fragment>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </Fragment>
  );
};
```

**Note** : Les fragments retournent un `DocumentFragment` qui se "déploie" lors de l'insertion dans le DOM.

## Computed et Réactivité

### Valeurs Calculées

```tsx
const UserProfile: Pulse.Fn = () => {
  const firstName = signal('John');
  const lastName = signal('Doe');
  
  // Computed se recalcule automatiquement
  const fullName = computed(() => `${firstName()} ${lastName()}`);
  
  return (
    <div>
      <h1>{fullName}</h1>
      <input 
        value={firstName} 
        onInput={(e) => firstName((e.target as HTMLInputElement).value)}
        placeholder="Prénom"
      />
      <input 
        value={lastName}
        onInput={(e) => lastName((e.target as HTMLInputElement).value)}
        placeholder="Nom"
      />
    </div>
  );
};
```

### Classes et Styles Dynamiques

```tsx
const StatusBadge: Pulse.Fn = () => {
  const isActive = signal(true);
  
  const statusClass = computed(() => 
    isActive() ? 'badge-success' : 'badge-danger'
  );
  
  const statusText = computed(() => 
    isActive() ? 'Actif' : 'Inactif'
  );
  
  return (
    <div>
      <span className={statusClass}>
        {statusText}
      </span>
      <button onClick={() => isActive(!isActive())}>
        Toggle Status
      </button>
    </div>
  );
};
```

## Lifecycle et Effects

### Effects pour Side-Effects

```tsx
const Logger: Pulse.Fn = () => {
  const count = signal(0);
  
  // Effect : se déclenche à chaque changement de count
  effect(() => {
    console.log('Count changed to:', count());
    document.title = `Count: ${count()}`;
  });
  
  return (
    <button onClick={() => count(count() + 1)}>
      Count: {count}
    </button>
  );
};
```

### Cleanup

```tsx
const Timer: Pulse.Fn = () => {
  const seconds = signal(0);
  
  effect(() => {
    const interval = setInterval(() => {
      seconds(seconds() + 1);
    }, 1000);
    
    // Cleanup : retourner une fonction de nettoyage
    return () => clearInterval(interval);
  });
  
  return <div>Elapsed: {seconds}s</div>;
};
```

## Patterns de Communication

### 1. Signals Partagés (Recommandé)

```tsx
// État global partagé
const globalCount = signal(0);

const CounterDisplay: Pulse.Fn = () => {
  return <div>Count: {globalCount}</div>;
};

const CounterControls: Pulse.Fn = () => {
  return (
    <div>
      <button onClick={() => globalCount(globalCount() + 1)}>+</button>
      <button onClick={() => globalCount(globalCount() - 1)}>-</button>
    </div>
  );
};

const App: Pulse.Fn = () => {
  return (
    <div>
      <CounterDisplay />
      <CounterControls />
    </div>
  );
};
```

### 2. Callbacks via Props

```tsx
interface FormProps {
  onSubmit: (data: { email: string; message: string }) => void;
}

const ContactForm: Pulse.Fn<FormProps> = ({ onSubmit }) => {
  const email = signal('');
  const message = signal('');
  
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    onSubmit({
      email: email(),
      message: message()
    });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        value={email}
        onInput={(e) => email((e.target as HTMLInputElement).value)}
      />
      <textarea 
        value={message}
        onInput={(e) => message((e.target as HTMLTextAreaElement).value)}
      />
      <button type="submit">Envoyer</button>
    </form>
  );
};

// Utilisation
const App: Pulse.Fn = () => {
  const handleFormSubmit = (data) => {
    console.log('Form submitted:', data);
  };
  
  return <ContactForm onSubmit={handleFormSubmit} />;
};
```

## Exemple Complet : Todo List

```tsx
import { signal, computed } from 'pulse-framework';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp: Pulse.Fn = () => {
  const todos = signal<Todo[]>([]);
  const newTodoText = signal('');
  
  const remainingCount = computed(() => 
    todos().filter(t => !t.completed).length
  );
  
  const completedCount = computed(() => 
    todos().filter(t => t.completed).length
  );
  
  const addTodo = () => {
    const text = newTodoText().trim();
    if (text) {
      todos([...todos(), {
        id: Date.now(),
        text,
        completed: false
      }]);
      newTodoText('');
    }
  };
  
  const toggleTodo = (id: number) => {
    todos(todos().map(todo => 
      todo.id === id 
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };
  
  const removeTodo = (id: number) => {
    todos(todos().filter(todo => todo.id !== id));
  };
  
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      
      {/* Stats */}
      <div className="stats">
        <span>{remainingCount} restantes</span>
        <span>{completedCount} complétées</span>
      </div>
      
      {/* Input */}
      <div className="todo-input">
        <input
          type="text"
          value={newTodoText}
          onInput={(e) => newTodoText((e.target as HTMLInputElement).value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Nouvelle tâche..."
        />
        <button onClick={addTodo}>Ajouter</button>
      </div>
      
      {/* Liste */}
      <div className="todo-list">
        {computed(() => 
          todos().map(todo => (
            <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span>{todo.text}</span>
              <button onClick={() => removeTodo(todo.id)}>✕</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
```

## Composants Conditionnels Réactifs

### ⚠️ Pattern Critique : `Pulse.Fn` pour Composants Conditionnels

Quand vous créez des composants qui doivent se cacher/afficher dynamiquement en fonction d'une prop réactive, vous devez utiliser le pattern `Pulse.Fn` qui **retourne un `computed`** :

```tsx
// ❌ MAUVAIS - Ne fonctionne pas avec les props réactives
const Controls = Pulse.computed(() => {
  if (!showControls) return null;  // showControls est un signal, toujours truthy !
  
  return (
    <div>
      <button>Previous</button>
      <button>Next</button>
    </div>
  );
});

// ✅ BON - Pattern correct pour composants conditionnels
const Controls: Pulse.Fn = () =>
  Pulse.computed(() => {
    const showControlsValue = Pulse.isReactive(showControls) 
      ? showControls() 
      : showControls;
    
    if (!showControlsValue) return <></>;  // Retourner fragment vide, pas null !
    
    return (
      <div>
        <button>Previous</button>
        <button>Next</button>
      </div>
    );
  });

// Utilisation
<Controls />  // Se met à jour automatiquement quand showControls change
```

**Points clés :**
1. **`Pulse.Fn` retourne un `Pulse.computed()`** - pas directement du JSX
2. **Utiliser `Pulse.isReactive()`** pour vérifier si une prop est un signal/computed
3. **Retourner `<></>`** (fragment vide) au lieu de `null` pour les cas cachés
4. **Lire la valeur avec `()`** si c'est réactif : `showControls()`

### Vérifier les Props Réactives

```tsx
import { isReactive } from 'pulse-framework';

interface ComponentProps {
  visible?: boolean | Signal<boolean> | Computed<boolean>;
  data?: any | Signal<any>;
}

const ConditionalComponent: Pulse.Fn<ComponentProps> = ({ visible, data }) =>
  Pulse.computed(() => {
    // Extraire les valeurs réactives
    const isVisible = isReactive(visible) ? visible() : visible;
    const content = isReactive(data) ? data() : data;
    
    if (!isVisible) return <></>;
    
    return <div>{content}</div>;
  });
```

### Exemple Complet : Composant avec Contrôles Conditionnels

```tsx
interface CarouselProps {
  showControls?: Signal<boolean> | boolean;
  showPagination?: Signal<boolean> | boolean;
}

const Carousel: Pulse.Fn<CarouselProps> = ({ showControls, showPagination }) => {
  const currentSlide = signal(0);
  
  // Composant Controls conditionnel
  const Controls: Pulse.Fn = () =>
    Pulse.computed(() => {
      const visible = isReactive(showControls) ? showControls() : showControls;
      if (!visible) return <></>;
      
      return (
        <div className="controls">
          <button onClick={() => currentSlide(Math.max(0, currentSlide() - 1))}>
            Previous
          </button>
          <button onClick={() => currentSlide(currentSlide() + 1)}>
            Next
          </button>
        </div>
      );
    });
  
  // Composant Pagination conditionnel
  const Pagination: Pulse.Fn = () =>
    Pulse.computed(() => {
      const visible = isReactive(showPagination) ? showPagination() : showPagination;
      if (!visible) return <></>;
      
      return (
        <div className="pagination">
          <span>Slide {currentSlide() + 1}</span>
        </div>
      );
    });
  
  return (
    <div className="carousel">
      <div className="slides">
        {/* Slides content */}
      </div>
      <Controls />
      <Pagination />
    </div>
  );
};

// Utilisation avec signals réactifs
const showControlsSignal = signal(true);
const showPaginationSignal = signal(false);

<Carousel 
  showControls={showControlsSignal} 
  showPagination={showPaginationSignal} 
/>

// Changer dynamiquement
showControlsSignal(false);  // Les contrôles disparaissent automatiquement !
showPaginationSignal(true); // La pagination apparaît automatiquement !
```

### Pourquoi `<></>` et pas `null` ?

```tsx
// ❌ MAUVAIS - null peut causer des problèmes de réconciliation
const Component: Pulse.Fn = () =>
  Pulse.computed(() => {
    if (!visible()) return null;
    return <div>Content</div>;
  });

// ✅ BON - Fragment vide se réconcilie correctement
const Component: Pulse.Fn = () =>
  Pulse.computed(() => {
    if (!visible()) return <></>;
    return <div>Content</div>;
  });
```

Le fragment vide (`<></>`) permet à Pulse de gérer correctement la réconciliation DOM quand le composant passe de visible à caché et vice-versa.

## Listes et Rendu Conditionnel

### Listes Dynamiques

```tsx
const UserList: Pulse.Fn = () => {
  const users = signal([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ]);
  
  return (
    <ul>
      {computed(() => 
        users().map(user => (
          <li key={user.id}>{user.name}</li>
        ))
      )}
    </ul>
  );
};
```

### Rendu Conditionnel

```tsx
const LoginStatus: Pulse.Fn = () => {
  const isLoggedIn = signal(false);
  const username = signal('Guest');
  
  return (
    <div>
      {computed(() => 
        isLoggedIn() ? (
          <div>
            <p>Bienvenue, {username}!</p>
            <button onClick={() => isLoggedIn(false)}>Logout</button>
          </div>
        ) : (
          <div>
            <p>Veuillez vous connecter</p>
            <button onClick={() => {
              isLoggedIn(true);
              username('John Doe');
            }}>Login</button>
          </div>
        )
      )}
    </div>
  );
};
```

## Approche Programmatique avec `render()`

Pour des cas où vous avez besoin de créer des éléments de manière **programmatique** (boucles complexes, génération dynamique, logique métier), utilisez `render()` :

```typescript
import { render, signal } from 'pulse-framework';

function createDynamicList(itemCount: number) {
  const items = signal<string[]>([]);
  
  // Génération programmatique
  const list = render({
    tag: 'ul',
    children: computed(() => 
      items().map(item => render({
        tag: 'li',
        properties: { textContent: item }
      }))
    )
  });
  
  return list;
}
```

**Quand utiliser `render()` :**
- ✅ Génération dynamique complexe de composants
- ✅ Logique programmatique nécessitant des boucles/conditions avancées
- ✅ Intégration avec du code legacy
- ✅ Maximum de contrôle sur la structure DOM

**Quand utiliser JSX :**
- ✅ Composants UI (99% des cas)
- ✅ Structure déclarative claire
- ✅ Type-safety avec TypeScript
- ✅ Auto-complétion et IntelliSense

## Différences Clés avec React

| Aspect | Pulse | React |
|--------|-------|-------|
| **Virtual DOM** | ❌ Non, DOM réel | ✅ Oui |
| **Re-renders** | ❌ Pas de re-render | ✅ Re-render du composant |
| **State** | `signal()` | `useState()` |
| **Side-effects** | `effect()` | `useEffect()` |
| **Computed** | `computed()` | `useMemo()` |
| **Signals dans JSX** | `{count}` sans `()` | `{count}` |
| **Retour du composant** | `HTMLElement` réel | Description virtuelle |

### Migration depuis React

```tsx
// ❌ React
function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

// ✅ Pulse
const Counter: Pulse.Fn = () => {
  const count = signal(0);
  
  effect(() => {
    document.title = `Count: ${count()}`;
  });
  
  return <button onClick={() => count(count() + 1)}>{count}</button>;
};
```

**Points clés :**
1. Pas de hooks (`useState` → `signal`, `useEffect` → `effect`)
2. Pas de tableau de dépendances (tracking automatique)
3. Signals appelés avec `()` dans JSX
4. Pas de re-render (mises à jour granulaires automatiques)

## Best Practices

### 1. Nommage PascalCase

```tsx
// ✅ Bon
const UserCard: Pulse.Fn = () => { };

// ❌ Mauvais
const userCard: Pulse.Fn = () => { };
```

### 2. Signals Locaux vs Globaux

```tsx
// ✅ Signal local (état du composant)
const Counter: Pulse.Fn = () => {
  const count = signal(0); // Local
  return <div>{count}</div>;
};

// ✅ Signal global (état partagé)
const globalTheme = signal('dark');

const ThemeToggle: Pulse.Fn = () => {
  return (
    <button onClick={() => globalTheme(globalTheme() === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </button>
  );
};
```

### 3. Déstructuration des Props

```tsx
// ✅ Bon - lisible
const Button: Pulse.Fn<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

// ❌ Moins lisible
const Button: Pulse.Fn<ButtonProps> = (props) => {
  return <button onClick={props.onClick}>{props.label}</button>;
};
```

### 4. Mémorisation des Event Handlers

```tsx
// ✅ Optimal - fonction stable
const Form: Pulse.Fn = () => {
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    // ...
  };
  
  return <form onSubmit={handleSubmit}>...</form>;
};

// ⚠️ Acceptable mais moins optimal
const Form: Pulse.Fn = () => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      // ...
    }}>...</form>
  );
};
```

## Configuration TypeScript pour JSX

Dans votre `tsconfig.json` :

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "pulse-framework"
  }
}
```

Utilisez l'extension `.tsx` pour vos fichiers avec JSX :

```
src/
  ├── App.tsx        ← Composants JSX
  ├── Button.tsx
  └── main.ts
```

## Gestion de la Mémoire et Lifecycle DOM

### `bindEffectToElement()` - Éviter les Fuites Mémoire

Quand vous créez des effects dans des composants qui peuvent être dynamiquement ajoutés/retirés du DOM (modales, tooltips, éléments de liste, routes SPA), utilisez **`bindEffectToElement()`** pour un nettoyage automatique :

```tsx
import { bindEffectToElement } from 'pulse-framework';

const AutoPlayCarousel: Pulse.Fn = () => {
  const currentSlide = signal(0);
  const autoPlay = signal(true);
  
  // ❌ MAUVAIS - Effect global qui continue après suppression du composant
  effect(() => {
    if (!autoPlay()) return;
    
    const timer = setInterval(() => {
      currentSlide((currentSlide() + 1) % 3);
    }, 3000);
    
    return () => clearInterval(timer);
  });
  
  // ✅ BON - Effect lié au lifecycle de l'élément
  const carouselElement = (
    <div className="carousel">
      {/* Content */}
    </div>
  ) as HTMLElement;
  
  bindEffectToElement(carouselElement, () => {
    if (!autoPlay()) return;
    
    const timer = setInterval(() => {
      currentSlide((currentSlide() + 1) % 3);
    }, 3000);
    
    return () => clearInterval(timer);
  });
  
  return carouselElement;
};
```

**Comment ça marche :**
1. Utilise `WeakRef` pour tracker l'élément sans empêcher le garbage collection
2. Utilise `FinalizationRegistry` pour un nettoyage automatique quand l'élément est collecté
3. L'effect s'arrête automatiquement quand l'élément est supprimé du DOM

**Quand l'utiliser :**
- ✅ Composants créés/détruits dynamiquement (modales, tooltips, dropdowns)
- ✅ Items de liste qui peuvent être ajoutés/retirés
- ✅ Composants basés sur des routes (navigation SPA)
- ✅ Tout effect qui dépend de l'existence d'un élément DOM

**Quand NE PAS l'utiliser :**
- ❌ Effects au niveau de l'app (utiliser `effect()` normal)
- ❌ Effects non liés à des éléments DOM spécifiques
- ❌ Gestion d'état global

### Pattern avec Ref Handler

```tsx
const Component: Pulse.Fn = () => {
  let rootElement: HTMLElement | null = null;
  
  const handleRef = (el: HTMLElement | null) => {
    if (!el || rootElement) return;
    rootElement = el;
    
    // Lier les effects à l'élément
    bindEffectToElement(el, () => {
      // Effect 1 : auto-play
      if (autoPlay()) {
        const timer = setInterval(() => {
          // Logic
        }, interval);
        return () => clearInterval(timer);
      }
    });
    
    bindEffectToElement(el, () => {
      // Effect 2 : event listeners
      const handleResize = () => {
        // Logic
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    });
  };
  
  return (
    <div ref={handleRef}>
      {/* Content */}
    </div>
  );
};
```

## Helper `Pulse.isReactive()`

Pour vérifier si une valeur est un signal ou computed :

```tsx
import { isReactive, isSignal, isComputed } from 'pulse-framework';

// Vérifier si réactif (signal OU computed)
if (isReactive(value)) {
  const actualValue = value();  // Lire la valeur
}

// Vérifier spécifiquement signal
if (isSignal(value)) {
  value(newValue);  // Peut écrire
}

// Vérifier spécifiquement computed
if (isComputed(value)) {
  const result = value();  // Read-only
}

// Pattern pratique pour props
const getValue = (prop: any) => {
  return isReactive(prop) ? prop() : prop;
};
```

## Prochaine Étape

Découvrez les [Patterns Avancés](./04-advanced-patterns.md) pour créer des applications complexes avec Pulse Framework.