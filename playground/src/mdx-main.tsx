/**
 * MDX Main Entry Point
 * Handles routing and rendering of MDX documentation pages
 */

import './style.css';
import '../../../odyssee-components/src/styles.css';
import 'highlight.js/styles/github.css';

// Import MDX pages
import ButtonPage from './pages/button.mdx';

// Router setup
const routes: Record<string, any> = {
  '/': ButtonPage,
  '/button': ButtonPage,
};

// Get current route
const currentPath = window.location.pathname.replace('/playground', '') || '/';

// Get the page component
const PageComponent = routes[currentPath] || routes['/'];

// App container
const app = document.getElementById('app');

if (!app) {
  throw new Error('App container not found');
}

// Create layout wrapper
const layout = document.createElement('div');
layout.className = 'doc-layout';

// Create sidebar
const sidebar = document.createElement('aside');
sidebar.className = 'doc-sidebar';
sidebar.innerHTML = `
  <div class="sidebar-header">
    <h2>Odyssee Components</h2>
  </div>
  <nav class="sidebar-nav">
    <div class="nav-section">
      <h3>Base Components</h3>
      <ul>
        <li><a href="/playground/button" class="${currentPath === '/button' ? 'active' : ''}">Button</a></li>
        <li><a href="#" class="disabled">Alert</a></li>
        <li><a href="#" class="disabled">Badge</a></li>
      </ul>
    </div>
    <div class="nav-section">
      <h3>Form Components</h3>
      <ul>
        <li><a href="#" class="disabled">Input</a></li>
        <li><a href="#" class="disabled">Select</a></li>
        <li><a href="#" class="disabled">Checkbox</a></li>
      </ul>
    </div>
  </nav>
`;

// Create main content area
const main = document.createElement('main');
main.className = 'doc-main';

// Render MDX content
const content = document.createElement('div');
content.className = 'doc-content';

// Mount MDX page
if (PageComponent) {
  if (typeof PageComponent === 'function') {
    content.innerHTML = PageComponent();
  } else if (PageComponent.default) {
    content.innerHTML = PageComponent.default();
  }
}

main.appendChild(content);

// Assemble layout
layout.appendChild(sidebar);
layout.appendChild(main);
app.appendChild(layout);

// Handle navigation
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const link = target.closest('a');

  if (link && link.href && !link.classList.contains('disabled')) {
    const url = new URL(link.href);
    if (url.origin === window.location.origin) {
      e.preventDefault();
      window.history.pushState({}, '', url.pathname);
      window.location.reload(); // Simple reload for now
    }
  }
});

console.log('✅ MDX Documentation loaded successfully!');
