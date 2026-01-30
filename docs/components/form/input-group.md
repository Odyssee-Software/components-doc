# InputGroup

## Introduction

The `InputGroup` component enables advanced input layouts by combining text fields with add-ons, buttons, icons, selects, checkboxes, radios, and loading spinners. It supports both leading and trailing add-ons, inline elements, multiple sizes, validation states, and full reactivity via Pulse signals. InputGroup is ideal for financial inputs, search bars, phone numbers, and any scenario requiring contextual elements around an input.

## Import

```tsx
import { InputGroup } from '@odyssee/components';
```

## LiveCodeEditor Examples

### Basic Text Addons

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <InputGroup leadingAddon='$' placeholder='0.00' />
      <InputGroup trailingAddon='.00' placeholder='Amount' />
      <InputGroup leadingAddon='$' trailingAddon='USD' placeholder='0' />
    </Container>
  )
}`" />

### Multiple Addons

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <InputGroup leadingAddons={['https://', 'www.']} placeholder='example.com' />
      <InputGroup trailingAddons={['.com', '@']} placeholder='username' />
    </Container>
  )
}`" />

### Button Addons

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const handleSearch = () => alert('Searching...');
  return (
    <Container>
      <InputGroup
        placeholder='Search...'
        trailingAddon={{
          type: 'button',
          content: 'Search',
          buttonProps: { variant: 'solid', color: 'primary' },
          onClick: handleSearch,
        }}
      />
      <InputGroup
        leadingAddon={{
          type: 'button',
          content: 'Go',
          buttonProps: { variant: 'outline', color: 'secondary' },
          onClick: () => alert('Go clicked'),
        }}
        placeholder='Enter URL'
      />
      <InputGroup
        leadingAddon={{
          type: 'button',
          content: '-',
          buttonProps: { variant: 'outline' },
          onClick: () => alert('Decrement'),
        }}
        trailingAddon={{
          type: 'button',
          content: '+',
          buttonProps: { variant: 'outline' },
          onClick: () => alert('Increment'),
        }}
        placeholder='Quantity'
        type='number'
        value='1'
      />
    </Container>
  )
}`" />

### Inline Icons

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <InputGroup
        leadingIcon={<svg width='16' height='16'><circle cx='8' cy='8' r='7' stroke='gray' fill='none'/></svg>}
        placeholder='you@example.com'
        type='email'
      />
      <InputGroup
        trailingIcon={<svg width='16' height='16'><rect x='3' y='3' width='10' height='10' stroke='gray' fill='none'/></svg>}
        placeholder='Search...'
      />
      <InputGroup
        leadingIcon={<svg width='16' height='16'><circle cx='8' cy='8' r='7' stroke='gray' fill='none'/></svg>}
        trailingIcon={<svg width='16' height='16'><rect x='3' y='3' width='10' height='10' stroke='gray' fill='none'/></svg>}
        placeholder='Username'
      />
    </Container>
  )
}`" />

### Checkbox & Radio Addons

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const agreed = Pulse.signal(false);
  const newsletter = Pulse.signal(false);
  return (
    <Container>
      <InputGroup
        leadingAddon={{
          type: 'checkbox',
          checked: agreed,
          onChange: checked => agreed(checked),
        }}
        placeholder='I agree to the terms'
        value='Terms and conditions'
      />
      <InputGroup
        trailingAddon={{
          type: 'checkbox',
          checked: newsletter,
          onChange: checked => newsletter(checked),
        }}
        placeholder='Subscribe to newsletter'
      />
      <InputGroup
        leadingAddon={{
          type: 'radio',
          checked: Pulse.signal(true),
          onChange: checked => alert('Radio: ' + checked),
        }}
        placeholder='Select this option'
      />
    </Container>
  )
}`" />

### Inline Selects

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const country = Pulse.signal('us');
  const currency = Pulse.signal('usd');
  const countryOptions = [
    { value: 'us', label: 'US' },
    { value: 'ca', label: 'CA' },
    { value: 'gb', label: 'GB' },
    { value: 'fr', label: 'FR' },
  ];
  const currencyOptions = [
    { value: 'usd', label: 'USD' },
    { value: 'eur', label: 'EUR' },
    { value: 'gbp', label: 'GBP' },
    { value: 'cad', label: 'CAD' },
  ];
  return (
    <Container>
      <InputGroup
        leadingSelect={{
          options: countryOptions,
          value: country,
          onChange: val => country(val),
          label: 'Country',
        }}
        placeholder='+1 (555) 000-0000'
        type='tel'
      />
      <InputGroup
        trailingSelect={{
          options: currencyOptions,
          value: currency,
          onChange: val => currency(val),
          label: 'Currency',
        }}
        placeholder='0.00'
        type='number'
      />
    </Container>
  )
}`" />

### Loading State

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const loading = Pulse.signal(false);
  return (
    <Container>
      <InputGroup
        placeholder='Processing...'
        loading={loading}
        loadingPosition='leading'
      />
      <InputGroup
        placeholder='Searching...'
        loading={loading}
        loadingPosition='trailing'
      />
    </Container>
  )
}`" />

### Sizes

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <InputGroup leadingAddon='$' trailingAddon='USD' placeholder='0.00' size='xs' />
      <InputGroup leadingAddon='$' trailingAddon='USD' placeholder='0.00' size='sm' />
      <InputGroup leadingAddon='$' trailingAddon='USD' placeholder='0.00' size='md' />
      <InputGroup leadingAddon='$' trailingAddon='USD' placeholder='0.00' size='lg' />
      <InputGroup leadingAddon='$' trailingAddon='USD' placeholder='0.00' size='xl' />
    </Container>
  )
}`" />

### States: Disabled, Readonly, Error

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <InputGroup leadingAddon='$' trailingAddon='USD' placeholder='0.00' disabled value='100.00' />
      <InputGroup leadingAddon='@' placeholder='username' readonly value='johndoe' />
      <InputGroup
        leadingIcon={<svg width='16' height='16'><circle cx='8' cy='8' r='7' stroke='red' fill='none'/></svg>}
        placeholder='email@example.com'
        error='Invalid email address'
        value='invalid-email'
      />
    </Container>
  )
}`" />

## Props Table

| Prop                | Type                                                                                                   | Default      | Description                                                                                      |
|---------------------|--------------------------------------------------------------------------------------------------------|--------------|--------------------------------------------------------------------------------------------------|
| `leadingAddon`      | `InputGroup.Addon` \| `string` \| `Pulse.JSX.Element`                                                  | —            | Add-on element before the input (text, icon, button, checkbox, radio, select, or JSX).           |
| `trailingAddon`     | `InputGroup.Addon` \| `string` \| `Pulse.JSX.Element`                                                  | —            | Add-on element after the input.                                                                  |
| `leadingAddons`     | Array of `InputGroup.Addon` \| `string` \| `Pulse.JSX.Element`                                         | —            | Multiple add-ons before the input.                                                               |
| `trailingAddons`    | Array of `InputGroup.Addon` \| `string` \| `Pulse.JSX.Element`                                         | —            | Multiple add-ons after the input.                                                                |
| `leadingIcon`       | `Pulse.JSX.Element`                                                                                    | —            | Inline icon before the input (absolute positioned).                                              |
| `trailingIcon`      | `Pulse.JSX.Element`                                                                                    | —            | Inline icon after the input.                                                                     |
| `leadingSelect`     | `{ options, value, onChange, label }`                                                                  | —            | Inline select before the input.                                                                  |
| `trailingSelect`    | `{ options, value, onChange, label }`                                                                  | —            | Inline select after the input.                                                                   |
| `loading`           | `boolean` \| `Signal<boolean>`                                                                         | `false`      | Shows a loading spinner (leading or trailing).                                                   |
| `loadingPosition`   | `"leading"` \| `"trailing"`                                                                            | `"trailing"` | Position of the loading spinner.                                                                 |
| `containerClassName`| `string`                                                                                               | —            | Additional CSS classes for the input group container.                                            |
| `containerStyle`    | `Record<string, any>`                                                                                  | —            | Inline styles for the input group container.                                                     |
| `type`              | `string`                                                                                               | `"text"`     | Input type (text, email, number, etc.).                                                          |
| `value`             | `string` \| `Signal<string>`                                                                           | —            | Input value (can be reactive signal).                                                            |
| `placeholder`       | `string`                                                                                               | `""`         | Placeholder text for the input.                                                                  |
| `disabled`          | `boolean`                                                                                              | `false`      | Disables the input.                                                                              |
| `readonly`          | `boolean`                                                                                              | `false`      | Makes the input read-only.                                                                       |
| `required`          | `boolean`                                                                                              | `false`      | Marks the input as required.                                                                     |
| `error`             | `string`                                                                                               | —            | Error message displayed below the input.                                                         |
| `label`             | `string`                                                                                               | —            | Label displayed above the input.                                                                 |
| `hint`              | `string`                                                                                               | —            | Optional hint text below the input.                                                              |
| `size`              | `"xs"` \| `"sm"` \| `"md"` \| `"lg"` \| `"xl"`                                                         | `"md"`       | Size of the input and add-ons.                                                                   |
| `onChange`          | `(value: string) => void`                                                                              | —            | Callback fired when the input value changes.                                                     |
| `onFocus`           | `(event: Event) => void`                                                                               | —            | Callback fired when the input gains focus.                                                       |
| `onBlur`            | `(event: Event) => void`                                                                               | —            | Callback fired when the input loses focus.                                                       |
| `className`         | `string`                                                                                               | —            | Additional CSS classes for the input element.                                                    |
| `id`                | `string`                                                                                               | auto-gen     | Unique ID for the input group.                                                                   |
| `style`             | `React.CSSProperties`                                                                                  | —            | Inline styles for the input element.                                                             |
| `...rest`           | `any`                                                                                                  | —            | Other props are spread to the input element.                                                     |
| **Addon fields**    | See `InputGroup.Addon` below                                                                           |              | Add-ons support type, content, buttonProps, checked, selectOptions, selectValue, etc.           |

### InputGroup.Addon

| Field           | Type                                                      | Description                                                                                   |
|-----------------|-----------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| `type`          | `"text"` \| `"icon"` \| `"button"` \| `"checkbox"` \| `"radio"` \| `"select"` | Type of addon.                                                                                |
| `content`       | `string` \| `Pulse.JSX.Element`                           | Content for text/icon/button addons.                                                          |
| `buttonProps`   | `Button.Props`                                            | Props for button addon.                                                                       |
| `onClick`       | `() => void`                                              | Click handler for button addon.                                                               |
| `checked`       | `boolean` \| `Signal<boolean>`                            | Checked state for checkbox/radio addon.                                                       |
| `onChange`      | `(checked: boolean) => void`                              | Change handler for checkbox/radio addon.                                                      |
| `selectOptions` | `Select.Option[]`                                         | Options for select addon.                                                                     |
| `selectValue`   | `string` \| `Signal<string>`                              | Selected value for select addon.                                                              |
| `onSelectChange`| `(value: string) => void`                                 | Change handler for select addon.                                                              |
| `className`     | `string`                                                  | Additional CSS classes for the addon.                                                         |

## Implementation Notes

- Fully reactive: supports Pulse signals for input value, loading, and addon states.
- Add-ons can be text, icon, button, checkbox, radio, select, or custom JSX.
- Inline elements (icons, selects, spinner) are absolutely positioned for seamless UX.
- Multiple add-ons are supported on both sides.
- Validation states (error, required, disabled, readonly) affect styling and accessibility.
- Sizes are consistent across input and add-ons.
- Container and input styling are customizable via className and style props.

## Accessibility

- Uses native `<input>` with proper labeling via `for` and `id`.
- Add-ons are accessible and keyboard-navigable (buttons, selects, checkboxes, radios).
- Error and hint messages are announced via text.
- Loading spinner uses ARIA attributes for status indication.
- Keyboard navigation and focus management are fully supported.

## Best Practices

- Use add-ons for contextual information (currency, units, actions).
- Prefer button add-ons for quick actions (search, clear, increment/decrement).
- Use inline icons for visual cues (search, email, user).
- Combine selects for country/currency pickers in phone or price inputs.
- Use validation states to guide user input and improve UX.
- Group related fields for clarity and accessibility.

## Related Links

- [Input component](./input.md)
- [Select component](./select.md)
- [Checkbox component](./checkbox.md)
- [Radio component](./radio.md)
- [Pulse Framework documentation](https://github.com/odyssee-software/pulse-framework)
