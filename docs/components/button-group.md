---
title: ButtonGroup
description: A component for grouping buttons together with various layouts and styles
---

# ButtonGroup

Group related buttons together with seamless styling and flexible layouts. Perfect for toolbars, segmented controls, and action groups. Built for Pulse Framework with full reactivity support.

## Import

```tsx
import { ButtonGroup, Pulse } from '@odyssee/components';
```

## Basic Usage

<LiveCodeEditor :defaultCode="`<ButtonGroup
  buttons={[
    { label: 'Left', value: 'left' },
    { label: 'Center', value: 'center' },
    { label: 'Right', value: 'right' }
  ]}
/>`" />

## With Icons

Add icons to button group items.

<LiveCodeEditor :defaultCode="`<ButtonGroup
  buttons={[
    { label: 'Bold', value: 'bold', icon: '𝐁' },
    { label: 'Italic', value: 'italic', icon: '𝐼' },
    { label: 'Underline', value: 'underline', icon: '𝐔' }
  ]}
/>`" />

## Sizes

Three size options control button padding: `sm`, `md`, and `lg`.

<LiveCodeEditor :defaultCode="`<div class='space-y-4'>
  <ButtonGroup
    size='sm'
    buttons={[
      { label: 'Small', value: '1' },
      { label: 'Buttons', value: '2' },
      { label: 'Group', value: '3' }
    ]}
  />
  <ButtonGroup
    size='md'
    buttons={[
      { label: 'Medium', value: '1' },
      { label: 'Buttons', value: '2' },
      { label: 'Group', value: '3' }
    ]}
  />
  <ButtonGroup
    size='lg'
    buttons={[
      { label: 'Large', value: '1' },
      { label: 'Buttons', value: '2' },
      { label: 'Group', value: '3' }
    ]}
  />
</div>`" />

## Vertical Orientation

Display buttons in a vertical stack.

<LiveCodeEditor :defaultCode="`<ButtonGroup
  orientation='vertical'
  buttons={[
    { label: 'Top', value: 'top' },
    { label: 'Middle', value: 'middle' },
    { label: 'Bottom', value: 'bottom' }
  ]}
/>`" />

## Toolbar Variant

Create compact toolbars with icon buttons.

<LiveCodeEditor :defaultCode="`<ButtonGroup
  variant='toolbar'
  buttons={[
    { label: 'Undo', value: 'undo', icon: '↶' },
    { label: 'Redo', value: 'redo', icon: '↷' },
    { label: 'Cut', value: 'cut', icon: '✂' },
    { label: 'Copy', value: 'copy', icon: '📋' },
    { label: 'Paste', value: 'paste', icon: '📄' }
  ]}
/>`" />

## Responsive Layout

Vertical on mobile, horizontal on desktop.

```tsx
const responsiveGroup = (
  <ButtonGroup
    responsive={true}
    buttons={[
      { label: 'Dashboard', value: 'dashboard' },
      { label: 'Projects', value: 'projects' },
      { label: 'Team', value: 'team' },
      { label: 'Settings', value: 'settings' }
    ]}
  />
);
```

## Full Width

Stretch buttons to fill container width.

<LiveCodeEditor :defaultCode="`<ButtonGroup
  fullWidth={true}
  buttons={[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
  ]}
/>`" />

## With Selection

Track selected button with reactive state.

```tsx
const selectedView = Pulse.signal('grid');

const viewToggle = (
  <div>
    <ButtonGroup
      buttons={[
        { label: 'List', value: 'list', icon: '☰' },
        { label: 'Grid', value: 'grid', icon: '⊞' },
        { label: 'Table', value: 'table', icon: '≣' }
      ]}
      selected={selectedView()}
      onChange={(value) => selectedView(value)}
    />
    
    <div class="mt-4">
      <p class="text-sm text-gray-600">
        Current view: {selectedView()}
      </p>
    </div>
  </div>
);
```

## Multiple Selection

Allow selecting multiple buttons (toolbar mode).

```tsx
const selectedTools = Pulse.signal(['bold', 'italic']);

const formattingToolbar = (
  <ButtonGroup
    variant="toolbar"
    allowMultiple={true}
    buttons={[
      { label: 'Bold', value: 'bold', icon: '𝐁' },
      { label: 'Italic', value: 'italic', icon: '𝐼' },
      { label: 'Underline', value: 'underline', icon: '𝐔' },
      { label: 'Strike', value: 'strike', icon: 'S̶' }
    ]}
    selected={selectedTools()}
    onChange={(values) => selectedTools(values)}
  />
);
```

## With Disabled Buttons

Disable specific buttons in the group.

```tsx
const buttonGroupWithDisabled = (
  <ButtonGroup
    buttons={[
      { label: 'Available', value: 'available' },
      { label: 'Disabled', value: 'disabled', disabled: true },
      { label: 'Available', value: 'available2' }
    ]}
  />
);
```

## Segmented Control

Create iOS-style segmented controls.

```tsx
const SegmentedControl = () => {
  const selected = Pulse.signal('personal');

  return (
    <ButtonGroup
      buttons={[
        { label: 'Personal', value: 'personal' },
        { label: 'Work', value: 'work' },
        { label: 'Other', value: 'other' }
      ]}
      selected={selected()}
      onChange={(value) => selected(value)}
    />
  );
};
```

## Filter Buttons

Create filter button groups for data views.

```tsx
const FilterButtons = () => {
  const activeFilter = Pulse.signal('all');

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Completed', value: 'completed' },
    { label: 'Archived', value: 'archived' }
  ];

  return (
    <ButtonGroup
      buttons={filters}
      selected={activeFilter()}
      onChange={(value) => activeFilter(value)}
    />
  );
};
```

## Complete Example

Here's a comprehensive text editor toolbar:

```tsx
import { ButtonGroup, Card, Pulse } from '@odyssee/components';

const TextEditor = () => {
  const textFormatting = Pulse.signal(['bold']);
  const textAlign = Pulse.signal('left');
  const listType = Pulse.signal(null);

  const formattingButtons = [
    { label: 'Bold', value: 'bold', icon: '𝐁' },
    { label: 'Italic', value: 'italic', icon: '𝐼' },
    { label: 'Underline', value: 'underline', icon: '𝐔' },
    { label: 'Strike', value: 'strike', icon: 'S̶' }
  ];

  const alignmentButtons = [
    { label: 'Left', value: 'left', icon: '⬅' },
    { label: 'Center', value: 'center', icon: '↔' },
    { label: 'Right', value: 'right', icon: '➡' },
    { label: 'Justify', value: 'justify', icon: '⬌' }
  ];

  const listButtons = [
    { label: 'Bullet List', value: 'bullet', icon: '•' },
    { label: 'Numbered List', value: 'numbered', icon: '1.' },
    { label: 'Checklist', value: 'checklist', icon: '☑' }
  ];

  return (
    <Card>
      <div class="space-y-4">
        {/* Formatting toolbar */}
        <div class="flex items-center gap-2 pb-4 border-b">
          <ButtonGroup
            variant="toolbar"
            allowMultiple={true}
            buttons={formattingButtons}
            selected={textFormatting()}
            onChange={(values) => textFormatting(values)}
          />

          <div class="w-px h-6 bg-gray-300" />

          <ButtonGroup
            variant="toolbar"
            buttons={alignmentButtons}
            selected={textAlign()}
            onChange={(value) => textAlign(value)}
          />

          <div class="w-px h-6 bg-gray-300" />

          <ButtonGroup
            variant="toolbar"
            buttons={listButtons}
            selected={listType()}
            onChange={(value) => listType(value)}
          />
        </div>

        {/* Editor content area */}
        <div class="min-h-64 p-4 border border-gray-200 rounded-lg">
          <p class="text-sm text-gray-500">
            Editor content goes here...
          </p>
        </div>

        {/* Status bar */}
        <div class="flex justify-between text-xs text-gray-500 pt-4 border-t">
          <div>
            Formatting: {textFormatting().join(', ') || 'None'}
          </div>
          <div>
            Alignment: {textAlign()}
          </div>
          <div>
            List: {listType() || 'None'}
          </div>
        </div>
      </div>
    </Card>
  );
};
```

## Calendar View Selector

```tsx
const CalendarViewSelector = () => {
  const view = Pulse.signal('month');

  return (
    <div class="flex items-center justify-between">
      <h2 class="text-xl font-bold">Calendar</h2>
      
      <ButtonGroup
        buttons={[
          { label: 'Day', value: 'day' },
          { label: 'Week', value: 'week' },
          { label: 'Month', value: 'month' },
          { label: 'Year', value: 'year' }
        ]}
        selected={view()}
        onChange={(value) => view(value)}
      />
    </div>
  );
};
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `buttons` | `ButtonGroupItem[]` | **Required** | Array of button items |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Layout orientation |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Button size |
| `variant` | `"default" \| "toolbar"` | `"default"` | Visual style variant |
| `responsive` | `boolean` | `false` | Vertical on mobile, horizontal on desktop |
| `allowMultiple` | `boolean` | `false` | Allow multiple selections |
| `selected` | `string \| number \| Array` | - | Selected value(s) |
| `fullWidth` | `boolean` | `false` | Stretch to fill width |
| `onChange` | `(value: any) => void` | - | Selection change handler |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | - | HTML id attribute |

### ButtonGroupItem Type

```tsx
interface ButtonGroupItem {
  label: string | HTMLElement;
  value?: string | number;
  icon?: HTMLElement;
  disabled?: boolean;
  active?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}
```

## Accessibility

The ButtonGroup component follows accessibility best practices:

- ✅ Keyboard navigation support
- ✅ Focus management
- ✅ ARIA attributes for button states
- ✅ Screen reader friendly
- ✅ Disabled state handling
- ✅ Proper button roles

### Keyboard Navigation

- **Tab**: Move focus to button group
- **Arrow Left/Right**: Navigate between buttons (horizontal)
- **Arrow Up/Down**: Navigate between buttons (vertical)
- **Space/Enter**: Activate focused button

## Best Practices

### ✅ Do

- Use for related actions
- Keep labels short and clear
- Group logically related buttons
- Use icons for toolbar variant
- Provide visual feedback on selection
- Use appropriate sizes for context

```tsx
// Good: Clear, related actions
const goodButtonGroup = (
  <ButtonGroup
    buttons={[
      { label: 'Save', value: 'save', icon: '💾' },
      { label: 'Cancel', value: 'cancel', icon: '✖' }
    ]}
  />
);
```

### ❌ Don't

- Don't group unrelated actions
- Don't use too many buttons (use dropdown)
- Don't mix different action types
- Don't forget to handle selections
- Don't use very long labels

```tsx
// Bad: Too many unrelated buttons
const badButtonGroup = (
  <ButtonGroup
    buttons={[
      { label: 'Save', value: 'save' },
      { label: 'Print', value: 'print' },
      { label: 'Settings', value: 'settings' },
      { label: 'Help', value: 'help' },
      { label: 'About', value: 'about' }
    ]}
  />
);

// Better: Group related actions, move others to menu
const betterLayout = (
  <div class="flex items-center gap-2">
    <ButtonGroup
      buttons={[
        { label: 'Save', value: 'save' },
        { label: 'Cancel', value: 'cancel' }
      ]}
    />
    <Dropdown items={otherActions} />
  </div>
);
```

## Use Cases

### View Switcher

```tsx
const ViewSwitcher = () => (
  <ButtonGroup
    buttons={[
      { label: 'List', value: 'list', icon: '☰' },
      { label: 'Grid', value: 'grid', icon: '⊞' }
    ]}
  />
);
```

### Text Alignment

```tsx
const TextAlignButtons = () => (
  <ButtonGroup
    variant="toolbar"
    buttons={[
      { label: 'Left', value: 'left', icon: '⬅' },
      { label: 'Center', value: 'center', icon: '↔' },
      { label: 'Right', value: 'right', icon: '➡' }
    ]}
  />
);
```

### Time Period Selector

```tsx
const TimePeriodSelector = () => (
  <ButtonGroup
    buttons={[
      { label: 'Day', value: 'day' },
      { label: 'Week', value: 'week' },
      { label: 'Month', value: 'month' },
      { label: 'Year', value: 'year' }
    ]}
  />
);
```

### Action Toolbar

```tsx
const ActionToolbar = () => (
  <ButtonGroup
    variant="toolbar"
    buttons={[
      { label: 'Copy', value: 'copy', icon: '📋' },
      { label: 'Cut', value: 'cut', icon: '✂' },
      { label: 'Paste', value: 'paste', icon: '📄' },
      { label: 'Delete', value: 'delete', icon: '🗑' }
    ]}
  />
);
```

## Styling & Theming

All ButtonGroup styles use Tailwind CSS classes and support dark mode automatically.

### Custom Styling

```tsx
const customButtonGroup = (
  <ButtonGroup
    className="shadow-lg"
    buttons={buttons}
  />
);
```

## TypeScript

Full TypeScript support with complete type definitions:

```tsx
import type { ButtonGroupProps, ButtonGroupItem } from '@odyssee/components';

const buttons: ButtonGroupItem[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' }
];

const props: ButtonGroupProps = {
  buttons: buttons,
  orientation: 'horizontal',
  onChange: (value: string | number) => {
    console.log('Selected:', value);
  }
};

const buttonGroup = <ButtonGroup {...props} />;
```

## Related Components

- [Button](/components/button) - Individual button component
- [Dropdown](/components/dropdown) - For many options
- [Tabs](/components/tabs) - For content switching
- [Toggle](/components/toggle) - For binary states

---

**Version**: 1.0.0  
**Last Updated**: January 2025