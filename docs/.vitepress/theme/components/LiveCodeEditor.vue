<template>
    <div class="live-code-editor">
        <div class="editor-header">
            <span class="editor-label">Code Éditable</span>
            <button @click="resetCode" class="reset-button">Reset</button>
        </div>

        <div class="editor-container">
            <MonacoEditor
                v-model="currentCode"
                language="typescript"
                theme="vs-dark"
                @change="handleCodeChange"
            />
        </div>

        <div class="preview-header">
            <span class="preview-label">Résultat</span>
            <span v-if="error" class="error-badge">Erreur</span>
        </div>

        <div class="preview-container">
            <iframe
                ref="iframeRef"
                class="preview-iframe"
                sandbox="allow-scripts allow-same-origin"
                :srcdoc="iframeContent"
                title="Component Preview"
            ></iframe>
            <div v-if="error" class="error-message">{{ error }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from "vue";
import MonacoEditor from "./monaco/MonacoEditor.vue";

interface Props {
    code?: string;
    defaultCode?: string;
}

const props = withDefaults(defineProps<Props>(), {
    code: "",
    defaultCode: `<Button variant="solid" color="primary">
  Click me
</Button>`,
});

const iframeRef = ref<HTMLIFrameElement | null>(null);
const currentCode = ref(props.code || props.defaultCode);
const error = ref<string | null>(null);
const iframeContent = ref("");

let debounceTimer: number | null = null;
let iframeReady = false;
let modulesLoaded = false;

// Preload modules and CSS in parent
let Pulse: any = null;
let components: any = null;
let Babel: any = null;
let cssContent: string = "";

const loadModules = async () => {
    if (modulesLoaded) return;

    try {
        Pulse = (await import("@odyssee-software/pulse-framework")).default;
        components = await import("@odyssee-software/components");
        const BabelModule = await import("@babel/standalone");
        Babel = BabelModule.default || BabelModule;

        // Load CSS content as string
        console.log("🔍 Loading CSS...");
        const cssModule =
            await import("@odyssee-software/components/styles?inline");
        cssContent = cssModule.default || cssModule;
        console.log("🔍 CSS loaded:", typeof cssContent);
        console.log("🔍 CSS length:", cssContent?.length || 0);

        modulesLoaded = true;
        console.log("✅ Modules loaded");
    } catch (err) {
        console.error("❌ Failed to load modules:", err);
        throw err;
    }
};

// Listen for messages from iframe
const handleIframeMessage = (event: MessageEvent) => {
    // Vérifier que le message vient bien de notre iframe
    if (!iframeRef.value || event.source !== iframeRef.value.contentWindow) {
        return;
    }

    if (event.data.type === "IFRAME_READY") {
        iframeReady = true;
        executeCode();
    } else if (event.data.type === "ERROR") {
        error.value = event.data.error;
    }
};

// Generate the HTML document for the iframe
const generateIframeDocument = () => {
    console.log("🔍 Generating iframe document");
    console.log("🔍 CSS content available:", !!cssContent);
    console.log("🔍 CSS length in template:", cssContent?.length || 0);

    // Use variables to avoid Vue parsing HTML tags in template string
    const htmlOpen = '<!DOCTYPE html>\n<html lang="en">\n<head>';
    const headClose = "</head>";
    const bodyOpen = "<body>";
    const bodyClose = "</body>\n</html>";

    return (
        htmlOpen +
        `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Preview</title>

    <!-- Load lodash (required by Preline) -->
    <script id="lodash-script" src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"><\/script>
    <!-- Load Floating-dom -->
    <script src="https://cdn.jsdelivr.net/npm/@floating-ui/core@1.7.3"><\/script>
    <script id="floating-ui-script" src="https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.7.4"><\/script>
    <!-- Load Preline -->
    <script id="preline-script" src="https://cdn.jsdelivr.net/npm/preline@2.4.1/dist/preline.js"><\/script>

    <style>
        ${cssContent}
    </style>
    <style>
        body {
            margin: 0;
            padding: 1.5rem;
            font-family: system-ui, -apple-system, sans-serif;
            background: transparent;
        }
        #preview {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            align-items: center;
        }
        .error {
            color: #dc2626;
            padding: 1rem;
            background: #fee2e2;
            border-radius: 6px;
            font-family: monospace;
            font-size: 0.875rem;
        }
    </style>
` +
        headClose +
        bodyOpen +
        `
    <div id="preview"></div>
    <script>
        // Execute code with dependencies passed from parent
        const executeCode = (code, Pulse, components, Babel) => {
        console.log({window})
            try {
                console.log('🔍 Iframe: executeCode called');
                console.log('🔍 Code:', code);
                console.log('🔍 Pulse:', Pulse);
                console.log('🔍 Components:', Object.keys(components));
                console.log('🔍 Babel:', Babel);

                // Create scope with all components
                const scope = {
                    Pulse,
                    ...components,
                };

                // Build the function with scope
                const scopeKeys = Object.keys(scope);
                const scopeValues = Object.values(scope);

                let codeToExecute = code.trim();
                console.log('🔍 Code to execute:', codeToExecute);

                // Check if code is JSX (starts with <)
                const isJSX = codeToExecute.startsWith("<");

                if (isJSX) {
                    console.log('🔍 Compiling JSX...');
                    // Compile JSX to JS
                    const transformed = Babel.transform(codeToExecute, {
                        presets: ["react"],
                        plugins: [
                            [
                                "transform-react-jsx",
                                {
                                    pragma: "Pulse.jsx",
                                    pragmaFrag: "Pulse.render.fragment",
                                },
                            ],
                        ],
                    });
                    codeToExecute = transformed.code || codeToExecute;
                    console.log('🔍 Compiled code:', codeToExecute);
                }

                // Wrap code to return result
                const wrappedCode = \`
                    try {
                        const result = \${codeToExecute};
                        return result;
                    } catch (e) {
                        throw new Error(e.message);
                    }
                \`;

                // Execute code
                const func = new Function(...scopeKeys, wrappedCode);
                const result = func(...scopeValues);

                console.log('🔍 Result:', result);
                console.log('🔍 Result type:', typeof result);
                console.log('🔍 Result instanceof Node:', result instanceof Node);
                console.log('🔍 Result instanceof HTMLElement:', result instanceof HTMLElement);

                // Render result
                const preview = document.getElementById("preview");
                console.log({preview , result})
                if (preview) {
                    preview.innerHTML = "";

                    if (result) {
                        if (result instanceof Element || result instanceof Node || typeof result === "object") {
                            console.log('✅ Appending result to preview');
                            preview.appendChild(result);

                            console.log({ components })

                            // Initialize odyssee components
                            if (typeof components.Init === "function") {
                                setTimeout(() => {
                                    components.Init(true);
                                    window.HSStaticMethods["autoInit"]();
                                    console.log('✅ components.init called');
                                }, 10);
                            }
                        } else if (typeof result === "string") {
                            console.log('✅ Rendering string result');
                            preview.textContent = result;
                        }
                    } else {
                        console.log('⚠️ Result is falsy:', result);
                    }
                }
            } catch (err) {
                const preview = document.getElementById("preview");
                if (preview) {
                    preview.innerHTML = \`<div class="error">\${err.message || "Error executing code"}</div>\`;
                }
                console.error("Preview error:", err);
                window.parent.postMessage({ type: 'ERROR', error: err.message }, '*');
            }
        };

        // Listen for code execution requests
        window.addEventListener('message', (event) => {
            if (event.data.type === 'EXECUTE_CODE') {
                const { code } = event.data;
                // Get modules from window object set by parent
                const { Pulse, components, Babel } = window.__MODULES__ || {};
                if (Pulse && components && Babel) {
                    executeCode(code, Pulse, components, Babel);
                } else {
                    console.error('Modules not available');
                }
            }
        });

        // Wait for all external scripts to load before signaling ready
        window.addEventListener('load', () => {
            console.log('✅ All external scripts loaded in iframe');
            window.parent.postMessage({ type: 'IFRAME_READY' }, '*');
        });
    <\/script>
` +
        bodyClose
    );
};

const executeCode = async () => {
    if (!iframeRef.value) return;

    error.value = null;

    try {
        // Load modules if not already loaded
        await loadModules();

        // If iframe is not ready yet, regenerate it
        if (!iframeReady) {
            iframeContent.value = generateIframeDocument();
            return;
        }

        // Serialize modules to transferable data
        const serializableData = {
            type: "EXECUTE_CODE",
            code: currentCode.value,
            Pulse: {
                jsx: Pulse.jsx.toString(),
                signal: Pulse.signal.toString(),
                computed: Pulse.computed.toString(),
                effect: Pulse.effect.toString(),
                init: Pulse.init?.toString(),
            },
            components: Object.keys(components).reduce((acc, key) => {
                if (typeof components[key] === "function") {
                    acc[key] = components[key].toString();
                }
                return acc;
            }, {}),
            Babel: {
                transform: Babel.transform?.toString(),
            },
        };

        // Send serialized data to iframe
        const iframe = iframeRef.value;
        if (iframe.contentWindow) {
            // Instead of serializing, set modules on iframe's window directly
            iframe.contentWindow.postMessage(
                {
                    type: "EXECUTE_CODE",
                    code: currentCode.value,
                },
                "*",
            );

            // Pass modules via iframe window object (same-origin allows this)
            iframe.contentWindow.__MODULES__ = {
                Pulse,
                components,
                Babel,
            };
        }
    } catch (err: any) {
        error.value = err.message || "Erreur lors de l'exécution du code";
        console.error("LiveCodeEditor error:", err);
    }
};

const handleCodeChange = () => {
    if (debounceTimer) {
        clearTimeout(debounceTimer);
    }

    debounceTimer = setTimeout(() => {
        executeCode();
    }, 800) as unknown as number;
};

const resetCode = () => {
    currentCode.value = props.defaultCode;
    executeCode();
};

onMounted(async () => {
    // Listen for iframe messages
    window.addEventListener("message", handleIframeMessage);

    // Load modules first, then initialize iframe content
    await loadModules();
    iframeContent.value = generateIframeDocument();
});

onUnmounted(() => {
    if (debounceTimer) {
        clearTimeout(debounceTimer);
    }
    window.removeEventListener("message", handleIframeMessage);
});
</script>

<style scoped>
.live-code-editor {
    margin: 2rem 0;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    overflow: hidden;
    background: var(--vp-c-bg);
}

.editor-header,
.preview-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    background: var(--vp-c-bg-soft);
    border-bottom: 1px solid var(--vp-c-divider);
}

.editor-label,
.preview-label {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--vp-c-text-2);
}

.reset-button {
    font-size: 0.75rem;
    padding: 0.25rem 0.75rem;
    background: var(--vp-c-brand);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
}

.reset-button:hover {
    background: var(--vp-c-brand-dark);
}

.error-badge {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    background: #fee2e2;
    color: #991b1b;
    border-radius: 4px;
    font-weight: 600;
}

.editor-container {
    background: #1e1e1e;
    height: 300px;
    overflow: hidden;
}

.preview-container {
    padding: 0;
    background: var(--vp-c-bg-soft);
    min-height: 120px;
    position: relative;
}

.preview-iframe {
    width: 100%;
    min-height: 120px;
    border: none;
    display: block;
    background: transparent;
}

.error-message {
    margin: 1rem;
    padding: 1rem;
    background: #fee2e2;
    color: #991b1b;
    border-radius: 6px;
    font-size: 0.875rem;
    font-family: "Monaco", "Menlo", "Courier New", monospace;
    border-left: 4px solid #dc2626;
}

.dark .error-message {
    background: #7f1d1d;
    color: #fecaca;
    border-left-color: #ef4444;
}

.dark .error-badge {
    background: #7f1d1d;
    color: #fecaca;
}

.dark .editor-container {
    background: #0d0d0d;
}

.dark .code-textarea {
    color: #e5e7eb;
}
</style>
