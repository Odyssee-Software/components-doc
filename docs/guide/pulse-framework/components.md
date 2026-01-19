---
title: Components with Pulse
description: Build reusable components with JSX and Pulse.Fn
---

# Components with Pulse

Pulse Framework uses a **DOM-first** approach to building components. Your JSX components return real DOM elements, not virtual representations.

## The `Pulse.Fn` Type

`Pulse.Fn` is the type for Function Components in Pulse:

```tsx
type Pulse.Fn<PROPS = Record<string, any>> = (
  props: PROPS
) => Pulse.JSX.Element | null
```

### Basic Component

```tsx
import Pulse from 'pulse-framework';

const Greeting: Pulse.Fn = () => {
  return <h1>Hello, Pulse Framework!</h1>;
};

// Mount to DOM - it's a real HTMLElement!
document.body.appendChild(<Greeting />);
```

### Component with State

```tsx
const Counter: Pulse.Fn = () => {
  const count = Pulse.signal(0);
  
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

## Props and TypeScript

### Typed Props

Define props with TypeScript interfaces for full type safety:

```tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
}

const Button: Pulse.Fn<ButtonProps> = ({ 
  label, 
  onClick, 
  variant = 'primary',
  disabled = false 
}) => {
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

// Usage with full type checking
<Button 
  label="Save" 
  onClick={() => console.log('Saved')} 
  variant="primary" 
/>
```

### Props with Signals

Props can include signals for reactive communication:

```tsx
import { Signal } from 'pulse-framework';

interface CounterDisplayProps {
  count: Signal<number>;
  label?: string;
}

const CounterDisplay: Pulse.Fn<CounterDisplayProps> = ({ 
  count, 
  label = 'Count' 
}) => {
  return (
    <div>
      <span>{label}: </span>
      <strong>{count}</strong>
    </div>
  );
};

// Usage
const App: Pulse.Fn = () => {
  const count = Pulse.signal(0);
  
  return (
    <div>
      <CounterDisplay count={count} label="Current" />
      <button onClick={() => count(count() + 1)}>+</button>
    </div>
  );
};
```

### Optional and Default Props

```tsx
interface CardProps {
  title: string;
  subtitle?: string;
  className?: string;
  elevation?: 'sm' | 'md' | 'lg';
}

const Card: Pulse.Fn<CardProps> = ({ 
  title, 
  subtitle,
  className = '',
  elevation = 'md'
}) => {
  return (
    <div className={`card card-${elevation} ${className}`}>
      <h3>{title}</h3>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};
```

## Children and Composition

### Basic Children

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

// Usage
<Card title="User Profile">
  <p>Name: John Doe</p>
  <p>Email: john@example.com</p>
  <button>Edit</button>
</Card>
```

### Multiple Children Slots

```tsx
interface LayoutProps {
  header?: any;
  sidebar?: any;
  children?: any;
  footer?: any;
}

const Layout: Pulse.Fn<LayoutProps> = ({ 
  header, 
  sidebar, 
  children, 
  footer 
}) => {
  return (
    <div className="layout">
      {header && <header>{header}</header>}
      <div className="layout-main">
        {sidebar && <aside>{sidebar}</aside>}
        <main>{children}</main>
      </div>
      {footer && <footer>{footer}</footer>}
    </div>
  );
};

// Usage
<Layout
  header={<h1>My App</h1>}
  sidebar={<nav>...</nav>}
  footer={<p>© 2024</p>}
>
  <p>Main content here</p>
</Layout>
```

## Fragments

Fragments let you group elements without adding wrapper DOM nodes:

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

// Or explicit Fragment
import { Fragment } from 'pulse-framework';

const List: Pulse.Fn = () => {
  return (
    <Fragment>
      <li>Item 1</li>
      <li>Item 2</li>
    </Fragment>
  );
};
```

## Conditional Rendering

### With Computed

```tsx
const LoginStatus: Pulse.Fn = () => {
  const isLoggedIn = Pulse.signal(false);
  const username = Pulse.signal('Guest');
  
  return (
    <div>
      {Pulse.computed(() => 
        isLoggedIn() ? (
          <div>
            <p>Welcome, {username}!</p>
            <button onClick={() => isLoggedIn(false)}>Logout</button>
          </div>
        ) : (
          <div>
            <p>Please sign in</p>
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

### Multiple Conditions

```tsx
const StatusView: Pulse.Fn = () => {
  const status = Pulse.signal<'loading' | 'success' | 'error'>('loading');
  
  return (
    <div>
      {Pulse.computed(() => {
        switch (status()) {
          case 'loading':
            return <div>Loading...</div>;
          case 'success':
            return <div>Success!</div>;
          case 'error':
            return <div>Error occurred</div>;
        }
      })}
    </div>
  );
};
```

## Dynamic Lists

### Rendering Lists

Wrap `.map()` in `Pulse.computed()` for reactive lists:

```tsx
interface User {
  id: number;
  name: string;
  email: string;
}

const UserList: Pulse.Fn = () => {
  const users = Pulse.signal<User[]>([
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
  ]);
  
  return (
    <ul>
      {Pulse.computed(() =>
        users().map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))
      )}
    </ul>
  );
};
```

### Filtered Lists

```tsx
const FilteredList: Pulse.Fn = () => {
  const items = Pulse.signal(['Apple', 'Banana', 'Cherry', 'Date']);
  const filter = Pulse.signal('');
  
  const filteredItems = Pulse.computed(() => {
    const search = filter().toLowerCase();
    if (!search) return items();
    return items().filter(item => item.toLowerCase().includes(search));
  });
  
  return (
    <div>
      <input 
        type="text"
        value={filter}
        onInput={(e) => filter((e.target as HTMLInputElement).value)}
        placeholder="Search..."
      />
      <ul>
        {Pulse.computed(() =>
          filteredItems().map(item => (
            <li key={item}>{item}</li>
          ))
        )}
      </ul>
    </div>
  );
};
```

## Event Handling

### Basic Events

```tsx
const Button: Pulse.Fn = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  
  return <button onClick={handleClick}>Click me</button>;
};
```

### Events with Parameters

```tsx
const TodoList: Pulse.Fn = () => {
  const todos = Pulse.signal([
    { id: 1, text: 'Learn Pulse' },
    { id: 2, text: 'Build app' }
  ]);
  
  const removeTodo = (id: number) => {
    todos(todos().filter(t => t.id !== id));
  };
  
  return (
    <ul>
      {Pulse.computed(() =>
        todos().map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))
      )}
    </ul>
  );
};
```

### Keyboard Events

```tsx
const SearchInput: Pulse.Fn = () => {
  const query = Pulse.signal('');
  
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      console.log('Searching for:', query());
    }
  };
  
  return (
    <input
      type="text"
      value={query}
      onInput={(e) => query((e.target as HTMLInputElement).value)}
      onKeyPress={handleKeyPress}
    />
  );
};
```

## Lifecycle with Effects

### Component Mount

```tsx
const DataLoader: Pulse.Fn = () => {
  const data = Pulse.signal(null);
  const loading = Pulse.signal(true);
  
  // Runs on mount
  Pulse.effect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(result => {
        data(result);
        loading(false);
      });
  });
  
  return (
    <div>
      {Pulse.computed(() => 
        loading() ? <p>Loading...</p> : <pre>{JSON.stringify(data(), null, 2)}</pre>
      )}
    </div>
  );
};
```

### Cleanup

```tsx
const Timer: Pulse.Fn = () => {
  const seconds = Pulse.signal(0);
  const isRunning = Pulse.signal(true);
  
  Pulse.effect(() => {
    if (!isRunning()) return;
    
    const interval = setInterval(() => {
      seconds(seconds() + 1);
    }, 1000);
    
    // Cleanup function
    return () => clearInterval(interval);
  });
  
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

## Styling Components

### Static Classes

```tsx
const Alert: Pulse.Fn = () => {
  return (
    <div className="alert alert-success">
      Success message!
    </div>
  );
};
```

### Dynamic Classes

```tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
  active?: boolean;
}

const Button: Pulse.Fn<ButtonProps> = ({ variant, active = false }) => {
  const className = Pulse.computed(() => {
    const classes = ['btn', `btn-${variant}`];
    if (active) classes.push('btn-active');
    return classes.join(' ');
  });
  
  return <button className={className}>Click me</button>;
};
```

### Inline Styles

```tsx
const Box: Pulse.Fn = () => {
  const width = Pulse.signal(100);
  const color = Pulse.signal('#3b82f6');
  
  const style = Pulse.computed(() => ({
    width: `${width()}px`,
    height: `${width()}px`,
    backgroundColor: color(),
    transition: 'all 0.3s ease'
  }));
  
  return (
    <div>
      <div style={style}></div>
      <input 
        type="range" 
        min="50" 
        max="300"
        value={width}
        onInput={(e) => width(Number((e.target as HTMLInputElement).value))}
      />
    </div>
  );
};
```

## Communication Patterns

### 1. Shared Signals (Recommended)

```tsx
// Shared state
const globalCount = Pulse.signal(0);

const Display: Pulse.Fn = () => {
  return <div>Count: {globalCount}</div>;
};

const Controls: Pulse.Fn = () => {
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
      <Display />
      <Controls />
    </div>
  );
};
```

### 2. Callback Props

```tsx
interface FormProps {
  onSubmit: (data: { email: string }) => void;
}

const EmailForm: Pulse.Fn<FormProps> = ({ onSubmit }) => {
  const email = Pulse.signal('');
  
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    onSubmit({ email: email() });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        value={email}
        onInput={(e) => email((e.target as HTMLInputElement).value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

const App: Pulse.Fn = () => {
  const handleFormSubmit = (data: { email: string }) => {
    console.log('Email submitted:', data.email);
  };
  
  return <EmailForm onSubmit={handleFormSubmit} />;
};
```

### 3. Props Drilling (Avoid)

```tsx
// ❌ Avoid - props drilling through many layers
const GrandParent: Pulse.Fn = () => {
  const count = Pulse.signal(0);
  return <Parent count={count} />;
};

const Parent: Pulse.Fn<{ count: Signal<number> }> = ({ count }) => {
  return <Child count={count} />;
};

const Child: Pulse.Fn<{ count: Signal<number> }> = ({ count }) => {
  return <div>{count}</div>;
};

// ✅ Better - shared signal
const sharedCount = Pulse.signal(0);

const GrandParent: Pulse.Fn = () => <Parent />;
const Parent: Pulse.Fn = () => <Child />;
const Child: Pulse.Fn = () => <div>{sharedCount}</div>;
```

## Complete Example: Todo App

```tsx
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp: Pulse.Fn = () => {
  const todos = Pulse.signal<Todo[]>([]);
  const newTodoText = Pulse.signal('');
  
  const remainingCount = Pulse.computed(() => 
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
    todos(todos().map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  const removeTodo = (id: number) => {
    todos(todos().filter(todo => todo.id !== id));
  };
  
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      
      <div className="stats">
        <p>{remainingCount} remaining</p>
      </div>
      
      <div className="input">
        <input
          type="text"
          value={newTodoText}
          onInput={(e) => newTodoText((e.target as HTMLInputElement).value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="What needs to be done?"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      
      <ul className="todo-list">
        {Pulse.computed(() =>
          todos().map(todo => (
            <li key={todo.id} className={todo.completed ? 'completed' : ''}>
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
```

## Best Practices

### ✅ DO: Use PascalCase

```tsx
// ✅ Good
const UserCard: Pulse.Fn = () => { };
const NavBar: Pulse.Fn = () => { };

// ❌ Bad
const userCard: Pulse.Fn = () => { };
const navbar: Pulse.Fn = () => { };
```

### ✅ DO: Type Your Props

```tsx
// ✅ Good - type safe
interface ButtonProps {
  label: string;
  onClick: () => void;
}
const Button: Pulse.Fn<ButtonProps> = ({ label, onClick }) => { };

// ❌ Bad - no type safety
const Button: Pulse.Fn = (props: any) => { };
```

### ✅ DO: Extract Complex Logic

```tsx
// ✅ Good - reusable logic
function useValidation(value: Signal<string>) {
  return Pulse.computed(() => {
    const v = value();
    if (!v) return 'Required';
    if (v.length < 3) return 'Too short';
    return null;
  });
}

const Form: Pulse.Fn = () => {
  const name = Pulse.signal('');
  const nameError = useValidation(name);
  // ...
};
```

### ✅ DO: Keep Components Focused

```tsx
// ✅ Good - single responsibility
const UserAvatar: Pulse.Fn = () => { };
const UserName: Pulse.Fn = () => { };
const UserBio: Pulse.Fn = () => { };

const UserProfile: Pulse.Fn = () => {
  return (
    <div>
      <UserAvatar />
      <UserName />
      <UserBio />
    </div>
  );
};
```

## Next Steps

- **[Reactivity Guide](/guide/pulse-framework/reactivity)** — Master signals and computed values
- **[Advanced Patterns](/guide/pulse-framework/advanced)** — Stores, routing, and complex state
- **[Browse Components](/components/button)** — See real examples

---

**Build amazing components! 🎨**