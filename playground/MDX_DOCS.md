# Documentation MDX avec Vite + Pulse Framework

## 🎯 Ce qui a été créé

Tu as maintenant une **documentation interactive avec MDX** qui te permet de :
- ✅ Écrire du **Markdown** pour la doc
- ✅ Intégrer tes **composants Pulse directement** dans le MDX
- ✅ Avoir des **démos live interactives**
- ✅ Réutiliser ta config Vite existante

## 📂 Structure

```
playground/
├── docs.html              # Point d'entrée pour la doc MDX
├── src/
│   ├── main.tsx          # ✅ Garde l'existant (démos originales)
│   ├── mdx-main.tsx      # 🆕 Point d'entrée MDX
│   ├── pages/            # 🆕 Tes pages MDX
│   │   └── button.mdx    # 🆕 Doc Button avec démos live
│   └── style.css         # ✅ Styles (inclut styles MDX)
└── vite.config.ts        # ✅ Config avec plugin MDX
```

## 🚀 Lancer la Doc MDX

### Option 1 : Doc MDX (Nouveau)
```bash
npm run docs:dev
```
Ouvre : **http://localhost:5173/**

### Option 2 : Playground Original (Garde l'existant)
```bash
npm run dev
```
Ouvre : **http://localhost:3000/**

## 📝 Créer une Page MDX

### 1. Créer le fichier

`src/pages/input.mdx` :
```mdx
---
title: Input Component
---

import { Input } from '@odyssee/components';
import Pulse from 'pulse-framework';

# Input Component

## Live Demo

<div class="demo-section">
  <Input 
    label="Email"
    type="email"
    placeholder="you@example.com"
  />
</div>

## Code Example

\`\`\`tsx
const input = Input({
  label: "Email",
  type: "email",
  placeholder: "you@example.com"
});
\`\`\`

## Interactive Example

<div class="demo-section" id="email-demo">
  <div id="email-output">Email: </div>
</div>

<script type="module">
  import Pulse from 'pulse-framework';
  import { Input } from '@odyssee/components';

  const email = Pulse.signal('');
  const output = document.getElementById('email-output');

  const input = Input({
    label: "Your Email",
    type: "email",
    value: email,
    onChange: (val) => {
      email(val);
      output.textContent = `Email: ${val}`;
    }
  });

  const container = document.getElementById('email-demo');
  container.appendChild(input);
</script>
```

### 2. Ajouter la route

`src/mdx-main.tsx` :
```tsx
// Import
import InputPage from './pages/input.mdx';

// Ajouter la route
const routes: Record<string, any> = {
  '/': ButtonPage,
  '/button': ButtonPage,
  '/input': InputPage,  // 🆕
};

// Ajouter dans la sidebar
<li><a href="/input">Input</a></li>
```

## 💡 Ce que tu peux faire dans MDX

### 1. Rendre des Composants Directement

```mdx
import { Button } from '@odyssee/components';

<div class="demo-grid">
  <Button variant="solid">Solid</Button>
  <Button variant="outline">Outline</Button>
</div>
```

### 2. Créer des Démos Interactives

```mdx
<div id="my-demo"></div>

<script type="module">
  import Pulse from 'pulse-framework';
  import { Button } from '@odyssee/components';

  const count = Pulse.signal(0);
  
  const btn = Button({
    onClick: () => count(count() + 1),
    children: 'Click me'
  });
  
  document.getElementById('my-demo').appendChild(btn);
</script>
```

### 3. Écrire du Markdown Normal

```mdx
## Props

| Prop | Type | Description |
|------|------|-------------|
| variant | string | Button variant |

- Point 1
- Point 2
- Point 3
```

### 4. Code Snippets avec Syntax Highlighting

```mdx
\`\`\`tsx
const btn = Button({
  variant: "solid",
  color: "primary"
});
\`\`\`
```

## 🎨 Styles Disponibles

### Classes CSS pour les démos

```mdx
<!-- Container de démo -->
<div class="demo-section">
  <!-- Tes composants ici -->
</div>

<!-- Grid pour plusieurs composants -->
<div class="demo-grid">
  <Button>1</Button>
  <Button>2</Button>
  <Button>3</Button>
</div>

<!-- Output pour afficher des résultats -->
<div class="demo-output">
  Résultat : ...
</div>
```

## 🔧 Configuration

### MDX avec Pulse

Le `vite.config.ts` est configuré pour :
- ✅ Compiler les fichiers `.mdx`
- ✅ Supporter GFM (GitHub Flavored Markdown)
- ✅ Syntax highlighting avec highlight.js
- ✅ Résoudre `@odyssee/components` et `pulse-framework`

### Plugins utilisés

```ts
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

plugins: [
  mdx({
    remarkPlugins: [remarkGfm],      // Tables, strikethrough, etc.
    rehypePlugins: [rehypeHighlight], // Code highlighting
  })
]
```

## 📖 Exemple Complet

Voir `src/pages/button.mdx` pour un exemple complet avec :
- ✅ Démos statiques (render direct)
- ✅ Démos interactives (avec `<script>`)
- ✅ Counter avec Pulse signals
- ✅ Loading state avec async
- ✅ Table de props
- ✅ Code snippets

## 🚧 Limitations Actuelles

1. **Routing Simple** : Pas de routing SPA (reload complet)
   - Solution future : Ajouter un vrai router

2. **Hot Reload MDX** : Nécessite refresh manuel
   - Normal pour MDX dans cette config

3. **Components JSX dans MDX** : Ne marchent pas directement
   - Utilise `<script type="module">` pour monter les composants Pulse

## 💡 Tips

### Réutiliser des Composants

Crée des wrappers réutilisables :

`src/components/Demo.tsx` :
```tsx
export const Demo = ({ children }) => {
  return (
    <div class="demo-section">
      <div class="demo-grid">
        {children}
      </div>
    </div>
  );
};
```

Utilise dans MDX :
```mdx
import { Demo } from '../components/Demo';

<Demo>
  <Button>1</Button>
  <Button>2</Button>
</Demo>
```

### Partager du Code

Crée des utilitaires dans `src/utils/demo-helpers.ts` :

```ts
export const mountComponent = (id: string, component: any) => {
  const container = document.getElementById(id);
  if (container) {
    container.appendChild(component);
  }
};
```

Utilise dans MDX :
```mdx
<script type="module">
  import { mountComponent } from '../utils/demo-helpers';
  import { Button } from '@odyssee/components';
  
  const btn = Button({ children: 'Hello' });
  mountComponent('my-demo', btn);
</script>
```

## 🎯 Prochaines Étapes

1. **Créer plus de pages MDX** :
   - `input.mdx`
   - `select.mdx`
   - `modal.mdx`
   - etc.

2. **Améliorer la Navigation** :
   - Ajouter un vrai router SPA
   - Breadcrumbs
   - Table des matières

3. **Ajouter des Features** :
   - Search
   - Dark mode toggle
   - Copy code button
   - Version selector

4. **Deploy** :
   ```bash
   npm run build
   # Les fichiers sont dans dist/
   ```

## ❓ FAQ

**Q: Pourquoi `<script type="module">` au lieu de JSX direct ?**
R: MDX compile en HTML statique. Pour monter des composants Pulse dynamiquement, on doit utiliser des scripts qui s'exécutent côté client.

**Q: Puis-je utiliser des composants Vue/React dans MDX ?**
R: Non, seulement Pulse ou vanilla JS. MDX ici n'est qu'un template pour générer du HTML.

**Q: Comment partager du state entre démos ?**
R: Crée un store global dans un fichier séparé et importe-le dans tes scripts.

**Q: Ça marche pour la production ?**
R: Oui ! `npm run build` génère les fichiers statiques optimisés.

---

**Version**: 1.0.0  
**Dernière mise à jour**: Janvier 2025

🎉 **Tu peux maintenant écrire ta doc avec du MDX et rendre tes composants Pulse directement !**