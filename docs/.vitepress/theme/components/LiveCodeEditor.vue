<template>
  <div class="live-code-editor">
    <div class="editor-header">
      <span class="editor-label">Code Éditable</span>
      <button @click="resetCode" class="reset-button">Reset</button>
    </div>

    <div class="editor-container">
      <textarea
        ref="textareaRef"
        v-model="currentCode"
        class="code-textarea"
        spellcheck="false"
        @input="handleCodeChange"
      ></textarea>
    </div>

    <div class="preview-header">
      <span class="preview-label">Résultat</span>
      <span v-if="error" class="error-badge">Erreur</span>
    </div>

    <div class="preview-container">
      <div ref="previewRef" class="preview-content"></div>
      <div v-if="error" class="error-message">{{ error }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';

interface Props {
  code?: string;
  defaultCode?: string;
}

const props = withDefaults(defineProps<Props>(), {
  code: '',
  defaultCode: `<Button variant="solid" color="primary">
  Click me
</Button>`
});

const textareaRef = ref<HTMLTextAreaElement | null>(null);
const previewRef = ref<HTMLDivElement | null>(null);
const currentCode = ref(props.code || props.defaultCode);
const error = ref<string | null>(null);

let debounceTimer: number | null = null;

const executeCode = async () => {
  if (!previewRef.value) return;

  error.value = null;
  previewRef.value.innerHTML = '';

  try {
    // Dynamic import to avoid SSR issues
    const Pulse = (await import('pulse-framework')).default;
    const components = await import('@odyssee/components');

    // Import Babel and check what we get
    const babelModule = await import('@babel/standalone');
    console.log('Babel module:', babelModule);
    console.log('Babel.default:', babelModule.default);
    console.log('Babel keys:', Object.keys(babelModule));

    const Babel = babelModule.default || babelModule;
    console.log('Final Babel:', Babel);
    console.log('Babel.transform:', Babel?.transform);

    // Create scope with all components
    const scope = {
      Pulse,
      ...components,
    };

    // Build the function with scope
    const scopeKeys = Object.keys(scope);
    const scopeValues = Object.values(scope);

    let codeToExecute = currentCode.value.trim();

    // Check if code is JSX (starts with <)
    const isJSX = codeToExecute.startsWith('<');

    if (isJSX) {
      // Compile JSX to JS
      const transformed = Babel.transform(codeToExecute, {
        presets: ['react'],
        plugins: [
          ['transform-react-jsx', {
            pragma: 'Pulse.jsx',
            pragmaFrag: 'Pulse.render.fragment'
          }]
        ]
      });
      codeToExecute = transformed.code || codeToExecute;
    }

    // Wrap code to return result
    const wrappedCode = `
      try {
        const result = ${codeToExecute};
        return result;
      } catch (e) {
        throw new Error(e.message);
      }
    `;

    // Execute code
    const func = new Function(...scopeKeys, wrappedCode);
    const result = func(...scopeValues);

    // Render result
    if (result) {
      if (result instanceof HTMLElement || result instanceof Node) {
        previewRef.value.appendChild(result);
      } else if (typeof result === 'string') {
        previewRef.value.textContent = result;
      } else if (typeof result === 'object') {
        previewRef.value.textContent = JSON.stringify(result, null, 2);
      }
    }
  } catch (err: any) {
    error.value = err.message || 'Erreur lors de l\'exécution du code';
    console.error('LiveCodeEditor error:', err);
  }
};

const handleCodeChange = () => {
  if (debounceTimer) {
    clearTimeout(debounceTimer);
  }

  debounceTimer = setTimeout(() => {
    executeCode();
  }, 500) as unknown as number;
};

const resetCode = () => {
  currentCode.value = props.defaultCode;
  executeCode();
};

const resizeTextarea = () => {
  if (textareaRef.value) {
    textareaRef.value.style.height = 'auto';
    textareaRef.value.style.height = textareaRef.value.scrollHeight + 'px';
  }
};

watch(currentCode, () => {
  resizeTextarea();
});

onMounted(() => {
  executeCode();
  resizeTextarea();
});

onUnmounted(() => {
  if (debounceTimer) {
    clearTimeout(debounceTimer);
  }
  if (previewRef.value) {
    previewRef.value.innerHTML = '';
  }
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
  padding: 1rem;
}

.code-textarea {
  width: 100%;
  min-height: 120px;
  max-height: 400px;
  background: transparent;
  border: none;
  outline: none;
  color: #d4d4d4;
  font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  resize: none;
  overflow-y: auto;
  tab-size: 2;
}

.code-textarea::selection {
  background: #264f78;
}

.preview-container {
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  min-height: 80px;
}

.preview-content {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}

.error-message {
  margin-top: 1rem;
  padding: 1rem;
  background: #fee2e2;
  color: #991b1b;
  border-radius: 6px;
  font-size: 0.875rem;
  font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
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

/* Dark mode support */
.dark .editor-container {
  background: #0d0d0d;
}

.dark .code-textarea {
  color: #e5e7eb;
}
</style>
