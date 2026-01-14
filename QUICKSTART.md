# Quick Start Guide - Odyssee Components Playground

Guide rapide pour lancer le playground interactif avec des exemples de composants.

## 🚀 Lancement Rapide

### 1. Installation

```bash
cd playground
npm install
```

### 2. Lancer le Playground

```bash
npm run dev
```

Le playground sera accessible sur **http://localhost:3000**

## 📁 Structure

```
playground/
├── src/
│   ├── main.tsx          # Point d'entrée avec tous les exemples de Button
│   └── style.css         # Styles CSS du playground
├── index.html            # Template HTML
├── vite.config.ts        # Configuration Vite pour Pulse
├── tailwind.config.js    # Configuration Tailwind
└── tsconfig.json         # Configuration TypeScript
```

## 🎯 Ce que vous verrez

Le playground contient 10 sections de démonstration :

1. **Variants** - Les 5 styles de boutons (solid, outline, ghost, soft, link)
2. **Colors** - Les 8 couleurs disponibles (primary, secondary, success, etc.)
3. **Sizes** - Les 5 tailles (xs, sm, md, lg, xl)
4. **Loading State** - État de chargement avec spinner animé
5. **With Icons** - Boutons avec icônes (gauche, droite, seul)
6. **Disabled State** - État désactivé
7. **Interactive Counter** - Compteur réactif avec Pulse signals
8. **Reactive Disabled** - Désactivation réactive basée sur validation
9. **Full Width** - Boutons pleine largeur
10. **Combined Examples** - Combinaisons de variants, couleurs et tailles

## 🔧 Configuration Importante

### Pulse Framework JSX

Le `tsconfig.json` est configuré pour utiliser Pulse Framework :

```json
{
  "compilerOptions": {
    "jsx": "preserve",
    "jsxFactory": "Pulse.createElement",
    "jsxFragmentFactory": "Pulse.Fragment"
  }
}
```

### Vite Config

Le `vite.config.ts` résout les composants depuis les sources :

```ts
resolve: {
  alias: {
    "@odyssee/components": "../../odyssee-components/src/index.ts",
    "@odyssee/components/styles": "../../odyssee-components/src/styles.css",
    "pulse-framework": "../../odyssee-components/node_modules/pulse-framework"
  }
}
```

## 💡 Points Clés du Code

### Import des Composants

```tsx
import Pulse from "pulse-framework";
import { Button } from "@odyssee/components";
import "@odyssee/components/styles";
```

### Créer un Bouton

```tsx
const btn = Button({
  variant: "solid",
  color: "primary",
  children: "Click me"
});
```

### Type Casting Pulse

**Important** : Les éléments doivent être castés en `Pulse.JSX.Element`, pas en `HTMLElement` :

```tsx
// ✅ Correct
const container = (<div class="container"></div>) as Pulse.JSX.Element;

// ❌ Incorrect
const container = (<div class="container"></div>) as HTMLElement;
```

### Utiliser les Signals

```tsx
const count = Pulse.signal(0);

const btn = Button({
  onClick: () => {
    count(count() + 1);
    console.log(`Count: ${count()}`);
  },
  children: "Increment"
});
```

### État de Chargement Réactif

```tsx
const isLoading = Pulse.signal(false);

const btn = Button({
  loading: isLoading,  // Signal réactif
  onClick: async () => {
    isLoading(true);
    await someAsyncOperation();
    isLoading(false);
  },
  children: "Submit"
});
```

### Désactivation Réactive

```tsx
const email = Pulse.signal("");
const isValid = Pulse.computed(() => email().includes("@"));

const btn = Button({
  disabled: Pulse.computed(() => !isValid()),
  children: "Submit"
});
```

## 🎨 Ajouter Vos Propres Exemples

Pour ajouter une nouvelle démo dans `src/main.tsx` :

```tsx
// 1. Créer une section
const mySection = (
  <div class="demo-section">
    <h2>Mon Exemple</h2>
    <p>Description de l'exemple</p>
    <div class="button-grid"></div>
  </div>
) as Pulse.JSX.Element;

// 2. Créer des boutons
const myButton = Button({
  variant: "solid",
  color: "primary",
  onClick: () => console.log("Clicked!"),
  children: "Mon Bouton"
});

// 3. Ajouter à la section
const grid = mySection.querySelector(".button-grid")!;
grid.appendChild(myButton as Pulse.JSX.Element);

// 4. Ajouter au container principal
container.appendChild(mySection);
```

## 🐛 Dépannage

### Erreur : "Cannot find module @odyssee/components"

Vérifiez que la bibliothèque existe :
```bash
ls ../../odyssee-components/src/index.ts
```

### Erreur : Styles non appliqués

Assurez-vous d'importer les styles :
```tsx
import "@odyssee/components/styles";
```

### Erreur TypeScript avec JSX

Vérifiez le `tsconfig.json` :
```json
{
  "compilerOptions": {
    "jsx": "preserve",
    "jsxFactory": "Pulse.createElement"
  }
}
```

## 📚 Prochaines Étapes

1. **Expérimentez** - Modifiez les exemples dans `src/main.tsx`
2. **Ajoutez des composants** - Testez Input, Select, Modal, etc.
3. **Créez des formulaires** - Combinez plusieurs composants
4. **Partagez** - Utilisez le build pour déployer les démos

## 🔗 Ressources

- [Documentation Odyssee Components](../docs/)
- [Pulse Framework Guide](../docs/guide/pulse-framework.md)
- [Button Component Docs](../docs/components/button.md)

---

**Bon développement ! 🚀**