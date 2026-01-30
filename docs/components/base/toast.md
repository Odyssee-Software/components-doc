softwares/components-doc/docs/components/toast.md#L1-120
# Toast

## Introduction

The `Toast` component is a flexible notification element for displaying temporary messages to users. It supports various types (success, error, info, warning, default), variants (default, solid, soft), auto-dismiss, actions, avatars, progress indicators, and loading states. Toasts are typically used to provide feedback about user actions, system events, or status updates.

## Import

```tsx
import { Toast } from '@odyssee/components';
```

## LiveCodeEditor Examples

### Basic Toast

<LiveCodeEditor :defaultCode="`export default function Demo(){
return (
  <Container>
    <Toast type='success' message='File saved successfully!' />
    <Toast type='error' title='Error' message='Failed to save file' dismissible onClose={() => console.log('Closed')} />
    <Toast type='info' message='New notification' duration={3000} />
  </Container>
)
}`" />

### Toast with Actions

<LiveCodeEditor :defaultCode="`export default function Demo(){
return (
  <Container>
    <Toast
      type='success'
      message='Your email has been sent'
      actions={[
        { label: 'Undo', onClick: () => console.log('Undo clicked') }
      ]}
      dismissible
    />
  </Container>
)
}`" />

### Toast with Avatar

<LiveCodeEditor :defaultCode="`export default function Demo(){
return (
  <Container>
    <Toast
      type='default'
      title='James mentioned you'
      message='Nice work! Keep it up!'
      avatar='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300'
      actions={[
        { label: 'Mark as read', onClick: () => console.log('Mark as read') }
      ]}
      dismissible
    />
  </Container>
)
}`" />

### Toast with Progress

<LiveCodeEditor :defaultCode="`export default function Demo(){
return (
  <Container>
    <Toast
      type='default'
      title='Uploading 3 files'
      message='Uploading...'
      progress={57}
      progressLabel='57% · 5 seconds left'
      dismissible
    />
  </Container>
)
}`
" />

### Toast with Loading State

<LiveCodeEditor :defaultCode="`export default function Demo(){
return (
  <Container>
    <Toast
      type='default'
      message='Action in progress'
      loading
      dismissible
    />
  </Container>
)
}`
" />

## Props Table

| Prop           | Type                                                      | Default      | Description                                                                                 |
|----------------|-----------------------------------------------------------|--------------|---------------------------------------------------------------------------------------------|
| `type`         | `"info" \| "success" \| "error" \| "warning" \| "default"`| `"default"`  | Type of toast, determines icon and color.                                                   |
| `variant`      | `"default" \| "solid" \| "soft"`                          | `"default"`  | Visual style variant.                                                                       |
| `title`        | `string`                                                  | —            | Optional title displayed above the message.                                                 |
| `message`      | `string \| Pulse.JSX.Element`                             | **required** | Main content/message of the toast.                                                          |
| `icon`         | `Pulse.JSX.Element`                                       | —            | Custom icon (overrides type icon).                                                          |
| `avatar`       | `string`                                                  | —            | Avatar image URL for notification-style toasts.                                             |
| `duration`     | `number`                                                  | `0`          | Auto-dismiss duration in milliseconds (`0` = no auto-dismiss).                              |
| `dismissible`  | `boolean`                                                 | `false`      | Show close button to manually dismiss the toast.                                            |
| `actions`      | `Array<{ label: string; onClick: (e: Event) => void; variant?: "default" \| "primary" }>` | `[]`         | Array of action buttons.                                                                    |
| `progress`     | `number`                                                  | —            | Progress value (0-100), shows a progress bar.                                               |
| `progressLabel`| `string`                                                  | —            | Label displayed above the progress bar.                                                     |
| `loading`      | `boolean`                                                 | `false`      | Show loading spinner instead of icon.                                                       |
| `visible`      | `boolean \| Signal<boolean>`                              | `true`       | Controls visibility (can be reactive signal).                                               |
| `onClose`      | `() => void`                                              | —            | Callback fired when toast is closed (manual or auto-dismiss).                               |
| `animated`     | `boolean`                                                 | `true`       | Enables transition/animation effects.                                                       |
| `className`    | `string`                                                  | —            | Additional CSS classes for the toast container.                                             |
| `id`           | `string`                                                  | auto-gen     | Unique ID for the toast element.                                                            |
| `style`        | `React.CSSProperties`                                     | —            | Inline styles for the toast container.                                                      |
| `...rest`      | `any`                                                     | —            | Other props are spread to the root element.                                                 |

## Implementation Notes

- The Toast component uses Pulse signals for reactivity and can be controlled via the `visible` prop.
- Supports auto-dismiss via the `duration` prop; if set, the toast will close itself after the specified time.
- Action buttons are rendered as inline elements and can trigger custom callbacks.
- Avatar, progress bar, and loading spinner are conditionally rendered based on props.
- The component is styled using Tailwind CSS utility classes and supports dark mode.
- Icons for each type are built-in SVGs, but can be overridden with the `icon` prop.
- The toast can be animated (fade/slide) when appearing/disappearing.

## Accessibility

- The toast container uses `role="alert"` for screen reader announcements.
- The close button includes `aria-label="Close"` and a visually hidden label for accessibility.
- Keyboard navigation is supported for dismissible toasts.
- Ensure that important notifications are not only color-coded, but also include icons and text for clarity.

## Best Practices

- Use `type` to convey the nature of the message (success, error, info, warning).
- Prefer short, actionable messages for toasts.
- Use `duration` for non-critical notifications; set `dismissible` for messages requiring user acknowledgment.
- Avoid stacking too many toasts at once; use a ToastContainer to manage placement and stacking.
- Provide clear action labels and callbacks for interactive toasts.
- For progress or loading states, update the toast dynamically using signals.

## Related Links

- [ToastContainer documentation](./toast-container.md) (if available)
- [Pulse Framework documentation](https://github.com/odyssee-software/pulse-framework)
- [Alert component](./alert.md)
- [Avatar component](./avatar.md)
- [Progress component](./progress.md)
- [Spinner component](./spinner.md)
