# 🚀 Déploiement sur GitHub Pages

## Configuration actuelle

✅ **Repository** : `https://github.com/Odyssee-Software/components-doc`  
✅ **Base path** : `/components-doc/` (déjà configuré)  
✅ **Workflow GitHub Actions** : `.github/workflows/deploy.yml` (déjà créé)  
✅ **URL de production** : `https://odyssee-software.github.io/components-doc/`

## 🔧 Étapes de configuration (à faire une seule fois)

### 1. Activer GitHub Pages

1. Allez sur votre repository : `https://github.com/Odyssee-Software/components-doc`
2. Cliquez sur **Settings** (Paramètres)
3. Dans le menu latéral, cliquez sur **Pages**
4. Sous **Source**, sélectionnez : **GitHub Actions**

![GitHub Pages Settings](https://docs.github.com/assets/cb-47267/images/help/pages/publishing-source-drop-down.png)

C'est tout ! Le reste est automatique.

## 📦 Déployer la documentation

### Déploiement automatique (recommandé)

Chaque fois que vous pushez sur la branche `main`, le site se déploie automatiquement :

```bash
git add .
git commit -m "Update documentation"
git push origin main
```

Le workflow GitHub Actions va :
1. ✅ Installer les dépendances (`npm ci`)
2. ✅ Builder la documentation (`npm run docs:build`)
3. ✅ Déployer sur GitHub Pages

⏱️ **Durée** : ~2-3 minutes

### Déploiement manuel

Si vous voulez déclencher un déploiement manuellement :

1. Allez dans l'onglet **Actions** du repository
2. Sélectionnez le workflow "Deploy Documentation to GitHub Pages"
3. Cliquez sur **Run workflow**
4. Sélectionnez la branche `main`
5. Cliquez sur **Run workflow**

## 🔍 Vérifier le déploiement

### Suivre le build en temps réel

1. Allez dans l'onglet **Actions**
2. Cliquez sur le dernier workflow en cours
3. Vous verrez :
   - ✅ **build** - Construction de la documentation
   - ✅ **deploy** - Déploiement sur GitHub Pages

### Accéder au site

Une fois le déploiement terminé (badge vert ✅), visitez :

🌐 **https://odyssee-software.github.io/components-doc/**

## ⚠️ Problèmes courants

### Problème : 404 après déploiement

**Cause** : Le `base` path n'est pas configuré correctement

**Solution** : Vérifiez que `docs/.vitepress/config.ts` contient :
```ts
base: "/components-doc/"
```

### Problème : Le build échoue sur GitHub Actions

**Cause** : Dépendances manquantes ou erreurs de build

**Solution** :
1. Testez localement : `npm run docs:build`
2. Vérifiez les logs dans l'onglet Actions
3. Assurez-vous que `package-lock.json` est commité

### Problème : Les styles ne s'appliquent pas

**Cause** : Chemins d'assets incorrects

**Solution** : VitePress gère automatiquement les chemins avec le `base` configuré. Les assets dans `/docs/public/` seront accessibles à `/components-doc/`.

## 🔄 Workflow de développement recommandé

1. **Développement local** :
   ```bash
   npm run docs:dev
   # Tester sur http://localhost:5173
   ```

2. **Vérifier le build** :
   ```bash
   npm run docs:build
   npm run docs:preview
   # Tester sur http://localhost:4173
   ```

3. **Pousser sur GitHub** :
   ```bash
   git add .
   git commit -m "Add new documentation"
   git push origin main
   ```

4. **Vérifier le déploiement** :
   - Attendre ~2-3 minutes
   - Visiter https://odyssee-software.github.io/components-doc/

## 📊 Détails du workflow

Le fichier `.github/workflows/deploy.yml` contient :

```yaml
# Déclenché automatiquement sur push main
on:
  push:
    branches: [main]
  workflow_dispatch:  # Permet déclenchement manuel

# Permissions nécessaires
permissions:
  contents: read
  pages: write
  id-token: write

# Jobs
jobs:
  build:   # Construit la documentation
  deploy:  # Déploie sur GitHub Pages
```

## 🎯 Checklist de déploiement

Avant votre premier déploiement :

- [x] Base path configuré : `/components-doc/`
- [x] Workflow GitHub Actions créé : `.github/workflows/deploy.yml`
- [ ] GitHub Pages activé dans Settings > Pages > Source : GitHub Actions
- [ ] Premier push sur `main` effectué
- [ ] Vérifier que le site est accessible : https://odyssee-software.github.io/components-doc/

## 🔐 Permissions

Le workflow nécessite ces permissions (déjà configurées) :
- ✅ `contents: read` - Lire le code
- ✅ `pages: write` - Écrire sur GitHub Pages
- ✅ `id-token: write` - Authentification

## 📈 Monitoring

Pour suivre l'état de vos déploiements :

1. **Badge de statut** - Ajoutez à votre README.md :
   ```markdown
   ![Deploy](https://github.com/Odyssee-Software/components-doc/actions/workflows/deploy.yml/badge.svg)
   ```

2. **Historique** - Consultez l'onglet Actions pour l'historique complet

## 🌐 Domaine personnalisé (optionnel)

Si vous voulez utiliser un domaine personnalisé :

1. Dans Settings > Pages > Custom domain, ajoutez votre domaine
2. Configurez un CNAME dans votre DNS
3. Changez le `base` dans `config.ts` :
   ```ts
   base: "/"  // Pour domaine personnalisé
   ```

---

**Prêt à déployer ?** Suivez la checklist ci-dessus et faites votre premier push sur `main` ! 🚀