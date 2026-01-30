# CopyMarkup

## Introduction

The `CopyMarkup` component allows users to dynamically duplicate form fields or content blocks, providing add/remove functionality, customizable button styles, alignment, spacing, and limits. It is ideal for scenarios like adding multiple emails, addresses, skills, or any repeatable input in forms.

## Import

```tsx
import { CopyMarkup } from '@odyssee/components';
```

## LiveCodeEditor Examples

### Basic CopyMarkup

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <CopyMarkup
        template={<Input placeholder='Enter name' />}
        buttonText='Add Name'
        limit={3}
      />
    </Container>
  )
}`" />

### With Initial Items

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <CopyMarkup
        template={<Input placeholder='Enter email' />}
        buttonText='Add Email'
        initialCount={2}
        limit={5}
      />
    </Container>
  ) 
}`" />

### Button Variants

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <CopyMarkup
        template={<Input placeholder='Enter value' />}
        buttonText='Add Field'
        buttonVariant='outline'
      />
      <CopyMarkup
        template={<Input placeholder='Enter value' />}
        buttonText='Add Field'
        buttonVariant='solid'
      />
      <CopyMarkup
        template={<Input placeholder='Enter value' />}
        buttonText='Add Field'
        buttonVariant='ghost'
      />
      <CopyMarkup
        template={<Input placeholder='Enter value' />}
        buttonText='Add Field'
        buttonVariant='danger'
      />
    </Container>
  )
}`" />

### Button Position

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <CopyMarkup
        template={<Input placeholder='Enter value' />}
        buttonText='Add Field'
        buttonPosition='left'
      />
      <CopyMarkup
        template={<Input placeholder='Enter value' />}
        buttonText='Add Field'
        buttonPosition='center'
      />
      <CopyMarkup
        template={<Input placeholder='Enter value' />}
        buttonText='Add Field'
        buttonPosition='right'
      />
    </Container>
  )
}`" />

### Spacing Options

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <CopyMarkup
        template={<Input placeholder='Enter value' />}
        buttonText='Add Field'
        spacing='sm'
        initialCount={2}
      />
      <CopyMarkup
        template={<Input placeholder='Enter value' />}
        buttonText='Add Field'
        spacing='lg'
        initialCount={2}
      />
    </Container>
  )
}`" />

### Different Field Types

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <CopyMarkup
        template={<Textarea placeholder='Enter comment' rows={3} />}
        buttonText='Add Comment'
        spacing='lg'
        limit={3}
      />
      <CopyMarkup
        template={
          <Select
            options={[
              { value: 'frontend', label: 'Frontend Developer' },
              { value: 'backend', label: 'Backend Developer' },
              { value: 'fullstack', label: 'Full Stack Developer' },
              { value: 'designer', label: 'UI/UX Designer' },
            ]}
            placeholder='Select role...'
          />
        }
        buttonText='Add Role'
        limit={5}
      />
    </Container>
  )
}`" />

### States: Remove Button, Disabled, Limit Reached

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <CopyMarkup
        template={<Input placeholder='Enter value' />}
        buttonText='Add Field'
        showRemoveButton={false}
        initialCount={2}
      />
      <CopyMarkup
        template={<Input placeholder='Enter value' />}
        buttonText='Add Field'
        disabled={true}
        initialCount={2}
      />
      <CopyMarkup
        template={<Input placeholder='Enter value' />}
        buttonText='Add Field'
        limit={3}
        initialCount={3}
      />
    </Container>
  )
}`" />

## Props Table

| Prop               | Type                                                      | Default      | Description                                                                                   |
|--------------------|-----------------------------------------------------------|--------------|-----------------------------------------------------------------------------------------------|
| `template`         | `Pulse.JSX.Element`                                       | **required** | The form field or content to duplicate.                                                       |
| `buttonText`       | `string`                                                  | `"Add Item"` | Text for the add button.                                                                      |
| `buttonIcon`       | `Pulse.JSX.Element`                                       | —            | Custom icon for the add button.                                                               |
| `buttonVariant`    | `"outline" \| "solid" \| "ghost" \| "danger"`             | `"outline"`   | Style variant for the add button.                                                             |
| `buttonPosition`   | `"left" \| "center" \| "right"`                           | `"right"`     | Alignment of the add button.                                                                  |
| `limit`            | `number`                                                  | `10`          | Maximum number of duplicated items.                                                           |
| `initialCount`     | `number`                                                  | `0`           | Number of items to render initially.                                                          |
| `showRemoveButton` | `boolean`                                                 | `true`        | Whether to show a remove button for each item.                                                |
| `removeButtonText` | `string`                                                  | —             | Accessible label for the remove button.                                                       |
| `spacing`          | `"sm" \| "md" \| "lg" \| "xl"`                            | `"md"`        | Vertical spacing between items.                                                               |
| `onChange`         | `(count: number) => void`                                 | —             | Callback fired when the number of items changes.                                              |
| `onAdd`            | `(count: number) => void`                                 | —             | Callback fired when an item is added.                                                         |
| `onRemove`         | `(count: number) => void`                                 | —             | Callback fired when an item is removed.                                                       |
| `buttonClassName`  | `string`                                                  | —             | Additional CSS classes for the add button.                                                    |
| `wrapperClassName` | `string`                                                  | —             | Additional CSS classes for the items wrapper.                                                 |
| `disabled`         | `boolean`                                                 | `false`       | Disables the add button and all remove buttons.                                               |
| `className`        | `string`                                                  | —             | Additional CSS classes for the root element.                                                  |
| `id`               | `string`                                                  | auto-gen      | Unique ID for the CopyMarkup container.                                                       |
| `...rest`          | `any`                                                     | —             | Other props are spread to the root element.                                                   |

## Implementation Notes

- Fully reactive: uses Pulse signals for item count and rendering.
- Supports any JSX element as a template (Input, Select, Textarea, custom blocks).
- Add/remove buttons are styled and accessible; limit is enforced.
- Button alignment and spacing are customizable.
- Callbacks (`onChange`, `onAdd`, `onRemove`) allow integration with form logic.
- Remove button can be hidden for simple duplication scenarios.
- Initial count allows pre-populating items.

## Accessibility

- Add and remove buttons use `aria-label` and accessible text.
- Remove button is visually hidden when not needed.
- Keyboard navigation is supported for all interactive elements.
- Limit indicator is announced via text when reached.
- Works with any accessible form field as a template.

## Best Practices

- Use `limit` to prevent excessive duplication and maintain UX.
- Provide clear `buttonText` and accessible `removeButtonText`.
- Use `onChange` to synchronize with form state or validation.
- Group related fields with appropriate spacing for clarity.
- Hide remove button for simple repeatable fields where removal is not needed.
- Use initialCount to pre-populate fields for common use cases.

## Related Links

- [Input component](./input.md)
- [Select component](./select.md)
- [Textarea component](./textarea.md)
- [Pulse Framework documentation](https://github.com/odyssee-software/pulse-framework)
