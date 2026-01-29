---
title: Modal
description: Flexible modal/dialog overlay component with state management, animations, sizing, and accessibility
---

# Modal

Display content in an overlay dialog with backdrop, animation, and flexible sizing. Ideal for confirmations, forms, and contextual content. Fully reactive and accessible, following Preline design patterns.

## Import

```tsx
import { Modal } from '@odyssee-software/components';
```

## Basic Usage

```tsx
const isOpen = Pulse.signal(false);

<Button onClick={() => isOpen(true)}>Open Modal</Button>

<Modal
  isOpen={isOpen}
  title="Modal Title"
  onClose={() => isOpen(false)}
>
  <p>This is the modal content.</p>
</Modal>
```

## Variants

### With Footer Actions

```tsx
<Modal
  isOpen={isOpen}
  title="Confirm Action"
  onClose={() => isOpen(false)}
  footer={
    <>
      <Button variant="outline" onClick={() => isOpen(false)}>Cancel</Button>
      <Button variant="solid" color="primary" onClick={handleConfirm}>Confirm</Button>
    </>
  }
>
  <p>Are you sure you want to proceed?</p>
</Modal>
```

### Sizes

```tsx
<Modal isOpen={isOpen} title="Small Modal" size="sm" onClose={() => isOpen(false)}>
  <p>Compact content</p>
</Modal>

<Modal isOpen={isOpen} title="Large Modal" size="lg" onClose={() => isOpen(false)}>
  <p>Spacious content</p>
</Modal>
```

### Vertically Centered

```tsx
<Modal isOpen={isOpen} title="Centered" centered={true} onClose={() => isOpen(false)}>
  <p>This modal is vertically centered.</p>
</Modal>
```

### Static Backdrop

```tsx
<Modal isOpen={isOpen} title="Static" staticBackdrop={true} onClose={() => isOpen(false)}>
  <p>Cannot close by clicking outside or pressing Escape.</p>
</Modal>
```

### Fullscreen

```tsx
<Modal isOpen={isOpen} title="Fullscreen" fullscreen={true} onClose={() => isOpen(false)}>
  <p>This modal takes up the entire viewport.</p>
</Modal>
```

### Animation Variants

```tsx
<Modal isOpen={isOpen} title="Scale Animation" animation="scale" onClose={() => isOpen(false)}>
  <p>Appears with a scale animation.</p>
</Modal>
```

## Props

| Prop              | Type                                            | Default      | Description                                                    |
|-------------------|-------------------------------------------------|--------------|----------------------------------------------------------------|
| `isOpen`          | `boolean \| Signal<boolean>`                    | `false`      | Controls modal visibility (reactive or static)                 |
| `title`           | `string \| HTMLElement`                         | —            | Modal header title                                             |
| `children`        | `string \| HTMLElement \| HTMLElement[]`        | —            | Modal body content                                             |
| `footer`          | `HTMLElement \| HTMLElement[]`                  | —            | Custom footer (actions, buttons, etc.)                         |
| `size`            | `"sm" \| "md" \| "lg" \| "xl" \| "2xl"`         | `"md"`       | Modal width                                                    |
| `centered`        | `boolean`                                       | `false`      | Vertically center the modal                                    |
| `staticBackdrop`  | `boolean`                                       | `false`      | Prevent closing by clicking outside                            |
| `fullscreen`      | `boolean`                                       | `false`      | Display modal fullscreen                                       |
| `showCloseButton` | `boolean`                                       | `true`       | Show close button in header                                    |
| `closeOnEscape`   | `boolean`                                       | `true`       | Allow closing with Escape key                                  |
| `animation`       | `"scale" \| "slideDown" \| "slideUp" \| "fade"` | `"slideDown"`| Animation style for modal appearance/disappearance             |
| `onClose`         | `() => void`                                    | —            | Callback when modal requests to close                          |
| `className`       | `string`                                        | —            | Additional CSS classes                                         |
| `id`              | `string`                                        | auto         | HTML id attribute (auto-generated if not provided)             |
| `style`           | `string \| CSSStyleDeclaration`                 | —            | Inline styles                                                  |

## Accessibility

- Uses `role="dialog"` and appropriate ARIA attributes (`aria-labelledby`, focus trap)
- Can be closed with Escape (unless disabled)
- Focus is automatically managed when opening/closing
- Close button is accessible (`aria-label="Close"`)
- Body scroll is disabled while modal is open

## Best Practices

- Use a Pulse signal for `isOpen` for reactivity.
- Place main actions in the footer.
- Use `staticBackdrop` for critical dialogs that must not be dismissed accidentally.
- Choose the modal size appropriate for your content.
- Always provide a clear title for accessibility.

## Minimal Example

```tsx
const isOpen = Pulse.signal(false);

<Button onClick={() => isOpen(true)}>Open Modal</Button>

<Modal
  isOpen={isOpen}
  title="Title"
  onClose={() => isOpen(false)}
>
  <p>Modal content</p>
</Modal>
```

---

**Version**: 1.0.0  
**Last Updated**: June 2024