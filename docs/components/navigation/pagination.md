# Pagination

## Introduction

The `Pagination` component provides a flexible, accessible, and highly customizable interface for navigating through pages of content. It supports multiple visual variants, sizes, shapes, alignment options, compact and expanded layouts, direct page jumping, and can be fully controlled via signals. Common use cases include blog lists, product catalogs, data tables, and search results.

## Import

```ts
import { Pagination } from '@odyssee/components';
```

## LiveCodeEditor examples

### Basic Pagination

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const currentPage = Pulse.signal(1);
  return (
    <Container>
      <Pagination
        currentPage={currentPage}
        totalPages={10}
        onPageChange={page => currentPage(page)}
      />
    </Container>
  );
}`" />

### Variants

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Pagination currentPage={1} totalPages={8} variant='default' />
      <Pagination currentPage={3} totalPages={8} variant='bordered' />
      <Pagination currentPage={2} totalPages={8} variant='bordered-group' />
    </Container>
  );
}`" />

### Sizes

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Pagination currentPage={2} totalPages={5} size='sm' />
      <Pagination currentPage={2} totalPages={5} size='md' />
      <Pagination currentPage={2} totalPages={5} size='lg' />
    </Container>
  );
}`" />

### Shapes

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Pagination currentPage={2} totalPages={5} shape='default' />
      <Pagination currentPage={2} totalPages={5} shape='pilled' />
    </Container>
  );
}`" />

### Alignment

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Pagination currentPage={2} totalPages={5} alignment='start' />
      <Pagination currentPage={2} totalPages={5} alignment='center' />
      <Pagination currentPage={2} totalPages={5} alignment='end' />
    </Container>
  );
}`" />

### With Text Labels

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Pagination
        currentPage={3}
        totalPages={8}
        showPrevNextText={true}
        prevText='Previous'
        nextText='Next'
      />
    </Container>
  );
}`" />

### Mini Pagination

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Pagination
        currentPage={2}
        totalPages={5}
        mini={true}
      />
    </Container>
  );
}`" />

### With Jumper

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Pagination
        currentPage={3}
        totalPages={20}
        showJumper={true}
        jumperText='Go to page'
      />
    </Container>
  );
}`" />

### Controlled Pagination

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const currentPage = Pulse.signal(3);
  return (
    <Container>
      <div style={{ marginBottom: 8 }}>
        Current page: <b>{Pulse.computed(() => currentPage())}</b> of 10
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={10}
        onPageChange={page => currentPage(page)}
      />
    </Container>
  );
}`" />

### Use Case: Blog Posts Pagination

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const currentPage = Pulse.signal(2);
  return (
    <Container>
      {/* ...blog post cards... */}
      <Pagination
        currentPage={currentPage}
        totalPages={12}
        alignment='center'
        onPageChange={page => currentPage(page)}
      />
    </Container>
  );
}`" />

---

## Props

| Prop                | Type                                                      | Default         | Description                                                                                   |
|---------------------|-----------------------------------------------------------|-----------------|-----------------------------------------------------------------------------------------------|
| `currentPage`       | `number` \| `Signal<number>`                              | —               | The current page (1-indexed).                                                                 |
| `totalPages`        | `number`                                                  | —               | Total number of pages.                                                                        |
| `variant`           | `"default"` \| `"bordered"` \| `"bordered-group"`         | `"default"`     | Visual style of the pagination.                                                               |
| `shape`             | `"default"` \| `"pilled"`                                 | `"default"`     | Shape of the pagination buttons.                                                              |
| `size`              | `"sm"` \| `"md"` \| `"lg"`                                | `"md"`          | Size of the pagination buttons.                                                               |
| `alignment`         | `"start"` \| `"center"` \| `"end"`                        | `"start"`       | Alignment of the pagination component.                                                        |
| `showPrevNext`      | `boolean`                                                 | `true`          | Show previous/next navigation buttons.                                                        |
| `showPrevNextText`  | `boolean`                                                 | `false`         | Show text labels ("Previous"/"Next") on navigation buttons.                                   |
| `prevText`          | `string`                                                  | `"Previous"`    | Custom text for previous button.                                                              |
| `nextText`          | `string`                                                  | `"Next"`        | Custom text for next button.                                                                  |
| `showEllipsis`      | `boolean`                                                 | `true`          | Show ellipsis when page numbers are truncated.                                                |
| `siblingCount`      | `number`                                                  | `1`             | Number of page buttons to show around current page.                                           |
| `showBoundaries`    | `boolean`                                                 | `true`          | Show first and last page buttons.                                                             |
| `mini`              | `boolean`                                                 | `false`         | Compact pagination ("1 of 3" format).                                                         |
| `showJumper`        | `boolean`                                                 | `false`         | Show input for direct page jumping.                                                           |
| `jumperText`        | `string`                                                  | `"Go to"`       | Text label for the jumper input.                                                              |
| `showItemsPerPage`  | `boolean`                                                 | `false`         | Show dropdown for items per page.                                                             |
| `itemsPerPageOptions`| `number[]`                                               | `[5, 8, 10]`    | Options for items per page dropdown.                                                          |
| `itemsPerPage`      | `number`                                                  | `5`             | Current items per page.                                                                       |
| `stretched`         | `boolean`                                                 | `false`         | Stretched layout (space-between).                                                             |
| `disabled`          | `boolean`                                                 | `false`         | Disables the pagination.                                                                      |
| `onPageChange`      | `(page: number) => void`                                  | —               | Callback fired when the page changes.                                                         |
| `onItemsPerPageChange`| `(itemsPerPage: number) => void`                        | —               | Callback fired when items per page changes.                                                   |
| `className`         | `string`                                                  | —               | Additional CSS classes for the root element.                                                  |
| `id`                | `string`                                                  | auto-generated  | ID for the pagination component.                                                              |
| `style`             | `object`                                                  | —               | Inline styles for the root element.                                                           |
| ...rest             | `BaseComponentProps`                                      | —               | Any other base props supported by Odyssee components.                                         |

## Implementation notes

- The component uses Pulse signals for controlled and uncontrolled usage.
- Page numbers are dynamically generated based on `totalPages`, `currentPage`, and `siblingCount`.
- Ellipsis and boundary pages are shown for large page counts.
- Supports multiple variants (`default`, `bordered`, `bordered-group`) and shapes (`default`, `pilled`).
- Mini mode displays a compact "X of Y" format.
- Jumper input allows direct navigation to a specific page.
- Items per page dropdown is available for advanced use cases.
- All navigation logic is handled internally, with callbacks for external control.
- Designed for both light and dark themes.

## Accessibility

- All navigation buttons are rendered as accessible `<button>` elements with proper ARIA labels.
- The current page uses `aria-current="page"` for screen readers.
- Ellipsis and boundary pages are keyboard navigable.
- Jumper input is accessible and supports keyboard navigation.
- Disabled states are visually and programmatically indicated.
- Focus and hover states are clearly styled for usability.

## Best practices

- Use controlled mode (`currentPage` as signal + `onPageChange`) for full synchronization with your app state.
- Choose the appropriate variant and size for your layout and design system.
- Use mini mode for compact UIs or mobile contexts.
- Enable the jumper for large datasets where direct navigation is useful.
- Always provide clear feedback for disabled states and navigation limits.
- Use items per page dropdown for data tables or catalogs with variable page sizes.

## Related links

- [ButtonGroup](./button-group.md)
- [Table](./table.md)
- [Pulse Framework documentation](https://github.com/odyssee-software/pulse-framework)
- [Odyssee Components documentation](../README.md)
