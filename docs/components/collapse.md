---
title: Collapse
description: A component for showing/hiding content with smooth transitions
---

# Collapse

Show and hide content with smooth animations. Perfect for FAQs, expandable sections, and "read more" functionality. Built for Pulse Framework with full reactivity support.

## Import

```tsx
import { Collapse, Pulse } from '@odyssee/components';
```

## Basic Usage

<LiveCodeEditor :defaultCode="`<Collapse
  trigger='Toggle Content'
  isOpen={false}
>
  <p>This content can be collapsed and expanded with smooth animations.</p>
</Collapse>`" />

## Read More Pattern

A common pattern for showing additional content.

<LiveCodeEditor :defaultCode="`<div class='space-y-4'>
  <p>This is the visible content that's always shown...</p>
  <Collapse
    openText='Read less'
    closedText='Read more'
    triggerVariant='link'
  >
    <p>This is the hidden content that appears when you click 'Read more'. It can contain multiple paragraphs and other elements.</p>
  </Collapse>
</div>`" />

## Trigger Variants

The Collapse component supports two trigger variants: `button` and `link`.

<LiveCodeEditor :defaultCode="`<div class='space-y-4'>
  <Collapse
    trigger='Button Trigger'
    triggerVariant='button'
  >
    <p>Content revealed by button-style trigger</p>
  </Collapse>
  
  <Collapse
    trigger='Link Trigger'
    triggerVariant='link'
  >
    <p>Content revealed by link-style trigger</p>
  </Collapse>
</div>`" />

## With Icon

Control the visibility of the chevron icon.

<LiveCodeEditor :defaultCode="`<div class='space-y-4'>
  <Collapse
    trigger='With Icon'
    showIcon={true}
  >
    <p>Collapse with chevron icon that rotates on toggle</p>
  </Collapse>
  
  <Collapse
    trigger='Without Icon'
    showIcon={false}
  >
    <p>Collapse without icon for a cleaner look</p>
  </Collapse>
</div>`" />

## Reactive State

Control collapse state with Pulse signals.

```tsx
const isOpen = Pulse.signal(false);

const toggleButton = (
  <button onClick={() => isOpen(!isOpen())}>
    External Toggle
  </button>
);

const reactiveCollapse = (
  <div>
    {toggleButton}
    <Collapse
      trigger="Controlled Collapse"
      isOpen={isOpen}
    >
      <p>This collapse is controlled by an external button</p>
    </Collapse>
  </div>
);
```

## With Callbacks

React to state changes with callback functions.

```tsx
const collapse = (
  <Collapse
    trigger="Collapse with Callbacks"
    onToggle={(isOpen) => {
      console.log('Toggled:', isOpen);
    }}
    onOpen={() => {
      console.log('Opened!');
    }}
    onClose={() => {
      console.log('Closed!');
    }}
  >
    <p>Check console for callback logs</p>
  </Collapse>
);
```

## Custom Animation Duration

Adjust the transition speed.

```tsx
const fastCollapse = (
  <Collapse
    trigger="Fast Animation"
    duration={150}
  >
    <p>This collapses and expands quickly</p>
  </Collapse>
);

const slowCollapse = (
  <Collapse
    trigger="Slow Animation"
    duration={600}
  >
    <p>This has a slower, more gradual animation</p>
  </Collapse>
);
```

## FAQ Accordion

Build FAQ sections with multiple collapse components.

```tsx
const FAQSection = () => {
  const faq1Open = Pulse.signal(false);
  const faq2Open = Pulse.signal(false);
  const faq3Open = Pulse.signal(false);

  return (
    <div class="space-y-3">
      <div class="border border-gray-200 rounded-lg p-4 dark:border-gray-700">
        <Collapse
          trigger="What is Pulse Framework?"
          isOpen={faq1Open}
          triggerVariant="link"
          triggerClassName="font-semibold text-gray-800 dark:text-white"
        >
          <p class="mt-2 text-gray-600 dark:text-gray-400">
            Pulse is a lightweight reactive framework for building modern web applications.
          </p>
        </Collapse>
      </div>

      <div class="border border-gray-200 rounded-lg p-4 dark:border-gray-700">
        <Collapse
          trigger="How do I get started?"
          isOpen={faq2Open}
          triggerVariant="link"
          triggerClassName="font-semibold text-gray-800 dark:text-white"
        >
          <p class="mt-2 text-gray-600 dark:text-gray-400">
            Install the package via npm and follow our quick start guide.
          </p>
        </Collapse>
      </div>

      <div class="border border-gray-200 rounded-lg p-4 dark:border-gray-700">
        <Collapse
          trigger="Is it compatible with TypeScript?"
          isOpen={faq3Open}
          triggerVariant="link"
          triggerClassName="font-semibold text-gray-800 dark:text-white"
        >
          <p class="mt-2 text-gray-600 dark:text-gray-400">
            Yes! Pulse has full TypeScript support with complete type definitions.
          </p>
        </Collapse>
      </div>
    </div>
  );
};
```

## Complete Example

Here's a comprehensive example with multiple features:

```tsx
import { Collapse, Card, Badge, Pulse } from '@odyssee/components';

const ProductDetails = () => {
  const specsOpen = Pulse.signal(false);
  const reviewsOpen = Pulse.signal(false);
  const shippingOpen = Pulse.signal(false);

  return (
    <Card title="Product Information" size="lg">
      {/* Product overview */}
      <p class="mb-6 text-gray-600">
        Premium wireless headphones with active noise cancellation...
      </p>

      {/* Collapsible sections */}
      <div class="space-y-4">
        {/* Specifications */}
        <div class="border-b border-gray-200 pb-4 dark:border-gray-700">
          <Collapse
            trigger="Technical Specifications"
            isOpen={specsOpen}
            triggerVariant="link"
            triggerClassName="font-semibold text-lg"
            onOpen={() => console.log('Specs opened')}
          >
            <div class="mt-4 space-y-2">
              <div class="flex justify-between">
                <span class="text-gray-600">Battery Life:</span>
                <span class="font-medium">30 hours</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Bluetooth:</span>
                <span class="font-medium">5.2</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Weight:</span>
                <span class="font-medium">250g</span>
              </div>
            </div>
          </Collapse>
        </div>

        {/* Reviews */}
        <div class="border-b border-gray-200 pb-4 dark:border-gray-700">
          <Collapse
            trigger={
              <div class="flex items-center gap-2">
                <span>Customer Reviews</span>
                <Badge variant="soft" color="success" size="sm">
                  4.8/5
                </Badge>
              </div>
            }
            isOpen={reviewsOpen}
            triggerVariant="link"
            triggerClassName="font-semibold text-lg"
          >
            <div class="mt-4 space-y-3">
              <p class="text-gray-600">
                "Amazing sound quality and comfort!" - ⭐⭐⭐⭐⭐
              </p>
              <p class="text-gray-600">
                "Best headphones I've ever owned." - ⭐⭐⭐⭐⭐
              </p>
            </div>
          </Collapse>
        </div>

        {/* Shipping */}
        <div>
          <Collapse
            trigger="Shipping & Returns"
            isOpen={shippingOpen}
            triggerVariant="link"
            triggerClassName="font-semibold text-lg"
          >
            <div class="mt-4">
              <p class="text-gray-600 mb-2">
                Free shipping on orders over $50
              </p>
              <p class="text-gray-600">
                30-day return policy with full refund
              </p>
            </div>
          </Collapse>
        </div>
      </div>
    </Card>
  );
};
```

## Separate Trigger and Content

For more control, use `CollapseTrigger` and `CollapseContent` separately.

```tsx
const isOpen = Pulse.signal(false);
const contentId = 'custom-collapse-content';

const separateComponents = (
  <div>
    <CollapseTrigger
      targetId={contentId}
      isOpen={isOpen}
      variant="button"
    >
      Custom Trigger
    </CollapseTrigger>

    <CollapseContent
      id={contentId}
      isOpen={isOpen}
    >
      <p>Content controlled by separate trigger</p>
    </CollapseContent>
  </div>
);
```

## Props

### Collapse Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `trigger` | `string \| HTMLElement` | - | Trigger button content |
| `children` | `string \| HTMLElement \| Array` | - | Collapsible content |
| `isOpen` | `boolean \| Signal<boolean>` | `false` | Control open/closed state |
| `openText` | `string` | - | Text when open (alternative to trigger) |
| `closedText` | `string` | - | Text when closed (alternative to trigger) |
| `showIcon` | `boolean` | `true` | Show chevron icon |
| `triggerVariant` | `"button" \| "link"` | `"button"` | Trigger style variant |
| `triggerClassName` | `string` | - | Additional classes for trigger |
| `duration` | `number` | `300` | Animation duration in ms |
| `onToggle` | `(isOpen: boolean) => void` | - | Called when toggled |
| `onOpen` | `() => void` | - | Called when opened |
| `onClose` | `() => void` | - | Called when closed |
| `className` | `string` | - | Additional CSS classes for content |
| `id` | `string` | Auto-generated | HTML id attribute |

### CollapseTrigger Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `targetId` | `string` | **Required** | ID of content to control |
| `children` | `string \| HTMLElement` | - | Trigger content |
| `isOpen` | `boolean \| Signal<boolean>` | `false` | Control open state |
| `showIcon` | `boolean` | `true` | Show chevron icon |
| `variant` | `"button" \| "link"` | `"button"` | Trigger style |
| `onToggle` | `(isOpen: boolean) => void` | - | Toggle callback |
| `className` | `string` | - | Additional CSS classes |

### CollapseContent Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `string \| HTMLElement \| Array` | - | Content to collapse |
| `isOpen` | `boolean \| Signal<boolean>` | `false` | Control visibility |
| `duration` | `number` | `300` | Animation duration in ms |
| `triggerId` | `string` | - | ID of controlling trigger |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | Auto-generated | HTML id attribute |

## Accessibility

The Collapse component follows accessibility best practices:

- ✅ Proper `aria-expanded` attribute on trigger
- ✅ `aria-controls` linking trigger to content
- ✅ `aria-labelledby` linking content to trigger
- ✅ Keyboard navigation support
- ✅ Focus management
- ✅ Semantic HTML structure

## Best Practices

### ✅ Do

- Use meaningful trigger text
- Keep collapsed content concise
- Use appropriate animation speeds
- Provide visual feedback (icons)
- Group related collapsible sections

```tsx
// Good: Clear trigger and organized content
const goodCollapse = (
  <Collapse
    trigger="View Product Details"
    triggerVariant="link"
  >
    <div class="mt-2">
      <p>Organized, scannable content...</p>
    </div>
  </Collapse>
);
```

### ❌ Don't

- Don't hide critical information by default
- Don't nest collapses too deeply
- Don't use very fast animations (jarring)
- Don't forget to handle state properly
- Don't use for navigation (use accordions)

```tsx
// Bad: Critical info hidden, vague trigger
const badCollapse = (
  <Collapse trigger="Click here" duration={50}>
    <p>IMPORTANT: Your account will be deleted!</p>
  </Collapse>
);

// Better: Clear and visible
const betterAlert = (
  <Alert color="danger" dismissible={false}>
    <p>IMPORTANT: Your account will be deleted!</p>
  </Alert>
);
```

## Use Cases

### Blog Post Excerpt

```tsx
const BlogPostExcerpt = ({ content }) => (
  <div>
    <p>{content.excerpt}</p>
    <Collapse
      openText="Show less"
      closedText="Continue reading"
      triggerVariant="link"
    >
      <div class="mt-4">
        {content.fullText}
      </div>
    </Collapse>
  </div>
);
```

### Terms and Conditions

```tsx
const TermsSection = () => (
  <div class="space-y-2">
    <Collapse
      trigger="Privacy Policy"
      triggerVariant="link"
      triggerClassName="text-blue-600 hover:underline"
    >
      <div class="mt-2 p-4 bg-gray-50 rounded">
        <p>Privacy policy content...</p>
      </div>
    </Collapse>

    <Collapse
      trigger="Terms of Service"
      triggerVariant="link"
      triggerClassName="text-blue-600 hover:underline"
    >
      <div class="mt-2 p-4 bg-gray-50 rounded">
        <p>Terms of service content...</p>
      </div>
    </Collapse>
  </div>
);
```

### Filter Panel

```tsx
const FilterPanel = () => {
  const filtersOpen = Pulse.signal(true);

  return (
    <Collapse
      trigger="Filters"
      isOpen={filtersOpen}
    >
      <div class="mt-4 space-y-3">
        <Checkbox label="In Stock" />
        <Checkbox label="On Sale" />
        <Checkbox label="Free Shipping" />
      </div>
    </Collapse>
  );
};
```

## Styling & Theming

All collapse styles use Tailwind CSS classes and support dark mode automatically.

### Custom Styling

```tsx
const customCollapse = (
  <Collapse
    trigger="Custom Styled"
    triggerClassName="bg-blue-50 hover:bg-blue-100 p-3 rounded"
    className="bg-gray-50 p-4 rounded mt-2"
  >
    <p>Custom styled content</p>
  </Collapse>
);
```

## TypeScript

Full TypeScript support with complete type definitions:

```tsx
import type { CollapseProps } from '@odyssee/components';

const props: CollapseProps = {
  trigger: 'TypeScript Collapse',
  isOpen: false,
  duration: 300,
  onToggle: (isOpen: boolean) => {
    console.log('Toggled:', isOpen);
  }
};

const collapse = <Collapse {...props}>Content</Collapse>;
```

## Related Components

- [Accordion](/components/accordion) - Multiple collapsible sections
- [Modal](/components/modal) - Full overlay content
- [Tabs](/components/tabs) - Switch between content panels

---

**Version**: 1.0.0  
**Last Updated**: January 2025