# StrongPassword

## Introduction

The `StrongPassword` component is a secure password input with a real-time strength indicator and customizable validation rules. It helps users create strong passwords by providing visual feedback, hints, and validation messages. The component supports inline or popover hints, toggle visibility, custom strength levels, and full reactivity via Pulse signals. It is ideal for registration, password change, and security settings forms.

## Import

```tsx
import { StrongPassword } from '@odyssee/components';
```

## LiveCodeEditor Examples

### Basic StrongPassword

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <StrongPassword
        placeholder='Enter password'
        onChange={value => console.log('Password:', value)}
      />
      <StrongPassword
        label='Password'
        placeholder='Create a password'
        showHints={true}
        onChange={(value, strength, level) => {
          console.log('Password:', value, 'Strength:', strength, 'Level:', level);
        }}
      />
    </Container>
  )
}`" />

### Hints Display (Inline & Popover)

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <StrongPassword
        label='Password'
        placeholder='Enter password'
        showHints={true}
        hintsMode='inline'
      />
      <StrongPassword
        label='Password'
        placeholder='Enter password'
        showHints={true}
        hintsMode='popover'
      />
    </Container>
  )
}`" />

### Strength Levels & Strip Count

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <StrongPassword
        label='Password'
        placeholder='Enter password'
        showHints={true}
        stripCount={6}
      />
      <StrongPassword
        label='Password'
        placeholder='Enter password'
        strengthLevels={['Empty', 'Weak', 'Fair', 'Good', 'Strong']}
        showHints={true}
        stripCount={4}
      />
    </Container>
  )
}`" />

### Validation Rules

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <StrongPassword
        label='Password'
        placeholder='Enter password'
        showHints={true}
        minLength={6}
        requireLowercase={true}
        requireUppercase={true}
        requireNumbers={true}
        requireSpecialChars={true}
      />
      <StrongPassword
        label='Password'
        placeholder='Enter password'
        showHints={true}
        minLength={10}
        requireLowercase={true}
        requireUppercase={true}
        requireNumbers={true}
        requireSpecialChars={true}
      />
      <StrongPassword
        label='Password'
        placeholder='Enter password'
        showHints={true}
        minLength={8}
        requireLowercase={true}
        requireUppercase={true}
        requireNumbers={true}
        requireSpecialChars={false}
      />
      <StrongPassword
        label='Password'
        placeholder='Enter password'
        showHints={true}
        checksExclude={['lowercase', 'special-characters']}
      />
    </Container>
  )
}`" />

### Sizes

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <StrongPassword label='Extra Small (xs)' size='xs' placeholder='Enter password' />
      <StrongPassword label='Small (sm)' size='sm' placeholder='Enter password' />
      <StrongPassword label='Medium (md) - Default' size='md' placeholder='Enter password' />
      <StrongPassword label='Large (lg)' size='lg' placeholder='Enter password' />
      <StrongPassword label='Extra Large (xl)' size='xl' placeholder='Enter password' />
    </Container>
  )
}`" />

### States: Disabled, Readonly, Error, Toggle Button

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <StrongPassword label='Normal' placeholder='Enter password' showHints={true} />
      <StrongPassword label='Required' required={true} placeholder='Enter password' showHints={true} />
      <StrongPassword label='With Error' error='Password does not meet requirements' placeholder='Enter password' />
      <StrongPassword label='Disabled' disabled={true} value='password123' />
      <StrongPassword label='Readonly' readonly={true} value='readonly123' />
      <StrongPassword label='With Toggle Button' showToggleButton={true} showHints={true} placeholder='Enter password' />
      <StrongPassword label='Without Toggle Button' showToggleButton={false} showHints={true} placeholder='Enter password' />
    </Container>
  )
}`" />

## Props Table

| Prop                | Type                                                      | Default      | Description                                                                                 |
|---------------------|-----------------------------------------------------------|--------------|---------------------------------------------------------------------------------------------|
| `value`             | `string` \| `Signal<string>`                              | —            | Password value (can be reactive signal).                                                    |
| `placeholder`       | `string`                                                  | `"Enter password"` | Placeholder for the input field.                                                        |
| `disabled`          | `boolean`                                                 | `false`      | Disables the input.                                                                         |
| `readonly`          | `boolean`                                                 | `false`      | Makes the input read-only.                                                                  |
| `required`          | `boolean`                                                 | `false`      | Marks the input as required.                                                                |
| `label`             | `string`                                                  | —            | Label displayed above the input.                                                            |
| `hint`              | `string`                                                  | —            | Optional hint text below the input.                                                         |
| `error`             | `string`                                                  | —            | Error message displayed below the input.                                                    |
| `size`              | `"xs"` \| `"sm"` \| `"md"` \| `"lg"` \| `"xl"`            | `"md"`       | Size of the input field.                                                                    |
| `minLength`         | `number`                                                  | `6`          | Minimum password length.                                                                    |
| `requireLowercase`  | `boolean`                                                 | `true`       | Require at least one lowercase letter.                                                      |
| `requireUppercase`  | `boolean`                                                 | `true`       | Require at least one uppercase letter.                                                      |
| `requireNumbers`    | `boolean`                                                 | `true`       | Require at least one number.                                                                |
| `requireSpecialChars`| `boolean`                                                | `true`       | Require at least one special character.                                                     |
| `specialCharsSet`   | `string`                                                  | `"!@#$%^&*()_+-=[]{}|;:,.<>?"` | Set of special characters to check for.                                 |
| `strengthLevels`    | `string[]`                                                | See code     | Custom labels for strength levels.                                                          |
| `showHints`         | `boolean`                                                 | `false`      | Show validation hints below or in a popover.                                                |
| `hintsMode`         | `"inline"` \| `"popover"`                                 | `"inline"`   | Display hints inline or in a popover.                                                       |
| `showToggleButton`  | `boolean`                                                 | `true`       | Show/hide the password visibility toggle button.                                            |
| `checksExclude`     | `string[]`                                                | `[]`         | Exclude specific validation checks (e.g., `["lowercase"]`).                                 |
| `stripCount`        | `number`                                                  | `4`          | Number of strength indicator strips.                                                        |
| `onChange`          | `(value: string, strength: number, strengthLevel: string) => void` | — | Callback fired when the value changes.                                                      |
| `onStrengthChange`  | `(strength: number, strengthLevel: string) => void`       | —            | Callback fired when the strength changes.                                                   |
| `onFocus`           | `(event: Event) => void`                                  | —            | Callback fired when the input gains focus.                                                  |
| `onBlur`            | `(event: Event) => void`                                  | —            | Callback fired when the input loses focus.                                                  |
| `name`              | `string`                                                  | —            | Name attribute for form integration.                                                        |
| `className`         | `string`                                                  | —            | Additional CSS classes for the root element.                                                |
| `id`                | `string`                                                  | auto-gen     | Unique ID for the strong password input.                                                    |
| `...rest`           | `any`                                                     | —            | Other props are spread to the root element.                                                 |

## Implementation Notes

- Fully reactive: supports Pulse signals for value and strength.
- Strength is calculated based on customizable rules and levels.
- Inline or popover hints for validation feedback.
- Toggle button for password visibility (optional).
- Customizable strip count and strength level labels.
- Exclude or customize validation rules as needed.
- All validation and feedback are accessible and visually clear.

## Accessibility

- Uses native `<input type="password">` for full accessibility.
- Toggle button includes `aria-label` and is keyboard-accessible.
- Error and hint messages are announced via text.
- Disabled and readonly states are visually and programmatically indicated.
- Label is linked via `for` and `id` attributes.
- Hints and strength indicators are accessible to screen readers.

## Best Practices

- Use `showHints` to guide users toward strong passwords.
- Customize validation rules to match your security requirements.
- Use `onChange` and `onStrengthChange` to integrate with form validation.
- Provide clear labels and error messages for context.
- Use popover hints for compact layouts or inline for clarity.
- Prefer signals for reactive value management in forms.

## Related Links

- [Input component](./input.md)
- [FormGroup component](./form-group.md)
- [Pulse Framework documentation](https://github.com/odyssee-software/pulse-framework)
