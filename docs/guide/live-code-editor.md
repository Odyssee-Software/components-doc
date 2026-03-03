---
title: Live Code Editor
description: Learn how to use the Live Code Editor in the documentation
---

# Live Code Editor

Le **LiveCodeEditor** est un composant interactif qui permet d'écrire et de tester du code directement dans la documentation. Il compile et exécute le code en temps réel, affichant le résultat instantanément.

## Formats Supportés

Le LiveCodeEditor supporte deux formats pour plus de flexibilité :

### Format 1 : Export Default (Recommandé)

C'est le format recommandé qui reflète la vraie structure d'un composant Pulse. Vous écrivez une fonction qui retourne du JSX, comme vous le feriez dans un vrai fichier.

```md
<LiveCodeEditor :defaultCode="`export default () => {
  const count = Pulse.signal(0);

  return <div>
    <h2>Counter: {count}</h2>
    <Button onClick={() => count(count() + 1)}>
      Increment
    </Button>
  </div>;
}`" />
```

**Avantages :**
- Plus proche de la vraie expérience de développement
- Permet d'utiliser des variables locales et de la logique
- Idéal pour les exemples avec de la réactivité (signals, computed, effects)
- Cohérent avec les conventions modernes

### Format 2 : JSX Direct

Pour les exemples simples sans logique, vous pouvez écrire directement du JSX :

```md
<LiveCodeEditor :defaultCode="`<Button variant='solid' color='primary'>
  Click me
</Button>`" />
```

**Avantages :**
- Plus concis pour les exemples simples
- Idéal pour montrer la syntaxe des composants
- Parfait pour la documentation des props

## Contexte Global

**Important :** Vous n'avez pas besoin d'importer Pulse ni les composants. Ils sont automatiquement disponibles dans le contexte d'exécution.

### Disponible automatiquement :

- **`Pulse`** : L'objet Pulse complet avec `signal`, `computed`, `effect`, etc.
- **Tous les composants** : `Button`, `Alert`, `Accordion`, `Avatar`, etc.

### Exemple avec Signals

<LiveCodeEditor :defaultCode="`export default () => {
  const count = Pulse.signal(0);
  const doubled = Pulse.computed(() => count() * 2);

  return <div>
    <p>Count: {count}</p>
    <p>Doubled: {doubled}</p>
    <Button onClick={() => count(count() + 1)}>
      Increment
    </Button>
  </div>;
}`" />

### Exemple avec Effects

<LiveCodeEditor :defaultCode="`export default () => {
  const message = Pulse.signal('Hello');

  Pulse.effect(() => {
    console.log('Message changed:', message());
  });

  return <div>
    <input 
      type='text' 
      value={message()} 
      onInput={(e) => message(e.target.value)}
      placeholder='Type something...'
    />
    <p>You typed: {message}</p>
  </div>;
}`" />

## Bonnes Pratiques

### 1. Utiliser export default pour la logique

Dès que votre exemple contient de la logique (signals, state, handlers), utilisez le format `export default` :

```md
✅ Bon
<LiveCodeEditor :defaultCode="`export default () => {
  const isOpen = Pulse.signal(false);
  return <Button onClick={() => isOpen(!isOpen())}>Toggle</Button>;
}`" />

❌ Éviter
<LiveCodeEditor :defaultCode="`<Button onClick={() => console.log('clicked')}>Click</Button>`" />
```

### 2. JSX direct pour les composants statiques

Pour montrer simplement l'apparence d'un composant sans interaction :

```md
✅ Bon
<LiveCodeEditor :defaultCode="`<Alert variant='soft' color='success'>
  Operation successful!
</Alert>`" />
```

### 3. Échapper les backticks

Dans le markdown, utilisez des backticks échappés pour le code :

```md
<LiveCodeEditor :defaultCode="`export default () => {
  return <div>Hello World</div>;
}`" />
```

### 4. Organiser le code lisiblement

Pour les exemples complexes, gardez une structure claire :

```md
<LiveCodeEditor :defaultCode="`export default () => {
  // 1. State
  const count = Pulse.signal(0);
  const name = Pulse.signal('User');
  
  // 2. Computed
  const greeting = Pulse.computed(() => 
    \`Hello \${name()}, count is \${count()}\`
  );
  
  // 3. Handlers
  const increment = () => count(count() + 1);
  
  // 4. Render
  return (
    <div>
      <p>{greeting}</p>
      <Button onClick={increment}>+1</Button>
    </div>
  );
}`" />
```

## Debugging

Le LiveCodeEditor affiche les erreurs de compilation et d'exécution directement dans l'interface :

- **Erreurs de syntaxe** : Affichées en rouge sous le preview
- **Erreurs d'exécution** : Capturées et affichées avec un badge "Erreur"
- **Console** : Les `console.log()` apparaissent dans la console du navigateur

## Limitations Actuelles

- Pas de support pour les imports externes (seulement Pulse et les composants intégrés)
- Pas de support multi-fichiers
- Le code est réinitialisé entre chaque modification (pas de hot reload du state)

## Exemples Avancés

### Combinaison de plusieurs composants

<LiveCodeEditor :defaultCode="`export default () => {
  const variant = Pulse.signal('solid');
  const color = Pulse.signal('primary');

  return <div class='space-y-4'>
    <div class='flex gap-2'>
      <Button 
        variant={variant()} 
        color={color()}
      >
        Preview Button
      </Button>
    </div>
    
    <div class='flex gap-2'>
      <Button 
        size='sm' 
        onClick={() => variant('solid')}
      >
        Solid
      </Button>
      <Button 
        size='sm' 
        onClick={() => variant('soft')}
      >
        Soft
      </Button>
      <Button 
        size='sm' 
        onClick={() => variant('bordered')}
      >
        Bordered
      </Button>
    </div>
  </div>;
}`" />

### Formulaire interactif

<LiveCodeEditor :defaultCode="`export default () => {
  const email = Pulse.signal('');
  const password = Pulse.signal('');
  const submitted = Pulse.signal(false);

  const isValid = Pulse.computed(() => 
    email().includes('@') && password().length >= 6
  );

  const handleSubmit = () => {
    if (isValid()) {
      submitted(true);
      setTimeout(() => submitted(false), 2000);
    }
  };

  return <div class='space-y-4 max-w-md'>
    {submitted() && (
      <Alert variant='soft' color='success'>
        Form submitted successfully!
      </Alert>
    )}
    
    <input 
      type='email' 
      value={email()} 
      onInput={(e) => email(e.target.value)}
      placeholder='Email'
      class='w-full px-3 py-2 border rounded'
    />
    
    <input 
      type='password' 
      value={password()} 
      onInput={(e) => password(e.target.value)}
      placeholder='Password (min 6 chars)'
      class='w-full px-3 py-2 border rounded'
    />
    
    <Button 
      onClick={handleSubmit}
      disabled={!isValid()}
      variant='solid'
      color='primary'
    >
      Submit
    </Button>
  </div>;
}`" />

## Résumé

- **Export default** : Pour les exemples avec logique et réactivité
- **JSX direct** : Pour les exemples simples et statiques
- **Pas d'imports** : Pulse et les composants sont déjà disponibles
- **Console** : Utilisez `console.log()` pour debugger