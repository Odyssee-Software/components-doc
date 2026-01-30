---
title: Avatar
description: A versatile avatar component with images, initials, icons, status indicators, and badges
---

# Avatar

Display user avatars with support for images, initials, icons, status indicators, and various styling options. Built for Pulse Framework with full reactivity support.

## Import

```tsx
import { Avatar, Pulse } from '@odyssee-software/components';
```

## Basic Usage

<LiveCodeEditor :defaultCode="`<Avatar src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80' alt='User Avatar' />`" />

## With Initials

Display user initials when no image is available.

<LiveCodeEditor :defaultCode="`<div class='flex gap-3'>
  <Avatar initials='AC' name='Alice Cooper' />
  <Avatar initials='JD' name='John Doe' />
  <Avatar initials='MW' name='Mark Wanner' />
</div>`" />

## Sizes

Five size options are available: `xs`, `sm`, `md`, `lg`, and `xl`.

<LiveCodeEditor :defaultCode="`<div class='flex gap-3 items-end'>
  <Avatar 
    src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80' 
    size='xs' 
  />
  <Avatar 
    src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80' 
    size='sm' 
  />
  <Avatar 
    src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80' 
    size='md' 
  />
  <Avatar 
    src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80' 
    size='lg' 
  />
  <Avatar 
    src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80' 
    size='xl' 
  />
</div>`" />

## Rounded Styles

Control the border radius with the `rounded` prop.

<LiveCodeEditor :defaultCode="`<div class='flex gap-3'>
  <Avatar initials='AC' rounded='lg' />
  <Avatar initials='JD' rounded='full' />
</div>`" />

## Colors for Initials

When using initials, you can customize the color scheme with `color` and `colorVariant` props.

<LiveCodeEditor :defaultCode="`<div class='flex gap-3'>
  <Avatar initials='AC' color='primary' colorVariant='solid' />
  <Avatar initials='JD' color='success' colorVariant='soft' />
  <Avatar initials='MW' color='danger' colorVariant='outline' />
  <Avatar initials='SK' color='warning' colorVariant='solid' />
</div>`" />

## Status Indicator

Add status indicators to show online/offline state.

<LiveCodeEditor :defaultCode="`<div class='flex gap-3'>
  <Avatar 
    src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80'
    status='online'
  />
  <Avatar 
    src='https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80'
    status='offline'
  />
  <Avatar 
    src='https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80'
    status='away'
  />
  <Avatar 
    src='https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80'
    status='busy'
  />
</div>`" />

## Status Position

Control the position of the status indicator.

<LiveCodeEditor :defaultCode="`<div class='flex gap-3'>
  <Avatar 
    src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80'
    status='online'
    statusPosition='top'
  />
  <Avatar 
    src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80'
    status='online'
    statusPosition='bottom'
  />
</div>`" />

## Icon Placeholder

Display a default icon when no image or initials are provided.

<LiveCodeEditor :defaultCode="`<div class='flex gap-3'>
  <Avatar variant='icon' size='sm' />
  <Avatar variant='icon' size='md' />
  <Avatar variant='icon' size='lg' />
</div>`" />

## With Tooltip

Add tooltips to provide additional information.

```tsx
const avatarWithTooltip = (
  <Avatar
    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5"
    status="online"
    tooltip="Mark Wanner is online"
  />
);
```

## Clickable Avatar

Make avatars clickable for navigation or actions.

```tsx
const clickableAvatar = (
  <Avatar
    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5"
    href="/profile/user-123"
  />
);

// Or with onClick
const onClickAvatar = (
  <Avatar
    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5"
    onClick={() => console.log('Avatar clicked!')}
  />
);
```

## Reactive Status

Control status dynamically with Pulse signals.

```tsx
const userStatus = Pulse.signal<'online' | 'offline' | 'away' | 'busy'>('online');

// Simulate status changes
setInterval(() => {
  const statuses = ['online', 'offline', 'away', 'busy'] as const;
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
  userStatus(randomStatus);
}, 3000);

const reactiveAvatar = (
  <Avatar
    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5"
    status={userStatus}
  />
);
```



## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Image URL |
| `alt` | `string` | `"Avatar"` | Image alt text |
| `name` | `string` | - | User name (used to generate initials) |
| `initials` | `string` | - | Display initials instead of image |
| `variant` | `"image" \| "initials" \| "icon"` | Auto-detected | Avatar display variant |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | Avatar size |
| `rounded` | `true \| false \| "full" \| "lg"` | `"full"` | Border radius style |
| `color` | `"gray" \| "primary" \| "secondary" \| "success" \| "danger" \| "warning" \| "info" \| "white"` | `"gray"` | Color for initials variant |
| `colorVariant` | `"solid" \| "soft" \| "outline"` | `"solid"` | Color style for initials |
| `status` | `"none" \| "online" \| "offline" \| "away" \| "busy"` | `"none"` | Status indicator |
| `statusPosition` | `"top" \| "bottom"` | `"bottom"` | Status indicator position |
| `statusColor` | `string` | - | Custom status indicator color |
| `tooltip` | `string` | - | Tooltip text on hover |
| `href` | `string` | - | Make avatar a link |
| `onClick` | `(event: Event) => void` | - | Click event handler |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | Auto-generated | HTML id attribute |

## Accessibility

The Avatar component follows accessibility best practices:

- ✅ Proper `alt` attributes for images
- ✅ Semantic HTML structure
- ✅ Keyboard navigation support for clickable avatars
- ✅ ARIA labels for status indicators
- ✅ Tooltips for additional context
- ✅ Sufficient color contrast

### ARIA Attributes

```tsx
const accessibleAvatar = (
  <Avatar
    src="..."
    alt="John Doe profile picture"
    status="online"
    aria-label="John Doe, currently online"
  />
);
```

## Best Practices

### ✅ Do

- Always provide meaningful `alt` text for images
- Use appropriate sizes for the context
- Show status indicators for real-time communication apps
- Use initials as fallback when images fail to load
- Provide tooltips for additional context

```tsx
// Good: Proper alt text and fallback
const goodAvatar = (
  <Avatar
    src="https://..."
    alt="John Doe"
    initials="JD"
    name="John Doe"
  />
);
```

### ❌ Don't

- Don't use very large images (optimize for size)
- Don't forget alt text
- Don't use avatars for decorative purposes without proper ARIA
- Don't make avatars too small to recognize

```tsx
// Bad: No alt text, no fallback
const badAvatar = (
  <Avatar src="https://..." />
);

// Better: With proper attributes
const betterAvatar = (
  <Avatar
    src="https://..."
    alt="User profile picture"
    initials="JD"
  />
);
```

## Use Cases

### User Lists

```tsx
const users = [
  { name: 'Alice Cooper', avatar: '...', status: 'online' },
  { name: 'Bob Smith', avatar: '...', status: 'away' },
  { name: 'Charlie Brown', initials: 'CB', status: 'offline' }
];

const userList = (
  <div class="space-y-3">
    {users.map(user => (
      <div class="flex items-center gap-3">
        <Avatar
          src={user.avatar}
          initials={user.initials}
          name={user.name}
          status={user.status}
          size="sm"
        />
        <span>{user.name}</span>
      </div>
    ))}
  </div>
);
```

### Comment Section

```tsx
const Comment = ({ author, text, timestamp }) => (
  <div class="flex gap-3">
    <Avatar
      src={author.avatar}
      alt={author.name}
      size="md"
    />
    <div class="flex-1">
      <div class="flex items-center gap-2">
        <span class="font-semibold">{author.name}</span>
        <span class="text-xs text-gray-500">{timestamp}</span>
      </div>
      <p class="mt-1 text-gray-700">{text}</p>
    </div>
  </div>
);
```

### Team Members

```tsx
const teamMembers = (
  <div class="flex -space-x-2">
    <Avatar
      src="..."
      size="md"
      tooltip="Alice Cooper"
    />
    <Avatar
      src="..."
      size="md"
      tooltip="Bob Smith"
    />
    <Avatar
      src="..."
      size="md"
      tooltip="Charlie Brown"
    />
    <Avatar
      initials="+5"
      color="gray"
      size="md"
      tooltip="5 more members"
    />
  </div>
);
```

## Styling & Theming

All avatar styles use Tailwind CSS classes and support dark mode automatically.

### Custom Styling

```tsx
const customAvatar = (
  <Avatar
    src="..."
    className="ring-4 ring-blue-500 ring-offset-2"
  />
);
```

## TypeScript

Full TypeScript support with complete type definitions:

```tsx
import type { AvatarProps } from '@odyssee-software/components';

const props: AvatarProps = {
  src: 'https://...',
  alt: 'User Avatar',
  size: 'md',
  status: 'online',
  onClick: (e: Event) => {
    console.log('Clicked!');
  }
};

const avatar = <Avatar {...props} />;
```

## Related Components

- [AvatarGroup](/components/avatar-group) - Display multiple avatars together
- [Badge](/components/badge) - For status indicators
- [Tooltip](/components/tooltip) - For additional information

---

**Version**: 1.0.0  
**Last Updated**: January 2025
