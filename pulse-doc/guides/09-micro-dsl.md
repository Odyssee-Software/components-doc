# Micro-DSL : Bindings Déclaratifs dans le HTML

Le Micro-DSL de Pulse permet d'écrire des bindings réactifs **directement dans le HTML** sans JSX, avec une syntaxe inspirée de Vue et Alpine.js.

## Philosophie

Pulse propose **deux approches** complémentaires :

1. **JSX** : Pour les composants complexes (cf. guide 06-jsx-usage.md)
2. **Micro-DSL** : Pour les bindings simples directement dans le HTML

Le DSL est idéal pour :
- Migration progressive d'apps HTML existantes
- Prototypage rapide
- Bindings simples sans overhead de composants
- Approche "HTML-first" sans build step

## Vue d'Ensemble

```html
<div>
  <!-- Texte réactif -->
  <h1 :text="title"></h1>
  
  <!-- Input bidirectionnel -->
  <input type="text" :model="name" />
  
  <!-- Attributs dynamiques -->
  <img :attr.src="imageUrl" :attr.alt="imageAlt" />
  
  <!-- Classes conditionnelles -->
  <div :class.active="isActive" :class.disabled="!enabled"></div>
  
  <!-- Styles dynamiques -->
  <div :style.color="textColor" :style.fontSize="fontSize + 'px'"></div>
  
  <!-- Visibilité conditionnelle -->
  <p :show="isVisible">Visible seulement si true</p>
  
  <!-- Event handlers -->
  <button :on.click="handleClick">Click me</button>
</div>
```

## Installation

Le DSL nécessite un scan explicite du DOM :

```typescript
import { createApp, signal, scanDSL } from 'pulse-framework'

const app = createApp({
  setup() {
    const name = signal('World')
    const count = signal(0)
    
    return { name, count }
  }
})

// Monte l'app et scan le DSL
app.mount(document.getElementById('app')!)
scanDSL(document.getElementById('app')!, app.scope)
```

## Directives Disponibles

### `:text` - Contenu Textuel

Injecte du texte réactif dans un élément :

```html
<p :text="message"></p>
<h1 :text="'Hello ' + name + '!'"></h1>
<span :text="count * 2"></span>
```

```typescript
const message = signal('Hello World')
const name = signal('Alice')
const count = signal(5)
```

**Équivalent JSX :**
```tsx
<p>{message()}</p>
<h1>Hello {name()}!</h1>
<span>{count() * 2}</span>
```

### `:model` - Binding Bidirectionnel

Synchronise automatiquement un `<input>` avec un signal :

```html
<input type="text" :model="name" />
<input type="number" :model="age" />
<textarea :model="description"></textarea>
<input type="checkbox" :model="agreed" />
```

```typescript
const name = signal('')
const age = signal(0)
const description = signal('')
const agreed = signal(false)
```

**Fonctionnement :**
- `input.value` → `signal(newValue)` lors de la saisie
- `signal()` → `input.value` lors des changements programmatiques

**Équivalent JSX :**
```tsx
<input 
  value={name()} 
  onInput={(e) => name(e.target.value)} 
/>
```

### `:attr.*` - Attributs Dynamiques

Bind des attributs HTML de manière réactive :

```html
<img :attr.src="imageUrl" :attr.alt="imageAlt" />
<a :attr.href="link" :attr.target="'_blank'">Link</a>
<input :attr.placeholder="placeholderText" />
<div :attr.data-id="userId"></div>
```

```typescript
const imageUrl = signal('/logo.png')
const imageAlt = signal('Company Logo')
const link = signal('https://example.com')
const userId = signal(123)
```

**Syntaxe :** `:attr.<nom-attribut>="expression"`

### `:prop.*` - Propriétés DOM

Modifie directement les propriétés JavaScript du DOM :

```html
<input :prop.value="text" />
<video :prop.currentTime="seekTime" />
<input :prop.checked="isChecked" />
```

```typescript
const text = signal('Hello')
const seekTime = signal(30)
const isChecked = signal(true)
```

**Différence avec `:attr` :**
- `:attr.value` → `element.setAttribute('value', ...)`
- `:prop.value` → `element.value = ...`

### `:class.*` - Classes Conditionnelles

Ajoute/retire des classes CSS de manière réactive :

```html
<div 
  :class.active="isActive"
  :class.disabled="!enabled"
  :class.error="hasError"
></div>
```

```typescript
const isActive = signal(true)
const enabled = signal(false)
const hasError = signal(false)
```

**Résultat :**
```html
<div class="active error"></div>
```

**Équivalent JSX :**
```tsx
<div class={{
  active: isActive(),
  disabled: !enabled(),
  error: hasError()
}} />
```

### `:style.*` - Styles Dynamiques

Modifie les styles CSS inline de manière réactive :

```html
<div 
  :style.color="textColor"
  :style.backgroundColor="bgColor"
  :style.fontSize="fontSize + 'px'"
  :style.transform="'rotate(' + rotation + 'deg)'"
></div>
```

```typescript
const textColor = signal('#333')
const bgColor = signal('#fff')
const fontSize = signal(16)
const rotation = signal(45)
```

**Syntaxe :** `:style.<propriété-css>="expression"`

**Camel case ou kebab-case :**
```html
<!-- ✅ Les deux fonctionnent -->
<div :style.backgroundColor="color"></div>
<div :style.background-color="color"></div>
```

### `:show` - Visibilité Conditionnelle

Affiche/masque un élément avec `display: none` :

```html
<div :show="isVisible">
  Contenu visible seulement si isVisible === true
</div>

<p :show="count > 5">
  Apparaît quand count > 5
</p>
```

```typescript
const isVisible = signal(true)
const count = signal(0)
```

**Implémentation :**
- `true` → `element.style.display = ''` (affiche)
- `false` → `element.style.display = 'none'` (cache)

**Équivalent JSX :**
```tsx
{isVisible() && <div>Contenu</div>}
```

### `:on.*` - Event Handlers

Attache des écouteurs d'événements réactifs :

```html
<button :on.click="handleClick">Click me</button>
<input :on.input="handleInput" />
<form :on.submit="handleSubmit">...</form>
<div :on.mouseenter="handleHover">Hover me</div>
```

```typescript
const handleClick = () => console.log('Clicked!')
const handleInput = (e: Event) => console.log(e.target.value)
const handleSubmit = (e: Event) => e.preventDefault()
const handleHover = () => console.log('Hovered!')
```

**Syntaxe :** `:on.<event-name>="handlerFunction"`

**Événements supportés :** Tous les événements DOM standards (`click`, `input`, `submit`, `mouseenter`, `keydown`, etc.)

## Expressions Dynamiques

Le DSL évalue les expressions JavaScript dans le contexte du scope :

```html
<!-- Arithmétique -->
<p :text="count * 2"></p>
<p :text="price + tax"></p>

<!-- Concaténation -->
<h1 :text="'Hello ' + name + '!'"></h1>

<!-- Comparaison -->
<div :show="age >= 18"></div>
<div :class.premium="points > 1000"></div>

<!-- Ternaire -->
<span :text="isLoggedIn ? 'Logout' : 'Login'"></span>

<!-- Appel de fonction -->
<p :text="formatDate(timestamp)"></p>
```

```typescript
const count = signal(5)
const name = signal('Alice')
const age = signal(20)
const formatDate = (ts: number) => new Date(ts).toLocaleDateString()
```

## Exemples Complets

### Compteur Simple

```html
<div id="app">
  <h1 :text="'Count: ' + count"></h1>
  <button :on.click="increment">+</button>
  <button :on.click="decrement">-</button>
</div>
```

```typescript
import { createApp, signal, scanDSL } from 'pulse-framework'

const app = createApp({
  setup() {
    const count = signal(0)
    const increment = () => count(count() + 1)
    const decrement = () => count(count() - 1)
    
    return { count, increment, decrement }
  }
})

app.mount(document.getElementById('app')!)
scanDSL(document.getElementById('app')!, app.scope)
```

### Formulaire de Contact

```html
<form id="contact-form" :on.submit="handleSubmit">
  <div>
    <label>Nom :</label>
    <input type="text" :model="name" :attr.placeholder="'Votre nom'" />
  </div>
  
  <div>
    <label>Email :</label>
    <input type="email" :model="email" />
    <span 
      :show="!isValidEmail" 
      :style.color="'red'"
      :text="'Email invalide'"
    ></span>
  </div>
  
  <div>
    <label>Message :</label>
    <textarea :model="message" rows="5"></textarea>
  </div>
  
  <button 
    type="submit" 
    :attr.disabled="!canSubmit"
    :class.disabled="!canSubmit"
  >
    Envoyer
  </button>
</form>
```

```typescript
import { createApp, signal, computed, scanDSL } from 'pulse-framework'

const app = createApp({
  setup() {
    const name = signal('')
    const email = signal('')
    const message = signal('')
    
    const isValidEmail = computed(() => 
      email().includes('@') && email().includes('.')
    )
    
    const canSubmit = computed(() => 
      name().length > 0 && 
      isValidEmail() && 
      message().length > 0
    )
    
    const handleSubmit = (e: Event) => {
      e.preventDefault()
      console.log({ name: name(), email: email(), message: message() })
    }
    
    return { name, email, message, isValidEmail, canSubmit, handleSubmit }
  }
})

app.mount(document.getElementById('contact-form')!)
scanDSL(document.getElementById('contact-form')!, app.scope)
```

### Todo List

```html
<div id="todo-app">
  <h1>My Todos</h1>
  
  <div>
    <input 
      type="text" 
      :model="newTodo" 
      :attr.placeholder="'Nouvelle tâche...'"
      :on.keydown.enter="addTodo"
    />
    <button :on.click="addTodo">Ajouter</button>
  </div>
  
  <ul id="todo-list">
    <!-- Les todos seront ajoutés dynamiquement -->
  </ul>
  
  <p :text="'Total: ' + todos.length + ' tâche(s)'"></p>
</div>
```

```typescript
import { createApp, signal, computed, scanDSL, render, effect } from 'pulse-framework'

interface Todo {
  id: number
  text: string
  done: boolean
}

const app = createApp({
  setup() {
    const newTodo = signal('')
    const todos = signal<Todo[]>([])
    
    const addTodo = () => {
      if (newTodo().trim()) {
        todos([...todos(), {
          id: Date.now(),
          text: newTodo(),
          done: false
        }])
        newTodo('')
      }
    }
    
    const toggleTodo = (id: number) => {
      todos(todos().map(t => 
        t.id === id ? { ...t, done: !t.done } : t
      ))
    }
    
    const deleteTodo = (id: number) => {
      todos(todos().filter(t => t.id !== id))
    }
    
    return { newTodo, todos, addTodo, toggleTodo, deleteTodo }
  }
})

app.mount(document.getElementById('todo-app')!)
scanDSL(document.getElementById('todo-app')!, app.scope)

// Render la liste dynamiquement avec effect
const todoList = document.getElementById('todo-list')!
const { todos, toggleTodo, deleteTodo } = app.scope

effect(() => {
  todoList.innerHTML = ''
  
  todos().forEach(todo => {
    const li = render({
      tag: 'li',
      children: [
        {
          tag: 'input',
          attributes: { type: 'checkbox' },
          properties: { checked: signal(todo.done) },
          events: { change: () => toggleTodo(todo.id) }
        },
        {
          tag: 'span',
          properties: { 
            textContent: todo.text,
            style: todo.done ? 'text-decoration: line-through;' : ''
          }
        },
        {
          tag: 'button',
          properties: { textContent: '×' },
          events: { click: () => deleteTodo(todo.id) }
        }
      ]
    })
    todoList.appendChild(li)
  })
})
```

### Thème Dynamique

```html
<div id="theme-app">
  <h1 :text="'Theme: ' + theme"></h1>
  
  <button :on.click="toggleTheme">Toggle Theme</button>
  
  <div 
    :class.dark="isDark"
    :class.light="!isDark"
    :style.backgroundColor="bgColor"
    :style.color="textColor"
    style="padding: 20px; transition: all 0.3s;"
  >
    <p>Ce contenu change de thème</p>
    <p :text="'Background: ' + bgColor"></p>
    <p :text="'Text: ' + textColor"></p>
  </div>
</div>
```

```typescript
import { createApp, signal, computed, scanDSL } from 'pulse-framework'

const app = createApp({
  setup() {
    const theme = signal<'light' | 'dark'>('light')
    
    const isDark = computed(() => theme() === 'dark')
    
    const bgColor = computed(() => 
      isDark() ? '#1a1a1a' : '#ffffff'
    )
    
    const textColor = computed(() => 
      isDark() ? '#ffffff' : '#000000'
    )
    
    const toggleTheme = () => {
      theme(isDark() ? 'light' : 'dark')
    }
    
    return { theme, isDark, bgColor, textColor, toggleTheme }
  }
})

app.mount(document.getElementById('theme-app')!)
scanDSL(document.getElementById('theme-app')!, app.scope)
```

## Performance

Le DSL de Pulse est **ultra-performant** grâce à :

1. **Bindings fins** : Chaque directive crée un `computed()` qui ne met à jour que l'élément ciblé
2. **Pas de Virtual DOM** : Modifications directes du DOM
3. **Lazy evaluation** : Les computed ne se recalculent que si leurs dépendances changent
4. **Scheduler intégré** : Batching automatique des updates

```typescript
// Chaque :text crée un computed optimisé
<p :text="firstName + ' ' + lastName"></p>

// Équivalent interne :
computed(() => {
  element.textContent = `${firstName()} ${lastName()}`
})
```

## DSL vs render() vs JSX

| Critère | DSL | render() | JSX |
|---------|-----|----------|-----|
| **Syntaxe** | HTML attributes | Objets JS | JSX syntax |
| **Build** | Non requis | Non requis | Requis |
| **Learning Curve** | Très facile | Facile | Moyenne |
| **Typage** | Runtime | Compile-time | Compile-time |
| **Performance** | Identique | Identique | Identique |
| **Use Case** | Bindings simples | Composants programmatiques | Composants React-like |

**Recommandation :**
- ✅ **DSL** : Prototypes rapides, migration HTML existant, bindings simples
- ✅ **render()** : Composants réutilisables, logique conditionnelle, listes dynamiques
- ✅ **JSX** : Si vous aimez React, composants complexes avec TypeScript

## Limitations

1. **Pas de conditions complexes** : Utilisez `render()` avec `computed()` pour `if/else` imbriqués
2. **Pas de boucles** : Utilisez `render()` avec `effect()` pour les listes dynamiques
3. **Pas de slots** : Utilisez `render()` pour la composition de composants
4. **Expressions simples** : Pas de blocs de code multi-lignes dans les attributs

```html
<!-- ❌ Ne fonctionne pas - syntaxe trop complexe -->
<div :text="if (condition) { return 'Yes' } else { return 'No' }"></div>

<!-- ✅ Utilisez un ternaire simple -->
<div :text="condition ? 'Yes' : 'No'"></div>

<!-- ✅ Ou externalisez dans un computed -->
<div :text="computedText"></div>
```

```typescript
// Dans setup()
const computedText = computed(() => {
  if (complexCondition()) {
    return 'Yes'
  } else {
    return 'No'
  }
})
```

## Best Practices

### 1. Combinez DSL et JSX

```html
<!-- HTML avec DSL pour le layout -->
<div id="app">
  <header :class.sticky="isScrolled">
    <h1 :text="title"></h1>
  </header>
  
  <!-- Composant JSX pour la logique complexe -->
  <div id="todo-list"></div>
</div>
```

```typescript
// Utiliser render() pour les listes dynamiques
const todoListContainer = document.getElementById('todo-list')!

effect(() => {
  const items = todos()
  todoListContainer.innerHTML = ''
  
  items.forEach(todo => {
    const li = render({
      tag: 'li',
      children: [
        {
          tag: 'input',
          attributes: { type: 'checkbox' },
          properties: { checked: signal(todo.done) },
          events: { change: () => toggleTodo(todo.id) }
        },
        {
          tag: 'span',
          properties: { textContent: todo.text }
        },
        {
          tag: 'button',
          properties: { textContent: '×' },
          events: { click: () => deleteTodo(todo.id) }
        }
      ]
    })
    todoListContainer.appendChild(li)
  })
})

scanDSL(document.getElementById('app')!, scope)
```

### 2. Externalisez la logique complexe

```typescript
// ✅ Bon - logique dans setup()
const fullName = computed(() => `${firstName()} ${lastName()}`)
```

```html
<p :text="fullName"></p>
```

```html
<!-- ❌ Moins lisible - logique dans le HTML -->
<p :text="firstName + ' ' + lastName"></p>
```

### 3. Utilisez des noms explicites

```typescript
// ✅ Bon
const isFormValid = computed(() => ...)
const canSubmit = computed(() => ...)
const hasErrors = computed(() => ...)
```

```html
<button :attr.disabled="!canSubmit">Submit</button>
<div :show="hasErrors">...</div>
```

### 4. Scan après montage

```typescript
// ✅ Bon - scan après mount
app.mount(root)
scanDSL(root, app.scope)

// ❌ Mauvais - scan avant mount
scanDSL(root, app.scope)
app.mount(root)
```

## Migration depuis d'autres Frameworks

### Depuis Vue.js

```html
<!-- Vue -->
<div>
  <p>{{ message }}</p>
  <input v-model="name" />
  <button @click="handleClick">Click</button>
  <div :class="{ active: isActive }"></div>
  <p v-if="isVisible">Visible</p>
</div>
```

```html
<!-- Pulse -->
<div>
  <p :text="message"></p>
  <input :model="name" />
  <button :on.click="handleClick">Click</button>
  <div :class.active="isActive"></div>
  <p :show="isVisible">Visible</p>
</div>
```

### Depuis Alpine.js

```html
<!-- Alpine -->
<div x-data="{ count: 0 }">
  <p x-text="count"></p>
  <button @click="count++">+</button>
  <div x-show="count > 5">Greater than 5</div>
</div>
```

```html
<!-- Pulse -->
<div id="app">
  <p :text="count"></p>
  <button :on.click="increment">+</button>
  <div :show="count > 5">Greater than 5</div>
</div>
```

```typescript
const app = createApp({
  setup() {
    const count = signal(0)
    const increment = () => count(count() + 1)
    return { count, increment }
  }
})
```

## Conclusion

Le Micro-DSL de Pulse offre :
- 🎯 **Simplicité** : Syntaxe HTML-first intuitive
- ⚡ **Performance** : Bindings fins sans Virtual DOM
- 🔄 **Migration** : Approche progressive pour apps existantes
- 🛠️ **Flexibilité** : Combine avec `render()` pour logique complexe
- 📦 **Léger** : ~2KB minifié + gzippé

**Cas d'usage idéaux :**
- Prototypage rapide d'interfaces
- Migration progressive d'HTML existant
- Bindings simples (texte, classes, styles, événements)
- Applications où vous voulez minimiser le JavaScript

**Pour aller plus loin :**
- Logique complexe → Utilisez `render()` (voir [Guide Components](./03-components.md))
- Type-safety → Utilisez JSX/TSX (voir [Guide JSX](./06-jsx-usage.md))
- Performance critique → Utilisez le Scheduler (voir [Guide Scheduler](./08-scheduler-batching.md))
