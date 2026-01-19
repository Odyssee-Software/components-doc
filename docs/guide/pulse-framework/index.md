---
title: Pulse Framework
description: A fine-grained reactive framework for building UIs with JSX/TSX
---

# Pulse Framework

⚡ A **DOM-first**, fine-grained reactive framework for building UIs with JSX/TSX.

## What is Pulse Framework?

Pulse Framework is a lightweight, reactive JavaScript framework that powers Odyssee Components. Unlike React or other Virtual DOM frameworks, Pulse takes a **DOM-first** approach where your JSX components return **real DOM elements**, not virtual representations.

::: tip "What You See Is What You Get"
When you write `<MyComponent />`, you get an actual `HTMLElement` or `DocumentFragment` immediately. No virtual DOM, no reconciliation, no re-renders.
:::

## Why Pulse?

- 🎯 **No Virtual DOM** — Direct DOM manipulation with surgical precision
- ⚡ **Fine-grained Reactivity** — Only update what changed, never re-render entire components
- 📦 **Tiny Bundle** — Minimal overhead, maximum performance (~5KB)
- 🔧 **Simple API** — Signals, computed values, effects — that's it
- 🎨 **JSX/TSX First** — Write declarative components with full TypeScript support
- 🚀 **Zero Magic** — Predictable behavior, easy to debug
- 🔥 **No Hooks** — No rules of hooks, no dependency arrays, no `useState`

## Quick Example

```tsx
import Pulse from 'pulse-framework';

const Counter: Pulse.Fn = () => {
  const count = Pulse.signal(0);
  const doubled = Pulse.computed(() => count() * 2);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Doubled: {doubled}</p>
      <button onClick={() => count(count() + 1)}>Increment</button>
    </div>
  );
};

// Mount to DOM - it's a real HTMLElement!
document.body.appendChild(<Counter />);
```

**That's it!** No `useState`, no `useEffect`, no dependency arrays, no re-renders. The DOM updates automatically when signals change.

## Core Concepts

### Signals - Reactive State

Signals are reactive variables that automatically notify their dependents:

```tsx
const name = Pulse.signal('Alice');

// Read with ()
console.log(name()); // "Alice"

// Write with ()
name('Bob');

// In JSX - DON'T call with ()
<p>Hello {name}</p>  // ✅ Correct - automatic binding
<p>Hello {name()}</p> // ❌ Wrong - breaks reactivity
```

### Computed - Derived Values

Computed values automatically recalculate when dependencies change:

```tsx
const firstName = Pulse.signal('John');
const lastName = Pulse.signal('Doe');

// Auto-updates when firstName or lastName changes
const fullName = Pulse.computed(() => `${firstName()} ${lastName()}`);

<p>{fullName}</p> // Always in sync
```

### Effects - Side Effects

Effects run automatically when their dependencies change:

```tsx
const count = Pulse.signal(0);

Pulse.effect(() => {
  console.log('Count changed:', count());
  document.title = `Count: ${count()}`;
});

count(5); // Effect runs automatically
```

## How It Works

Pulse uses **fine-grained reactivity** instead of component re-renders:

1. **Signals track dependencies** — Pulse knows exactly which DOM nodes depend on which signals
2. **Updates are surgical** — Only the specific text nodes, attributes, or elements that need updating are changed
3. **No reconciliation** — No virtual DOM diff, no key optimization needed (though we support keys)

**Result:** Blazing fast updates with minimal overhead and predictable behavior.

## Comparison with React

| Feature | Pulse | React |
|---------|-------|-------|
| **Virtual DOM** | ❌ No — Real DOM | ✅ Yes |
| **Re-renders** | ❌ Never | ✅ Component re-renders |
| **State** | `signal()` | `useState()` |
| **Computed** | `computed()` | `useMemo()` |
| **Effects** | `effect()` | `useEffect()` |
| **Dependencies** | Auto-tracked | Manual `[deps]` |
| **JSX Syntax** | `{signal}` no `()` | `{state}` |
| **Component Return** | Real `HTMLElement` | Virtual description |
| **Performance** | Surgical updates | Reconciliation diff |

## When to Use Pulse

Pulse is ideal for:

- ✅ **Building component libraries** (like Odyssee Components)
- ✅ **High-performance UIs** with frequent updates
- ✅ **Direct DOM manipulation** requirements
- ✅ **Lightweight applications** where bundle size matters
- ✅ **Developers who want simplicity** without hooks complexity

Pulse may not be ideal for:

- ❌ Server-side rendering (SSR) - currently limited support
- ❌ React ecosystem integration (though you can wrap Pulse components)
- ❌ Teams heavily invested in React patterns

## Learn More

Explore the following guides to master Pulse Framework:

### Getting Started

- **[Reactivity Guide](/guide/pulse-framework/reactivity)** — Signals, computed, and effects in depth
- **[Components Guide](/guide/pulse-framework/components)** — Building components with JSX and `Pulse.Fn`
- **[Advanced Patterns](/guide/pulse-framework/advanced)** — Stores, routing, forms, and more
- **[React Comparison](/guide/pulse-framework/comparison)** — Detailed comparison with React

### Examples

```tsx
// Simple Counter
const Counter: Pulse.Fn = () => {
  const count = Pulse.signal(0);
  return (
    <button onClick={() => count(count() + 1)}>
      Count: {count}
    </button>
  );
};

// Form with Validation
const LoginForm: Pulse.Fn = () => {
  const email = Pulse.signal('');
  const password = Pulse.signal('');
  
  const isValid = Pulse.computed(() => 
    email().includes('@') && password().length >= 8
  );
  
  return (
    <form>
      <input type="email" value={email} 
        onInput={(e) => email((e.target as HTMLInputElement).value)} />
      <input type="password" value={password}
        onInput={(e) => password((e.target as HTMLInputElement).value)} />
      <button disabled={Pulse.computed(() => !isValid())}>
        Sign In
      </button>
    </form>
  );
};

// Dynamic List
const TodoList: Pulse.Fn = () => {
  const todos = Pulse.signal([
    { id: 1, text: 'Learn Pulse', done: false }
  ]);
  
  return (
    <ul>
      {Pulse.computed(() =>
        todos().map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))
      )}
    </ul>
  );
};
```

## Philosophy

Pulse embraces **simplicity and directness**:

- **No abstraction layers** — Work with real DOM elements
- **No magic** — Behavior is predictable and debuggable
- **No complex rules** — No rules of hooks, no stale closures
- **No performance cliffs** — Fine-grained updates scale linearly

**"What You See Is What You Get"** — Your code is straightforward, your mental model is simple, and your application is fast.

## Installation

Pulse Framework is included with Odyssee Components. If you're using Odyssee Components, you already have Pulse!

```bash
npm install @odyssee/components
```

For standalone usage:

```bash
npm install pulse-framework
```

## TypeScript Configuration

Configure your `tsconfig.json` for JSX support:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "pulse-framework"
  }
}
```

## Next Steps

Ready to dive deeper?

1. **[Reactivity Guide](/guide/pulse-framework/reactivity)** — Master signals and computed values
2. **[Components Guide](/guide/pulse-framework/components)** — Build reusable components
3. **[Browse Components](/components/button)** — See Pulse in action with Odyssee Components

---

**Happy Building! 🚀**