---
title: Getting Started
description: Quick start guide for Odyssee Components
---

# Getting Started

Get up and running with Odyssee Components in minutes. This guide will walk you through installation, setup, and creating your first component.

## Prerequisites

Before you begin, make sure you have:

- **Node.js** 18+ installed
- **npm** or **yarn** package manager
- **Pulse Framework** project set up

::: tip New to Pulse?
If you're new to Pulse Framework, check out the [Pulse Framework Guide](/guide/pulse-framework) to learn about signals, computed values, and reactive programming.
:::

## Installation

Install Odyssee Components via npm:

```bash
npm install @odyssee/components
```

Or with yarn:

```bash
yarn add @odyssee/components
```

## Setup

### 1. Import Styles

Import the component styles in your main entry file:

```tsx
// main.tsx or index.tsx
import '@odyssee/components/styles';
```

### 2. Configure Tailwind CSS

Odyssee Components uses Tailwind CSS for styling. Add the components path to your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@odyssee/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
    },
  },
  plugins: [],
}
```

### 3. Configure Vite

If you're using Vite, configure JSX for Pulse Framework in `vite.config.ts`:

```ts
import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsx: 'transform',
    jsxFactory: 'Pulse.createElement',
    jsxFragment: 'Pulse.Fragment'
  }
});
```

### 4. TypeScript Configuration

Update your `tsconfig.json` for Pulse JSX:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxFactory": "Pulse.createElement",
    "jsxFragmentFactory": "Pulse.Fragment",
    // ... other options
  }
}
```

## Your First Component

Let's create a simple button with a click counter:

```tsx
import { Button, Pulse } from '@odyssee/components';

// Create a reactive counter
const count = Pulse.signal(0);

// Create the button
const counterButton = Button({
  color: 'primary',
  onClick: () => {
    count(count() + 1);
    console.log(`Clicked ${count()} times`);
  },
  children: 'Click me!'
});

// Mount to the DOM
document.getElementById('app')?.appendChild(
  counterButton as unknown as HTMLElement
);
```

## Basic Form Example

Here's a more complete example with form inputs:

```tsx
import { Input, Button, Pulse } from '@odyssee/components';

// Create reactive signals for form data
const email = Pulse.signal('');
const password = Pulse.signal('');

// Computed validation
const isValid = Pulse.computed(() => 
  email().includes('@') && password().length >= 8
);

// Create form container
const form = (
  <form class="space-y-4 max-w-md">
    <Input
      type="email"
      label="Email"
      placeholder="you@example.com"
      value={email}
      onChange={(val) => email(val)}
      required={true}
    />
    
    <Input
      type="password"
      label="Password"
      placeholder="••••••••"
      value={password}
      onChange={(val) => password(val)}
      hint="Must be at least 8 characters"
      required={true}
    />
    
    <Button
      type="submit"
      color="primary"
      fullWidth={true}
      disabled={Pulse.computed(() => !isValid())}
    >
      Sign In
    </Button>
  </form>
) as HTMLElement;

// Mount to DOM
document.getElementById('app')?.appendChild(form);
```

## Project Structure

Here's a recommended structure for your Pulse + Odyssee Components project:

```
my-app/
├── src/
│   ├── components/     # Your custom components
│   ├── pages/          # Page components
│   ├── utils/          # Utility functions
│   ├── main.tsx        # Entry point
│   └── style.css       # Global styles
├── public/             # Static assets
├── index.html          # HTML template
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Next Steps

Now that you have Odyssee Components set up, explore the available components:

### 📚 Learn the Basics
- [Pulse Framework Guide](/guide/pulse-framework) - Understand reactive programming with Pulse
- [Component API](/guide/component-api) - Learn the common patterns

### 🧩 Explore Components

**Base Components**
- [Button](/components/button) - Versatile button with variants
- [Alert](/components/alert) - Notification messages
- [Badge](/components/badge) - Labels and indicators

**Form Components**
- [Input](/components/input) - Text input fields
- [Select](/components/select) - Dropdown selections
- [Checkbox](/components/checkbox) - Checkbox inputs
- [Toggle](/components/toggle) - Switch component
- [And more...](/components/input)

**Overlay Components**
- [Modal](/components/modal) - Dialog overlays

## Common Patterns

### Pattern 1: Reactive Forms

Use signals to create reactive, validated forms:

```tsx
const formData = Pulse.signal({
  name: '',
  email: '',
  agree: false
});

const isValidForm = Pulse.computed(() => {
  const data = formData();
  return data.name.length > 0 
    && data.email.includes('@') 
    && data.agree;
});
```

### Pattern 2: Loading States

Handle async operations with loading states:

```tsx
const isLoading = Pulse.signal(false);

const handleSubmit = async () => {
  isLoading(true);
  try {
    await submitForm();
  } finally {
    isLoading(false);
  }
};

const submitBtn = Button({
  loading: isLoading,
  onClick: handleSubmit,
  children: 'Submit'
});
```

### Pattern 3: Conditional Rendering

Use Pulse effects for conditional content:

```tsx
const showAlert = Pulse.signal(false);

Pulse.effect(() => {
  const container = document.getElementById('alerts');
  if (!container) return;
  
  if (showAlert()) {
    const alert = Alert({
      type: 'success',
      children: 'Form submitted successfully!'
    });
    container.appendChild(alert as unknown as HTMLElement);
  } else {
    container.innerHTML = '';
  }
});
```

## Troubleshooting

### Styles not applying

Make sure you've imported the styles and configured Tailwind correctly:

```tsx
// In your main.tsx
import '@odyssee/components/styles';
```

### TypeScript errors with JSX

Verify your `tsconfig.json` has the correct JSX settings:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxFactory": "Pulse.createElement",
    "jsxFragmentFactory": "Pulse.Fragment"
  }
}
```

### Components not rendering

Ensure you're casting to HTMLElement when mounting:

```tsx
const button = Button({ children: 'Click' });
document.getElementById('app')?.appendChild(
  button as unknown as HTMLElement
);
```

## Getting Help

- 📖 **Documentation**: Browse all components and examples
- 💬 **GitHub Issues**: Report bugs or request features
- 📧 **Email Support**: contact@odyssee.dev

## What's Next?

Ready to dive deeper? Check out these resources:

- [Pulse Framework Deep Dive](/guide/pulse-framework) - Master reactive programming
- [Component Gallery](/components/button) - Browse all available components
- [Best Practices](/guide/best-practices) - Learn patterns and anti-patterns
- [Theming Guide](/guide/theming) - Customize component styles

---

**Happy Building! 🚀**