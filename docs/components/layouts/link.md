# Link

A versatile link component supporting multiple styles, underline variants, colors, sizes, icons, external links, and more. Includes helper subcomponents for common navigation and button-like links.

---

## Import

```ts
import { Link } from '@odyssee/components';
// Helpers (optional)
import { IconLink, ExternalLink, NavLink, ButtonLink, BackLink, NextLink } from '@odyssee/components';
```

---

## Basic Usage

<LiveCodeEditor :defaultCode="`
import { Link } from '@odyssee/components';

export default function Demo() {
  return (
    <Link href='#'>Default link</Link>
  );
}
`" />

---

## Underline Variants

<LiveCodeEditor :defaultCode="`
import { Link } from '@odyssee/components';

export default function Demo() {
  return (
    <>
      <Link href='#' underline='always'>Always underlined</Link>
      <br />
      <Link href='#' underline='hover'>Underline on hover</Link>
      <br />
      <Link href='#' underline='none'>No underline</Link>
    </>
  );
}
`" />

---

## Colors

<LiveCodeEditor :defaultCode="`
import { Link } from '@odyssee/components';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <Link href='#' color='primary' underline='hover'>Primary</Link>
      <Link href='#' color='secondary' underline='hover'>Secondary</Link>
      <Link href='#' color='success' underline='hover'>Success</Link>
      <Link href='#' color='danger' underline='hover'>Danger</Link>
      <Link href='#' color='warning' underline='hover'>Warning</Link>
      <Link href='#' color='dark' underline='hover'>Dark</Link>
    </div>
  );
}
`" />

---

## Sizes

<LiveCodeEditor :defaultCode="`
import { Link } from '@odyssee/components';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end' }}>
      <Link href='#' size='xs' underline='hover'>XS</Link>
      <Link href='#' size='sm' underline='hover'>Small</Link>
      <Link href='#' size='base' underline='hover'>Base</Link>
      <Link href='#' size='lg' underline='hover'>Large</Link>
      <Link href='#' size='xl' underline='hover'>XL</Link>
    </div>
  );
}
`" />

---

## Font Weights

<LiveCodeEditor :defaultCode="`
import { Link } from '@odyssee/components';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <Link href='#' weight='normal' underline='hover'>Normal</Link>
      <Link href='#' weight='medium' underline='hover'>Medium</Link>
      <Link href='#' weight='semibold' underline='hover'>Semibold</Link>
      <Link href='#' weight='bold' underline='hover'>Bold</Link>
    </div>
  );
}
`" />

---

## Underline Customization

<LiveCodeEditor :defaultCode="`
import { Link } from '@odyssee/components';

export default function Demo() {
  return (
    <>
      <Link href='#' underline='always' underlineThickness='1'>Thin underline</Link>
      <br />
      <Link href='#' underline='always' underlineThickness='4'>Thick underline</Link>
      <br />
      <Link href='#' underline='hover' underlineColor='red-500'>Custom underline color</Link>
      <br />
      <Link href='#' underline='always' underlineOffset='4'>Underline offset</Link>
    </>
  );
}
`" />

---

## Opacity

<LiveCodeEditor :defaultCode="`
import { Link } from '@odyssee/components';

export default function Demo() {
  return (
    <>
      <Link href='#' opacity={80}>80% opacity</Link>
      <br />
      <Link href='#' opacity={60} hoverOpacity={100}>60% opacity, 100% on hover</Link>
    </>
  );
}
`" />

---

## Disabled Link

<LiveCodeEditor :defaultCode="`
import { Link } from '@odyssee/components';

export default function Demo() {
  return (
    <Link href='#' disabled>Disabled link</Link>
  );
}
`" />

---

## Link with Icon

<LiveCodeEditor :defaultCode="`
import { IconLink } from '@odyssee/components';

export default function Demo() {
  return (
    <>
      <IconLink href='#' icon='→' iconPosition='right'>Learn more</IconLink>
      <br />
      <IconLink href='#' icon='★' iconPosition='left'>Starred</IconLink>
    </>
  );
}
`" />

---

## External Link

<LiveCodeEditor :defaultCode="`
import { ExternalLink } from '@odyssee/components';

export default function Demo() {
  return (
    <ExternalLink href='https://example.com'>External Site</ExternalLink>
  );
}
`" />

---

## Navigation Link (Active State)

<LiveCodeEditor :defaultCode="`
import { NavLink } from '@odyssee/components';

export default function Demo() {
  return (
    <>
      <NavLink href='#' active>Active NavLink</NavLink>
      <br />
      <NavLink href='#'>Inactive NavLink</NavLink>
    </>
  );
}
`" />

---

## Button Link

<LiveCodeEditor :defaultCode="`
import { ButtonLink } from '@odyssee/components';

export default function Demo() {
  return (
    <>
      <ButtonLink href='#' variant='solid' color='primary'>Solid Button Link</ButtonLink>
      <br />
      <ButtonLink href='#' variant='outline' color='danger'>Outline Danger</ButtonLink>
      <br />
      <ButtonLink href='#' variant='ghost' color='success'>Ghost Success</ButtonLink>
      <br />
      <ButtonLink href='#' variant='soft' color='secondary'>Soft Secondary</ButtonLink>
    </>
  );
}
`" />

---

## Back/Next Links

<LiveCodeEditor :defaultCode="`
import { BackLink, NextLink } from '@odyssee/components';

export default function Demo() {
  return (
    <>
      <BackLink href='#'>Back</BackLink>
      <br />
      <NextLink href='#'>Next</NextLink>
    </>
  );
}
`" />

---

## Props

| Name              | Type                                                                 | Default     | Description                                                      |
|-------------------|----------------------------------------------------------------------|-------------|------------------------------------------------------------------|
| href              | string                                                               | —           | Link destination (required)                                      |
| children          | Pulse.JSX.Element \| ... \| string                                   | —           | Link content                                                     |
| color             | \"primary\" \| \"secondary\" \| \"success\" \| \"danger\" \| \"warning\" \| \"dark\" \| \"light\" \| string | — | Text color                                                      |
| underline         | \"none\" \| \"always\" \| \"hover\" \| \"focus\"                     | \"none\"    | Underline style                                                  |
| underlineColor    | string                                                               | —           | Underline color (independent from text color)                    |
| underlineThickness| \"1\" \| \"2\" \| \"4\" \| \"8\"                                     | \"2\"        | Underline thickness                                              |
| underlineOffset   | \"1\" \| \"2\" \| \"4\" \| \"8\" \| \"auto\"                         | \"auto\"     | Underline offset                                                 |
| opacity           | number                                                               | —           | Link opacity (0-100)                                             |
| hoverOpacity      | number                                                               | 80          | Opacity on hover (0-100)                                         |
| size              | \"xs\" \| \"sm\" \| \"base\" \| \"lg\" \| \"xl\"                     | \"base\"     | Font size                                                        |
| weight            | \"normal\" \| \"medium\" \| \"semibold\" \| \"bold\"                 | \"normal\"   | Font weight                                                      |
| external          | boolean                                                              | false       | Open in new tab                                                  |
| disabled          | boolean                                                              | false       | Disabled state                                                   |
| onClick           | (e: Event) => void                                                   | —           | Click handler                                                    |
| className         | string                                                               | —           | Additional CSS classes                                           |
| id                | string                                                               | auto        | DOM id (auto-generated if not provided)                          |
| style             | string                                                               | —           | Inline styles                                                    |
| ...rest           | any                                                                  | —           | Other props are spread to the root `<a>`                         |

### IconLink Props

All `Link` props, plus:

| Name         | Type                                 | Default   | Description                                  |
|--------------|--------------------------------------|-----------|----------------------------------------------|
| icon         | Pulse.JSX.Element \| string          | —         | Icon element or string                       |
| iconPosition | \"left\" \| \"right\"                | \"left\"   | Icon position                                |
| iconSize     | \"3\" \| \"4\" \| \"5\" \| \"6\"     | \"4\"      | Icon size                                    |

### NavLink Props

All `Link` props, plus:

| Name        | Type      | Default   | Description                                  |
|-------------|-----------|-----------|----------------------------------------------|
| active      | boolean   | false     | Active state                                 |
| activeColor | string    | \"blue-600\" | Color when active                         |

### ButtonLink Props

All `Link` props except `underline`, plus:

| Name      | Type                                         | Default   | Description                                  |
|-----------|----------------------------------------------|-----------|----------------------------------------------|
| variant   | \"solid\" \| \"outline\" \| \"ghost\" \| \"soft\" | \"solid\"  | Button variant                               |
| size      | \"sm\" \| \"md\" \| \"lg\"                   | \"md\"     | Button size                                  |
| fullWidth | boolean                                      | false     | Full width button                            |

---

## Accessibility

- Renders a semantic `<a>` element.
- Supports keyboard navigation and focus styles.
- Use descriptive link text for clarity.
- Use `external` for links that open in a new tab (adds `rel=\"noopener noreferrer\"`).
- Disabled links are not focusable or clickable.

---

## Best Practices

- Use `underline='hover'` for most links to indicate interactivity.
- Use `color` and `size` to match your design system.
- Prefer `ExternalLink` for links to external sites.
- Use `ButtonLink` for actions that look like buttons but navigate.
- Always provide meaningful link text for accessibility.

---

## Subcomponents & Helpers

- **IconLink**: Link with icon (left or right).
- **ExternalLink**: Opens in new tab, adds external icon.
- **NavLink**: Navigation link with active state.
- **ButtonLink**: Link styled as a button.
- **BackLink**: Link with back arrow.
- **NextLink**: Link with next arrow.

---

<!--
This documentation is based strictly on the Link component source and its playground examples.
If any prop or behavior is unclear, please clarify in the implementation.
-->