# Rating

A versatile and accessible component for displaying and collecting ratings using stars, hearts, emojis, thumbs, or custom symbols. Supports both interactive and read-only modes, custom colors, sizes, labels, and full reactivity with Pulse signals.

---

## Import

```tsx
import { Rating } from '@odyssee/components';
```

---

## Examples

### Basic Interactive Star Rating

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const rating = Pulse.signal(3);
  return (
    <Container>
      <Rating value={rating} max={5} onChange={val => rating(val)} />
      <p>Current rating: {Pulse.computed(() => rating())} / 5</p>
    </Container>
  )
}`" />

---

### Read-only Display

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <Rating value={4} max={5} mode='readonly' />
    </Container>
  )
}`" />

---

### With Label

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <Rating
        value={3}
        max={5}
        showLabel
        label='Customer Rating:'
      />
    </Container>
  )
}`" />

---

### Disabled State

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <Rating value={3} max={5} disabled />
    </Container>
  )
}`" />

---

### Sizes

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <Rating value={4} max={5} mode='readonly' size='sm' />
      <Rating value={4} max={5} mode='readonly' size='md' />
      <Rating value={4} max={5} mode='readonly' size='lg' />
    </Container>
  );
}`" />

---

### Heart Rating

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const heartRating = Pulse.signal(4);
  return (
    <Container>
      <Rating 
        value={heartRating} 
        max={5} 
        symbol='heart' 
        color='red' 
        onChange={val => heartRating(val)} />
    </Container>
  )
}`" />

---

### Emoji Rating

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const emojis = ['😞', '😐', '🤩'];
  const emojiRating = Pulse.signal(1);
  return (
    <Container>
      <Rating
        value={emojiRating}
        max={3}
        symbol='emoji'
        customSymbol={emojis}
        onChange={val => emojiRating(val)}
      />
      <p>Current rating: {Pulse.computed(() => emojis[emojiRating() - 1] || '')}</p>
    </Container>
  )
}`" />

---

### Thumbs (Yes/No Feedback)

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <Rating value={1} max={2} symbol='thumbs' />
    </Container>
  );
}`" />

---

### Custom SVG Symbol

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const MyCustomIcon = () => (
    <svg width='20' height='20' fill='currentColor'>
      <rect x='2' y='2' width='16' height='16' rx='4' />
    </svg>
  );
  return (
    <Container>
      <Rating value={3} max={5} symbol='custom' customSymbol={<MyCustomIcon/>} />
    </Container>
  )
}`" />

---

### Reactive with Pulse Signal

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const rating = Pulse.signal(0);
  return (
    <Container>
      <Rating value={rating} max={5} onChange={val => rating(val)} />
    </Container>
  )
}`" />

---

## Props Table

| Prop           | Type                                                      | Default        | Description                                                                                   |
|----------------|-----------------------------------------------------------|----------------|-----------------------------------------------------------------------------------------------|
| `value`        | `number` \| `Signal<number>`                              | `0`            | Current rating value (can be a Pulse signal for reactivity).                                  |
| `max`          | `number`                                                  | `5`            | Maximum rating value (number of symbols).                                                     |
| `mode`         | `"interactive"` \| `"readonly"`                           | `"interactive"`| Whether the rating is interactive or read-only.                                               |
| `onChange`     | `(value: number) => void`                                 | —              | Callback when the rating changes (interactive mode only).                                     |
| `symbol`       | `"star"` \| `"heart"` \| `"emoji"` \| `"thumbs"` \| `"custom"` | `"star"`   | Symbol to use for rating.                                                                     |
| `customSymbol` | `JSX.Element` \| `JSX.Element[]` \| `string[]`            | —              | Custom symbol(s) for `"emoji"` or `"custom"` symbol types.                                    |
| `size`         | `"sm"` \| `"md"` \| `"lg"`                                | `"md"`         | Size of the rating symbols.                                                                   |
| `color`        | `string`                                                  | —              | Tailwind color class for active symbols (default: yellow for stars, red for hearts).          |
| `inactiveColor`| `string`                                                  | —              | Tailwind color class for inactive symbols (default: gray-300).                                |
| `showLabel`    | `boolean`                                                 | `false`        | Show a label before the rating symbols.                                                       |
| `label`        | `string`                                                  | —              | Label text to display before the rating symbols.                                              |
| `name`         | `string`                                                  | —              | Name for the hidden input (for forms).                                                        |
| `disabled`     | `boolean`                                                 | `false`        | Disable interaction.                                                                          |
| `required`     | `boolean`                                                 | `false`        | Mark as required (for forms).                                                                 |
| `className`    | `string`                                                  | —              | Additional CSS classes for the wrapper.                                                       |
| `id`           | `string`                                                  | auto-gen       | HTML id attribute.                                                                            |
| `style`        | `string`                                                  | —              | Inline styles.                                                                                |

---

## Implementation Notes

- **Symbols**:
  - `"star"`: classic star rating (default, yellow).
  - `"heart"`: heart icons (default red).
  - `"emoji"`: use `customSymbol` as an array of emoji strings for each value.
  - `"thumbs"`: thumbs up/down for binary feedback.
  - `"custom"`: use a custom SVG or JSX element as the symbol.
- **Interactive vs. Read-only**:
  - `"interactive"`: users can click/hover to set the rating.
  - `"readonly"`: display only, no interaction.
- **Reactivity**:
  - Use a Pulse signal for `value` to make the rating fully reactive.
- **Colors**:
  - Use `color` and `inactiveColor` to override the default symbol colors.
- **Accessibility**:
  - Interactive mode uses `role="radiogroup"` and `role="radio"` for each symbol.
  - Read-only mode uses `role="img"` and an accessible label.
  - Keyboard navigation is supported for interactive ratings.
- **Labels**:
  - Use `showLabel` and `label` to provide context for screen readers and users.

---

## Accessibility

- Interactive ratings use ARIA roles and labels for screen readers.
- Read-only ratings use `role="img"` and a descriptive label.
- All symbols are focusable and keyboard-accessible in interactive mode.
- Use `label` and `showLabel` for additional context.
- Ensure color contrast is sufficient for all symbol colors.

---

## Best Practices

- Use `"readonly"` mode for displaying average ratings or reviews.
- Use `"interactive"` mode for user input (feedback, product reviews, etc.).
- For binary feedback, use `symbol="thumbs"` and `max={2}`.
- Use Pulse signals for real-time updates and reactivity.
- Always provide a label for accessibility, especially in forms.
- Customize symbols and colors to match your application's branding and context.

---

## Related

- [Pulse Framework](https://github.com/odyssee-software/pulse-framework)
- [Tailwind CSS Colors](https://tailwindcss.com/docs/customizing-colors)
- [ARIA: Using radio groups](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)
- [MDN: Star Rating Example](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radiogroup_role)

---
