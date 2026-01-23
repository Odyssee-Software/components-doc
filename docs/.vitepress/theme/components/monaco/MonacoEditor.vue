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
import componentsTypesDefs from "./odyssee-components-types.d.ts?raw";

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

// Global type definitions to make components available without imports
const globalTypeDefs = `
declare const Pulse: typeof import('@odyssee-software/pulse-framework').default;
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
declare const Skeleton: typeof import('@odyssee-software/components').Skeleton;
declare const Modal: typeof import('@odyssee-software/components').Modal;
declare const Tooltip: typeof import('@odyssee-software/components').Tooltip;
declare const Dropdown: typeof import('@odyssee-software/components').Dropdown;
declare const Tabs: typeof import('@odyssee-software/components').Tabs;
declare const Accordion: typeof import('@odyssee-software/components').Accordion;
`;

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

    monaco.languages.typescript.typescriptDefaults.addExtraLib(
        componentsTypesDefs,
        "file:///node_modules/@odyssee-software/components/dist/types.d.ts",
    );

    // Add global declarations for easier access
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
