# TreeView

## Introduction

The `TreeView` component provides a hierarchical, interactive navigation structure for displaying nested data such as file systems, categories, organization charts, and more. It supports selection (single/multi), expansion/collapse, checkboxes, custom icons, drag-and-drop, and accessibility features. Designed for both simple and complex trees, it adapts to a wide range of use cases in dashboards, explorers, and admin panels.

## Import

```ts
import { TreeView } from '@odyssee/components';
```

## LiveCodeEditor examples

### Basic TreeView

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const nodes = [
    {
      value: 'root',
      label: 'Root Folder',
      isDir: true,
      children: [
        { value: 'file1', label: 'File 1.txt' },
        { value: 'file2', label: 'File 2.txt' },
        {
          value: 'subfolder',
          label: 'Subfolder',
          isDir: true,
          children: [
            { value: 'file3', label: 'File 3.txt' }
          ]
        }
      ]
    }
  ];
  return <TreeView nodes={nodes} />;
}`" />

### Multi-select TreeView

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const nodes = [
    {
      value: 'projects',
      label: 'Projects',
      isDir: true,
      children: [
        { value: 'alpha', label: 'Alpha' },
        { value: 'beta', label: 'Beta' },
        { value: 'gamma', label: 'Gamma' }
      ]
    }
  ];
  const selected = Pulse.signal([]);
  return (
    <TreeView
      nodes={nodes}
      selectable={true}
      multiSelect={true}
      selected={selected}
      onSelect={sel => selected(sel)}
    />
  );
}`" />

### TreeView with Checkboxes

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const nodes = [
    {
      value: 'categories',
      label: 'Categories',
      isDir: true,
      children: [
        {
          value: 'fruits',
          label: 'Fruits',
          children: [
            { value: 'apple', label: 'Apple' },
            { value: 'banana', label: 'Banana' }
          ]
        },
        {
          value: 'vegetables',
          label: 'Vegetables',
          children: [
            { value: 'carrot', label: 'Carrot' },
            { value: 'broccoli', label: 'Broccoli' }
          ]
        }
      ]
    }
  ];
  const checked = Pulse.signal([]);
  return (
    <TreeView
      nodes={nodes}
      showCheckboxes={true}
      checked={checked}
      onCheck={vals => checked(vals)}
    />
  );
}`" />

### TreeView with Custom Icons

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const nodes = [
    {
      value: 'org',
      label: 'Company',
      icon: '🏢',
      isDir: true,
      children: [
        {
          value: 'dev',
          label: 'Development',
          icon: '💻',
          children: [
            { value: 'alice', label: 'Alice', icon: '👩‍💻' },
            { value: 'bob', label: 'Bob', icon: '👨‍💻' }
          ]
        },
        {
          value: 'design',
          label: 'Design',
          icon: '🎨',
          children: [
            { value: 'eve', label: 'Eve', icon: '👩‍🎨' }
          ]
        }
      ]
    }
  ];
  return <TreeView nodes={nodes} />;
}`" />

### TreeView with Lines and Right Icons

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const nodes = [
    {
      value: 'docs',
      label: 'Documentation',
      isDir: true,
      children: [
        { value: 'guide', label: 'Guide' },
        { value: 'api', label: 'API Reference' }
      ]
    }
  ];
  return (
    <TreeView
      nodes={nodes}
      showLines={true}
      iconPosition='right'
    />
  );
}`" />

### Controlled Expansion

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const nodes = [
    {
      value: 'folders',
      label: 'Folders',
      isDir: true,
      children: [
        { value: 'a', label: 'A' },
        { value: 'b', label: 'B' }
      ]
    }
  ];
  const expanded = Pulse.signal(['folders']);
  return (
    <TreeView
      nodes={nodes}
      expanded={expanded}
      onExpand={exp => expanded(exp)}
    />
  );
}`" />

---

## Props

| Prop             | Type                                         | Default      | Description                                                                                  |
|------------------|----------------------------------------------|--------------|----------------------------------------------------------------------------------------------|
| `nodes`          | `TreeView.Node[]`                            | —            | Array of tree nodes (see below for structure).                                               |
| `selectable`     | `boolean`                                    | `false`      | Enables node selection.                                                                      |
| `multiSelect`    | `boolean`                                    | `false`      | Enables multi-selection (shift/ctrl).                                                        |
| `selected`       | `string[]` \| `Signal<string[]>`             | —            | Controlled selected node values.                                                             |
| `onSelect`       | `(selected: string[]) => void`               | —            | Callback when selection changes.                                                             |
| `expanded`       | `string[]` \| `Signal<string[]>`             | —            | Controlled expanded node values.                                                             |
| `onExpand`       | `(expanded: string[]) => void`               | —            | Callback when expansion changes.                                                             |
| `alwaysOpen`     | `boolean`                                    | `false`      | Keeps all nodes expanded.                                                                    |
| `showCheckboxes` | `boolean`                                    | `false`      | Shows checkboxes for each node.                                                              |
| `checked`        | `string[]` \| `Signal<string[]>`             | —            | Controlled checked node values.                                                              |
| `onCheck`        | `(checked: string[]) => void`                | —            | Callback when checked nodes change.                                                          |
| `draggable`      | `boolean`                                    | `false`      | Enables drag-and-drop (requires Sortable.js).                                                |
| `onDragEnd`      | `(nodes: TreeView.Node[]) => void`           | —            | Callback when drag-and-drop ends.                                                            |
| `showLines`      | `boolean`                                    | `false`      | Shows vertical connection lines between nodes.                                               |
| `iconPosition`   | `"left"` \| `"right"`                        | `"left"`     | Position of node icons.                                                                      |
| `ariaLabel`      | `string`                                     | —            | ARIA label for accessibility.                                                                |
| `ariaLabelledBy` | `string`                                     | —            | ARIA labelledby for accessibility.                                                           |
| `className`      | `string`                                     | —            | Additional CSS classes for the root element.                                                 |
| `id`             | `string`                                     | auto-generated | ID for the treeview component.                                                             |
| `style`          | `object`                                     | —            | Inline styles for the root element.                                                          |
| ...rest          | `BaseComponentProps`                         | —            | Any other base props supported by Odyssee components.                                        |

### TreeView.Node

| Prop      | Type                           | Description                                         |
|-----------|--------------------------------|-----------------------------------------------------|
| `value`   | `string`                       | Unique identifier for the node.                     |
| `label`   | `string`                       | Display text for the node.                          |
| `isDir`   | `boolean`                      | Marks node as a folder (true) or file (false/absent).|
| `icon`    | `Pulse.JSX.Element` \| `string`| Custom icon for the node (emoji, SVG, etc.).        |
| `disabled`| `boolean`                      | Disables the node.                                  |
| `children`| `TreeView.Node[]`              | Array of child nodes.                               |

## Implementation notes

- The component supports both controlled and uncontrolled selection, expansion, and checked states via Pulse signals.
- Multi-select uses shift/ctrl for range and additive selection.
- Checkboxes allow for independent checked state per node.
- Custom icons can be set per node; folders/files have default icons if not specified.
- Drag-and-drop is supported (requires Sortable.js integration).
- Vertical connection lines can be enabled for classic tree appearance.
- Icon position can be set to left or right.
- Designed for both light and dark themes.
- All nodes and interactions are accessible and keyboard-navigable.

## Accessibility

- Tree structure uses ARIA roles (`tree`, `treeitem`, `group`) for screen readers.
- Keyboard navigation is supported (Arrow keys, Home/End, Space/Enter for selection).
- Focus and selected states are clearly styled.
- Checkboxes use proper ARIA attributes.
- Disabled nodes are not focusable or selectable.
- ARIA labels and labelledby props are available for custom accessibility needs.

## Best practices

- Use controlled mode (signals + callbacks) for full synchronization with your app state.
- Prefer unique `value` identifiers for each node.
- Use icons to visually distinguish folders, files, or custom types.
- Enable multi-select for batch operations; use checkboxes for independent selection.
- Keep tree depth manageable for usability; collapse deeply nested nodes by default.
- Ensure all labels are clear and concise for accessibility.
- Use drag-and-drop only when reordering is required.

## Related links

- [Accordion](./accordion.md)
- [Stepper](./stepper.md)
- [Pulse Framework documentation](https://github.com/odyssee-software/pulse-framework)
- [Odyssee Components documentation](../README.md)
