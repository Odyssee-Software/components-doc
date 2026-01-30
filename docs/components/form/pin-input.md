# PinInput

## Introduction

The `PinInput` component provides a secure and user-friendly interface for entering PIN codes, OTPs, or verification codes. It supports auto-focus management, masking, validation, custom lengths, variants, sizes, and full reactivity via Pulse signals. PinInput is ideal for authentication flows, secure access, and any scenario requiring multi-field code entry.

## Import

```tsx
import { PinInput } from '@odyssee/components';
```

## LiveCodeEditor Examples

### Basic PIN Input

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const pin = Pulse.signal('');
  return (
    <Container>
      <PinInput length={4} value={pin} onChange={val => pin(val)} placeholder='⚬' />
      <div style={{ marginTop: 8 }}>
        Entered PIN: <strong>{Pulse.computed(() => pin() || 'None')}</strong>
      </div>
    </Container>
  )
}`" />

### With Label, Hint, and Error

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <PinInput
        length={6}
        label='Enter Verification Code'
        hint='Check your email for the 6-digit code'
        placeholder='⚬'
      />
      <PinInput
        length={4}
        label='PIN Code'
        error='Invalid PIN. Please try again.'
        placeholder='⚬'
      />
      <PinInput
        length={4}
        label='Required PIN'
        hint='Enter your 4-digit PIN'
        required
        placeholder='⚬'
      />
    </Container>
  )
}`" />

### Input Types: Numeric and Alphanumeric

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <PinInput
        length={4}
        type='numeric'
        label='Numbers only'
        hint='Only digits 0-9 are allowed'
        placeholder='0'
      />
      <PinInput
        length={6}
        type='alphanumeric'
        label='Letters and numbers'
        hint='A-Z, a-z, 0-9 allowed'
        placeholder='⚬'
      />
    </Container>
  )
}`" />

### Masked Input

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const masked = Pulse.signal('');
  return (
    <Container>
      <PinInput
        length={4}
        masked={true}
        label='Secret PIN'
        hint='Your input is hidden'
        value={masked}
        onChange={val => masked(val)}
        placeholder='⚬'
      />
      <div style={{ marginTop: 8 }}>
        Entered: <strong>{Pulse.computed(() => masked() ? '●●●●' : 'None')}</strong>
      </div>
    </Container>
  )
}`" />

### Variants

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const variant = Pulse.signal('default');
  return (
    <Container>
      <select
        value={variant()}
        onChange={e => variant(e.target.value)}
        style={{ marginBottom: 12 }}
      >
        <option value='default'>Default</option>
        <option value='gray'>Gray</option>
        <option value='underline'>Underline</option>
      </select>
      {Pulse.computed(() => <PinInput length={4} variant={variant()} placeholder='⚬' />)}
    </Container>
  )
}`" />

### Sizes

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const size = Pulse.signal('md');
  return (
    <Container>
      <select
        value={size}
        onChange={e => size(e.target.value)}
        style={{ marginBottom: 12 }}
      >
        <option value='sm'>Small</option>
        <option value='md'>Medium</option>
        <option value='lg'>Large</option>
      </select>
      {Pulse.computed(() => <PinInput length={4} size={size()} placeholder='⚬' />)}
    </Container>
  )
}`" />

### Focus Effects

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <PinInput length={4} placeholder='⚬' />
      <PinInput length={4} focusEffect='scale' placeholder='⚬' />
    </Container>
  )
}`" />

### States: Disabled, Readonly, Error

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <PinInput length={4} label='Disabled' disabled={true} value='1234' placeholder='⚬' />
      <PinInput length={4} label='Readonly' readonly={true} value='5678' placeholder='⚬' />
      <PinInput length={4} label='Invalid PIN' error='Incorrect PIN. Please try again.' placeholder='⚬' />
    </Container>
  )
}`" />

### One-Time-Code (iOS Support)

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <PinInput length={6} autoComplete='one-time-code' label='Verification Code' />
    </Container>
  )
}`" />

### Custom Regex Validation

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <PinInput
        length={4}
        pattern='^[0-3]+$'
        hint='Only numbers 0-3 allowed'
        placeholder='0'
      />
    </Container>
  )
}`" />

### OnComplete Callback

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <PinInput
        length={6}
        onComplete={val => alert('PIN complete: ' + val)}
        placeholder='⚬'
      />
    </Container>
  )
}`" />

## Props Table

| Prop           | Type                                                      | Default      | Description                                                                                 |
|----------------|-----------------------------------------------------------|--------------|---------------------------------------------------------------------------------------------|
| `length`       | `number`                                                  | `4`          | Number of input fields (digits/characters).                                                 |
| `value`        | `string` \| `Signal<string>`                              | —            | PIN value (can be reactive signal).                                                         |
| `placeholder`  | `string`                                                  | `""`         | Placeholder for each input field.                                                           |
| `disabled`     | `boolean`                                                 | `false`      | Disables all input fields.                                                                  |
| `readonly`     | `boolean`                                                 | `false`      | Makes all input fields read-only.                                                           |
| `required`     | `boolean`                                                 | `false`      | Marks the input as required.                                                                |
| `masked`       | `boolean`                                                 | `false`      | Masks input (shows password dots).                                                          |
| `type`         | `"alphanumeric"` \| `"numeric"`                           | `"alphanumeric"` | Restricts input to numbers or alphanumeric.                                             |
| `pattern`      | `string`                                                  | —            | Custom regex pattern for validation.                                                        |
| `variant`      | `"default"` \| `"gray"` \| `"underline"`                  | `"default"`  | Visual style variant.                                                                       |
| `size`         | `"sm"` \| `"md"` \| `"lg"`                                | `"md"`       | Size of the input fields.                                                                   |
| `focusEffect`  | `"scale"` \| `"none"`                                     | —            | Visual effect on focus.                                                                     |
| `error`        | `string`                                                  | —            | Error message displayed below the input.                                                    |
| `label`        | `string`                                                  | —            | Label displayed above the input.                                                            |
| `hint`         | `string`                                                  | —            | Optional hint text below the input.                                                         |
| `onChange`     | `(value: string) => void`                                 | —            | Callback fired when the value changes.                                                      |
| `onComplete`   | `(value: string) => void`                                 | —            | Callback fired when all fields are filled.                                                  |
| `onFocus`      | `(event: Event) => void`                                  | —            | Callback fired when any input gains focus.                                                  |
| `onBlur`       | `(event: Event) => void`                                  | —            | Callback fired when any input loses focus.                                                  |
| `autoComplete` | `string`                                                  | —            | Autocomplete attribute (e.g., "one-time-code" for iOS).                                     |
| `className`    | `string`                                                  | —            | Additional CSS classes for the root element.                                                |
| `id`           | `string`                                                  | auto-gen     | Unique ID for the pin input container.                                                      |
| `...rest`      | `any`                                                     | —            | Other props are spread to the root element.                                                 |

## Implementation Notes

- Fully reactive: supports Pulse signals for value and state.
- Auto-focus management: moves focus to next field on input, previous on backspace.
- Paste support: pasting a code fills all fields.
- Masked mode for password-like PINs.
- Custom validation via `type` or `pattern`.
- Variants and sizes for flexible UI integration.
- Error, hint, and label are styled for clarity and accessibility.
- Supports iOS one-time-code autofill via `autoComplete`.

## Accessibility

- Uses native `<input>` fields with proper labeling via `for` and `id`.
- Keyboard navigation: arrow keys, backspace, delete, tab supported.
- Error and hint messages are announced via text.
- Disabled and readonly states are visually and programmatically indicated.
- Supports ARIA attributes for status indication.
- Paste and auto-complete behaviors are accessible.

## Best Practices

- Use `length` to match the expected code size (e.g., 4 or 6 digits).
- Prefer signals for reactive value management in authentication flows.
- Use `masked` for sensitive codes (PIN, password).
- Provide clear labels, hints, and error messages for guidance.
- Use `onComplete` to trigger verification or submission when code entry is finished.
- Enable `autoComplete='one-time-code'` for mobile autofill support.

## Related Links

- [Input component](./input.md)
- [Pulse Framework documentation](https://github.com/odyssee-software/pulse-framework)
- [FormGroup component](./form-group.md)
