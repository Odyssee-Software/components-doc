# Guide Complet JSX/TSX avec Pulse Framework

## Introduction

**JSX est l'approche recommandée** pour créer des composants avec Pulse Framework. Contrairement à React, Pulse adopte une philosophie **"DOM-first"** : vos composants JSX retournent directement des éléments DOM réels, pas une représentation virtuelle.

### "What You See Is What You Get"

```tsx
const MyComponent: Pulse.Fn = () => {
  return <div>Hello World</div>;
};

// <MyComponent /> retourne un vrai HTMLDivElement
const element = <MyComponent />;
console.log(element instanceof HTMLDivElement); // true

// Montage direct dans le DOM
document.body.appendChild(element);
```

**Pas de Virtual DOM, pas de réconciliation, pas de diffing** : vous manipulez du DOM réel avec la puissance de la réactivité fine-grained.

## Configuration

### TypeScript Configuration

Dans votre `tsconfig.json` :

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "pulse-framework",
    "types": ["pulse-framework"]
  }
}
```

**Alternative (compatibilité maximale)** :

```json
{
  "compilerOptions": {
    "jsx": "preserve",
    "jsxFactory": "Pulse.jsx",
    "jsxFragmentFactory": "Pulse.Fragment"
  }
}
```

### Extensions de Fichiers

Utilisez `.tsx` pour vos fichiers contenant du JSX :

```
src/
  ├── App.tsx           ← Composants JSX
  ├── components/
  │   ├── Button.tsx
  │   ├── Card.tsx
  │   └── Form.tsx
  └── main.ts           ← Point d'entrée
```

### Import Automatique

Avec `jsxImportSource`, pas besoin d'importer explicitement :

```tsx
// ✅ Pas besoin d'import JSX explicite
import { signal } from 'pulse-framework';

const Counter: Pulse.Fn = () => {
  const count = signal(0);
  return <div>{count}</div>;
};
```

## Le Type `Pulse.Fn`

`Pulse.Fn` est le type TypeScript pour les Function Components :

```typescript
type Pulse.Fn<PROPS extends Record<string, any> = Record<string, any>> = (
  props: PROPS
) => Pulse.JSX.Element | null
```

### Signature

- **Input** : Props (objet TypeScript)
- **Output** : `HTMLElement`, `DocumentFragment`, ou `null`

### Exemples de Signatures

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

const UserCard: Pulse.Fn<UserProps> = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Age: {props.age}</p>
    </div>
  );
};

// Avec déstructuration (recommandé)
const UserCard: Pulse.Fn<UserProps> = ({ name, age }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
};

// Avec props optionnelles
interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: Pulse.Fn<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {label}
    </button>
  );
};
```

## Syntaxe de Base

### Éléments HTML

```tsx
const App: Pulse.Fn = () => {
  return (
    <div className="container">
      <h1>Titre</h1>
      <p>Paragraphe</p>
      <button onClick={() => console.log('Clicked')}>
        Cliquer
      </button>
    </div>
  );
};
```

### Attributs et Props

```tsx
const Form: Pulse.Fn = () => {
  return (
    <div>
      {/* Attributs HTML standard */}
      <input type="text" placeholder="Nom" id="name" />
      
      {/* className → class */}
      <div className="card"></div>
      
      {/* htmlFor → for */}
      <label htmlFor="email">Email</label>
      
      {/* Événements avec camelCase */}
      <button onClick={handleClick}>Cliquer</button>
      <input onInput={handleInput} onFocus={handleFocus} />
      
      {/* Booléens */}
      <button disabled={true}>Désactivé</button>
      <input required checked />
    </div>
  );
};
```

### Expressions JavaScript

```tsx
const Greeting: Pulse.Fn = () => {
  const name = "Alice";
  const age = 25;
  
  return (
    <div>
      {/* Variables */}
      <p>Bonjour {name}</p>
      
      {/* Expressions */}
      <p>Dans 5 ans: {age + 5}</p>
      
      {/* Ternaire */}
      <p>{age >= 18 ? 'Majeur' : 'Mineur'}</p>
      
      {/* Appel de fonction */}
      <p>{formatDate(new Date())}</p>
    </div>
  );
};
```

## Réactivité avec Signals

### Convention Importante : Ne PAS Appeler avec `()` dans le JSX

**Dans le JSX pour l'affichage, les signals/computed ne doivent PAS être appelés avec `()`** :

```tsx
const Counter: Pulse.Fn = () => {
  const count = signal(0);
  
  return (
    <div>
      {/* ✅ CORRECT - Sans () dans le JSX d'affichage */}
      <p>Count: {count}</p>
      
      {/* ❌ INCORRECT - Ne pas appeler avec () */}
      <p>Count: {count()}</p>
      
      {/* ✅ CORRECT - Avec () dans les event handlers */}
      <button onClick={() => count(count() + 1)}>Increment</button>
    </div>
  );
};
```

**Pourquoi ?** Le moteur de rendu Pulse détecte automatiquement les fonctions (signals/computed) passées comme children et crée des bindings réactifs. Si vous appelez `signal()`, vous passez la valeur actuelle au lieu de la fonction, et la réactivité ne fonctionne pas.

### Quand Utiliser `()` et Quand Ne Pas L'Utiliser

| Contexte | Syntaxe | Exemple | Raison |
|----------|---------|---------|--------|
| **JSX affichage** | `{count}` **sans ()** | `<p>{count}</p>` | Le render détecte et bind automatiquement |
| **JSX propriétés** | `value={signal}` **sans ()** | `<input value={count} />` | Binding automatique des props |
| **Event handlers** | `count()` **avec ()** | `onClick={() => count(count() + 1)}` | Lire/écrire la valeur dans la logique |
| **Computed definition** | `count()` **avec ()** | `computed(() => count() * 2)` | Lire la valeur pour calculer |
| **Inside map** | `items()` **avec ()** | `items().map(x => ...)` | Lire le tableau pour itérer |
| **Conditions** | `count()` **avec ()** | `if (count() > 5)` | Lire la valeur pour tester |
| **Effect body** | `count()` **avec ()** | `effect(() => log(count()))` | Lire pour déclencher l'effet |
| **JSX dans computed** | `{signal}` **sans ()** | `computed(() => <p>{count}</p>)` | Le JSX retourné utilise la même règle |

### Signals dans les Propriétés

```tsx
const DynamicInput: Pulse.Fn = () => {
  const value = signal('Initial');
  const placeholder = signal('Entrez du texte...');
  const disabled = signal(false);
  
  return (
    <input
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onInput={(e) => value((e.target as HTMLInputElement).value)}
    />
  );
};
```

**Note :** Les propriétés reçoivent le signal sans `()`, et le binding est automatique. Dans l'event handler `onInput`, on utilise `value()` avec `()` pour appeler le setter.

### Computed Values

```tsx
const UserProfile: Pulse.Fn = () => {
  const firstName = signal('John');
  const lastName = signal('Doe');
  
  // ✅ Dans les computed: AVEC () pour lire les valeurs
  const fullName = computed(() => `${firstName()} ${lastName()}`);
  const initials = computed(() => 
    `${firstName()[0]}${lastName()[0]}`.toUpperCase()
  );
  
  return (
    <div>
      {/* ✅ Dans le JSX: SANS () pour l'affichage */}
      <h1>{fullName}</h1>
      <span className="initials">{initials}</span>
      
      {/* ✅ Propriétés: SANS () */}
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

### Classes et Styles Dynamiques

```tsx
const StatusBadge: Pulse.Fn = () => {
  const status = signal<'success' | 'warning' | 'error'>('success');
  
  // ✅ Dans les computed: AVEC () pour lire
  const badgeClass = computed(() => `badge badge-${status()}`);
  const badgeText = computed(() => {
    switch (status()) {
      case 'success': return '✓ Succès';
      case 'warning': return '⚠ Attention';
      case 'error': return '✕ Erreur';
    }
  });
  
  return (
    <div>
      {/* ✅ Dans le JSX: SANS () */}
      <span className={badgeClass}>
        {badgeText}
      </span>
      
      {/* ✅ Event handler: AVEC () pour lire/écrire */}
      <select value={status} onChange={(e) => status((e.target as HTMLSelectElement).value as any)}>
        <option value="success">Success</option>
        <option value="warning">Warning</option>
        <option value="error">Error</option>
      </select>
    </div>
  );
};
```

### Styles Inline

```tsx
const Box: Pulse.Fn = () => {
  const width = signal(100);
  const color = signal('#3498db');
  
  // ✅ Computed: AVEC () pour lire
  const style = computed(() => `
    width: ${width()}px;
    height: ${width()}px;
    background-color: ${color()};
    transition: all 0.3s;
  `);
  
  return (
    <div>
      {/* ✅ JSX propriété: SANS () */}
      <div style={style}></div>
      
      <input 
        type="range" 
        min="50" 
        max="300" 
        value={width}
        onInput={(e) => width(Number((e.target as HTMLInputElement).value))}
      />
      
      <input 
        type="color" 
        value={color}
        onInput={(e) => color((e.target as HTMLInputElement).value)}
      />
    </div>
  );
};
```

## Fragments

Les fragments permettent de grouper des éléments sans ajouter de nœud DOM wrapper :

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

// Équivalent avec Fragment explicite
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

**Utilisation** :

```tsx
const App: Pulse.Fn = () => {
  return (
    <ul>
      <List />  {/* Insère directement les <li> sans wrapper */}
    </ul>
  );
};
```

**Retour** : Un `DocumentFragment` qui se "déploie" lors de l'insertion dans le DOM.

## Props et Composition

### Props Typées

```tsx
interface CardProps {
  title: string;
  subtitle?: string;
  children?: any;
  onClose?: () => void;
}

const Card: Pulse.Fn<CardProps> = ({ title, subtitle, children, onClose }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
        {subtitle && <p className="subtitle">{subtitle}</p>}
        {onClose && <button onClick={onClose}>✕</button>}
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};
```

### Children

```tsx
const App: Pulse.Fn = () => {
  return (
    <Card title="Mon Titre" subtitle="Sous-titre" onClose={() => console.log('Closed')}>
      <p>Contenu de la carte</p>
      <button>Action</button>
    </Card>
  );
};
```

### Props Réactives

Les props peuvent contenir des signals ou computed values :

```tsx
interface CounterDisplayProps {
  count: Signal<number>;
  label: string;
}

const CounterDisplay: Pulse.Fn<CounterDisplayProps> = ({ count, label }) => {
  return (
    <div>
      <span>{label}: </span>
      <strong>{count}</strong>
    </div>
  );
};

// Utilisation
const App: Pulse.Fn = () => {
  const count = signal(0);
  
  return (
    <div>
      <CounterDisplay count={count} label="Compteur" />
      <button onClick={() => count(count() + 1)}>+</button>
    </div>
  );
};
```

### Composition Avancée

```tsx
interface ButtonGroupProps {
  children?: any;
  variant?: 'horizontal' | 'vertical';
}

const ButtonGroup: Pulse.Fn<ButtonGroupProps> = ({ children, variant = 'horizontal' }) => {
  return (
    <div className={`btn-group btn-group-${variant}`}>
      {children}
    </div>
  );
};

const App: Pulse.Fn = () => {
  return (
    <ButtonGroup variant="horizontal">
      <button>Premier</button>
      <button>Deuxième</button>
      <button>Troisième</button>
    </ButtonGroup>
  );
};
```

## Listes et Rendu Conditionnel

### Listes Dynamiques

```tsx
const UserList: Pulse.Fn = () => {
  const users = signal([
    { id: 1, name: 'Alice', role: 'Admin' },
    { id: 2, name: 'Bob', role: 'User' },
    { id: 3, name: 'Charlie', role: 'User' }
  ]);
  
  return (
    <ul>
      {computed(() => 
        users().map(user => (
          <li key={user.id}>
            {user.name} - {user.role}
          </li>
        ))
      )}
    </ul>
  );
};
```

**Point clé** : Wrap le `.map()` dans `computed()` pour que la liste se mette à jour automatiquement quand le signal change.

### Filtrage de Listes

```tsx
const FilteredList: Pulse.Fn = () => {
  const items = signal(['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']);
  const filter = signal('');
  
  const filteredItems = computed(() => 
    items().filter(item => 
      item.toLowerCase().includes(filter().toLowerCase())
    )
  );
  
  return (
    <div>
      <input 
        type="text" 
        value={filter}
        onInput={(e) => filter((e.target as HTMLInputElement).value)}
        placeholder="Filter items..."
      />
      
      <ul>
        {computed(() => 
          filteredItems().map(item => <li key={item}>{item}</li>)
        )}
      </ul>
      
      <p>Showing {computed(() => `${filteredItems().length} of ${items().length} items`)}</p>
    </div>
  );
};
```

### Rendu Conditionnel

```tsx
const LoginForm: Pulse.Fn = () => {
  const isLoggedIn = signal(false);
  const username = signal('');
  
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
            <input 
              value={username}
              onInput={(e) => username((e.target as HTMLInputElement).value)}
              placeholder="Username"
            />
            <button onClick={() => isLoggedIn(true)}>Login</button>
          </div>
        )
      )}
    </div>
  );
};
```

### Rendu Conditionnel Multiple

```tsx
const StatusView: Pulse.Fn = () => {
  const status = signal<'loading' | 'success' | 'error' | 'idle'>('idle');
  
  return (
    <div>
      {computed(() => {
        switch (status()) {
          case 'loading':
            return <div className="spinner">Loading...</div>;
          case 'success':
            return <div className="success">✓ Success!</div>;
          case 'error':
            return <div className="error">✕ Error occurred</div>;
          case 'idle':
            return <div>Ready to start</div>;
        }
      })}
      
      <button onClick={() => status('loading')}>Start</button>
    </div>
  );
};
```

## Effects et Lifecycle

### Basic Effect

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

### Effect avec Cleanup

```tsx
const Timer: Pulse.Fn = () => {
  const seconds = signal(0);
  const isRunning = signal(false);
  
  effect(() => {
    if (!isRunning()) return;
    
    const interval = setInterval(() => {
      seconds(seconds() + 1);
    }, 1000);
    
    // Cleanup : retourner une fonction de nettoyage
    return () => {
      clearInterval(interval);
      console.log('Timer stopped');
    };
  });
  
  return (
    <div>
      <div>Elapsed: {seconds}s</div>
      <button onClick={() => isRunning(!isRunning())}>
        {computed(() => isRunning() ? 'Stop' : 'Start')}
      </button>
      <button onClick={() => {
        isRunning(false);
        seconds(0);
      }}>Reset</button>
    </div>
  );
};
```

### Effect pour API Calls

```tsx
const UserData: Pulse.Fn = () => {
  const userId = signal(1);
  const userData = signal<any>(null);
  const loading = signal(false);
  
  effect(() => {
    const id = userId();
    loading(true);
    
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        userData(data);
        loading(false);
      });
  });
  
  return (
    <div>
      <input 
        type="number" 
        value={userId}
        onInput={(e) => userId(Number((e.target as HTMLInputElement).value))}
      />
      
      {computed(() => 
        loading() ? (
          <p>Loading...</p>
        ) : userData() ? (
          <div>
            <h3>{userData().name}</h3>
            <p>{userData().email}</p>
          </div>
        ) : null
      )}
    </div>
  );
};
```

## Patterns Avancés

### Store Global (État Partagé)

```tsx
// store.ts
import { signal, computed } from 'pulse-framework';

export const createUserStore = () => {
  const users = signal<User[]>([]);
  const selectedUserId = signal<number | null>(null);
  
  const selectedUser = computed(() => 
    users().find(u => u.id === selectedUserId())
  );
  
  const addUser = (user: User) => {
    users([...users(), user]);
  };
  
  const removeUser = (id: number) => {
    users(users().filter(u => u.id !== id));
  };
  
  return {
    users,
    selectedUserId,
    selectedUser,
    addUser,
    removeUser
  };
};

export const userStore = createUserStore();

// UserList.tsx
import { userStore } from './store';

const UserList: Pulse.Fn = () => {
  return (
    <ul>
      {computed(() => 
        userStore.users().map(user => (
          <li 
            key={user.id}
            onClick={() => userStore.selectedUserId(user.id)}
            className={computed(() => 
              userStore.selectedUserId() === user.id ? 'selected' : ''
            )}
          >
            {user.name}
          </li>
        ))
      )}
    </ul>
  );
};
```

### Custom Hooks Pattern (Signals Réutilisables)

```tsx
// useForm.ts
import { signal } from 'pulse-framework';

export const useForm = <T extends Record<string, any>>(initialValues: T) => {
  const values = signal(initialValues);
  const errors = signal<Record<string, string>>({});
  
  const setValue = (field: keyof T, value: any) => {
    values({ ...values(), [field]: value });
  };
  
  const setError = (field: keyof T, error: string) => {
    errors({ ...errors(), [field]: error });
  };
  
  const validate = (rules: Record<keyof T, (value: any) => string | null>) => {
    const newErrors: Record<string, string> = {};
    
    Object.entries(rules).forEach(([field, rule]) => {
      const error = rule(values()[field]);
      if (error) newErrors[field] = error;
    });
    
    errors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  return { values, errors, setValue, setError, validate };
};

// ContactForm.tsx
const ContactForm: Pulse.Fn = () => {
  const form = useForm({
    name: '',
    email: '',
    message: ''
  });
  
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    
    const isValid = form.validate({
      name: (v) => !v ? 'Name required' : null,
      email: (v) => !v.includes('@') ? 'Invalid email' : null,
      message: (v) => v.length < 10 ? 'Message too short' : null
    });
    
    if (isValid) {
      console.log('Form submitted:', form.values());
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input 
          value={form.values().name}
          onInput={(e) => form.setValue('name', (e.target as HTMLInputElement).value)}
        />
        {computed(() => form.errors().name && (
          <span className="error">{form.errors().name}</span>
        ))}
      </div>
      
      <div>
        <input 
          type="email"
          value={form.values().email}
          onInput={(e) => form.setValue('email', (e.target as HTMLInputElement).value)}
        />
        {computed(() => form.errors().email && (
          <span className="error">{form.errors().email}</span>
        ))}
      </div>
      
      <div>
        <textarea 
          value={form.values().message}
          onInput={(e) => form.setValue('message', (e.target as HTMLTextAreaElement).value)}
        />
        {computed(() => form.errors().message && (
          <span className="error">{form.errors().message}</span>
        ))}
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
};
```

### Portal Pattern

```tsx
const Modal: Pulse.Fn<{ children?: any; onClose: () => void }> = ({ children, onClose }) => {
  const modalRoot = document.getElementById('modal-root') || document.body;
  
  const modalContent = (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
  
  modalRoot.appendChild(modalContent as HTMLElement);
  
  // Cleanup when component is removed
  effect(() => {
    return () => {
      modalRoot.removeChild(modalContent as HTMLElement);
    };
  });
  
  return null;
};

const App: Pulse.Fn = () => {
  const showModal = signal(false);
  
  return (
    <div>
      <button onClick={() => showModal(true)}>Open Modal</button>
      
      {computed(() => 
        showModal() && (
          <Modal onClose={() => showModal(false)}>
            <h2>Modal Content</h2>
            <p>This is a modal</p>
          </Modal>
        )
      )}
    </div>
  );
};
```

## Différences avec React

### Comparaison Côte-à-Côte

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

### Tableau Comparatif

| Feature | Pulse | React |
|---------|-------|-------|
| **Virtual DOM** | ❌ Non | ✅ Oui |
| **Re-renders** | ❌ Non | ✅ Oui |
| **State** | `signal()` | `useState()` |
| **Computed** | `computed()` | `useMemo()` |
| **Effects** | `effect()` | `useEffect()` |
| **Dependencies** | Auto-tracking | Manuel `[deps]` |
| **Signals dans JSX** | `{count}` sans `()` | `{count}` |
| **Retour composant** | DOM réel | Description VDOM |
| **Granularité updates** | Fine (1 nœud) | Grossière (composant) |
| **Performance** | Excellent | Bon |

### Points Clés de Migration

1. **Pas de hooks** : `useState` → `signal`, `useEffect` → `effect`, `useMemo` → `computed`
2. **Pas de tableau de dépendances** : tracking automatique
3. **Syntaxe JSX similaire** : Les signals s'affichent avec `{count}` (sans `()`), mais utilisez `count()` dans la logique (handlers, computed, conditions)
4. **Pas de re-render** : mises à jour granulaires automatiques
5. **DOM réel** : `<Component />` retourne un vrai `HTMLElement`

## Best Practices

### 1. Nommage PascalCase

```tsx
// ✅ Bon
const UserCard: Pulse.Fn = () => { };
const NavBar: Pulse.Fn = () => { };

// ❌ Mauvais
const userCard: Pulse.Fn = () => { };
const navbar: Pulse.Fn = () => { };
```

### 2. Signals Locaux vs Globaux

```tsx
// ✅ Signal local (état UI du composant)
const Dropdown: Pulse.Fn = () => {
  const isOpen = signal(false); // Local
  return <div>{/* ... */}</div>;
};

// ✅ Signal global (état partagé applicatif)
const globalUser = signal<User | null>(null);
const globalTheme = signal<'light' | 'dark'>('light');
```

### 3. Déstructuration des Props

```tsx
// ✅ Bon - lisible
const Button: Pulse.Fn<ButtonProps> = ({ label, onClick, variant }) => {
  return <button>{label}</button>;
};

// ❌ Moins lisible
const Button: Pulse.Fn<ButtonProps> = (props) => {
  return <button>{props.label}</button>;
};
```

### 4. Mémorisation des Handlers

```tsx
// ✅ Optimal - fonction stable
const Form: Pulse.Fn = () => {
  const handleSubmit = (e: Event) => {
    e.preventDefault();
  };
  
  return <form onSubmit={handleSubmit}>...</form>;
};

// ⚠️ Acceptable mais inline
const Form: Pulse.Fn = () => {
  return <form onSubmit={(e) => e.preventDefault()}>...</form>;
};
```

### 5. Types Explicites

```tsx
// ✅ Bon - types clairs
interface User {
  id: number;
  name: string;
  email: string;
}

const users = signal<User[]>([]);

// ❌ Type implicite any
const users = signal([]);
```

### 6. Computed pour Transformations

```tsx
// ✅ Bon - computed pour logique de transformation
const filteredUsers = computed(() => 
  users().filter(u => u.active)
);

// ❌ Mauvais - recalcul à chaque render
const filteredUsers = users().filter(u => u.active);
```

## Quand Utiliser JSX vs render()

### ✅ Utiliser JSX (99% des cas)

- Composants UI déclaratifs
- Structure claire et lisible
- Type-safety avec TypeScript
- Auto-complétion IDE
- Équipe habituée à React/JSX

### ✅ Utiliser render() (cas spécifiques)

- Génération programmatique complexe
- Logique métier avec boucles/conditions avancées
- Intégration avec code legacy
- Maximum de contrôle sur la structure DOM

```tsx
// JSX : Déclaratif et clair
const Card: Pulse.Fn = () => {
  return (
    <div className="card">
      <h3>Title</h3>
      <p>Content</p>
    </div>
  );
};

// render() : Programmatique
const createDynamicCard = (fields: string[]) => {
  return render({
    tag: 'div',
    attributes: { class: 'card' },
    children: fields.map(field => render({
      tag: 'div',
      properties: { textContent: field }
    }))
  });
};
```

## Conclusion

JSX avec Pulse Framework offre :

- 🎯 **Simplicité** : Pas de complexité cachée, pas de Virtual DOM
- ⚡ **Performance** : Mises à jour granulaires ultra-rapides
- 🔧 **Flexibilité** : DOM réel, manipulation directe possible
- 💪 **Type-safety** : Support TypeScript complet
- 🚀 **Productivité** : Syntaxe familière, courbe d'apprentissage douce

**Pulse = JSX moderne + DOM réel + Réactivité fine-grained**

## Prochaines Étapes

- Découvrez les [Patterns Avancés](./04-advanced-patterns.md)
- Explorez le [Debugging](./07-debugging.md)
- Optimisez avec le [Scheduler](./08-scheduler-batching.md)