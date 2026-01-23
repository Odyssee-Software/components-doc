#!/usr/bin/env node

/**
 * Script pour générer les fichiers de types standalone pour Monaco Editor
 * Utilise dts-bundle-generator pour bundler proprement les types TypeScript
 */

import { generateDtsBundle } from "dts-bundle-generator";
import { writeFileSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ROOT_DIR = join(__dirname, "..");
const OUTPUT_DIR = join(ROOT_DIR, "docs/.vitepress/theme/components/monaco");

// Packages à traiter
const PACKAGES = [
  {
    name: "@odyssee-software/pulse-framework",
    outputFile: "pulse-framework.d.ts",
    entryPoint: join(
      ROOT_DIR,
      "node_modules/@odyssee-software/pulse-framework/dist/index.d.ts",
    ),
  },
  {
    name: "@odyssee-software/components",
    outputFile: "odyssee-components.d.ts",
    entryPoint: join(
      ROOT_DIR,
      "node_modules/@odyssee-software/components/dist/index.d.ts",
    ),
  },
];

/**
 * Génère un bundle de types avec dts-bundle-generator
 */
function generateTypeBundle(entryPoint, packageName) {
  console.log(`📦 Bundling types for: ${packageName}`);
  console.log(`   Entry point: ${entryPoint}`);

  const options = {
    filePath: entryPoint,
    output: {
      noBanner: true,
      sortNodes: true,
      exportReferencedTypes: true,
      inlineDeclareGlobals: true,
      inlineDeclareExternals: true,
    },
    libraries: {
      inlinedLibraries: [
        "@odyssee-software/pulse-framework",
        "@odyssee-software/components",
      ],
      allowedTypesLibraries: [
        "@odyssee-software/pulse-framework",
        "@odyssee-software/components",
      ],
    },
  };

  try {
    const [output] = generateDtsBundle([options]);

    // Nettoyer le contenu
    let cleanedOutput = cleanTypeDefinitions(output);

    // Ajouter l'en-tête
    let finalOutput = "// Auto-generated type definitions\n";
    finalOutput += "// Do not edit manually - run npm run generate:types\n\n";
    finalOutput += cleanedOutput;

    // Ajouter les déclarations globales à la fin du fichier
    // On passe le contenu nettoyé pour extraire les vraies signatures
    finalOutput +=
      "\n" + generateGlobalDeclarations(packageName, cleanedOutput);

    return finalOutput;
  } catch (error) {
    console.error(`   ❌ Error bundling types:`, error.message);
    throw error;
  }
}

/**
 * Nettoie les définitions de types
 */
function cleanTypeDefinitions(content) {
  // Supprimer les imports de packages externes qui ne sont pas nécessaires
  content = content.replace(
    /import\s+(?:type\s+)?.*?\s+from\s+['"](?:preline|@preline\/[^'"]*|@floating-ui\/[^'"]*)['"]\s*;?\n?/g,
    "",
  );

  // Supprimer les imports CSS
  content = content.replace(/import\s+['"][^'"]*\.css['"]\s*;?\n?/g, "");

  // Supprimer les imports side-effect de packages externes
  content = content.replace(/import\s+['"](?!\.)[^'"]*['"]\s*;?\n?/g, "");

  // Remplacer les import() dynamiques par any
  content = content.replace(/import\(['"][^'"]+['"]\)\.\w+/g, "any");

  // Supprimer les sourceMappingURL
  content = content.replace(/\/\/# sourceMappingURL=.*$/gm, "");

  // Nettoyer les lignes vides excessives
  content = content.replace(/\n{3,}/g, "\n\n");

  return content.trim();
}

/**
 * Génère des déclarations globales pour un package
 * Ces déclarations sont ajoutées à la fin du fichier bundlé
 * On extrait les signatures d'export réelles du contenu généré
 */
function generateGlobalDeclarations(packageName, bundledContent) {
  if (packageName === "@odyssee-software/pulse-framework") {
    // Pour Pulse, extraire la signature de l'export const Pulse
    const pulseExportMatch = bundledContent.match(
      /export declare const Pulse: \{[\s\S]*?\n\};/,
    );

    if (pulseExportMatch) {
      const pulseSignature = pulseExportMatch[0].replace(/^export /, "");
      return `


// ============================================
// Global declarations for Monaco Editor
// ============================================

declare global {
  /**
   * Pulse is available globally in the editor
   * Use it to create signals, computed values, effects, and JSX
   *
   * @example
   * const count = Pulse.signal(0);
   *
   * <button onclick={() => count(count() + 1)}>
   *   Count: {count()}
   * </button>
   */
  ${pulseSignature}
}
`;
    }
  } else if (packageName === "@odyssee-software/components") {
    const componentsToExport = [
      "Button",
      "Input",
      "Select",
      "Checkbox",
      "Radio",
      "RadioGroup",
      "Toggle",
      "Textarea",
      "FileInput",
      "Alert",
      "Badge",
      "Card",
      "Avatar",
      "AvatarGroup",
      "Blockquote",
      "Progress",
      "ButtonGroup",
      "Collapse",
      "Divider",
      "Icon",
      "Spinner",
      "ButtonSpinner",
      "Skeleton",
      "Modal",
      "Tooltip",
      "Dropdown",
      "Popover",
      "Tabs",
      "Accordion",
      "Table",
      "Pagination",
      "Breadcrumb",
      "Navbar",
      "Container",
      "Grid",
      "Columns",
      "H1",
      "H2",
      "H3",
      "H4",
      "H5",
      "H6",
      "Text",
      "Link",
      "Image",
      "Offcanvas",
      "ContextMenu",
      "TreeView",
      "Stepper",
      "FormGroup",
      "InputGroup",
      "RangeSlider",
      "ColorPicker",
      "TimePicker",
      "DatePicker",
      "InputNumber",
      "PinInput",
      "ComboBox",
      "SearchBox",
      "StrongPassword",
      "TogglePassword",
      "Carousel",
      "ChatBubble",
      "Device",
      "Rating",
      "Timeline",
      "Toast",
      "List",
      "ListGroup",
      "Kbd",
      "FormLabel",
      "FormHelperText",
    ];

    let declarations = `


// ============================================
// Global declarations for Monaco Editor
// ============================================

declare global {
  /**
   * All Odyssee components are available globally in the editor
   * No need to import them - just use them directly!
   *
   * @example
   * <Button variant="solid" color="primary">Click me</Button>
   */
`;

    // Extraire les signatures d'export réelles pour chaque composant
    componentsToExport.forEach((comp) => {
      // Chercher "export declare const ComponentName: ..." jusqu'au point-virgule
      // Gestion des accolades imbriquées avec un compteur
      const startPattern = `export declare const ${comp}: `;
      const startIndex = bundledContent.indexOf(startPattern);

      if (startIndex !== -1) {
        let endIndex = startIndex + startPattern.length;
        let braceCount = 0;
        let inString = false;
        let stringChar = null;

        // Parcourir caractère par caractère jusqu'à trouver le ; de fin
        while (endIndex < bundledContent.length) {
          const char = bundledContent[endIndex];
          const prevChar = endIndex > 0 ? bundledContent[endIndex - 1] : "";

          // Gérer les strings pour ignorer les accolades dedans
          if (
            (char === '"' || char === "'" || char === "`") &&
            prevChar !== "\\"
          ) {
            if (!inString) {
              inString = true;
              stringChar = char;
            } else if (char === stringChar) {
              inString = false;
              stringChar = null;
            }
          }

          if (!inString) {
            if (char === "{") {
              braceCount++;
            } else if (char === "}") {
              braceCount--;
            } else if (char === ";" && braceCount === 0) {
              // Trouvé la fin de la déclaration
              break;
            }
          }

          endIndex++;
        }

        const signature = bundledContent.substring(
          startIndex + startPattern.length,
          endIndex,
        );
        declarations += `  const ${comp}: ${signature};\n`;
      } else {
        // Fallback si pas trouvé
        declarations += `  const ${comp}: any;\n`;
      }
    });

    declarations += `}\n`;

    return declarations;
  }
  return "";
}

/**
 * Main
 */
console.log("🚀 Génération des types pour Monaco Editor...\n");

let hasErrors = false;

// Générer les bundles de types
PACKAGES.forEach((pkg) => {
  try {
    const bundle = generateTypeBundle(pkg.entryPoint, pkg.name);

    const outputPath = join(OUTPUT_DIR, pkg.outputFile);
    writeFileSync(outputPath, bundle, "utf-8");

    console.log(`✅ Généré: ${outputPath}`);
    console.log(`   Taille: ${(bundle.length / 1024).toFixed(2)} KB\n`);
  } catch (error) {
    console.error(`❌ Erreur pour ${pkg.name}:`, error.message);
    hasErrors = true;
  }
});

if (hasErrors) {
  console.error("\n❌ La génération s'est terminée avec des erreurs.");
  process.exit(1);
} else {
  console.log("✨ Génération terminée avec succès!");
  console.log("\n💡 Les types sont maintenant disponibles pour Monaco Editor:");
  console.log(
    "   - pulse-framework.d.ts: Types Pulse complets avec déclarations globales",
  );
  console.log(
    "   - odyssee-components.d.ts: Types composants complets avec déclarations globales",
  );
}
