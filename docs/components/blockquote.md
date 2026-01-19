---
title: Blockquote
description: A component for displaying quoted text with various styles and layouts
---

# Blockquote

Display quoted text with elegant styling, author attribution, and flexible layouts. Perfect for testimonials, quotes, and cited content. Built for Pulse Framework with full reactivity support.

## Import

```tsx
import { Blockquote, Pulse } from '@odyssee-software/components';
```

## Basic Usage

<LiveCodeEditor :defaultCode="`<Blockquote quote='I just wanted to say that I am very happy with the product. It is really great!' />`" />

## With Author

Add author attribution to quotes.

<LiveCodeEditor :defaultCode="`<Blockquote 
  quote='I just wanted to say that I am very happy with the product. It is really great!'
  author={{ name: 'Josh Grazioso', title: 'Director Payments & Risk | Airbnb' }}
/>`" />

## With Author Avatar

Include an avatar with the author information.

<LiveCodeEditor :defaultCode="`<Blockquote
  quote='Amazing people to work with. Very fast and professional partner.'
  author={{
    name: 'Nicole Grazioso',
    title: 'Head of Finance',
    avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80'
  }}
/>`" />

## Variants

The Blockquote component supports three variants: `default`, `bordered`, and `minimal`.

<LiveCodeEditor :defaultCode="`<div class='space-y-6'>
  <Blockquote
    variant='default'
    quote='This is a default blockquote with decorative quote marks.'
    author='John Doe'
  />
  <Blockquote
    variant='bordered'
    quote='This is a bordered blockquote with left border accent.'
    author='Jane Smith'
  />
  <Blockquote
    variant='minimal'
    quote='This is a minimal blockquote without decorations.'
    author='Bob Johnson'
  />
</div>`" />

## Sizes

Three size options control text size: `sm`, `md`, and `lg`.

<LiveCodeEditor :defaultCode="`<div class='space-y-6'>
  <Blockquote
    size='sm'
    quote='Small size blockquote for compact layouts.'
    author='Small Author'
  />
  <Blockquote
    size='md'
    quote='Medium size blockquote, the default option.'
    author='Medium Author'
  />
  <Blockquote
    size='lg'
    quote='Large size blockquote for emphasis and impact.'
    author='Large Author'
  />
</div>`" />

## Alignment

Control text alignment with the `align` prop.

<LiveCodeEditor :defaultCode="`<div class='space-y-6'>
  <Blockquote
    align='left'
    quote='Left-aligned blockquote text.'
    author='Left Author'
  />
  <Blockquote
    align='center'
    quote='Center-aligned blockquote for symmetry and balance.'
    author='Center Author'
  />
  <Blockquote
    align='right'
    quote='Right-aligned blockquote text.'
    author='Right Author'
  />
</div>`" />

## Without Quote Icon

Hide the decorative quote icon.

<LiveCodeEditor :defaultCode="`<Blockquote
  quote='A blockquote without the decorative quote marks icon.'
  author='Minimalist'
  showIcon={false}
/>`" />

## With Custom Border Color

Customize the border color for bordered variant.

<LiveCodeEditor :defaultCode="`<Blockquote
  variant='bordered'
  borderColor='border-blue-500'
  quote='This blockquote has a custom blue border.'
  author='Blue Lover'
/>`" />

## With Rich Content

Include formatted content within blockquotes.

```tsx
const richBlockquote = (
  <Blockquote
    variant="soft"
    author={{ name: "Sarah Johnson", title: "Product Manager" }}
  >
    <p class="text-lg italic mb-4">
      The team delivered beyond our expectations. Here's what impressed us most:
    </p>
    <ul class="list-disc ml-6 space-y-1">
      <li>Exceptional attention to detail</li>
      <li>Quick response times</li>
      <li>High quality deliverables</li>
    </ul>
  </Blockquote>
);
```

## Testimonial Card

Create testimonial cards with blockquotes.

```tsx
const TestimonialCard = () => (
  <div class="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800">
    <div class="flex items-center gap-2 mb-4">
      <span class="text-yellow-400">⭐⭐⭐⭐⭐</span>
      <span class="text-sm text-gray-500">5.0</span>
    </div>
    <Blockquote
      quote="This product has completely transformed how we work. The team is responsive and the features are exactly what we needed."
      author={{
        name: "Michael Chen",
        title: "CEO at TechCorp",
        avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5"
      }}
      showIcon={false}
    />
  </div>
);
```

## Reactive Quote

Use Pulse signals for dynamic quotes.

```tsx
import { Blockquote, Button, Pulse } from '@odyssee-software/components';

const QuoteRotator = () => {
  const quotes = [
    {
      text: "The best investment I've made this year.",
      author: "John Doe",
      title: "Entrepreneur"
    },
    {
      text: "Absolutely amazing product and service!",
      author: "Jane Smith",
      title: "Designer"
    },
    {
      text: "Can't imagine working without it now.",
      author: "Bob Johnson",
      title: "Developer"
    }
  ];

  const currentIndex = Pulse.signal(0);
  const currentQuote = Pulse.computed(() => quotes[currentIndex()]);

  const nextQuote = () => {
    currentIndex((currentIndex() + 1) % quotes.length);
  };

  return (
    <div>
      <Blockquote
        quote={currentQuote().text}
        author={{
          name: currentQuote().author,
          title: currentQuote().title
        }}
      />
      <Button onClick={nextQuote} className="mt-4">
        Next Quote
      </Button>
    </div>
  );
};
```

## Complete Example

Here's a comprehensive testimonial section:

```tsx
import { Blockquote, Badge, Avatar, Pulse } from '@odyssee-software/components';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Working with this team has been an absolute pleasure. They delivered beyond our expectations and were always available to help.",
      author: {
        name: "Sarah Johnson",
        title: "Product Manager at Acme Inc",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
      },
      rating: 5,
      verified: true
    },
    {
      id: 2,
      quote: "The attention to detail and quality of work is outstanding. I highly recommend their services to anyone looking for excellence.",
      author: {
        name: "Michael Chen",
        title: "CTO at TechStart",
        avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5"
      },
      rating: 5,
      verified: true
    },
    {
      id: 3,
      quote: "Fast, professional, and extremely talented. They understood our needs and delivered a perfect solution.",
      author: {
        name: "Emily Rodriguez",
        title: "Design Lead at Creative Co",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
      },
      rating: 5,
      verified: false
    }
  ];

  return (
    <section class="py-12 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p class="text-gray-600 dark:text-gray-400">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(testimonial => (
            <div class="bg-white p-6 rounded-xl shadow-lg dark:bg-gray-800">
              {/* Rating */}
              <div class="flex items-center gap-2 mb-4">
                <div class="flex text-yellow-400">
                  {'⭐'.repeat(testimonial.rating)}
                </div>
                {testimonial.verified && (
                  <Badge variant="soft" color="success" size="sm">
                    ✓ Verified
                  </Badge>
                )}
              </div>

              {/* Blockquote */}
              <Blockquote
                quote={testimonial.quote}
                author={testimonial.author}
                variant="minimal"
                showIcon={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `quote` | `string \| HTMLElement` | - | The quoted text |
| `children` | `string \| HTMLElement` | - | Alternative to quote prop |
| `author` | `string \| BlockquoteAuthor` | - | Author attribution |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Text size |
| `align` | `"left" \| "center" \| "right"` | `"left"` | Text alignment |
| `variant` | `"default" \| "bordered" \| "minimal"` | `"default"` | Visual style |
| `showIcon` | `boolean` | `true` | Show quote icon |
| `borderColor` | `string` | - | Custom border color (bordered variant) |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | - | HTML id attribute |
| `style` | `string \| CSSStyleDeclaration` | - | Inline styles |

### BlockquoteAuthor Type

```tsx
interface BlockquoteAuthor {
  name: string;
  title?: string;
  avatar?: string;
  avatarAlt?: string;
}
```

## Accessibility

The Blockquote component follows accessibility best practices:

- ✅ Uses semantic `<blockquote>` HTML element
- ✅ Proper `<footer>` for citations
- ✅ Decorative icons have `aria-hidden="true"`
- ✅ Screen reader friendly structure
- ✅ Sufficient color contrast ratios

## Best Practices

### ✅ Do

- Keep quotes concise and impactful
- Always attribute quotes to their source
- Use appropriate sizes for context
- Include avatars for testimonials
- Use proper punctuation and grammar

```tsx
// Good: Clear attribution and concise quote
const goodBlockquote = (
  <Blockquote
    quote="This product changed how we work."
    author={{
      name: "Jane Doe",
      title: "CEO at Company",
      avatar: "..."
    }}
  />
);
```

### ❌ Don't

- Don't use very long quotes (consider excerpting)
- Don't forget to attribute sources
- Don't mix too many variants on the same page
- Don't use blockquotes for regular paragraphs

```tsx
// Bad: Too long and no attribution
const badBlockquote = (
  <Blockquote
    quote="This is an extremely long quote that goes on and on and on with way too much detail that should probably be shortened or broken up into multiple parts because it's just too much text for a blockquote..."
  />
);

// Better: Concise with attribution
const betterBlockquote = (
  <Blockquote
    quote="Concise, impactful quote that gets the point across."
    author="Source Name"
  />
);
```

## Use Cases

### Customer Testimonials

```tsx
const testimonial = (
  <Blockquote
    quote="Best purchase I've made all year!"
    author={{
      name: "Happy Customer",
      title: "Verified Buyer",
      avatar: "..."
    }}
  />
);
```

### Article Quotes

```tsx
const articleQuote = (
  <Blockquote
    variant="bordered"
    borderColor="border-blue-500"
    quote="Innovation distinguishes between a leader and a follower."
    author="Steve Jobs"
  />
);
```

### Case Study Highlights

```tsx
const caseStudyQuote = (
  <Blockquote
    size="lg"
    align="center"
    quote="We saw a 300% increase in productivity within the first month."
    author={{
      name: "John Smith",
      title: "Operations Director",
      avatar: "..."
    }}
  />
);
```

## Styling & Theming

All blockquote styles use Tailwind CSS classes and support dark mode automatically.

### Custom Styling

```tsx
const customBlockquote = (
  <Blockquote
    className="bg-blue-50 p-6 rounded-lg dark:bg-blue-900/20"
    quote="Custom styled blockquote with background"
    author="Styled Author"
  />
);
```

## TypeScript

Full TypeScript support with complete type definitions:

```tsx
import type { BlockquoteProps, BlockquoteAuthor } from '@odyssee-software/components';

const author: BlockquoteAuthor = {
  name: 'John Doe',
  title: 'CEO',
  avatar: 'https://...',
  avatarAlt: 'John Doe avatar'
};

const props: BlockquoteProps = {
  quote: 'TypeScript makes development better',
  author: author,
  variant: 'bordered',
  size: 'lg'
};

const blockquote = <Blockquote {...props} />;
```

## Related Components

- [Avatar](/components/avatar) - Display author avatars
- [Badge](/components/badge) - Add verification badges
- [Card](/components/card) - Wrap blockquotes in cards

---

**Version**: 1.0.0  
**Last Updated**: January 2025
