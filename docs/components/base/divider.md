# Divider

A flexible divider component for visually separating content, with support for horizontal and vertical orientation, optional labels, custom colors, thickness, spacing, and responsive behavior. Useful for forms, toolbars, lists, and section breaks.

---

## Import

```tsx
import { Divider } from '@odyssee/components';
```

---

## Subcomponents

- `Divider.Vertical`: Shorthand for `<Divider orientation="vertical" />`
- `Divider.WithText`: Shorthand for `<Divider label="..." labelPosition="center" />`

---

## Examples

### Basic Horizontal Divider

<LiveCodeEditor :defaultCode="`<Container>
  <p>Content above</p>
  <Divider />
  <p>Content below</p>
</Container>
`" />

---

### Colors

<LiveCodeEditor :defaultCode="`<Container>
  <Divider color='default' />
  <Divider color='gray' />
  <Divider color='teal' />
  <Divider color='blue' />
  <Divider color='red' />
  <Divider color='yellow' />
  <div style={{ background: '#222', padding: 8 }}>
    <Divider color='white' />
  </div>
</Container>
`" />

---

### Thickness

<LiveCodeEditor :defaultCode="`<Container>
  <Divider thickness={1} />
  <Divider thickness={2} />
  <Divider thickness={4} />
  <Divider thickness={8} />
</Container>`" />

---

### With Label (Center)

<LiveCodeEditor :defaultCode="`<Container>
  <Divider label='OR' />
  <Divider label='Continue with' />
  <Divider label='Section Break' />
</Container>
`" />

---

### With Label (Left & Right)

<LiveCodeEditor :defaultCode="`<Container>
  <Divider label='Left aligned' labelPosition='left' />
  <Divider label='Section 1' labelPosition='left' />
  <Divider label='Right aligned' labelPosition='right' />
  <Divider label='End of section' labelPosition='right' />
</Container>
`" />

---

### Spacing (with labels)

<LiveCodeEditor :defaultCode="`<Container>
  <Divider label='XS' spacing='xs' />
  <Divider label='SM' spacing='sm' />
  <Divider label='MD' spacing='md' />
  <Divider label='LG' spacing='lg' />
  <Divider label='XL' spacing='xl' />
</Container>
`" />

---

### Vertical Divider

<LiveCodeEditor :defaultCode="`<Container>
  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
    <button>Button 1</button>
    <Divider orientation='vertical' style={{ height: 32 }} />
    <button>Button 2</button>
    <Divider orientation='vertical' style={{ height: 32 }} />
    <button>Button 3</button>
    </div>
</Container>`" />

---

### Colored & Thick Vertical Dividers

<LiveCodeEditor :defaultCode="`<Container>
  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
    <span>Item 1</span>
    <Divider orientation='vertical' color='blue' style={{ height: 24 }} />
    <span>Item 2</span>
    <Divider orientation='vertical' color='teal' thickness={4} style={{ height: 24 }} />
    <span>Item 3</span>
  </div>
</Container>`" />

---

### Responsive Orientation

<LiveCodeEditor :defaultCode="`<Container>
  <Divider responsiveOrientation={{ sm: 'vertical', md: 'horizontal' }} />
</Container>`" />

---

### Use Case: Login Form with Social Options

<LiveCodeEditor :defaultCode="`<Container>
  <button style={{ width: '100%' }}>Login with Email</button>
  <Divider label='OR' />
  <button style={{ width: '100%' }}>Continue with Google</button>
</Container>`" />

---

### Use Case: Section Separator in Article

<LiveCodeEditor :defaultCode="`<Container>
  <p>This is the first paragraph of the article with some important information about the topic.</p>
  <Divider label='Chapter 2' labelPosition='left' spacing='lg' color='blue' thickness={2} />
  <p>This is the second chapter of the article continuing the discussion.</p>
</Container>`" />

---

### Use Case: Toolbar with Actions

<LiveCodeEditor :defaultCode="`<Container>
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <button>Bold</button>
    <button>Italic</button>
    <Divider orientation='vertical' style={{ height: 24 }} />
    <button>Link</button>
    <button>Image</button>
    <Divider orientation='vertical' style={{ height: 24 }} />
    <button>Undo</button>
    </div>
</Container>`" />

---

### Use Case: List Items with Separators

<LiveCodeEditor :defaultCode="`<Container>
  <div>
    <h3>First Item</h3>
    <p>Description of the first item</p>
  </div>
  <Divider />
  <div>
    <h3>Second Item</h3>
    <p>Description of the second item</p>
  </div>
  <Divider />
  <div>
    <h3>Third Item</h3>
    <p>Description of the third item</p>
  </div>
</Container>`" />

---

## Props

| Prop                    | Type                                                                 | Default         | Description                                                                                      |
|-------------------------|----------------------------------------------------------------------|-----------------|--------------------------------------------------------------------------------------------------|
| `orientation`           | `"horizontal"` \| `"vertical"`                                       | `"horizontal"`  | Divider direction.                                                                               |
| `label`                 | `string` \| `HTMLElement`                                            | —               | Optional label to display in the divider (centered by default).                                  |
| `labelPosition`         | `"left"` \| `"center"` \| `"right"`                                  | `"center"`      | Label alignment (when `label` is set).                                                           |
| `color`                 | `"default"` \| `"gray"` \| `"teal"` \| `"blue"` \| `"red"` \| `"yellow"` \| `"white"` | `"default"`      | Divider color.                                                                                   |
| `thickness`             | `1` \| `2` \| `4` \| `8`                                             | `1`             | Divider thickness (border width).                                                                |
| `spacing`               | `"xs"` \| `"sm"` \| `"md"` \| `"lg"` \| `"xl"`                       | `"md"`          | Vertical spacing (padding) for labeled dividers.                                                 |
| `responsiveOrientation` | `{ sm?: "horizontal" \| "vertical", md?: ..., lg?: ... }`             | —               | Responsive orientation overrides for breakpoints.                                                |
| `className`             | `string`                                                             | —               | Additional CSS classes.                                                                          |
| `id`                    | `string`                                                             | auto-generated  | HTML id attribute.                                                                               |
| `style`                 | `string`                                                             | —               | Inline styles.                                                                                   |

---

## Implementation Notes

- **Orientation:** Use `orientation="vertical"` for vertical dividers (e.g., between buttons in a toolbar).
- **Labels:** The `label` prop can be a string or custom element. Use `labelPosition` to align left, center, or right.
- **Colors:** Choose from several color presets for both light and dark backgrounds.
- **Thickness:** Use `thickness` to adjust the border width.
- **Spacing:** The `spacing` prop controls vertical padding for labeled dividers.
- **Responsive:** Use `responsiveOrientation` to change orientation at breakpoints (e.g., vertical on mobile, horizontal on desktop).
- **Subcomponents:** Use `Divider.Vertical` and `Divider.WithText` for convenience.
- **Accessibility:** Horizontal dividers use `<hr>`, vertical and labeled dividers use `<div role="separator">` with `aria-orientation`.

---

## Accessibility

- Horizontal dividers use semantic `<hr>` elements.
- Vertical and labeled dividers use `<div role="separator">` and set `aria-orientation` appropriately.
- Labels are rendered as text or custom content; ensure custom labels are accessible.
- Sufficient color contrast is provided for all color options.

---

## Best Practices

- Use `Divider` to visually separate related content or actions.
- For toolbars, use vertical dividers between groups of buttons.
- For forms or login screens, use labeled dividers to separate alternative actions.
- Use `responsiveOrientation` for layouts that change direction on different screen sizes.
- Always provide accessible labels for custom content.

---

## Related

- [Pulse Framework](https://github.com/odyssee-software/pulse-framework)
- [Tailwind CSS border utilities](https://tailwindcss.com/docs/border-width)
- [ARIA separator role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role)

---
