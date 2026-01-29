# Container

A responsive layout container that provides consistent max-width constraints at each breakpoint, matching Tailwind's container utility. The Container does not center or pad content by default, but offers props for centering, padding, fluid width, and responsive breakpoints.

---

## Import

```ts
import { Container } from '@odyssee/components';
// Helpers (optional)
import { CenteredContainer, FluidContainer } from '@odyssee/components';
```

---

## Basic Usage

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <p>This is a basic container. It is not centered by default.</p>
    </Container>
  );
}
`" />

---

## Centered Container

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container centered>
      <p>This container is centered using <code>mx-auto</code>.</p>
    </Container>
  );
}
`" />

---

## Container with Padding

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container centered padding='md'>
      <p>Container with medium horizontal padding.</p>
    </Container>
  );
}
`" />

---

## Responsive Breakpoint Container

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container centered breakpoint='md' padding='md'>
      <p>
        This container is fluid on mobile and becomes constrained at the <code>md</code> breakpoint and up.
      </p>
    </Container>
  );
}
`" />

---

## Fluid Container (Full Width)

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container fluid padding='md'>
      <p>This is a fluid container that takes full width at all breakpoints.</p>
    </Container>
  );
}
`" />

---

## Subcomponents

### CenteredContainer

A shortcut for `<Container centered />`.

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container.Centered padding='lg'>
      <h2>Centered Content</h2>
      <p>This uses the <code>Container.Centered</code> helper.</p>
    </Container.Centered>
  );
}
`" />

### FluidContainer

A shortcut for `<Container fluid />`.

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container.Fluid padding='md'>
      <p>This uses the FluidContainer helper for full-width layouts.</p>
    </Container.Fluid>
  );
}
`" />

---

## Props

| Name        | Type                                                      | Default   | Description                                                                 |
|-------------|-----------------------------------------------------------|-----------|-----------------------------------------------------------------------------|
| children    | Pulse.JSX.Element \| Pulse.JSX.Element[] \| string        | —         | Content to render inside the container                                      |
| centered    | boolean                                                   | false     | Center the container horizontally (`mx-auto`)                               |
| padding     | \"none\" \| \"sm\" \| \"md\" \| \"lg\" \| \"xl\" \| \"2xl\" | \"none\"  | Horizontal padding (none, small, medium, large, extra large, 2xl)           |
| breakpoint  | \"sm\" \| \"md\" \| \"lg\" \| \"xl\" \| \"2xl\"            | —         | Apply container constraints only at this breakpoint and up                   |
| fluid       | boolean                                                   | false     | Use a fluid container (no max-width constraints, full width)                |
| className   | string                                                    | —         | Additional CSS classes                                                      |
| id          | string                                                    | auto      | DOM id (auto-generated if not provided)                                     |
| style       | string                                                    | —         | Inline styles                                                               |
| ...rest     | any                                                       | —         | Other props are spread to the root `<div>`                                  |

---

## Accessibility

- Renders a semantic `<div>` container.
- Does not alter content order or semantics.
- Use appropriate landmarks/headings inside the container for better navigation.
- Ensure sufficient color contrast for backgrounds and text.

---

## Best Practices

- Use `centered` for most page layouts to keep content visually balanced.
- Use `padding` to provide comfortable spacing for content, especially on mobile.
- Use `fluid` for dashboards or layouts that require full-width content.
- Use `breakpoint` to make the container responsive only above a certain screen size.
- Avoid nesting multiple containers unless necessary for layout.

---

## Subcomponents & Helpers

- **CenteredContainer**: Equivalent to `<Container centered />`.
- **FluidContainer**: Equivalent to `<Container fluid />`.

---

<!--
This documentation is based strictly on the Container component source and its playground examples.
If any prop or behavior is unclear, please clarify in the implementation.
-->
