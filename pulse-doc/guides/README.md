# Documentation Pulse Framework

## Guide de Démarrage Rapide

Pulse Framework est un micro-framework réactif **"DOM-first"** avec JSX moderne. Contrairement à React, Pulse ne repose pas sur un Virtual DOM : **vos composants JSX retournent directement des éléments DOM réels**.

### Installation

```bash
npm install pulse-framework
```

### Configuration TypeScript

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "pulse-framework"
  }
}
```

### Premier Exemple - JSX avec Function Components

```tsx
import { signal, computed } from 'pulse-framework';

const Counter: Pulse.Fn = () => {
  const count = signal(0);
  const doubled = computed(() => count() * 2);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Doubled: {doubled}</p>
      <button onClick={() => count(count() + 1)}>
        Increment
      </button>
    </div>
  );
};

// Montage direct dans le DOM
document.body.appendChild(<Counter />);
```

**"What You See Is What You Get"** : `<Counter />` retourne un vrai `HTMLElement`, pas une description virtuelle.

## 📚 Guides Complets

### Démarrage
- **[01 - Getting Started](./01-getting-started.md)** : Installation, premier composant JSX, concepts de base
- **[02 - Signals & Computed](./02-signals-computed.md)** : Réactivité fine-grained, computed values, dependencies

### Composants et JSX ⭐
- **[06 - JSX Usage](./06-jsx-usage.md)** : Guide complet JSX/TSX - **Approche recommandée**
- **[03 - Components](./03-components.md)** : Function Components avec `Pulse.Fn`, props, composition, lifecycle

### Développement Avancé
- **[04 - Advanced Patterns](./04-advanced-patterns.md)** : Patterns avancés, stores, performance
- **[07 - Debugging](./07-debugging.md)** : Outils de debug, visualisation du graphe réactif
- **[08 - Scheduler & Batching](./08-scheduler-batching.md)** : Optimisation des updates, batching automatique ⚡
- **[09 - Micro-DSL](./09-micro-dsl.md)** : Bindings déclaratifs HTML-first (pour SSR futur) 🎯

## 🎯 Par Niveau

### Débutant
1. Getting Started
2. Signals & Computed
3. JSX Usage ⭐
4. Components

### Intermédiaire
5. Advanced Patterns
6. Scheduler & Batching

### Avancé
7. Debugging
8. Micro-DSL (SSR futur)

## 🔍 Par Use Case

**Je veux...**
- Démarrer avec Pulse → [01 - Getting Started](./01-getting-started.md)
- Comprendre la réactivité → [02 - Signals & Computed](./02-signals-computed.md)
- Créer des composants UI → [06 - JSX Usage](./06-jsx-usage.md) ⭐
- Maîtriser les composants → [03 - Components](./03-components.md)
- Migrer depuis React → [06 - JSX Usage](./06-jsx-usage.md#différences-avec-react)
- Optimiser les performances → [04 - Advanced Patterns](./04-advanced-patterns.md) + [08 - Scheduler](./08-scheduler-batching.md)
- Débugger mon app → [07 - Debugging](./07-debugging.md)
- Préparer du SSR → [09 - Micro-DSL](./09-micro-dsl.md)

## 📖 Ordre de Lecture Recommandé

```
01 Getting Started (premiers pas)
    ↓
02 Signals & Computed (réactivité)
    ↓
06 JSX Usage ⭐ (approche recommandée)
    ↓
03 Components (patterns avancés)
    ↓
04 Advanced Patterns (stores, optimisations)
    ↓
08 Scheduler & Batching (performance)
    ↓
07 Debugging (outils de debug)
    ↓
09 Micro-DSL (SSR futur - optionnel)
```

## 💡 Tips de Navigation

- Chaque guide est **standalone** : lisez dans l'ordre qui vous convient
- Les **exemples** sont testés et copiables-collables
- Les guides incluent des **comparaisons** avec DOM vanilla et React
- **06 - JSX Usage** : **Guide principal recommandé** pour créer des composants
- **03 - Components** : Patterns avancés, composition, communication
- **08 - Scheduler** : Essentiel pour optimiser les apps avec beaucoup de mises à jour
- **09 - Micro-DSL** : Pour SSR futur (pas le focus principal)
- Consultez **07 - Debugging** dès que vous rencontrez un problème

Bon apprentissage ! 🚀

## 🎯 Philosophie Pulse

**Pulse = JSX moderne + DOM réel + Réactivité fine-grained**

- ✅ **Pas de Virtual DOM** : Manipulation directe du DOM réel
- ✅ **JSX First** : Approche déclarative moderne avec `Pulse.Fn`
- ✅ **"What You See Is What You Get"** : Les composants retournent des vrais `HTMLElement`
- ✅ **Réactivité fine** : Mises à jour granulaires automatiques (pas de re-render)
- ✅ **TypeScript** : Type-safety complète avec auto-complétion
- ✅ **Performance** : Updates ultra-rapides sans diffing
- ✅ **Simplicité** : Pas de hooks, pas de complexité cachée

## Guides Détaillés

1. **[Guide de Démarrage](./01-getting-started.md)**
   - Installation et configuration TypeScript
   - Premier composant JSX
   - Concepts de base (signals, computed, effects)
   - Comparaisons avec DOM vanilla

2. **[Signals et Computed](./02-signals-computed.md)**
   - Variables réactives avec les signals
   - Valeurs calculées automatiques
   - Tracking automatique des dépendances
   - Exemples pratiques (calculatrice, validation)

3. **[JSX Usage](./06-jsx-usage.md)** ⭐ **RECOMMANDÉ**
   - Configuration TypeScript pour JSX
   - Type `Pulse.Fn` pour Function Components
   - Syntaxe JSX complète
   - Props, children, composition
   - Différences avec React
   - Best practices

4. **[Composants](./03-components.md)**
   - Function Components avec `Pulse.Fn`
   - Patterns de composition avancés
   - Communication entre composants (signals partagés, callbacks)
   - Lifecycle avec effects
   - Exemples complets (TodoList)

5. **[Patterns Avancés](./04-advanced-patterns.md)**
   - Gestion d'état global (Stores)
   - Formulaires avec validation
   - Listes dynamiques et rendu conditionnel
   - Performance et optimisations

6. **[Debug du Graphe Réactif](./07-debugging.md)** 🔍
   - Activation du mode debug
   - Visualisation du graphe
   - Traçage des propagations
   - Outils de diagnostic

7. **[Scheduler & Batching](./08-scheduler-batching.md)** ⚡
   - Optimisation des updates
   - Batching automatique
   - Modes de scheduling
   - Performance

8. **[Micro-DSL](./09-micro-dsl.md)** 🎯
   - Bindings déclaratifs HTML-first
   - Pour SSR futur (pas le focus principal)

## API Référence

### Core Functions

#### `signal(initialValue)`
Crée une variable réactive.

```javascript
const count = signal(0);
console.log(count()); // lecture: 0
count(5); // écriture: 5
```

#### `computed(fn)`
Crée une valeur calculée automatiquement.

```javascript
const doubled = computed(() => count() * 2);
// Se met à jour automatiquement quand count change
```

#### `effect(fn)`
Exécute une fonction à chaque changement de ses dépendances.

```javascript
effect(() => {
  console.log('Count changed:', count());
});
```

#### `render(template)`
Crée des éléments DOM de manière programmatique (pour cas spécifiques).

```javascript
const element = render({
  tag: 'div',
  attributes: { class: 'container' },
  properties: { textContent: signal('Hello') },
  events: { click: () => console.log('clicked') },
  children: [/* nested templates */]
});

document.body.appendChild(element);
```

**Note** : Pour créer des composants UI, préférez JSX avec `Pulse.Fn`.

### Template API

```typescript
interface RenderTemplate {
  tag: string
  attributes?: Record<string, string | Signal | Computed>
  properties?: Record<string, any | Signal | Computed>
  children?: (RenderTemplate | string | Signal | Computed | HTMLElement)[]
  events?: Record<string, (event: Event) => void>
}
```

### Helper Functions

#### `fragment(...children)`
Crée un fragment documentaire pour grouper des éléments.

```javascript
const list = fragment(
  h('li', {}, 'Item 1'),
  h('li', {}, 'Item 2')
);
```

## Philosophie "DOM-First"

Pulse Framework adopte une approche "DOM-first" qui signifie :

1. **Pas de Virtual DOM** - Les composants JSX retournent du DOM réel
2. **"What You See Is What You Get"** - `<Component />` = vrai `HTMLElement`
3. **No Diff, Only Sync** - Synchronisation automatique sans réconciliation
4. **Réactivité Fine-Grained** - Mises à jour granulaires (1 nœud, pas tout le composant)
5. **JSX Moderne** - Syntaxe déclarative avec la puissance du DOM réel

## Comparaison avec d'autres Frameworks

| Feature | Pulse | React | Vanilla DOM |
|---------|-------|-------|-------------|
| **JSX Support** | ✅ Oui | ✅ Oui | ❌ Non |
| **Virtual DOM** | ❌ Non (DOM réel) | ✅ Oui | ❌ Non |
| **Taille** | ~5KB | ~40KB | 0KB |
| **Réactivité** | Fine-grained auto | Composant re-render | Manuelle |
| **State** | `signal()` | `useState()` | Variables |
| **Computed** | `computed()` | `useMemo()` | Manuel |
| **Learning Curve** | Faible | Moyenne-Élevée | Aucune |
| **Performance** | Excellente | Bonne | Variable |

## Exemples d'Applications

### Application Todo avec JSX

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
    todos(todos().map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };
  
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      
      <div className="input">
        <input
          value={newTodoText}
          onInput={(e) => newTodoText((e.target as HTMLInputElement).value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Nouvelle tâche..."
        />
        <button onClick={addTodo}>Ajouter</button>
      </div>
      
      <p>{computed(() => `${completedCount()} / ${todos().length} terminées`)}</p>
      
      <ul>
        {computed(() => 
          todos().map(todo => (
            <li key={todo.id} className={todo.completed ? 'completed' : ''}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span>{todo.text}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

document.body.appendChild(<TodoApp />);
```

### Exemple Counter Simple

```tsx
const Counter: Pulse.Fn = () => {
  const count = signal(0);
  const doubled = computed(() => count() * 2);
  
  return (
    <div>
      <p>Count: {count}</p>
      <p>Doubled: {doubled}</p>
      <button onClick={() => count(count() + 1)}>+</button>
      <button onClick={() => count(count() - 1)}>-</button>
    </div>
  );
};
```

## Performance et Optimisations

Pulse Framework est optimisé par design :

- **Pas de Virtual DOM** : Pas de diffing, pas de réconciliation
- **Mises à jour granulaires** : Seul le nœud DOM qui change est mis à jour (pas tout le composant)
- **Pas de re-render** : Les composants ne "re-render" jamais, seules les valeurs réactives changent
- **Gestion mémoire automatique** : Nettoyage automatique des listeners et effects
- **WeakMap et WeakRef** : Évite les fuites mémoire
- **Batching intelligent** : Optimisation automatique des updates multiples

## Support et Communauté

- **GitHub** : [Odyssee-Software/pulse-framework](https://github.com/Odyssee-Software/pulse-framework)
- **Documentation** : Guides complets dans `/guides`
- **Exemples** : Applications de démonstration dans `/examples`

Pulse Framework - "No diff, only sync" 🚀