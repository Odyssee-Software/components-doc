#!/usr/bin/env node

/**
 * Script pour générer les fichiers de types standalone pour Monaco Editor
 * Ce script récupère tous les fichiers .d.ts depuis node_modules et les combine
 * en fichiers autonomes pour une utilisation dans Monaco Editor
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, dirname, relative, sep } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ROOT_DIR = join(__dirname, '..');
const NODE_MODULES = join(ROOT_DIR, 'node_modules');
const OUTPUT_DIR = join(ROOT_DIR, 'docs/.vitepress/theme/components/monaco');

// Packages à traiter
const PACKAGES = [
    {
        name: '@odyssee-software/pulse-framework',
        outputFile: 'pulse-framework.d.ts',
        distPath: 'dist'
    },
    {
        name: '@odyssee-software/components',
        outputFile: 'odyssee-components.d.ts',
        distPath: 'dist'
    }
];

/**
 * Récupère tous les fichiers .d.ts récursivement
 */
function getAllDtsFiles(dir, fileList = []) {
    const files = readdirSync(dir);

    files.forEach(file => {
        const filePath = join(dir, file);
        const stat = statSync(filePath);

        if (stat.isDirectory()) {
            getAllDtsFiles(filePath, fileList);
        } else if (file.endsWith('.d.ts') && !file.endsWith('.d.ts.map')) {
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

    console.log(`📦 Traitement de ${dtsFiles.length} fichiers .d.ts dans ${fullDistPath}`);

    const fileContents = new Map();
    const processedModules = new Set();

    // Lire tous les fichiers
    dtsFiles.forEach(file => {
        const content = readFileSync(file, 'utf-8');
        const relativePath = relative(fullDistPath, file).replace(/\\/g, '/');
        fileContents.set(relativePath, content);
    });

    // Traiter le fichier principal (index.d.ts)
    const mainFile = 'index.d.ts';
    let combinedContent = '// Auto-generated type definitions\n';
    combinedContent += '// Do not edit manually - run npm run generate:types\n\n';

    /**
     * Résout récursivement les imports
     */
    function resolveImports(filePath, level = 0) {
        if (processedModules.has(filePath)) {
            return '';
        }

        processedModules.add(filePath);
        const content = fileContents.get(filePath);

        if (!content) {
            console.warn(`⚠️  Fichier non trouvé: ${filePath}`);
            return '';
        }

        let result = '';
        const lines = content.split('\n');

        for (let line of lines) {
            // Détecter les imports relatifs
            const importMatch = line.match(/^import\s+.*\s+from\s+['"](\..+?)['"]/);
            const exportFromMatch = line.match(/^export\s+.*\s+from\s+['"](\..+?)['"]/);

            if (importMatch || exportFromMatch) {
                const importPath = (importMatch || exportFromMatch)[1];
                let resolvedPath = join(dirname(filePath), importPath);

                // Normaliser le chemin
                resolvedPath = resolvedPath.replace(/\\/g, '/');

                // Ajouter .d.ts si nécessaire
                if (!resolvedPath.endsWith('.d.ts')) {
                    if (fileContents.has(resolvedPath + '.d.ts')) {
                        resolvedPath = resolvedPath + '.d.ts';
                    } else if (fileContents.has(resolvedPath + '/index.d.ts')) {
                        resolvedPath = resolvedPath + '/index.d.ts';
                    }
                }

                // Résoudre récursivement
                if (fileContents.has(resolvedPath)) {
                    result += resolveImports(resolvedPath, level + 1);
                }

                // Ne pas inclure la ligne d'import dans le résultat final
                continue;
            }

            // Ignorer les sourceMappingURL
            if (line.includes('sourceMappingURL')) {
                continue;
            }

            // Inclure la ligne
            result += line + '\n';
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
    jsx(type: string | Function, props: any, ...children: any[]): HTMLElement | SVGElement | DocumentFragment;
    Fragment(props?: { children?: any }): DocumentFragment;
};

// Import all component types from the generated file
/// <reference path="./odyssee-components.d.ts" />

// Declare all components as global
declare const Button: typeof import('@odyssee-software/components').Button;
declare const Input: typeof import('@odyssee-software/components').Input;
declare const Select: typeof import('@odyssee-software/components').Select;
declare const Checkbox: typeof import('@odyssee-software/components').Checkbox;
declare const Radio: typeof import('@odyssee-software/components').Radio;
declare const RadioGroup: typeof import('@odyssee-software/components').RadioGroup;
declare const Toggle: typeof import('@odyssee-software/components').Toggle;
declare const Textarea: typeof import('@odyssee-software/components').Textarea;
declare const FileInput: typeof import('@odyssee-software/components').FileInput;
declare const Alert: typeof import('@odyssee-software/components').Alert;
declare const Badge: typeof import('@odyssee-software/components').Badge;
declare const Card: typeof import('@odyssee-software/components').Card;
declare const Avatar: typeof import('@odyssee-software/components').Avatar;
declare const AvatarGroup: typeof import('@odyssee-software/components').AvatarGroup;
declare const Blockquote: typeof import('@odyssee-software/components').Blockquote;
declare const Progress: typeof import('@odyssee-software/components').Progress;
declare const ButtonGroup: typeof import('@odyssee-software/components').ButtonGroup;
declare const Collapse: typeof import('@odyssee-software/components').Collapse;
declare const Divider: typeof import('@odyssee-software/components').Divider;
declare const Icon: typeof import('@odyssee-software/components').Icon;
declare const Spinner: typeof import('@odyssee-software/components').Spinner;
declare const ButtonSpinner: typeof import('@odyssee-software/components').ButtonSpinner;
declare const Skeleton: typeof import('@odyssee-software/components').Skeleton;
declare const Modal: typeof import('@odyssee-software/components').Modal;
declare const Tooltip: typeof import('@odyssee-software/components').Tooltip;
declare const Dropdown: typeof import('@odyssee-software/components').Dropdown;
declare const Popover: typeof import('@odyssee-software/components').Popover;
declare const Tabs: typeof import('@odyssee-software/components').Tabs;
declare const Accordion: typeof import('@odyssee-software/components').Accordion;
declare const Table: typeof import('@odyssee-software/components').Table;
declare const Pagination: typeof import('@odyssee-software/components').Pagination;
declare const Breadcrumb: typeof import('@odyssee-software/components').Breadcrumb;
declare const Navbar: typeof import('@odyssee-software/components').Navbar;
declare const Container: typeof import('@odyssee-software/components').Container;
declare const Grid: typeof import('@odyssee-software/components').Grid;
declare const Columns: typeof import('@odyssee-software/components').Columns;
`;
}

/**
 * Main
 */
console.log('🚀 Génération des types pour Monaco Editor...\n');

PACKAGES.forEach(pkg => {
    console.log(`📦 Traitement du package: ${pkg.name}`);

    const packagePath = join(NODE_MODULES, pkg.name);
    const combinedTypes = resolveAndCombineTypes(packagePath, pkg.distPath);

    const outputPath = join(OUTPUT_DIR, pkg.outputFile);
    writeFileSync(outputPath, combinedTypes, 'utf-8');

    console.log(`✅ Généré: ${outputPath}\n`);
});

// Générer les déclarations globales
const globalsPath = join(OUTPUT_DIR, 'globals.d.ts');
writeFileSync(globalsPath, generateGlobalDeclarations(), 'utf-8');
console.log(`✅ Généré: ${globalsPath}\n`);

console.log('✨ Génération terminée avec succès!');
