# ListGroup

A flexible and interactive component for displaying grouped lists with support for icons, badges, links, buttons, active/disabled states, striped and flush variants, and horizontal layouts. Useful for navigation menus, settings, dashboards, and any grouped content.

---

## Import

```tsx
import { ListGroup } from '@odyssee/components';
// Helpers: ListGroup.Link, ListGroup.Button, ListGroup.Flush, ListGroup.Horizontal
```

---

## Examples

### Basic List Group

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const items = ['Profile', 'Settings', 'Newsletter', 'Downloads'];
  return (
    <Container>
      <ListGroup items={items} />
    </Container>
  )
}`" />

---

### List Group with Icons

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const itemsWithIcons = [
    {
      content: 'Dashboard',
      icon: (
        <svg width='16' height='16' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
        </svg>
      ),
    },
    {
      content: 'Projects',
      icon: (
        <svg width='16' height='16' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z' />
        </svg>
      ),
    },
    {
      content: 'Settings',
      icon: (
        <svg width='16' height='16' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <circle cx='12' cy='12' r='3' stroke='currentColor' strokeWidth='2' />
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06A1.65 1.65 0 0015 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 008.6 15a1.65 1.65 0 00-1.82-.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.6a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0015 8.6a1.65 1.65 0 001.82.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 15z' />
        </svg>
      ),
    },
  ];
  return (
    <Container>
      <ListGroup items={itemsWithIcons} />
    </Container>
  );
}`" />

---

### List Group with Badges

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const itemsWithBadges = [
    { content: 'Inbox', badge: '12', badgeColor: 'primary' },
    { content: 'Drafts', badge: '3', badgeColor: 'secondary' },
    { content: 'Sent', badge: '99+', badgeColor: 'success' },
    { content: 'Trash', badge: '1', badgeColor: 'danger' },
  ];
  return (
    <Container>
      <ListGroup items={itemsWithBadges} />
    </Container>
  )
}`" />

---

### List Group as Links

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const linkItems = [
    { content: 'Home', href: '#', active: true },
    { content: 'About', href: '#' },
    { content: 'Services', href: '#' },
    { content: 'Contact', href: '#', disabled: true },
  ];
  return (
    <Container>
      <ListGroup.Link items={linkItems} />
    </Container>
  )
}`" />

---

### List Group as Buttons

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const buttonItems = [
    { content: 'Active', active: true },
    { content: 'Button' },
  ];
  return (
    <Container>
      <ListGroup.Button
        items={buttonItems}
        onItemClick={(item, index) => alert('Clicked: ' + item.content)}
      />
    </Container>
  )
}`" />

---

### Striped List Group

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const items = ['Profile', 'Settings', 'Newsletter'];
  return (
    <Container>
      <ListGroup items={items} striped />
    </Container>
  )
}`" />

---

### Flush Variant (No Borders)

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const items = ['Profile', 'Settings', 'Newsletter'];
  return (
    <Container>
      <ListGroup.Flush items={items} />
    </Container>
  )
}`" />

---

### Horizontal Variant (Responsive)

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const itemsWithIcons = [
    { content: 'Newsletter', icon: <span>📰</span> },
    { content: 'Downloads', icon: <span>⬇️</span> },
    { content: 'Settings', icon: <span>⚙️</span> },
  ];
  return (
    <Container>
      <ListGroup.Horizontal items={itemsWithIcons} />
    </Container>
  )
}`" />

---

### Active and Disabled States

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const items = [
    { content: 'Active', active: true },
    { content: 'Normal' },
    { content: 'Disabled', disabled: true },
  ];
  return (
    <Container>
      <ListGroup items={items} />
    </Container>
  )
}`" />

---

## Props Table

### ListGroup Props

| Prop         | Type                                                                                      | Default      | Description                                                                                      |
|--------------|-------------------------------------------------------------------------------------------|--------------|--------------------------------------------------------------------------------------------------|
| `items`      | `(string \| ListGroup.Item)[]`                                                            | — (required) | Array of items (strings or objects with content, icon, badge, etc.).                             |
| `variant`    | `"default"` \| `"flush"` \| `"horizontal"`                                                | `"default"`  | Visual style of the group: bordered, flush (no borders), or horizontal layout.                   |
| `as`         | `"li"` \| `"button"` \| `"a"`                                                             | `"li"`       | Render items as `<li>`, `<button>`, or `<a>`.                                                    |
| `striped`    | `boolean`                                                                                 | `false`      | Alternating background for items (default variant only).                                         |
| `noGutters`  | `boolean`                                                                                 | `false`      | Remove horizontal padding from items.                                                            |
| `size`       | `"sm"` \| `"md"` \| `"lg"`                                                                | `"md"`       | Size of the items.                                                                              |
| `activeIndex`| `number` \| `Signal<number>`                                                              | —            | Index of the active item (overrides per-item `active`).                                          |
| `onItemClick`| `(item: ListGroup.Item \| string, index: number) => void`                                 | —            | Callback when an item is clicked (button or li mode).                                            |
| `className`  | `string`                                                                                  | —            | Additional CSS classes for the container.                                                        |
| `id`         | `string`                                                                                  | auto-gen     | HTML id attribute.                                                                              |
| `style`      | `string`                                                                                  | —            | Inline styles.                                                                                   |

#### ListGroup.Item

| Field       | Type                                 | Description                                      |
|-------------|--------------------------------------|--------------------------------------------------|
| `id`        | `string`                             | Optional unique identifier.                       |
| `content`   | `string` \| `HTMLElement`            | The content of the item.                          |
| `icon`      | `HTMLElement` \| `string`            | Optional icon to display before the content.      |
| `badge`     | `string` \| `number`                 | Optional badge (number or label) to display.      |
| `badgeColor`| Color                                | Badge color (primary, secondary, success, etc.).  |
| `href`      | `string`                             | Link URL (for link variant).                      |
| `active`    | `boolean`                            | Mark item as active.                              |
| `disabled`  | `boolean`                            | Mark item as disabled.                            |
| `onClick`   | `(event: Event) => void`             | Item-specific click handler.                      |

---

### Helper Components

- `ListGroup.Link`: Renders items as `<a>` links.
- `ListGroup.Button`: Renders items as `<button>`.
- `ListGroup.Flush`: Flush variant (no borders, uses dividers).
- `ListGroup.Horizontal`: Responsive horizontal layout.

---

## Implementation Notes

- **Variants**:
  - `"default"`: Bordered, stacked list (with optional stripes).
  - `"flush"`: No borders, uses dividers.
  - `"horizontal"`: Responsive row layout on larger screens.
- **Rendering**:
  - Use `as="a"` for navigation, `as="button"` for actions, or default for static lists.
- **Icons & Badges**:
  - Each item can have an icon and/or a badge (with color).
- **Active/Disabled**:
  - Items can be marked as active or disabled (visually and for interaction).
- **Helpers**:
  - Use helper components for common variants and less boilerplate.
- **Composition**:
  - Items can be strings (simple) or objects (for advanced formatting).

---

## Accessibility

- Uses semantic `<ul>`, `<li>`, `<a>`, and `<button>` elements as appropriate.
- Disabled items are not focusable or clickable.
- Active items are visually distinct.
- Badges and icons are decorative; ensure the main content is descriptive.
- For navigation, add ARIA roles as needed in your context.

---

## Best Practices

- Use for navigation menus, settings, dashboards, or grouped actions.
- Prefer semantic and descriptive content for accessibility.
- Use icons and badges to enhance clarity and context.
- Use the horizontal variant for tabs or responsive navigation.
- Combine with cards, sidebars, or sections for richer UIs.

---

## Related

- [Pulse Framework](https://github.com/odyssee-software/pulse-framework)
- [Tailwind CSS List Utilities](https://tailwindcss.com/docs/list-style-type)
- [MDN: `<ul>` and `<li>` elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)

---
