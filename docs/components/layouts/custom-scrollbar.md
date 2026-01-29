# CustomScrollbar

A wrapper component that applies custom, themeable scrollbar styling to its content. Supports vertical, horizontal, or both scroll directions, with options for thickness, colors, rounded corners, auto-hide, and more. Includes several helper presets for common use cases.

---

## Import

```ts
import { CustomScrollbar } from '@odyssee/components';
// Helpers (optional)
import { ScrollArea, ThinScrollbar, CodeScrollbar, ChatScrollbar, TableScrollbar } from '@odyssee/components';
```

---

## Basic Usage

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <CustomScrollbar maxHeight='100'>
      <div style={{ height: 300 }}>
        <p>Long content that will scroll...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>More content...</p>
      </div>
    </CustomScrollbar>
  );
}
`" />

---

## Thin Scrollbar with Rounded Corners

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <CustomScrollbar
      maxHeight='96'
      width='thin'
      rounded={true}
      trackColor='gray-100'
      thumbColor='gray-300'
    >
      <div style={{ height: 250 }}>
        <p>Scrollable content with thin, rounded scrollbar.</p>
      </div>
    </CustomScrollbar>
  );
}
`" />

---

## Custom Colors

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <CustomScrollbar
      maxHeight='80'
      trackColor='blue-50'
      thumbColor='blue-400'
      thumbHoverColor='blue-500'
    >
      <div style={{ height: 200 }}>
        <p>Custom colored scrollbar.</p>
      </div>
    </CustomScrollbar>
  );
}
`" />

---

## Auto-hide Scrollbar

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <CustomScrollbar maxHeight='100' autoHide={true}>
      <div style={{ height: 220 }}>
        <p>The scrollbar only appears on hover.</p>
      </div>
    </CustomScrollbar>
  );
}
`" />

---

## Horizontal Scrollbar

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <CustomScrollbar orientation='horizontal' maxWidth='full'>
      <div style={{ width: 600, display: 'flex', gap: 16 }}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
      </div>
    </CustomScrollbar>
  );
}
`" />

---

## Helper Presets

### ScrollArea

A preset with variants for default, minimal, or accent scrollbars.

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <>
      <Scroll.Area maxHeight='80' variant='default'>
        <div style={{ height: 200 }}>Default variant</div>
      </Scroll.Area>
      <Scroll.Area maxHeight='80' variant='minimal'>
        <div style={{ height: 200 }}>Minimal variant (rounded, auto-hide)</div>
      </Scroll.Area>
      <Scroll.Area maxHeight='80' variant='accent'>
        <div style={{ height: 200 }}>Accent variant (blue colors)</div>
      </Scroll.Area>
    </>
  );
}
`" />

### ThinScrollbar

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Scrollbar.Thin maxHeight='80'>
      <div style={{ height: 200 }}>Thin, rounded scrollbar preset.</div>
    </Scrollbar.Thin>
  );
}
`" />

### CodeScrollbar

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Scrollbar.Code maxHeight='60'>
      <pre>
{ \`function hello() {
  console.log('Hello, world!');
}\` }
      </pre>
    </Scrollbar.Code>
  );
}
`" />

### ChatScrollbar

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Scrollbar.Chat maxHeight='80'>
      <div style={{ height: 200 }}>Chat UI with auto-hide scrollbar.</div>
    </Scrollbar.Chat>
  );
}
`" />

### TableScrollbar

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Scrollbar.Table maxHeight='48' orientation='both'>
      <table>
        <tbody>
          <tr><td>Row 1</td><td>Cell 2</td></tr>
          <tr><td>Row 2</td><td>Cell 2</td></tr>
        </tbody>
      </table>
    </Scrollbar.Table>
  );
}
`" />

---

## Props

| Name             | Type                                              | Default     | Description                                                      |
|------------------|---------------------------------------------------|-------------|------------------------------------------------------------------|
| children         | Pulse.JSX.Element \| Pulse.JSX.Element[] \| string| —           | Content to render with custom scrollbar                          |
| maxHeight        | string                                            | \"100\"     | Maximum height (e.g. \"100\", \"80\", \"full\")                  |
| maxWidth         | string                                            | —           | Maximum width (for horizontal scrollbars)                        |
| width            | \"thin\" \| \"normal\" \| \"thick\" \| string     | \"thin\"     | Scrollbar thickness                                              |
| orientation      | \"vertical\" \| \"horizontal\" \| \"both\"        | \"vertical\" | Scroll direction                                                 |
| trackColor       | string                                            | \"gray-100\" | Background color of the scrollbar track                          |
| thumbColor       | string                                            | \"gray-300\" | Color of the scrollbar thumb (handle)                            |
| thumbHoverColor  | string                                            | —           | Thumb color on hover                                             |
| rounded          | boolean                                           | false       | Rounded corners for scrollbar track and thumb                    |
| autoHide         | boolean                                           | false       | Hide scrollbar except on hover                                   |
| scrollbarStyles  | Record<string, string>                            | —           | Additional custom scrollbar styles                               |
| className        | string                                            | —           | Additional CSS classes                                           |
| id               | string                                            | auto        | DOM id (auto-generated if not provided)                          |
| style            | string                                            | —           | Inline styles                                                    |
| ...rest          | any                                               | —           | Other props are spread to the root `<div>`                       |

### ScrollArea Props

All `CustomScrollbar` props, plus:

| Name    | Type                                 | Default   | Description                                  |
|---------|--------------------------------------|-----------|----------------------------------------------|
| variant | \"default\" \| \"minimal\" \| \"accent\" | \"default\"| Preset style variant                         |

---

## Accessibility

- The component renders a semantic `<div>` with overflow and scrollbar styling.
- Content order and semantics are preserved for screen readers.
- Ensure sufficient color contrast for thumb and track colors.
- Avoid hiding scrollbars if users need to discover overflow content.

---

## Best Practices

- Use `maxHeight` or `maxWidth` to control scroll area size.
- Prefer `autoHide` for chat or minimal UIs, but avoid for critical content.
- Use `orientation='both'` for tables or grids that scroll in both directions.
- Use helper presets for common use cases (code, chat, tables).
- Test custom colors for accessibility and theme compatibility.

---

## Helper Components

- **ScrollArea**: Preset with variants for default, minimal, or accent scrollbars.
- **ThinScrollbar**: Thin, rounded scrollbar preset.
- **CodeScrollbar**: Preset for code blocks (dark track, thin thumb).
- **ChatScrollbar**: Minimal, auto-hide scrollbar for chat UIs.
- **TableScrollbar**: Scrollbar for tables (both directions).

---

<!--
This documentation is based strictly on the CustomScrollbar component source and its JSDoc examples.
If any prop or behavior is unclear, please clarify in the implementation.
-->
