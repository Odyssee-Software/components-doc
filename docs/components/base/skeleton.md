# Skeleton

A flexible loading placeholder component for enhancing user experience during data loading. Supports text, circular, and rectangular variants, multiple lines, animation, custom sizing, and convenient helpers for avatars, cards, buttons, inputs, images, and tables.

---

## Import

```tsx
import { Skeleton } from '@odyssee/components';
// Helpers: Skeleton.Avatar, Skeleton.Card, Skeleton.Text, Skeleton.Circle, Skeleton.Rectangle, Skeleton.Button, Skeleton.Input, Skeleton.Image, Skeleton.Table
```

---

## Examples

### Basic Skeleton

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      {/* Single line */}
      <Skeleton />
      {/* Multiple lines */}
      <Skeleton lines={3} />
      {/* With animation */}
      <Skeleton lines={3} animate />
      {/* Custom width */}
      <Skeleton width='60%' />
    </Container>
  )
}`" />

---

### Variants

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      {/* Text (default) */}
      <Skeleton variant='text' lines={2} />
      {/* Circular (for avatars) */}
      <Skeleton variant='circular' width={40} height={40} />
      <Skeleton variant='circular' width={56} height={56} />
      <Skeleton variant='circular' width={72} height={72} />
      {/* Rectangular (for images/cards) */}
      <Skeleton variant='rectangular' width='100%' height={200} />
    </Container>
  )
}`" />

---

### Gap Sizes

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <Skeleton lines={3} gap='sm' />
      <Skeleton lines={3} gap='md' />
      <Skeleton lines={3} gap='lg' />
    </Container>
  )
}`" />

---

### Avatar Skeleton

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <Skeleton.Avatar size='sm' />
      <Skeleton.Avatar size='md' animate />
      <Skeleton.Avatar size='lg' />
    </Container>
  )
}`" />

---

### Card Skeleton

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
   <Container>
    <Skeleton.Card avatar lines={4} animate />
    <Skeleton.Card avatar avatarSize='lg' lines={3} titleWidth='60%' />
    <Skeleton.Card avatar={false} lines={2} />
  </Container>
  )
}`" />

---

### Button, Input, Image, and Table Skeletons

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <Skeleton.Button animate width={120} />
      <Skeleton.Input animate width='100%' />
      <Skeleton.Image width='100%' height={200} animate />
      <Skeleton.Table rows={3} animate />
    </Container>
  )
}`" />

---

## Props Table

### Skeleton

| Prop       | Type                                 | Default      | Description                                                        |
|------------|--------------------------------------|--------------|--------------------------------------------------------------------|
| `variant`  | `"text"` \| `"circular"` \| `"rectangular"` | `"text"`     | Shape of the skeleton.                                             |
| `width`    | `string` \| `number`                 | —            | Width of the skeleton (px or %).                                   |
| `height`   | `string` \| `number`                 | —            | Height of the skeleton (px or %).                                  |
| `animate`  | `boolean`                            | `false`      | Enable pulse animation.                                            |
| `lines`    | `number`                             | `1`          | Number of lines (for text variant).                                |
| `gap`      | `"sm"` \| `"md"` \| `"lg"`           | `"md"`       | Vertical gap between lines.                                        |
| `className`| `string`                             | —            | Additional CSS classes.                                            |
| `id`       | `string`                             | auto-gen     | HTML id attribute.                                                 |
| `style`    | `string`                             | —            | Inline styles.                                                     |

### Skeleton.Avatar

| Prop       | Type                                 | Default      | Description                                                        |
|------------|--------------------------------------|--------------|--------------------------------------------------------------------|
| `size`     | `"xs"` \| `"sm"` \| `"md"` \| `"lg"` \| `"xl"` | `"md"` | Size of the avatar skeleton.                                       |
| `animate`  | `boolean`                            | `false`      | Enable pulse animation.                                            |
| `className`| `string`                             | —            | Additional CSS classes.                                            |
| `id`       | `string`                             | auto-gen     | HTML id attribute.                                                 |

### Skeleton.Card

| Prop         | Type                                 | Default      | Description                                                        |
|--------------|--------------------------------------|--------------|--------------------------------------------------------------------|
| `avatar`     | `boolean`                            | `true`       | Show avatar skeleton.                                              |
| `avatarSize` | `"xs"` \| `"sm"` \| `"md"` \| `"lg"` \| `"xl"` | `"md"` | Size of the avatar.                                                |
| `lines`      | `number`                             | `4`          | Number of text lines.                                              |
| `animate`    | `boolean`                            | `false`      | Enable pulse animation.                                            |
| `titleWidth` | `string`                             | `"40%"`      | Width of the title skeleton.                                       |
| `className`  | `string`                             | —            | Additional CSS classes.                                            |
| `id`         | `string`                             | auto-gen     | HTML id attribute.                                                 |

### Helper Components

- `Skeleton.Text`: Text skeleton (multiple lines)
- `Skeleton.Circle`: Circular skeleton
- `Skeleton.Rectangle`: Rectangular skeleton
- `Skeleton.Button`: Button skeleton (`width`, `height`)
- `Skeleton.Input`: Input skeleton (`width`, `height`)
- `Skeleton.Image`: Image skeleton (`width`, `height`)
- `Skeleton.Table`: Table skeleton (`rows`, `animate`)

---

## Implementation Notes

- **Variants**:
  - `"text"`: Rounded lines, ideal for paragraphs or titles.
  - `"circular"`: Perfect for avatars or icons.
  - `"rectangular"`: For images, cards, or blocks.
- **Helpers**: Use provided helpers for common skeleton patterns (avatar, card, button, input, image, table).
- **Animation**: Use `animate` for a pulsing loading effect.
- **Sizing**: Use `width`/`height` for precise control, or helper `size` props for avatars.
- **Composition**: Combine skeletons for complex layouts (e.g., card with avatar and lines).

---

## Accessibility

- Skeletons are rendered as `<span>`, `<ul>`, or `<div>` and are visually hidden from assistive tech by default.
- Do not use skeletons as a replacement for semantic content.
- When loading is complete, replace skeletons with real content and ensure focus/ARIA updates as needed.
- For important loading states, consider using `aria-busy` or live regions on the parent container.

---

## Best Practices

- Use skeletons to indicate loading for lists, cards, avatars, forms, and images.
- Prefer animated skeletons for longer loading times.
- Match the skeleton layout to the eventual content for a smooth transition.
- Avoid using only spinners for large content areas—skeletons provide better perceived performance.
- Combine with conditional rendering and loading state management for best UX.

---

## Related

- [Pulse Framework](https://github.com/odyssee-software/pulse-framework)
- [Tailwind CSS Background Utilities](https://tailwindcss.com/docs/background-color)
- [ARIA: aria-busy](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy)

---
