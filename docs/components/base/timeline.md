# Timeline

A flexible and composable component for displaying chronological events in a vertical timeline. Supports icons, avatars, badges, user info, time display, grouping, hoverable/clickable items, collapsible sections, and manual composition.

---

## Import

```tsx
import { Timeline } from '@odyssee/components';
// Helpers: Timeline.Item, Timeline.Heading
```

---

## Examples

### Basic Timeline

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <Timeline
        items={[
          {
            title: 'Project Created',
            description: 'The project was successfully initialized with all dependencies.',
            icon: 'dot',
          },
          {
            title: 'First Commit',
            description: 'Initial project structure and configuration files added.',
            icon: 'dot',
          },
          {
            title: 'Version 1.0 Released',
            description: 'First stable release with core features implemented.',
            icon: 'dot',
          },
        ]}
      />
    </Container>
  );
}`" />

---

### Icon Variants

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <Timeline
        items={[
          {
            title: 'Created task',
            description: 'Find detailed instructions in the documentation.',
            icon: 'dot',
          },
          {
            title: 'Alex updated the project',
            description: 'Bug fixes and performance improvements.',
            icon: 'badge',
            initials: 'A',
          },
          {
            title: 'James Collins joined',
            description: 'New team member added to the project.',
            icon: 'avatar',
            avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100',
          },
        ]}
      />
    </Container>
  );
}
`" />

---

### With User Information

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <Timeline
        items={[
          {
            title: 'Task assigned',
            description: 'New feature implementation assigned to the development team.',
            icon: 'dot',
            user: {
              name: 'Sarah Johnson',
              initials: 'SJ',
            },
          },
          {
            title: 'Reviewed by',
            description: 'Code review completed.',
            icon: 'avatar',
            avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100',
            user: {
              name: 'Michael Lee',
              avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100',
            },
          },
        ]}
      />
    </Container>
  );
}
`" />

---

### Time Display

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <Timeline
        showTime
        timePosition='left'
        items={[
          { title: 'Task created', time: '12:05PM' },
          { title: 'Bug fixed', time: '1:30PM' },
          { title: 'Release deployed', time: '3:00PM' },
        ]}
      />
    </Container>
  );
}
`" />

---

### Grouped by Date

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <Timeline
        grouped
        groups={[
          {
            heading: '1 Aug, 2023',
            items: [
              { title: 'Task 1', description: 'Started new feature.' },
              { title: 'Task 2', description: 'Completed bug fix.' },
            ],
          },
          {
            heading: '31 Jul, 2023',
            items: [
              { title: 'Task 3', description: 'Initial setup.' },
            ],
          },
        ]}
      />
    </Container>
  );
}
`" />

---

### Hoverable and Clickable Items

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <Timeline
        hoverable
        items={[
          {
            title: 'Task',
            description: 'Click to view details.',
            href: '/task/123',
            onClick: () => alert('Task clicked!'),
          },
          {
            title: 'Review',
            description: 'Click to review.',
            onClick: () => alert('Review clicked!'),
          },
        ]}
      />
    </Container>
  );
}`" />

---

### Collapsible Timeline

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <Timeline
        collapsible
        collapsedItemsCount={2}
        collapseLabel='Show older'
        items={[
          { title: 'Recent Event 1', description: 'Most recent.' },
          { title: 'Recent Event 2', description: 'Second most recent.' },
          { title: 'Older Event 1', description: 'Older.' },
          { title: 'Older Event 2', description: 'Even older.' },
        ]}
      />
    </Container>
  );
}
`" />

---

### Manual Composition

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <Timeline>
        <Timeline.Heading>1 Aug, 2023</Timeline.Heading>
        <Timeline.Item
          title='Created task'
          icon='avatar'
          avatar='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100'
          user={{ name: 'James', avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100' }}
        />
        <Timeline.Item
          title='Bug fixed'
          icon='badge'
          initials='A'
        />
      </Timeline>
    </Container>
  );
}
`" />

---

## Props Table

### Timeline Props

| Prop                 | Type                                                      | Default      | Description                                                                                      |
|----------------------|-----------------------------------------------------------|--------------|--------------------------------------------------------------------------------------------------|
| `items`              | `Timeline.ItemData[]`                                     | —            | Array of timeline items (data-driven).                                                           |
| `grouped`            | `boolean`                                                 | `false`      | Enable grouping by headings (e.g., date).                                                        |
| `groups`             | `Timeline.Group[]`                                        | —            | Array of groups (each with heading and items).                                                   |
| `showTime`           | `boolean`                                                 | `false`      | Show time for each item.                                                                         |
| `timePosition`       | `"left"` \| `"right"`                                     | `"left"`     | Position of time display.                                                                        |
| `hoverable`          | `boolean`                                                 | `false`      | Make items hoverable/clickable.                                                                  |
| `collapsible`        | `boolean`                                                 | `false`      | Enable collapsible timeline (show only recent items).                                            |
| `collapsedItemsCount`| `number`                                                  | `3`          | Number of items to show before collapsing.                                                       |
| `collapseLabel`      | `string`                                                  | `"Show older"`| Label for collapse button.                                                                       |
| `lineColor`          | `string`                                                  | — (deprecated)| Line color (fixed in Preline).                                                                  |
| `dotColor`           | `string`                                                  | —            | Dot color for timeline items.                                                                    |
| `children`           | `JSX.Element` \| `JSX.Element[]`                          | —            | Manual composition of timeline (Timeline.Item, Timeline.Heading).                                |
| `className`          | `string`                                                  | —            | Additional CSS classes.                                                                          |
| `id`                 | `string`                                                  | auto-gen     | HTML id attribute.                                                                               |
| `style`              | `string`                                                  | —            | Inline styles.                                                                                   |

### Timeline.Item Props

| Prop         | Type                                                      | Default      | Description                                                                                      |
|--------------|-----------------------------------------------------------|--------------|--------------------------------------------------------------------------------------------------|
| `title`      | `string` \| `JSX.Element`                                 | — (required) | Title of the event.                                                                              |
| `description`| `string` \| `JSX.Element`                                 | —            | Description/details of the event.                                                                |
| `icon`       | `"dot"` \| `"avatar"` \| `"icon"` \| `"badge"`            | `"dot"`      | Icon type for the item.                                                                          |
| `iconContent`| `JSX.Element`                                             | —            | Custom icon content (for `"icon"` type).                                                         |
| `avatar`     | `string`                                                  | —            | Avatar image URL (for `"avatar"` type).                                                          |
| `initials`   | `string`                                                  | —            | Initials for badge/avatar.                                                                       |
| `user`       | `{ name: string; avatar?: string; initials?: string; onClick?: () => void }` | — | User info to display below the item.                                                             |
| `time`       | `string`                                                  | —            | Time string to display.                                                                          |
| `showTime`   | `boolean`                                                 | —            | Show time for this item.                                                                         |
| `timePosition`| `"left"` \| `"right"`                                    | `"left"`     | Position of time display for this item.                                                          |
| `href`       | `string`                                                  | —            | Link URL for clickable item.                                                                     |
| `onClick`    | `() => void`                                              | —            | Click handler for the item.                                                                      |
| `hoverable`  | `boolean`                                                 | `false`      | Make this item hoverable/clickable.                                                              |
| `isLast`     | `boolean`                                                 | `false`      | Marks the last item (deprecated, use CSS selector).                                              |
| `lineColor`  | `string`                                                  | — (deprecated)| Line color (fixed in Preline).                                                                  |
| `dotColor`   | `string`                                                  | —            | Dot color for this item.                                                                         |
| `className`  | `string`                                                  | —            | Additional CSS classes.                                                                          |
| `id`         | `string`                                                  | auto-gen     | HTML id attribute.                                                                               |
| `style`      | `string`                                                  | —            | Inline styles.                                                                                   |

### Timeline.Heading Props

| Prop      | Type                  | Default      | Description                 |
|-----------|-----------------------|--------------|-----------------------------|
| `children`| `string` \| `JSX.Element` | — (required) | Heading text or element.    |
| `className`| `string`             | —            | Additional CSS classes.     |
| `id`      | `string`              | auto-gen     | HTML id attribute.          |
| `style`   | `string`              | —            | Inline styles.              |

---

## Implementation Notes

- **Variants**:
  - `"dot"`: Default small dot.
  - `"avatar"`: User avatar image.
  - `"badge"`: Initials in a badge.
  - `"icon"`: Custom icon element.
- **Grouping**: Use `grouped` and `groups` for date or category grouping.
- **Hoverable/Clickable**: Use `hoverable`, `href`, and `onClick` for interactive items.
- **Collapsible**: Show only recent items, with a button to expand older events.
- **Manual Composition**: Use `<Timeline>`, `<Timeline.Heading>`, and `<Timeline.Item>` for full control.
- **User Info**: Display user name, avatar, or initials below the event.
- **Time Display**: Show time on left or right of each item.

---

## Accessibility

- Timeline uses semantic `<div>`, `<h3>`, and `<button>`/`<a>` elements.
- Interactive items are keyboard-accessible and use ARIA roles as appropriate.
- Labels and descriptions should be clear for screen readers.
- Ensure color contrast for icons, dots, and text.

---

## Best Practices

- Use Timeline for activity feeds, changelogs, project history, or event logs.
- Group items by date or category for clarity.
- Use avatars and badges for user attribution.
- Make items clickable for navigation or details.
- Use collapsible timelines for long histories.
- Prefer manual composition for complex layouts.

---

## Related

- [Pulse Framework](https://github.com/odyssee-software/pulse-framework)
- [Tailwind CSS Flex Utilities](https://tailwindcss.com/docs/flex)
- [ARIA: Accessible Timelines](https://www.w3.org/WAI/tutorials/page-structure/timelines/)

---
