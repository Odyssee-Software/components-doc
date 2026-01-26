---
title: Advanced Patterns
description: Master advanced patterns in Pulse Framework - stores, routing, forms, and more
---


# Advanced Patterns

Master advanced patterns for building complex applications with Pulse Framework.

## Global State Management

### Creating Stores

Stores organize related state and actions:

```tsx
// userStore.ts
import Pulse from 'pulse-framework';

export const userStore = {
  // State
  user: Pulse.signal<User | null>(null),
  isAuthenticated: Pulse.signal(false),
  loading: Pulse.signal(false),
  error: Pulse.signal<string | null>(null),
  
  // Computed
  userName: Pulse.computed(() => userStore.user()?.name ?? 'Guest'),
  userEmail: Pulse.computed(() => userStore.user()?.email ?? ''),
  
  // Actions
  async login(email: string, password: string) {
    userStore.loading(true);
    userStore.error(null);
    
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      if (!response.ok) throw new Error('Login failed');
      
      const user = await response.json();
      userStore.user(user);
      userStore.isAuthenticated(true);
    } catch (e) {
      userStore.error(e.message);
    } finally {
      userStore.loading(false);
    }
  },
  
  logout() {
    userStore.user(null);
    userStore.isAuthenticated(false);
  },
  
  async updateProfile(data: Partial<User>) {
    const current = userStore.user();
    if (!current) return;
    
    userStore.user({ ...current, ...data });
    
    await fetch('/api/user/profile', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  }
};

// Usage in components
const UserProfile: Pulse.Fn = () => {
  return (
    <div>
      <h1>Welcome, {userStore.userName}!</h1>
      <p>{userStore.userEmail}</p>
      <button onClick={() => userStore.logout()}>Logout</button>
    </div>
  );
};
```

### Store Factory Pattern

Create reusable store creators:

```tsx
function createListStore<T extends { id: number }>(
  fetchUrl: string
) {
  const items = Pulse.signal<T[]>([]);
  const loading = Pulse.signal(false);
  const error = Pulse.signal<string | null>(null);
  const selectedId = Pulse.signal<number | null>(null);
  
  const selectedItem = Pulse.computed(() => {
    const id = selectedId();
    return items().find(item => item.id === id) ?? null;
  });
  
  async function fetchItems() {
    loading(true);
    error(null);
    
    try {
      const response = await fetch(fetchUrl);
      const data = await response.json();
      items(data);
    } catch (e) {
      error(e.message);
    } finally {
      loading(false);
    }
  }
  
  function addItem(item: T) {
    items([...items(), item]);
  }
  
  function removeItem(id: number) {
    items(items().filter(item => item.id !== id));
  }
  
  function selectItem(id: number | null) {
    selectedId(id);
  }
  
  return {
    items,
    loading,
    error,
    selectedId,
    selectedItem,
    fetchItems,
    addItem,
    removeItem,
    selectItem
  };
}

// Usage
const productsStore = createListStore<Product>('/api/products');
const usersStore = createListStore<User>('/api/users');
```

## Shopping Cart Example

Complete e-commerce cart implementation:

```tsx
interface CartItem {
  id: number;
  productId: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const cartStore = {
  items: Pulse.signal<CartItem[]>([]),
  
  itemCount: Pulse.computed(() => 
    cartStore.items().reduce((sum, item) => sum + item.quantity, 0)
  ),
  
  subtotal: Pulse.computed(() =>
    cartStore.items().reduce((sum, item) => sum + item.price * item.quantity, 0)
  ),
  
  tax: Pulse.computed(() => cartStore.subtotal() * 0.2),
  
  total: Pulse.computed(() => cartStore.subtotal() + cartStore.tax()),
  
  addItem(product: Product, quantity: number = 1) {
    const current = cartStore.items();
    const existing = current.find(item => item.productId === product.id);
    
    if (existing) {
      cartStore.items(current.map(item =>
        item.productId === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      cartStore.items([...current, {
        id: Date.now(),
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity,
        image: product.image
      }]);
    }
  },
  
  removeItem(id: number) {
    cartStore.items(cartStore.items().filter(item => item.id !== id));
  },
  
  updateQuantity(id: number, quantity: number) {
    if (quantity <= 0) {
      cartStore.removeItem(id);
      return;
    }
    
    cartStore.items(cartStore.items().map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  },
  
  clear() {
    cartStore.items([]);
  }
};

const CartSummary: Pulse.Fn = () => {
  return (
    <div className="cart-summary">
      <h2>Cart ({cartStore.itemCount})</h2>
      
      <ul>
        {Pulse.computed(() =>
          cartStore.items().map(item => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
              </div>
              <input
                type="number"
                min="0"
                value={Pulse.signal(item.quantity)}
                onChange={(e) => 
                  cartStore.updateQuantity(item.id, Number((e.target as HTMLInputElement).value))
                }
              />
              <button onClick={() => cartStore.removeItem(item.id)}>Remove</button>
            </li>
          ))
        )}
      </ul>
      
      <div className="totals">
        <p>Subtotal: ${Pulse.computed(() => cartStore.subtotal().toFixed(2))}</p>
        <p>Tax: ${Pulse.computed(() => cartStore.tax().toFixed(2))}</p>
        <p><strong>Total: ${Pulse.computed(() => cartStore.total().toFixed(2))}</strong></p>
      </div>
      
      <button onClick={() => cartStore.clear()}>Clear Cart</button>
    </div>
  );
};
```

## Form Management

### Form Builder Pattern

```tsx
interface FormField<T> {
  value: Signal<T>;
  error: Signal<string | null>;
  touched: Signal<boolean>;
}

function createForm<T extends Record<string, any>>(
  initialValues: T,
  validators: Partial<Record<keyof T, (value: any) => string | null>>
) {
  const fields: Record<keyof T, FormField<any>> = {} as any;
  
  for (const key in initialValues) {
    fields[key] = {
      value: Pulse.signal(initialValues[key]),
      error: Pulse.signal<string | null>(null),
      touched: Pulse.signal(false)
    };
  }
  
  const isValid = Pulse.computed(() => {
    return Object.values(fields).every((field: FormField<any>) => 
      field.error() === null
    );
  });
  
  const values = Pulse.computed(() => {
    const result: any = {};
    for (const key in fields) {
      result[key] = fields[key].value();
    }
    return result as T;
  });
  
  function setValue<K extends keyof T>(key: K, value: T[K]) {
    fields[key].value(value);
    validate(key);
  }
  
  function setTouched<K extends keyof T>(key: K, touched: boolean = true) {
    fields[key].touched(touched);
  }
  
  function validate<K extends keyof T>(key: K) {
    const validator = validators[key];
    if (!validator) {
      fields[key].error(null);
      return;
    }
    
    const error = validator(fields[key].value());
    fields[key].error(error);
  }
  
  function validateAll() {
    for (const key in fields) {
      validate(key);
      setTouched(key, true);
    }
    return isValid();
  }
  
  function reset() {
    for (const key in fields) {
      fields[key].value(initialValues[key]);
      fields[key].error(null);
      fields[key].touched(false);
    }
  }
  
  return {
    fields,
    isValid,
    values,
    setValue,
    setTouched,
    validate,
    validateAll,
    reset
  };
}

// Usage
const ContactForm: Pulse.Fn = () => {
  const form = createForm(
    {
      name: '',
      email: '',
      message: ''
    },
    {
      name: (value) => {
        if (!value.trim()) return 'Name is required';
        if (value.length < 2) return 'Name too short';
        return null;
      },
      email: (value) => {
        if (!value) return 'Email is required';
        if (!value.includes('@')) return 'Invalid email';
        return null;
      },
      message: (value) => {
        if (!value.trim()) return 'Message is required';
        if (value.length < 10) return 'Message too short';
        return null;
      }
    }
  );
  
  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    
    if (!form.validateAll()) return;
    
    console.log('Form data:', form.values());
    
    // Submit logic here...
    
    form.reset();
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={form.fields.name.value}
          onInput={(e) => form.setValue('name', (e.target as HTMLInputElement).value)}
          onBlur={() => form.setTouched('name')}
        />
        {Pulse.computed(() =>
          form.fields.name.touched() && form.fields.name.error() ? (
            <span className="error">{form.fields.name.error()}</span>
          ) : null
        )}
      </div>
      
      <div>
        <input
          type="email"
          value={form.fields.email.value}
          onInput={(e) => form.setValue('email', (e.target as HTMLInputElement).value)}
          onBlur={() => form.setTouched('email')}
        />
        {Pulse.computed(() =>
          form.fields.email.touched() && form.fields.email.error() ? (
            <span className="error">{form.fields.email.error()}</span>
          ) : null
        )}
      </div>
      
      <div>
        <textarea
          value={form.fields.message.value}
          onInput={(e) => form.setValue('message', (e.target as HTMLTextAreaElement).value)}
          onBlur={() => form.setTouched('message')}
        />
        {Pulse.computed(() =>
          form.fields.message.touched() && form.fields.message.error() ? (
            <span className="error">{form.fields.message.error()}</span>
          ) : null
        )}
      </div>
      
      <button type="submit" disabled={Pulse.computed(() => !form.isValid())}>
        Submit
      </button>
    </form>
  );
};
```

## Client-Side Routing

### Simple Router Implementation

```tsx
interface Route {
  path: string;
  component: Pulse.Fn;
}

function createRouter(routes: Route[]) {
  const currentPath = Pulse.signal(window.location.pathname);
  const params = Pulse.signal<Record<string, string>>({});
  
  const currentRoute = Pulse.computed(() => {
    const path = currentPath();
    
    for (const route of routes) {
      const match = matchPath(path, route.path);
      if (match) {
        params(match.params);
        return route;
      }
    }
    
    return null;
  });
  
  function matchPath(pathname: string, pattern: string) {
    const patternParts = pattern.split('/');
    const pathParts = pathname.split('/');
    
    if (patternParts.length !== pathParts.length) return null;
    
    const params: Record<string, string> = {};
    
    for (let i = 0; i < patternParts.length; i++) {
      const patternPart = patternParts[i];
      const pathPart = pathParts[i];
      
      if (patternPart.startsWith(':')) {
        params[patternPart.slice(1)] = pathPart;
      } else if (patternPart !== pathPart) {
        return null;
      }
    }
    
    return { params };
  }
  
  function navigate(path: string) {
    window.history.pushState({}, '', path);
    currentPath(path);
  }
  
  function init() {
    window.addEventListener('popstate', () => {
      currentPath(window.location.pathname);
    });
  }
  
  return {
    currentPath,
    currentRoute,
    params,
    navigate,
    init
  };
}

// Usage
const HomePage: Pulse.Fn = () => <h1>Home</h1>;
const AboutPage: Pulse.Fn = () => <h1>About</h1>;
const UserPage: Pulse.Fn = () => {
  const router = appRouter;
  return <h1>User: {Pulse.computed(() => router.params().id)}</h1>;
};
const NotFoundPage: Pulse.Fn = () => <h1>404 - Not Found</h1>;

const appRouter = createRouter([
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/users/:id', component: UserPage }
]);

const App: Pulse.Fn = () => {
  appRouter.init();
  
  return (
    <div>
      <nav>
        <a href="/" onClick={(e) => {
          e.preventDefault();
          appRouter.navigate('/');
        }}>Home</a>
        <a href="/about" onClick={(e) => {
          e.preventDefault();
          appRouter.navigate('/about');
        }}>About</a>
      </nav>
      
      <main>
        {Pulse.computed(() => {
          const route = appRouter.currentRoute();
          if (route) {
            return <route.component />;
          }
          return <NotFoundPage />;
        })}
      </main>
    </div>
  );
};
```

## Async Data Loading

### Data Fetching Pattern

```tsx
function createAsyncResource<T>(
  fetcher: () => Promise<T>
) {
  const data = Pulse.signal<T | null>(null);
  const loading = Pulse.signal(false);
  const error = Pulse.signal<Error | null>(null);
  
  async function load() {
    loading(true);
    error(null);
    
    try {
      const result = await fetcher();
      data(result);
    } catch (e) {
      error(e as Error);
    } finally {
      loading(false);
    }
  }
  
  function refetch() {
    return load();
  }
  
  function reset() {
    data(null);
    error(null);
    loading(false);
  }
  
  return {
    data,
    loading,
    error,
    load,
    refetch,
    reset
  };
}

// Usage
const UserData: Pulse.Fn = () => {
  const resource = createAsyncResource(async () => {
    const response = await fetch('/api/user');
    return response.json();
  });
  
  // Load on mount
  Pulse.effect(() => {
    resource.load();
  });
  
  return (
    <div>
      {Pulse.computed(() => {
        if (resource.loading()) return <p>Loading...</p>;
        if (resource.error()) return <p>Error: {resource.error()!.message}</p>;
        if (!resource.data()) return <p>No data</p>;
        
        return <pre>{JSON.stringify(resource.data(), null, 2)}</pre>;
      })}
      
      <button onClick={() => resource.refetch()}>Reload</button>
    </div>
  );
};
```

### Pagination

```tsx
function createPagination<T>(
  fetchPage: (page: number, pageSize: number) => Promise<{ items: T[]; total: number }>
) {
  const currentPage = Pulse.signal(1);
  const pageSize = Pulse.signal(10);
  const items = Pulse.signal<T[]>([]);
  const total = Pulse.signal(0);
  const loading = Pulse.signal(false);
  
  const totalPages = Pulse.computed(() => 
    Math.ceil(total() / pageSize())
  );
  
  const hasNext = Pulse.computed(() => currentPage() < totalPages());
  const hasPrev = Pulse.computed(() => currentPage() > 1);
  
  async function loadPage(page: number) {
    loading(true);
    try {
      const result = await fetchPage(page, pageSize());
      items(result.items);
      total(result.total);
      currentPage(page);
    } finally {
      loading(false);
    }
  }
  
  function nextPage() {
    if (hasNext()) loadPage(currentPage() + 1);
  }
  
  function prevPage() {
    if (hasPrev()) loadPage(currentPage() - 1);
  }
  
  function goToPage(page: number) {
    if (page >= 1 && page <= totalPages()) loadPage(page);
  }
  
  return {
    items,
    loading,
    currentPage,
    totalPages,
    hasNext,
    hasPrev,
    nextPage,
    prevPage,
    goToPage,
    loadPage
  };
}

const PaginatedList: Pulse.Fn = () => {
  const pagination = createPagination<User>(async (page, pageSize) => {
    const response = await fetch(`/api/users?page=${page}&size=${pageSize}`);
    return response.json();
  });
  
  // Load first page
  Pulse.effect(() => {
    pagination.loadPage(1);
  });
  
  return (
    <div>
      {Pulse.computed(() => 
        pagination.loading() ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {pagination.items().map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )
      )}
      
      <div className="pagination">
        <button 
          disabled={Pulse.computed(() => !pagination.hasPrev())}
          onClick={() => pagination.prevPage()}
        >
          Previous
        </button>
        
        <span>
          Page {pagination.currentPage} of {pagination.totalPages}
        </span>
        
        <button 
          disabled={Pulse.computed(() => !pagination.hasNext())}
          onClick={() => pagination.nextPage()}
        >
          Next
        </button>
      </div>
    </div>
  );
};
```

## Infinite Scroll

```tsx
function createInfiniteScroll<T>(
  fetchPage: (page: number) => Promise<T[]>
) {
  const items = Pulse.signal<T[]>([]);
  const currentPage = Pulse.signal(0);
  const loading = Pulse.signal(false);
  const hasMore = Pulse.signal(true);
  
  async function loadMore() {
    if (loading() || !hasMore()) return;
    
    loading(true);
    const nextPage = currentPage() + 1;
    
    try {
      const newItems = await fetchPage(nextPage);
      
      if (newItems.length === 0) {
        hasMore(false);
      } else {
        items([...items(), ...newItems]);
        currentPage(nextPage);
      }
    } finally {
      loading(false);
    }
  }
  
  function reset() {
    items([]);
    currentPage(0);
    hasMore(true);
  }
  
  return {
    items,
    loading,
    hasMore,
    loadMore,
    reset
  };
}

const InfiniteList: Pulse.Fn = () => {
  const scroll = createInfiniteScroll<Post>(async (page) => {
    const response = await fetch(`/api/posts?page=${page}`);
    return response.json();
  });
  
  // Load first page
  Pulse.effect(() => {
    scroll.loadMore();
  });
  
  // Intersection observer for auto-loading
  const sentinelRef = Pulse.signal<HTMLElement | null>(null);
  
  Pulse.effect(() => {
    const element = sentinelRef();
    if (!element) return;
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        scroll.loadMore();
      }
    });
    
    observer.observe(element);
    
    return () => observer.disconnect();
  });
  
  return (
    <div>
      <ul>
        {Pulse.computed(() =>
          scroll.items().map(post => (
            <li key={post.id}>{post.title}</li>
          ))
        )}
      </ul>
      
      {Pulse.computed(() => scroll.hasMore() ? (
        <div ref={(el) => sentinelRef(el)}>
          {scroll.loading() ? 'Loading...' : 'Load more'}
        </div>
      ) : (
        <p>No more items</p>
      ))}
    </div>
  );
};
```

## Memory Management

### Binding Effects to DOM Elements

When creating effects inside components that may be dynamically added or removed from the DOM, use `Pulse.dom.bindEffectToElement()` to automatically clean up when the element is garbage collected.

```typescript
import Pulse from 'pulse-framework';

Pulse.dom.bindEffectToElement(
  element: Element,
  effectFn: () => void | (() => void)
): () => void
```

**Basic Usage:**

```tsx
const DynamicComponent: Pulse.Fn = () => {
  const element = <div>Dynamic Content</div>;
  
  // Effect bound to element lifecycle
  Pulse.dom.bindEffectToElement(element, () => {
    console.log('Element is in DOM');
    
    return () => {
      console.log('Element removed from DOM');
    };
  });
  
  return element;
};
```

**How It Works:**

1. Uses `WeakRef` to track the element without preventing garbage collection
2. Uses `FinalizationRegistry` for automatic cleanup when element is collected
3. Effect stops running when element is removed and garbage collected
4. Prevents memory leaks in dynamic UIs

**Modal Example:**

```tsx
const Modal: Pulse.Fn<{ onClose: () => void }> = ({ onClose }) => {
  const modalElement = (
    <div class="modal">
      <div class="modal-content">
        <h2>Modal Title</h2>
        <p>Modal content here...</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  ) as HTMLElement;
  
  // Bind effect to modal lifecycle
  Pulse.dom.bindEffectToElement(modalElement, () => {
    // Focus trap
    const focusableElements = modalElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    firstElement?.focus();
    
    // Handle escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });
  
  return modalElement;
};
```

**Dynamic List Example:**

```tsx
const TodoList: Pulse.Fn = () => {
  const todos = Pulse.signal([
    { id: 1, text: 'Learn Pulse' },
    { id: 2, text: 'Build app' }
  ]);
  
  return (
    <ul>
      {Pulse.computed(() =>
        todos().map(todo => {
          const item = <li>{todo.text}</li> as HTMLElement;
          
          // Each list item has its own effect
          Pulse.dom.bindEffectToElement(item, () => {
            console.log(`Todo ${todo.id} mounted`);
            
            return () => {
              console.log(`Todo ${todo.id} unmounted`);
            };
          });
          
          return item;
        })
      )}
    </ul>
  );
};
```

**When to Use:**

- ✅ Components created/destroyed dynamically (modals, tooltips, dropdowns)
- ✅ List items that can be added/removed
- ✅ Route-based components (SPA navigation)
- ✅ Any effect that depends on DOM element existence
- ✅ Third-party library integrations that need cleanup

**When NOT to Use:**

- ❌ Top-level app effects (use regular `effect()`)
- ❌ Effects not tied to specific DOM elements
- ❌ Global state management effects
- ❌ Effects that should persist regardless of DOM state

**Comparison with Regular Effects:**

```tsx
// ❌ Regular effect - may leak memory
const DynamicComponent: Pulse.Fn = () => {
  const element = <div>Content</div>;
  
  Pulse.effect(() => {
    console.log('Effect running');
    // This effect continues even after element is removed!
  });
  
  return element;
};

// ✅ Bound effect - automatic cleanup
const DynamicComponent: Pulse.Fn = () => {
  const element = <div>Content</div> as HTMLElement;
  
  Pulse.dom.bindEffectToElement(element, () => {
    console.log('Effect running');
    // Automatically stops when element is garbage collected
  });
  
  return element;
};
```

::: warning Browser Support
`WeakRef` and `FinalizationRegistry` are supported in all modern browsers (Chrome 84+, Firefox 79+, Safari 14.1+). For older browsers, use regular `effect()` with manual cleanup via `.destroy()`.
:::

::: tip Performance
`Pulse.dom.bindEffectToElement` has minimal overhead compared to regular effects. The WeakRef and FinalizationRegistry are native browser features optimized for memory management.
:::

## Optimistic Updates

```tsx
const optimisticStore = {
  todos: Pulse.signal<Todo[]>([]),
  
  async addTodo(text: string) {
    // Optimistic update
    const tempId = Date.now();
    const optimisticTodo = { id: tempId, text, completed: false };
    optimisticStore.todos([...optimisticStore.todos(), optimisticTodo]);
    
    try {
      // Actual API call
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      });
      
      const realTodo = await response.json();
      
      // Replace optimistic with real
      optimisticStore.todos(
        optimisticStore.todos().map(t => 
          t.id === tempId ? realTodo : t
        )
      );
    } catch (error) {
      // Rollback on error
      optimisticStore.todos(
        optimisticStore.todos().filter(t => t.id !== tempId)
      );
      alert('Failed to add todo');
    }
  },
  
  async deleteTodo(id: number) {
    // Save original state
    const original = optimisticStore.todos();
    
    // Optimistic delete
    optimisticStore.todos(original.filter(t => t.id !== id));
    
    try {
      await fetch(`/api/todos/${id}`, { method: 'DELETE' });
    } catch (error) {
      // Rollback
      optimisticStore.todos(original);
      alert('Failed to delete todo');
    }
  }
};
```

## Next Steps

- **[Reactivity Guide](/guide/pulse-framework/reactivity)** — Master signals and computed
- **[Components Guide](/guide/pulse-framework/components)** — Build reusable components
- **[React Comparison](/guide/pulse-framework/comparison)** — Learn the differences

---

**Build scalable applications! 🚀**
