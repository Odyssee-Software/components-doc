---
title: Accordion
description: A vertically stacked set of collapsible sections that reveal content when expanded
---

# Accordion

Expand and collapse content sections to organize information efficiently. Perfect for FAQs, documentation, and grouped content. Built for Pulse Framework with multiple variants and full reactivity support.

## Import

```ts
import { Accordion, BasicAccordion, BorderedAccordion, type AccordionItem } from '@odyssee-software/components';
```

## Basic Usage

<LiveCodeEditor :defaultCode="`<Accordion items={[
  {
    id: 'item-1',
    title: 'What is Odyssee Components?',
    content: 'Odyssee Components is a modern UI library built with Pulse Framework and Tailwind CSS, providing beautiful, accessible components.',
    open: true
  },
  {
    id: 'item-2',
    title: 'How do I get started?',
    content: 'Install the package via npm and import the components you need. Check our getting started guide for details.'
  },
  {
    id: 'item-3',
    title: 'Is TypeScript supported?',
    content: 'Yes! All components have full TypeScript support with complete type definitions.'
  }
]} />`" />

## Variants

### Basic Accordion (Plus/Minus Icons)

The default variant with plus/minus icons.

<LiveCodeEditor :defaultCode="`<BasicAccordion items={[
  {
    id: 'basic-1',
    title: 'Accordion Item #1',
    content: 'This is the first item accordion body with plus/minus icons.',
    open: true
  },
  {
    id: 'basic-2',
    title: 'Accordion Item #2',
    content: 'This is the second item accordion body.'
  },
  {
    id: 'basic-3',
    title: 'Accordion Item #3',
    content: 'This is the third item accordion body.'
  }
]} />`" />

### No Arrow Accordion

Clean accordion without any icons.

<LiveCodeEditor :defaultCode="`<NoArrowAccordion items={[
  {
    id: 'no-arrow-1',
    title: 'Clean Design',
    content: 'This accordion has no icons for a minimal, clean look.',
    open: true
  },
  {
    id: 'no-arrow-2',
    title: 'Simple Interface',
    content: 'Perfect for text-heavy content where icons might be distracting.'
  }
]} />`" />

### Arrow Accordion (Chevron Icons)

Accordion with chevron up/down icons.

<LiveCodeEditor :defaultCode="`<ArrowAccordion items={[
  {
    id: 'arrow-1',
    title: 'Modern Style',
    content: 'This variant uses chevron icons for a modern appearance.',
    open: true
  },
  {
    id: 'arrow-2',
    title: 'Clear Indicators',
    content: 'Chevrons provide clear visual feedback for expandable content.'
  }
]} />`" />

### Stretched Accordion

Title and arrow stretched to opposite ends.

<LiveCodeEditor :defaultCode="`<StretchedAccordion items={[
  {
    id: 'stretched-1',
    title: 'Full Width Layout',
    content: 'The title and icon span the full width for better visual balance.',
    open: true
  },
  {
    id: 'stretched-2',
    title: 'Professional Look',
    content: 'Great for professional dashboards and admin panels.'
  }
]} />`" />

### Bordered Accordion

Accordion with borders around each item.

<LiveCodeEditor :defaultCode="`<BorderedAccordion items={[
  {
    id: 'bordered-1',
    title: 'Bordered Design',
    content: 'Each accordion item has a border for clear separation.',
    open: true
  },
  {
    id: 'bordered-2',
    title: 'Enhanced Structure',
    content: 'Borders help define the accordion structure visually.'
  },
  {
    id: 'bordered-3',
    title: 'Card-Like Appearance',
    content: 'Works well in card-based layouts and modern interfaces.'
  }
]} />`" />

### Active Bordered Accordion

Borders appear only on active (expanded) items.

<LiveCodeEditor :defaultCode="`<ActiveBorderedAccordion items={[
  {
    id: 'active-bordered-1',
    title: 'Dynamic Borders',
    content: 'Borders appear when this section is expanded, drawing attention to active content.',
    open: true
  },
  {
    id: 'active-bordered-2',
    title: 'Focus on Active',
    content: 'This creates a clean look while highlighting expanded sections.'
  },
  {
    id: 'active-bordered-3',
    title: 'Modern Interaction',
    content: 'Great for contemporary designs with subtle interactions.'
  }
]} />`" />

## Multiple Open Items

Allow multiple sections to be open simultaneously.

<LiveCodeEditor :defaultCode="`<Accordion items={[
  {
    id: 'multi-1',
    title: 'Section 1',
    content: 'This section can remain open while others are expanded.',
    open: true
  },
  {
    id: 'multi-2',
    title: 'Section 2',
    content: 'Multiple sections can be open at the same time.',
    open: true
  },
  {
    id: 'multi-3',
    title: 'Section 3',
    content: 'Use multiple={true} to enable this behavior.'
  }
]} multiple={true} />`" />

## Disabled Items

Prevent specific items from being opened.

<LiveCodeEditor :defaultCode="`<Accordion items={[
  {
    id: 'disabled-1',
    title: 'Available Section',
    content: 'This section works normally and can be opened.',
    open: true
  },
  {
    id: 'disabled-2',
    title: 'Disabled Section (Coming Soon)',
    content: 'This content is not yet available.',
    disabled: true
  },
  {
    id: 'disabled-3',
    title: 'Another Available Section',
    content: 'This section is also interactive.'
  }
]} />`" />

## Reactive State

Control accordion state with Pulse signals for dynamic behavior.

```tsx
import { Accordion, Button, Pulse } from '@odyssee-software/components';
import type { AccordionItem } from '@odyssee-software/components';

const ReactiveAccordion = () => {
  // Create reactive items
  const items = Pulse.signal<AccordionItem[]>([
    {
      id: 'react-1',
      title: 'Section 1',
      content: 'First section content',
      open: false
    },
    {
      id: 'react-2',
      title: 'Section 2',
      content: 'Second section content',
      open: false
    },
    {
      id: 'react-3',
      title: 'Section 3',
      content: 'Third section content',
      open: false
    }
  ]);

  const openAll = () => {
    items(items().map(item => ({ ...item, open: true })));
  };

  const closeAll = () => {
    items(items().map(item => ({ ...item, open: false })));
  };

  return (
    <div>
      <div class="flex gap-2 mb-4">
        <Button onClick={openAll} size="sm">Open All</Button>
        <Button onClick={closeAll} variant="outline" size="sm">Close All</Button>
      </div>
      <Accordion items={items} multiple={true} />
    </div>
  );
};
```

## Rich Content

Use custom HTML elements for more complex content.

```tsx
const richItems: AccordionItem[] = [
  {
    id: 'rich-1',
    title: 'Product Features',
    content: (
      <div class="space-y-3">
        <div class="flex items-start gap-3">
          <span class="text-green-600">✓</span>
          <div>
            <h4 class="font-semibold">Fast Performance</h4>
            <p class="text-sm text-gray-600">Lightning-fast rendering and updates</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <span class="text-green-600">✓</span>
          <div>
            <h4 class="font-semibold">Fully Responsive</h4>
            <p class="text-sm text-gray-600">Works perfectly on all devices</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <span class="text-green-600">✓</span>
          <div>
            <h4 class="font-semibold">Easy Integration</h4>
            <p class="text-sm text-gray-600">Simple API and great documentation</p>
          </div>
        </div>
      </div>
    ),
    open: true
  }
];

<BorderedAccordion items={richItems} />
```

## Complete Example: FAQ Section

A comprehensive FAQ section with multiple features.

```tsx
import { Accordion, Badge, Card, Input, Pulse } from '@odyssee-software/components';
import type { AccordionItem } from '@odyssee-software/components';

const FAQSection = () => {
  const searchQuery = Pulse.signal('');
  
  const allFAQs: AccordionItem[] = [
    {
      id: 'faq-1',
      title: 'What payment methods do you accept?',
      content: (
        <div>
          <p class="mb-2">We accept all major payment methods:</p>
          <ul class="list-disc list-inside space-y-1 text-gray-600">
            <li>Credit Cards (Visa, MasterCard, Amex)</li>
            <li>PayPal</li>
            <li>Bank Transfer</li>
            <li>Apple Pay & Google Pay</li>
          </ul>
        </div>
      ),
      open: true
    },
    {
      id: 'faq-2',
      title: 'How long does shipping take?',
      content: (
        <div>
          <p class="mb-2">Shipping times vary by location:</p>
          <ul class="list-disc list-inside space-y-1 text-gray-600">
            <li>Domestic: 2-5 business days</li>
            <li>International: 7-14 business days</li>
            <li>Express: 1-2 business days (extra cost)</li>
          </ul>
          <p class="mt-2 text-sm text-gray-500">
            Free shipping on orders over $50!
          </p>
        </div>
      )
    },
    {
      id: 'faq-3',
      title: 'What is your return policy?',
      content: 'We offer a 30-day money-back guarantee. Items must be returned in original condition with tags attached.'
    },
    {
      id: 'faq-4',
      title: 'Do you ship internationally?',
      content: 'Yes! We ship to over 50 countries worldwide. Shipping costs and times vary by destination.'
    },
    {
      id: 'faq-5',
      title: 'How can I track my order?',
      content: 'Once your order ships, you\'ll receive a tracking number via email. You can track your package on our website or the carrier\'s website.'
    }
  ];

  // Filter FAQs based on search
  const filteredFAQs = Pulse.computed(() => {
    const query = searchQuery().toLowerCase();
    if (!query) return allFAQs;
    
    return allFAQs.filter(faq => 
      faq.title.toLowerCase().includes(query)
    );
  });

  const resultCount = Pulse.computed(() => filteredFAQs().length);

  return (
    <Card title="Frequently Asked Questions" size="lg">
      <div class="mb-6">
        <Input
          type="search"
          placeholder="Search FAQs..."
          value={searchQuery}
          onChange={(value) => searchQuery(value)}
        />
        <p class="mt-2 text-sm text-gray-600">
          Showing {resultCount()} {resultCount() === 1 ? 'question' : 'questions'}
        </p>
      </div>

      <BorderedAccordion items={filteredFAQs} />
    </Card>
  );
};
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `AccordionItem[]` | **Required** | Array of accordion items |
| `multiple` | `boolean` | `false` | Allow multiple items open simultaneously |
| `bordered` | `boolean` | `false` | Add borders around items |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | Auto-generated | HTML id attribute |
| `style` | `string \| object` | - | Inline styles |

### AccordionItem Interface

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `id` | `string` | **Required** | Unique identifier for the item |
| `title` | `string` | **Required** | Item title/header text |
| `content` | `string \| HTMLElement` | **Required** | Item content body |
| `open` | `boolean` | `false` | Initial open state |
| `disabled` | `boolean` | `false` | Disable item interaction |

## Accessibility

The Accordion component follows WCAG guidelines and accessibility best practices:

- ✅ Proper ARIA attributes (`aria-expanded`, `aria-controls`, `aria-labelledby`)
- ✅ Semantic HTML structure with proper headings
- ✅ Keyboard navigation support (Tab, Enter, Space)
- ✅ Focus management and visible focus indicators
- ✅ Screen reader friendly with region roles
- ✅ Color contrast meets WCAG AA standards

```tsx
// The component automatically includes:
// - aria-expanded="true/false" on buttons
// - aria-controls linking to content
// - role="region" on content areas
// - aria-labelledby linking content to headers
// - Disabled state properly communicated

const accessibleAccordion = (
  <Accordion
    items={items}
    // Accessibility features work automatically
    // No additional configuration needed
  />
);
```

## Best Practices

### ✅ Do

- Use clear, descriptive titles
- Keep related information grouped
- Use appropriate variants for your design
- Consider the `multiple` prop for long forms
- Provide meaningful content

```tsx
// Good: Clear structure and organization
const goodAccordion = (
  <BorderedAccordion
    items={[
      {
        id: 'shipping',
        title: 'Shipping Information',
        content: 'Detailed shipping policies and timelines...'
      },
      {
        id: 'returns',
        title: 'Return Policy',
        content: 'Clear return instructions and conditions...'
      },
      {
        id: 'warranty',
        title: 'Warranty Coverage',
        content: 'Comprehensive warranty information...'
      }
    ]}
  />
);
```

### ❌ Don't

- Don't nest accordions too deeply
- Don't hide critical information by default
- Don't use for navigation (use tabs/menu)
- Don't create items with empty content
- Don't use too many items (consider pagination)

```tsx
// Bad: Too many items, unclear titles
const badAccordion = (
  <Accordion
    items={[
      { id: '1', title: 'Item 1', content: '...' },
      { id: '2', title: 'Item 2', content: '...' },
      // ... 50 more items
      { id: '52', title: 'Item 52', content: '...' }
    ]}
  />
);

// Better: Categorize or paginate
```

## Use Cases

### Product Documentation

```tsx
const ProductDocs = () => {
  const sections: AccordionItem[] = [
    {
      id: 'install',
      title: 'Installation',
      content: 'npm install @odyssee/components',
      open: true
    },
    {
      id: 'setup',
      title: 'Initial Setup',
      content: 'Import components and configure your app...'
    },
    {
      id: 'usage',
      title: 'Basic Usage',
      content: 'Examples of common component patterns...'
    },
    {
      id: 'advanced',
      title: 'Advanced Features',
      content: 'Deep dive into advanced functionality...'
    }
  ];

  return <BorderedAccordion items={sections} />;
};
```

### Settings Panel

```tsx
const SettingsPanel = () => {
  const settings: AccordionItem[] = [
    {
      id: 'profile',
      title: 'Profile Settings',
      content: (
        <div class="space-y-3">
          <Input label="Display Name" />
          <Input label="Email" type="email" />
          <Button>Save Changes</Button>
        </div>
      )
    },
    {
      id: 'notifications',
      title: 'Notification Preferences',
      content: (
        <div class="space-y-2">
          <Checkbox label="Email notifications" />
          <Checkbox label="Push notifications" />
          <Checkbox label="SMS notifications" />
        </div>
      )
    },
    {
      id: 'privacy',
      title: 'Privacy & Security',
      content: (
        <div class="space-y-3">
          <Toggle label="Two-factor authentication" />
          <Toggle label="Profile visibility" />
        </div>
      )
    }
  ];

  return <Accordion items={settings} multiple={true} />;
};
```

### Pricing Tiers

```tsx
const PricingAccordion = () => {
  const plans: AccordionItem[] = [
    {
      id: 'basic',
      title: 'Basic Plan - $9/month',
      content: (
        <div>
          <ul class="list-disc list-inside space-y-2 mb-4">
            <li>Up to 10 projects</li>
            <li>5 GB storage</li>
            <li>Email support</li>
            <li>Basic analytics</li>
          </ul>
          <Button variant="outline" fullWidth>Choose Plan</Button>
        </div>
      )
    },
    {
      id: 'pro',
      title: 'Pro Plan - $29/month',
      content: (
        <div>
          <Badge variant="soft" color="success" className="mb-3">Most Popular</Badge>
          <ul class="list-disc list-inside space-y-2 mb-4">
            <li>Unlimited projects</li>
            <li>50 GB storage</li>
            <li>Priority support</li>
            <li>Advanced analytics</li>
            <li>Team collaboration</li>
          </ul>
          <Button color="primary" fullWidth>Choose Plan</Button>
        </div>
      )
    },
    {
      id: 'enterprise',
      title: 'Enterprise Plan - Custom',
      content: (
        <div>
          <ul class="list-disc list-inside space-y-2 mb-4">
            <li>Everything in Pro</li>
            <li>Unlimited storage</li>
            <li>Dedicated support</li>
            <li>Custom integrations</li>
            <li>SLA guarantee</li>
          </ul>
          <Button variant="outline" fullWidth>Contact Sales</Button>
        </div>
      )
    }
  ];

  return <StretchedAccordion items={plans} />;
};
```

## Styling & Theming

All accordion styles use Tailwind CSS and automatically support dark mode.

### Custom Styling

```tsx
const customAccordion = (
  <Accordion
    items={items}
    className="space-y-2"
    // Each variant supports className prop
  />
);

// Customize individual items
const customItems: AccordionItem[] = [
  {
    id: 'custom',
    title: 'Custom Styled Item',
    content: (
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg dark:from-blue-900/20 dark:to-purple-900/20">
        <p class="text-gray-800 dark:text-gray-200">Custom styled content</p>
      </div>
    )
  }
];
```

### Dark Mode

```tsx
// Dark mode works automatically with Tailwind's dark: classes
const darkModeAccordion = (
  <BorderedAccordion
    items={items}
    // Automatically adapts to dark mode:
    // - Text colors adjust
    // - Borders adapt
    // - Hover states change
  />
);
```

## TypeScript

Full TypeScript support with complete type definitions.

```tsx
import type { AccordionProps, AccordionItem } from '@odyssee-software/components';

// Type-safe item definition
const items: AccordionItem[] = [
  {
    id: 'ts-1',
    title: 'TypeScript Support',
    content: 'Full type safety and IntelliSense support',
    open: true
  },
  {
    id: 'ts-2',
    title: 'Type Definitions',
    content: 'Complete interfaces for all props and items'
  }
];

// Type-safe props
const props: AccordionProps = {
  items,
  multiple: false,
  bordered: true,
  className: 'custom-accordion'
};

const accordion = <Accordion {...props} />;

// Type checking for custom content
const typedItem: AccordionItem = {
  id: 'typed',
  title: 'Typed Content',
  content: (
    <div>Type-safe JSX content</div>
  )
};
```

## Related Components

- [Collapse](/components/collapse) - Single collapsible section
- [Tabs](/components/tabs) - Switch between content panels
- [Card](/components/card) - Content container with optional sections

---

**Version**: 1.0.0  
**Last Updated**: January 2025
