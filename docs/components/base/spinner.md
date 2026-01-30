# Spinner

A flexible loading indicator component with multiple colors, sizes, thicknesses, and label options. Includes helpers for overlays, cards, buttons, and full-page loading states. Useful for indicating loading or processing in any part of your UI.

---

## Import

```tsx
import { Spinner, SpinnerOverlay, SpinnerCard, ButtonSpinner, FullPageSpinner } from '@odyssee/components';
```

---

## Examples

### Basic Spinner

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <Spinner />
    </Container>
  );
}`" />

---

### Colors

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <Spinner color='primary' />
      <Spinner color='secondary' />
      <Spinner color='success' />
      <Spinner color='danger' />
      <Spinner color='warning' />
      <Spinner color='info' />
      <Spinner color='white' />
    </Container>
  )
}`" />

---

### Sizes

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <Spinner size='xs' />
      <Spinner size='sm' />
      <Spinner size='md' />
      <Spinner size='lg' />
      <Spinner size='xl' />
    </Container>
  )
}`" />

---

### With Label

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <Spinner label='Loading...' showLabel />
    </Container>
  )
}
`" />

---

### Centered Spinner

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <Spinner centered/>
    </Container>
  )
}
`" />

---

### Different Thickness

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <Spinner thickness={2} size='lg' />
      <Spinner thickness={3} size='lg' />
      <Spinner thickness={4} size='lg' />
    </Container>
  )
}`" />

---

### Spinner in a Card

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <Spinner.Card className='min-h-80' />
    </Container>
  )
}
`" />

---

### Spinner Overlay

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <Spinner.Overlay label='Processing...' showLabel color='success' />
    </Container>
  )
}
`" />

---

### Button Spinner

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <Spinner.Button />
    </Container>
  )
}
`" />

---

### Full Page Spinner

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <Spinner.FullPage />
    </Container>
  )
}
`" />

---

## Props Table

### Spinner

| Prop        | Type                                                                 | Default      | Description                                                        |
|-------------|----------------------------------------------------------------------|--------------|--------------------------------------------------------------------|
| `size`      | `"xs"` \| `"sm"` \| `"md"` \| `"lg"` \| `"xl"`                       | `"md"`       | Size of the spinner.                                               |
| `color`     | `"primary"` \| `"secondary"` \| `"success"` \| `"danger"` \| `"warning"` \| `"info"` \| `"gray"` \| `"white"` \| `"indigo"` \| `"purple"` \| `"pink"` \| `"orange"` | `"primary"` | Spinner color.                                                     |
| `thickness` | `2` \| `3` \| `4`                                                    | `3`          | Border thickness (in px).                                          |
| `label`     | `string`                                                             | `"Loading..."` | Accessible label for screen readers and optional visible label.     |
| `showLabel` | `boolean`                                                            | `false`      | Show label next to spinner.                                        |
| `centered`  | `boolean`                                                            | `false`      | Center the spinner in a flex container.                            |
| `className` | `string`                                                             | —            | Additional CSS classes.                                            |
| `id`        | `string`                                                             | auto-gen     | HTML id attribute.                                                 |
| `style`     | `string`                                                             | —            | Inline styles.                                                     |

### SpinnerOverlay

All `Spinner` props, plus:
- Renders spinner with a semi-transparent overlay and centers it in the parent.

### SpinnerCard

All `Spinner` props, plus:
- Renders spinner inside a card container with padding and min height.

### ButtonSpinner

All `Spinner` props except `size` (always `"xs"`), defaults to `color="white"`.

### FullPageSpinner

All `Spinner` props, plus:
- Renders spinner centered on a full-page overlay with backdrop.

---

## Implementation Notes

- **Sizes**:  
  - `"xs"`: 1rem, `"sm"`: 1.25rem, `"md"`: 1.5rem, `"lg"`: 2rem, `"xl"`: 2.5rem.
- **Colors**:  
  - Uses Tailwind color classes for border color.
- **Thickness**:  
  - Controls the border width of the spinner.
- **Label**:  
  - Always included as a visually hidden `<span>` for accessibility; can be shown next to spinner with `showLabel`.
- **Helpers**:  
  - Use `SpinnerOverlay`, `SpinnerCard`, `ButtonSpinner`, and `FullPageSpinner` for common loading UI patterns.
- **Composition**:  
  - Combine with cards, overlays, or buttons for richer loading states.

---

## Accessibility

- Spinner uses `role="status"` and an accessible label for screen readers.
- The label is always present as a visually hidden element, even if not shown.
- Use `showLabel` for visible loading text.
- Overlay and full-page spinners block interaction and provide clear feedback.
- Ensure color contrast is sufficient for all spinner colors.

---

## Best Practices

- Use spinners to indicate loading or processing in forms, cards, overlays, or full pages.
- Prefer visible labels for longer loading states or when context is unclear.
- Use overlays or full-page spinners to block interaction during critical operations.
- Use ButtonSpinner inside buttons for inline loading feedback.
- Match spinner color and size to the surrounding UI for consistency.

---

## Related

- [Pulse Framework](https://github.com/odyssee-software/pulse-framework)
- [Tailwind CSS Border Utilities](https://tailwindcss.com/docs/border-width)
- [ARIA: role="status"](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role)

---
