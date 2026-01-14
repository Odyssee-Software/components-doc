/**
 * LiveCode - Simple live code preview for Pulse components
 * Allows editing code and seeing the result rendered below
 */

import Pulse from 'pulse-framework';
import * as OdysseeComponents from '@odyssee/components';
import style from '@odyssee/components/dist/style.css';

interface LiveCodeProps {
  code: string;
  scope?: Record<string, any>;
  editable?: boolean;
}

export const LiveCode = (props: LiveCodeProps) => {
  const { code: initialCode, scope = {}, editable = true } = props;

  const code = Pulse.signal(initialCode);
  const error = Pulse.signal<string | null>(null);
  const previewContainer = document.createElement('div');
  previewContainer.className = 'live-preview-container';

  // Create wrapper
  const wrapper = (
    <div class="live-code-wrapper">
      {/* Code Editor */}
      <div class="live-code-editor">
        <textarea
          class="code-textarea"
          spellcheck="false"
          disabled={!editable}
        ></textarea>
      </div>

      {/* Preview */}
      <div class="live-code-preview">
        <div class="preview-label">Preview</div>
        <div class="preview-content"></div>
      </div>

      {/* Error Display */}
      <div class="live-code-error" style="display: none;"></div>
    </div>
  ) as HTMLElement;

  const textarea = wrapper.querySelector('.code-textarea') as HTMLTextAreaElement;
  const previewContent = wrapper.querySelector('.preview-content') as HTMLElement;
  const errorDisplay = wrapper.querySelector('.live-code-error') as HTMLElement;

  // Set initial code
  textarea.value = code();

  // Auto-resize textarea
  const resizeTextarea = () => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  // Execute code and render result
  const executeCode = () => {
    try {
      error(null);
      errorDisplay.style.display = 'none';
      previewContent.innerHTML = '';

      const currentCode = code();

      // Create scope with all exports from @odyssee/components
      const scopeWithDefaults = {
        Pulse,
        ...OdysseeComponents,
        ...scope,
      };

      // Build function arguments from scope keys
      const scopeKeys = Object.keys(scopeWithDefaults);
      const scopeValues = Object.values(scopeWithDefaults);

      // Wrap code to return the result
      const wrappedCode = `
        return (function() {
          ${currentCode}
        })();
      `;

      // Create and execute function
      const func = new Function(...scopeKeys, wrappedCode);
      const result = func(...scopeValues);

      // Render result
      if (result) {
        if (result instanceof HTMLElement || result instanceof Node) {
          previewContent.appendChild(result);
        } else if (typeof result === 'string') {
          previewContent.textContent = result;
        } else if (typeof result === 'object') {
          previewContent.textContent = JSON.stringify(result, null, 2);
        }
      }
    } catch (err: any) {
      error(err.message);
      errorDisplay.textContent = `Error: ${err.message}`;
      errorDisplay.style.display = 'block';
      console.error('LiveCode execution error:', err);
    }
  };

  // Handle code changes
  if (editable) {
    textarea.addEventListener('input', (e) => {
      const target = e.target as HTMLTextAreaElement;
      code(target.value);
      resizeTextarea();
    });

    // Debounce execution
    let debounceTimer: number;
    Pulse.effect(() => {
      code(); // Subscribe to changes
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        executeCode();
      }, 500) as unknown as number;
    });
  }

  // Initial execution
  resizeTextarea();
  executeCode();

  return wrapper as Pulse.JSX.Element;
};

// Styles
const styles = document.createElement('style');
styles.textContent = `
  .live-code-wrapper {
    margin: 2rem 0;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    overflow: hidden;
    background: white;
  }

  .live-code-editor {
    background: #1f2937;
    padding: 1rem;
  }

  .code-textarea {
    width: 100%;
    min-height: 100px;
    background: transparent;
    border: none;
    outline: none;
    color: #f9fafb;
    font-family: 'Monaco', 'Courier New', monospace;
    font-size: 0.875rem;
    line-height: 1.6;
    resize: none;
    overflow: hidden;
  }

  .code-textarea:disabled {
    opacity: 0.7;
  }

  .live-code-preview {
    padding: 1.5rem;
    background: #f9fafb;
    border-top: 1px solid #e5e7eb;
  }

  .preview-label {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #6b7280;
    margin-bottom: 1rem;
  }

  .preview-content {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: center;
  }

  .live-code-error {
    padding: 1rem 1.5rem;
    background: #fee2e2;
    color: #991b1b;
    font-size: 0.875rem;
    font-family: monospace;
    border-top: 1px solid #fecaca;
  }
`;

if (!document.head.querySelector('#live-code-styles')) {
  styles.id = 'live-code-styles';
  document.head.appendChild(styles);
}
