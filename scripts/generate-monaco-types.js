#!/usr/bin/env node

/**
 * Script pour générer les fichiers de types standalone pour Monaco Editor
 * Ce script récupère tous les fichiers .d.ts depuis node_modules et les combine
 * en fichiers autonomes pour une utilisation dans Monaco Editor
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, dirname, relative, sep } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ROOT_DIR = join(__dirname, "..");
const NODE_MODULES = join(ROOT_DIR, "node_modules");
const OUTPUT_DIR = join(ROOT_DIR, "docs/.vitepress/theme/components/monaco");

// Packages à traiter
const PACKAGES = [
  {
    name: "@odyssee-software/pulse-framework",
    outputFile: "pulse-framework.d.ts",
    distPath: "dist",
  },
  {
    name: "@odyssee-software/components",
    outputFile: "odyssee-components.d.ts",
    distPath: "dist",
  },
];

/**
 * Récupère tous les fichiers .d.ts récursivement
 */
function getAllDtsFiles(dir, fileList = []) {
  const files = readdirSync(dir);

  files.forEach((file) => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);

    if (stat.isDirectory()) {
      getAllDtsFiles(filePath, fileList);
    } else if (file.endsWith(".d.ts") && !file.endsWith(".d.ts.map")) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Résout les imports relatifs et combine les fichiers
 */
function resolveAndCombineTypes(packagePath, distPath) {
  const fullDistPath = join(packagePath, distPath);
  const dtsFiles = getAllDtsFiles(fullDistPath);

  console.log(
    `📦 Traitement de ${dtsFiles.length} fichiers .d.ts dans ${fullDistPath}`,
  );

  const fileContents = new Map();
  const processedModules = new Set();

  // Lire tous les fichiers
  dtsFiles.forEach((file) => {
    const content = readFileSync(file, "utf-8");
    const relativePath = relative(fullDistPath, file).replace(/\\/g, "/");
    fileContents.set(relativePath, content);
  });

  // Traiter le fichier principal (index.d.ts)
  const mainFile = "index.d.ts";
  let combinedContent = "// Auto-generated type definitions\n";
  combinedContent += "// Do not edit manually - run npm run generate:types\n\n";

  /**
   * Résout récursivement les imports
   */
  function resolveImports(filePath, level = 0) {
    if (processedModules.has(filePath)) {
      return "";
    }

    processedModules.add(filePath);
    const content = fileContents.get(filePath);

    if (!content) {
      console.warn(`⚠️  Fichier non trouvé: ${filePath}`);
      return "";
    }

    let result = "";
    const lines = content.split("\n");

    for (let line of lines) {
      // Détecter les imports relatifs
      const importMatch = line.match(/^import\s+.*\s+from\s+['"](\..+?)['"]/);
      const exportFromMatch = line.match(
        /^export\s+.*\s+from\s+['"](\..+?)['"]/,
      );

      if (importMatch || exportFromMatch) {
        const importPath = (importMatch || exportFromMatch)[1];
        let resolvedPath = join(dirname(filePath), importPath);

        // Normaliser le chemin
        resolvedPath = resolvedPath.replace(/\\/g, "/");

        // Ajouter .d.ts si nécessaire
        if (!resolvedPath.endsWith(".d.ts")) {
          if (fileContents.has(resolvedPath + ".d.ts")) {
            resolvedPath = resolvedPath + ".d.ts";
          } else if (fileContents.has(resolvedPath + "/index.d.ts")) {
            resolvedPath = resolvedPath + "/index.d.ts";
          }
        }

        // Résoudre récursivement
        if (fileContents.has(resolvedPath)) {
          result += resolveImports(resolvedPath, level + 1);
        }

        // Ne pas inclure la ligne d'import dans le résultat final
        continue;
      }

      // Ignorer les imports CSS
      if (line.match(/^import\s+['"].*\.css['"]/)) {
        continue;
      }

      // Ignorer les imports de packages externes (non relatifs)
      if (line.match(/^import\s+.*\s+from\s+['"][^.]/)) {
        continue;
      }

      // Ignorer les imports sans from (side effects)
      if (line.match(/^import\s+['"][^.]/)) {
        continue;
      }

      // Ignorer les sourceMappingURL
      if (line.includes("sourceMappingURL")) {
        continue;
      }

      // Remplacer les import type externes par any
      line = line.replace(
        /import\(['"]@odyssee-software\/[^'"]+['"]\)\./g,
        "any /*",
      );
      line = line.replace(
        /typeof import\(['"]@odyssee-software\/[^'"]+['"]\)\./g,
        "any /*",
      );

      // Inclure la ligne
      result += line + "\n";
    }

    return result;
  }

  combinedContent += resolveImports(mainFile);

  return combinedContent;
}

/**
 * Génère des déclarations globales pour faciliter l'utilisation
 */
function generateGlobalDeclarations() {
  return `// Global type declarations for Monaco Editor
// Makes components and Pulse available without imports in the editor

declare const Pulse: {
    signal<T>(initialValue: T, debugName?: string): {
        (): T;
        (value: T): void;
        readonly value: T;
        subscribe(subscriber: (value: T) => void): () => void;
    };
    computed<T>(computeFn: () => T, debugName?: string): {
        (): T;
        readonly value: T;
        subscribe(subscriber: (value: T) => void): () => void;
    };
    effect(effectFn: () => void | (() => void), debugName?: string): {
        destroy(): void;
        readonly isActive: boolean;
    };
    batch<T>(fn: () => T): T;
    jsx(type: string | Function, props: any, ...children: any[]): HTMLElement | SVGElement | DocumentFragment;
    Fragment(props?: { children?: any }): DocumentFragment;
    render: {
        (template: any, parentIsSVG?: boolean): HTMLElement | SVGElement;
        fragment(props?: { children?: any }): DocumentFragment;
    };
};

// Declare all Odyssee components as global
declare const Button: (props: any) => HTMLElement;
declare const Input: (props: any) => HTMLElement;
declare const Select: (props: any) => HTMLElement;
declare const Checkbox: (props: any) => HTMLElement;
declare const Radio: (props: any) => HTMLElement;
declare const RadioGroup: (props: any) => HTMLElement;
declare const Toggle: (props: any) => HTMLElement;
declare const Textarea: (props: any) => HTMLElement;
declare const FileInput: (props: any) => HTMLElement;
declare const Alert: (props: any) => HTMLElement;
declare const Badge: (props: any) => HTMLElement;
declare const Card: (props: any) => HTMLElement;
declare const Avatar: (props: any) => HTMLElement;
declare const AvatarGroup: (props: any) => HTMLElement;
declare const Blockquote: (props: any) => HTMLElement;
declare const Progress: (props: any) => HTMLElement;
declare const ButtonGroup: (props: any) => HTMLElement;
declare const Collapse: (props: any) => HTMLElement;
declare const Divider: (props: any) => HTMLElement;
declare const Icon: (props: any) => HTMLElement;
declare const Spinner: (props: any) => HTMLElement;
declare const ButtonSpinner: (props: any) => HTMLElement;
declare const Skeleton: (props: any) => HTMLElement;
declare const Modal: (props: any) => HTMLElement;
declare const Tooltip: (props: any) => HTMLElement;
declare const Dropdown: (props: any) => HTMLElement;
declare const Popover: (props: any) => HTMLElement;
declare const Tabs: (props: any) => HTMLElement;
declare const Accordion: (props: any) => HTMLElement;
declare const Table: (props: any) => HTMLElement;
declare const Pagination: (props: any) => HTMLElement;
declare const Breadcrumb: (props: any) => HTMLElement;
declare const Navbar: (props: any) => HTMLElement;
declare const Container: (props: any) => HTMLElement;
declare const Grid: (props: any) => HTMLElement;
declare const Columns: (props: any) => HTMLElement;
declare const H1: (props: any) => HTMLElement;
declare const H2: (props: any) => HTMLElement;
declare const H3: (props: any) => HTMLElement;
declare const H4: (props: any) => HTMLElement;
declare const H5: (props: any) => HTMLElement;
declare const H6: (props: any) => HTMLElement;
declare const Text: (props: any) => HTMLElement;
declare const Link: (props: any) => HTMLElement;
declare const Image: (props: any) => HTMLElement;
declare const Offcanvas: (props: any) => HTMLElement;
declare const ContextMenu: (props: any) => HTMLElement;
declare const TreeView: (props: any) => HTMLElement;
declare const Stepper: (props: any) => HTMLElement;
declare const FormGroup: (props: any) => HTMLElement;
declare const InputGroup: (props: any) => HTMLElement;
declare const RangeSlider: (props: any) => HTMLElement;
declare const ColorPicker: (props: any) => HTMLElement;
declare const TimePicker: (props: any) => HTMLElement;
declare const DatePicker: (props: any) => HTMLElement;
declare const InputNumber: (props: any) => HTMLElement;
declare const PinInput: (props: any) => HTMLElement;
declare const ComboBox: (props: any) => HTMLElement;
declare const SearchBox: (props: any) => HTMLElement;
declare const StrongPassword: (props: any) => HTMLElement;
declare const TogglePassword: (props: any) => HTMLElement;
declare const Carousel: (props: any) => HTMLElement;
declare const ChatBubble: (props: any) => HTMLElement;
declare const Device: (props: any) => HTMLElement;
declare const Rating: (props: any) => HTMLElement;
declare const Timeline: (props: any) => HTMLElement;
declare const Toast: (props: any) => HTMLElement;
declare const List: (props: any) => HTMLElement;
declare const ListGroup: (props: any) => HTMLElement;
declare const Kbd: (props: any) => HTMLElement;
`;
}

/**
 * Main
 */
console.log("🚀 Génération des types pour Monaco Editor...\n");

PACKAGES.forEach((pkg) => {
  console.log(`📦 Traitement du package: ${pkg.name}`);

  const packagePath = join(NODE_MODULES, pkg.name);
  const combinedTypes = resolveAndCombineTypes(packagePath, pkg.distPath);

  const outputPath = join(OUTPUT_DIR, pkg.outputFile);
  writeFileSync(outputPath, combinedTypes, "utf-8");

  console.log(`✅ Généré: ${outputPath}\n`);
});

// Générer les déclarations globales
const globalsPath = join(OUTPUT_DIR, "globals.d.ts");
writeFileSync(globalsPath, generateGlobalDeclarations(), "utf-8");
console.log(`✅ Généré: ${globalsPath}\n`);

console.log("✨ Génération terminée avec succès!");
