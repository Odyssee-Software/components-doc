# Table

## Introduction

The `Table` component provides a highly flexible and feature-rich data table for displaying, sorting, searching, selecting, and paginating tabular data. It supports custom cell rendering, multiple visual variants, selectable rows, loading and empty states, and advanced customization for headers, footers, and row styling. The API is designed to be both declarative and extensible, making it suitable for dashboards, admin panels, and any data-driven UI.

## Import

```ts
import { Table } from '@odyssee/components';
```

## LiveCodeEditor examples

### Basic Table

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const columns = [
    { key: 'id', label: 'ID', width: '80px', align: 'center' },
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role', sortable: true },
    { key: 'age', label: 'Age', align: 'center', sortable: true },
  ];
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', age: 32 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Developer', age: 28 },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Designer', age: 35 },
  ];
  return (
    <Container>
      <Table columns={columns} data={data} />
    </Container>
  );
}`" />

### Striped, Bordered, and Rounded Variants

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const columns = [
    { key: 'id', label: 'ID', width: '80px', align: 'center' },
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role', sortable: true },
    { key: 'age', label: 'Age', align: 'center', sortable: true },
  ];
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', age: 32 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Developer', age: 28 },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Designer', age: 35 },
  ];
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <Table columns={columns} data={data} variant='striped' />
      <Table columns={columns} data={data} variant='bordered' />
      <Table columns={columns} data={data} variant='rounded' />
    </div>
  );
}`" />

### Selectable Rows

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const columns = [
    { key: 'id', label: 'ID', width: '80px', align: 'center' },
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role', sortable: true },
  ];
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Developer' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Designer' },
  ];
  const selectedRows = Pulse.signal([]);
  return (
    <>
      <div>Selected: {Pulse.computed(() => JSON.stringify(selectedRows()))}</div>
      <Table
        columns={columns}
        data={data}
        selectable
        selectedRows={selectedRows}
        onSelectionChange={selectedRows}
        variant='bordered'
      />
    </>
  );
}`" />

### Sortable and Searchable

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const columns = [
    { key: 'id', label: 'ID', width: '80px', align: 'center' },
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role', sortable: true },
  ];
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Developer' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Designer' },
  ];
  const sortBy = Pulse.signal(null);
  const sortDirection = Pulse.signal(null);
  const searchValue = Pulse.signal('');
  return (
    <Container>
      <div>Sort: {Pulse.computed(() => (sortBy() ? sortBy() : '') + '(' + sortDirection() + ')' )}</div>
      <div>Search: {Pulse.computed(() => searchValue())}</div>
      <Table
        columns={columns}
        data={data}
        sortable
        sortBy={sortBy}
        sortDirection={sortDirection}
        onSort={(col, dir) => { sortBy(col); sortDirection(dir); }}
        searchable
        searchValue={searchValue}
        onSearch={searchValue}
        variant='bordered'
      />
    </Container>
  );
}`" />

### Paginated Table

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const columns = [
    { key: 'id', label: 'ID', width: '80px', align: 'center' },
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role', sortable: true },
  ];
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Developer' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Designer' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Manager' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Developer' },
    { id: 6, name: 'Diana Prince', email: 'diana@example.com', role: 'Designer' },
  ];
  const currentPage = Pulse.signal(1);
  return (
    <Container>
      <div>Current page: {currentPage()}</div>
      <Table
        columns={columns}
        data={data}
        paginated
        currentPage={currentPage}
        pageSize={3}
        totalPages={2}
        onPageChange={currentPage}
        variant='bordered'
      />
    </Container>
  );
}`" />

### Custom Cell Render

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const columns = [
    {
      key: 'user',
      label: 'User',
      sortable: true,
      render: (_, row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontWeight: 600 }}>{row.name}</span>
          <span style={{ color: '#6b7280', fontSize: 12 }}>{row.email}</span>
        </div>
      ),
    },
    { key: 'role', label: 'Role', sortable: true },
    { key: 'age', label: 'Age', align: 'center', sortable: true },
  ];
  const data = [
    { user: '', name: 'John Doe', email: 'john@example.com', role: 'Admin', age: 32 },
    { user: '', name: 'Jane Smith', email: 'jane@example.com', role: 'Developer', age: 28 },
  ];
  return (
    <Container>
      <Table columns={columns} data={data} variant='bordered' />
    </Container>
  );
}`" />

## Props

| Prop                | Type                                                                                      | Default     | Description                                                                                      |
|---------------------|-------------------------------------------------------------------------------------------|-------------|--------------------------------------------------------------------------------------------------|
| `columns`           | `Table.Column<T>[]`                                                                       | —           | Array of column definitions (see below for shape).                                               |
| `data`              | `T[]`                                                                                     | —           | Array of row data.                                                                               |
| `variant`           | `"default" \| "striped" \| "bordered" \| "rounded" \| "shadow"`                           | `"default"` | Visual style of the table.                                                                       |
| `theadVariant`      | `"default" \| "gray" \| "divided"`                                                        | `"default"` | Style of the table header.                                                                       |
| `size`              | `"sm" \| "md" \| "lg"`                                                                    | `"md"`      | Table size (affects row/cell padding).                                                           |
| `hoverable`         | `boolean`                                                                                 | `false`     | Highlight rows on hover.                                                                         |
| `selectable`        | `boolean`                                                                                 | `false`     | Enable row selection (checkboxes).                                                               |
| `selectedRows`      | `Signal<(string \| number)[]> \| (string \| number)[]`                                    | —           | Controlled selected row IDs.                                                                     |
| `onSelectionChange` | `(selected: (string \| number)[]) => void`                                                | —           | Callback when selection changes.                                                                 |
| `sortable`          | `boolean`                                                                                 | `false`     | Enable sorting on sortable columns.                                                              |
| `sortBy`            | `Signal<string \| null> \| string \| null`                                                | —           | Controlled sort column key.                                                                      |
| `sortDirection`     | `Signal<"asc" \| "desc" \| null> \| "asc" \| "desc" \| null`                              | —           | Controlled sort direction.                                                                       |
| `onSort`            | `(column: string, direction: "asc" \| "desc" \| null) => void`                           | —           | Callback when sorting changes.                                                                   |
| `searchable`        | `boolean`                                                                                 | `false`     | Enable search input above the table.                                                             |
| `searchValue`       | `Signal<string> \| string`                                                                | —           | Controlled search value.                                                                         |
| `searchPlaceholder` | `string`                                                                                  | —           | Placeholder for the search input.                                                                |
| `onSearch`          | `(value: string) => void`                                                                 | —           | Callback when search value changes.                                                              |
| `paginated`         | `boolean`                                                                                 | `false`     | Enable pagination controls.                                                                      |
| `currentPage`       | `Signal<number> \| number`                                                                | —           | Controlled current page.                                                                         |
| `pageSize`          | `number`                                                                                  | —           | Number of rows per page.                                                                         |
| `totalPages`        | `number`                                                                                  | —           | Total number of pages.                                                                           |
| `onPageChange`      | `(page: number) => void`                                                                  | —           | Callback when page changes.                                                                      |
| `caption`           | `string`                                                                                  | —           | Table caption (displayed above the table).                                                       |
| `showFooter`        | `boolean`                                                                                 | —           | Show the table footer.                                                                           |
| `footerContent`     | `JSX.Element`                                                                             | —           | Custom footer content.                                                                           |
| `headless`          | `boolean`                                                                                 | `false`     | Hide the table header.                                                                           |
| `loading`           | `boolean \| Signal<boolean>`                                                              | `false`     | Show loading state (skeleton rows).                                                              |
| `loadingRows`       | `number`                                                                                  | `5`         | Number of skeleton rows to show when loading.                                                    |
| `emptyMessage`      | `string \| JSX.Element`                                                                   | —           | Message to display when there is no data.                                                        |
| `onRowClick`        | `(row: T, index: number) => void`                                                         | —           | Callback when a row is clicked.                                                                  |
| `rowClassName`      | `(row: T, index: number) => string`                                                       | —           | Function to add custom classes to rows.                                                          |
| `rowKey`            | `keyof T`                                                                                 | —           | Property to use as the row key (defaults to `id` if present).                                    |
| `className`         | `string`                                                                                  | —           | Additional CSS classes for the table container.                                                  |
| ...rest             | —                                                                                         | —           | Any other props are spread to the root container.                                                |

### `Table.Column` shape

| Prop             | Type                                                      | Default   | Description                                                                                   |
|------------------|-----------------------------------------------------------|-----------|-----------------------------------------------------------------------------------------------|
| `key`            | `string`                                                  | —         | Unique key for the column (matches property in row data).                                     |
| `label`          | `string`                                                  | —         | Column header label.                                                                          |
| `width`          | `string`                                                  | —         | CSS width for the column (e.g., `"120px"` or `"20%"`).                                        |
| `align`          | `"start"` \| `"center"` \| `"end"`                        | —         | Cell alignment.                                                                               |
| `sortable`       | `boolean`                                                 | `false`   | Whether the column is sortable.                                                               |
| `render`         | `(value, row, index) => JSX.Element \| string`            | —         | Custom cell renderer for this column.                                                         |
| `headerRender`   | `() => JSX.Element \| string`                             | —         | Custom header renderer for this column.                                                       |
| `className`      | `string`                                                  | —         | Additional classes for cells in this column.                                                  |
| `headerClassName`| `string`                                                  | —         | Additional classes for the column header.                                                     |

## Implementation notes

- The `Table` component is fully controlled or uncontrolled for selection, sorting, searching, and pagination.
- Supports custom cell and header rendering via `render` and `headerRender` in columns.
- Visual variants (`striped`, `bordered`, `rounded`, `shadow`) and header variants (`gray`, `divided`) are available.
- Loading and empty states are handled natively.
- Row selection, sorting, searching, and pagination can be combined.
- The `rowClassName` prop allows dynamic row styling (e.g., highlight inactive rows).
- The table is responsive and supports custom sizing via the `size` prop.

## Accessibility

- The table uses semantic `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, and `<td>` elements.
- Checkbox selection is accessible via keyboard and screen readers.
- Sorting and pagination controls are accessible and labeled.
- The caption is rendered with the `<caption>` element for assistive technologies.
- Ensure custom cell renderers and interactive content are accessible and keyboard-navigable.

## Best practices

- Use concise, descriptive column labels.
- Prefer unique `id` or `rowKey` for row identification.
- Use `variant` and `theadVariant` to match your application's style.
- For large datasets, enable pagination and search for better usability.
- Use custom cell renderers for avatars, badges, or action buttons.
- Avoid overloading the table with too many columns; keep it readable and focused.

## Related links

- [Pagination documentation](../navigation/pagination.md)
- [Badge documentation](../data-display/badge.md)
- [Button documentation](../forms/button.md)
- [Odyssee Components documentation](../README.md)
