# Monaco Editor Types

Ce dossier contient les fichiers de définition de types TypeScript utilisés par Monaco Editor pour fournir l'IntelliSense et l'autocomplétion dans le `LiveCodeEditor`.

## Fichiers

- **`pulse-framework.d.ts`** - Types pour @odyssee-software/pulse-framework (généré automatiquement)
- **`odyssee-components.d.ts`** - Types pour @odyssee-software/components (généré automatiquement)
- **`globals.d.ts`** - Déclarations globales pour faciliter l'utilisation dans l'éditeur (généré automatiquement)
- **`MonacoEditor.vue`** - Le composant Vue qui encapsule Monaco Editor

## Génération des types

Les fichiers de types sont générés automatiquement depuis les packages installés dans `node_modules` à l'aide du script `scripts/generate-monaco-types.js`.

### Comment régénérer les types

Lorsque les packages `@odyssee-software/pulse-framework` ou `@odyssee-software/components` sont mis à jour, vous devez régénérer les types :

```bash
npm run generate:types
```

Ce script va :

1. Scanner tous les fichiers `.d.ts` dans les packages Odyssee
2. Résoudre tous les imports relatifs
3. Combiner les types en fichiers standalone
4. Générer les déclarations globales pour une utilisation facile

### Pourquoi générer des types ?

Monaco Editor a besoin de fichiers de types **standalone** (sans imports relatifs) car il ne peut pas accéder au système de fichiers pour résoudre les modules. Le script combine tous les fichiers `.d.ts` en un seul fichier autonome qui peut être chargé directement dans Monaco.

## Configuration Monaco

Le composant `MonacoEditor.vue` configure Monaco avec :

- **JSX Support** : `jsxFactory: "Pulse.jsx"`
- **TypeScript** : Mode strict avec validation sémantique
- **IntelliSense** : Autocomplétion pour tous les composants Odyssee et l'API Pulse
- **Thème** : VS Dark par défaut

## Utilisation dans le LiveCodeEditor

Les utilisateurs peuvent écrire du code JSX directement sans imports grâce aux déclarations globales :

```tsx
// Pulse et tous les composants sont disponibles globalement
const count = Pulse.signal(0);

<Button onclick={() => count(count() + 1)}>
  Clicked {count()} times
</Button>
```

## Maintenance

⚠️ **Ne modifiez PAS les fichiers `.d.ts` manuellement !**

Ces fichiers sont générés automatiquement. Pour ajouter ou modifier des types :

1. Modifiez les types dans les packages source (`pulse-framework` ou `odyssee-components`)
2. Publiez les packages mis à jour
3. Mettez à jour les dépendances dans `package.json`
4. Régénérez les types avec `npm run generate:types`

## Personnalisation

Pour ajouter d'autres packages ou personnaliser la génération, modifiez le fichier `scripts/generate-monaco-types.js`.