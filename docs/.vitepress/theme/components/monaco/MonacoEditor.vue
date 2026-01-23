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
import globalTypeDefs from "./globals.d.ts?raw";

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

// Configure Monaco workers
self.MonacoEnvironment = {
    getWorker(_: string, label: string) {
        if (label === "typescript" || label === "javascript") {
            return new tsWorker();
        }
        return new editorWorker();
    },
};

onMounted(() => {
    if (!editorContainer.value) return;

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
    });

    // Add type definitions from actual library files
    monaco.languages.typescript.typescriptDefaults.addExtraLib(
        pulseTypeDefs,
        "file:///node_modules/@odyssee-software/pulse-framework/dist/index.d.ts",
    );

    monaco.languages.typescript.typescriptDefaults.addExtraLib(
        componentsTypeDefs,
        "file:///node_modules/@odyssee-software/components/dist/index.d.ts",
    );

    // Add global declarations for easier access (auto-generated)
    monaco.languages.typescript.typescriptDefaults.addExtraLib(
        globalTypeDefs,
        "file:///globals.d.ts",
    );

    // Set diagnostic options
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
        noSemanticValidation: false,
        noSyntaxValidation: false,
    });

    // Create editor instance
    editor = monaco.editor.create(editorContainer.value, {
        value: props.modelValue,
        language: props.language,
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
        padding: { top: 10, bottom: 10 },
    });

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
        if (editor && editor.getValue() !== newValue) {
            editor.setValue(newValue);
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
        editor.dispose();
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
