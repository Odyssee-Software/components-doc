# SearchBox

## Introduction

The `SearchBox` component is a powerful autocomplete and search input for filtering, grouping, and selecting items from a list. It supports custom grouping, async API loading, validation states, custom rendering, and full reactivity via Pulse signals. SearchBox is ideal for command palettes, site-wide search, product lookup, and any scenario requiring a searchable dropdown with grouped results.

## Import

```tsx
import { SearchBox } from '@odyssee/components';
```

## LiveCodeEditor Examples

### Basic SearchBox

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const options = [
    { id: 1, name: 'John Doe', category: 'People' },
    { id: 2, name: 'Jane Smith', category: 'People' },
    { id: 3, name: 'Compose email', category: 'Recent', app: 'Gmail' },
    { id: 4, name: 'New Project', category: 'Commands', shortcut: '⌘N' },
    { id: 5, name: 'Project Proposal.pdf', category: 'Files', type: 'PDF' }
  ];
  return (
    <Container>
      <SearchBox
        options={options}
        placeholder='Search...'
        onSelect={item => console.log('Selected:', item)}
      />
    </Container>
  )
}`" />

### Grouped Results

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const contacts = [
    { id: 1, name: 'Alice Johnson', category: 'Team', role: 'Designer', email: 'alice@company.com' },
    { id: 2, name: 'Bob Smith', category: 'Team', role: 'Developer', email: 'bob@company.com' },
    { id: 3, name: 'Carol White', category: 'Clients', role: 'CEO', email: 'carol@client.com' }
  ];
  return (
    <Container>
      <SearchBox
        options={contacts}
        groupBy='category'
        showGroupTitles={true}
        placeholder='Search contacts...'
        displayField='name'
      />
    </Container>
  )
}`" />

### Open on Focus

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const recentActions = [
    { id: 1, name: 'Dashboard', category: 'Pages', icon: '📊' },
    { id: 2, name: 'Projects', category: 'Pages', icon: '📁' }
  ];
  return (
    <Container>
      <SearchBox
        options={recentActions}
        isOpenOnFocus={true}
        placeholder='Quick navigation...'
        groupBy='category'
        showGroupTitles={true}
      />
    </Container>
  )
}`" />

### Minimum Search Length

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const products = [
    { id: 1, name: 'Wireless Mouse', category: 'Electronics' },
    { id: 2, name: 'Desk Lamp', category: 'Furniture' }
  ];
  return (
    <Container>
      <SearchBox
        options={products}
        minSearchLength={2}
        placeholder='Type at least 2 characters...'
        groupBy='category'
        showGroupTitles={true}
      />
      <SearchBox
        options={products}
        minSearchLength={3}
        placeholder='Search products (min 3 chars)...'
        displayField='name'
        searchFields={['name', 'category']}
      />
    </Container>
  )
}`" />

### Sizes

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const options = [
    { id: 1, name: 'Dashboard', category: 'Pages' },
    { id: 2, name: 'Projects', category: 'Pages' }
  ];
  return (
    <Container>
      <SearchBox size='sm' options={options} placeholder='Small search...' />
      <SearchBox size='md' options={options} placeholder='Medium search (default)...' />
      <SearchBox size='lg' options={options} placeholder='Large search...' />
    </Container>
  )
}`" />

### States: Disabled, Readonly, Required, Hint

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const options = [
    { id: 1, name: 'John Doe', category: 'People' }
  ];
  return (
    <Container>
      <SearchBox label='Normal' options={options} placeholder='Search...' />
      <SearchBox label='Required' options={options} placeholder='Search...' required={true} />
      <SearchBox label='With Hint' options={options} placeholder='Search...' hint='Use keywords to find results faster' />
      <SearchBox label='Disabled' options={options} placeholder='Search...' disabled={true} />
      <SearchBox label='Readonly' options={options} placeholder='Search...' readonly={true} value='Locked value' />
    </Container>
  )
}`" />

## Props Table

| Prop                     | Type                                                      | Default      | Description                                                                                 |
|--------------------------|-----------------------------------------------------------|--------------|---------------------------------------------------------------------------------------------|
| `options`                | `SearchBox.Option[]`                                      | `[]`         | Array of options to display in the dropdown.                                                |
| `value`                  | `string` \| `Signal<string>`                              | —            | Selected value (can be reactive signal).                                                    |
| `placeholder`            | `string`                                                  | `"Search..."`| Placeholder text for the input field.                                                       |
| `disabled`               | `boolean`                                                 | `false`      | Disables the SearchBox input.                                                               |
| `readonly`               | `boolean`                                                 | `false`      | Makes the SearchBox input read-only.                                                        |
| `required`               | `boolean`                                                 | `false`      | Marks the SearchBox as required.                                                            |
| `label`                  | `string`                                                  | —            | Label displayed above the input.                                                            |
| `hint`                   | `string`                                                  | —            | Optional hint text below the input.                                                         |
| `error`                  | `string`                                                  | —            | Error message displayed below the input.                                                    |
| `size`                   | `"xs"` \| `"sm"` \| `"md"` \| `"lg"` \| `"xl"`            | `"md"`       | Size of the input field.                                                                    |
| `displayField`           | `string`                                                  | `"name"`     | Field name to display for each option.                                                      |
| `valueField`             | `string`                                                  | `"id"`       | Field name to use as the value for each option.                                             |
| `searchFields`           | `string[]`                                                | `[displayField]` | Fields to search/filter in the options.                                                 |
| `groupBy`                | `string`                                                  | —            | Field name to group results by.                                                             |
| `showGroupTitles`        | `boolean`                                                 | `true`       | Whether to show group titles in grouped results.                                            |
| `minSearchLength`        | `number`                                                  | `0`          | Minimum number of characters required to trigger search/filter.                             |
| `isOpenOnFocus`          | `boolean`                                                 | `false`      | Opens dropdown when input is focused.                                                       |
| `preventSelection`       | `boolean`                                                 | `false`      | Prevents selection from updating the input value.                                           |
| `preserveSelectionOnEmpty`| `boolean`                                                | `true`       | Keeps selection when input is cleared.                                                      |
| `maxHeight`              | `string`                                                  | `"max-h-72"` | Maximum height for the dropdown list.                                                       |
| `apiUrl`                 | `string`                                                  | —            | API endpoint for async option loading.                                                      |
| `apiSearchQuery`         | `string`                                                  | `"search"`   | Query parameter name for API search requests.                                               |
| `loading`                | `boolean` \| `Signal<boolean>`                            | —            | Shows a loading spinner in the dropdown.                                                    |
| `onSelect`               | `(item: SearchBox.Option) => void`                        | —            | Callback fired when an item is selected.                                                    |
| `onSearch`               | `(search: string) => void`                                | —            | Callback fired when the search input changes.                                               |
| `onFocus`                | `(event: Event) => void`                                  | —            | Callback fired when the input gains focus.                                                  |
| `onBlur`                 | `(event: Event) => void`                                  | —            | Callback fired when the input loses focus.                                                  |
| `dropdownClassName`      | `string`                                                  | —            | Additional CSS classes for the dropdown container.                                          |
| `name`                   | `string`                                                  | —            | Name attribute for form integration.                                                        |
| `renderItem`             | `(item: SearchBox.Option) => Pulse.JSX.Element`           | —            | Custom renderer for dropdown items.                                                         |
| `renderGroupTitle`       | `(title: string) => Pulse.JSX.Element`                    | —            | Custom renderer for group titles.                                                           |
| `className`              | `string`                                                  | —            | Additional CSS classes for the root element.                                                |
| `id`                     | `string`                                                  | auto-gen     | Unique ID for the SearchBox input.                                                          |
| `...rest`                | `any`                                                     | —            | Other props are spread to the root element.                                                 |

## Implementation Notes

- Fully reactive: supports Pulse signals for value, loading, and option updates.
- Options can be filtered locally or loaded asynchronously via API.
- Customizable display, value, and search fields for flexible data structures.
- Grouping and custom group titles for organized results.
- Keyboard navigation: arrow keys, enter, escape supported.
- Validation states (error, required, disabled, readonly) affect styling and accessibility.
- Dropdown supports custom max height and scrollable content.
- Optionally renders a loading spinner and custom item/group renderers.

## Accessibility

- Uses native `<input type="text">` with `role="combobox"`, `aria-expanded`, and `aria-autocomplete`.
- Dropdown uses `role="listbox"` and each option uses `role="option"`.
- Label is linked via `for` and `id` attributes.
- Supports `required`, `disabled`, and `readonly` attributes.
- Error and hint messages are announced via text.
- Keyboard navigation and focus management are fully supported.

## Best Practices

- Use `displayField`, `valueField`, and `searchFields` to adapt SearchBox to your data model.
- For async loading, provide a fast API and set `minSearchLength` to reduce requests.
- Always provide a clear label and placeholder for context.
- Use grouping for organized results in large datasets.
- Use validation states to guide user input and improve UX.
- Use custom renderers for advanced dropdown layouts (e.g., avatars, icons).

## Related Links

- [ComboBox component](./combobox.md)
- [Input component](./input.md)
- [Pulse Framework documentation](https://github.com/odyssee-software/pulse-framework)
