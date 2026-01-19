---
title: Pulse vs React
description: Detailed comparison between Pulse Framework and React
---

# Pulse vs React Comparison

A comprehensive comparison to help you understand the key differences between Pulse Framework and React.

## Philosophy

### React
- **Virtual DOM** — Creates a virtual representation of the UI and diffs it on every update
- **Component Re-renders** — Components re-execute entirely when state changes
- **Declarative** — You describe what the UI should look like
- **Reconciliation** — Compares virtual trees to determine what changed

### Pulse
- **Real DOM** — Works directly with actual DOM elements
- **Fine-grained Updates** — Only the specific nodes that changed are updated
- **Declarative** — You also describe what the UI should look like
- **No Reconciliation** — Signals know exactly what to update

## Core Concepts Comparison

| Concept | React | Pulse |
|---------|-------|-------|
| **State** | `useState()` | `signal()` |
| **Derived State** | `useMemo()` | `computed()` |
| **Side Effects** | `useEffect()` | `effect()` |
| **Refs** | `useRef()` | Direct DOM access |
| **Context** | `useContext()` | Shared signals |
| **Callbacks** | `useCallback()` | Regular functions |
| **Component Type** | Function/Class | `Pulse.Fn` |

## State Management

### React

```tsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

**Characteristics:**
- Uses `useState` hook
- State updates trigger component re-render
- Entire component function re-executes
- New JSX is created and reconciled

### Pulse

```tsx
const Counter: Pulse.Fn = () => {
  const count = Pulse.signal(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => count(count() + 1)}>+</button>
    </div>
  );
};
```

**Characteristics:**
- Uses `signal()`
- Component function only runs once
- Only the text node updates
- No reconciliation needed

## Derived State

### React

```tsx
import { useState, useMemo } from 'react';

function Calculator() {
  const [a, setA] = useState(5);
  const [b, setB] = useState(10);
  
  // Must manually specify dependencies
  const sum = useMemo(() => a + b, [a, b]);
  const product = useMemo(() => a * b, [a, b]);
  
  return (
    <div>
      <p>Sum: {sum}</p>
      <p>Product: {product}</p>
    </div>
  );
}
```

**Issues:**
- Manual dependency arrays
- Easy to forget dependencies (stale closures)
- ESLint rules needed to catch mistakes

### Pulse

```tsx
const Calculator: Pulse.Fn = () => {
  const a = Pulse.signal(5);
  const b = Pulse.signal(10);
  
  // Automatically tracks dependencies
  const sum = Pulse.computed(() => a() + b());
  const product = Pulse.computed(() => a() * b());
  
  return (
    <div>
      <p>Sum: {sum}</p>
      <p>Product: {product}</p>
    </div>
  );
};
```

**Benefits:**
- Automatic dependency tracking
- No dependency arrays
- No stale closure issues

## Side Effects

### React

```tsx
import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  
  useEffect(() => {
    if (!isRunning) return;
    
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [isRunning]); // Don't forget dependencies!
  
  return (
    <div>
      <p>Time: {seconds}s</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Resume'}
      </button>
    </div>
  );
}
```

### Pulse

```tsx
const Timer: Pulse.Fn = () => {
  const seconds = Pulse.signal(0);
  const isRunning = Pulse.signal(true);
  
  Pulse.effect(() => {
    if (!isRunning()) return;
    
    const interval = setInterval(() => {
      seconds(seconds() + 1);
    }, 1000);
    
    return () => clearInterval(interval);
  }); // No dependencies needed!
  
  return (
    <div>
      <p>Time: {seconds}s</p>
      <button onClick={() => isRunning(!isRunning())}>
        {Pulse.computed(() => isRunning() ? 'Pause' : 'Resume')}
      </button>
    </div>
  );
};
```

## Lists and Keys

### React

```tsx
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build app' }
  ]);
  
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
```

**Note:** Keys are essential for React's reconciliation algorithm.

### Pulse

```tsx
const TodoList: Pulse.Fn = () => {
  const todos = Pulse.signal([
    { id: 1, text: 'Learn Pulse' },
    { id: 2, text: 'Build app' }
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

**Note:** Keys are optional (no reconciliation) but recommended for performance.

## Conditional Rendering

### React

```tsx
function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
}
```

### Pulse

```tsx
const LoginStatus: Pulse.Fn = () => {
  const isLoggedIn = Pulse.signal(false);
  
  return (
    <div>
      {Pulse.computed(() =>
        isLoggedIn() ? (
          <button onClick={() => isLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => isLoggedIn(true)}>Login</button>
        )
      )}
    </div>
  );
};
```

## Form Handling

### React

```tsx
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const isValid = email.includes('@') && password.length >= 8;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      console.log({ email, password });
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={!isValid}>Sign In</button>
    </form>
  );
}
```

### Pulse

```tsx
const LoginForm: Pulse.Fn = () => {
  const email = Pulse.signal('');
  const password = Pulse.signal('');
  
  const isValid = Pulse.computed(() => 
    email().includes('@') && password().length >= 8
  );
  
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (isValid()) {
      console.log({ email: email(), password: password() });
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onInput={(e) => email((e.target as HTMLInputElement).value)}
      />
      <input
        type="password"
        value={password}
        onInput={(e) => password((e.target as HTMLInputElement).value)}
      />
      <button disabled={Pulse.computed(() => !isValid())}>Sign In</button>
    </form>
  );
};
```

## Global State

### React (with Context)

```tsx
import { createContext, useContext, useState } from 'react';

const CountContext = createContext(null);

function CountProvider({ children }) {
  const [count, setCount] = useState(0);
  
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

function Counter() {
  const { count, setCount } = useContext(CountContext);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

function App() {
  return (
    <CountProvider>
      <Counter />
    </CountProvider>
  );
}
```

### Pulse (with Shared Signals)

```tsx
// No provider needed!
const globalCount = Pulse.signal(0);

const Counter: Pulse.Fn = () => {
  return (
    <button onClick={() => globalCount(globalCount() + 1)}>
      Count: {globalCount}
    </button>
  );
};

const App: Pulse.Fn = () => {
  return <Counter />;
};
```

## Performance Characteristics

### React

**How Updates Work:**
1. State changes → Component re-renders
2. Component function re-executes
3. New virtual DOM tree created
4. Diffing algorithm compares trees
5. Real DOM updated based on diff

**Performance Considerations:**
- Re-renders can be expensive for large components
- `React.memo()` needed to prevent unnecessary re-renders
- `useMemo()` and `useCallback()` needed for optimization
- Reconciliation overhead

### Pulse

**How Updates Work:**
1. Signal changes → Dependent nodes notified
2. Only affected DOM nodes update
3. No component re-execution
4. No virtual DOM diffing

**Performance Considerations:**
- Updates are surgical and fast
- No optimization primitives needed
- Component function runs only once
- Scales linearly with number of signals

## Bundle Size

| Framework | Minified + Gzipped |
|-----------|-------------------|
| React + ReactDOM | ~42 KB |
| Pulse Framework | ~5 KB |

## Learning Curve

### React

**Concepts to Learn:**
- JSX
- Components (function/class)
- Props and state
- Hooks (useState, useEffect, useMemo, useCallback, useContext, useRef, etc.)
- Rules of hooks
- Dependency arrays
- Virtual DOM and reconciliation
- Keys and lists
- Context API
- Refs and forwarding refs

**Common Pitfalls:**
- Stale closures
- Missing dependencies in arrays
- Unnecessary re-renders
- Incorrect key usage
- Rules of hooks violations

### Pulse

**Concepts to Learn:**
- JSX
- Components (`Pulse.Fn`)
- Props
- Signals
- Computed
- Effects
- Fragments

**Common Pitfalls:**
- Forgetting `()` when reading/writing signals in logic
- Using `()` when displaying signals in JSX (should not call)

## Migration from React

### Step-by-Step Guide

1. **State → Signals**
```tsx
// React
const [count, setCount] = useState(0);
setCount(count + 1);

// Pulse
const count = Pulse.signal(0);
count(count() + 1);
```

2. **useMemo → computed**
```tsx
// React
const doubled = useMemo(() => count * 2, [count]);

// Pulse
const doubled = Pulse.computed(() => count() * 2);
```

3. **useEffect → effect**
```tsx
// React
useEffect(() => {
  console.log(count);
}, [count]);

// Pulse
Pulse.effect(() => {
  console.log(count());
});
```

4. **useContext → Shared Signals**
```tsx
// React - Create context, provider, consumer
// Pulse - Just use a shared signal
const sharedState = Pulse.signal(0);
```

5. **Component Signature**
```tsx
// React
function MyComponent(props) { }

// Pulse
const MyComponent: Pulse.Fn<Props> = (props) => { }
```

## When to Use What

### Choose React if:
- ✅ You need server-side rendering (Next.js)
- ✅ You need a mature ecosystem with many libraries
- ✅ Your team is experienced with React
- ✅ You need React Native for mobile
- ✅ You want established patterns and best practices

### Choose Pulse if:
- ✅ You want maximum performance
- ✅ You prefer simplicity over ecosystem
- ✅ Bundle size is critical
- ✅ You want to avoid hooks complexity
- ✅ You're building a component library
- ✅ You want direct DOM manipulation
- ✅ You don't need SSR (or limited SSR is acceptable)

## Feature Comparison Table

| Feature | React | Pulse |
|---------|-------|-------|
| **Virtual DOM** | ✅ Yes | ❌ No - Real DOM |
| **JSX Support** | ✅ Yes | ✅ Yes |
| **TypeScript** | ✅ Yes | ✅ Yes |
| **Component Model** | Function/Class | `Pulse.Fn` |
| **State Management** | `useState` | `signal()` |
| **Derived State** | `useMemo` | `computed()` |
| **Side Effects** | `useEffect` | `effect()` |
| **Auto Dependency Tracking** | ❌ No | ✅ Yes |
| **Re-renders** | ✅ Yes | ❌ No |
| **Bundle Size** | ~42 KB | ~5 KB |
| **SSR Support** | ✅ Excellent | ⚠️ Limited |
| **Ecosystem** | ✅ Huge | ⚠️ Growing |
| **Learning Curve** | Medium-High | Low-Medium |
| **Dev Tools** | ✅ Excellent | ⚠️ Basic |
| **Mobile (Native)** | ✅ React Native | ❌ No |

## Code Comparison: Todo App

### React Version

```tsx
import { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  const remaining = todos.filter(t => !t.completed).length;
  
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: input,
        completed: false
      }]);
      setInput('');
    }
  };
  
  const toggleTodo = (id) => {
    setTodos(todos.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };
  
  return (
    <div>
      <h1>Todos ({remaining} remaining)</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addTodo()}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### Pulse Version

```tsx
const TodoApp: Pulse.Fn = () => {
  const todos = Pulse.signal([]);
  const input = Pulse.signal('');
  
  const remaining = Pulse.computed(() => 
    todos().filter(t => !t.completed).length
  );
  
  const addTodo = () => {
    if (input().trim()) {
      todos([...todos(), {
        id: Date.now(),
        text: input(),
        completed: false
      }]);
      input('');
    }
  };
  
  const toggleTodo = (id) => {
    todos(todos().map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };
  
  return (
    <div>
      <h1>Todos ({remaining} remaining)</h1>
      <input
        value={input}
        onInput={(e) => input((e.target as HTMLInputElement).value)}
        onKeyPress={(e) => e.key === 'Enter' && addTodo()}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {Pulse.computed(() =>
          todos().map(todo => (
            <li key={todo.id}>
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
```

**Key Differences:**
- Pulse uses `signal()` instead of `useState()`
- Pulse reads/writes signals with `()`
- Pulse wraps `.map()` in `computed()`
- No re-renders in Pulse — component function runs once

## Summary

Both React and Pulse are excellent frameworks with different philosophies:

**React** is mature, battle-tested, and has a massive ecosystem. It's a safe choice for most projects, especially with SSR requirements.

**Pulse** is lightweight, fast, and simple. It's perfect for component libraries, performance-critical apps, and developers who want to avoid hooks complexity.

Choose based on your project's needs, team expertise, and priorities!

---

**Further Reading:**
- [Reactivity Guide](/guide/pulse-framework/reactivity)
- [Components Guide](/guide/pulse-framework/components)
- [Advanced Patterns](/guide/pulse-framework/advanced)