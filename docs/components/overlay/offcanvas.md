# Offcanvas

## Introduction

The `Offcanvas` component is a flexible sliding panel (drawer) that can be positioned on any side of the screen. It is ideal for side menus, shopping carts, settings panels, or any content that should appear temporarily and not block the main UI. Offcanvas panels support custom sizes, headers, footers, backdrops, scroll locking, and more.

## Import

```ts
import { Offcanvas } from '@odyssee/components';
```

## LiveCodeEditor examples

### Basic Offcanvas (Right Side)

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const isOpen = Pulse.signal(false);
  return (
    <Container>
      <button onClick={() => isOpen(true)} style={{ padding: 8, borderRadius: 6, background: '#2563eb', color: 'white' }}>
        Open Offcanvas
      </button>
      <Offcanvas
        isOpen={isOpen}
        title='Offcanvas Title'
        onClose={() => isOpen(false)}
      >
        <p>This is the offcanvas content.</p>
      </Offcanvas>
    </Container>
  );
}`" />

### Offcanvas from Left

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const isOpen = Pulse.signal(false);
  return (
    <Container>
      <button onClick={() => isOpen(true)} style={{ padding: 8, borderRadius: 6, background: '#059669', color: 'white' }}>
        Open Left Panel
      </button>
      <Offcanvas
        isOpen={isOpen}
        placement='left'
        title='Left Panel'
        onClose={() => isOpen(false)}
      >
        <p>Content from left side.</p>
      </Offcanvas>
    </Container>
  );
}`" />

### Offcanvas with Footer

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const isOpen = Pulse.signal(false);
  return (
    <Container>
      <button onClick={() => isOpen(true)} style={{ padding: 8, borderRadius: 6, background: '#7c3aed', color: 'white' }}>
        Open with Footer
      </button>
      <Offcanvas
        isOpen={isOpen}
        title='With Footer'
        onClose={() => isOpen(false)}
        footer={
          <>
            <button onClick={() => isOpen(false)} style={{ marginRight: 8 }}>Cancel</button>
            <button style={{ background: '#2563eb', color: 'white', borderRadius: 4, padding: '6px 16px' }}>Save</button>
          </>
        }
      >
        <p>Offcanvas content</p>
      </Offcanvas>
    </Container>
  );
}`" />

### Size Variants

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const isOpen = Pulse.signal(false);
  return (
    <Container>
      <button onClick={() => isOpen(true)} style={{ padding: 8, borderRadius: 6, background: '#f59e42', color: 'white' }}>
        Open Large Offcanvas
      </button>
      <Offcanvas
        isOpen={isOpen}
        size='lg'
        title='Large Offcanvas'
        onClose={() => isOpen(false)}
      >
        <p>This is a large offcanvas panel.</p>
      </Offcanvas>
    </Container>
  );
}`" />

### No Backdrop, Allow Body Scroll

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const isOpen = Pulse.signal(false);
  return (
    <Container>
      <button onClick={() => isOpen(true)} style={{ padding: 8, borderRadius: 6, background: '#eab308', color: 'white' }}>
        Open No Backdrop
      </button>
      <Offcanvas
        isOpen={isOpen}
        backdrop={false}
        bodyScroll={true}
        title='No Backdrop'
        onClose={() => isOpen(false)}
      >
        <p>Body can scroll, no backdrop.</p>
      </Offcanvas>
    </Container>
  );
}`" />

### Custom Backdrop Color

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const isOpen = Pulse.signal(false);
  return (
    <Container>
      <button onClick={() => isOpen(true)} style={{ padding: 8, borderRadius: 6, background: '#1e40af', color: 'white' }}>
        Open Custom Backdrop
      </button>
      <Offcanvas
        isOpen={isOpen}
        title='Custom Backdrop'
        backdropColor='bg-blue-950/90'
        onClose={() => isOpen(false)}
      >
        <p>Custom blue backdrop.</p>
      </Offcanvas>
    </Container>
  );
}`" />

## Props

| Prop              | Type                                                        | Default         | Description                                                                                  |
|-------------------|-------------------------------------------------------------|-----------------|----------------------------------------------------------------------------------------------|
| `isOpen`          | `boolean` \| `Signal<boolean>`                              | —               | Controls the open state of the offcanvas (controlled or signal).                             |
| `placement`       | `"left"` \| `"right"` \| `"top"` \| `"bottom"`              | `"right"`       | Side of the screen where the offcanvas appears.                                              |
| `size`            | `"xs"` \| `"sm"` \| `"md"` \| `"lg"` \| `"xl"` \| `"full"`  | `"md"`          | Size of the offcanvas panel (width for left/right, height for top/bottom).                   |
| `title`           | `string` \| `HTMLElement`                                   | —               | Title displayed in the header.                                                               |
| `children`        | `string` \| `HTMLElement` \| `HTMLElement[]`                | —               | Content of the offcanvas body.                                                               |
| `footer`          | `HTMLElement` \| `HTMLElement[]`                            | —               | Footer content (e.g., action buttons).                                                       |
| `showCloseButton` | `boolean`                                                   | `true`          | Whether to show the close button in the header.                                              |
| `staticBackdrop`  | `boolean`                                                   | `false`         | If true, clicking the backdrop does not close the offcanvas.                                 |
| `closeOnEscape`   | `boolean`                                                   | `true`          | If true, pressing Escape closes the offcanvas.                                               |
| `backdrop`        | `boolean`                                                   | `true`          | Whether to show a backdrop overlay behind the offcanvas.                                     |
| `backdropColor`   | `string`                                                    | `"bg-black/50"` | Tailwind class for the backdrop color.                                                       |
| `bodyScroll`      | `boolean`                                                   | `false`         | If true, allows the page body to scroll when the offcanvas is open.                          |
| `onClose`         | `() => void`                                                | —               | Callback fired when the offcanvas requests to close.                                         |
| `className`       | `string`                                                    | —               | Additional CSS classes for the offcanvas panel.                                              |
| `id`              | `string`                                                    | auto-generated  | ID for the offcanvas container.                                                              |
| ...rest           | —                                                           | —               | Any other props are spread to the root container.                                            |

## Implementation notes

- The `Offcanvas` component uses a portal to render the panel at the root of the document for proper stacking and positioning.
- Supports all four placements: `right` (default), `left`, `top`, and `bottom`.
- The `size` prop adjusts width (for left/right) or height (for top/bottom) using Tailwind max-width/max-height classes.
- The `isOpen` prop can be a boolean or a reactive signal.
- The backdrop can be customized or disabled. When `staticBackdrop` is true, clicking the backdrop does not close the panel.
- The `bodyScroll` prop allows the main page to scroll when the offcanvas is open (disabled by default).
- The close button in the header can be hidden with `showCloseButton={false}`.
- The panel closes on Escape key by default, unless `closeOnEscape` is set to false.
- The `footer` prop allows for custom action buttons or content at the bottom of the panel.

## Accessibility

- The offcanvas panel uses `role="dialog"` and `aria-modal="true"` for assistive technologies.
- The close button is accessible and labeled.
- Keyboard navigation is supported: pressing Escape closes the panel (unless disabled).
- The panel traps focus when open, and focus returns to the trigger when closed.
- Ensure all interactive elements inside the offcanvas are keyboard accessible.

## Best practices

- Use offcanvas panels for temporary, non-blocking content such as menus, carts, or settings.
- Keep content concise and focused; avoid overloading the panel with complex forms or navigation.
- Always provide a clear way to close the panel (close button, backdrop, or explicit action).
- Use the `size` and `placement` props to match the context and device (e.g., full width for mobile).
- For destructive actions, consider confirmation dialogs inside the offcanvas.

## Related links

- [Modal documentation](./modal.md)
- [Dropdown documentation](./dropdown.md)
- [Popover documentation](./popover.md)
- [Odyssee Components documentation](../README.md)
