# LegendIndicator

A simple component to display a colored dot with a label, commonly used in chart legends, dashboards, status indicators, and category tags. Supports custom colors, sizes, shapes, and label content.

---

## Import

```tsx
import { LegendIndicator } from '@odyssee/components';
```

---

## Examples

### Basic Usage

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <LegendIndicator label='Legend indicator' />
    </Container>
  );
}`" />

---

### With Custom Colors

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <LegendIndicator label='Red' color='red-500' />
      <LegendIndicator label='Blue' color='blue-600' />
      <LegendIndicator label='Green' color='green-500' />
      <LegendIndicator label='Yellow' color='yellow-500' />
      <LegendIndicator label='Purple' color='purple-500' />
      <LegendIndicator label='Gray' color='gray-500' />
    </Container>
  )
}`" />

---

### Sizes

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <LegendIndicator label='Extra small' color='blue-600' size='xs' />
      <LegendIndicator label='Small' color='blue-600' size='sm' />
      <LegendIndicator label='Medium' color='blue-600' size='md' />
      <LegendIndicator label='Large' color='blue-600' size='lg' />
    </Container>
  )
}`" />

---

### Shapes

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <LegendIndicator label='Circle (default)' color='blue-600' shape='circle' />
      <LegendIndicator label='Square' color='green-600' shape='square' />
    </Container>
  )
}`" />

---

### Custom Classes

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <LegendIndicator
        label='Custom'
        color='indigo-500'
        dotClassName='ring-2 ring-indigo-200'
        labelClassName='font-bold text-lg'
      />
    </Container>
  )
}`" />

---

### JSX Label

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <LegendIndicator
        label={<span>Custom <strong>Bold</strong> Label</span>}
        color='pink-500'
      />
    </Container>
  )
}`" />

---

### Chart Legend Example

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <div style={{ display: 'flex', gap: 16 }}>
        <LegendIndicator label='Revenue' color='blue-600' />
        <LegendIndicator label='Expenses' color='red-500' />
        <LegendIndicator label='Profit' color='green-500' />
      </div>
    </Container>
  )
}`" />

---

### Status Indicators Example

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <LegendIndicator label='Active' color='green-500' />
      <LegendIndicator label='Pending' color='yellow-500' />
      <LegendIndicator label='Inactive' color='gray-500' />
    </Container>
  )
}`" />

---

## Table des props

| Prop            | Type                              | Default    | Description                                                        |
|-----------------|-----------------------------------|------------|--------------------------------------------------------------------|
| `label`         | `string` \| `JSX.Element`         | — (req.)   | The label to display next to the dot.                              |
| `color`         | `string`                          | `"gray-500"` | Tailwind color class (e.g. `"blue-600"`, `"red-500"`).             |
| `size`          | `"xs"` \| `"sm"` \| `"md"` \| `"lg"` | `"sm"`     | Size of the dot.                                                   |
| `shape`         | `"circle"` \| `"square"`          | `"circle"` | Shape of the dot.                                                  |
| `dotClassName`  | `string`                          | —          | Additional CSS classes for the dot.                                |
| `labelClassName`| `string`                          | —          | Additional CSS classes for the label.                              |
| `className`     | `string`                          | —          | Additional CSS classes for the wrapper.                            |
| `id`            | `string`                          | auto-gen   | HTML id attribute.                                                 |
| `style`         | `string`                          | —          | Inline styles.                                                     |

---

## Implementation Notes

- **Color**:  
  The `color` prop should be a valid Tailwind color class suffix (e.g. `"blue-600"`). The component will apply `bg-{color}` to the dot.
- **Size**:  
  - `xs`: very small dot
  - `sm`: small (default)
  - `md`: medium
  - `lg`: large
- **Shape**:  
  - `circle` (default): fully rounded dot
  - `square`: slightly rounded square
- **Custom Classes**:  
  Use `dotClassName` and `labelClassName` to further style the dot or label (e.g. add rings, bold, etc.).
- **Label**:  
  Accepts both string and JSX for rich formatting.
- **Composition**:  
  The component is a simple flex row: a colored dot followed by the label.

---

## Accessibilité

- The dot is a decorative `<span>`; the label is readable text.
- The wrapper uses `inline-flex` for alignment.
- For accessibility, ensure the label is descriptive and not just color-based.
- If used as a status indicator, consider adding `aria-label` or additional context for screen readers.

---

## Best Practices

- Use for chart legends, status indicators, tags, or any context where a color+label pair is needed.
- Prefer semantic labels over color-only indicators for accessibility.
- Use consistent color naming across your app for clarity.
- For dashboards, combine with other components (e.g. lists, cards) for richer UIs.
- Use `size` and `shape` to match the visual density of your UI.

---

## Related

- [Tailwind CSS Colors](https://tailwindcss.com/docs/customizing-colors)
- [Pulse Framework](https://github.com/odyssee-software/pulse-framework)
- [ARIA: Using color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html)

---
