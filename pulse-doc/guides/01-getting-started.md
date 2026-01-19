# Guide de Démarrage - Pulse Framework

## Bienvenue dans Pulse Framework

Pulse Framework est un micro-framework réactif **"DOM-first"** avec JSX moderne. Contrairement à React, Pulse ne repose pas sur un Virtual DOM : **vos composants JSX retournent directement des éléments DOM réels**.

### "What You See Is What You Get"

Quand vous écrivez `<MyComponent />`, vous obtenez immédiatement un vrai `HTMLElement` ou `DocumentFragment` :

```tsx
const MyComponent: Pulse.Fn = () => {
  return <div>Hello World</div>;
};

// <MyComponent /> retourne un vrai HTMLDivElement
const element = <MyComponent />;
document.body.appendChild(element); // Montage direct !
```

**Pas de Virtual DOM, pas de réconciliation, pas de re-render** : vous manipulez du DOM réel avec la puissance de la réactivité fine-grained.

## Installation

```bash
npm install pulse-framework
```

## Configuration TypeScript

Pour utiliser JSX avec Pulse, configurez votre `tsconfig.json` :

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "pulse-framework",
    "types": ["pulse-framework"]
  }
}
```

Utilisez l'extension `.tsx` pour vos fichiers avec JSX :

```
src/
  ├── App.tsx          ← Composants JSX
  ├── Counter.tsx
  └── main.ts
```

## Premier Composant : Counter

### Comparaison avec DOM Vanilla

Commençons par voir la différence entre DOM vanilla et Pulse :

#### DOM Vanilla (50+ lignes, maintenance difficile)

```javascript
// État
let count = 0;

// Créer les éléments
const container = document.createElement('div');
const display = document.createElement('p');
const doubledDisplay = document.createElement('p');
const incrementBtn = document.createElement('button');
const decrementBtn = document.createElement('button');

incrementBtn.textContent = '+';
decrementBtn.textContent = '-';

// Fonction de mise à jour manuelle
function updateDisplay() {
  display.textContent = `Count: ${count}`;
  doubledDisplay.textContent = `Doubled: ${count * 2}`;
  // Oubli facile ! Et si count change ailleurs ?
}

// Event listeners
incrementBtn.addEventListener('click', () => {
  count++;
  updateDisplay(); // Obligé de penser à ça !
});

decrementBtn.addEventListener('click', () => {
  count--;
  updateDisplay(); // À chaque fois !
});

// Assembler
container.appendChild(display);
container.appendChild(doubledDisplay);
container.appendChild(incrementBtn);
container.appendChild(decrementBtn);

updateDisplay(); // N'oubliez pas l'initialisation !

document.body.appendChild(container);
```

**Problèmes** :
- ❌ Synchronisation manuelle fastidieuse
- ❌ Oublis faciles (`updateDisplay()` partout)
- ❌ Code verbeux et répétitif
- ❌ Difficile à maintenir et à tester
- ❌ Risque de bugs (état désynchronisé)

#### Pulse Framework avec JSX (15 lignes, maintenance facile)

```tsx
import { signal, computed } from 'pulse-framework';

const Counter: Pulse.Fn = () => {
  // État réactif
  const count = signal(0);
  const doubled = computed(() => count() * 2);

  // Rendu déclaratif
  return (
    <div>
      <p>Count: {count}</p>
      <p>Doubled: {doubled}</p>
      <button onClick={() => count(count() + 1)}>+</button>
      <button onClick={() => count(count() - 1)}>-</button>
    </div>
  );
};

document.body.appendChild(<Counter />);
```

**Avantages** :
- ✅ Synchronisation automatique (pas de `updateDisplay()` !)
- ✅ Code concis et lisible
- ✅ Impossible d'oublier de mettre à jour
- ✅ Facile à maintenir et tester
- ✅ Type-safety avec TypeScript

## Concepts Clés

### 1. Signals : État Réactif

Les signals sont des variables réactives qui notifient automatiquement leurs dépendances :

```tsx
import { signal } from 'pulse-framework';

const count = signal(0);        // Créer un signal
console.log(count());           // Lire avec ()
count(5);                       // Écrire avec ()
```

**Dans JSX pour l'affichage, ne PAS appeler avec `()`** :

```tsx
const Greeting: Pulse.Fn = () => {
  const name = signal('Alice');
  
  return (
    <div>
      {/* ✅ CORRECT - Sans () dans le JSX */}
      <p>Hello {name}!</p>
      
      {/* ❌ INCORRECT - Ne pas appeler avec () */}
      <p>Hello {name()}!</p>
      
      {/* ✅ CORRECT - Avec () dans les event handlers */}
      <button onClick={() => name('Bob')}>Change Name</button>
    </div>
  );
};
```

### 2. Computed : Valeurs Calculées

Les computed se recalculent automatiquement quand leurs dépendances changent :

```tsx
import { signal, computed } from 'pulse-framework';

const Calculator: Pulse.Fn = () => {
  const a = signal(5);
  const b = signal(10);
  
  // Se recalcule automatiquement quand a ou b change
  const sum = computed(() => a() + b());
  const product = computed(() => a() * b());
  
  return (
    <div>
      <p>Sum: {sum}</p>
      <p>Product: {product}</p>
      <input 
        type="number" 
        value={a}
        onInput={(e) => a(Number((e.target as HTMLInputElement).value))}
      />
      <input 
        type="number" 
        value={b}
        onInput={(e) => b(Number((e.target as HTMLInputElement).value))}
      />
    </div>
  );
};
```

### 3. Function Components avec `Pulse.Fn`

`Pulse.Fn` est le type TypeScript pour les Function Components :

```tsx
// Sans props
const SimpleComponent: Pulse.Fn = () => {
  return <div>Hello</div>;
};

// Avec props typées
interface UserProps {
  name: string;
  age: number;
}

const UserCard: Pulse.Fn<UserProps> = ({ name, age }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
};

// Utilisation
<UserCard name="Alice" age={25} />
```

### 4. Effects : Side-Effects

Les effects s'exécutent automatiquement quand leurs dépendances changent :

```tsx
import { signal, effect } from 'pulse-framework';

const Logger: Pulse.Fn = () => {
  const count = signal(0);
  
  // S'exécute à chaque changement de count
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

## Exemple Progressif : Todo List

Construisons une Todo List étape par étape pour comprendre les concepts.

### Étape 1 : Structure de Base

```tsx
import { signal } from 'pulse-framework';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp: Pulse.Fn = () => {
  const todos = signal<Todo[]>([]);
  const newTodoText = signal('');
  
  return (
    <div>
      <h1>Todo List</h1>
      <input 
        value={newTodoText}
        onInput={(e) => newTodoText((e.target as HTMLInputElement).value)}
        placeholder="Nouvelle tâche..."
      />
    </div>
  );
};
```

### Étape 2 : Ajouter des Todos

```tsx
const TodoApp: Pulse.Fn = () => {
  const todos = signal<Todo[]>([]);
  const newTodoText = signal('');
  
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
  
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input 
          value={newTodoText}
          onInput={(e) => newTodoText((e.target as HTMLInputElement).value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Nouvelle tâche..."
        />
        <button onClick={addTodo}>Ajouter</button>
      </div>
    </div>
  );
};
```

### Étape 3 : Afficher la Liste (Réactive)

```tsx
import { signal, computed } from 'pulse-framework';

const TodoApp: Pulse.Fn = () => {
  const todos = signal<Todo[]>([]);
  const newTodoText = signal('');
  
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
  
  return (
    <div>
      <h1>Todo List</h1>
      
      <div>
        <input 
          value={newTodoText}
          onInput={(e) => newTodoText((e.target as HTMLInputElement).value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Nouvelle tâche..."
        />
        <button onClick={addTodo}>Ajouter</button>
      </div>
      
      {/* Liste réactive : se met à jour automatiquement */}
      <ul>
        {computed(() => 
          todos().map(todo => (
            <li key={todo.id}>
              {todo.text}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
```

**Point clé** : Wrap le `.map()` dans `computed()` pour que la liste se régénère automatiquement quand `todos` change.

### Étape 4 : Toggle et Statistiques

```tsx
const TodoApp: Pulse.Fn = () => {
  const todos = signal<Todo[]>([]);
  const newTodoText = signal('');
  
  // Computed pour les statistiques
  const completedCount = computed(() => 
    todos().filter(t => t.completed).length
  );
  
  const remainingCount = computed(() => 
    todos().filter(t => !t.completed).length
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
    todos(todos().map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };
  
  const removeTodo = (id: number) => {
    todos(todos().filter(t => t.id !== id));
  };
  
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      
      {/* Statistiques réactives */}
      <div className="stats">
        <span>{remainingCount} restantes</span>
        <span>{completedCount} complétées</span>
      </div>
      
      <div className="input">
        <input 
          value={newTodoText}
          onInput={(e) => newTodoText((e.target as HTMLInputElement).value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Nouvelle tâche..."
        />
        <button onClick={addTodo}>Ajouter</button>
      </div>
      
      <ul>
        {computed(() => 
          todos().map(todo => (
            <li 
              key={todo.id} 
              className={todo.completed ? 'completed' : ''}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span>{todo.text}</span>
              <button onClick={() => removeTodo(todo.id)}>✕</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

document.body.appendChild(<TodoApp />);
```

## Comparaison : Pulse vs React

Si vous venez de React, voici les principales différences :

```tsx
// ❌ React
import { useState, useEffect, useMemo } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const doubled = useMemo(() => count * 2, [count]);
  
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  
  return (
    <div>
      <p>{count}</p>
      <p>{doubled}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

// ✅ Pulse
import { signal, computed, effect } from 'pulse-framework';

const Counter: Pulse.Fn = () => {
  const count = signal(0);
  const doubled = computed(() => count() * 2);
  
  effect(() => {
    document.title = `Count: ${count()}`;
  });
  
  return (
    <div>
      <p>{count}</p>
      <p>{doubled}</p>
      <button onClick={() => count(count() + 1)}>+</button>
    </div>
  );
};
```

**Différences clés** :

| Aspect | Pulse | React |
|--------|-------|-------|
| **Virtual DOM** | ❌ Non (DOM réel) | ✅ Oui |
| **Re-renders** | ❌ Non | ✅ Oui (composant entier) |
| **State** | `signal()` | `useState()` |
| **Computed** | `computed()` | `useMemo()` |
| **Effects** | `effect()` | `useEffect()` |
| **Dependencies** | Auto-tracking | Manuel `[deps]` |
| **Signals dans JSX** | `{count}` sans `()` | `{count}` |
| **Retour** | `HTMLElement` réel | Description VDOM |

## Approche Programmatique avec `render()`

Pour des cas spécifiques où vous avez besoin de créer des éléments de manière **programmatique** (génération dynamique complexe, intégration legacy), Pulse offre `render()` :

```typescript
import { signal, render } from 'pulse-framework';

const count = signal(0);

const counter = render({
  tag: 'div',
  children: [
    {
      tag: 'p',
      properties: { textContent: count }
    },
    {
      tag: 'button',
      properties: { textContent: '+' },
      events: { click: () => count(count() + 1) }
    }
  ]
});

document.body.appendChild(counter);
```

**Quand utiliser `render()` :**
- ✅ Génération programmatique complexe
- ✅ Intégration avec code legacy
- ✅ Maximum de contrôle sur la structure DOM

**Quand utiliser JSX (recommandé) :**
- ✅ Composants UI (99% des cas)
- ✅ Structure déclarative claire
- ✅ Type-safety avec TypeScript
- ✅ Auto-complétion IDE

## Avantages de Pulse Framework

### 1. **Synchronisation Automatique**
- ❌ DOM vanilla : Vous devez manuellement mettre à jour chaque élément
- ✅ Pulse : Les changements se propagent automatiquement

### 2. **Moins d'Erreurs**
- ❌ DOM vanilla : Oubli fréquent des fonctions de mise à jour
- ✅ Pulse : Impossible d'oublier, c'est automatique

### 3. **Code Maintenable**
- ❌ DOM vanilla : Code éparpillé, logique mélangée
- ✅ Pulse : Structure claire, séparation des responsabilités

### 4. **Performance**
- ❌ DOM vanilla : Updates non optimisés
- ❌ React : Re-render de composants entiers
- ✅ Pulse : Updates granulaires (1 nœud DOM)

### 5. **Developer Experience**
- ✅ JSX moderne et familier
- ✅ Type-safety TypeScript complète
- ✅ Auto-complétion et IntelliSense
- ✅ Pas de hooks compliqués
- ✅ Pas de règles de dépendances

## Récap des Concepts

```tsx
import { signal, computed, effect } from 'pulse-framework';

const Example: Pulse.Fn = () => {
  // 1. Signal : État réactif
  const count = signal(0);
  
  // 2. Computed : Valeur calculée automatique
  const doubled = computed(() => count() * 2);
  const isEven = computed(() => count() % 2 === 0);
  
  // 3. Effect : Side-effect automatique
  effect(() => {
    console.log('Count changed:', count());
  });
  
  // 4. JSX : Rendu déclaratif
  return (
    <div>
      <p>Count: {count}</p>
      <p>Doubled: {doubled}</p>
      <p>Is Even: {computed(() => isEven() ? 'Yes' : 'No')}</p>
      <button onClick={() => count(count() + 1)}>Increment</button>
    </div>
  );
};
```

**Points clés à retenir** :
1. Les signals se lisent/écrivent avec `()`
2. Les computed se recalculent automatiquement
3. Les effects s'exécutent automatiquement
4. Dans JSX pour l'affichage, ne PAS appeler les signals avec `()` (binding automatique)
5. Pas de Virtual DOM, pas de re-render

## Prochaines Étapes

Maintenant que vous maîtrisez les bases, continuez avec :

1. **[Signals et Computed](./02-signals-computed.md)** : Approfondissez la réactivité
2. **[JSX Usage](./06-jsx-usage.md)** : Guide complet JSX - patterns avancés
3. **[Components](./03-components.md)** : Composition, communication, lifecycle
4. **[Advanced Patterns](./04-advanced-patterns.md)** : Stores, formulaires, optimisations

Bienvenue dans Pulse Framework ! 🚀