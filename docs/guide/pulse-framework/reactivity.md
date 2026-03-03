---
title: Reactivity in Pulse
description: Master signals, computed values, and effects in Pulse Framework
---

# Reactivity in Pulse

Pulse Framework's reactivity system is the foundation of its power. Unlike traditional frameworks that rely on component re-renders, Pulse uses **fine-grained reactivity** to update only what changed.

::: tip Quick Navigation
- **New to Pulse?** Start with [Signals](#signals-reactive-variables)
- **Coming from React?** See [Comparison with React](/guide/pulse-framework/comparison)
- **Need advanced features?** Jump to [Manual Subscription](#manual-subscription-advanced) or [Memory Management](/guide/pulse-framework/advanced#memory-management)
:::

## Overview

Pulse's reactivity system has three main building blocks:

1. **[Signals](#signals-reactive-variables)** — Reactive state containers
2. **[Computed](#computed-derived-values)** — Automatically calculated values
3. **[Effects](#effects-side-effects)** — Side effects that run when dependencies change

```tsx
// Simple example showing all three concepts
const count = Pulse.signal(0);                    // Signal
const doubled = Pulse.computed(() => count() * 2); // Computed
Pulse.effect(() => console.log(count()));          // Effect
```

::: info Two Approaches
Pulse supports both **DOM-first** and **JSX-first** development:

- **JSX** (recommended): Declarative, type-safe, familiar syntax for building components
- **DOM API**: Direct manipulation, useful for migrations or specific use cases

All examples in this guide use **JSX**. For DOM API examples, see the [Pulse Framework repository guides](https://github.com/odyssee-software/pulse-framework/tree/main/guides).
:::

## The Problem with Manual DOM Updates

In vanilla JavaScript, keeping the UI in sync with data is tedious and error-prone:

```javascript
// Vanilla JS - manual synchronization
let count = 0;
const display = document.getElementById('count');

function updateDisplay() {
  display.textContent = `Count: ${count}`;
}

document.getElementById('increment').addEventListener('click', () => {
  count++;
  updateDisplay(); // Easy to forget!
});

updateDisplay(); // Don't forget initial render!
```

**Problems:**
- ❌ Must manually call `updateDisplay()` everywhere
- ❌ Easy to forget, leading to stale UI
- ❌ No automatic synchronization
- ❌ Difficult to scale to complex UIs

## Signals: Reactive Variables

Signals solve this by making data reactive. When a signal changes, everything that depends on it updates automatically.

### Creating and Using Signals

```tsx
import Pulse from 'pulse-framework';

// Create a signal with initial value
const count = Pulse.signal(0);

// Read with ()
console.log(count()); // 0

// Write with ()
count(5);
console.log(count()); // 5

// Update based on current value
count(count() + 1);
console.log(count()); // 6
```

<LiveCodeEditor :defaultCode="`export default () => {
  //
  const count = Pulse.signal(0);
  //
  const container = document.createElement('div');
  const title = document.createElement('h2');
  title.textContent = 'Signal Example';
  container.appendChild(title);
  const display = document.createElement('p');
  Pulse.dom.bindProperty(display , 'textContent' , count);
  container.appendChild(display);
  //
  const decrementBtn = document.createElement('button');
  decrementBtn.textContent = 'Decrement';
  decrementBtn.addEventListener('click', () => {
    count(count() - 1);
  });
  container.appendChild(decrementBtn);
  //
  const incrementBtn = document.createElement('button');
  incrementBtn.textContent = 'Increment';
  incrementBtn.addEventListener('click', () => {
    count(count() + 1);
  });
  container.appendChild(incrementBtn);
  //
  return container;
}`" />

### Signals in JSX

::: warning Important: Signal Syntax in JSX
In JSX for **display**, signals are used **without** calling `()`. The framework automatically creates reactive bindings.
:::

```tsx
const Counter: Pulse.Fn = () => {
  const count = Pulse.signal(0);

  return (
    <div>
      {/* ✅ CORRECT - No () for display */}
      <p>Count: {count}</p>
      
      {/* ❌ WRONG - Breaks reactivity */}
      <p>Count: {count()}</p>
      
      {/* ✅ CORRECT - Use () in logic/handlers */}
      <button onClick={() => count(count() + 1)}>
        Increment
      </button>
    </div>
  );
};
```

<LiveCodeEditor :defaultCode="`export default () => {
  const count = Pulse.signal(0);
  return <div>
    <h2>Signal Example</h2>
    <p>Count: {count}</p>
    <ButtonGroup buttons={[
      { label: '-', onClick: () => count(count() - 1) },
      { label: '+', onClick: () => count(count() + 1) }
    ]}/>
  </div>;
}`" />

### When to Use `()` vs Not

| Context | Syntax | Example | Reason |
|---------|--------|---------|--------|
| **JSX display** | `{signal}` | `<p>{count}</p>` | Framework creates automatic binding |
| **JSX props** | `signal` | `<input value={name} />` | Framework creates automatic binding |
| **Event handlers** | `signal()` | `onClick={() => count(count() + 1)}` | Reading/writing the value in logic |
| **Inside computed** | `signal()` | `computed(() => count() * 2)` | Reading value to calculate result |
| **Inside effect** | `signal()` | `effect(() => log(count()))` | Reading value to track dependency |
| **Conditions/Logic** | `signal()` | `if (count() > 5)` | Reading value for comparison |

### Typed Signals

```tsx
// Explicit type
const user = Pulse.signal<User | null>(null);

// Interface
interface User {
  name: string;
  email: string;
  age: number;
}

const currentUser = Pulse.signal<User>({
  name: 'Alice',
  email: 'alice@example.com',
  age: 25
});

// Array
const todos = Pulse.signal<Todo[]>([]);
```

## Computed: Derived Values

Computed values automatically recalculate when their dependencies change. They're like formulas in a spreadsheet.

### Basic Computed

```tsx
const firstName = Pulse.signal('John');
const lastName = Pulse.signal('Doe');

// Automatically updates when firstName or lastName changes
const fullName = Pulse.computed(() => `${firstName()} ${lastName()}`);

const UserProfile: Pulse.Fn = () => {
  return (
    <div>
      <h1>{fullName}</h1>
      <input 
        value={firstName}
        onInput={(e) => firstName((e.target as HTMLInputElement).value)}
      />
      <input 
        value={lastName}
        onInput={(e) => lastName((e.target as HTMLInputElement).value)}
      />
    </div>
  );
};
```

<LiveCodeEditor :defaultCode="`export default () => {
  const firstName = Pulse.signal('John');
  const lastName = Pulse.signal('Doe');
  const fullName = Pulse.computed(() => firstName() + ' ' +  lastName());
  return <div>
    <h1>{fullName}</h1>
    <input 
      value={firstName}
      onInput={(e) => firstName(e.target.value)}
    />
    <input 
      value={lastName}
      onInput={(e) => lastName(e.target.value)}
    />
  </div>;
}`" />

### Complex Computed

```tsx
const items = Pulse.signal([
  { id: 1, name: 'Apple', price: 1.5, quantity: 3 },
  { id: 2, name: 'Banana', price: 0.8, quantity: 5 },
  { id: 3, name: 'Orange', price: 1.2, quantity: 2 }
]);

// Computed can do complex calculations
const subtotal = Pulse.computed(() =>
  items().reduce((sum, item) => sum + item.price * item.quantity, 0)
);

const tax = Pulse.computed(() => subtotal() * 0.2);

const total = Pulse.computed(() => subtotal() + tax());

const itemCount = Pulse.computed(() =>
  items().reduce((sum, item) => sum + item.quantity, 0)
);

// All of these update automatically when items change!
```

### Chaining Computed

Computed values can depend on other computed values:

```tsx
const price = Pulse.signal(100);
const quantity = Pulse.signal(2);
const taxRate = Pulse.signal(0.2);

// Level 1: Basic calculation
const subtotal = Pulse.computed(() => price() * quantity());

// Level 2: Depends on subtotal
const tax = Pulse.computed(() => subtotal() * taxRate());

// Level 3: Depends on subtotal and tax
const total = Pulse.computed(() => subtotal() + tax());

// Level 3: Parallel dependency
const discount = Pulse.computed(() => {
  const sub = subtotal();
  if (sub > 500) return sub * 0.1; // 10% off
  if (sub > 200) return sub * 0.05; // 5% off
  return 0;
});

// Level 4: Final calculation
const finalPrice = Pulse.computed(() => total() - discount());
```

### Computed with Conditions

```tsx
const email = Pulse.signal('');
const password = Pulse.signal('');

const isValidEmail = Pulse.computed(() => {
  const value = email();
  return value.includes('@') && value.includes('.');
});

const isValidPassword = Pulse.computed(() => {
  const value = password();
  return value.length >= 8 && /[A-Z]/.test(value) && /[0-9]/.test(value);
});

const canSubmit = Pulse.computed(() => 
  isValidEmail() && isValidPassword()
);

const LoginForm: Pulse.Fn = () => {
  return (
    <form>
      <input 
        type="email" 
        value={email}
        onInput={(e) => email((e.target as HTMLInputElement).value)}
      />
      {Pulse.computed(() => 
        !isValidEmail() && email().length > 0 
          ? <span class="error">Invalid email</span> 
          : null
      )}
      
      <input 
        type="password" 
        value={password}
        onInput={(e) => password((e.target as HTMLInputElement).value)}
      />
      
      <button disabled={Pulse.computed(() => !canSubmit())}>
        Sign In
      </button>
    </form>
  );
};
```

## Effects: Side Effects

Effects run automatically when their dependencies change. Use them for side effects like logging, API calls, or DOM manipulation outside your components.

### Basic Effects

```tsx
const count = Pulse.signal(0);

// Runs immediately and whenever count changes
Pulse.effect(() => {
  console.log('Count changed to:', count());
  document.title = `Count: ${count()}`;
});

count(5); // Effect runs
count(10); // Effect runs again
```

### Effects with Multiple Dependencies

```tsx
const firstName = Pulse.signal('John');
const lastName = Pulse.signal('Doe');
const age = Pulse.signal(25);

// Automatically tracks all signals accessed inside
Pulse.effect(() => {
  console.log(`${firstName()} ${lastName()} is ${age()} years old`);
});

firstName('Jane'); // Effect runs
age(26); // Effect runs
```

### Effect Cleanup

Return a cleanup function to handle cleanup (like clearing timers or removing event listeners):

```tsx
const isRunning = Pulse.signal(false);

Pulse.effect(() => {
  if (!isRunning()) return;
  
  // Setup
  const interval = setInterval(() => {
    console.log('Tick');
  }, 1000);
  
  // Cleanup function
  return () => {
    clearInterval(interval);
    console.log('Timer stopped');
  };
});

isRunning(true);  // Starts timer
isRunning(false); // Cleanup runs, stops timer
```



### Effect in Components

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
  });
  
  return (
    <div>
      <p>Seconds: {seconds}</p>
      <button onClick={() => isRunning(!isRunning())}>
        {Pulse.computed(() => isRunning() ? 'Pause' : 'Resume')}
      </button>
    </div>
  );
};
```

### Effect Lifecycle Control

`effect()` returns an object that allows you to control the effect lifecycle:

```tsx
interface EffectHandle {
  destroy(): void;
  readonly isActive: boolean;
}
```

**Manual Cleanup:**

```tsx
const effectHandle = Pulse.effect(() => {
  console.log('Running effect...');
});

// Later... stop the effect manually
effectHandle.destroy();

// Check if still active
console.log(effectHandle.isActive); // false
```

**Conditional Effects:**

```tsx
const shouldTrack = Pulse.signal(true);
let tracker = null;

function startTracking() {
  if (!tracker) {
    tracker = Pulse.effect(() => {
      if (shouldTrack()) {
        console.log('Tracking:', someValue());
      }
    });
  }
}

function stopTracking() {
  if (tracker) {
    tracker.destroy();
    tracker = null;
  }
}
```

::: tip
Effects automatically clean up when their cleanup function is called. Use `.destroy()` only when you need programmatic control over effect lifecycle.
:::

## Manual Subscription (Advanced)

Both signals and computed values expose a `.subscribe()` method for manual subscription. This is useful for integrating with third-party libraries or creating custom observers.

### API

```typescript
const unsubscribe = signal.subscribe((value) => {
  // Called whenever signal changes
  console.log('New value:', value);
});

// Cleanup
unsubscribe();
```

### Use Cases

**Integration with RxJS:**

```tsx
import { fromEventPattern } from 'rxjs';

const count = Pulse.signal(0);

const count$ = fromEventPattern(
  handler => count.subscribe(handler),
  (handler, unsubscribe) => unsubscribe()
);

count$.subscribe(value => console.log('RxJS:', value));
```

**Custom Logger:**

```tsx
function createLogger(name: string) {
  return (value: any) => {
    console.log(`[${name}]`, new Date().toISOString(), value);
  };
}

const count = Pulse.signal(0);
const unsubscribe = count.subscribe(createLogger('count'));

count(1); // Logs: [count] 2024-01-01T12:00:00.000Z 1
count(5); // Logs: [count] 2024-01-01T12:00:01.000Z 5

// Later... cleanup
unsubscribe();
```

**State Synchronization:**

```tsx
// Sync Pulse signal with external state manager
const pulseState = Pulse.signal(initialValue);
const externalStore = createExternalStore();

pulseState.subscribe(value => {
  externalStore.setState(value);
});
```

::: tip When to Use
In most cases, use `effect()` instead of `.subscribe()`. Use `.subscribe()` only when you need:
- Manual control over subscription lifecycle
- Integration with external libraries (RxJS, Redux, etc.)
- Custom observer patterns
- Performance-critical scenarios where effect overhead matters
:::

::: warning
Unlike `effect()`, `.subscribe()` does **not** automatically track dependencies. It only listens to changes on the specific signal or computed value you subscribe to.
:::

## Automatic Dependency Tracking

Pulse automatically tracks which signals are read during a computed or effect execution:

```tsx
const showAdvanced = Pulse.signal(false);
const basicValue = Pulse.signal(10);
const advancedValue = Pulse.signal(20);

// Conditionally tracks dependencies!
const result = Pulse.computed(() => {
  if (showAdvanced()) {
    return advancedValue() * 2; // Only tracks advancedValue when shown
  }
  return basicValue() * 2; // Only tracks basicValue otherwise
});

showAdvanced(false);
basicValue(15);     // result updates
advancedValue(25);  // result does NOT update (not tracked)

showAdvanced(true);
advancedValue(30);  // NOW result updates
basicValue(20);     // result does NOT update (not tracked anymore)
```

## Performance Considerations

### Computed is Lazy

Computed values are **lazy** — they only recalculate when accessed:

```tsx
const expensiveData = Pulse.signal([/* large array */]);

// This computed won't run until something reads it
const expensiveComputed = Pulse.computed(() => {
  console.log('Expensive calculation...');
  return expensiveData().reduce(/* complex calculation */);
});

// No calculation yet...

const value = expensiveComputed(); // NOW it calculates
```

### Computed is Cached

Computed values are **cached** — they won't recalculate unless dependencies change:

```tsx
const value = Pulse.signal(10);
const doubled = Pulse.computed(() => {
  console.log('Computing...');
  return value() * 2;
});

doubled(); // Logs "Computing...", returns 20
doubled(); // No log, returns cached 20
doubled(); // No log, returns cached 20

value(15); // Invalidates cache
doubled(); // Logs "Computing...", returns 30
```

### Batching Updates

Pulse automatically batches multiple signal updates using **microtasks** by default:

```tsx
const a = Pulse.signal(1);
const b = Pulse.signal(2);
const sum = Pulse.computed(() => a() + b());

let computeCount = 0;
Pulse.effect(() => {
  sum();
  computeCount++;
});

// Multiple updates are batched automatically
a(10);
b(20);
// Both updates batched in the same microtask
// sum computed only once, not twice!

console.log(computeCount); // 2 (initial + batch), not 3
```

**Explicit Batching:**

For guaranteed synchronous batching, use `batch()`:

```tsx
import { batch } from 'pulse-framework';

batch(() => {
  a(10);
  b(20);
  c(30);
});
// All updates grouped, computed values update once
```

::: tip
Pulse's default microtask batching handles most cases automatically. Use explicit `batch()` when you need guaranteed synchronous grouping or are making many rapid updates.
:::

## Common Patterns

### Form Validation

```tsx
const email = Pulse.signal('');
const emailError = Pulse.computed(() => {
  const value = email();
  if (!value) return 'Email required';
  if (!value.includes('@')) return 'Invalid email';
  return null;
});

const isEmailValid = Pulse.computed(() => emailError() === null);
```

### Loading States

```tsx
const isLoading = Pulse.signal(false);
const data = Pulse.signal(null);
const error = Pulse.signal(null);

const loadData = async () => {
  isLoading(true);
  error(null);
  try {
    const response = await fetch('/api/data');
    data(await response.json());
  } catch (e) {
    error(e.message);
  } finally {
    isLoading(false);
  }
};
```

### API Calls with Effects

```tsx
const userId = Pulse.signal<number | null>(null);
const userData = Pulse.signal<User | null>(null);
const loading = Pulse.signal(false);
const error = Pulse.signal<string | null>(null);

Pulse.effect(() => {
  const id = userId();
  if (!id) {
    userData(null);
    return;
  }
  
  loading(true);
  error(null);
  
  fetch(`/api/users/${id}`)
    .then(res => res.json())
    .then(data => {
      userData(data);
      loading(false);
    })
    .catch(err => {
      error(err.message);
      loading(false);
    });
});

// Usage
userId(123); // Automatically fetches user data
```

### Filtered Lists

```tsx
const items = Pulse.signal([
  { id: 1, name: 'Apple', category: 'fruit' },
  { id: 2, name: 'Carrot', category: 'vegetable' },
  { id: 3, name: 'Banana', category: 'fruit' }
]);

const filter = Pulse.signal('');

const filteredItems = Pulse.computed(() => {
  const search = filter().toLowerCase();
  if (!search) return items();
  
  return items().filter(item =>
    item.name.toLowerCase().includes(search) ||
    item.category.toLowerCase().includes(search)
  );
});
```

### Debounced Search

**Manual Pattern:**

```tsx
const searchTerm = Pulse.signal('');
const debouncedSearch = Pulse.signal('');

let debounceTimer: number;

Pulse.effect(() => {
  const term = searchTerm();
  
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    debouncedSearch(term);
  }, 300);
  
  return () => clearTimeout(debounceTimer);
});

// Use debouncedSearch for API calls
Pulse.effect(() => {
  const term = debouncedSearch();
  if (term.length < 3) return;
  
  fetch(`/api/search?q=${term}`)
    .then(res => res.json())
    .then(results => {
      // Handle results
    });
});
```

**Using Utility Function:**

```tsx
import { debounce } from 'pulse-framework';

const searchTerm = Pulse.signal('');

const performSearch = debounce((term: string) => {
  if (term.length < 3) return;
  
  fetch(`/api/search?q=${term}`)
    .then(res => res.json())
    .then(results => {
      // Handle results
    });
}, 300);

Pulse.effect(() => {
  performSearch(searchTerm());
});
```

## Best Practices

### ✅ DO: Keep Signals Focused

```tsx
// ✅ Good - separate concerns
const firstName = Pulse.signal('');
const lastName = Pulse.signal('');

// ❌ Avoid - combining unrelated data
const userForm = Pulse.signal({ firstName: '', lastName: '', email: '', phone: '' });
```

### ✅ DO: Use Computed for Derived State

```tsx
// ✅ Good
const items = Pulse.signal([...]);
const total = Pulse.computed(() => items().reduce(...));

// ❌ Avoid - manual synchronization
const items = Pulse.signal([...]);
const total = Pulse.signal(0);
// Need to manually update total when items change
```

### ✅ DO: Extract Complex Logic

```tsx
// ✅ Good - reusable
function createValidation(value: Signal<string>, rules: ValidationRule[]) {
  return Pulse.computed(() => {
    for (const rule of rules) {
      const error = rule(value());
      if (error) return error;
    }
    return null;
  });
}

const emailError = createValidation(email, [required, emailFormat]);
```

### ✅ DO: Use Pulse.dom.bindEffectToElement for Dynamic Components

```tsx
import Pulse from 'pulse-framework';

// ✅ Good - automatic cleanup when element is removed
const Modal: Pulse.Fn = () => {
  const element = <div class="modal">Content</div> as HTMLElement;
  
  Pulse.dom.bindEffectToElement(element, () => {
    console.log('Modal mounted');
    return () => console.log('Modal unmounted');
  });
  
  return element;
};

// ❌ Avoid - may leak memory in dynamic components
const Modal: Pulse.Fn = () => {
  const element = <div class="modal">Content</div>;
  
  Pulse.effect(() => {
    console.log('Modal mounted');
    // Effect continues even after element is removed!
  });
  
  return element;
};
```

### ❌ DON'T: Modify Signals in Computed

```tsx
const count = Pulse.signal(0);

// ❌ BAD - side effects in computed
const doubled = Pulse.computed(() => {
  const value = count() * 2;
  count(value); // DON'T DO THIS
  return value;
});

// ✅ GOOD - use effects for side effects
Pulse.effect(() => {
  if (count() > 100) {
    console.warn('Count is high!');
  }
});
```

### ❌ DON'T: Forget to Cleanup Effects

```tsx
// ❌ BAD - memory leak
const Timer: Pulse.Fn = () => {
  Pulse.effect(() => {
    const interval = setInterval(() => {
      console.log('Tick');
    }, 1000);
    // Missing cleanup!
  });
  
  return <div>Timer</div>;
};

// ✅ GOOD - proper cleanup
const Timer: Pulse.Fn = () => {
  Pulse.effect(() => {
    const interval = setInterval(() => {
      console.log('Tick');
    }, 1000);
    
    return () => clearInterval(interval);
  });
  
  return <div>Timer</div>;
};
```

## Next Steps

- **[Components Guide](/guide/pulse-framework/components)** — Build reusable components with JSX
- **[Advanced Patterns](/guide/pulse-framework/advanced)** — Stores, routing, and complex state management
- **[Browse Components](/components/button)** — See Pulse in action

---

**Master reactivity, master Pulse! 🎯**
