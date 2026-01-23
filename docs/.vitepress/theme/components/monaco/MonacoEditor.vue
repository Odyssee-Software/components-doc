<template>
    <div ref="editorContainer" class="monaco-editor-container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import * as monaco from "monaco-editor";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

// Import type definitions as raw strings
import pulseTypeDefs from "./pulse-framework.d.ts?raw";
import componentsTypeDefs from "./odyssee-components.d.ts?raw";

// Global flag to ensure Monaco is configured only once
let monacoConfigured = false;

/**
 * Configure Monaco globally - should only happen once
 */
function configureMonacoGlobally() {
    if (monacoConfigured) return;

    console.log("[Monaco] Configuring TypeScript globally...");

    // Configure TypeScript compiler options
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
        target: monaco.languages.typescript.ScriptTarget.ES2020,
        allowNonTsExtensions: true,
        moduleResolution:
            monaco.languages.typescript.ModuleResolutionKind.NodeJs,
        module: monaco.languages.typescript.ModuleKind.ESNext,
        noEmit: true,
        esModuleInterop: true,
        jsx: monaco.languages.typescript.JsxEmit.React,
        jsxFactory: "Pulse.jsx",
        reactNamespace: "Pulse",
        allowJs: true,
        typeRoots: ["node_modules/@types"],
        skipLibCheck: true,
        skipDefaultLibCheck: true,
    });

    // Disable diagnostics (no red squiggles)
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
        noSemanticValidation: true,
        noSyntaxValidation: true,
    });

    // Enable eager model sync for better IntelliSense
    monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true);

    // Add type definitions with consistent URIs
    console.log("[Monaco] Loading Pulse types:", pulseTypeDefs.length, "chars");
    monaco.languages.typescript.typescriptDefaults.addExtraLib(
        pulseTypeDefs,
        "file:///node_modules/@types/pulse-framework/index.d.ts",
    );

    console.log(
        "[Monaco] Loading Components types:",
        componentsTypeDefs.length,
        "chars",
    );
    monaco.languages.typescript.typescriptDefaults.addExtraLib(
        componentsTypeDefs,
        "file:///node_modules/@types/odyssee-components/index.d.ts",
    );

    monacoConfigured = true;
    console.log("[Monaco] Global configuration complete");
}

interface Props {
    modelValue: string;
    language?: string;
    theme?: "vs-dark" | "vs-light";
    readonly?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    language: "typescript",
    theme: "vs-dark",
    readonly: false,
});

const emit = defineEmits<{
    (e: "update:modelValue", value: string): void;
    (e: "change", value: string): void;
}>();

const editorContainer = ref<HTMLElement | null>(null);
let editor: monaco.editor.IStandaloneCodeEditor | null = null;
let editorId = 0;

// Configure Monaco workers (only once)
if (!self.MonacoEnvironment) {
    self.MonacoEnvironment = {
        getWorker(_: string, label: string) {
            if (label === "typescript" || label === "javascript") {
                return new tsWorker();
            }
            return new editorWorker();
        },
    };
}

onMounted(() => {
    if (!editorContainer.value) return;

    // Configure Monaco globally (only once)
    configureMonacoGlobally();

    // Create a unique ID for this editor instance
    editorId = Date.now() + Math.random();

    console.log(`[Monaco #${editorId}] Creating editor instance...`);

    // Create a model with unique URI and language
    const modelUri = monaco.Uri.parse(`file:///editor-${editorId}.tsx`);
    const model = monaco.editor.createModel(
        props.modelValue || "",
        "typescript",
        modelUri,
    );

    // Create editor instance with the model
    editor = monaco.editor.create(editorContainer.value, {
        model: model,
        theme: props.theme,
        readOnly: props.readonly,
        automaticLayout: true,
        minimap: { enabled: false },
        fontSize: 14,
        lineNumbers: "on",
        roundedSelection: false,
        scrollBeyondLastLine: false,
        renderWhitespace: "selection",
        tabSize: 2,
        wordWrap: "on",
        contextmenu: true,
        quickSuggestions: {
            other: true,
            comments: false,
            strings: true,
        },
        suggestOnTriggerCharacters: true,
        acceptSuggestionOnEnter: "on",
        snippetSuggestions: "inline",
        parameterHints: {
            enabled: true,
        },
        suggest: {
            showMethods: true,
            showFunctions: true,
            showConstructors: true,
            showFields: true,
            showVariables: true,
            showClasses: true,
            showStructs: true,
            showInterfaces: true,
            showModules: true,
            showProperties: true,
            showValues: true,
            showConstants: true,
        },
        padding: { top: 10, bottom: 10 },
    });

    console.log(
        `[Monaco #${editorId}] Editor created with value length:`,
        props.modelValue?.length || 0,
    );

    // Listen to content changes
    editor.onDidChangeModelContent(() => {
        if (editor) {
            const value = editor.getValue();
            emit("update:modelValue", value);
            emit("change", value);
        }
    });
});

// Watch for external value changes
watch(
    () => props.modelValue,
    (newValue) => {
        if (editor) {
            const currentValue = editor.getValue();
            if (currentValue !== newValue) {
                console.log(
                    `[Monaco #${editorId}] Updating value:`,
                    newValue?.length || 0,
                    "chars",
                );
                editor.setValue(newValue || "");
            }
        }
    },
);

// Watch for theme changes
watch(
    () => props.theme,
    (newTheme) => {
        if (editor) {
            monaco.editor.setTheme(newTheme);
        }
    },
);

onUnmounted(() => {
    if (editor) {
        const model = editor.getModel();
        editor.dispose();
        if (model) {
            model.dispose();
        }
    }
});
</script>

<style scoped>
.monaco-editor-container {
    width: 100%;
    height: 100%;
    min-height: 200px;
}
</style>
