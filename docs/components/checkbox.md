softwares/components-doc/docs/components/checkbox.md#L1-120
# Checkbox

## Introduction

The `Checkbox` component is a versatile input control for binary choices, supporting labels, descriptions, validation states, indeterminate state, and full reactivity via Pulse signals. It is commonly used for forms, preferences, permissions, and bulk selection patterns.

## Import

```tsx
import { Checkbox } from '@odyssee/components';
```

## LiveCodeEditor Examples

### Basic Checkbox

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Checkbox label='Accept terms and conditions' />
  )
}`" />

### Checkbox with Description

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Checkbox
      label='Email notifications'
      description='Receive email about your account activity'
    />
  )
}`" />

### Sizes

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <Checkbox label='XS' size='xs' />
      <Checkbox label='SM' size='sm' />
      <Checkbox label='MD' size='md' />
      <Checkbox label='LG' size='lg' />
      <Checkbox label='XL' size='xl' />
    </div>
  )
}`" />

### Validation States

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Checkbox
        label='Accept terms'
        error='You must accept the terms to continue'
        required
      />
      <Checkbox
        label='Email verified'
        success='Your email has been verified'
        checked={true}
      />
      <Checkbox
        label='Subscribe to updates'
        error='This option is required'
      />
    </div>
  )
}`" />

### Indeterminate State

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Checkbox
      label='Select all (indeterminate)'
      indeterminate={true}
    />
  )
}`" />

### Reactive Value

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const checked = Pulse.signal(false);
  return (
    <Container>
      <Checkbox
        label='Toggle me'
        checked={checked}
        onChange={val => checked(val)}
      />
      <span style={{ marginLeft: 8 }}>
        State: <strong>{Pulse.computed(() => checked() ? 'Checked' : 'Unchecked')}</strong>
      </span>
    </Container>
  )
}`" />

### Select All Pattern

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const item1 = Pulse.signal(true);
  const item2 = Pulse.signal(false);
  const item3 = Pulse.signal(true);
  const selectAll = Pulse.signal(false);
  const isIndeterminate = Pulse.computed(() => {
    const items = [item1(), item2(), item3()];
    const checkedCount = items.filter(Boolean).length;
    return checkedCount > 0 && checkedCount < 3;
  });
  const toggleAll = checked => {
    item1(checked);
    item2(checked);
    item3(checked);
  };
  return (
    <Container>
      <Checkbox
        label='Select all items'
        checked={selectAll}
        indeterminate={isIndeterminate}
        onChange={toggleAll}
      />
      <div style={{ marginLeft: 24 }}>
        <Checkbox label='Item 1' checked={item1} onChange={val => item1(val)} />
        <Checkbox label='Item 2' checked={item2} onChange={val => item2(val)} />
        <Checkbox label='Item 3' checked={item3} onChange={val => item3(val)} />
        <div style={{ marginTop: 8 }}>
          Selected: { Pulse.computed(() => [item1(), item2(), item3()].filter(Boolean).length) } of 3
        </div>
      </div>
    </Container>
  )
}`" />

## Props Table

| Prop           | Type                                                      | Default      | Description                                                                                 |
|----------------|-----------------------------------------------------------|--------------|---------------------------------------------------------------------------------------------|
| `checked`      | `boolean` \| `Signal<boolean>`                            | `false`      | Checked state (can be reactive signal).                                                     |
| `indeterminate`| `boolean` \| `Signal<boolean>`                            | `false`      | Indeterminate state (for partial selection).                                                |
| `disabled`     | `boolean`                                                 | `false`      | Disables the checkbox.                                                                      |
| `required`     | `boolean`                                                 | `false`      | Marks the checkbox as required.                                                             |
| `label`        | `string`                                                  | —            | Label displayed next to the checkbox.                                                       |
| `description`  | `string`                                                  | —            | Optional description below the label.                                                       |
| `error`        | `string` \| `boolean`                                     | —            | Error state or error message.                                                               |
| `success`      | `string` \| `boolean`                                     | —            | Success state or success message.                                                           |
| `size`         | `"xs"` \| `"sm"` \| `"md"` \| `"lg"` \| `"xl"`            | `"md"`       | Size of the checkbox and label.                                                             |
| `labelPosition`| `"left"` \| `"right"`                                     | `"right"`    | Position of the label relative to the checkbox.                                             |
| `name`         | `string`                                                  | —            | Name attribute for form integration.                                                        |
| `value`        | `string` \| `number`                                      | —            | Value attribute for form integration.                                                       |
| `onChange`     | `(checked: boolean) => void`                              | —            | Callback fired when checked state changes.                                                  |
| `className`    | `string`                                                  | —            | Additional CSS classes for the root element.                                                |
| `id`           | `string`                                                  | auto-gen     | Unique ID for the checkbox input.                                                           |
| `...rest`      | `any`                                                     | —            | Other props are spread to the root element.                                                 |

## Implementation Notes

- Fully reactive: supports Pulse signals for checked and indeterminate states.
- Indeterminate state is managed via DOM property and updated reactively.
- Validation states (error/success) affect border and text color.
- Supports all common accessibility attributes and keyboard navigation.
- Label and description are styled for clarity and accessibility.
- Size and label position are customizable.
- Can be integrated into forms via `name` and `value` props.

## Accessibility

- Uses native `<input type="checkbox">` for full accessibility.
- Label is linked via `for` and `id` attributes.
- Supports `required`, `disabled`, and `aria` attributes.
- Indeterminate state is visually indicated and programmatically set.
- Error and success messages are announced via text.

## Best Practices

- Use `checked` and `onChange` for controlled usage; prefer signals for reactivity.
- Use `indeterminate` for bulk selection patterns (e.g., "Select all").
- Provide clear labels and descriptions for context.
- Use validation states to guide user input.
- Avoid disabling checkboxes unless necessary; provide visual cues if disabled.
- Group related checkboxes for better UX.

## Related Links

- [Pulse Framework documentation](https://github.com/odyssee-software/pulse-framework)
- [FormGroup component](./form-group.md)
- [Radio component](./radio.md)
- [Toggle component](./toggle.md)
