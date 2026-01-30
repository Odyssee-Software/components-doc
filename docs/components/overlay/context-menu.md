# ContextMenu

## Introduction

The `ContextMenu` component provides a customizable right-click (context menu) experience for any element. It wraps its children and displays a floating menu at the cursor position when the user right-clicks. The menu supports icons, dividers, nested submenus, disabled items, and inherits all features from the `Dropdown` component. This is ideal for file managers, editors, dashboards, or any UI where contextual actions are needed.

## Import

```ts
import { ContextMenu } from '@odyssee/components';
```

## LiveCodeEditor examples

### Basic Context Menu

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const items = [
    { label: 'New File', onClick: () => alert('New File clicked') },
    { label: 'New Folder', onClick: () => alert('New Folder clicked') },
    { divider: true },
    { label: 'Copy', onClick: () => alert('Copy clicked') },
    { label: 'Paste', onClick: () => alert('Paste clicked') },
    { divider: true },
    { label: 'Delete', onClick: () => alert('Delete clicked') },
  ];
  return (
    <ContextMenu items={items}>
      <div style={{
        border: '2px dashed #d1d5db',
        borderRadius: 12,
        padding: 48,
        textAlign: 'center',
        cursor: 'context-menu'
      }}>
        Right-click here for basic menu
      </div>
    </ContextMenu>
  );
}`" />

### Context Menu with Icons

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const items = [
    { label: 'Edit', icon: <span>✏️</span>, onClick: () => alert('Edit clicked') },
    { label: 'Duplicate', icon: <span>📄</span>, onClick: () => alert('Duplicate clicked') },
    { divider: true },
    { label: 'Download', icon: <span>⬇️</span>, onClick: () => alert('Download clicked') },
    { label: 'Share', icon: <span>🔗</span>, onClick: () => alert('Share clicked') },
    { divider: true },
    { label: 'Delete', icon: <span style={{color: 'red'}}>🗑️</span>, onClick: () => alert('Delete clicked') },
  ];
  return (
    <ContextMenu items={items}>
      <div style={{
        border: '2px dashed #d1d5db',
        borderRadius: 12,
        padding: 48,
        textAlign: 'center',
        cursor: 'context-menu'
      }}>
        Right-click here for icon menu
      </div>
    </ContextMenu>
  );
}`" />

### Nested Context Menu

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const items = [
    {
      label: 'File',
      submenu: [
        {
          label: 'New',
          submenu: [
            { label: 'Text File', onClick: () => alert('New Text File') },
            { label: 'Folder', onClick: () => alert('New Folder') },
            { label: 'Project', onClick: () => alert('New Project') },
          ],
        },
        { divider: true },
        {
          label: 'Open Recent',
          submenu: [
            { label: 'file1.txt', onClick: () => alert('Open file1.txt') },
            { label: 'file2.txt', onClick: () => alert('Open file2.txt') },
          ],
        },
        { divider: true },
        { label: 'Save', onClick: () => alert('Save clicked') },
        { label: 'Save As...', onClick: () => alert('Save As clicked') },
      ],
    },
    {
      label: 'Edit',
      submenu: [
        { label: 'Cut', onClick: () => alert('Cut clicked') },
        { label: 'Copy', onClick: () => alert('Copy clicked') },
        { label: 'Paste', onClick: () => alert('Paste clicked') },
      ],
    },
    { divider: true },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
  ];
  return (
    <ContextMenu items={items}>
      <div style={{
        border: '2px dashed #d1d5db',
        borderRadius: 12,
        padding: 48,
        textAlign: 'center',
        cursor: 'context-menu'
      }}>
        Right-click here for nested menu
      </div>
    </ContextMenu>
  );
}`" />

### Disabled Items

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const items = [
    { label: 'Available Action', onClick: () => alert('Available Action clicked') },
    { label: 'Disabled Action', disabled: true, onClick: () => alert('This should not appear') },
    { divider: true },
    { label: 'Copy', disabled: true, onClick: () => alert('This should not appear') },
    { label: 'Paste', onClick: () => alert('Paste clicked') },
  ];
  return (
    <ContextMenu items={items}>
      <div style={{
        border: '2px dashed #d1d5db',
        borderRadius: 12,
        padding: 48,
        textAlign: 'center',
        cursor: 'context-menu'
      }}>
        Right-click here for disabled items
      </div>
    </ContextMenu>
  );
}`" />

### Context Menu on Cards

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const items = [
    { label: 'Edit', icon: <span>✏️</span>, onClick: () => alert('Edit clicked') },
    { label: 'Duplicate', icon: <span>📄</span>, onClick: () => alert('Duplicate clicked') },
    { divider: true },
    { label: 'Download', icon: <span>⬇️</span>, onClick: () => alert('Download clicked') },
    { label: 'Share', icon: <span>🔗</span>, onClick: () => alert('Share clicked') },
    { divider: true },
    { label: 'Delete', icon: <span style={{color: 'red'}}>🗑️</span>, onClick: () => alert('Delete clicked') },
  ];
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <ContextMenu items={items}>
        <div style={{
          background: 'linear-gradient(135deg, #2563eb, #1e40af)',
          borderRadius: 12,
          padding: 24,
          color: 'white',
          flex: 1,
          textAlign: 'center',
          cursor: 'context-menu'
        }}>
          Card 1<br /><span style={{fontSize: 12}}>Right-click for actions</span>
        </div>
      </ContextMenu>
      <ContextMenu items={items}>
        <div style={{
          background: 'linear-gradient(135deg, #7c3aed, #a21caf)',
          borderRadius: 12,
          padding: 24,
          color: 'white',
          flex: 1,
          textAlign: 'center',
          cursor: 'context-menu'
        }}>
          Card 2<br /><span style={{fontSize: 12}}>Right-click for actions</span>
        </div>
      </ContextMenu>
      <ContextMenu items={items}>
        <div style={{
          background: 'linear-gradient(135deg, #22c55e, #166534)',
          borderRadius: 12,
          padding: 24,
          color: 'white',
          flex: 1,
          textAlign: 'center',
          cursor: 'context-menu'
        }}>
          Card 3<br /><span style={{fontSize: 12}}>Right-click for actions</span>
        </div>
      </ContextMenu>
    </div>
  );
}`" />

## Props

| Prop           | Type                       | Default | Description                                                                                  |
|----------------|----------------------------|---------|----------------------------------------------------------------------------------------------|
| `items`        | `Dropdown.Item[]`          | —       | Array of menu items (see Dropdown documentation for item shape, supports icons, submenus, etc.) |
| `children`     | `HTMLElement \| HTMLElement[]` | —   | The element(s) that will trigger the context menu on right-click.                            |
| `menuClassName`| `string`                   | —       | Additional CSS classes for the menu container.                                               |
| `onOpen`       | `() => void`               | —       | Callback fired when the menu opens.                                                          |
| `onClose`      | `() => void`               | —       | Callback fired when the menu closes.                                                         |

**Dropdown.Item shape** (for `items`):

- `label`: `string` — The text of the menu item.
- `icon`: `JSX.Element` (optional) — Icon to display before the label.
- `onClick`: `() => void` (optional) — Click handler for the item.
- `disabled`: `boolean` (optional) — If true, the item is disabled.
- `divider`: `boolean` (optional) — If true, renders a divider instead of an item.
- `submenu`: `Dropdown.Item[]` (optional) — Nested submenu items.
- `className`: `string` (optional) — Additional classes for the item.

## Implementation notes

- `ContextMenu` is a wrapper around the `Dropdown` component, providing a right-click trigger and cursor-based positioning.
- The menu is rendered in a portal attached to the document body for correct positioning and stacking.
- Supports nested submenus, icons, dividers, and disabled items via the `Dropdown.Item` API.
- The menu automatically closes on click outside or when pressing Escape.
- The menu's position is adjusted if it would overflow the viewport.
- All menu content and behavior are fully customizable via the `items` prop.

## Accessibility

- The context menu is rendered as a `role="menu"` element for assistive technologies.
- Keyboard navigation is supported within the menu (inherited from `Dropdown`).
- The trigger element(s) should be focusable for best accessibility.
- The menu closes automatically on outside click or Escape key.
- Ensure all menu actions are accessible via keyboard and screen readers.

## Best practices

- Use clear, concise labels for menu items.
- Group related actions and use dividers for clarity.
- Avoid placing destructive actions (like "Delete") next to frequent actions.
- Use icons to visually distinguish actions when appropriate.
- Keep menus short and relevant to the context.
- Always provide a fallback for critical actions outside the context menu.

## Related links

- [Dropdown documentation](./dropdown.md)
- [Popover documentation](./popover.md)
- [Tooltip documentation](./tooltip.md)
- [Odyssee Components documentation](../README.md)