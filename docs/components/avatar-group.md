---
title: AvatarGroup
description: Display multiple avatars in a stack or grid layout with overflow indicators
---

# AvatarGroup

Display collections of user avatars in elegant stack or grid layouts. Perfect for showing team members, contributors, or participants with automatic overflow handling. Built for Pulse Framework with full reactivity support.

## Import

```ts
import { AvatarGroup, StackAvatarGroup, GridAvatarGroup, type AvatarGroupItem } from '@odyssee-software/components';
```

## Basic Usage

<LiveCodeEditor :defaultCode="`<AvatarGroup avatars={[
  { src: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100', alt: 'User 1', name: 'Chris Lynch' },
  { src: 'https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?w=100', alt: 'User 2', name: 'Maria Guan' },
  { src: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=100', alt: 'User 3', name: 'Amil Evara' },
  { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100', alt: 'User 4', name: 'Bob Johnson' }
]} />`" />

## Layouts

### Stack Layout

Avatars overlap each other for a compact display.

<LiveCodeEditor :defaultCode="`<StackAvatarGroup avatars={[
  { src: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100', alt: 'User 1' },
  { src: 'https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?w=100', alt: 'User 2' },
  { src: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=100', alt: 'User 3' },
  { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100', alt: 'User 4' },
  { src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100', alt: 'User 5' }
]} size='md' />`" />

### Grid Layout

Avatars displayed in a grid with spacing.

<LiveCodeEditor :defaultCode="`<GridAvatarGroup avatars={[
  { src: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100', alt: 'User 1' },
  { src: 'https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?w=100', alt: 'User 2' },
  { src: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=100', alt: 'User 3' },
  { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100', alt: 'User 4' },
  { src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100', alt: 'User 5' }
]} spacing='md' size='md' />`" />

## Sizes

Available sizes: `xs`, `sm`, `md`, `lg`, `xl`.

<LiveCodeEditor :defaultCode="`<div class='space-y-4'>
  <div>
    <p class='text-sm text-gray-600 mb-2'>Extra Small</p>
    <AvatarGroup avatars={[
      { src: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100', alt: 'User 1' },
      { src: 'https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?w=100', alt: 'User 2' },
      { src: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=100', alt: 'User 3' }
    ]} size='xs' />
  </div>
  <div>
    <p class='text-sm text-gray-600 mb-2'>Small</p>
    <AvatarGroup avatars={[
      { src: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100', alt: 'User 1' },
      { src: 'https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?w=100', alt: 'User 2' },
      { src: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=100', alt: 'User 3' }
    ]} size='sm' />
  </div>
  <div>
    <p class='text-sm text-gray-600 mb-2'>Medium (default)</p>
    <AvatarGroup avatars={[
      { src: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100', alt: 'User 1' },
      { src: 'https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?w=100', alt: 'User 2' },
      { src: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=100', alt: 'User 3' }
    ]} size='md' />
  </div>
  <div>
    <p class='text-sm text-gray-600 mb-2'>Large</p>
    <AvatarGroup avatars={[
      { src: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100', alt: 'User 1' },
      { src: 'https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?w=100', alt: 'User 2' },
      { src: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=100', alt: 'User 3' }
    ]} size='lg' />
  </div>
  <div>
    <p class='text-sm text-gray-600 mb-2'>Extra Large</p>
    <AvatarGroup avatars={[
      { src: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100', alt: 'User 1' },
      { src: 'https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?w=100', alt: 'User 2' },
      { src: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=100', alt: 'User 3' }
    ]} size='xl' />
  </div>
</div>`" />

## Maximum Display with Counter

Limit the number of visible avatars and show a counter for remaining ones.

<LiveCodeEditor :defaultCode="`<div class='space-y-4'>
  <div>
    <p class='text-sm text-gray-600 mb-2'>Show max 4 avatars</p>
    <AvatarGroup avatars={[
      { src: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100', alt: 'User 1' },
      { src: 'https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?w=100', alt: 'User 2' },
      { src: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=100', alt: 'User 3' },
      { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100', alt: 'User 4' },
      { src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100', alt: 'User 5' },
      { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100', alt: 'User 6' },
      { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100', alt: 'User 7' },
      { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100', alt: 'User 8' }
    ]} max={4} showCounter={true} />
  </div>
  <div>
    <p class='text-sm text-gray-600 mb-2'>Show max 5 avatars</p>
    <AvatarGroup avatars={[
      { src: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100', alt: 'User 1' },
      { src: 'https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?w=100', alt: 'User 2' },
      { src: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=100', alt: 'User 3' },
      { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100', alt: 'User 4' },
      { src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100', alt: 'User 5' },
      { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100', alt: 'User 6' },
      { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100', alt: 'User 7' },
      { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100', alt: 'User 8' }
    ]} max={5} showCounter={true} />
  </div>
</div>`" />

## Ring Colors

Customize the border/ring around avatars.

<LiveCodeEditor :defaultCode="`<div class='space-y-4'>
  <div class='bg-white p-4 rounded'>
    <p class='text-sm text-gray-600 mb-2'>White Ring (default)</p>
    <AvatarGroup avatars={[
      { src: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100', alt: 'User 1' },
      { src: 'https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?w=100', alt: 'User 2' },
      { src: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=100', alt: 'User 3' }
    ]} ringColor='white' />
  </div>
  <div class='bg-gray-100 p-4 rounded'>
    <p class='text-sm text-gray-600 mb-2'>Gray Ring</p>
    <AvatarGroup avatars={[
      { src: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100', alt: 'User 1' },
      { src: 'https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?w=100', alt: 'User 2' },
      { src: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=100', alt: 'User 3' }
    ]} ringColor='gray' />
  </div>
  <div class='bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded'>
    <p class='text-sm text-gray-600 mb-2'>Transparent Ring</p>
    <AvatarGroup avatars={[
      { src: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100', alt: 'User 1' },
      { src: 'https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?w=100', alt: 'User 2' },
      { src: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=100', alt: 'User 3' }
    ]} ringColor='transparent' />
  </div>
</div>`" />

## Grid Spacing

Control spacing between avatars in grid layout.

<LiveCodeEditor :defaultCode="`<div class='space-y-4'>
  <div>
    <p class='text-sm text-gray-600 mb-2'>No Spacing</p>
    <GridAvatarGroup avatars={[
      { src: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100', alt: 'User 1' },
      { src: 'https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?w=100', alt: 'User 2' },
      { src: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=100', alt: 'User 3' },
      { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100', alt: 'User 4' }
    ]} spacing='none' />
  </div>
  <div>
    <p class='text-sm text-gray-600 mb-2'>Small Spacing</p>
    <GridAvatarGroup avatars={[
      { src: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100', alt: 'User 1' },
      { src: 'https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?w=100', alt: 'User 2' },
      { src: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=100', alt: 'User 3' },
      { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100', alt: 'User 4' }
    ]} spacing='sm' />
  </div>
  <div>
    <p class='text-sm text-gray-600 mb-2'>Medium Spacing</p>
    <GridAvatarGroup avatars={[
      { src: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100', alt: 'User 1' },
      { src: 'https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?w=100', alt: 'User 2' },
      { src: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=100', alt: 'User 3' },
      { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100', alt: 'User 4' }
    ]} spacing='md' />
  </div>
  <div>
    <p class='text-sm text-gray-600 mb-2'>Large Spacing</p>
    <GridAvatarGroup avatars={[
      { src: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100', alt: 'User 1' },
      { src: 'https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?w=100', alt: 'User 2' },
      { src: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=100', alt: 'User 3' },
      { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100', alt: 'User 4' }
    ]} spacing='lg' />
  </div>
</div>`" />

## With Tooltips

Enable tooltips to show names on hover.

<LiveCodeEditor :defaultCode="`<AvatarGroup avatars={[
  { src: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100', alt: 'User 1', tooltip: 'Chris Lynch' },
  { src: 'https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?w=100', alt: 'User 2', tooltip: 'Maria Guan' },
  { src: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=100', alt: 'User 3', tooltip: 'Amil Evara' },
  { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100', alt: 'User 4', tooltip: 'Bob Johnson' }
]} enableTooltips={true} hoverEffect={true} />`" />

## With Dropdown

Show remaining users in a dropdown menu.

```tsx
const avatars = [
  { src: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100', alt: 'User 1' },
  { src: 'https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?w=100', alt: 'User 2' },
  { src: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=100', alt: 'User 3' },
  { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100', alt: 'User 4' },
  { src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100', alt: 'User 5' }
];

const dropdownItems = [
  { name: 'Bob Johnson' },
  { name: 'Sarah Williams' },
  { name: 'Michael Brown' }
];

const groupWithDropdown = (
  <AvatarGroup
    avatars={avatars}
    max={3}
    dropdownItems={dropdownItems}
  />
);
```

## Reactive State

Dynamically update avatar groups with Pulse signals.

```tsx
import { AvatarGroup, Button, Pulse } from '@odyssee-software/components';
import type { AvatarGroupItem } from '@odyssee-software/components';

const TeamMembers = () => {
  const allMembers: AvatarGroupItem[] = [
    { src: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100', name: 'Chris Lynch' },
    { src: 'https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?w=100', name: 'Maria Guan' },
    { src: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=100', name: 'Amil Evara' },
    { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100', name: 'Bob Johnson' },
    { src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100', name: 'Sarah Williams' }
  ];

  const displayedMembers = Pulse.signal<AvatarGroupItem[]>(allMembers.slice(0, 2));
  const maxDisplay = Pulse.signal(3);

  const addMember = () => {
    const current = displayedMembers();
    if (current.length < allMembers.length) {
      displayedMembers([...current, allMembers[current.length]]);
    }
  };

  const removeMember = () => {
    const current = displayedMembers();
    if (current.length > 1) {
      displayedMembers(current.slice(0, -1));
    }
  };

  const toggleMax = () => {
    maxDisplay(maxDisplay() === 3 ? 5 : 3);
  };

  return (
    <div class="space-y-4">
      <AvatarGroup
        avatars={displayedMembers}
        max={maxDisplay}
        showCounter={true}
        enableTooltips={true}
      />
      <div class="flex gap-2">
        <Button onClick={addMember} size="sm">Add Member</Button>
        <Button onClick={removeMember} variant="outline" size="sm">Remove Member</Button>
        <Button onClick={toggleMax} variant="soft" size="sm">
          Toggle Max ({maxDisplay()})
        </Button>
      </div>
    </div>
  );
};
```

## Complete Example: Team Dashboard

A comprehensive example showing team members with various interactions.

```tsx
import { AvatarGroup, Card, Badge, Button, Pulse } from '@odyssee-software/components';
import type { AvatarGroupItem } from '@odyssee-software/components';

const TeamDashboard = () => {
  const activeMembers: AvatarGroupItem[] = [
    { 
      src: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100',
      name: 'Chris Lynch',
      tooltip: 'Chris Lynch - Lead Developer',
      href: '/profile/chris'
    },
    { 
      src: 'https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?w=100',
      name: 'Maria Guan',
      tooltip: 'Maria Guan - Product Manager',
      href: '/profile/maria'
    },
    { 
      src: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=100',
      name: 'Amil Evara',
      tooltip: 'Amil Evara - Designer',
      href: '/profile/amil'
    }
  ];

  const allTeamMembers: AvatarGroupItem[] = [
    ...activeMembers,
    { 
      src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100',
      name: 'Bob Johnson'
    },
    { 
      src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      name: 'Sarah Williams'
    }
  ];

  const onlineMembers = Pulse.signal(3);

  Pulse.effect(() => {
    // Simulate online status changes
    const interval = setInterval(() => {
      onlineMembers(Math.floor(Math.random() * 5) + 1);
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <div class="space-y-6">
      {/* Active Team Section */}
      <Card>
        <div class="flex items-center justify-between mb-4">
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Active Team
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {onlineMembers()} members online
            </p>
          </div>
          <Badge variant="soft" color="success">Active</Badge>
        </div>

        <AvatarGroup
          avatars={activeMembers}
          size="lg"
          enableTooltips={true}
          hoverEffect={true}
          ringColor="white"
        />
      </Card>

      {/* All Team Members */}
      <Card>
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Team Members
          </h3>
          <Button variant="outline" size="sm">View All</Button>
        </div>

        <div class="space-y-4">
          <div>
            <p class="text-sm text-gray-600 mb-2">Stack Layout</p>
            <AvatarGroup
              avatars={allTeamMembers}
              max={4}
              showCounter={true}
            />
          </div>

          <div>
            <p class="text-sm text-gray-600 mb-2">Grid Layout</p>
            <GridAvatarGroup
              avatars={allTeamMembers}
              spacing="md"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `avatars` | `AvatarGroupItem[]` | **Required** | Array of avatar items to display |
| `layout` | `"stack" \| "grid"` | `"stack"` | Layout style for avatars |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | Size of avatars |
| `max` | `number` | - | Maximum number of avatars to show |
| `showCounter` | `boolean` | `true` | Show counter for remaining avatars |
| `counterText` | `string` | - | Custom text for counter (e.g., "9+") |
| `spacing` | `"none" \| "sm" \| "md" \| "lg"` | `"none"` | Spacing between avatars (grid layout) |
| `ringColor` | `"white" \| "gray" \| "transparent"` | `"white"` | Color of avatar border ring |
| `rounded` | `boolean \| "full" \| "lg"` | `"full"` | Border radius style |
| `enableTooltips` | `boolean` | `false` | Enable tooltips on hover |
| `dropdownItems` | `Array<{ name, href?, onClick? }>` | - | Items to show in dropdown menu |
| `hoverEffect` | `boolean` | `false` | Add hover elevation effect |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | Auto-generated | HTML id attribute |
| `style` | `string \| object` | - | Inline styles |

### AvatarGroupItem Interface

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `src` | `string` | - | Image source URL |
| `alt` | `string` | - | Alternative text for image |
| `name` | `string` | - | User name |
| `initials` | `string` | - | User initials (for fallback) |
| `tooltip` | `string` | - | Tooltip text on hover |
| `href` | `string` | - | Link URL for avatar |
| `onClick` | `() => void` | - | Click handler function |

## Accessibility

The AvatarGroup component follows accessibility best practices:

- ✅ Proper `alt` attributes on all images
- ✅ Semantic HTML structure
- ✅ ARIA attributes for dropdowns and tooltips
- ✅ Keyboard navigation support for interactive elements
- ✅ Focus indicators on clickable avatars
- ✅ Screen reader friendly counter text

```tsx
// Provide meaningful alt text
const accessibleAvatars: AvatarGroupItem[] = [
  {
    src: 'avatar1.jpg',
    alt: 'Chris Lynch, Lead Developer',
    tooltip: 'Chris Lynch'
  },
  {
    src: 'avatar2.jpg',
    alt: 'Maria Guan, Product Manager',
    tooltip: 'Maria Guan'
  }
];

<AvatarGroup avatars={accessibleAvatars} enableTooltips={true} />
```

## Best Practices

### ✅ Do

- Use for showing multiple users or participants
- Provide meaningful alt text and tooltips
- Limit visible avatars with `max` prop
- Use appropriate sizes for context
- Enable hover effects for interactive groups

```tsx
// Good: Clear context and proper sizing
const ProjectTeam = () => {
  const team: AvatarGroupItem[] = [
    {
      src: 'chris.jpg',
      alt: 'Chris Lynch',
      tooltip: 'Chris Lynch - Lead Dev',
      href: '/team/chris'
    },
    // ... more team members
  ];

  return (
    <div>
      <h3>Project Team (5 members)</h3>
      <AvatarGroup
        avatars={team}
        max={4}
        showCounter={true}
        enableTooltips={true}
      />
    </div>
  );
};
```

### ❌ Don't

- Don't show too many avatars at once
- Don't use without alt text
- Don't mix stack and grid layouts randomly
- Don't use overly large sizes in stack layout
- Don't forget to handle missing images

```tsx
// Bad: Too many avatars, no limits
const badExample = (
  <AvatarGroup
    avatars={arrayOf100Avatars}
    // Missing max prop!
    // Will render all 100 avatars
  />
);

// Better: Use max and counter
const betterExample = (
  <AvatarGroup avatars={arrayOf100Avatars} max={5} showCounter={true} />
);
```

## Use Cases

### Team Members Widget

```tsx
const TeamWidget = () => {
  const team: AvatarGroupItem[] = [
    { src: 'member1.jpg', tooltip: 'Team Member 1' },
    { src: 'member2.jpg', tooltip: 'Team Member 2' },
    { src: 'member3.jpg', tooltip: 'Team Member 3' },
    { src: 'member4.jpg', tooltip: 'Team Member 4' },
    { src: 'member5.jpg', tooltip: 'Team Member 5' }
  ];

  return (
    <Card size="sm">
      <div class="flex items-center justify-between">
        <div>
          <h4 class="font-medium">Team Members</h4>
          <p class="text-sm text-gray-600">{team.length} total</p>
        </div>
        <AvatarGroup
          avatars={team}
          max={3}
          enableTooltips={true}
          size="sm"
        />
      </div>
    </Card>
  );
};
```

### Document Collaborators

```tsx
const DocumentHeader = () => {
  const collaborators: AvatarGroupItem[] = [
    { 
      src: 'user1.jpg',
      name: 'You',
      tooltip: 'You (editing)'
    },
    { 
      src: 'user2.jpg',
      name: 'Sarah',
      tooltip: 'Sarah Williams (viewing)'
    },
    { 
      src: 'user3.jpg',
      name: 'Mike',
      tooltip: 'Mike Chen (commenting)'
    }
  ];

  return (
    <div class="flex items-center justify-between p-4 border-b">
      <h1>Project Proposal.docx</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-gray-600">3 collaborators</span>
        <AvatarGroup
          avatars={collaborators}
          enableTooltips={true}
          hoverEffect={true}
          size="sm"
        />
      </div>
    </div>
  );
};
```

### Event Attendees

```tsx
const EventCard = ({ event }) => {
  const attendees: AvatarGroupItem[] = event.attendees.map(user => ({
    src: user.avatar,
    name: user.name,
    tooltip: user.name
  }));

  const additionalAttendees = event.attendees.length > 5
    ? event.attendees.slice(5).map(u => ({ name: u.name }))
    : [];

  return (
    <Card>
      <h3 class="text-lg font-semibold mb-2">{event.title}</h3>
      <p class="text-gray-600 mb-4">{event.date}</p>
      
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <AvatarGroup
            avatars={attendees}
            max={5}
            showCounter={true}
            dropdownItems={additionalAttendees}
            enableTooltips={true}
          />
          <span class="text-sm text-gray-600">
            {event.attendees.length} attending
          </span>
        </div>
        <Button variant="outline" size="sm">RSVP</Button>
      </div>
    </Card>
  );
};
```

## Styling & Theming

All AvatarGroup styles use Tailwind CSS and support dark mode automatically.

### Custom Styling

```tsx
const customAvatarGroup = (
  <AvatarGroup
    avatars={avatars}
    className="my-custom-class"
    // Avatars automatically adapt to dark mode
  />
);

// Custom ring colors for branded look
const brandedGroup = (
  <div class="bg-blue-50 p-4 rounded-lg">
    <AvatarGroup
      avatars={avatars}
      ringColor="transparent"
      className="custom-spacing"
    />
  </div>
);
```

### Dark Mode

```tsx
// Dark mode support is automatic
const darkModeGroup = (
  <AvatarGroup
    avatars={avatars}
    // Automatically uses:
    // - dark:ring-neutral-900 for rings
    // - dark:bg-neutral-600 for counter
    // - dark:text-white for text
  />
);
```

## TypeScript

Full TypeScript support with complete type definitions.

```tsx
import type { AvatarGroupProps, AvatarGroupItem } from '@odyssee-software/components';

// Type-safe avatar items
const members: AvatarGroupItem[] = [
  {
    src: 'avatar1.jpg',
    alt: 'User 1',
    name: 'Chris Lynch',
    tooltip: 'Chris Lynch',
    href: '/profile/chris',
    onClick: () => console.log('Clicked')
  },
  {
    src: 'avatar2.jpg',
    alt: 'User 2',
    name: 'Maria Guan'
  }
];

// Type-safe props
const props: AvatarGroupProps = {
  avatars: members,
  layout: 'stack',
  size: 'md',
  max: 5,
  showCounter: true,
  enableTooltips: true,
  hoverEffect: true,
  className: 'custom-class'
};

const group = <AvatarGroup {...props} />;

// Type checking for dropdown items
const dropdownItems: Array<{ name: string; href?: string; onClick?: () => void }> = [
  { name: 'User 1', href: '/user/1' },
  { name: 'User 2', onClick: () => alert('Clicked') }
];

const groupWithDropdown = (
  <AvatarGroup avatars={members} max={3} dropdownItems={dropdownItems} />
);
```

## Related Components

- [Avatar](/components/avatar) - Single avatar component
- [Badge](/components/badge) - Status indicators
- [Card](/components/card) - Container for avatar groups

---

**Version**: 1.0.0  
**Last Updated**: January 2025
