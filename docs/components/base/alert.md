---
title: Alert
description: A flexible alert/notification component with multiple variants, colors, and dismiss functionality
---

# Alert

Display contextual feedback messages for typical user actions with flexible alert components. Supports multiple variants, colors, icons, titles, and dismissible functionality.

## Import

```tsx
import { Alert, Pulse } from '@odyssee-software/components';
```

## Basic Usage

<LiveCodeEditor :defaultCode="`<Alert color='info'>
  This is a basic info alert!
</Alert>`" />

## Variants

The Alert component supports three variants: `solid`, `soft`, and `bordered`.

<LiveCodeEditor :defaultCode="`<div class='space-y-3'>
  <Alert variant='solid' color='primary'>
    Solid variant with filled background
  </Alert>
  <Alert variant='soft' color='success'>
    Soft variant with light background
  </Alert>
  <Alert variant='bordered' color='warning'>
    Bordered variant with outline only
  </Alert>
</div>`" />

## Colors

Alerts support multiple color schemes: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, and `dark`.

<LiveCodeEditor :defaultCode="`<div class='space-y-3'>
  <Alert color='info'>
    Information alert
  </Alert>
  <Alert color='success'>
    Success alert
  </Alert>
  <Alert color='warning'>
    Warning alert
  </Alert>
  <Alert color='danger'>
    Danger alert
  </Alert>
</div>`" />

## With Title

<LiveCodeEditor :defaultCode="`<Alert 
  variant='soft' 
  color='success'
  title='Successfully updated'
>
  Your email preferences have been saved.
</Alert>`" />

## With Icon

<LiveCodeEditor :defaultCode="`<Alert 
  variant='bordered' 
  color='danger'
  icon='⚠️'
  title='Error occurred'
>
  Your purchase has been declined.
</Alert>`" />

## With List Content

<LiveCodeEditor :defaultCode="`<Alert 
  variant='soft' 
  color='danger'
  title='A problem has occurred'
>
  <ul class='list-disc ml-4 mt-2'>
    <li>This username is already in use</li>
    <li>Email field can't be empty</li>
    <li>Please enter a valid phone number</li>
  </ul>
</Alert>`" />

## Dismissible Alert

Make alerts dismissible with a close button.

```tsx
const isVisible = Pulse.signal(true);

const dismissibleAlert = (
  <Alert 
    variant="solid" 
    color="success"
    dismissible={true}
    isVisible={isVisible}
    onDismiss={() => isVisible(false)}
  >
    File has been successfully uploaded.
  </Alert>
);
```

## With Actions

Add action buttons to alerts.

```tsx
const alertWithActions = (
  <Alert 
    variant="soft" 
    color="info"
    title="New software update"
  >
    <p>A new software update is available.</p>
    <div class="mt-3 flex gap-2">
      <button class="px-3 py-1 bg-blue-600 text-white rounded text-sm">
        Update now
      </button>
      <button class="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded text-sm">
        Remind me later
      </button>
    </div>
  </Alert>
);
```

## Reactive Visibility

Control alert visibility with Pulse signals.

```tsx
const showAlert = Pulse.signal(false);

// Show alert after some action
const handleAction = () => {
  showAlert(true);
  
  // Auto-hide after 3 seconds
  setTimeout(() => {
    showAlert(false);
  }, 3000);
};

const reactiveAlert = (
  <Alert 
    variant="solid" 
    color="success"
    isVisible={showAlert}
  >
    Action completed successfully!
  </Alert>
);
```



## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"solid" \| "soft" \| "bordered"` | `"soft"` | Alert variant style |
| `color` | `"primary" \| "secondary" \| "success" \| "danger" \| "warning" \| "info" \| "light" \| "dark"` | `"info"` | Alert color scheme |
| `title` | `string` | - | Alert title text |
| `icon` | `string` | - | Icon to display (emoji or text) |
| `dismissible` | `boolean` | `false` | Show dismiss button |
| `isVisible` | `boolean \| Signal<boolean>` | `true` | Control visibility |
| `onDismiss` | `() => void` | - | Dismiss callback |
| `children` | `string \| HTMLElement \| Array<string \| HTMLElement>` | - | Alert content |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | - | HTML id attribute |

## Accessibility

The Alert component follows accessibility best practices:

- ✅ Uses semantic HTML with proper `role` attributes
- ✅ `role="alert"` for important messages
- ✅ `aria-live="polite"` for non-critical alerts
- ✅ Dismiss button has `aria-label="Close"`
- ✅ Sufficient color contrast ratios
- ✅ Keyboard navigation support

### ARIA Attributes

```tsx
const accessibleAlert = (
  <Alert
    color="danger"
    role="alert"
    aria-live="assertive"
  >
    Critical error message
  </Alert>
);
```

## Best Practices

### ✅ Do

- Use appropriate colors for context (danger for errors, success for completions)
- Provide clear, concise messages
- Use titles to summarize the alert content
- Make alerts dismissible for non-critical messages
- Auto-dismiss temporary notifications

```tsx
// Good: Clear context and message
const goodAlert = (
  <Alert 
    color="success"
    title="Profile Updated"
    dismissible={true}
  >
    Your profile information has been saved successfully.
  </Alert>
);
```

### ❌ Don't

- Don't use too many alerts at once
- Don't make critical alerts dismissible
- Don't use vague messages
- Don't forget to handle dismissal in reactive apps

```tsx
// Bad: Vague and no context
const badAlert = (
  <Alert color="info">
    Something happened.
  </Alert>
);

// Better: Clear and specific
const betterAlert = (
  <Alert 
    color="success"
    icon="✓"
    title="Upload Complete"
  >
    Your document "report.pdf" has been uploaded successfully.
  </Alert>
);
```

## Use Cases

### Form Validation Errors

```tsx
const formErrors = Pulse.signal<string[]>([]);

Pulse.effect(() => {
  if (formErrors().length > 0) {
    const errorAlert = Alert({
      variant: 'soft',
      color: 'danger',
      title: 'Please fix the following errors:',
      children: (
        <ul class="list-disc ml-4 mt-2">
          {formErrors().map(error => <li>{error}</li>)}
        </ul>
      ) as Pulse.JSX.Element
    });
  }
});
```

### Success Messages

```tsx
const showSuccess = (message: string) => {
  const alert = Alert({
    variant: 'solid',
    color: 'success',
    icon: '✓',
    dismissible: true,
    children: message
  });
  
  document.getElementById('notifications')?.appendChild(
    alert as Pulse.JSX.Element
  );
};
```

### Warning Notifications

```tsx
const warningAlert = (
  <Alert 
    variant: 'bordered',
    color: 'warning',
    icon: '⚠️',
    title: 'Session Expiring Soon'
  >
    Your session will expire in 5 minutes. Please save your work.
  </Alert>
);
```

## Styling & Theming

All alert styles use Tailwind CSS classes and support dark mode automatically.

### Custom Styling

```tsx
const customAlert = (
  <Alert 
    className="shadow-lg border-l-4"
    color="primary"
  >
    Custom styled alert
  </Alert>
);
```

## Related Components

- [Button](/components/button) - Add action buttons to alerts
- [Modal](/components/modal) - For more prominent notifications
- [Badge](/components/badge) - For inline status indicators

---

**Version**: 1.0.0  
**Last Updated**: January 2025
