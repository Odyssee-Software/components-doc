softwares/components-doc/docs/components/overlay/popover.md
# Popover

## Introduction

The `Popover` component displays rich, contextual content in a floating panel anchored to a trigger element. It supports both simple text content and structured layouts with header, body, and footer sections. Popovers are ideal for providing additional information, contextual help, quick previews, or interactive content without cluttering the main interface.

## Import

```ts
import { Popover } from '@odyssee/components';
```

## LiveCodeEditor examples

### Basic Popover

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Popover content='This is a simple popover with text content' placement='top'>
      <button style={{ padding: '8px 16px', background: '#2563eb', color: 'white', borderRadius: 8 }}>
        Simple Popover
      </button>
    </Popover>
  );
}`" />

### Popover with Header & Body

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Popover
      header='Popover Title'
      body='This is the popover body with detailed information.'
      placement='top'
    >
      <button style={{ padding: '8px 16px', background: '#16a34a', color: 'white', borderRadius: 8 }}>
        With Header & Body
      </button>
    </Popover>
  );
}`" />

### Complete Popover (Header, Body, Footer)

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Popover
      header='Complete Popover'
      body='This popover includes all sections: header, body, and footer.'
      footer='Footer information'
      placement='top'
    >
      <button style={{ padding: '8px 16px', background: '#7c3aed', color: 'white', borderRadius: 8 }}>
        Complete Popover
      </button>
    </Popover>
  );
}`" />

### Placement Variants

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <Popover content='Popover positioned at the top' placement='top'>
        <button>Top</button>
      </Popover>
      <Popover content='Popover positioned on the left' placement='left'>
        <button>Left</button>
      </Popover>
      <Popover content='Popover positioned on the right' placement='right'>
        <button>Right</button>
      </Popover>
      <Popover content='Popover positioned at the bottom' placement='bottom'>
        <button>Bottom</button>
      </Popover>
      <Popover content='Auto positioned popover' placement='auto'>
        <button>Auto</button>
      </Popover>
    </div>
  );
}`" />

### Max Width Options

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <Popover
        header='Extra Small'
        body='This popover has a max-width of xs (20rem).'
        maxWidth='xs'
        placement='top'
      >
        <button>XS Width</button>
      </Popover>
      <Popover
        header='Small Width'
        body='This popover has a max-width of sm (24rem).'
        maxWidth='sm'
        placement='top'
      >
        <button>SM Width</button>
      </Popover>
      <Popover
        header='Medium Width'
        body='This popover has a max-width of md (28rem).'
        maxWidth='md'
        placement='top'
      >
        <button>MD Width</button>
      </Popover>
      <Popover
        header='Large Width'
        body='This popover has a max-width of lg (32rem).'
        maxWidth='lg'
        placement='top'
      >
        <button>LG Width</button>
      </Popover>
      <Popover
        header='Extra Large Width'
        body='This popover has a max-width of xl (36rem).'
        maxWidth='xl'
        placement='top'
      >
        <button>XL Width</button>
      </Popover>
    </div>
  );
}`" />

### User Profile Card Example

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Popover
      header='Sarah Johnson'
      body='Senior Developer • San Francisco, CA • Joined 2 years ago • 245 contributions'
      footer='View full profile'
      maxWidth='md'
      placement='bottom'
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '8px 12px',
        background: 'white',
        borderRadius: 8,
        border: '1px solid #e5e7eb',
        cursor: 'pointer'
      }}>
        <div style={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 600
        }}>
          SJ
        </div>
        <span style={{ fontSize: 14, fontWeight: 500, color: '#374151' }}>
          Sarah J.
        </span>
      </div>
    </Popover>
  );
}`" />

## Props

| Prop         | Type                                             | Default   | Description                                                                                   |
|--------------|--------------------------------------------------|-----------|-----------------------------------------------------------------------------------------------|
| `header`     | `string` \| `JSX.Element`                        | —         | Header content for the popover.                                                               |
| `body`       | `string` \| `JSX.Element`                        | —         | Main body content for the popover.                                                            |
| `footer`     | `JSX.Element`                                    | —         | Footer content for the popover.                                                               |
| `content`    | `string` \| `JSX.Element`                        | —         | Simple content (used if `header`, `body`, and `footer` are not provided).                     |
| `maxWidth`   | `"xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl"`  | `"xs"`    | Maximum width of the popover panel.                                                           |
| `trigger`    | `"hover"`                                        | `"hover"` | How the popover is triggered (only `"hover"` is supported).                                   |
| `placement`  | `"top" \| "bottom" \| "left" \| "right" \| "auto"` | `"top"`   | Position of the popover relative to the trigger element.                                      |
| `children`   | `React.ReactNode`                                | —         | The element that triggers the popover.                                                        |
| `className`  | `string`                                         | —         | Additional CSS classes for the popover container.                                             |
| ...rest      | `Tooltip.Props` (except `content`)               | —         | Any other props supported by the underlying `Tooltip` component, except `content`.            |

## Implementation notes

- `Popover` is a wrapper around the `Tooltip` component, extending it to support structured content (header, body, footer) as well as simple content.
- If only the `content` prop is provided (and `header`, `body`, `footer` are omitted), the popover behaves like a styled tooltip.
- If any of `header`, `body`, or `footer` are provided, the popover renders a rich panel with those sections.
- The `maxWidth` prop controls the maximum width of the popover panel, with responsive Tailwind classes (`max-w-xs`, `max-w-sm`, etc.).
- Only the `"hover"` trigger is supported.
- All additional props (except `content`) are passed to the underlying `Tooltip` component.

## Accessibility

- The popover content is rendered in a floating panel and is accessible via keyboard and screen readers when properly triggered.
- The trigger element (child) should be focusable (e.g., a button or link) to ensure keyboard accessibility.
- The underlying `Tooltip` component manages ARIA attributes and focus management.
- Ensure that the popover content is concise and does not trap focus unless intended for interactive content.

## Best practices

- Use `Popover` for supplementary or contextual information, not for critical actions or persistent content.
- Prefer concise content; avoid overloading the popover with large forms or complex interactions.
- Always provide a clear, focusable trigger element.
- Use the `maxWidth` prop to ensure content remains readable and visually contained.
- For accessibility, ensure that all interactive elements inside the popover are keyboard accessible.

## Related links

- [Tooltip documentation](./tooltip.md)
- [Modal documentation](./modal.md)
- [Dropdown documentation](./dropdown.md)
- [Odyssee Components documentation](../README.md)