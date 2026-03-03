---
title: Tooltip
description: A lightweight tooltip component that displays helpful information on hover or focus
---

# Tooltip

Display contextual information on hover or focus. Perfect for providing hints, descriptions, and additional context without cluttering the interface. Built for Pulse Framework with full reactivity support.

## Import

```tsx
import { Tooltip, Pulse } from '@odyssee-software/components';
```

## Basic Usage

<LiveCodeEditor :defaultCode="`<Tooltip content='This is a tooltip'>
  <Button>Hover me</Button>
</Tooltip>`" />

## Placements

Control tooltip positioning with the `placement` prop.

<LiveCodeEditor :defaultCode="`<div class='flex gap-4 justify-center items-center p-8'>
  <Tooltip content='Tooltip on top' placement='top'>
    <Button>Top</Button>
  </Tooltip>
  <Tooltip content='Tooltip on right' placement='right'>
    <Button>Right</Button>
  </Tooltip>
  <Tooltip content='Tooltip on bottom' placement='bottom'>
    <Button>Bottom</Button>
  </Tooltip>
  <Tooltip content='Tooltip on left' placement='left'>
    <Button>Left</Button>
  </Tooltip>
</div>`" />

## Auto Positioning

Let the tooltip automatically find the best position.

<LiveCodeEditor :defaultCode="`<Tooltip content='Auto positioned tooltip' placement='auto'>
  <Button>Auto Position</Button>
</Tooltip>`" />

## Variants

The Tooltip component supports two variants: `dark` and `light`.

<LiveCodeEditor :defaultCode="`<div class='flex gap-4'>
  <Tooltip content='Dark variant tooltip' variant='dark'>
    <Button variant='outline'>Dark Tooltip</Button>
  </Tooltip>
  <Tooltip content='Light variant tooltip' variant='light'>
    <Button variant='outline'>Light Tooltip</Button>
  </Tooltip>
</div>`" />

## With Icons

Add tooltips to icon buttons for better UX.

<LiveCodeEditor :defaultCode="`<div class='flex gap-2'>
  <Tooltip content='Delete'>
    <Button variant='ghost' size='sm' icon='🗑️' />
  </Tooltip>
  <Tooltip content='Edit'>
    <Button variant='ghost' size='sm' icon='✏️' />
  </Tooltip>
  <Tooltip content='Share'>
    <Button variant='ghost' size='sm' icon='📤' />
  </Tooltip>
  <Tooltip content='Favorite'>
    <Button variant='ghost' size='sm' icon='⭐' />
  </Tooltip>
</div>`" />

## Click Trigger

Show tooltip on click instead of hover.

```tsx
const clickTooltip = (
  <Tooltip content="Click triggered tooltip" trigger="click">
    <Button>Click me</Button>
  </Tooltip>
);
```

## With Delays

Control show and hide delays for better UX.

```tsx
const delayedTooltip = (
  <Tooltip
    content="This tooltip has a delay"
    showDelay={500}
    hideDelay={200}
  >
    <Button>Hover me</Button>
  </Tooltip>
);
```

## On Form Elements

Add helpful hints to form inputs.

```tsx
const FormWithTooltips = () => (
  <form class="space-y-4">
    <div>
      <label class="flex items-center gap-2">
        Username
        <Tooltip content="Must be 3-20 characters, alphanumeric only">
          <span class="text-gray-400 cursor-help">ℹ️</span>
        </Tooltip>
      </label>
      <Input placeholder="Enter username" />
    </div>

    <div>
      <label class="flex items-center gap-2">
        Password
        <Tooltip content="Minimum 8 characters, include uppercase, lowercase, and numbers">
          <span class="text-gray-400 cursor-help">ℹ️</span>
        </Tooltip>
      </label>
      <Input type="password" placeholder="Enter password" />
    </div>
  </form>
);
```

## On Disabled Elements

Show why an element is disabled.

```tsx
const disabledWithTooltip = (
  <Tooltip content="Please complete the form first">
    <span class="inline-block">
      <Button disabled={true}>
        Submit
      </Button>
    </span>
  </Tooltip>
);
```

## Rich Content

Use formatted text in tooltips.

```tsx
const richTooltip = (
  <Tooltip
    content={
      <div class="space-y-1">
        <div class="font-semibold">Keyboard Shortcuts</div>
        <div class="text-xs">
          <div>⌘ + K - Search</div>
          <div>⌘ + S - Save</div>
          <div>⌘ + P - Print</div>
        </div>
      </div>
    }
  >
    <Button icon="⌨️">Shortcuts</Button>
  </Tooltip>
);
```

## With Arrow

Add an arrow pointer to the tooltip.

```tsx
const arrowTooltip = (
  <Tooltip
    content="Tooltip with arrow"
    arrow={true}
  >
    <Button>Hover me</Button>
  </Tooltip>
);
```

## In Navigation

Add tooltips to navigation items.

```tsx
const NavigationWithTooltips = () => (
  <nav class="flex gap-1">
    <Tooltip content="Dashboard" placement="bottom">
      <a href="/dashboard" class="p-2 rounded hover:bg-gray-100">
        🏠
      </a>
    </Tooltip>
    <Tooltip content="Messages" placement="bottom">
      <a href="/messages" class="p-2 rounded hover:bg-gray-100">
        💬
      </a>
    </Tooltip>
    <Tooltip content="Notifications" placement="bottom">
      <a href="/notifications" class="p-2 rounded hover:bg-gray-100">
        🔔
      </a>
    </Tooltip>
    <Tooltip content="Settings" placement="bottom">
      <a href="/settings" class="p-2 rounded hover:bg-gray-100">
        ⚙️
      </a>
    </Tooltip>
  </nav>
);
```



## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `string \| HTMLElement` | **Required** | Tooltip content |
| `children` | `HTMLElement` | **Required** | Element to attach tooltip to |
| `placement` | `"top" \| "right" \| "bottom" \| "left" \| "auto"` | `"top"` | Tooltip position |
| `trigger` | `"hover" \| "click" \| "focus"` | `"hover"` | Trigger event |
| `variant` | `"dark" \| "light"` | `"dark"` | Visual style |
| `arrow` | `boolean` | `false` | Show arrow pointer |
| `showDelay` | `number` | `0` | Delay before showing (ms) |
| `hideDelay` | `number` | `0` | Delay before hiding (ms) |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | - | HTML id attribute |
| `style` | `string \| CSSStyleDeclaration` | - | Inline styles |

## Accessibility

The Tooltip component follows accessibility best practices:

- ✅ Uses proper `role="tooltip"` attribute
- ✅ Keyboard accessible (focus trigger)
- ✅ Screen reader friendly
- ✅ Respects `prefers-reduced-motion`
- ✅ Dismissible with Escape key
- ✅ Proper ARIA attributes

### ARIA Attributes

```tsx
const accessibleTooltip = (
  <Tooltip
    content="This is an accessible tooltip"
    aria-label="Additional information"
  >
    <Button aria-describedby="tooltip-id">
      More Info
    </Button>
  </Tooltip>
);
```

## Best Practices

### ✅ Do

- Keep tooltip text concise and helpful
- Use for supplementary information
- Show keyboard shortcuts
- Explain icon meanings
- Provide context for disabled elements
- Use appropriate placements

```tsx
// Good: Concise and helpful
const goodTooltip = (
  <Tooltip content="Save changes (⌘+S)">
    <Button icon="💾">Save</Button>
  </Tooltip>
);
```

### ❌ Don't

- Don't use for critical information (not always visible)
- Don't use very long text (consider modal instead)
- Don't hide essential UI elements
- Don't nest tooltips
- Don't use for mobile-only interfaces (no hover)
- Don't use for form validation errors (use inline messages)

```tsx
// Bad: Critical info in tooltip
const badTooltip = (
  <Tooltip content="IMPORTANT: This will delete all your data permanently and cannot be undone. Make sure you have a backup before proceeding.">
    <Button color="danger">Delete</Button>
  </Tooltip>
);

// Better: Use modal for important warnings
const betterApproach = (
  <Button 
    color="danger" 
    onClick={() => showConfirmModal()}
  >
    Delete
  </Button>
);
```

## Use Cases

### Icon Buttons

```tsx
const iconButtons = (
  <div class="flex gap-2">
    <Tooltip content="Copy to clipboard">
      <Button variant="ghost" icon="📋" onClick={copyToClipboard} />
    </Tooltip>
    <Tooltip content="Download file">
      <Button variant="ghost" icon="⬇️" onClick={downloadFile} />
    </Tooltip>
  </div>
);
```

### Table Actions

```tsx
const tableRow = (
  <tr>
    <td>John Doe</td>
    <td>john@example.com</td>
    <td class="flex gap-1">
      <Tooltip content="View details">
        <Button variant="ghost" size="sm" icon="👁️" />
      </Tooltip>
      <Tooltip content="Edit user">
        <Button variant="ghost" size="sm" icon="✏️" />
      </Tooltip>
      <Tooltip content="Delete user">
        <Button variant="ghost" size="sm" icon="🗑️" color="danger" />
      </Tooltip>
    </td>
  </tr>
);
```

### Status Indicators

```tsx
const statusBadge = (
  <Tooltip content="Last updated: 2 minutes ago">
    <Badge color="success" dot={true}>
      Active
    </Badge>
  </Tooltip>
);
```

### Truncated Text

```tsx
const truncatedText = (
  <Tooltip content="This is the full text that doesn't fit in the available space">
    <div class="max-w-xs truncate">
      This is the full text that doesn't fit...
    </div>
  </Tooltip>
);
```

## Mobile Considerations

Tooltips rely on hover, which doesn't work well on mobile. Consider alternatives:

```tsx
const MobileAwareTooltip = ({ content, children }) => {
  const isMobile = Pulse.signal(window.innerWidth < 768);

  // Listen for resize
  window.addEventListener('resize', () => {
    isMobile(window.innerWidth < 768);
  });

  if (isMobile()) {
    // On mobile, use click or show info icon
    return (
      <div class="flex items-center gap-2">
        {children}
        <Button 
          variant="ghost" 
          size="sm" 
          icon="ℹ️"
          onClick={() => alert(content)}
        />
      </div>
    );
  }

  // On desktop, use normal tooltip
  return (
    <Tooltip content={content}>
      {children}
    </Tooltip>
  );
};
```

## Styling & Theming

All tooltip styles use Tailwind CSS classes and support dark mode automatically.

### Custom Styling

```tsx
const customTooltip = (
  <Tooltip
    content="Custom styled tooltip"
    className="bg-purple-600 text-white font-bold"
  >
    <Button>Hover me</Button>
  </Tooltip>
);
```

## TypeScript

Full TypeScript support with complete type definitions:

```tsx
import type { TooltipProps } from '@odyssee-software/components';

const props: TooltipProps = {
  content: 'TypeScript tooltip',
  placement: 'top',
  trigger: 'hover',
  variant: 'dark',
  showDelay: 100
};

const tooltip = (
  <Tooltip {...props}>
    <Button>Hover</Button>
  </Tooltip>
);
```

## Related Components

- [Popover](/components/popover) - For interactive content
- [Modal](/components/modal) - For complex information
- [Badge](/components/badge) - For inline status indicators

---

**Version**: 1.0.0  
**Last Updated**: January 2025
