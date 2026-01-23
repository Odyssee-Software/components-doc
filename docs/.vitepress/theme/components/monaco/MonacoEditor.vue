<template>
    <div>
        <div ref="editorContainer" class="monaco-editor-container"></div>
        <div v-if="showDiagnostics" class="diagnostics-panel">
            <button @click="toggleDiagnostics" class="diagnostics-toggle">
                {{ diagnosticsExpanded ? "▼" : "▶" }} Diagnostics
            </button>
            <div v-if="diagnosticsExpanded" class="diagnostics-content">
                <div class="diagnostics-section">
                    <h4>TypeScript Worker Diagnostics</h4>
                    <button @click="refreshDiagnostics">Refresh</button>
                    <div v-if="tsErrors.length > 0" class="errors">
                        <div
                            v-for="(error, idx) in tsErrors"
                            :key="idx"
                            class="error-item"
                        >
                            <strong>{{ error.file }}:{{ error.line }}</strong> -
                            {{ error.message }}
                        </div>
                    </div>
                    <div v-else class="success">✓ No TypeScript errors</div>
                </div>
                <div class="diagnostics-section">
                    <h4>Loaded Type Libraries</h4>
                    <div>
                        pulse-framework.d.ts: {{ pulseTypeDefs.length }} chars
                    </div>
                    <div>
                        odyssee-components.d.ts:
                        {{ componentsTypeDefs.length }} chars
                    </div>
                </div>
                <div class="diagnostics-section">
                    <h4>Test Completion</h4>
                    <button @click="testCompletion">Test at cursor</button>
                    <div v-if="completionResult" class="completion-result">
                        <div>
                            Found
                            {{
                                completionResult.suggestions.length
                            }}
                            suggestions
                        </div>
                        <div
                            v-for="(
                                sugg, idx
                            ) in completionResult.suggestions.slice(0, 10)"
                            :key="idx"
                            class="suggestion-item"
                        >
                            {{ sugg.label }}
                            <span class="suggestion-kind"
                                >({{ sugg.kind }})</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import * as monaco from "monaco-editor";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

// Import type definitions as raw strings
import pulseTypeDefs from "./pulse-framework.d.ts?raw";
import componentsTypeDefs from "./odyssee-components.d.ts?raw";

interface Props {
    modelValue: string;
    language?: string;
    theme?: "vs-dark" | "vs-light";
    readonly?: boolean;
    showDiagnostics?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    language: "typescript",
    theme: "vs-dark",
    readonly: false,
    showDiagnostics: false,
});

const emit = defineEmits<{
    (e: "update:modelValue", value: string): void;
    (e: "change", value: string): void;
}>();

const editorContainer = ref<HTMLElement | null>(null);
let editor: monaco.editor.IStandaloneCodeEditor | null = null;

// Diagnostics state
const diagnosticsExpanded = ref(true);
const tsErrors = ref<Array<{ file: string; line: number; message: string }>>(
    [],
);
const completionResult = ref<{
    suggestions: Array<{ label: string; kind: string }>;
} | null>(null);

function toggleDiagnostics() {
    diagnosticsExpanded.value = !diagnosticsExpanded.value;
}

async function refreshDiagnostics() {
    if (!editor) return;

    tsErrors.value = [];

    try {
        const model = editor.getModel();
        if (!model) return;

        // Get TypeScript worker
        const worker = await monaco.languages.typescript.getTypeScriptWorker();
        const client = await worker(model.uri);

        // Get semantic diagnostics
        const semanticDiagnostics = await client.getSemanticDiagnostics(
            model.uri.toString(),
        );
        const syntacticDiagnostics = await client.getSyntacticDiagnostics(
            model.uri.toString(),
        );

        const allDiagnostics = [
            ...semanticDiagnostics,
            ...syntacticDiagnostics,
        ];

        tsErrors.value = allDiagnostics.map((diag: any) => ({
            file: model.uri.path,
            line: model.getPositionAt(diag.start || 0).lineNumber,
            message:
                typeof diag.messageText === "string"
                    ? diag.messageText
                    : diag.messageText?.messageText || "Unknown error",
        }));

        console.log("[Monaco Diagnostics]", {
            semanticCount: semanticDiagnostics.length,
            syntacticCount: syntacticDiagnostics.length,
            errors: tsErrors.value,
        });
    } catch (error) {
        console.error("[Monaco Diagnostics Error]", error);
        tsErrors.value = [
            {
                file: "system",
                line: 0,
                message: `Diagnostics failed: ${error}`,
            },
        ];
    }
}

async function testCompletion() {
    if (!editor) return;

    const model = editor.getModel();
    const position = editor.getPosition();
    if (!model || !position) return;

    try {
        // Trigger completion manually
        const worker = await monaco.languages.typescript.getTypeScriptWorker();
        const client = await worker(model.uri);

        const offset = model.getOffsetAt(position);
        const completions = await client.getCompletionsAtPosition(
            model.uri.toString(),
            offset,
        );

        if (completions && completions.entries) {
            completionResult.value = {
                suggestions: completions.entries.map((entry: any) => ({
                    label: entry.name,
                    kind: entry.kind,
                })),
            };

            console.log("[Monaco Completions]", {
                position,
                offset,
                count: completions.entries.length,
                entries: completions.entries.slice(0, 20),
            });
        } else {
            completionResult.value = { suggestions: [] };
            console.log("[Monaco Completions] No completions found");
        }
    } catch (error) {
        console.error("[Monaco Completions Error]", error);
        completionResult.value = { suggestions: [] };
    }
}

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

    console.log("[Monaco] Initializing with type definitions:", {
        pulseSize: pulseTypeDefs.length,
        componentsSize: componentsTypeDefs.length,
    });

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

    // Add type definitions from actual library files
    // Global declarations are included in each file
    const pulseLib = monaco.languages.typescript.typescriptDefaults.addExtraLib(
        pulseTypeDefs,
        "file:///node_modules/@types/pulse-framework/index.d.ts",
    );

    const componentsLib =
        monaco.languages.typescript.typescriptDefaults.addExtraLib(
            componentsTypeDefs,
            "file:///node_modules/@types/odyssee-components/index.d.ts",
        );

    console.log("[Monaco] Added extra libs:", {
        pulseLib: !!pulseLib,
        componentsLib: !!componentsLib,
    });

    // Set diagnostic options
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
        noSemanticValidation: false,
        noSyntaxValidation: false,
        diagnosticCodesToIgnore: [1375], // Ignore "await has no effect" in top-level
    });

    // Enable eager model sync for better IntelliSense
    monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true);

    // Create editor instance with a proper TypeScript model
    const model = monaco.editor.createModel(
        props.modelValue,
        props.language,
        monaco.Uri.parse("file:///main.tsx"),
    );

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

    // Listen to content changes
    editor.onDidChangeModelContent(() => {
        if (editor) {
            const value = editor.getValue();
            emit("update:modelValue", value);
            emit("change", value);
        }
    });

    // Auto-refresh diagnostics after typing stops
    let diagnosticsTimeout: number | null = null;
    if (props.showDiagnostics) {
        editor.onDidChangeModelContent(() => {
            if (diagnosticsTimeout) clearTimeout(diagnosticsTimeout);
            diagnosticsTimeout = window.setTimeout(() => {
                refreshDiagnostics();
            }, 1000);
        });

        // Initial diagnostics check
        setTimeout(() => refreshDiagnostics(), 1000);
    }

    console.log("[Monaco] Editor created successfully");
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

.diagnostics-panel {
    margin-top: 8px;
    border: 1px solid #3c3c3c;
    border-radius: 4px;
    background: #1e1e1e;
    font-size: 12px;
}

.diagnostics-toggle {
    width: 100%;
    padding: 8px 12px;
    background: #252526;
    border: none;
    color: #cccccc;
    text-align: left;
    cursor: pointer;
    font-family: monospace;
}

.diagnostics-toggle:hover {
    background: #2d2d30;
}

.diagnostics-content {
    padding: 12px;
    max-height: 400px;
    overflow-y: auto;
}

.diagnostics-section {
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #3c3c3c;
}

.diagnostics-section:last-child {
    border-bottom: none;
}

.diagnostics-section h4 {
    margin: 0 0 8px 0;
    color: #4ec9b0;
    font-size: 13px;
    font-weight: 600;
}

.diagnostics-section button {
    padding: 4px 8px;
    background: #0e639c;
    color: white;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    font-size: 11px;
    margin-bottom: 8px;
}

.diagnostics-section button:hover {
    background: #1177bb;
}

.errors,
.success {
    padding: 8px;
    border-radius: 4px;
    margin-top: 8px;
}

.errors {
    background: #5a1d1d;
    color: #f48771;
}

.success {
    background: #1e3a1e;
    color: #89d185;
}

.error-item {
    margin: 4px 0;
    font-family: monospace;
    font-size: 11px;
}

.error-item strong {
    color: #f48771;
}

.completion-result {
    background: #252526;
    padding: 8px;
    border-radius: 4px;
    margin-top: 8px;
    max-height: 200px;
    overflow-y: auto;
}

.suggestion-item {
    padding: 4px;
    font-family: monospace;
    font-size: 11px;
    color: #dcdcaa;
}

.suggestion-kind {
    color: #4ec9b0;
    font-size: 10px;
}
</style>
