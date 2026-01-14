# Odyssee Components Documentation

[![Deploy Documentation](https://github.com/Odyssee-Software/components-doc/actions/workflows/deploy.yml/badge.svg)](https://github.com/Odyssee-Software/components-doc/actions/workflows/deploy.yml)

Documentation complète pour la bibliothèque `@odyssee/components` - Une collection de composants UI construits avec Pulse Framework, stylisés avec Tailwind CSS et Preline.

🌐 **[Voir la documentation en ligne](https://odyssee-software.github.io/components-doc/)**

## 📚 À propos

Ce projet fournit :
- 📖 **Documentation VitePress** - Documentation complète avec exemples
- 🎮 **Playground Interactif** - Démos live des composants
- 🧩 **15 Composants** - Button, Input, Select, Modal, et plus

## 🏗️ Structure du Projet

```
components-doc/
├── docs/                    # Documentation VitePress
│   ├── .vitepress/         # Configuration VitePress
│   │   ├── config.ts       # Config du site
│   │   └── theme/          # Thème personnalisé
│   ├── components/         # Pages de documentation des composants
│   │   ├── button.md       # Button component
│   │   ├── alert.md        # Alert component
│   │   ├── badge.md        # Badge component
│   │   ├── input.md        # Input component
│   │   └── forms-overview.md # Vue d'ensemble des formulaires
│   ├── guide/              # Guides
│   │   └── getting-started.md
│   ├── public/             # Assets statiques
│   └── index.md            # Page d'accueil
│
└── playground/             # Playground interactif
    ├── src/
    │   ├── main.tsx        # Point d'entrée avec démos Button
    │   └── style.css       # Styles du playground
    ├── index.html
    ├── vite.config.ts      # Config Vite pour Pulse
    ├── tailwind.config.js  # Config Tailwind
    └── tsconfig.json       # Config TypeScript
```

## 🚀 Démarrage Rapide

### Prérequis

- Node.js 18+
- npm ou yarn

### Installation

```bash
# Depuis le dossier components-doc
npm install

# Depuis le playground
cd playground
npm install
```

## 🎮 Lancer le Playground

Le playground fournit des démos interactives utilisant les **vrais composants** de `@odyssee/components`.

```bash
cd playground
npm run dev
```

Le playground sera accessible sur **http://localhost:3000** (ou 3001 si le port est occupé)

### Ce que vous verrez

10 sections de démonstration pour le composant Button :
1. **Variants** - solid, outline, ghost, soft, link
2. **Colors** - 8 couleurs disponibles
3. **Sizes** - xs, sm, md, lg, xl
4. **Loading State** - États de chargement avec spinner
5. **With Icons** - Boutons avec icônes
6. **Disabled State** - États désactivés
7. **Interactive Counter** - Compteur avec Pulse signals
8. **Reactive Disabled** - Désactivation basée sur validation
9. **Full Width** - Boutons pleine largeur
10. **Combined Examples** - Combinaisons de styles

### Ajouter d'autres composants au playground

Éditez `playground/src/main.tsx` pour ajouter des démos d'autres composants :

```tsx
import { Input, Select, Modal, Pulse } from '@odyssee/components';

// Créez vos démos ici
const inputDemo = (
  <div class="demo-section">
    <h2>Input Demo</h2>
    <Input label="Email" type="email" />
  </div>
);
```

## 📖 Lancer la Documentation (VitePress)

```bash
npm run docs:dev
```

La documentation sera accessible sur **http://localhost:5173**

### Build pour Production

```bash
# Documentation
npm run docs:build
npm run docs:preview

# Playground
cd playground
npm run build
npm run preview
```

## 🚀 Déploiement sur GitHub Pages

Ce projet est configuré pour se déployer automatiquement sur GitHub Pages à chaque push sur la branche `main`.

### Configuration Requise

1. **Activer GitHub Pages** dans votre repository :
   - Allez dans `Settings` > `Pages`
   - Source : `GitHub Actions`

2. **Configurer le base path** dans `docs/.vitepress/config.ts` :
   ```ts
   export default defineConfig({
     base: "/components-doc/",  // Déjà configuré pour ce repo
   })
   ```

3. **Push sur main** :
   ```bash
   git add .
   git commit -m "Deploy documentation"
   git push origin main
   ```

Le workflow GitHub Actions (`.github/workflows/deploy.yml`) va automatiquement :
- ✅ Installer les dépendances
- ✅ Builder la documentation VitePress
- ✅ Déployer sur GitHub Pages

Votre documentation sera accessible sur : `https://odyssee-software.github.io/components-doc/`

### Déploiement Manuel

Si vous préférez déployer manuellement, vous pouvez aussi déclencher le workflow depuis l'onglet `Actions` de GitHub.

## 📝 Documentation Disponible

### Composants de Base
- ✅ [Button](docs/components/button.md) - Boutons polyvalents avec variants
- ✅ [Alert](docs/components/alert.md) - Messages d'alerte et notifications
- ✅ [Badge](docs/components/badge.md) - Badges et labels

### Composants de Formulaire
- ✅ [Overview](docs/components/forms-overview.md) - Vue d'ensemble complète
- ✅ [Input](docs/components/input.md) - Champs de texte avec validation
- 📄 Textarea - Champ de texte multi-lignes
- 📄 Select - Sélection dropdown
- 📄 Checkbox - Cases à cocher
- 📄 Radio - Boutons radio
- 📄 RadioGroup - Groupes de boutons radio
- 📄 Toggle - Interrupteurs on/off
- 📄 FileInput - Upload de fichiers
- 📄 RangeSlider - Sliders de valeurs
- 📄 ColorPicker - Sélecteur de couleurs
- 📄 FormGroup - Groupement de champs

### Composants Overlay
- 📄 Modal - Dialogues modaux

### Guides
- ✅ [Getting Started](docs/guide/getting-started.md) - Guide de démarrage
- 📄 Installation
- 📄 Pulse Framework

**Légende** : ✅ Complété | 📄 À créer

## ⚙️ Configuration Importante

### Pulse Framework JSX

Les fichiers TypeScript et Vite sont configurés pour Pulse Framework :

**tsconfig.json**
```json
{
  "compilerOptions": {
    "jsx": "preserve",
    "jsxFactory": "Pulse.jsx",
    "jsxFragmentFactory": "Pulse.render.fragment"
  }
}
```

**vite.config.ts**
```ts
{
  esbuild: {
    jsx: "transform",
    jsxFactory: "Pulse.jsx",
    jsxFragment: "Pulse.render.fragment"
  }
}
```

⚠️ **Important** : Utilisez `Pulse.jsx` et **NON** `Pulse.createElement` (ce n'est pas React!)

### Type Casting

Les éléments doivent être castés en `Pulse.JSX.Element` :

```tsx
// ✅ Correct
const div = (<div>Hello</div>) as Pulse.JSX.Element;

// ❌ Incorrect
const div = (<div>Hello</div>) as HTMLElement;
```

## 🎯 Exemples d'Utilisation

### Composant Simple

```tsx
import { Button, Pulse } from '@odyssee/components';

const btn = Button({
  variant: "solid",
  color: "primary",
  children: "Click me"
});

document.getElementById('app')?.appendChild(btn as Pulse.JSX.Element);
```

### Avec Signals Réactifs

```tsx
import { Input, Button, Pulse } from '@odyssee/components';

const email = Pulse.signal('');
const isValid = Pulse.computed(() => email().includes('@'));

const form = (
  <form class="space-y-4">
    <Input
      label="Email"
      type="email"
      value={email}
      onChange={(val) => email(val)}
    />
    <Button
      type="submit"
      disabled={Pulse.computed(() => !isValid())}
    >
      Submit
    </Button>
  </form>
) as Pulse.JSX.Element;
```

### État de Chargement

```tsx
const isLoading = Pulse.signal(false);

const btn = Button({
  loading: isLoading,
  onClick: async () => {
    isLoading(true);
    await someAsyncOperation();
    isLoading(false);
  },
  children: "Submit"
});
```

## 🐛 Dépannage

### Erreur : "Pulse.createElement is not a function"

**Problème** : Mauvaise configuration JSX

**Solution** : Utilisez `Pulse.jsx` au lieu de `Pulse.createElement`

```ts
// Dans vite.config.ts et tsconfig.json
jsxFactory: "Pulse.jsx"  // ✅ Correct
jsxFactory: "Pulse.createElement"  // ❌ Incorrect
```

### Erreur : Cannot resolve "@odyssee/components/styles"

**Problème** : Chemin d'import incorrect

**Solution** : Utilisez le chemin relatif complet

```tsx
// ✅ Correct
import "../../../odyssee-components/src/styles.css";

// ❌ Incorrect
import "@odyssee/components/styles";
```

### Erreur : TypeScript sur JSX

**Problème** : Configuration TypeScript incorrecte

**Solution** : Vérifiez votre `tsconfig.json`

```json
{
  "compilerOptions": {
    "jsx": "preserve",
    "jsxFactory": "Pulse.jsx",
    "jsxFragmentFactory": "Pulse.render.fragment"
  }
}
```

### Styles non appliqués

**Problème** : CSS non importé

**Solution** : Importez les styles dans votre point d'entrée

```tsx
import "../../../odyssee-components/src/styles.css";
```

## 📚 Ressources

### Dans ce Projet
- [QUICKSTART.md](QUICKSTART.md) - Guide de démarrage rapide
- [docs/](docs/) - Documentation complète
- [playground/](playground/) - Code source du playground

### Bibliothèque Source
- [odyssee-components](../odyssee-components/) - Bibliothèque de composants
- [FORM_COMPONENTS.md](../odyssee-components/FORM_COMPONENTS.md) - Doc originale

### External
- [Pulse Framework](https://github.com/pulse) - Framework réactif
- [Tailwind CSS](https://tailwindcss.com) - Framework CSS
- [VitePress](https://vitepress.dev) - Générateur de documentation

## 🚧 Prochaines Étapes

### Documentation à Compléter
1. Créer pages manquantes pour les composants de formulaire
2. Ajouter page d'installation
3. Créer guide Pulse Framework détaillé
4. Ajouter exemples de patterns courants
5. Créer page sur l'accessibilité

### Playground à Étendre
1. ~~Ajouter démos pour Input~~ ✅ Complété avec LiveCodeEditor
2. ~~Ajouter démos pour Select~~ ✅ Complété avec LiveCodeEditor
3. Ajouter démos pour Modal
4. Créer formulaire complet d'exemple
5. Ajouter mode dark/light toggle

### Améliorations
1. Ajouter tests E2E avec Playwright
2. ~~Ajouter CI/CD pour build automatique~~ ✅ Workflow GitHub Actions ajouté
3. ~~Déployer la documentation~~ ✅ GitHub Pages configuré
4. Ajouter recherche Algolia
5. ~~Créer composants Vue pour intégration VitePress~~ ✅ LiveCodeEditor créé

## 📄 Scripts Disponibles

### Documentation
```bash
npm run docs:dev      # Développement (port 5173)
npm run docs:build    # Build production
npm run docs:preview  # Preview build
```

### Playground
```bash
cd playground
npm run dev          # Développement (port 3000)
npm run build        # Build production
npm run preview      # Preview build
```

## 🤝 Contribution

Pour contribuer à la documentation :

1. **Ajouter un composant** :
   - Créez `docs/components/[nom].md`
   - Ajoutez-le dans `.vitepress/config.ts` sidebar
   - Suivez le format des pages existantes

2. **Ajouter une démo** :
   - Éditez `playground/src/main.tsx`
   - Utilisez les composants réels de `@odyssee/components`
   - Castez en `Pulse.JSX.Element`

3. **Style Guide** :
   - Utilisez Tailwind CSS
   - Suivez les conventions Pulse Framework
   - Documentez les props clairement
   - Incluez des exemples TypeScript

## 📊 Statistiques

- **15 Composants** documentés
- **4 Pages** de documentation créées
- **10 Démos** interactives dans le playground
- **100% TypeScript** avec types complets

## 📞 Support

- 📖 [Documentation](https://odyssee-software.github.io/components-doc/)
- 💬 [GitHub Issues](https://github.com/Odyssee-Software/components-doc/issues)
- 📦 [GitHub Repository](https://github.com/Odyssee-Software/components-doc)
- 📧 Email: contact@odyssee.dev

---

**Version**: 1.0.0  
**Dernière mise à jour**: Janvier 2025  
**Construit avec**: Pulse Framework, VitePress, Tailwind CSS

**Bon développement ! 🚀**