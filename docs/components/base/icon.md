# Icon

A versatile icon component supporting SVG children, multiple variants, sizes, colors, and shapes. Useful for displaying icons with consistent styling, backgrounds, and accessibility in your UI.

---

## Import

```tsx
import { Icon } from '@odyssee/components';
```

---

## Examples

### Basic Icon (Plain SVG)

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const HomeIcon = (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
      <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'></path>
      <polyline points='9 22 9 12 15 12 15 22'></polyline>
    </svg>
  );
  return (
    <Container>
      <Icon>{HomeIcon}</Icon>
    </Container>
  );
}`" />

---

### Solid Variant, Primary Color, Circular

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const HeartIcon = (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
      <path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z'></path>
    </svg>
  );
  return (
    <Container>
      <Icon variant='solid' color='primary' shape='circular'>
        {HeartIcon}
      </Icon>
    </Container>
  );
}`" />

---

### Outline Variant, Warning Color, Circular

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const StarIcon = (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
      <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
    </svg>
  );
  return (
    <Container>
      <Icon variant='outline' color='warning' shape='circular'>{StarIcon}</Icon>
    </Container>
  );
}`" />

---

### Soft Variant, Success Color, Small Size

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const CheckIcon = (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
      <path d='M20 6 9 17l-5-5'></path>
    </svg>
  );
  return (
    <Container>
      <Icon size='sm' variant='soft' color='success'>{CheckIcon}</Icon>
    </Container>
  )
}`" />

---

### Ghost Variant, Danger Color, Rounded

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const BellIcon = (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
      <path d='M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9'></path>
      <path d='M10.3 21a1.94 1.94 0 0 0 3.4 0'></path>
    </svg>
  );
  return (
    <Container>
      <Icon variant='ghost' color='danger' shape='rounded'>{BellIcon}</Icon>
    </Container>
  );
}`" />

---

### Soft-Outline Variant, Info Color, XL Size

<LiveCodeEditor :defaultCode="`export default function Main(){
  const MailIcon = (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
      <rect width='20' height='16' x='2' y='4' rx='2'></rect>
      <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
    </svg>
  );
  return (
    <Container>
      <Icon size='xl' variant='soft-outline' color='info' shape='rounded'>{MailIcon}</Icon>
    </Container>
  )
}`" />

---

### Custom Size (width/height)

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const CustomIcon = (
    <svg width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
      <circle cx='12' cy='12' r='10'></circle>
    </svg>
  );
  return (
    <Container>
      <Icon width={32} height={32}>{CustomIcon}</Icon>
    </Container>
  )
}`" />

---

### Standalone SVG (no variant, no wrapper)

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const SvgOnly = (
    <svg width='24' height='24' fill='none' stroke='currentColor' strokeWidth='2'>
      <rect width='20' height='16' x='2' y='4' rx='2'></rect>
    </svg>
  );
  return (
    <Container>
      <Icon>{SvgOnly}</Icon>
    </Container>
  )
}`" />

---

## Table des props

| Prop                | Type                                                                 | Default      | Description                                                                                      |
|---------------------|----------------------------------------------------------------------|--------------|--------------------------------------------------------------------------------------------------|
| `name`              | `string`                                                             | –            | Icon name (for Lucide or custom icon sets, not used if children SVG provided).                   |
| `children`          | `Pulse.JSX.Element \| HTMLElement \| HTMLElement[]`                  | –            | Custom SVG or icon element(s) to render.                                                         |
| `size`              | `"xs"` \| `"sm"` \| `"md"` \| `"lg"` \| `"xl"` \| `"2xl"`            | `"md"`       | Predefined icon size.                                                                            |
| `width`             | `number` \| `string`                                                 | –            | Custom width (overrides `size`).                                                                 |
| `height`            | `number` \| `string`                                                 | –            | Custom height (overrides `size`).                                                                |
| `color`             | `"primary"` \| `"secondary"` \| `"success"` \| `"danger"` \| `"warning"` \| `"info"` \| `"light"` \| `"dark"` | `"primary"`   | Icon color (applies Tailwind color classes).                                                     |
| `variant`           | `"solid"` \| `"outline"` \| `"ghost"` \| `"soft"` \| `"soft-outline"` | –            | Visual style variant (background, border, or plain).                                             |
| `shape`             | `"square"` \| `"rounded"` \| `"circular"`                            | `"rounded"`  | Shape of the icon background/wrapper.                                                            |
| `strokeWidth`       | `number`                                                             | –            | Stroke width for outline icons.                                                                  |
| `fill`              | `boolean`                                                            | `false`      | If true, fills the SVG with color (for solid icons).                                             |
| `containerClassName`| `string`                                                             | –            | Additional CSS classes for the wrapper element (if variant/shape is used).                       |
| `className`         | `string`                                                             | –            | Additional CSS classes for the SVG element.                                                      |
| `id`                | `string`                                                             | auto-generated | HTML id attribute.                                                                             |
| `style`             | `string`                                                             | –            | Inline styles.                                                                                   |

---

## Implementation Notes

- **SVG Support:**  
  Pass any SVG as a child to `<Icon>`. The component will apply sizing, color, and accessibility attributes automatically.
- **Variants:**  
  - `solid`: colored background, white icon.
  - `outline`: border and colored icon.
  - `ghost`: icon only, no background.
  - `soft`: subtle background, colored icon.
  - `soft-outline`: soft background with border.
- **Shape:**  
  - `square`: no rounding.
  - `rounded`: medium rounding (default).
  - `circular`: fully rounded (circle).
- **Size:**  
  Use `size` for standard sizes or `width`/`height` for custom pixel values.
- **Color:**  
  Uses Tailwind color classes for background, border, and icon color.
- **Standalone Mode:**  
  If no `variant` is provided, the SVG is rendered as-is, with only minimal sizing and color classes.
- **Accessibility:**  
  The icon is marked `aria-hidden="true"` by default. For decorative icons, this is correct. For meaningful icons, add appropriate ARIA attributes outside the Icon component.

---

## Accessibility

- The icon is rendered with `aria-hidden="true"` by default (decorative).
- For icons conveying meaning, provide a label or use `aria-label` on the parent element.
- SVGs are sized and colored for sufficient contrast.
- Keyboard navigation is not required for decorative icons.

---

## Best Practices

- Use the `variant`, `color`, and `shape` props for consistent icon styling across your app.
- For accessibility, do not use icons alone to convey important information—add text or ARIA labels as needed.
- Prefer SVG children for maximum flexibility and scalability.
- Use `size` for standard sizing, or `width`/`height` for custom icon dimensions.
- Test icons in both light and dark modes for visual consistency.

---

## Related

- [Lucide Icons](https://lucide.dev/)
- [Tailwind CSS Colors](https://tailwindcss.com/docs/customizing-colors)
- [Pulse Framework](https://github.com/odyssee-software/pulse-framework)
- [MDN: Using SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)

---
