---
layout: home

hero:
  name: Odyssee Components
  text: UI Components for Pulse Framework
  tagline: A comprehensive, reactive component library built with Pulse Framework, styled with Tailwind CSS and Preline
  image:
    src: /logo.svg
    alt: Odyssee Components
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View Components
      link: /components/button
    - theme: alt
      text: GitHub
      link: https://github.com/odyssee

features:
  - icon: ⚡
    title: Lightning Fast
    details: Built on Pulse Framework with signals for optimal performance and minimal overhead
  - icon: 🎨
    title: Beautiful Design
    details: Styled with Tailwind CSS and Preline for modern, accessible UI components
  - icon: 🔧
    title: TypeScript Support
    details: Fully typed with TypeScript for excellent developer experience and type safety
  - icon: 📦
    title: Tree Shakeable
    details: Import only what you need. Optimized bundle size with ESM support
  - icon: 🌗
    title: Dark Mode
    details: Native dark mode support for all components out of the box
  - icon: ♿
    title: Accessible
    details: Built with accessibility in mind, following WAI-ARIA guidelines
  - icon: 🎯
    title: Reactive
    details: True reactivity with Pulse signals - no virtual DOM, no re-renders
  - icon: 📱
    title: Responsive
    details: Mobile-first design with responsive variants for all screen sizes
  - icon: 🧩
    title: Composable
    details: Flexible component API that works great with composition patterns
---

## Quick Start

Install the package in your Pulse Framework project:

```bash
npm install @odyssee/components
```

Import and use components:

```tsx
import { Button, Input, Pulse } from '@odyssee/components';

const email = Pulse.signal('');

const form = (
  <form>
    <Input 
      label="Email"
      type="email"
      value={email}
      onChange={(val) => email(val)}
    />
    <Button type="submit">Submit</Button>
  </form>
);
```

## Component Categories

### Base Components
Essential UI elements for building interfaces:
- **Button** - Versatile button with variants, sizes, and loading states
- **Alert** - Notification messages with different severity levels
- **Badge** - Small labels and tags for status indicators

### Form Components
Complete form controls with validation and accessibility:
- **Input** - Text input with label, hints, and icons
- **Select** - Dropdown with options and groups
- **Checkbox** - Checkbox with label and description
- **Radio** - Radio button for single selection
- **RadioGroup** - Grouped radio buttons
- **Toggle** - Switch component with variants
- **Textarea** - Multi-line text input with auto-resize
- **FileInput** - File upload with preview
- **RangeSlider** - Numeric range selection
- **ColorPicker** - Color selection input
- **FormGroup** - Container for organizing form fields

### Overlay Components
Modal dialogs and overlays:
- **Modal** - Dialog overlay with customizable content

## Why Odyssee Components?

### Pulse Framework Integration
Unlike traditional React or Vue libraries, Odyssee Components is built specifically for Pulse Framework. This means:

- **True Reactivity**: Uses Pulse signals for fine-grained reactivity
- **No Re-renders**: Components don't re-render, only specific DOM nodes update
- **Better Performance**: No virtual DOM overhead
- **Smaller Bundle**: Minimal runtime, maximum efficiency

### Developer Experience
- Full TypeScript support with comprehensive type definitions
- Intuitive API that feels natural with Pulse
- Extensive documentation with live examples
- Easy to customize and extend

### Production Ready
- Battle-tested components used in production applications
- Comprehensive test coverage
- Regular updates and maintenance
- Active community support

## Learn More

<div class="vp-doc" style="margin-top: 2rem;">

:::tip Pulse Framework
New to Pulse Framework? Check out the [Pulse Framework Guide](/guide/pulse-framework) to learn about signals, computed values, and effects.
:::

:::info Next Steps
- [Installation Guide](/guide/installation) - Set up in your project
- [Component Examples](/components/button) - Explore all components
- [GitHub Repository](https://github.com/odyssee) - View source code
:::

</div>