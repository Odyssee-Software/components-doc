# List

A versatile component for rendering bulleted, numbered, checked, and inline lists with support for custom icons, colors, spacing, and advanced formatting. Useful for feature lists, steps, navigation, status, and more.

---

## Import

```tsx
import { List } from '@odyssee/components';
// Helpers: List.Unordered, List.Ordered, List.Check, List.Inline
```

---

## Examples

### Unordered (Bulleted) List

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const items = [
    'First item in the list',
    'Second item in the list',
    'Third item in the list',
    'Fourth item in the list',
  ];
  return (
    <Container>
      <List.Unordered items={items} />
    </Container>
  )
}`" />

---

### Ordered (Numbered) List

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const steps = [
    'Create a new account',
    'Verify your email address',
    'Complete your profile',
    'Start using the platform',
  ];
  return (
    <Container>
      <List.Ordered items={steps} />
    </Container>
  )
}`" />

---

### Check List (with Check Icons)

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const features = [
    'Unlimited projects',
    '24/7 customer support',
    'Advanced analytics',
    'Team collaboration tools',
    'Custom integrations',
  ];
  return (
    <Container>
      <List.Check items={features} color='primary' />
    </Container>
  )
}`" />

---

### Check List Variants

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const features = [
    'Unlimited projects',
    '24/7 customer support',
    'Advanced analytics',
    'Team collaboration tools',
    'Custom integrations',
  ];
  return (
    <Container>
      <List.Check items={features} variant='simple' color='success' />
      <List.Check items={features} variant='soft' color='warning' />
      <List.Check items={features} variant='solid' color='danger' />
    </Container>
  )
}`" />

---

### Check List with Custom Icon Colors

<LiveCodeEditor :defaultCode="`export default function demo(){
  const statusItems = [
  { content: 'Database backup completed', iconColor: 'success' },
  { content: 'API integration tested', iconColor: 'primary' },
  { content: 'Security audit passed', iconColor: 'teal' },
  { content: 'Performance optimized', iconColor: 'indigo' },
];
return (
  <Container>
    <List.Check items={statusItems} />
  </Container>
)
}`" />

---

### Inline List with Separator

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const navItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];
  return (
    <Container>
      <List.Inline items={navItems} separator='dot' />
    </Container>
  )
}`" />

---

### Custom Marker Color

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const items = ['FAQ', 'License', 'Terms & Conditions'];
  return (
    <Container>
      <List.Unordered items={items} markerColor='text-blue-600' />
    </Container>
  )
}`" />

---

### Complex Items with Custom Icons

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const CustomIcon = () => (
    <svg width='16' height='16' fill='currentColor'>
      <circle cx='8' cy='8' r='7' />
    </svg>
  );
  const items = [
    { content: 'Custom 1', icon: <CustomIcon/>, iconColor: 'primary' },
    { content: 'Custom 2', icon: <CustomIcon/>, iconColor: 'success' },
  ];
  return (
    <Container>
      <List.Check items={items} />
    </Container>
  )
}`" />

---

### Spacing and Text Size

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const items = ['Small', 'Medium', 'Large'];
  return (
    <Container>
      <List.Unordered items={items} spacing='sm' size='xs' />
      <List.Unordered items={items} spacing='md' size='md' />
      <List.Unordered items={items} spacing='lg' size='lg' />
    </Container>
  )
}`" />

---

## Props Table

### List Props

| Prop           | Type                                                                                                   | Default      | Description                                                                                      |
|----------------|--------------------------------------------------------------------------------------------------------|--------------|--------------------------------------------------------------------------------------------------|
| `items`        | `(string \| List.Item)[]`                                                                              | — (required) | Array of items (strings or objects with content/icon).                                           |
| `type`         | `"disc"` \| `"decimal"` \| `"none"` \| `"check"` \| `"inline"`                                         | `"disc"`     | List style: bulleted, numbered, none, checked, or inline.                                        |
| `spacing`      | `"sm"` \| `"md"` \| `"lg"`                                                                             | `"md"`       | Vertical spacing between items.                                                                  |
| `markerColor`  | `string`                                                                                               | —            | Tailwind color class for marker (bulleted/numbered lists).                                       |
| `checkColor`   | Color \| `"gray"` \| `"white"` \| `"teal"` \| `"indigo"` \| `"purple"` \| `"pink"` \| `"orange"`       | `"primary"`  | Color for check icon (checked lists).                                                            |
| `checkVariant` | `"simple"` \| `"soft"` \| `"solid"`                                                                    | `"simple"`   | Visual style for check icon.                                                                     |
| `separator`    | `"dot"` \| `"pipe"` \| `"slash"` \| `"none"`                                                           | `"dot"`      | Separator for inline lists.                                                                      |
| `size`         | `"xs"` \| `"sm"` \| `"md"` \| `"lg"`                                                                   | `"sm"`       | Text size for list items.                                                                        |
| `start`        | `number`                                                                                               | `1`          | Start number for ordered lists.                                                                  |
| `className`    | `string`                                                                                               | —            | Additional CSS classes.                                                                          |
| `id`           | `string`                                                                                               | auto-gen     | HTML id attribute.                                                                               |
| `style`        | `string`                                                                                               | —            | Inline styles.                                                                                   |

#### List.Item

| Field        | Type                                         | Description                                      |
|--------------|----------------------------------------------|--------------------------------------------------|
| `id`         | `string`                                     | Optional unique identifier.                       |
| `content`    | `string` \| `HTMLElement`                    | The content of the list item.                     |
| `icon`       | `HTMLElement` \| `string`                    | Custom icon to display (checked lists).           |
| `iconColor`  | Color \| `"gray"` \| `"white"` ...           | Color for the icon (checked lists).               |
| `iconVariant`| `"simple"` \| `"soft"` \| `"solid"`          | Variant for the icon (checked lists).             |

---

### Helper Components

- `List.Unordered`: Bulleted list (`type="disc"`)
- `List.Ordered`: Numbered list (`type="decimal"`)
- `List.Check`: Checked list (`type="check"`)
- `List.Inline`: Inline list (`type="inline"`)

---

## Implementation Notes

- **Variants**:  
  - `"disc"`: Bulleted list (default)
  - `"decimal"`: Numbered list
  - `"check"`: List with check icons (supports color/variant)
  - `"inline"`: Items displayed horizontally with separators
  - `"none"`: No marker
- **Custom Icons**:  
  - Each item can have a custom icon and color.
- **Spacing & Size**:  
  - Use `spacing` and `size` to control vertical rhythm and text size.
- **Helpers**:  
  - Use `List.Unordered`, `List.Ordered`, `List.Check`, `List.Inline` for clarity and less boilerplate.
- **Composition**:  
  - Items can be strings or objects for advanced formatting.

---

## Accessibility

- Uses semantic `<ul>`, `<ol>`, and `<li>` elements.
- Inline lists use `<ul>` with horizontal layout.
- Check icons and custom icons are decorative; ensure the text content is descriptive.
- For navigation or actionable lists, add ARIA roles as needed in your context.

---

## Best Practices

- Use checked lists for completed tasks, features, or status.
- Use inline lists for navigation, tags, or compact content.
- Prefer semantic and descriptive content for accessibility.
- Use custom icons and colors to match your application's branding.
- Combine with other components (cards, sections) for richer UIs.

---

## Related

- [Pulse Framework](https://github.com/odyssee-software/pulse-framework)
- [Tailwind CSS List Utilities](https://tailwindcss.com/docs/list-style-type)
- [MDN: `<ul>` and `<ol>` elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)

---
