# Navbar

## Introduction

The `Navbar` component provides a responsive, highly customizable navigation bar for web applications. It supports branding (text, logo, or custom element), navigation items (with dropdowns, badges, and icons), multiple color variants, alignment options, sticky positioning, and mobile collapsible menus. Designed for marketing sites, dashboards, e-commerce, documentation, and portfolios, the Navbar adapts to a wide range of use cases.

## Import

```ts
import { Navbar } from '@odyssee/components';
```

## LiveCodeEditor examples

### Basic Navbar

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Navbar
        brand='Brand'
        items={[
          { label: 'Landing', href: '#', active: true },
          { label: 'Account', href: '#' },
          { label: 'Work', href: '#' },
          { label: 'Blog', href: '#' },
        ]}
      />
    </Container>
  );
}`" />

### Navbar with Logo

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Navbar
        brand={{
          content: 'Odyssee',
          logo: '🚀',
          href: '#',
        }}
        items={[
          { label: 'Home', href: '#', active: true },
          { label: 'Features', href: '#' },
          { label: 'Pricing', href: '#' },
          { label: 'About', href: '#' },
        ]}
      />
    </Container>
  );
}`" />

### Navbar with Dropdown

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Navbar
        brand='Brand'
        items={[
          { label: 'Landing', href: '#', active: true },
          { label: 'Account', href: '#' },
          {
            label: 'Dropdown',
            dropdown: [
              { label: 'About', href: '#' },
              { label: 'Downloads', href: '#' },
              { label: 'Team Account', href: '#' },
            ],
          },
          { label: 'Blog', href: '#' },
        ]}
      />
    </Container>
  );
}`" />

### Variants

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Navbar
        brand='Default'
        variant='default'
        items={[
          { label: 'Home', href: '#', active: true },
          { label: 'Products', href: '#' },
          { label: 'Contact', href: '#' },
        ]}
      />
      <Navbar
        brand='Dark'
        variant='dark'
        items={[
          { label: 'Home', href: '#', active: true },
          { label: 'Products', href: '#' },
          { label: 'Contact', href: '#' },
        ]}
      />
      <Navbar
        brand='Primary'
        variant='primary'
        items={[
          { label: 'Home', href: '#', active: true },
          { label: 'Products', href: '#' },
          { label: 'Contact', href: '#' },
        ]}
      />
      <div style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', padding: 16 }}>
        <Navbar
          brand='Transparent'
          variant='transparent'
          items={[
            { label: 'Home', href: '#', active: true },
            { label: 'Products', href: '#' },
            { label: 'Contact', href: '#' },
          ]}
        />
      </div>
    </Container>
  );
}`" />

### Alignment

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Navbar
        brand='Brand'
        alignment='right'
        items={[
          { label: 'Home', href: '#' },
          { label: 'About', href: '#' },
          { label: 'Contact', href: '#' },
        ]}
      />
      <Navbar
        brand='Brand'
        alignment='center'
        items={[
          { label: 'Home', href: '#' },
          { label: 'About', href: '#' },
          { label: 'Contact', href: '#' },
        ]}
      />
      <Navbar
        brand='Brand'
        alignment='left'
        items={[
          { label: 'Home', href: '#' },
          { label: 'About', href: '#' },
          { label: 'Contact', href: '#' },
        ]}
      />
    </Container>
  );
}`" />

### Sticky Navbar

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Navbar
        brand='Sticky Nav'
        sticky={true}
        items={[
          { label: 'Home', href: '#', active: true },
          { label: 'Features', href: '#' },
          { label: 'Pricing', href: '#' },
          { label: 'Contact', href: '#' },
        ]}
      />
    </Container>
  );
}`" />

### Use Case: Marketing Website Navbar

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Navbar
        brand={{
          content: 'SaaS Pro',
          logo: '💼',
          href: '#',
        }}
        items={[
          { label: 'Home', href: '#', active: true },
          { label: 'Features', href: '#' },
          {
            label: 'Solutions',
            dropdown: [
              { label: 'For Startups', href: '#' },
              { label: 'For Enterprise', href: '#' },
              { label: 'For Developers', href: '#' },
            ],
          },
          { label: 'Pricing', href: '#' },
          { label: 'Blog', href: '#' },
        ]}
      />
    </Container>
  );
}`" />

---

## Props

| Prop                | Type                                                      | Default         | Description                                                                                   |
|---------------------|-----------------------------------------------------------|-----------------|-----------------------------------------------------------------------------------------------|
| `brand`             | `string` \| `Navbar.Brand`                                | —               | Brand section: text, logo, link, or custom element.                                           |
| `items`             | `Navbar.Item[]`                                           | `[]`            | Array of navigation items (see below for structure).                                          |
| `children`          | `HTMLElement` \| `HTMLElement[]`                          | —               | Custom children (alternative to `items`).                                                     |
| `variant`           | `"default"` \| `"dark"` \| `"primary"` \| `"transparent"` | `"default"`     | Color variant for the navbar.                                                                 |
| `alignment`         | `"left"` \| `"center"` \| `"right"`                       | `"right"`       | Alignment of navigation items.                                                                |
| `collapsible`       | `boolean`                                                 | `true`          | Enables mobile collapsible menu.                                                              |
| `collapseBreakpoint`| `"sm"` \| `"md"` \| `"lg"` \| `"xl"`                      | `"sm"`          | Breakpoint for showing mobile toggle.                                                         |
| `horizontalScroll`  | `boolean`                                                 | `false`         | Enables horizontal scroll for navigation items on mobile.                                     |
| `sticky`            | `boolean`                                                 | `false`         | Makes the navbar sticky at the top.                                                           |
| `stickyOffset`      | `string`                                                  | `"0"`           | Offset from the top when sticky.                                                              |
| `maxWidth`          | `"sm"` \| `"md"` \| `"lg"` \| `"xl"` \| `"2xl"` \| `"full"` \| `string` | `"max-w-340"` | Max width of the navbar container.                                                            |
| `centered`          | `boolean`                                                 | `true`          | Centers the navbar container.                                                                 |
| `padding`           | `"sm"` \| `"md"` \| `"lg"`                                | `"md"`          | Vertical padding for the navbar.                                                              |
| `navClassName`      | `string`                                                  | —               | Custom class for the nav element.                                                             |
| `containerClassName`| `string`                                                  | —               | Custom class for the container.                                                               |
| `brandClassName`    | `string`                                                  | —               | Custom class for the brand section.                                                           |
| `itemsClassName`    | `string`                                                  | —               | Custom class for the items container.                                                         |
| `toggleClassName`   | `string`                                                  | —               | Custom class for the mobile toggle button.                                                    |
| `onBrandClick`      | `(event: MouseEvent) => void`                             | —               | Callback when the brand is clicked.                                                           |
| `onItemClick`       | `(item: Navbar.Item, index: number) => void`              | —               | Callback when a navigation item is clicked.                                                   |
| `onToggle`          | `(isOpen: boolean) => void`                               | —               | Callback when the mobile menu is toggled.                                                     |
| `className`         | `string`                                                  | —               | Additional CSS classes for the root element.                                                  |
| `id`                | `string`                                                  | auto-generated  | ID for the navbar.                                                                           |
| `style`             | `object`                                                  | —               | Inline styles for the root element.                                                           |
| ...rest             | `BaseComponentProps`                                      | —               | Any other base props supported by Odyssee components.                                         |

### Navbar.Item

| Prop      | Type                           | Description                                         |
|-----------|--------------------------------|-----------------------------------------------------|
| `id`      | `string`                       | Unique identifier for the item.                     |
| `label`   | `string` \| `HTMLElement`      | Item label (text or custom element).                |
| `href`    | `string`                       | Link URL.                                           |
| `active`  | `boolean`                      | Marks the item as active.                           |
| `disabled`| `boolean`                      | Disables the item.                                  |
| `onClick` | `(event: MouseEvent) => void`  | Callback when the item is clicked.                  |
| `dropdown`| `Dropdown.Item[]`              | Array of dropdown items (same structure as Item).   |
| `badge`   | `string` \| `number`           | Badge displayed next to the item.                   |
| `icon`    | `string` \| `HTMLElement`      | Icon displayed next to the label.                   |

### Navbar.Brand

| Prop      | Type                           | Description                                         |
|-----------|--------------------------------|-----------------------------------------------------|
| `content` | `string` \| `HTMLElement`      | Brand text or custom element.                       |
| `href`    | `string`                       | Link URL for the brand.                             |
| `logo`    | `string` \| `HTMLElement`      | Logo (image URL, emoji, SVG, or custom element).    |
| `logoAlt` | `string`                       | Alt text for logo image.                            |
| `onClick` | `(event: MouseEvent) => void`  | Callback when the brand is clicked.                 |
| `className`| `string`                      | Custom class for the brand section.                 |

## Implementation notes

- The Navbar is fully responsive, with a collapsible menu for mobile breakpoints.
- Supports four color variants: `default`, `dark`, `primary`, and `transparent`.
- Navigation items can include dropdowns, badges, and icons.
- The brand section accepts text, logo, or custom elements, and can be linked.
- Alignment (`left`, `center`, `right`) controls the position of navigation items.
- Sticky positioning is supported via the `sticky` prop.
- Custom classes and styles are supported for all major sections.
- Callbacks are available for brand, item, and toggle interactions.
- Designed for both light and dark themes.

## Accessibility

- All navigation items are rendered as accessible links or buttons.
- The brand section uses an accessible link with `aria-label`.
- Dropdown menus are keyboard navigable and support ARIA roles.
- The mobile toggle button uses accessible SVG icons and ARIA attributes.
- Active and disabled states are visually and programmatically indicated.
- Sticky and collapsible behaviors do not interfere with keyboard navigation.

## Best practices

- Always provide a clear brand section for recognition and navigation.
- Use the `items` prop for structured navigation; prefer dropdowns for grouped links.
- Choose the appropriate variant for your site's theme and context.
- Use alignment and padding to match your layout needs.
- For mobile-heavy sites, keep navigation concise and leverage collapsible menus.
- Use badges and icons to highlight important links or statuses.
- Ensure all navigation items are accessible and keyboard-friendly.

## Related links

- [Tabs](./tabs.md)
- [Breadcrumb](./breadcrumb.md)
- [Pulse Framework documentation](https://github.com/odyssee-software/pulse-framework)
- [Odyssee Components documentation](../README.md)
