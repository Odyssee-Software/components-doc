# Pulse Framework

⚡ A **DOM-first**, fine-grained reactive framework for building UIs with JSX/TSX.

**"What You See Is What You Get"** — Your JSX components return real DOM elements, not virtual representations.

## Why Pulse?

- 🎯 **No Virtual DOM** — Direct DOM manipulation with surgical precision
- ⚡ **Fine-grained Reactivity** — Only update what changed, never re-render entire components
- 📦 **Tiny Bundle** — Minimal overhead, maximum performance
- 🔧 **Simple API** — Signals, computed values, effects — that's it
- 🎨 **JSX/TSX First** — Write declarative components with full TypeScript support
- 🚀 **Zero Magic** — Predictable behavior, easy to debug

## Installation

```bash
npm install pulse-framework
```

## Quick Start

### TypeScript Configuration

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "pulse-framework"
  }
}
```

### Your First Component

```tsx
import Pulse from "pulse-framework";

const Counter: Pulse.Fn = () => {
  const count = Pulse.signal(0);
  const doubled = Pulse.computed(() => count() * 2);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Doubled: {doubled}</p>
      <button onClick={() => count(count() + 1)}>Increment</button>
      <button onClick={() => count(count() - 1)}>Decrement</button>
    </div>
  );
};

// Mount to DOM
document.body.appendChild(<Counter />);
```

**That's it!** No `useState`, no `useEffect`, no dependency arrays, no re-renders.

## Core Concepts

### 1. Signals — Reactive State

Signals are reactive variables that automatically track their dependencies:

```tsx
const name = Pulse.signal("Alice");

// Read
console.log(name()); // "Alice"

// Write
name("Bob");
```

**In JSX:** Pass signals directly (without calling them):

```tsx
<p>Hello {name}</p>  {/* ✅ Correct — automatic binding */}
<p>Hello {name()}</p> {/* ❌ Wrong — breaks reactivity */}
```

**In logic:** Always call signals with `()`:

```tsx
<button onClick={() => name(name().toUpperCase())}>
  Uppercase
</button>
```

### 2. Computed — Derived Values

Computed values automatically recalculate when their dependencies change:

```tsx
const firstName = Pulse.signal("John");
const lastName = Pulse.signal("Doe");

// Automatically updates when firstName or lastName changes
const fullName = Pulse.computed(() => `${firstName()} ${lastName()}`);

// Use in JSX (without calling)
<p>{fullName}</p>
```

### 3. Effects — Side Effects

Effects run automatically when their dependencies change:

```tsx
const count = Pulse.signal(0);

Pulse.effect(() => {
  console.log("Count changed:", count());
  document.title = `Count: ${count()}`;
});

// Effect runs immediately and whenever count changes
count(5); // Console: "Count changed: 5"
```

### 4. Dynamic Lists

Wrap `.map()` in `computed()` for reactive lists:

```tsx
const TodoList: Pulse.Fn = () => {
  const todos = Pulse.signal([
    { id: 1, text: "Learn Pulse", done: false },
    { id: 2, text: "Build app", done: false }
  ]);

  return (
    <ul>
      {Pulse.computed(() =>
        todos().map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
          </li>
        ))
      )}
    </ul>
  );
};
```

## When to Use `()` vs Not

| Context | Syntax | Example | Why |
|---------|--------|---------|-----|
| **JSX display** | `{signal}` | `<p>{count}</p>` | Auto-binding |
| **JSX props** | `value={signal}` | `<input value={name} />` | Auto-binding |
| **Event handlers** | `signal()` | `onClick={() => count(count() + 1)}` | Read/write logic |
| **Computed** | `signal()` | `computed(() => count() * 2)` | Read to calculate |
| **Effects** | `signal()` | `effect(() => log(count()))` | Read to track |
| **Conditions** | `signal()` | `if (count() > 5)` | Read to test |

## Complete Example — Todo App

```tsx
import Pulse from "pulse-framework";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp: Pulse.Fn = () => {
  const todos = Pulse.signal<Todo[]>([]);
  const newText = Pulse.signal("");

  const remaining = Pulse.computed(() => 
    todos().filter(t => !t.completed).length
  );

  const addTodo = () => {
    if (newText().trim()) {
      todos([...todos(), {
        id: Date.now(),
        text: newText(),
        completed: false
      }]);
      newText("");
    }
  };

  const toggleTodo = (id: number) => {
    todos(todos().map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  return (
    <div>
      <h1>Todo List</h1>
      
      <div>
        <input
          value={newText}
          onInput={(e: Event) => newText((e.target as HTMLInputElement).value)}
          onKeyPress={(e: KeyboardEvent) => e.key === 'Enter' && addTodo()}
          placeholder="New todo..."
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <p>{remaining} remaining</p>

      <ul>
        {Pulse.computed(() =>
          todos().map(todo => (
            <li key={todo.id} className={todo.completed ? 'done' : ''}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              {todo.text}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

document.body.appendChild(<TodoApp />);
```

## Function Components — `Pulse.Fn`

Type your components for full TypeScript support:

```tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: Pulse.Fn<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {label}
    </button>
  );
};

// Usage
<Button label="Save" onClick={() => save()} variant="primary" />
```

## Fragments

Group elements without adding wrapper DOM nodes:

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

// Or explicit
import { Fragment } from 'pulse-framework';

<Fragment>
  <li>Item 1</li>
</Fragment>
```

## Global State

Share signals across components:

```tsx
// store.ts
export const userStore = {
  name: Pulse.signal("Guest"),
  isLoggedIn: Pulse.signal(false),
  login: (name: string) => {
    userStore.name(name);
    userStore.isLoggedIn(true);
  }
};

// Component.tsx
import { userStore } from './store';

const Header: Pulse.Fn = () => {
  return (
    <div>
      <p>Welcome, {userStore.name}!</p>
      <button onClick={() => userStore.login("Alice")}>Login</button>
    </div>
  );
};
```

## Comparison with React

| Feature | Pulse | React |
|---------|-------|-------|
| **Virtual DOM** | ❌ No — Real DOM | ✅ Yes |
| **Re-renders** | ❌ Never | ✅ Component re-renders |
| **State** | `signal()` | `useState()` |
| **Computed** | `computed()` | `useMemo()` |
| **Effects** | `effect()` | `useEffect()` |
| **Dependencies** | Auto-tracked | Manual `[deps]` |
| **JSX Syntax** | `{count}` | `{count}` |
| **Component Return** | Real `HTMLElement` | Virtual description |
| **Performance** | Surgical updates | Reconciliation diff |

## Documentation

### Guides

- **[Getting Started](./guides/01-getting-started.md)** — Installation and first steps
- **[Signals & Computed](./guides/02-signals-computed.md)** — Reactive primitives
- **[Components](./guides/03-components.md)** — Function components with `Pulse.Fn`
- **[JSX Usage Guide](./guides/06-jsx-usage.md)** — Complete JSX/TSX reference
- **[Advanced Patterns](./guides/04-advanced-patterns.md)** — Stores, forms, routing
- **[Debugging](./guides/07-debugging.md)** — Debug tools and tips
- **[Scheduler & Batching](./guides/08-scheduler-batching.md)** — Performance optimization

### API Reference

Complete API documentation is automatically generated from TypeScript definitions:

- **[API Documentation](./docs/api/index.md)** — Full API reference
- **[API Report](./docs/api-report/pulse-framework.api.md)** — API surface report

To regenerate API docs: `npm run build:docs`

## Examples

Check out the `pulse-sample-csr-jsx` directory for complete working examples:

```bash
cd pulse-sample-csr-jsx
npm install
npm run dev
```

## Building for Production

```bash
npm run build
```

Output is in `dist/`:
- `dist/index.js` — ESM bundle
- `dist/index.d.ts` — TypeScript declarations

## Philosophy

Pulse embraces **fine-grained reactivity** and **direct DOM manipulation**. Instead of re-rendering entire component trees and diffing virtual DOM, Pulse:

1. **Tracks dependencies** — Knows exactly which DOM nodes depend on which signals
2. **Updates surgically** — Changes only the specific text nodes, attributes, or elements that need updating
3. **No reconciliation** — No virtual DOM diff, no keys for optimization (though we support them), no re-renders

**Result:** Blazing fast updates with minimal overhead and predictable behavior.

## License

MIT © Odyssee Software

---

**Ready to build?** Start with the [Getting Started Guide](./guides/01-getting-started.md) →