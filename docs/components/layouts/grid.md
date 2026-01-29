# Grid

A flexible grid layout component based on CSS Grid, supporting responsive breakpoints, column/row spans, auto-flow, and advanced alignment. Includes helper subcomponents for common grid patterns.

---

## Import

```ts
import { Grid } from '@odyssee/components';
// Helpers (optional)
import { SimpleGrid, ResponsiveGrid } from '@odyssee/components';
```

---

## Basic Usage

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Grid cols={3} gap={4}>
        <Grid.Item className='bg-blue-100 p-4 rounded'>Item 1</Grid.Item>
        <div className='bg-blue-100 p-4 rounded'>Item 2</div>
        <div className='bg-blue-100 p-4 rounded'>Item 3</div>
        <div className='bg-blue-100 p-4 rounded'>Item 4</div>
        <div className='bg-blue-100 p-4 rounded'>Item 5</div>
        <div className='bg-blue-100 p-4 rounded'>Item 6</div>
      </Grid>
    </Container>
  );
}
`" />

---

## Responsive Columns

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Grid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={4}>
        <Grid.Item>Item 1</Grid.Item>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Grid>
    </Container>
  );
}
`" />

---

## Grid with Spanning Items

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Grid cols={3} gap={4}>
        <Grid.Item colSpan={2} className='bg-red-100 p-4 rounded'>Spans 2 columns</Grid.Item>
        <div className='bg-red-100 p-4 rounded'>Item 2</div>
        <div className='bg-red-100 p-4 rounded'>Item 3</div>
        <Grid.Item colSpan={2} className='bg-red-100 p-4 rounded'>Spans 2 columns</Grid.Item>
      </Grid>
    </Container>
  );
}
`" />

### Full Width Span

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Grid cols={3} gap={4}>
        <Grid.Item colSpan='full' className='bg-orange-100 p-4 rounded'>Full width item</Grid.Item>
        <div className='bg-orange-100 p-4 rounded'>Item 2</div>
        <div className='bg-orange-100 p-4 rounded'>Item 3</div>
        <div className='bg-orange-100 p-4 rounded'>Item 4</div>
      </Grid>
    </Container>
  );
}
`" />

---

## Grid with Rows
## Grid with Rows and Row Spans

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Grid cols={3} rows={3} gap={4}>
        <Grid.Item rowSpan={2} className='bg-yellow-100 p-4 rounded flex items-center justify-center'>Spans 2 rows</Grid.Item>
        <div className='bg-yellow-100 p-4 rounded'>Item 2</div>
        <div className='bg-yellow-100 p-4 rounded'>Item 3</div>
        <div className='bg-yellow-100 p-4 rounded'>Item 4</div>
        <div className='bg-yellow-100 p-4 rounded'>Item 5</div>
      </Grid>
    </Container>
  );
}
`" />

---

## Grid with Auto Flow

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Grid cols={3} autoFlow='dense' gap={4}>
        <Grid.Item colSpan={2} className='bg-purple-100 p-4 rounded'>Wide item</Grid.Item>
        <div className='bg-purple-100 p-4 rounded'>Item 2</div>
        <div className='bg-purple-100 p-4 rounded'>Item 3</div>
      </Grid>
    </Container>
  );
}
`" />

---

## Helper Components

### SimpleGrid

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <SimpleGrid columns={3} gap={4}>
        <div className='bg-indigo-100 p-4 rounded'>Column 1</div>
        <div className='bg-indigo-100 p-4 rounded'>Column 2</div>
        <div className='bg-indigo-100 p-4 rounded'>Column 3</div>
      </SimpleGrid>
    </Container>
  );
}
`" />

### ResponsiveGrid

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <ResponsiveGrid gap={4}>
        <div className='bg-cyan-100 p-4 rounded'>Item 1</div>
        <div className='bg-cyan-100 p-4 rounded'>Item 2</div>
        <div className='bg-cyan-100 p-4 rounded'>Item 3</div>
        <div className='bg-cyan-100 p-4 rounded'>Item 4</div>
        <div className='bg-cyan-100 p-4 rounded'>Item 5</div>
        <div className='bg-cyan-100 p-4 rounded'>Item 6</div>
        <div className='bg-cyan-100 p-4 rounded'>Item 7</div>
        <div className='bg-cyan-100 p-4 rounded'>Item 8</div>
      </ResponsiveGrid>
    </Container>
  );
}
`" />

---

## Alignment

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Grid cols={3} gap={4} alignItems='center' className='h-32'>
        <div className='bg-pink-100 p-2 rounded'>Small</div>
        <div className='bg-pink-100 p-8 rounded'>Large</div>
        <div className='bg-pink-100 p-4 rounded'>Medium</div>
      </Grid>
    </Container>
  );
}
`" />

## Image Gallery

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Grid cols={6} gap={2}>
        <div className='aspect-square bg-gradient-to-br from-pink-400 to-red-500 rounded'></div>
        <div className='aspect-square bg-gradient-to-br from-yellow-400 to-orange-500 rounded'></div>
        <div className='aspect-square bg-gradient-to-br from-green-400 to-teal-500 rounded'></div>
        <div className='aspect-square bg-gradient-to-br from-blue-400 to-indigo-500 rounded'></div>
        <div className='aspect-square bg-gradient-to-br from-purple-400 to-pink-500 rounded'></div>
        <div className='aspect-square bg-gradient-to-br from-gray-400 to-gray-600 rounded'></div>
      </Grid>
    </Container>
  );
}
`" />

## Props

### Grid Props

| Name           | Type                                                      | Default   | Description                                                                 |
|----------------|-----------------------------------------------------------|-----------|-----------------------------------------------------------------------------|
| children       | Pulse.JSX.Element \| Pulse.JSX.Element[] \| string        | —         | Content to render inside the grid                                           |
| cols           | number \| { base?, sm?, md?, lg?, xl?, 2xl? }             | —         | Number of columns (can be responsive object or number)                      |
| rows           | number \| { base?, sm?, md?, lg?, xl?, 2xl? }             | —         | Number of rows (can be responsive object or number)                         |
| gap            | number \| string                                          | —         | Gap between grid items                                                      |
| gapX           | number \| string                                          | —         | Gap between columns                                                         |
| gapY           | number \| string                                          | —         | Gap between rows                                                            |
| autoFlow       | 'row' \| 'col' \| 'dense' \| 'row-dense' \| 'col-dense'   | —         | Grid auto flow direction                                                    |
| alignItems     | 'start' \| 'center' \| 'end' \| 'stretch' \| 'baseline'   | —         | Align items vertically                                                      |
| justifyItems   | 'start' \| 'center' \| 'end' \| 'stretch'                 | —         | Align items horizontally                                                    |
| alignContent   | 'start' \| 'center' \| 'end' \| 'between' \| 'around' \| 'evenly' | — | Align content vertically                                                    |
| justifyContent | 'start' \| 'center' \| 'end' \| 'between' \| 'around' \| 'evenly' | — | Align content horizontally                                                  |
| autoColumns    | 'auto' \| 'min' \| 'max' \| 'fr'                          | —         | Auto columns sizing                                                         |
| autoRows       | 'auto' \| 'min' \| 'max' \| 'fr'                          | —         | Auto rows sizing                                                            |
| className      | string                                                    | —         | Additional CSS classes                                                      |
| id             | string                                                    | auto      | DOM id (auto-generated if not provided)                                     |
| style          | string                                                    | —         | Inline styles                                                               |
| ...rest        | any                                                       | —         | Other props are spread to the root `<div>`                                  |

### Grid.Item Props

| Name        | Type                                                      | Default   | Description                                         |
|-------------|-----------------------------------------------------------|-----------|-----------------------------------------------------|
| children    | Pulse.JSX.Element \| Pulse.JSX.Element[] \| string        | —         | Content to render inside the grid item              |
| colSpan     | number \| 'full' \| 'auto'                                | —         | Number of columns to span                           |
| rowSpan     | number \| 'full' \| 'auto'                                | —         | Number of rows to span                              |
| colStart    | number \| 'auto'                                          | —         | Column start position                               |
| colEnd      | number \| 'auto'                                          | —         | Column end position                                 |
| rowStart    | number \| 'auto'                                          | —         | Row start position                                  |
| rowEnd      | number \| 'auto'                                          | —         | Row end position                                    |
| alignSelf   | 'auto' \| 'start' \| 'center' \| 'end' \| 'stretch'       | —         | Align this item vertically                          |
| justifySelf | 'auto' \| 'start' \| 'center' \| 'end' \| 'stretch'       | —         | Align this item horizontally                        |
| placeSelf   | 'auto' \| 'start' \| 'center' \| 'end' \| 'stretch'       | —         | Shorthand for alignSelf and justifySelf             |
| className   | string                                                    | —         | Additional CSS classes                              |
| id          | string                                                    | —         | DOM id                                              |
| style       | string                                                    | —         | Inline styles                                       |
| ...rest     | any                                                       | —         | Other props are spread to the root `<div>`          |

### SimpleGrid Props

All `Grid` props except `cols`, plus:

| Name         | Type      | Default | Description                                   |
|--------------|-----------|---------|-----------------------------------------------|
| columns      | number    | 1       | Number of columns                             |
| minChildWidth| string    | —       | Minimum column width (auto-fit if provided)   |

---

## Accessibility

- Renders a semantic `<div>` container with CSS Grid layout.
- Content order is preserved for screen readers.
- Use semantic HTML (headings, lists, etc.) inside grid items for best accessibility.
- Avoid using grid for content that must be read strictly left-to-right, top-to-bottom.

---

## Best Practices

- Use responsive `cols` for layouts that adapt to screen size.
- Use `Grid.Item` for advanced spanning and alignment.
- Prefer `gap`, `gapX`, and `gapY` for consistent spacing.
- Use `SimpleGrid` for equal-width columns with a minimum width.
- Use `className` and utility classes to style grid items (background, padding, rounded, etc.) as shown in playground examples.
- Test grid layouts on all breakpoints for responsiveness.

---

## Subcomponents & Helpers

- **Grid.Item**: For advanced grid item placement and spanning.
- **SimpleGrid**: Grid with equal columns or minimum child width.
- **ResponsiveGrid**: Grid with predefined responsive breakpoints.

---

<!--
This documentation is based strictly on the Grid component source and its JSDoc examples.
If any prop or behavior is unclear, please clarify in the implementation.
-->
