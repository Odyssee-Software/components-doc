---
title: Card
description: A versatile card component with multiple layouts, variants, and interactive features
---

# Card

A flexible card component for displaying content in a contained, organized format. Supports images, headers, footers, and various interactive states. Built for Pulse Framework with full reactivity support.

## Import

```tsx
import { Card, Pulse } from '@odyssee-software/components';
```

## Basic Usage

<LiveCodeEditor :defaultCode="`<Card title='Card Title' subtitle='Card Subtitle'>
  Some quick example text to build on the card title and make up the bulk of the card's content.
</Card>`" />

## With Image

Add images to cards with flexible positioning.

<LiveCodeEditor :defaultCode="`<Card
  image='https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80'
  imageAlt='Card Image'
  title='Beautiful Landscape'
  subtitle='Nature Photography'
>
  Explore the stunning beauty of natural landscapes captured in high resolution.
</Card>`" />

## Variants

The Card component supports multiple variants: `default`, `bordered`, and `shadow`.

<LiveCodeEditor :defaultCode="`<div class='grid grid-cols-1 md:grid-cols-3 gap-4'>
  <Card variant='default' title='Default Card'>
    Default variant with subtle shadow
  </Card>
  <Card variant='bordered' title='Bordered Card'>
    Bordered variant with 2px border
  </Card>
  <Card variant='shadow' title='Shadow Card'>
    Shadow variant with elevated effect
  </Card>
</div>`" />

## Sizes

Three size options control padding: `sm`, `md`, and `lg`.

<LiveCodeEditor :defaultCode="`<div class='grid grid-cols-1 md:grid-cols-3 gap-4'>
  <Card size='sm' title='Small'>
    Compact padding for dense layouts
  </Card>
  <Card size='md' title='Medium'>
    Default comfortable spacing
  </Card>
  <Card size='lg' title='Large'>
    Spacious padding for emphasis
  </Card>
</div>`" />

## With Header and Footer

Add custom headers and footers to cards.

<LiveCodeEditor :defaultCode="`<Card
  header='Featured Content'
  headerBordered={true}
  footer='Last updated 5 mins ago'
  footerBordered={true}
  title='Card with Header & Footer'
>
  Content with bordered header and footer sections for better visual separation.
</Card>`" />

## Horizontal Layout

Display cards in horizontal layout with image on the side.

<LiveCodeEditor :defaultCode="`<Card
  image='https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80'
  title='Horizontal Card'
  subtitle='Side by side layout'
  horizontal={true}
>
  This card displays content alongside the image for a more compact presentation.
</Card>`" />

## Clickable Cards

Make entire cards clickable with hover effects.

```tsx
const clickableCard = (
  <Card
    image="https://images.unsplash.com/photo-1680868543815-b8666dba60f7"
    title="Clickable Card"
    clickable={true}
    href="/articles/123"
    hoverEffect="shadow"
  >
    Click anywhere on this card to navigate
  </Card>
);
```

## Hover Effects

Apply different hover effects to interactive cards.

<LiveCodeEditor :defaultCode="`<div class='grid grid-cols-1 md:grid-cols-2 gap-4'>
  <Card
    image='https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3'
    title='Shadow Effect'
    clickable={true}
    hoverEffect='shadow'
  >
    Hover to see shadow effect
  </Card>
  <Card
    image='https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3'
    title='Scale Effect'
    clickable={true}
    hoverEffect='scale'
  >
    Hover to see scale effect
  </Card>
</div>`" />

## Centered Content

Center align all content within the card.

<LiveCodeEditor :defaultCode="`<Card title='Centered Card' centered={true}>
  All content is centered for emphasis and visual balance.
</Card>`" />

## Image Overlay

Display content over the image as an overlay.

<LiveCodeEditor :defaultCode="`<Card
  image='https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80'
  imageOverlay={true}
  title='Image Overlay'
  subtitle='Text over image'
>
  Content displayed as an overlay on top of the background image.
</Card>`" />

## Scrollable Content

Make card content scrollable with a fixed height.

```tsx
const scrollableCard = (
  <Card
    title="Scrollable Content"
    scrollable={true}
    scrollHeight="h-64"
  >
    <p>Long content that will be scrollable...</p>
    <p>More content...</p>
    <p>Even more content...</p>
    <p>This continues...</p>
  </Card>
);
```

## Empty State

Display an empty state with optional icon and message.

<LiveCodeEditor :defaultCode="`<Card
  emptyState={true}
  emptyStateIcon='📦'
  emptyStateText='No data to display'
/>`" />

## With Actions

Add action buttons to card footers.

```tsx
const cardWithActions = (
  <Card
    title="Article Title"
    subtitle="Published 2 days ago"
  >
    <p>Article preview text goes here...</p>
    <div class="mt-4 flex gap-2">
      <Button variant="solid" color="primary" size="sm">
        Read More
      </Button>
      <Button variant="outline" color="secondary" size="sm">
        Share
      </Button>
    </div>
  </Card>
);
```

## Reactive Content

Use Pulse signals to create dynamic cards.

```tsx
import { Card, Button, Pulse } from '@odyssee-software/components';

const DynamicCard = () => {
  const likes = Pulse.signal(42);
  const isLiked = Pulse.signal(false);

  const handleLike = () => {
    if (isLiked()) {
      likes(likes() - 1);
    } else {
      likes(likes() + 1);
    }
    isLiked(!isLiked());
  };

  return (
    <Card
      image="https://images.unsplash.com/photo-1680868543815-b8666dba60f7"
      title="Interactive Card"
    >
      <p>Click the button to like this content</p>
      <div class="mt-4 flex items-center gap-3">
        <Button
          variant={isLiked() ? 'solid' : 'outline'}
          color="danger"
          size="sm"
          icon="❤️"
          onClick={handleLike}
        >
          {likes()} Likes
        </Button>
      </div>
    </Card>
  );
};
```



## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Card title |
| `subtitle` | `string` | - | Card subtitle |
| `children` | `string \| HTMLElement \| Array` | - | Card body content |
| `header` | `string \| HTMLElement` | - | Custom header content |
| `headerBordered` | `boolean` | `false` | Add border to header |
| `footer` | `string \| HTMLElement` | - | Custom footer content |
| `footerBordered` | `boolean` | `false` | Add border to footer |
| `image` | `string` | - | Image URL |
| `imageAlt` | `string` | `"Card Image"` | Image alt text |
| `imagePosition` | `"top" \| "bottom"` | `"top"` | Image position |
| `imageOverlay` | `boolean` | `false` | Display content over image |
| `imageRounded` | `boolean` | `true` | Round image corners |
| `variant` | `"default" \| "bordered" \| "shadow"` | `"default"` | Card variant style |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Padding size |
| `horizontal` | `boolean` | `false` | Horizontal layout |
| `centered` | `boolean` | `false` | Center align content |
| `clickable` | `boolean` | `false` | Make card clickable |
| `href` | `string` | - | Link URL (makes card an anchor) |
| `onClick` | `(event: Event) => void` | - | Click handler |
| `scrollable` | `boolean` | `false` | Enable scrolling |
| `scrollHeight` | `string` | `"h-80"` | Height for scrollable content |
| `emptyState` | `boolean` | `false` | Show empty state |
| `emptyStateIcon` | `string` | - | Empty state icon |
| `emptyStateText` | `string` | `"No data to show"` | Empty state message |
| `hoverEffect` | `"none" \| "shadow" \| "scale"` | `"none"` | Hover animation |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | - | HTML id attribute |
| `style` | `string \| CSSStyleDeclaration` | - | Inline styles |

## Accessibility

The Card component follows accessibility best practices:

- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ✅ Keyboard navigation for clickable cards
- ✅ Focus indicators
- ✅ Screen reader friendly content
- ✅ Proper alt text for images

## Best Practices

### ✅ Do

- Use appropriate image sizes and optimize for web
- Provide meaningful titles and descriptions
- Use consistent card sizes in grids
- Add loading states for async content
- Include proper alt text for images

```tsx
// Good: Well-structured card with all needed info
const goodCard = (
  <Card
    image="optimized-image.jpg"
    imageAlt="Descriptive alt text"
    title="Clear, Descriptive Title"
    subtitle="Additional context"
  >
    Meaningful content that adds value
  </Card>
);
```

### ❌ Don't

- Don't use cards for everything (use appropriate components)
- Don't nest cards too deeply
- Don't forget to handle loading states
- Don't use very large unoptimized images

```tsx
// Bad: Poor structure and no context
const badCard = (
  <Card image="huge-image.png">
    Text
  </Card>
);
```

## Use Cases

### Product Cards

```tsx
const ProductCard = ({ product }) => (
  <Card
    image={product.image}
    imageAlt={product.name}
    clickable={true}
    href={`/products/${product.id}`}
    hoverEffect="shadow"
  >
    <div class="flex justify-between items-start mb-2">
      <h3 class="font-bold">{product.name}</h3>
      <Badge color="success">{product.discount}% OFF</Badge>
    </div>
    <p class="text-gray-600 text-sm mb-3">{product.description}</p>
    <div class="flex items-center justify-between">
      <div>
        <span class="text-2xl font-bold">${product.price}</span>
        <span class="text-sm text-gray-500 line-through ml-2">
          ${product.originalPrice}
        </span>
      </div>
      <Button size="sm" color="primary">Add to Cart</Button>
    </div>
  </Card>
);
```

### User Profile Cards

```tsx
const UserProfileCard = ({ user }) => (
  <Card centered={true}>
    <Avatar
      src={user.avatar}
      size="xl"
      className="mb-4"
    />
    <h3 class="text-xl font-bold mb-1">{user.name}</h3>
    <p class="text-gray-500 mb-4">{user.title}</p>
    <div class="flex gap-2">
      <Badge variant="soft" color="primary">{user.followers} Followers</Badge>
      <Badge variant="soft" color="success">{user.posts} Posts</Badge>
    </div>
  </Card>
);
```

### Dashboard Stats

```tsx
const StatsCard = ({ title, value, change, icon }) => (
  <Card size="sm">
    <div class="flex items-center justify-between">
      <div>
        <p class="text-sm text-gray-500">{title}</p>
        <p class="text-2xl font-bold mt-1">{value}</p>
        <p class={`text-sm mt-1 ${change > 0 ? 'text-green-600' : 'text-red-600'}`}>
          {change > 0 ? '↑' : '↓'} {Math.abs(change)}%
        </p>
      </div>
      <div class="text-4xl">{icon}</div>
    </div>
  </Card>
);
```

## Styling & Theming

All card styles use Tailwind CSS classes and support dark mode automatically.

### Custom Styling

```tsx
const customCard = (
  <Card
    className="border-l-4 border-blue-500 hover:border-blue-600 transition-colors"
    title="Custom Styled Card"
  >
    Additional custom styling with Tailwind classes
  </Card>
);
```

## TypeScript

Full TypeScript support with complete type definitions:

```tsx
import type { CardProps } from '@odyssee-software/components';

const props: CardProps = {
  title: 'TypeScript Card',
  variant: 'shadow',
  size: 'md',
  onClick: (e: Event) => {
    console.log('Card clicked!');
  }
};

const card = <Card {...props}>Content</Card>;
```

## Related Components

- [Avatar](/components/avatar) - Display user avatars in cards
- [Badge](/components/badge) - Add status badges to cards
- [Button](/components/button) - Add action buttons to cards

---

**Version**: 1.0.0  
**Last Updated**: January 2025
