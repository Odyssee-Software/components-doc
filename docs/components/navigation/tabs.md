# Tabs

## Introduction

The `Tabs` component provides a flexible, accessible, and highly customizable tabbed navigation interface for organizing content into separate views. It supports multiple visual variants, sizes, icons, controlled and uncontrolled usage, vertical orientation, event triggers (click/hover), and can be composed with either an items array or children panels. Common use cases include dashboards, user profiles, product details, analytics, and more.

## Import

```ts
import { Tabs } from '@odyssee/components';
// Tabs.Panel is available as a static property for flexible composition
```

## LiveCodeEditor examples

### Basic Tabs

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Tabs
        items={[
          {
            id: 'tab1',
            label: 'Tab 1',
            content: <div style={{ padding: 16 }}>First Tab Content</div>,
          },
          {
            id: 'tab2',
            label: 'Tab 2',
            content: <div style={{ padding: 16 }}>Second Tab Content</div>,
          },
          {
            id: 'tab3',
            label: 'Tab 3',
            content: <div style={{ padding: 16 }}>Third Tab Content</div>,
          },
        ]}
      />
    </Container>
  );
}`" />

### Variants

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Tabs
        variant='underline'
        items={[
          { id: 'home', label: 'Home', content: <div style={{ padding: 16 }}>Home content</div> },
          { id: 'profile', label: 'Profile', content: <div style={{ padding: 16 }}>Profile content</div> },
          { id: 'contact', label: 'Contact', content: <div style={{ padding: 16 }}>Contact content</div> },
        ]}
      />
      <Tabs
        variant='pills'
        items={[
          { id: 'pills-home', label: 'Home', content: <div style={{ padding: 16 }}>Home content</div> },
          { id: 'pills-profile', label: 'Profile', content: <div style={{ padding: 16 }}>Profile content</div> },
          { id: 'pills-contact', label: 'Contact', content: <div style={{ padding: 16 }}>Contact content</div> },
        ]}
      />
      <Tabs
        variant='enclosed'
        items={[
          { id: 'home', label: 'Home', content: <div style={{ padding: 16 }}>Home content</div> },
          { id: 'profile', label: 'Profile', content: <div style={{ padding: 16 }}>Profile content</div> },
          { id: 'contact', label: 'Contact', content: <div style={{ padding: 16 }}>Contact content</div> },
        ]}
      />
      <Tabs
        variant='vertical'
        items={[
          { id: 'vertical-home', label: 'Home', content: <div style={{ padding: 16 }}>Home content</div> },
          { id: 'vertical-profile', label: 'Profile', content: <div style={{ padding: 16 }}>Profile content</div> },
          { id: 'vertical-contact', label: 'Contact', content: <div style={{ padding: 16 }}>Contact content</div> },
        ]}
      />
    </Container>
  );
}`" />

### Sizes

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Tabs
        size='sm'
        items={[
          { id: 'tab1', label: 'Tab 1', content: <div style={{ padding: 16 }}>Content 1</div> },
          { id: 'tab2', label: 'Tab 2', content: <div style={{ padding: 16 }}>Content 2</div> },
          { id: 'tab3', label: 'Tab 3', content: <div style={{ padding: 16 }}>Content 3</div> },
        ]}
      />
      <Tabs
        size='md'
        items={[
          { id: 'tab1', label: 'Tab 1', content: <div style={{ padding: 16 }}>Content 1</div> },
          { id: 'tab2', label: 'Tab 2', content: <div style={{ padding: 16 }}>Content 2</div> },
          { id: 'tab3', label: 'Tab 3', content: <div style={{ padding: 16 }}>Content 3</div> },
        ]}
      />
      <Tabs
        size='lg'
        items={[
          { id: 'tab1', label: 'Tab 1', content: <div style={{ padding: 16 }}>Content 1</div> },
          { id: 'tab2', label: 'Tab 2', content: <div style={{ padding: 16 }}>Content 2</div> },
          { id: 'tab3', label: 'Tab 3', content: <div style={{ padding: 16 }}>Content 3</div> },
        ]}
      />
    </Container>
  );
}`" />

### Tabs with Icons

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Tabs
        items={[
          {
            id: 'home',
            label: 'Home',
            icon: '🏠',
            content: <div style={{ padding: 16 }}>Welcome to the home tab!</div>,
          },
          {
            id: 'profile',
            label: 'Profile',
            icon: '👤',
            content: <div style={{ padding: 16 }}>Your profile information here.</div>,
          },
          {
            id: 'settings',
            label: 'Settings',
            icon: '⚙️',
            content: <div style={{ padding: 16 }}>Manage your settings.</div>,
          },
        ]}
      />
    </Container>
  );
}`" />

### Controlled Tabs

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const activeTab = Pulse.signal('tab1');
  return (
    <Container>
      <div style={{ marginBottom: 8 }}>
        Current active tab: <b>{Pulse.computed(() => activeTab())}</b>
      </div>
      <Tabs
        activeTab={activeTab}
        onChange={tabId => activeTab(tabId)}
        items={[
          { id: 'tab1', label: 'Dashboard', content: <div style={{ padding: 16 }}>Dashboard content</div> },
          { id: 'tab2', label: 'Analytics', content: <div style={{ padding: 16 }}>Analytics data</div> },
          { id: 'tab3', label: 'Reports', content: <div style={{ padding: 16 }}>Generated reports</div> },
        ]}
      />
    </Container>
  );
}`" />

### Event Types (Click & Hover)

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Tabs
        eventType='click'
        items={[
          { id: 'tab1', label: 'Click Tab 1', content: <div style={{ padding: 16 }}>Click content 1</div> },
          { id: 'tab2', label: 'Click Tab 2', content: <div style={{ padding: 16 }}>Click content 2</div> },
          { id: 'tab3', label: 'Click Tab 3', content: <div style={{ padding: 16 }}>Click content 3</div> },
        ]}
      />
      <Tabs
        eventType='hover'
        items={[
          { id: 'tab1', label: 'Hover Tab 1', content: <div style={{ padding: 16 }}>Hover content 1</div> },
          { id: 'tab2', label: 'Hover Tab 2', content: <div style={{ padding: 16 }}>Hover content 2</div> },
          { id: 'tab3', label: 'Hover Tab 3', content: <div style={{ padding: 16 }}>Hover content 3</div> },
        ]}
      />
    </Container>
  );
}`" />

### Use Case: User Profile Sections

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const activeTab = Pulse.signal('profile');
  return (
    <Container>
      <Tabs
        variant='pills'
        activeTab={activeTab}
        onChange={tabId => activeTab(tabId)}
        items={[
          {
            id: 'profile',
            label: 'Profile',
            icon: '👤',
            content: <div style={{ padding: 16 }}>User profile details...</div>,
          },
          {
            id: 'activity',
            label: 'Activity',
            icon: '📊',
            content: <div style={{ padding: 16 }}>Recent activity logs...</div>,
          },
          {
            id: 'security',
            label: 'Security',
            icon: '🔒',
            content: <div style={{ padding: 16 }}>Security settings...</div>,
          },
        ]}
      />
    </Container>
  );
}`" />

---

## Props

### Tabs

| Prop               | Type                                                      | Default         | Description                                                                                   |
|--------------------|-----------------------------------------------------------|-----------------|-----------------------------------------------------------------------------------------------|
| `items`            | `Tabs.Item[]`                                             | —               | Array of tab items (see below for structure).                                                 |
| `children`         | `HTMLElement` \| `HTMLElement[]`                          | —               | Custom children panels (alternative to `items`).                                              |
| `activeTab`        | `string` \| `Signal<string>`                              | —               | Controlled active tab ID (or Pulse signal).                                                   |
| `variant`          | `"underline"` \| `"pills"` \| `"enclosed"` \| `"vertical"`| `"underline"`   | Visual style of the tabs.                                                                     |
| `eventType`        | `"click"` \| `"hover"`                                    | `"click"`       | Event trigger for tab activation.                                                             |
| `bordered`         | `boolean`                                                 | `true`          | Show border under tabs (underline/enclosed variants).                                         |
| `fullWidth`        | `boolean`                                                 | `false`         | Tabs take full width of container.                                                            |
| `size`             | `"sm"` \| `"md"` \| `"lg"`                                | `"md"`          | Size of tab labels.                                                                           |
| `tablistClassName` | `string`                                                  | —               | Custom class for the tablist container.                                                       |
| `contentClassName` | `string`                                                  | —               | Custom class for the content panel container.                                                 |
| `onChange`         | `(tabId: string, prevTabId: string) => void`              | —               | Callback fired when the active tab changes.                                                   |
| `className`        | `string`                                                  | —               | Additional CSS classes for the root element.                                                  |
| `id`               | `string`                                                  | auto-generated  | ID for the tabs component.                                                                    |
| ...rest            | `BaseComponentProps`                                      | —               | Any other base props supported by Odyssee components.                                         |

### Tabs.Item

| Prop      | Type                           | Description                                         |
|-----------|--------------------------------|-----------------------------------------------------|
| `id`      | `string`                       | Unique identifier for the tab.                      |
| `label`   | `string` \| `HTMLElement`      | Tab label (text or custom element).                 |
| `content` | `string` \| `HTMLElement` \| `HTMLElement[]` | Content for the tab panel.              |
| `icon`    | `string` \| `HTMLElement`      | Icon displayed next to the label.                   |
| `disabled`| `boolean`                      | Disables the tab.                                   |
| `badge`   | `string` \| `number`           | Badge displayed next to the label.                  |

### Tabs.Panel

| Prop      | Type                           | Description                                         |
|-----------|--------------------------------|-----------------------------------------------------|
| `id`      | `string`                       | Unique identifier for the panel.                    |
| `label`   | `string` \| `HTMLElement`      | Tab label for the panel.                            |
| `children`| `string` \| `HTMLElement` \| `HTMLElement[]` | Content for the panel.                  |
| `icon`    | `string` \| `HTMLElement`      | Icon displayed next to the label.                   |
| `disabled`| `boolean`                      | Disables the tab.                                   |
| `badge`   | `string` \| `number`           | Badge displayed next to the label.                  |

## Implementation notes

- The component supports both array-based (`items`) and children-based (`Tabs.Panel`) composition.
- Controlled usage is supported via the `activeTab` prop (string or Pulse signal).
- Four visual variants: `underline`, `pills`, `enclosed`, and `vertical`.
- Tabs can be activated by click or hover (`eventType`).
- Icons and badges are supported for tab labels.
- Disabled tabs are skipped in navigation and visually indicated.
- Designed for both light and dark themes.
- All tab panels are rendered, but only the active panel is visible.

## Accessibility

- All tab buttons use proper ARIA roles (`role="tab"`, `aria-selected`, `aria-controls`).
- Tab panels use `role="tabpanel"` and are linked to their tab via `aria-labelledby`.
- Keyboard navigation is supported (Tab, Arrow keys).
- Disabled tabs are not focusable.
- Focus and active states are clearly styled for usability.
- Supports vertical orientation with correct ARIA attributes.

## Best practices

- Use controlled mode (`activeTab` as signal + `onChange`) for full synchronization with your app state.
- Choose the appropriate variant and size for your layout and design system.
- Use icons and badges to enhance tab clarity and highlight important sections.
- Prefer vertical tabs for sidebar navigation or dense layouts.
- Ensure all tab labels are clear and concise for accessibility.
- Avoid excessive numbers of tabs; group related content when possible.

## Related links

- [Accordion](./accordion.md)
- [Stepper](./stepper.md)
- [Pulse Framework documentation](https://github.com/odyssee-software/pulse-framework)
- [Odyssee Components documentation](../README.md)
