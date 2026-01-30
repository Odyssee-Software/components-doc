# Dropdown

## Introduction

The `Dropdown` component displays a floating menu anchored to a trigger element. It supports both structured item arrays and flexible children composition, making it ideal for actions, navigation, filtering, and contextual menus. Dropdowns can be triggered by click, hover, or context menu, and support icons, dividers, disabled items, custom placement, and more.

## Import

```ts
import { Dropdown } from '@odyssee/components';
```

## LiveCodeEditor examples

### Basic Dropdown

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const items = [
    { label: 'Dashboard', onClick: () => alert('Dashboard') },
    { label: 'Settings', onClick: () => alert('Settings') },
    { label: 'Logout', onClick: () => alert('Logout') },
  ];
  return (
    <Dropdown trigger='Simple Menu' items={items} />
  );
}`" />

### Dropdown with Dividers and Actions

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const items = [
    { label: 'Edit', onClick: () => alert('Edit') },
    { label: 'Duplicate', onClick: () => alert('Duplicate') },
    { isDivider: true },
    { label: 'Delete', onClick: () => alert('Delete') },
  ];
  return (
    <Dropdown trigger='Actions' items={items} />
  );
}`" />

### Dropdown with Links

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const items = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];
  return (
    <Dropdown trigger='Links Menu' items={items} />
  );
}`" />

### Placement Variants

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const items = [
    { label: 'Option 1', onClick: () => {} },
    { label: 'Option 2', onClick: () => {} },
    { label: 'Option 3', onClick: () => {} },
  ];
  return (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <Dropdown trigger='Top Start' placement='top-start' items={items} />
      <Dropdown trigger='Top' placement='top' items={items} />
      <Dropdown trigger='Top End' placement='top-end' items={items} />
      <Dropdown trigger='Bottom Start' placement='bottom-start' items={items} />
      <Dropdown trigger='Bottom (Default)' placement='bottom' items={items} />
      <Dropdown trigger='Bottom End' placement='bottom-end' items={items} />
      <Dropdown trigger='Left' placement='left' items={items} />
      <Dropdown trigger='Right' placement='right' items={items} />
    </div>
  );
}`" />

### Trigger Types

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const clickItems = [
    { label: 'Action 1', onClick: () => alert('Action 1') },
    { label: 'Action 2', onClick: () => alert('Action 2') },
    { label: 'Action 3', onClick: () => alert('Action 3') },
  ];
  const hoverItems = [
    { label: 'Quick Action 1', onClick: () => alert('Quick 1') },
    { label: 'Quick Action 2', onClick: () => alert('Quick 2') },
    { label: 'Quick Action 3', onClick: () => alert('Quick 3') },
  ];
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <Dropdown trigger='Click to Open' triggerType='click' items={clickItems} />
      <Dropdown trigger='Hover to Open' triggerType='hover' items={hoverItems} />
    </div>
  );
}`" />

### Disabled Items

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const items = [
    { label: 'Undo', onClick: () => alert('Undo') },
    { label: 'Redo', onClick: () => alert('Redo'), disabled: true },
    { isDivider: true },
    { label: 'Cut', onClick: () => alert('Cut') },
    { label: 'Copy', onClick: () => alert('Copy') },
    { label: 'Paste', onClick: () => alert('Paste'), disabled: true },
  ];
  return (
    <Dropdown trigger='Edit Menu' items={items} />
  );
}`" />

### User Account Menu Example

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const items = [
    { label: '👤 My Profile', href: '#profile' },
    { label: '⚙️ Settings', href: '#settings' },
    { label: '💳 Billing', href: '#billing' },
    { isDivider: true },
    { label: '📖 Documentation', href: '#docs' },
    { label: '💬 Support', href: '#support' },
    { isDivider: true },
    { label: '🚪 Logout', onClick: () => alert('Logout') },
  ];
  return (
    <Dropdown
      trigger='John Doe'
      triggerClassName='bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0'
      placement='bottom-end'
      items={items}
    />
  );
}`" />

## Props

| Prop             | Type                                                                 | Default        | Description                                                                                                 |
|------------------|----------------------------------------------------------------------|----------------|-------------------------------------------------------------------------------------------------------------|
| `trigger`        | `HTMLElement` \| `string`                                            | —              | The element or label that triggers the dropdown.                                                            |
| `triggerClassName` | `string`                                                           | —              | Additional CSS classes for the trigger element.                                                             |
| `items`          | `Dropdown.Item[]`                                                    | —              | Array of menu items (see below for shape).                                                                  |
| `children`       | `HTMLElement` \| `HTMLElement[]`                                     | —              | Alternative to `items`: custom dropdown content (use with `Dropdown.Item` and `Dropdown.Divider`).          |
| `placement`      | `"top"` \| `"top-start"` \| `"top-end"` \| `"bottom"` \| `"bottom-start"` \| `"bottom-end"`<br>`"left"` \| `"left-start"` \| `"left-end"` \| `"right"` \| `"right-start"` \| `"right-end"` \| `"auto"` | `"bottom"`     | Position of the dropdown relative to the trigger.                                                           |
| `strategy`       | `"fixed"` \| `"absolute"`                                            | `"fixed"`      | Positioning strategy for the dropdown menu.                                                                 |
| `offset`         | `number`                                                             | `10`           | Offset (in px) between the trigger and the dropdown.                                                        |
| `flip`           | `boolean`                                                            | `true`         | Whether to flip the dropdown to stay in the viewport.                                                       |
| `scope`          | `"parent"` \| `"window"`                                             | `"parent"`     | Positioning scope for the dropdown.                                                                         |
| `triggerType`    | `"click"` \| `"hover"` \| `"contextmenu"`                            | `"click"`      | How the dropdown is triggered.                                                                              |
| `autoClose`      | `boolean` \| `"inside"` \| `"outside"`                               | `true`         | Controls auto-close behavior: on any click, only inside, or only outside.                                   |
| `closeOnSelect`  | `boolean`                                                            | `true`         | Whether to close the dropdown when an item is selected.                                                     |
| `hasAutofocus`   | `boolean`                                                            | `true`         | Whether the dropdown menu should autofocus when opened.                                                     |
| `isOpen`         | `boolean` \| `Signal<boolean>`                                       | —              | Controlled open state (optional).                                                                           |
| `menuClassName`  | `string`                                                             | —              | Additional CSS classes for the dropdown menu container.                                                     |
| `onOpen`         | `() => void`                                                         | —              | Callback fired when the dropdown opens.                                                                     |
| `onClose`        | `() => void`                                                         | —              | Callback fired when the dropdown closes.                                                                    |
| `onSelect`       | `(value: string \| number) => void`                                  | —              | Callback fired when an item with a `value` is selected.                                                     |
| `className`      | `string`                                                             | —              | Additional CSS classes for the dropdown container.                                                          |
| `id`             | `string`                                                             | auto-generated | ID for the dropdown container.                                                                              |
| ...rest          | —                                                                    | —              | Any other props are spread to the root container.                                                           |

### `Dropdown.Item` shape

- `label`: `string` \| `HTMLElement` — The text or element for the menu item.
- `value`: `string` \| `number` (optional) — Value passed to `onSelect`.
- `icon`: `HTMLElement` \| `string` (optional) — Icon to display before the label.
- `href`: `string` (optional) — If provided, renders as a link.
- `disabled`: `boolean` (optional) — If true, the item is disabled.
- `isDivider`: `boolean` (optional) — If true, renders a divider instead of an item.
- `onClick`: `() => void` (optional) — Click handler for the item.
- `className`: `string` (optional) — Additional classes for the item.

### Children composition

You can also use the `Dropdown.Item` and `Dropdown.Divider` subcomponents as children for full flexibility.

```tsx
<Dropdown trigger="Menu">
  <Dropdown.Item>Newsletter</Dropdown.Item>
  <Dropdown.Item href="/purchases">Purchases</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item icon={<Icon />}>Downloads</Dropdown.Item>
</Dropdown>
```

## Implementation notes

- `Dropdown` supports both a structured `items` array and flexible children composition.
- The menu is rendered with Preline and Floating UI for positioning and accessibility.
- Supports custom triggers (button, avatar, etc.) and custom menu content.
- Placement, offset, flipping, and auto-close are fully configurable.
- Menu items can be links, buttons, disabled, have icons, or be dividers.
- The dropdown closes automatically on outside click, on select (if enabled), or Escape key.
- Keyboard navigation and ARIA roles are handled for accessibility.

## Accessibility

- The dropdown menu uses `role="menu"` and proper ARIA attributes for assistive technologies.
- Keyboard navigation is supported: arrow keys to move, Enter/Space to select, Escape to close.
- The trigger element should be focusable (button, link, etc.).
- Menu closes on outside click or Escape key.
- Ensure all interactive items are accessible via keyboard and screen readers.

## Best practices

- Use concise, clear labels for menu items.
- Group related actions with dividers for clarity.
- Use icons to visually distinguish actions when appropriate.
- Avoid placing destructive actions (like "Delete") next to frequent actions.
- For navigation, use `href` for menu items to ensure proper link semantics.
- Keep menus short and relevant to the context.

## Related links

- [ContextMenu documentation](./context-menu.md)
- [Popover documentation](./popover.md)
- [Tooltip documentation](./tooltip.md)
- [Odyssee Components documentation](../README.md)