# ComboBox

## Introduction

The `ComboBox` component is an advanced autocomplete input for selecting items from a list, supporting search, filtering, custom display/value fields, async API loading, validation states, and full reactivity via Pulse signals. It is ideal for forms, search/filter interfaces, and any scenario requiring a searchable dropdown.

## Import

```tsx
import { ComboBox } from '@odyssee/components';
```

## LiveCodeEditor Examples

### Basic ComboBox

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const countries = [
    { id: 1, name: 'United States', code: 'US' },
    { id: 2, name: 'Canada', code: 'CA' },
    { id: 3, name: 'France', code: 'FR' },
    { id: 4, name: 'Japan', code: 'JP' }
  ];
  return (
    <Container>
      <ComboBox
        options={countries}
        placeholder='Select a country'
        onChange={item => console.log('Selected:', item)}
      />
    </Container>
  )
}`" />

### ComboBox with Label and Reactive Value

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const countries = [
    { id: 1, name: 'United States', code: 'US' },
    { id: 2, name: 'Canada', code: 'CA' },
    { id: 3, name: 'France', code: 'FR' },
    { id: 4, name: 'Japan', code: 'JP' }
  ];
  const selectedCountry = Pulse.signal('');
  return (
    <Container>
      <ComboBox
        label='Country'
        options={countries}
        placeholder='Search countries...'
        onChange={(item) => selectedCountry(item.name ? item.name : '')}
      />
      <div style={{ marginTop: 8 }}>
        Selected: <strong>{Pulse.computed(()=> selectedCountry())}</strong>
      </div>
    </Container>
  )
}`" />

### Custom Display & Value Fields

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' }
  ];
  return (
    <Container>
      <ComboBox
        label='User (search by email)'
        options={users}
        displayField='name'
        valueField='id'
        searchFields={['name', 'email']}
        placeholder='Search users...'
        onChange={item => console.log('Selected user:', item)}
      />
    </Container>
  )
}`" />

### Features: Close Button, Min Search Length, Max Height

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const countries = [
    { id: 1, name: 'United States', code: 'US' },
    { id: 2, name: 'Canada', code: 'CA' },
    { id: 3, name: 'France', code: 'FR' }
  ];
  return (
    <Container>
      <ComboBox
        label='With Close Button'
        options={countries}
        placeholder='Select a country'
        showCloseButton={true}
        value='France'
      />
      <ComboBox
        label='Minimum Search Length (3 characters)'
        options={countries}
        placeholder='Type at least 3 characters...'
        minSearchLength={3}
      />
      <ComboBox
        label='Custom Max Height'
        options={countries}
        placeholder='Select a country'
        maxHeight='max-h-40'
      />
    </Container>
  )
}`" />

### Sizes

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const countries = [
    { id: 1, name: 'United States', code: 'US' },
    { id: 2, name: 'Canada', code: 'CA' },
    { id: 3, name: 'France', code: 'FR' }
  ];
  return (
    <Container>
      <ComboBox label='Small (sm)' size='sm' options={countries} placeholder='Select a country' />
      <ComboBox label='Medium (md)' size='md' options={countries} placeholder='Select a country' />
      <ComboBox label='Large (lg)' size='lg' options={countries} placeholder='Select a country' />
    </Container>
  )
}`" />

### States: Error, Disabled, Readonly, Required, Hint

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const countries = [
    { id: 1, name: 'United States', code: 'US' },
    { id: 2, name: 'Canada', code: 'CA' }
  ];
  return (
    <Container>
      <ComboBox label='Normal' options={countries} placeholder='Select a country' />
      <ComboBox label='Required' options={countries} placeholder='Select a country' required={true} />
      <ComboBox label='With Error' options={countries} placeholder='Select a country' error='Please select a country' />
      <ComboBox label='With Hint' options={countries} placeholder='Select a country' hint='Choose your country of residence' />
      <ComboBox label='Disabled' options={countries} placeholder='Select a country' disabled={true} value='Canada' />
      <ComboBox label='Readonly' options={countries} placeholder='Select a country' readonly={true} value='United States' />
    </Container>
  )
}`" />

## Props Table

| Prop             | Type                                                                 | Default      | Description                                                                                       |
|------------------|----------------------------------------------------------------------|--------------|---------------------------------------------------------------------------------------------------|
| `options`        | `ComboBox.Option[]`                                                  | `[]`         | Array of options to display in the dropdown.                                                      |
| `value`          | `string` \| `Signal<string>`                                         | —            | Selected value (can be reactive signal).                                                          |
| `placeholder`    | `string`                                                             | `"Search..."`| Placeholder text for the input field.                                                             |
| `disabled`       | `boolean`                                                            | `false`      | Disables the ComboBox input.                                                                      |
| `readonly`       | `boolean`                                                            | `false`      | Makes the ComboBox input read-only.                                                               |
| `required`       | `boolean`                                                            | `false`      | Marks the ComboBox as required.                                                                   |
| `label`          | `string`                                                             | —            | Label displayed above the input.                                                                  |
| `hint`           | `string`                                                             | —            | Optional hint text below the input.                                                               |
| `error`          | `string`                                                             | —            | Error message displayed below the input.                                                          |
| `size`           | `"xs"` \| `"sm"` \| `"md"` \| `"lg"` \| `"xl"`                       | `"md"`       | Size of the input field.                                                                          |
| `displayField`   | `string`                                                             | `"name"`     | Field name to display for each option.                                                            |
| `valueField`     | `string`                                                             | `"id"`       | Field name to use as the value for each option.                                                   |
| `searchFields`   | `string[]`                                                           | `[displayField]` | Fields to search/filter in the options.                                                       |
| `minSearchLength`| `number`                                                             | `0`          | Minimum number of characters required to trigger search/filter.                                   |
| `showCloseButton`| `boolean`                                                            | `false`      | Shows a close/clear button in the input.                                                          |
| `maxHeight`      | `string`                                                             | `"max-h-72"` | Maximum height for the dropdown list.                                                             |
| `apiUrl`         | `string`                                                             | —            | API endpoint for async option loading.                                                            |
| `apiSearchQuery` | `string`                                                             | `"search"`   | Query parameter name for API search requests.                                                     |
| `onChange`       | `(item: ComboBox.Option \| null) => void`                            | —            | Callback fired when the selected item changes.                                                    |
| `onSearch`       | `(search: string) => void`                                           | —            | Callback fired when the search input changes.                                                     |
| `onFocus`        | `(event: Event) => void`                                             | —            | Callback fired when the input gains focus.                                                        |
| `onBlur`         | `(event: Event) => void`                                             | —            | Callback fired when the input loses focus.                                                        |
| `dropdownClassName` | `string`                                                          | —            | Additional CSS classes for the dropdown container.                                                |
| `name`           | `string`                                                             | —            | Name attribute for form integration.                                                              |
| `renderItem`     | `(item: ComboBox.Option) => Pulse.JSX.Element`                       | —            | Custom renderer for dropdown items.                                                               |
| `className`      | `string`                                                             | —            | Additional CSS classes for the root element.                                                      |
| `id`             | `string`                                                             | auto-gen     | Unique ID for the ComboBox input.                                                                 |
| `...rest`        | `any`                                                                | —            | Other props are spread to the root element.                                                       |

## Implementation Notes

- Fully reactive: supports Pulse signals for value and option updates.
- Options can be filtered locally or loaded asynchronously via API.
- Customizable display and value fields for flexible data structures.
- Keyboard navigation: arrow keys, enter, escape supported.
- Validation states (error, required, disabled, readonly) affect styling and accessibility.
- Dropdown supports custom max height and scrollable content.
- Optionally renders a close/clear button for quick reset.
- Custom item rendering via `renderItem` prop.

## Accessibility

- Uses native `<input type="text">` with `role="combobox"`, `aria-expanded`, and `aria-autocomplete`.
- Dropdown uses `role="listbox"` and each option uses `role="option"`.
- Label is linked via `for` and `id` attributes.
- Supports `required`, `disabled`, and `readonly` attributes.
- Error and hint messages are announced via text.
- Keyboard navigation and focus management are fully supported.

## Best Practices

- Use `displayField`, `valueField`, and `searchFields` to adapt ComboBox to your data model.
- For async loading, provide a fast API and set `minSearchLength` to reduce requests.
- Always provide a clear label and placeholder for context.
- Use validation states to guide user input and improve UX.
- Use `renderItem` for custom dropdown item layouts (e.g., avatars, icons).
- Avoid excessive dropdown height; set `maxHeight` for usability.

## Related Links

- [Pulse Framework documentation](https://github.com/odyssee-software/pulse-framework)
- [Input component](./input.md)
- [Select component](./select.md)
- [FormGroup component](./form-group.md)
