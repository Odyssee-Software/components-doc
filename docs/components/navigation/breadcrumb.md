# Breadcrumb

## Introduction

The `Breadcrumb` component provides a navigation aid that displays the user's current location within a hierarchical site or application structure. It supports links, icons, custom separators, border styling, collapsed "more" indicators, and full accessibility. Breadcrumbs help users understand context and navigate back through parent sections efficiently.

## Import

```ts
import { Breadcrumb } from '@odyssee/components';
```

## LiveCodeEditor examples

### Basic Breadcrumb

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Breadcrumb items={['Home', 'App Center', 'Application']} />
  );
}`" />

### Breadcrumb with Links

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Breadcrumb
      items={[
        { label: 'Home', href: '/' },
        { label: 'Library', href: '/library' },
        { label: 'Data', active: true },
      ]}
    />
  );
}`" />

### Separator Styles

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Breadcrumb
        separator='chevron'
        items={[
          { label: 'Home', href: '#' },
          { label: 'Products', href: '#' },
          { label: 'Electronics', href: '#' },
          { label: 'Laptops', active: true },
        ]}
      />
      <Breadcrumb
        separator='slash'
        items={[
          { label: 'Home', href: '#' },
          { label: 'Products', href: '#' },
          { label: 'Electronics', href: '#' },
          { label: 'Laptops', active: true },
        ]}
      />
      <Breadcrumb
        separator='custom'
        customSeparator='→'
        items={[
          { label: 'Home', href: '#' },
          { label: 'Products', href: '#' },
          { label: 'Electronics', href: '#' },
          { label: 'Laptops', active: true },
        ]}
      />
    </Container>
  );
}`" />

### Breadcrumb with Icons

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Breadcrumb
      items={[
        { label: 'Home', href: '#', icon: '🏠' },
        { label: 'Documents', href: '#', icon: '📄' },
        { label: 'Reports', href: '#', icon: '📊' },
        { label: 'Annual Report 2024', active: true, icon: '📈' },
      ]}
    />
  );
}`" />

### Bordered Breadcrumb

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Breadcrumb
      bordered
      items={[
        { label: 'Home', href: '#', icon: '🏠' },
        { label: 'Settings', href: '#', icon: '⚙️' },
        { label: 'Privacy', active: true, icon: '🔒' },
      ]}
    />
  );
}`" />

### With More Indicator

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Breadcrumb
      showMore
      items={[
        { label: 'Home', href: '#' },
        { label: 'Current Page', active: true },
      ]}
    />
  );
}`" />

---

## Props

| Prop              | Type                                                      | Default      | Description                                                                                  |
|-------------------|-----------------------------------------------------------|--------------|----------------------------------------------------------------------------------------------|
| `items`           | `(string \| Breadcrumb.Item)[]`                           | —            | Array of breadcrumb items (see below for structure).                                         |
| `separator`       | `"chevron"` \| `"slash"` \| `"custom"`                    | `"chevron"`  | Separator style between items.                                                               |
| `customSeparator` | `HTMLElement` \| `string`                                 | —            | Custom separator element or string (used if `separator="custom"`).                           |
| `bordered`        | `boolean`                                                 | `false`      | Adds border styling to the breadcrumb.                                                       |
| `showMore`        | `boolean`                                                 | `false`      | Shows a "more" indicator for collapsed intermediate items.                                   |
| `maxItems`        | `number`                                                  | —            | Number of items to show before collapsing (if `showMore` is true).                           |
| `collapsedItems`  | `(string \| Breadcrumb.Item)[]`                           | —            | Items to collapse (when using `showMore`).                                                   |
| `size`            | `"xs"` \| `"sm"` \| `"md"` \| `"lg"`                      | `"sm"`       | Text size for breadcrumb items.                                                              |
| `onItemClick`     | `(item: Breadcrumb.Item \| string, index: number) => void`| —            | Callback fired when a breadcrumb item is clicked.                                            |
| `className`       | `string`                                                  | —            | Additional CSS classes for the root element.                                                 |
| `id`              | `string`                                                  | auto-generated | ID for the breadcrumb component.                                                           |
| `style`           | `object`                                                  | —            | Inline styles for the root element.                                                          |
| ...rest           | `BaseComponentProps`                                      | —            | Any other base props supported by Odyssee components.                                        |

### Breadcrumb.Item

| Prop      | Type                           | Description                                         |
|-----------|--------------------------------|-----------------------------------------------------|
| `id`      | `string`                       | Unique identifier for the item.                     |
| `label`   | `string` \| `HTMLElement`      | Display text or custom element for the item.        |
| `href`    | `string`                       | Link URL for the item.                              |
| `icon`    | `HTMLElement` \| `string`      | Icon displayed next to the label.                   |
| `active`  | `boolean`                      | Marks the item as the current/active page.          |
| `onClick` | `(event: MouseEvent) => void`  | Callback when the item is clicked.                  |

## Implementation notes

- The component supports both string and object items for flexibility.
- Separator styles include chevron, slash, and custom elements.
- Icons can be added to any item for visual clarity.
- Border styling is available for enhanced separation.
- The "more" indicator allows collapsing intermediate items for long breadcrumbs.
- Controlled callbacks are available for item clicks.
- Designed for both light and dark themes.
- All items and interactions are accessible and keyboard-navigable.

## Accessibility

- Uses `role="navigation"` and `aria-label="Breadcrumb"` for screen readers.
- The current/active item uses `aria-current="page"`.
- All items are rendered as accessible links or buttons.
- Keyboard navigation is supported.
- Focus and active states are clearly styled.
- Icons and separators are announced appropriately.

## Best practices

- Use links for all navigable items except the current/active page.
- Choose separator styles that match your site's design language.
- Use icons to clarify context or section type.
- Collapse intermediate items for long navigation paths using `showMore`.
- Ensure all labels are clear and concise for accessibility.
- Use border styling for visual separation when needed.

## Related links

- [Navbar](./navbar.md)
- [Tabs](./tabs.md)
- [Pulse Framework documentation](https://github.com/odyssee-software/pulse-framework)
- [Odyssee Components documentation](../README.md)
