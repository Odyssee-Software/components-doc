# Columns

A flexible multi-column layout component for flowing content into multiple columns, similar to magazine or newspaper layouts. Supports responsive column counts, t-shirt width sizes, column gaps, rules (dividers), and helper subcomponents for advanced layouts.

---

## Import

```ts
import { Columns } from '@odyssee/components';
// Helpers (optional)
import { TwoColumns, ThreeColumns, FourColumns, ResponsiveColumns } from '@odyssee/components';
```

---

## Basic Usage

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Columns count={3} gap={8}>
        <div>Column 1 content</div>
        <div>Column 2 content</div>
        <div>Column 3 content</div>
      </Columns>
    </Container>
  );
}
`" />

---

## Responsive Columns

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Columns count={{ base: 1, md: 2, lg: 3 }}>
        <div>Responsive column 1</div>
        <div>Responsive column 2</div>
        <div>Responsive column 3</div>
      </Columns>
    </Container>
  );
}
`" />

---

## Column Width (T-shirt Sizes)

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Columns width='lg'>
        <div>Wide columns</div>
        <div>More content</div>
      </Columns>
    </Container>
  );
}
`" />

---

## Column Gap

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Columns count={2} gap={16}>
        <div>Left column</div>
        <div>Right column</div>
      </Columns>
    </Container>
  );
}
`" />

---

## Column Rules (Dividers)

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Columns count={3} gap={8} rule ruleStyle='dashed' ruleColor='#3b82f6'>
        <div>Column 1</div>
        <div>Column 2</div>
        <div>Column 3</div>
      </Columns>
    </Container>
  );
}
`" />

---

## Subcomponents

### Force a Column Break

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Columns count={2}>
        <div>First column content</div>
        <Columns.Break />
        <div>Second column content</div>
      </Columns>
    </Container>
  );
}
`" />

### Span Across All Columns

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Columns count={3}>
        <Columns.Span>
          <h2>This heading spans all columns</h2>
        </Columns.Span>
        <div>Column content</div>
        <div>More content</div>
      </Columns>
    </Container>
  );
}
`" />

---

## Helper Components

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Columns.Two>
        <div>Left</div>
        <div>Right</div>
      </Columns.Two>
      <Columns.Three>
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
      </Columns.Three>
      <Columns.Four>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </Columns.Four>
      <Columns.Responsive>
        <div>Mobile</div>
        <div>Tablet</div>
        <div>Desktop</div>
      </Columns.Responsive>
    </Container>
  );
}
`" />

---

## Props

| Name         | Type                                                                 | Default     | Description                                                                                   |
|--------------|----------------------------------------------------------------------|-------------|-----------------------------------------------------------------------------------------------|
| children     | `Pulse.JSX.Element \| Pulse.JSX.Element[] \| string`                 | —           | Content to render inside columns                                                              |
| count        | `number` \| `{ base?, sm?, md?, lg?, xl?, "2xl"? }`                  | —           | Number of columns (can be responsive object)                                                  |
| width        | `"3xs" \| "2xs" \| "xs" \| "sm" \| "md" \| "lg" \| "xl" ...`         | —           | Column width (t-shirt sizes)                                                                  |
| gap          | `number` \| `string`                                                 | —           | Gap between columns (pixels or CSS value)                                                     |
| rule         | `boolean`                                                            | `false`     | Show a divider (rule) between columns                                                         |
| ruleWidth    | `"thin" \| "medium" \| "thick" \| number`                            | —           | Width of the column rule                                                                      |
| ruleColor    | `string`                                                             | —           | Color of the column rule                                                                      |
| ruleStyle    | `"solid" \| "dashed" \| "dotted" \| "double"`                        | `"solid"`   | Style of the column rule                                                                      |
| auto         | `boolean`                                                            | `false`     | Use CSS `columns: auto` for auto-fill columns                                                 |
| className    | `string`                                                             | —           | Additional CSS classes                                                                        |
| id           | `string`                                                             | auto        | DOM id (auto-generated if not provided)                                                       |
| style        | `string`                                                             | —           | Inline styles                                                                                 |
| ...rest      | `any`                                                                | —           | Other props are spread to the root `<div>`                                                    |

### Subcomponents

#### Columns.Break

| Name      | Type   | Default | Description                      |
|-----------|--------|---------|----------------------------------|
| className | string | —       | Additional CSS classes           |
| ...rest   | any    | —       | Other props for the `<div>`      |

#### Columns.Span

| Name      | Type                | Default | Description                                    |
|-----------|---------------------|---------|------------------------------------------------|
| children  | ReactNode           | —       | Content to span across columns                 |
| span      | `"all"` \| `number` | `"all"` | Number of columns to span, or `"all"` for full |
| className | string              | —       | Additional CSS classes                         |
| ...rest   | any                 | —       | Other props for the `<div>`                    |

---

## Accessibility

- The `Columns` component renders a semantic `<div>` container.
- Content order is preserved for screen readers.
- Avoid using columns for content that must be read strictly left-to-right, top-to-bottom.
- Use headings and landmarks inside columns for better navigation.

---

## Best Practices

- Use responsive `count` for layouts that adapt to screen size.
- Prefer `Columns.Span` for headings or elements that should span all columns.
- Use `gap` to control spacing between columns for readability.
- Use `rule` and related props for visual separation when needed.
- Avoid placing interactive elements (like forms) across column breaks for accessibility.

---

## Subcomponents & Helpers

- **Columns.Break**: Forces a column break at its position.
- **Columns.Span**: Makes its children span all columns (or a specific number).
- **TwoColumns, ThreeColumns, FourColumns, ResponsiveColumns**: Quick helpers for common layouts.

---

<!--
This documentation is based strictly on the Columns component source and its playground examples.
If any prop or behavior is unclear, please clarify in the implementation.
-->
