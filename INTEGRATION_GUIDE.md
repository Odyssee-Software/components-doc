# Guide d'Intégration - Composants Pulse dans VitePress

Ce guide explique les différentes approches pour intégrer vos composants Pulse Framework dans la documentation VitePress.

## 🎯 Le Problème

Vous avez deux systèmes différents :

```
┌─────────────────────────────────────┐
│  VitePress (Vue.js)                 │
│  - Utilise Vue components           │
│  - Tourne sur port 5173             │
│  - Documentation markdown           │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  Playground (Pulse Framework)       │
│  - Utilise JSX avec Pulse.jsx       │
│  - Tourne sur port 3000             │
│  - Composants natifs Pulse          │
└─────────────────────────────────────┘
```

**Pulse Framework ≠ React ≠ Vue**

Vos composants utilisent `Pulse.jsx` et `Pulse.render.fragment` - ils ne peuvent pas être rendus directement dans Vue/VitePress.

## 📋 Les Solutions

### Option 1 : Documentation Séparée (Configuration Actuelle) ✅

**Comment ça marche :**
- Documentation VitePress : `http://localhost:5173` (texte, code snippets)
- Playground séparé : `http://localhost:3000` (démos interactives)

**Avantages :**
- ✅ Simple et fonctionnel
- ✅ Pas de conflit entre frameworks
- ✅ Playground totalement indépendant
- ✅ Performance optimale

**Inconvénients :**
- ❌ Deux serveurs à lancer
- ❌ Pas de démos intégrées dans les docs

**Usage :**

Dans `docs/components/button.md` :
```markdown
# Button Component

Documentation here...

## Live Demo

👉 [View Interactive Demo](http://localhost:3000)

## Code Example

\`\`\`tsx
import { Button } from '@odyssee/components';

const btn = Button({
  variant: "solid",
  children: "Click me"
});
\`\`\`
```

---

### Option 2 : iFrame Intégré (Recommandé pour Production) 🎯

**Comment ça marche :**
- Playground construit et déployé
- Intégré via iframe dans VitePress

**Setup :**

1. **Créer des pages de démo légères :**

`playground/public/demos/button-variants.html` :
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {
      margin: 0;
      padding: 1rem;
      font-family: system-ui;
      background: #f9fafb;
    }
    .demo-grid {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }
  </style>
</head>
<body>
  <div class="demo-grid" id="app"></div>
  <script type="module">
    // Import sera résolu par Vite
    import Pulse from 'pulse-framework';
    import { Button } from '@odyssee/components';
    import '../../src/style.css';
    
    const app = document.getElementById('app');
    
    // Solid
    app.appendChild(Button({ 
      variant: 'solid', 
      children: 'Solid' 
    }));
    
    // Outline
    app.appendChild(Button({ 
      variant: 'outline', 
      children: 'Outline' 
    }));
    
    // Ghost
    app.appendChild(Button({ 
      variant: 'ghost', 
      children: 'Ghost' 
    }));
  </script>
</body>
</html>
```

2. **Utiliser dans VitePress :**

`docs/components/button.md` :
```markdown
# Button Component

## Variants

<ButtonDemo 
  demo="/demos/button-variants.html"
  title="Button Variants"
  height="150px"
/>

## Code

\`\`\`tsx
const btn = Button({
  variant: "solid",
  children: "Solid Button"
});
\`\`\`
```

**Avantages :**
- ✅ Démos intégrées dans la doc
- ✅ Vrai rendu Pulse (pas de wrapper)
- ✅ Facile à maintenir
- ✅ Fonctionne en production

**Inconvénients :**
- ⚠️ Besoin de créer des pages HTML séparées
- ⚠️ Communication iframe limitée

---

### Option 3 : Web Components (Avancé) 🔧

**Comment ça marche :**
- Wrapper vos composants Pulse en Web Components
- Utilisables partout (Vue, React, vanilla JS)

**Exemple :**

`playground/src/web-components/pulse-button.ts` :
```typescript
import Pulse from 'pulse-framework';
import { Button } from '@odyssee/components';

class PulseButton extends HTMLElement {
  private pulseElement: any;

  connectedCallback() {
    const variant = this.getAttribute('variant') || 'solid';
    const color = this.getAttribute('color') || 'primary';
    const label = this.getAttribute('label') || 'Button';
    
    this.pulseElement = Button({
      variant,
      color,
      children: label,
      onClick: () => {
        this.dispatchEvent(new CustomEvent('pulse-click', {
          detail: { variant, color, label }
        }));
      }
    });
    
    this.appendChild(this.pulseElement);
  }
  
  disconnectedCallback() {
    if (this.pulseElement) {
      this.removeChild(this.pulseElement);
    }
  }
}

customElements.define('pulse-button', PulseButton);
```

**Usage dans VitePress :**
```html
<pulse-button variant="solid" color="primary" label="Click me"></pulse-button>
```

**Avantages :**
- ✅ Vraie intégration native
- ✅ API standard (Web Components)
- ✅ Pas besoin d'iframe

**Inconvénients :**
- ❌ Plus complexe à mettre en place
- ❌ Besoin de créer un wrapper pour chaque composant
- ❌ Gestion des props limitée

---

## 🚀 Recommandation par Cas d'Usage

### Développement Actuel
**Utilisez Option 1 (Séparé)**
```bash
# Terminal 1
npm run docs:dev

# Terminal 2  
cd playground && npm run dev
```

Lien depuis la doc vers le playground.

### Production / Déploiement
**Utilisez Option 2 (iFrame)**

1. Build le playground :
```bash
cd playground
npm run build
```

2. Déployez les fichiers `playground/dist/` avec VitePress

3. Configurez les iframes pour pointer vers les bonnes URLs

### Projet Futur / Si Temps
**Option 3 (Web Components)**

Créez une couche de Web Components réutilisables.

---

## 📝 Exemple Complet avec iFrame

### 1. Créer une Démo Minimal

`playground/demos/button-colors.html` :
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { margin: 0; padding: 1.5rem; background: white; }
    .grid { display: flex; gap: 0.75rem; flex-wrap: wrap; }
  </style>
</head>
<body>
  <div class="grid" id="app"></div>
  <script type="module">
    import Pulse from '/src/../pulse-framework-0.1.0-rc.2.tgz';
    import { Button } from '/src/../../odyssee-components/src/index.ts';
    
    const app = document.getElementById('app');
    const colors = ['primary', 'success', 'danger', 'warning'];
    
    colors.forEach(color => {
      const btn = Button({ 
        color, 
        children: color.charAt(0).toUpperCase() + color.slice(1)
      });
      app.appendChild(btn);
    });
  </script>
</body>
</html>
```

### 2. Servir via Playground

Le fichier sera accessible sur `http://localhost:3000/demos/button-colors.html`

### 3. Intégrer dans VitePress

`docs/components/button.md` :
```markdown
# Button Colors

<ButtonDemo 
  demo="/demos/button-colors.html"
  title="Available Colors"
  description="Button component supports 8 color variants"
  height="100px"
/>
```

---

## 🔍 Comparaison des Options

| Critère | Séparé | iFrame | Web Components |
|---------|--------|--------|----------------|
| Complexité | ⭐ Simple | ⭐⭐ Moyen | ⭐⭐⭐ Complexe |
| Maintenance | ⭐⭐⭐ Facile | ⭐⭐ Moyen | ⭐ Difficile |
| Intégration | ❌ Externe | ✅ Intégré | ✅ Natif |
| Performance | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| Flexibilité | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| Temps Setup | 5 min | 30 min | 2-3h |

---

## 💡 Ce que je Recommande

### Pour MAINTENANT (MVP)
**Option 1 : Documentation séparée**

Gardez ce que vous avez :
- VitePress pour la doc (texte, code)
- Playground pour les démos live
- Ajoutez des liens entre les deux

### Pour PROCHAINE ITÉRATION
**Option 2 : iFrame avec mini-démos**

Créez des pages HTML légères dans `playground/public/demos/` :
- Une page par fonctionnalité (variants, colors, sizes, etc.)
- Intégrez-les via `<ButtonDemo>` dans VitePress
- Build et deploy ensemble

### Pour le FUTUR (si besoin)
**Option 3 : Web Components**

Seulement si vous avez besoin :
- De partager les composants avec d'autres projets
- D'intégration dans des sites non-Pulse
- D'une vraie bibliothèque cross-framework

---

## 📂 Structure Recommandée

```
components-doc/
├── docs/                           # VitePress
│   ├── components/
│   │   └── button.md              # Doc + <ButtonDemo> iframes
│   └── .vitepress/
│       └── theme/
│           └── components/
│               └── ButtonDemo.vue # Composant iframe
│
└── playground/
    ├── src/
    │   └── main.tsx               # App principale (toutes démos)
    └── public/
        └── demos/                 # Mini-démos pour iframes
            ├── button-variants.html
            ├── button-colors.html
            ├── button-sizes.html
            └── button-interactive.html
```

---

## 🎬 Quick Start - iFrame Setup

### 1. Créez une démo simple

```bash
cd playground/public/demos
touch button-simple.html
```

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { 
      margin: 0; 
      padding: 1rem; 
      display: flex; 
      gap: 1rem; 
      background: #f9fafb;
    }
  </style>
</head>
<body id="app">
  <!-- Les boutons seront injectés ici -->
</body>
</html>
```

### 2. Dans button.md

```markdown
## Live Demo

<ButtonDemo demo="/demos/button-simple.html" height="80px" />
```

### 3. Lancez

```bash
# Terminal 1
npm run docs:dev

# Terminal 2  
cd playground && npm run dev
```

Visitez `http://localhost:5173/components/button.html`

---

## ❓ FAQ

**Q: Pourquoi pas juste importer les composants Pulse dans Vue ?**
R: Pulse Framework n'est pas compatible avec Vue. Pulse utilise son propre système de réactivité (signals) et JSX (`Pulse.jsx`), différent de Vue ou React.

**Q: Est-ce que je peux utiliser Pulse ET Vue ensemble ?**
R: Techniquement oui via iframes ou Web Components, mais ils ne peuvent pas partager le state ou communiquer facilement.

**Q: C'est quoi la meilleure solution pour la production ?**
R: iFrame avec des mini-démos (Option 2). C'est le bon équilibre entre intégration et simplicité.

**Q: Et si je veux des démos vraiment interactives ?**
R: Créez des pages HTML complètes dans `playground/public/demos/` avec tous les contrôles nécessaires, puis intégrez-les via iframe.

---

## 📞 Besoin d'Aide ?

1. Consultez `/playground/src/main.tsx` pour voir comment créer des démos Pulse
2. Regardez `/docs/.vitepress/theme/components/ButtonDemo.vue` pour l'intégration
3. Les mini-démos vont dans `/playground/public/demos/*.html`

**Version**: 1.0.0  
**Dernière mise à jour**: Janvier 2025