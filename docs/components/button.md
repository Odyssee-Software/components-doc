---
title: Button
description: A versatile button component with multiple variants, sizes, and states
---

# Button

A versatile button component with multiple variants, sizes, loading states, and icons. Built for Pulse Framework with full reactivity support.

## Live Code Editor

Modifiez le code ci-dessous et voyez le résultat en temps réel :

<LiveCodeEditor :defaultCode="`<Button variant='solid' color='primary'>
  Click me
</Button>`" />

## Import

```tsx
import { Button, Pulse } from '@odyssee-software/components';
```

## Basic Usage

```tsx
const button = Button({
  variant: 'solid',
  color: 'primary',
  children: 'Click me'
});
```

## Variants

The Button component supports five variants: `solid`, `outline`, `ghost`, `soft`, and `link`.

<LiveCodeEditor :defaultCode="`<Button variant='outline' color='primary'>
  Outline Button
</Button>`" />

```tsx
Button({ variant: 'solid', children: 'Solid Button' })
Button({ variant: 'outline', children: 'Outline Button' })
Button({ variant: 'ghost', children: 'Ghost Button' })
Button({ variant: 'soft', children: 'Soft Button' })
Button({ variant: 'link', children: 'Link Button' })
```

## Colors

Buttons support multiple color schemes: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, and `dark`.

<LiveCodeEditor :defaultCode="`<Button variant='solid' color='success'>
  Success Button
</Button>`" />

```tsx
Button({ color: 'primary', children: 'Primary' })
Button({ color: 'success', children: 'Success' })
Button({ color: 'danger', children: 'Danger' })
```

## Sizes

Five size options are available: `xs`, `sm`, `md`, `lg`, and `xl`.

<LiveCodeEditor :defaultCode="`<Button variant='solid' color='primary' size='lg'>
  Large Button
</Button>`" />

```tsx
Button({ size: 'xs', children: 'Extra Small' })
Button({ size: 'md', children: 'Medium' })
Button({ size: 'xl', children: 'Extra Large' })
```

## Loading State

Show a loading spinner and disable the button during async operations.

```tsx
const isLoading = Pulse.signal(false);

const handleSubmit = async () => {
  isLoading(true);
  try {
    await someAsyncOperation();
  } finally {
    isLoading(false);
  }
};

const loadingBtn = (
  <Button 
    loading={isLoading}
    onClick={handleSubmit}
  >
    Submit
  </Button>
);
```

### Static Loading State

```tsx
const staticLoadingBtn = (
  <Button loading={true}>
    Loading...
  </Button>
);
```

## With Icons

Add icons to buttons with customizable positioning.

```tsx
// Icon on the left (default)
const iconLeftBtn = (
  <Button icon="🚀" iconPosition="left">
    Launch
  </Button>
);

// Icon on the right
const iconRightBtn = (
  <Button icon="→" iconPosition="right">
    Next
  </Button>
);

// Icon only
const iconOnlyBtn = (
  <Button icon="❤️" />
);
```

## Disabled State

```tsx
const disabledBtn = (
  <Button disabled={true}>
    Disabled Button
  </Button>
);
```

### Reactive Disabled State

```tsx
const email = Pulse.signal('');
const password = Pulse.signal('');

const isFormValid = Pulse.computed(() => 
  email().includes('@') && password().length >= 8
);

const submitBtn = (
  <Button 
    disabled={Pulse.computed(() => !isFormValid())}
    type="submit"
  >
    Sign In
  </Button>
);
```

## Full Width

```tsx
const fullWidthBtn = (
  <Button fullWidth={true}>
    Full Width Button
  </Button>
);
```

## Button Types

Specify the HTML button type attribute.

```tsx
// Submit button (for forms)
const submitBtn = (
  <Button type="submit">Submit</Button>
);

// Reset button
const resetBtn = (
  <Button type="reset">Reset</Button>
);

// Button (default)
const regularBtn = (
  <Button type="button">Click</Button>
);
```

## Click Handlers

```tsx
const count = Pulse.signal(0);

const counterBtn = (
  <Button onClick={() => count(count() + 1)}>
    Clicked {count()} times
  </Button>
);
```

## Custom Styling

Add custom classes with Tailwind CSS.

```tsx
const customBtn = (
  <Button className="shadow-lg hover:shadow-xl">
    Custom Styled
  </Button>
);
```



## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `"button" \| "submit" \| "reset"` | `"button"` | HTML button type |
| `variant` | `"solid" \| "outline" \| "ghost" \| "soft" \| "link"` | `"solid"` | Button variant style |
| `color` | `"primary" \| "secondary" \| "success" \| "danger" \| "warning" \| "info" \| "light" \| "dark"` | `"primary"` | Button color scheme |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | Button size |
| `disabled` | `boolean \| Signal<boolean>` | `false` | Disable button |
| `loading` | `boolean \| Signal<boolean>` | `false` | Show loading state |
| `icon` | `string` | - | Icon to display (emoji or text) |
| `iconPosition` | `"left" \| "right"` | `"left"` | Icon position relative to text |
| `fullWidth` | `boolean` | `false` | Make button full width |
| `onClick` | `(event: Event) => void` | - | Click event handler |
| `children` | `string \| HTMLElement \| Array<string \| HTMLElement>` | - | Button content |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | - | HTML id attribute |
| `style` | `string \| CSSStyleDeclaration` | - | Inline styles |

## Accessibility

The Button component follows accessibility best practices:

- ✅ Proper `type` attribute for form contexts
- ✅ `disabled` attribute when not interactive
- ✅ Loading state includes `aria-label="Loading"`
- ✅ Keyboard navigation support (Enter/Space)
- ✅ Focus ring for keyboard users
- ✅ Sufficient color contrast ratios

### ARIA Attributes

You can add custom ARIA attributes:

```tsx
const ariaBtn = (
  <Button
    aria-label="Close dialog"
    aria-expanded="false"
  >
    ✕
  </Button>
);
```

## Best Practices

### ✅ Do

- Use appropriate button types (`submit` for forms)
- Provide loading states for async actions
- Use meaningful button text or aria-labels
- Disable buttons when actions are not available
- Use appropriate colors (danger for destructive actions)

```tsx
// Good: Clear intent, proper type, loading state
const deleteBtn = (
  <Button
    type="button"
    color="danger"
    loading={isDeleting}
    onClick={handleDelete}
  >
    Delete Account
  </Button>
);
```

### ❌ Don't

- Don't use buttons for navigation (use links instead)
- Don't omit loading states for async operations
- Don't use vague labels like "Click here"
- Don't disable without explanation

```tsx
// Bad: Navigation should use <a> tag
const navBtn = (
  <Button onClick={() => navigate('/home')}>
    Go Home
  </Button>
);

// Better: Use anchor tag for navigation
const navLink = (
  <a href="/home" class="btn btn-primary">
    Go Home
  </a>
);
```

## Styling & Theming

All button styles use Tailwind CSS classes and support dark mode automatically:

```tsx
// Automatically adapts to dark mode
const adaptiveBtn = (
  <Button variant="solid" color="primary">
    I look great in dark mode too!
  </Button>
);
```

### Custom Theme Colors

You can extend the color palette by adding custom classes:

```tsx
const customColorBtn = (
  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
    Custom Purple
  </Button>
);
```

## TypeScript

Full TypeScript support with complete type definitions:

```tsx
import type { ButtonProps } from '@odyssee-software/components';

const props: ButtonProps = {
  variant: 'solid',
  color: 'primary',
  size: 'md',
  onClick: (e: Event) => {
    console.log('Clicked!');
  }
};

const typedBtn = <Button {...props}>Typed Button</Button>;
```

## Related Components

- [Input](/components/input) - Text input component
- [Alert](/components/alert) - Alert messages
- [Modal](/components/modal) - Modal dialogs with action buttons

---

**Version**: 1.0.0  
**Last Updated**: January 2025
