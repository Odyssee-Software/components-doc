<template>
  <div class="pulse-demo-wrapper">
    <div class="demo-header" v-if="title">
      <h3>{{ title }}</h3>
      <p v-if="description">{{ description }}</p>
    </div>
    <div class="demo-iframe-container">
      <iframe
        :src="iframeSrc"
        :style="{ height: height }"
        frameborder="0"
        class="demo-iframe"
        @load="onIframeLoad"
      ></iframe>
      <div v-if="loading" class="demo-loading">
        <span class="spinner"></span>
        <span>Loading demo...</span>
      </div>
    </div>
    <div class="demo-footer" v-if="showCode">
      <details>
        <summary>View Code</summary>
        <div class="code-preview">
          <slot></slot>
        </div>
      </details>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Props {
  /** Demo page path (e.g., '/demos/button-variants.html') */
  demo?: string;
  /** Title of the demo */
  title?: string;
  /** Description of the demo */
  description?: string;
  /** Height of the iframe */
  height?: string;
  /** Show code toggle */
  showCode?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  demo: '/playground/',
  title: '',
  description: '',
  height: '400px',
  showCode: false,
});

const loading = ref(true);

const iframeSrc = computed(() => {
  // In production, this would point to the deployed playground
  // In development, point to localhost:3000
  const baseUrl = import.meta.env.DEV ? 'http://localhost:3000' : '/playground';
  return `${baseUrl}${props.demo}`;
});

const onIframeLoad = () => {
  loading.value = false;
};
</script>

<style scoped>
.pulse-demo-wrapper {
  margin: 2rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
}

.demo-header {
  padding: 1.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
}

.demo-header h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.demo-header p {
  margin: 0;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.demo-iframe-container {
  position: relative;
  background: white;
}

.dark .demo-iframe-container {
  background: #0a0a0a;
}

.demo-iframe {
  width: 100%;
  display: block;
  border: none;
  transition: opacity 0.3s ease;
}

.demo-loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
}

.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid var(--vp-c-divider);
  border-top-color: var(--vp-c-brand);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.demo-footer {
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
}

.demo-footer details {
  padding: 0;
}

.demo-footer summary {
  padding: 1rem 1.5rem;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  user-select: none;
  list-style: none;
  transition: color 0.2s;
}

.demo-footer summary::-webkit-details-marker {
  display: none;
}

.demo-footer summary::before {
  content: '▶';
  display: inline-block;
  margin-right: 0.5rem;
  transition: transform 0.2s;
  font-size: 0.75rem;
}

.demo-footer details[open] summary::before {
  transform: rotate(90deg);
}

.demo-footer summary:hover {
  color: var(--vp-c-brand);
}

.code-preview {
  padding: 0 1.5rem 1.5rem;
  overflow-x: auto;
}

.code-preview :deep(pre) {
  margin: 0;
  border-radius: 6px;
}
</style>
