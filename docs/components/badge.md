---
title: Badge
description: A small badge/label/chip component with multiple variants, colors, and states
---

# Badge

Small count and labeling components used for displaying status, categories, notifications, and other metadata.

## Import

```tsx
import { Badge, Pulse } from '@odyssee-software/components';
```

## Basic Usage

<LiveCodeEditor :defaultCode="`<Badge>New</Badge>`" />

## Variants

The Badge component supports three variants: `solid`, `soft`, and `outline`.

<LiveCodeEditor :defaultCode="`<div class='flex gap-2'>
  <Badge variant='solid' color='primary'>Solid</Badge>
  <Badge variant='soft' color='success'>Soft</Badge>
  <Badge variant='outline' color='danger'>Outline</Badge>
</div>`" />

## Colors

Badges support multiple color schemes: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, and `dark`.

<LiveCodeEditor :defaultCode="`<div class='flex gap-2 flex-wrap'>
  <Badge color='primary'>Primary</Badge>
  <Badge color='secondary'>Secondary</Badge>
  <Badge color='success'>Success</Badge>
  <Badge color='danger'>Danger</Badge>
  <Badge color='warning'>Warning</Badge>
  <Badge color='info'>Info</Badge>
</div>`" />

## Sizes

Three size options are available: `sm`, `md`, and `lg`.

<LiveCodeEditor :defaultCode="`<div class='flex gap-2 items-center'>
  <Badge size='sm'>Small</Badge>
  <Badge size='md'>Medium</Badge>
  <Badge size='lg'>Large</Badge>
</div>`" />

## With Icon

Add icons to badges for additional context.

<LiveCodeEditor :defaultCode="`<div class='flex gap-2'>
  <Badge icon='✓' color='success'>Verified</Badge>
  <Badge icon='⚠️' color='warning'>Warning</Badge>
  <Badge icon='⭐' color='primary'>Featured</Badge>
</div>`" />

## With Dot Indicator

Show a status dot before the text.

<LiveCodeEditor :defaultCode="`<div class='flex gap-2'>
  <Badge dot={true} color='success'>Active</Badge>
  <Badge dot={true} color='danger'>Offline</Badge>
  <Badge dot={true} color='warning'>Away</Badge>
</div>`" />

## Rounded Styles

Control the border radius with the `rounded` prop.

<LiveCodeEditor :defaultCode="`<div class='flex gap-2'>
  <Badge rounded='sm'>Square</Badge>
  <Badge rounded='md'>Rounded</Badge>
  <Badge rounded='lg'>More Rounded</Badge>
  <Badge rounded='full'>Pill</Badge>
</div>`" />

## Removable Badges

Make badges removable with a close button.

```tsx
const tags = Pulse.signal(['JavaScript', 'TypeScript', 'React']);

const removeTag = (tag: string) => {
  tags(tags().filter(t => t !== tag));
};

const removableBadges = (
  <div class="flex gap-2">
    {tags().map(tag => (
      <Badge
        variant="soft"
        color="primary"
        removable={true}
        onRemove={() => removeTag(tag)}
      >
        {tag}
      </Badge>
    ))}
  </div>
);
```

## Notification Badge

Use badges as notification indicators.

```tsx
const notificationCount = Pulse.signal(5);

const notificationBadge = (
  <div class="relative inline-block">
    <button class="p-2 bg-gray-100 rounded-lg">
      <span>🔔</span>
    </button>
    <Badge
      variant="solid"
      color="danger"
      rounded="full"
      size="sm"
      className="absolute -top-1 -right-1"
    >
      {notificationCount()}
    </Badge>
  </div>
);
```

## Status Badges

Display status information.

<LiveCodeEditor :defaultCode="`<div class='space-y-2'>
  <div class='flex items-center gap-2'>
    <Badge dot={true} color='success'>Active</Badge>
    <span>User is currently online</span>
  </div>
  <div class='flex items-center gap-2'>
    <Badge dot={true} color='warning'>Away</Badge>
    <span>User is away from keyboard</span>
  </div>
  <div class='flex items-center gap-2'>
    <Badge dot={true} color='danger'>Offline</Badge>
    <span>User is offline</span>
  </div>
</div>`" />

## Category Tags

Use badges as category tags.

```tsx
const categories = ['JavaScript', 'Web Development', 'Tutorial'];

const categoryTags = (
  <div class="flex flex-wrap gap-2">
    {categories.map(category => (
      <Badge variant="soft" color="primary">
        {category}
      </Badge>
    ))}
  </div>
);
```

## Complete Example

Here's a comprehensive example with multiple features:

```tsx
import { Badge, Pulse } from '@odyssee-software/components';

const ArticleCard = () => {
  const tags = Pulse.signal(['JavaScript', 'TypeScript', 'Pulse Framework']);
  const views = Pulse.signal(1542);
  const isNew = Pulse.signal(true);
  
  return (
    <div class="p-6 bg-white rounded-lg shadow">
      {/* Header with status badges */}
      <div class="flex items-center gap-2 mb-3">
        {isNew() && (
          <Badge variant="solid" color="success" size="sm">
            New
          </Badge>
        )}
        <Badge dot={true} color="success" size="sm">
          Published
        </Badge>
        <Badge variant="outline" color="info" size="sm">
          {views()} views
        </Badge>
      </div>

      {/* Title */}
      <h3 class="text-xl font-bold mb-2">
        Getting Started with Pulse Framework
      </h3>

      {/* Tags */}
      <div class="flex flex-wrap gap-2 mt-4">
        {tags().map(tag => (
          <Badge
            variant="soft"
            color="primary"
            size="sm"
            removable={true}
            onRemove={() => {
              tags(tags().filter(t => t !== tag));
            }}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"solid" \| "soft" \| "outline"` | `"soft"` | Badge variant style |
| `color` | `"primary" \| "secondary" \| "success" \| "danger" \| "warning" \| "info" \| "light" \| "dark"` | `"primary"` | Badge color scheme |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Badge size |
| `icon` | `string` | - | Icon to display (emoji or text) |
| `dot` | `boolean` | `false` | Show status dot before text |
| `rounded` | `"sm" \| "md" \| "lg" \| "full"` | `"md"` | Border radius style |
| `removable` | `boolean` | `false` | Show remove button |
| `onRemove` | `() => void` | - | Remove callback |
| `children` | `string \| HTMLElement` | - | Badge content |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | - | HTML id attribute |

## Accessibility

The Badge component follows accessibility best practices:

- ✅ Semantic HTML with proper role when needed
- ✅ Remove button has `aria-label="Remove"`
- ✅ Sufficient color contrast ratios
- ✅ Screen reader friendly content
- ✅ Keyboard navigation for removable badges

## Best Practices

### ✅ Do

- Use appropriate colors for context
- Keep text short and concise
- Use dots for status indicators
- Group related badges together
- Use consistent sizing within the same context

```tsx
// Good: Clear status indication
const statusBadge = (
  <Badge dot={true} color="success">
    Active
  </Badge>
);
```

### ❌ Don't

- Don't use too many badges in one place
- Don't use long text in badges
- Don't mix too many variants
- Don't forget to handle remove callbacks

```tsx
// Bad: Too much text
const badBadge = (
  <Badge>
    This is way too much text for a badge component
  </Badge>
);

// Better: Concise text
const betterBadge = (
  <Badge>New Feature</Badge>
);
```

## Use Cases

### User Profile

```tsx
const userBadges = (
  <div class="flex gap-2">
    <Badge variant="solid" color="primary" icon="⭐">
      Pro Member
    </Badge>
    <Badge variant="soft" color="success" icon="✓">
      Verified
    </Badge>
    <Badge variant="outline" color="info">
      Moderator
    </Badge>
  </div>
);
```

### Product Tags

```tsx
const productBadges = (
  <div class="flex gap-2">
    <Badge variant="solid" color="danger">
      Sale
    </Badge>
    <Badge variant="soft" color="success">
      In Stock
    </Badge>
    <Badge variant="outline" color="warning">
      Limited Edition
    </Badge>
  </div>
);
```

### Task Status

```tsx
const taskBadges = (
  <div class="space-y-2">
    <Badge dot={true} color="info">To Do</Badge>
    <Badge dot={true} color="warning">In Progress</Badge>
    <Badge dot={true} color="success">Completed</Badge>
  </div>
);
```

## Styling & Theming

All badge styles use Tailwind CSS classes and support dark mode automatically.

### Custom Styling

```tsx
const customBadge = (
  <Badge 
    className="font-bold uppercase tracking-wider"
    color="primary"
  >
    Custom
  </Badge>
);
```

## TypeScript

Full TypeScript support with complete type definitions:

```tsx
import type { BadgeProps } from '@odyssee-software/components';

const props: BadgeProps = {
  variant: 'solid',
  color: 'primary',
  size: 'md',
  children: 'TypeScript'
};

const badge = <Badge {...props} />;
```

## Related Components

- [Button](/components/button) - For actionable elements
- [Alert](/components/alert) - For notification messages
- [Toggle](/components/toggle) - For status switches

---

**Version**: 1.0.0  
**Last Updated**: January 2025
