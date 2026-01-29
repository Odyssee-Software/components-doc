# LayoutSplitter

A flexible, resizable split-pane layout component for building horizontal or vertical split views with draggable handles. Supports multiple panels, min/max constraints, nested layouts, manual handle placement, and advanced use cases. Includes helper subcomponents and layouts.

---

## Import

```ts
import { LayoutSplitter } from '@odyssee/components';
// Helpers (optional)
import { HorizontalSplitter, VerticalSplitter, CodeEditorLayout, ThreePanelLayout } from '@odyssee/components';
```

---

## Basic Usage (Horizontal Splitter)

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <HorizontalSplitter className='h-64'>
        <LayoutSplitter.Panel size={50}>
          <div style={{ background: '#dbeafe', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px 0 0 8px' }}>
            <div>
              <p style={{ fontWeight: 600 }}>Left Panel</p>
              <p style={{ fontSize: 14, color: '#64748b' }}>50%</p>
            </div>
          </div>
        </LayoutSplitter.Panel>
        <LayoutSplitter.Panel size={50}>
          <div style={{ background: '#bbf7d0', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0 8px 8px 0' }}>
            <div>
              <p style={{ fontWeight: 600 }}>Right Panel</p>
              <p style={{ fontSize: 14, color: '#64748b' }}>50%</p>
            </div>
          </div>
        </LayoutSplitter.Panel>
      </HorizontalSplitter>
    </Container>
  );
}
`" />

---

## Vertical Splitter

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <VerticalSplitter className='h-96'>
        <LayoutSplitter.Panel size={50}>
          <div style={{ background: '#99f6e4', height: '100%', padding: 24 }}>
            <strong>Top Panel</strong>
            <p style={{ fontSize: 14 }}>Header or navigation area</p>
          </div>
        </LayoutSplitter.Panel>
        <LayoutSplitter.Panel size={50}>
          <div style={{ background: '#fecaca', height: '100%', padding: 24 }}>
            <strong>Bottom Panel</strong>
            <p style={{ fontSize: 14 }}>Main content area</p>
          </div>
        </LayoutSplitter.Panel>
      </VerticalSplitter>
    </Container>
  );
}
`" />

---

## Three Panels (Vertical)

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <ThreePanelLayout
      top={<div style={{ background: '#fef08a', height: '100%', padding: 16 }}>Top</div>}
      middle={<div style={{ background: '#a7f3d0', height: '100%', padding: 16 }}>Middle</div>}
      bottom={<div style={{ background: '#fca5a5', height: '100%', padding: 16 }}>Bottom</div>}
      topSize={20}
      middleSize={60}
      bottomSize={20}
    />
  );
}
`" />

---

## Nested Splitters

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <LayoutSplitter direction='vertical' style={{ height: 320 }}>
        <LayoutSplitter.Panel size={30}>
          <Container>
            <div style={{ background: '#fef08a', height: '100%', padding: 12 }}>Top</div>
          </Container>
        </LayoutSplitter.Panel>
        <LayoutSplitter.Panel size={50}>
          <LayoutSplitter direction='horizontal' style={{ height: '100%' }}>
            <LayoutSplitter.Panel size={50}>
              <Container>
                <div style={{ background: '#bae6fd', height: '100%', padding: 12 }}>Left</div>
              </Container>
            </LayoutSplitter.Panel>
            <LayoutSplitter.Panel size={50}>
              <Container>
                <div style={{ background: '#fca5a5', height: '100%', padding: 12 }}>Right</div>
              </Container>
            </LayoutSplitter.Panel>
          </LayoutSplitter>
        </LayoutSplitter.Panel>
        <LayoutSplitter.Panel size={20}>
          <Container>
            <div style={{ background: '#bbf7d0', height: '100%', padding: 12 }}>Bottom</div>
          </Container>
        </LayoutSplitter.Panel>
      </LayoutSplitter>
    </Container>
  );
}
`" />

---

## Manual Handle Placement

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <LayoutSplitter direction='horizontal' manualHandles className='h-48'>
        <LayoutSplitter.Panel size={50}>
          <div style={{ background: '#f3e8ff', height: '100%', padding: 16 }}>Left</div>
        </LayoutSplitter.Panel>
        <LayoutSplitter.Handle />
        <LayoutSplitter.Panel size={50}>
          <div style={{ background: '#fee2e2', height: '100%', padding: 16 }}>Right</div>
        </LayoutSplitter.Panel>
      </LayoutSplitter>
    </Container>
  );
}
`" />

---

## With Min/Max Constraints

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <LayoutSplitter direction='horizontal' className='h-40'>
        <LayoutSplitter.Panel size={40} minSize={20} maxSize={60}>
          <Container>
            <div style={{ background: '#fef9c3', height: '100%', padding: 16 }}>
              Left (min 20%, max 60%)
            </div>
          </Container>
        </LayoutSplitter.Panel>
        <LayoutSplitter.Panel size={60}>
          <Container>
            <div style={{ background: '#d1fae5', height: '100%', padding: 16 }}>
              Right
            </div>
          </Container>
        </LayoutSplitter.Panel>
      </LayoutSplitter>
    </Container>
  );
}
`" />

---

## Props

### LayoutSplitter Props

| Name            | Type                                         | Default      | Description                                               |
|-----------------|----------------------------------------------|--------------|-----------------------------------------------------------|
| children        | Pulse.JSX.Element \| Pulse.JSX.Element[]      | —            | Panels (SplitterPanel components)                         |
| direction       | 'horizontal' \| 'vertical'                   | 'horizontal' | Split direction                                           |
| handleTemplate  | Pulse.JSX.Element \| string                   | —            | Custom handle template                                    |
| handleClasses   | string                                        | —            | Custom handle CSS classes                                 |
| manualHandles   | boolean                                       | false        | If true, handles must be placed manually                  |
| onResize        | (sizes: number[]) => void                     | —            | Callback when panel sizes change                          |
| disabled        | boolean                                       | false        | Disable resizing                                          |
| className       | string                                        | —            | Additional CSS classes                                    |
| id              | string                                        | auto         | DOM id (auto-generated if not provided)                   |
| style           | string                                        | —            | Inline styles                                             |
| ...rest         | any                                           | —            | Other props are spread to the root `<div>`                |

### LayoutSplitter.Panel Props

| Name              | Type                        | Default | Description                                 |
|-------------------|-----------------------------|---------|---------------------------------------------|
| children          | Pulse.JSX.Element \| ...    | —       | Content to render inside the panel          |
| size              | number \| Signal\<number\>    | —       | Initial size (percentage 0-100)             |
| minSize           | number                      | —       | Minimum size (percentage)                   |
| maxSize           | number                      | —       | Maximum size (percentage)                   |
| limitReachedClass | string                      | —       | Class when min/max limit is reached         |
| className         | string                      | —       | Additional CSS classes                      |
| id                | string                      | —       | DOM id                                      |
| style             | string                      | —       | Inline styles                               |
| ...rest           | any                         | —       | Other props are spread to the root `<div>`  |

### LayoutSplitter.Handle Props

| Name       | Type                        | Default      | Description                                 |
|------------|-----------------------------|--------------|---------------------------------------------|
| direction  | 'horizontal' \| 'vertical'  | inherited    | Handle direction                            |
| children   | Pulse.JSX.Element \| string | —            | Custom handle content                       |
| className  | string                      | —            | Additional CSS classes                      |
| id         | string                      | —            | DOM id                                      |
| ...rest    | any                         | —            | Other props are spread to the root `<div>`  |

---

## Helper Components

- **HorizontalSplitter**: Shortcut for `<LayoutSplitter direction='horizontal' />`
- **VerticalSplitter**: Shortcut for `<LayoutSplitter direction='vertical' />`
- **CodeEditorLayout**: Prebuilt layout for sidebar + editor + preview (horizontal)
- **ThreePanelLayout**: Prebuilt vertical layout with top, middle, and bottom panels

---

## Accessibility

- Panels are rendered as semantic `<div>` containers.
- Handles are visually distinct and keyboard focusable if made interactive.
- Ensure sufficient color contrast for handles and panel content.
- Resizing is managed by Preline JS; ensure keyboard accessibility if required.

---

## Best Practices

- Use `direction` to control split orientation.
- Use `minSize`/`maxSize` to prevent panels from becoming too small or too large.
- Use `manualHandles` for advanced layouts or custom handle placement.
- Nest splitters for complex layouts (e.g., IDEs, dashboards).
- Always provide clear content in each panel for accessibility.

---

## Subcomponents & Helpers

- **LayoutSplitter.Panel**: Defines a resizable panel.
- **LayoutSplitter.Handle**: Custom or manual handle between panels.
- **HorizontalSplitter** / **VerticalSplitter**: Quick splitters.
- **CodeEditorLayout**: Sidebar + editor + preview.
- **ThreePanelLayout**: Top, middle, bottom panels.

---

<!--
This documentation is based strictly on the LayoutSplitter component source and its playground examples.
If any prop or behavior is unclear, please clarify in the implementation.
-->
