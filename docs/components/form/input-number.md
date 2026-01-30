# InputNumber

## Introduction

The `InputNumber` component is a versatile numeric input with increment/decrement buttons, supporting various layouts, sizes, validation states, and full reactivity via Pulse signals. It is ideal for quantity selectors, forms, booking flows, and any scenario requiring controlled numeric input.

## Import

```tsx
import { InputNumber } from '@odyssee/components';
```

## LiveCodeEditor Examples

### Basic InputNumber

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <InputNumber value={1} onChange={val => console.log('Value:', val)} />
      <InputNumber label='Quantity' description='Select quantity' value={1} />
      <InputNumber label='Age' description='Enter your age' value={25} min={0} max={120} />
    </Container>
  )
}`" />

### Reactive Value

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const quantity = Pulse.signal(1);
  return (
    <Container>
      <InputNumber label='Quantity' value={quantity} onChange={val => quantity(val)} min={1} max={10} />
      <div style={{ marginTop: 8 }}>
        Selected: <strong>{Pulse.computed(() => quantity())}</strong>
      </div>
    </Container>
  )
}`" />

### Variants

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <InputNumber label='Quantity' description='Standard layout' value={1} />
      <InputNumber variant='vertical' label='Additional seats' description='$39 monthly' value={0} min={0} max={10} />
      <InputNumber variant='horizontal' value={1} min={1} max={5} />
      <InputNumber variant='mini' value={0} min={0} max={99} />
    </Container>
  )
}`" />

### Sizes

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <InputNumber label='Extra Small (xs)' size='xs' value={1} />
      <InputNumber label='Small (sm)' size='sm' value={1} />
      <InputNumber label='Medium (md) - Default' size='md' value={1} />
      <InputNumber label='Large (lg)' size='lg' value={1} />
      <InputNumber label='Extra Large (xl)' size='xl' value={1} />
    </Container>
  )
}`" />

### Min, Max & Step

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <InputNumber label='Range 0-10' description='Min: 0, Max: 10' value={5} min={0} max={10} />
      <InputNumber label='Step by 5' description='Increment by 5' value={0} min={0} max={50} step={5} />
      <InputNumber label='Decimals' description='Step by 0.5' value={1.5} min={0} max={10} step={0.5} />
    </Container>
  )
}`" />

### States: Error, Disabled, Readonly, Required, Hint

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <InputNumber label='Normal' value={5} />
      <InputNumber label='With Error' error='Value exceeds limit' value={10} max={5} />
      <InputNumber label='Disabled' disabled={true} value={5} />
      <InputNumber label='Readonly' readonly={true} value={3} />
      <InputNumber label='Required' required={true} value={1} />
      <InputNumber label='With Hint' hint='Select a quantity between 1 and 10' value={1} min={1} max={10} />
    </Container>
  )
}`" />

## Props Table

| Prop           | Type                                      | Default      | Description                                                                                 |
|----------------|-------------------------------------------|--------------|---------------------------------------------------------------------------------------------|
| `value`        | `number` \| `Signal<number>`              | —            | Numeric value (can be reactive signal).                                                     |
| `min`          | `number`                                  | —            | Minimum allowed value.                                                                      |
| `max`          | `number`                                  | —            | Maximum allowed value.                                                                      |
| `step`         | `number`                                  | `1`          | Increment/decrement step.                                                                   |
| `variant`      | `"default"` \| `"vertical"` \| `"horizontal"` \| `"mini"` | `"default"`   | Layout variant for the component.                                                           |
| `label`        | `string`                                  | —            | Label displayed above the input.                                                            |
| `description`  | `string`                                  | —            | Optional description below the label.                                                       |
| `error`        | `string`                                  | —            | Error message displayed below the input.                                                    |
| `hint`         | `string`                                  | —            | Optional hint text below the input.                                                         |
| `size`         | `"xs"` \| `"sm"` \| `"md"` \| `"lg"` \| `"xl"` | `"md"`       | Size of the input and buttons.                                                              |
| `disabled`     | `boolean`                                 | `false`      | Disables the input and buttons.                                                             |
| `readonly`     | `boolean`                                 | `false`      | Makes the input read-only.                                                                  |
| `required`     | `boolean`                                 | `false`      | Marks the input as required.                                                                |
| `onChange`     | `(value: number) => void`                 | —            | Callback fired when the value changes.                                                      |
| `className`    | `string`                                  | —            | Additional CSS classes for the root element.                                                |
| `name`         | `string`                                  | —            | Name attribute for form integration.                                                        |
| `id`           | `string`                                  | auto-gen     | Unique ID for the input number element.                                                     |
| `...rest`      | `any`                                     | —            | Other props are spread to the root element.                                                 |

## Implementation Notes

- Fully reactive: supports Pulse signals for value and state.
- Increment/decrement buttons are disabled at min/max boundaries.
- Supports multiple layout variants: default, vertical, horizontal, mini.
- Validation states (error, required, disabled, readonly) affect styling and accessibility.
- Step can be fractional for decimal inputs.
- Label, description, hint, and error are styled for clarity and accessibility.
- Size prop adjusts input and button dimensions.

## Accessibility

- Uses native `<input type="number">` for full accessibility.
- Buttons are keyboard-accessible and include ARIA labels.
- Error and hint messages are announced via text.
- Disabled and readonly states are visually and programmatically indicated.
- Label is linked via `for` and `id` attributes.

## Best Practices

- Use `min`, `max`, and `step` to constrain input and guide user interaction.
- Prefer signals for reactive value management in forms.
- Use variants to match UI context (vertical for forms, mini for compact controls).
- Provide clear labels and descriptions for context.
- Use validation states to guide user input and improve UX.
- Avoid disabling unless necessary; provide visual cues if disabled.

## Related Links

- [Input component](./input.md)
- [FormGroup component](./form-group.md)
- [Pulse Framework documentation](https://github.com/odyssee-software/pulse-framework)
