# TogglePassword

## Introduction

The `TogglePassword` component is a password input field that allows users to toggle between showing and hiding the password text. It is designed for secure password entry in forms such as login, registration, and password change flows. The component supports labels, hints, error messages, multiple sizes, controlled and uncontrolled usage, and can be fully customized for accessibility and UX.

## Import

```ts
import { TogglePassword } from '@odyssee/components';
```

## LiveCodeEditor examples

### Basic usage

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <TogglePassword
      placeholder='Enter password'
      onChange={value => console.log('Password:', value)}
    />
  );
}`" />

### With label, hint, and error

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <>
      <TogglePassword
        label='Password'
        hint='Must be at least 8 characters'
        placeholder='Enter your password'
      />
      <TogglePassword
        label='Password'
        error='Password is required'
        required={true}
        placeholder='Enter your password'
      />
    </>
  );
}`" />

### Controlled value with signal

<LiveCodeEditor :defaultCode="`import Pulse from '@odyssee-software/pulse-framework';
export default function Demo() {
  const password = Pulse.signal('');
  return (
    <>
      <TogglePassword
        label='Password'
        value={password}
        onChange={val => password(val)}
      />
      <div style={{ marginTop: 8, fontSize: 12, color: '#888' }}>
        Value: {password()}
      </div>
    </>
  );
}`" />

### Different sizes

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <>
      <TogglePassword label='Extra Small (xs)' size='xs' placeholder='Enter password' />
      <TogglePassword label='Small (sm)' size='sm' placeholder='Enter password' />
      <TogglePassword label='Medium (md)' size='md' placeholder='Enter password' />
      <TogglePassword label='Large (lg)' size='lg' placeholder='Enter password' />
      <TogglePassword label='Extra Large (xl)' size='xl' placeholder='Enter password' />
    </>
  );
}`" />

### States: disabled, readonly, default visible, no toggle button

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <>
      <TogglePassword label='Disabled' disabled={true} value='locked123' />
      <TogglePassword label='Readonly' readonly={true} value='readonly123' />
      <TogglePassword label='Default Visible' defaultVisible={true} placeholder='Enter password' />
      <TogglePassword label='No Toggle Button' showToggleButton={false} placeholder='Enter password' />
    </>
  );
}`" />

### Login form use case

<LiveCodeEditor :defaultCode="`import Pulse from '@odyssee-software/pulse-framework';
export default function Demo() {
  const password = Pulse.signal('');
  return (
    <form>
      <label style={{ display: 'block', marginBottom: 4, fontWeight: 500 }}>Email</label>
      <input
        type='email'
        placeholder='you@example.com'
        style={{
          width: '100%',
          padding: '8px 12px',
          marginBottom: 12,
          borderRadius: 6,
          border: '1px solid #ddd'
        }}
      />
      <TogglePassword
        label='Password'
        placeholder='Enter your password'
        value={password}
        onChange={val => password(val)}
      />
      <button
        type='submit'
        style={{
          marginTop: 16,
          width: '100%',
          padding: '10px 0',
          background: '#2563eb',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          fontWeight: 600
        }}
      >
        Sign In
      </button>
    </form>
  );
}`" />

---

## Props

| Prop               | Type                                   | Default         | Description                                                                                 |
|--------------------|----------------------------------------|-----------------|---------------------------------------------------------------------------------------------|
| `value`            | `string` \| `Signal<string>`           | —               | The current value (controlled or signal).                                                   |
| `placeholder`      | `string`                               | `"Enter password"` | Placeholder text for the input.                                                         |
| `disabled`         | `boolean`                              | `false`         | Disables the input if true.                                                                 |
| `readonly`         | `boolean`                              | `false`         | Makes the input read-only if true.                                                          |
| `required`         | `boolean`                              | `false`         | Marks the field as required.                                                                |
| `error`            | `string`                               | —               | Error message displayed below the input.                                                    |
| `label`            | `string`                               | —               | Optional label displayed above the input.                                                   |
| `hint`             | `string`                               | —               | Optional hint text displayed below the input.                                               |
| `size`             | `"xs"` \| `"sm"` \| `"md"` \| `"lg"` \| `"xl"` | `"md"`    | Size of the input.                                                                         |
| `defaultVisible`   | `boolean`                              | `false`         | If true, the password is visible by default.                                                |
| `showToggleButton` | `boolean`                              | `true`          | Whether to show the toggle visibility button.                                               |
| `onChange`         | `(value: string) => void`              | —               | Callback fired when the value changes.                                                      |
| `onFocus`          | `(event: FocusEvent) => void`          | —               | Callback fired on input focus.                                                              |
| `onBlur`           | `(event: FocusEvent) => void`          | —               | Callback fired on input blur.                                                               |
| `name`             | `string`                               | —               | Name attribute for the input (for forms).                                                   |
| `className`        | `string`                               | —               | Additional CSS classes for the root element.                                                |
| `id`               | `string`                               | auto-generated  | ID for the input element.                                                                   |
| ...rest            | `BaseComponentProps`                   | —               | Any other base props supported by Odyssee components.                                       |

## Implementation notes

- The component uses Pulse signals for internal state and supports both controlled (`value` as signal) and uncontrolled usage.
- The visibility of the password is toggled via an internal signal, with the option to show or hide the toggle button.
- The input is styled for all sizes and supports light/dark themes.
- The toggle button uses accessible SVG icons for "show" and "hide" states.
- Error and hint messages are displayed below the input.
- The component auto-generates an `id` if not provided.
- All standard input events (`onChange`, `onFocus`, `onBlur`) are supported.

## Accessibility

- The input is associated with its label via `for`/`id`.
- The toggle button uses `aria-label` and `aria-pressed` for screen readers.
- Keyboard navigation is fully supported.
- Error and hint messages are announced for screen readers.
- Supports required, disabled, and readonly states with proper ARIA attributes.
- The input type dynamically switches between `"password"` and `"text"` for visibility.

## Best practices

- Always provide a `label` for accessibility and clarity.
- Use the `error` prop for validation feedback.
- Use the `hint` prop to guide users on password requirements.
- For controlled usage, use a Pulse signal and update it via `onChange`.
- Use `defaultVisible={true}` only if you have a strong UX reason (default is hidden for security).
- Hide the toggle button (`showToggleButton={false}`) if password visibility should never be allowed.
- Use appropriate `size` for your form context.

## Related links

- [Input](./input.md)
- [StrongPassword](./strong-password.md)
- [Pulse Framework documentation](https://github.com/odyssee-software/pulse-framework)
- [Odyssee Components documentation](../README.md)