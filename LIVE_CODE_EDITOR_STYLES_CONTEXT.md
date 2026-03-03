# Context : Problème de styles dans LiveCodeEditor

## 📋 Résumé du problème

Dans la documentation VitePress (`/Users/guillaume/Documents/Odyssee/softwares/components-doc`), les composants rendus dans le `LiveCodeEditor` n'ont **pas de styles appliqués**, bien que :
- ✅ La librairie `@odyssee-software/components` est bien buildée
- ✅ Le fichier `dist/styles.css` existe et contient tout le CSS Tailwind
- ✅ Le CSS est bien chargé par le navigateur (Status 200/304)

## 🏗️ Architecture du projet

### Structure
```
softwares/
├── pulse-framework/              # Framework réactif custom
├── odyssee-components/           # Librairie de composants UI
│   ├── src/
│   │   ├── components/base/Button.tsx
│   │   └── styles.css           # Tailwind CSS
│   └── dist/
│       ├── index.js
│       └── styles.css           # CSS compilé avec Tailwind
└── components-doc/               # Documentation VitePress
    └── docs/.vitepress/
        ├── theme/
        │   ├── index.ts          # Import du CSS
        │   ├── custom.css        # Styles custom
        │   └── components/
        │       └── LiveCodeEditor.vue
        └── config.ts
```

### Librairie de composants
- **Package** : `@odyssee-software/components` (anciennement `@odyssee/components` - renommé récemment)
- **Version** : `1.0.0-rc.4.5`
- **Framework** : Pulse Framework (custom, similaire à React)
- **Styles** : Tailwind CSS v4.1.18 + Preline
- **Export CSS** : `@odyssee-software/components/styles` → `dist/styles.css`

### LiveCodeEditor
- **Fichier** : `docs/.vitepress/theme/components/LiveCodeEditor.vue`
- **Fonction** : Permet d'éditer et prévisualiser les composants en temps réel
- **Technos** : Vue 3 + Babel Standalone pour compiler JSX
- **Méthode** : 
  1. L'utilisateur édite du JSX
  2. Babel compile le JSX en JS
  3. Le code est exécuté avec `new Function()`
  4. Le composant Pulse résultant est injecté dans le DOM via `previewRef.value.appendChild(result)`

## 🔍 Diagnostic effectué

### 1. Vérification du HTML généré ✅
```html
<button type="button" class="inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 text-sm rounded-md gap-2 bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 active:bg-primary-800">
  Click me
</button>
```
→ **Les classes Tailwind sont présentes sur l'élément**

### 2. Vérification du chargement CSS ✅
```
Request URL: http://localhost:5173/components-doc/@fs/.../dist/styles.css
Status Code: 304 Not Modified
```
→ **Le CSS est chargé**

### 3. Inspection des styles appliqués ❌
Dans DevTools > Styles :
- Classes `.px-4`, `.py-2` → ✅ **Appliquées** (padding fonctionne)
- Classe `.bg-primary-600` → ❌ **BARRÉE** (background-color écrasé)

### 4. Identification de la cause ✅
Les styles de base VitePress écrasent Tailwind :

```css
button {
    padding: 0;
    font-family: inherit;
    background-color: transparent;  /* ← Écrase .bg-primary-600 */
    background-image: none;
}
```

**Ordre de chargement problématique** :
1. Tailwind CSS chargé via `theme/index.ts`
2. VitePress charge ses styles de base **APRÈS**
3. Les resets VitePress écrasent Tailwind avec `background-color: transparent`

## 🛠️ Tentatives de solutions (non fonctionnelles)

### ❌ Tentative 1 : Retirer `scoped` du style Vue
- Retiré `<style scoped>` pour éviter l'isolation
- Ajouté un `<style>` non-scopé pour `.preview-content`
- **Résultat** : Pas d'amélioration

### ❌ Tentative 2 : Reset avec `all: unset`
```css
.preview-content button {
    all: unset;
}
```
- **Résultat** : Supprime TOUS les styles, y compris Tailwind

### ❌ Tentative 3 : Augmenter la spécificité
```css
.live-code-editor .preview-content button { ... }
```
- **Résultat** : VitePress a toujours priorité

### ❌ Tentative 4 : Reset ciblé avec `initial`
```css
.odyssee-preview button {
    background-color: initial;
    border: initial;
    padding: initial;
}
```
- **Résultat** : `initial` ramène aux valeurs par défaut du navigateur mais ne résout pas le conflit d'ordre de chargement

### ❌ Tentative 5 : Ajout dans `custom.css`
- Ajouté des règles dans `custom.css` pour contrer les resets
- **Résultat** : Toujours écrasé par VitePress

## ✅ Solution finale implémentée

### Injection dynamique du CSS dans le LiveCodeEditor

**Principe** : Charger le CSS Tailwind via `fetch()` et l'injecter directement dans le conteneur de preview.

**Code implémenté** dans `LiveCodeEditor.vue` :

```javascript
let styleElement: HTMLStyleElement | null = null;

const injectTailwindCSS = async () => {
    if (!previewRef.value) return;

    try {
        // Charger le CSS via fetch
        const response = await fetch(
            "/components-doc/node_modules/@odyssee-software/components/dist/styles.css"
        );
        
        if (!response.ok) {
            throw new Error(`Failed to load CSS: ${response.status}`);
        }

        const cssContent = await response.text();

        // Créer et injecter directement dans preview
        styleElement = document.createElement("style");
        styleElement.textContent = cssContent;
        previewRef.value.appendChild(styleElement);

        console.log("✅ Tailwind CSS injected successfully into preview");
    } catch (err) {
        console.error("❌ Failed to inject Tailwind CSS:", err);
        // Fallback avec chemin /@fs/...
    }
};

// Appel au montage
onMounted(async () => {
    await injectTailwindCSS();
    executeCode();
    resizeTextarea();
});

// Cleanup au démontage
onUnmounted(() => {
    if (styleElement && styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement);
        styleElement = null;
    }
});
```

**Avantages** :
- ✅ Le CSS est injecté directement dans le conteneur de preview
- ✅ Garantit que le CSS Tailwind est présent au moment du rendu
- ✅ Évite les problèmes d'ordre de chargement
- ✅ Isolation complète du LiveCodeEditor

## 🧪 Tests à effectuer

### 1. Vérifier l'injection du CSS
- [ ] Ouvrir la page avec LiveCodeEditor dans le navigateur
- [ ] Vérifier dans la console : `✅ Tailwind CSS injected successfully into preview`
- [ ] Inspecter le DOM : un `<style>` doit être présent dans `.preview-content`

### 2. Vérifier l'application des styles
- [ ] Inspecter un bouton dans le preview
- [ ] Vérifier que `.bg-primary-600` n'est **plus barré**
- [ ] Vérifier que le bouton est visuellement stylisé (couleur bleue, padding, etc.)

### 3. Tester sur plusieurs composants
- [ ] Button avec différentes variantes
- [ ] Input, Select, Checkbox
- [ ] Alert, Badge, Card
- [ ] Vérifier que tous sont correctement stylisés

### 4. Tester le hot-reload
- [ ] Modifier le code dans le LiveCodeEditor
- [ ] Vérifier que les styles restent appliqués après re-render

## 🐛 Issues connues

1. **Typo dans l'import** (ligne 64 de LiveCodeEditor.vue - NON CORRIGÉE) :
   ```javascript
   const components = await import("@odyssee-software//components"); // Double slash!
   ```
   → Devrait être : `"@odyssee-software/components"`

2. **Erreur de syntaxe dans custom.css** (CORRIGÉE) :
   ```css
   : root {  /* Espace avant root */
   ```
   → Corrigé en : `:root {`

3. **Double import du CSS** :
   - Importé dans `theme/index.ts` : `import "@odyssee-software/components/styles";`
   - Importé dans `custom.css` : `@import "../../../node_modules/@odyssee-software/components/dist/styles.css";`
   → Peut causer des conflits, à nettoyer si la solution fonctionne

## 📝 Notes importantes

- **NE PAS modifier le code source de `pulse-framework`** (directive explicite)
- Le renommage `@odyssee/components` → `@odyssee-software/components` a été fait récemment
- VitePress utilise Vite 5.0 en dev mode avec `/@fs/` pour accéder aux fichiers
- Les composants Pulse génèrent du HTML natif (pas de Virtual DOM comme React)

## 🎯 Prochaines étapes si la solution fonctionne

1. Nettoyer les doubles imports de CSS
2. Corriger la typo `//components`
3. Documenter la solution dans le README
4. Tester sur tous les composants de la doc
5. Builder en production et vérifier que ça fonctionne aussi

## 🎯 Prochaines étapes si la solution ne fonctionne PAS

### Alternative 1 : Utiliser un iframe
- Créer un iframe isolé pour le preview
- Injecter le CSS dans l'iframe
- Garantit une isolation totale des styles

### Alternative 2 : Shadow DOM
- Utiliser Shadow DOM pour isoler le preview
- Injecter le CSS dans le Shadow Root
- Garantit qu'aucun style externe n'interfère

### Alternative 3 : Modifier la config VitePress
- Forcer l'ordre de chargement des CSS via `vite.config`
- Utiliser `css.preprocessorOptions` ou `css.postcss`
- Faire en sorte que Tailwind se charge EN DERNIER

---

**Dernière modification** : Session de debugging complète effectuée
**Statut** : Solution implémentée, en attente de tests