---
title: Modal
description: A flexible modal/dialog overlay component with backdrop, animations, and sizes
---

# Modal

Display content in an overlay dialog with backdrop, animations, and flexible sizing. Perfect for forms, confirmations, and detailed content views. Built for Pulse Framework with full reactivity support.

## Import

```tsx
import { Modal, Pulse } from '@odyssee-software/components';
```

## Basic Usage

```tsx
const isOpen = Pulse.signal(false);

const basicModal = (
  <div>
    <Button onClick={() => isOpen(true)}>
      Open Modal
    </Button>
    
    <Modal
      isOpen={isOpen}
      title="Modal Title"
      onClose={() => isOpen(false)}
    >
      <p>This is the modal content. You can put any content here.</p>
    </Modal>
  </div>
);
```

## Sizes

The Modal component supports five sizes: `sm`, `md`, `lg`, `xl`, and `2xl`.

```tsx
const modalSizes = (
  <div class="space-x-2">
    <Button onClick={() => openModal('sm')}>Small</Button>
    <Button onClick={() => openModal('md')}>Medium</Button>
    <Button onClick={() => openModal('lg')}>Large</Button>
    <Button onClick={() => openModal('xl')}>Extra Large</Button>
    <Button onClick={() => openModal('2xl')}>2X Large</Button>
  </div>
);
```

## With Footer Actions

Add action buttons in the footer.

```tsx
const isOpen = Pulse.signal(false);

const modalWithFooter = (
  <Modal
    isOpen={isOpen}
    title="Confirm Action"
    onClose={() => isOpen(false)}
    footer={
      <>
        <Button
          variant="outline"
          onClick={() => isOpen(false)}
        >
          Cancel
        </Button>
        <Button
          variant="solid"
          color="primary"
          onClick={() => {
            handleConfirm();
            isOpen(false);
          }}
        >
          Confirm
        </Button>
      </>
    }
  >
    <p>Are you sure you want to proceed with this action?</p>
  </Modal>
);
```

## Centered Modal

Center the modal vertically in the viewport.

```tsx
const centeredModal = (
  <Modal
    isOpen={isOpen}
    title="Centered Modal"
    centered={true}
    onClose={() => isOpen(false)}
  >
    <p>This modal is centered vertically on the screen.</p>
  </Modal>
);
```

## Static Backdrop

Prevent closing by clicking outside the modal.

```tsx
const staticModal = (
  <Modal
    isOpen={isOpen}
    title="Static Backdrop"
    staticBackdrop={true}
    onClose={() => isOpen(false)}
  >
    <p>You must use the close button or cancel action to dismiss this modal.</p>
  </Modal>
);
```

## Fullscreen Modal

Display modal in fullscreen mode.

```tsx
const fullscreenModal = (
  <Modal
    isOpen={isOpen}
    title="Fullscreen Modal"
    fullscreen={true}
    onClose={() => isOpen(false)}
  >
    <div>
      <p>This modal takes up the entire screen.</p>
      <p>Perfect for forms, detailed content, or immersive experiences.</p>
    </div>
  </Modal>
);
```

## Animation Variants

Choose from different animation styles.

```tsx
// Scale animation (default)
<Modal animation="scale" isOpen={isOpen} title="Scale">
  <p>Scales in from center</p>
</Modal>

// Slide down
<Modal animation="slideDown" isOpen={isOpen} title="Slide Down">
  <p>Slides down from top</p>
</Modal>

// Slide up
<Modal animation="slideUp" isOpen={isOpen} title="Slide Up">
  <p>Slides up from bottom</p>
</Modal>

// Fade
<Modal animation="fade" isOpen={isOpen} title="Fade">
  <p>Simple fade in/out</p>
</Modal>
```

## Without Close Button

Hide the close button in the header.

```tsx
const noCloseButton = (
  <Modal
    isOpen={isOpen}
    title="No Close Button"
    showCloseButton={false}
    staticBackdrop={true}
    onClose={() => isOpen(false)}
  >
    <p>You must use the action buttons to close this modal.</p>
  </Modal>
);
```

## Disable Escape Key

Prevent closing with the Escape key.

```tsx
const noEscape = (
  <Modal
    isOpen={isOpen}
    title="No Escape"
    closeOnEscape={false}
    onClose={() => isOpen(false)}
  >
    <p>Pressing Escape won't close this modal.</p>
  </Modal>
);
```

## Form Modal

Create forms inside modals.

```tsx
const FormModal = () => {
  const isOpen = Pulse.signal(false);
  const name = Pulse.signal('');
  const email = Pulse.signal('');

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log('Submitted:', { name: name(), email: email() });
    isOpen(false);
  };

  return (
    <div>
      <Button onClick={() => isOpen(true)}>
        Add User
      </Button>

      <Modal
        isOpen={isOpen}
        title="Add New User"
        size="lg"
        onClose={() => isOpen(false)}
        footer={
          <>
            <Button
              variant="outline"
              onClick={() => isOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              form="user-form"
              color="primary"
            >
              Save User
            </Button>
          </>
        }
      >
        <form id="user-form" onsubmit={handleSubmit} class="space-y-4">
          <Input
            label="Name"
            value={name}
            onChange={(val) => name(val)}
            required
          />
          <Input
            type="email"
            label="Email"
            value={email}
            onChange={(val) => email(val)}
            required
          />
        </form>
      </Modal>
    </div>
  );
};
```

## Confirmation Dialog

Create confirmation dialogs with actions.

```tsx
const ConfirmationDialog = ({ onConfirm }) => {
  const isOpen = Pulse.signal(false);

  return (
    <div>
      <Button
        color="danger"
        onClick={() => isOpen(true)}
      >
        Delete Item
      </Button>

      <Modal
        isOpen={isOpen}
        title="Confirm Deletion"
        size="sm"
        centered={true}
        onClose={() => isOpen(false)}
        footer={
          <>
            <Button
              variant="outline"
              onClick={() => isOpen(false)}
            >
              Cancel
            </Button>
            <Button
              color="danger"
              onClick={() => {
                onConfirm();
                isOpen(false);
              }}
            >
              Delete
            </Button>
          </>
        }
      >
        <div class="space-y-2">
          <p class="text-gray-600">
            Are you sure you want to delete this item?
          </p>
          <p class="text-sm text-red-600">
            This action cannot be undone.
          </p>
        </div>
      </Modal>
    </div>
  );
};
```

## Complete Example

Here's a comprehensive example with multiple features:

```tsx
import { Modal, Button, Input, Alert, Pulse } from '@odyssee-software/components';

const UserManagementModal = () => {
  const isOpen = Pulse.signal(false);
  const isLoading = Pulse.signal(false);
  const error = Pulse.signal('');
  
  const formData = Pulse.signal({
    name: '',
    email: '',
    role: 'user'
  });

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    isLoading(true);
    error('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Validation
      if (!formData().name || !formData().email) {
        throw new Error('Please fill in all required fields');
      }

      console.log('User created:', formData());
      isOpen(false);
      
      // Reset form
      formData({ name: '', email: '', role: 'user' });
      
    } catch (err) {
      error(err.message);
    } finally {
      isLoading(false);
    }
  };

  return (
    <div>
      <Button onClick={() => isOpen(true)} icon="➕">
        Add User
      </Button>

      <Modal
        isOpen={isOpen}
        title="Create New User"
        size="lg"
        centered={true}
        staticBackdrop={isLoading()}
        closeOnEscape={!isLoading()}
        onClose={() => {
          if (!isLoading()) {
            isOpen(false);
            error('');
          }
        }}
        footer={
          <>
            <Button
              variant="outline"
              onClick={() => isOpen(false)}
              disabled={isLoading()}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              form="user-form"
              color="primary"
              loading={isLoading()}
            >
              Create User
            </Button>
          </>
        }
      >
        {error() && (
          <Alert
            color="danger"
            dismissible={true}
            onDismiss={() => error('')}
            className="mb-4"
          >
            {error()}
          </Alert>
        )}

        <form id="user-form" onsubmit={handleSubmit} class="space-y-4">
          <Input
            label="Full Name"
            value={formData().name}
            onChange={(val) => formData({ ...formData(), name: val })}
            placeholder="John Doe"
            required
            disabled={isLoading()}
          />

          <Input
            type="email"
            label="Email Address"
            value={formData().email}
            onChange={(val) => formData({ ...formData(), email: val })}
            placeholder="john@example.com"
            required
            disabled={isLoading()}
          />

          <Select
            label="Role"
            value={formData().role}
            onChange={(val) => formData({ ...formData(), role: val })}
            disabled={isLoading()}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="moderator">Moderator</option>
          </Select>
        </form>
      </Modal>
    </div>
  );
};
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean \| Signal<boolean>` | **Required** | Control modal visibility |
| `title` | `string \| HTMLElement` | - | Modal title |
| `children` | `string \| HTMLElement \| Array` | - | Modal body content |
| `footer` | `HTMLElement \| Array<HTMLElement>` | - | Footer content (typically buttons) |
| `size` | `"sm" \| "md" \| "lg" \| "xl" \| "2xl"` | `"md"` | Modal width |
| `centered` | `boolean` | `false` | Center vertically in viewport |
| `staticBackdrop` | `boolean` | `false` | Prevent closing by clicking outside |
| `fullscreen` | `boolean` | `false` | Display in fullscreen mode |
| `showCloseButton` | `boolean` | `true` | Show close button in header |
| `closeOnEscape` | `boolean` | `true` | Close on Escape key press |
| `animation` | `"scale" \| "slideDown" \| "slideUp" \| "fade"` | `"scale"` | Animation style |
| `onClose` | `() => void` | - | Close callback |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | Auto-generated | HTML id attribute |

## Accessibility

The Modal component follows accessibility best practices:

- ✅ Uses proper `role="dialog"` and `aria-modal="true"`
- ✅ Traps focus within the modal
- ✅ Returns focus to trigger element on close
- ✅ Closes on Escape key (configurable)
- ✅ Proper ARIA labels and descriptions
- ✅ Keyboard navigation support
- ✅ Prevents body scroll when open

### ARIA Attributes

```tsx
const accessibleModal = (
  <Modal
    isOpen={isOpen}
    title="Accessible Modal"
    aria-label="User settings dialog"
    aria-describedby="modal-description"
  >
    <p id="modal-description">
      Configure your user settings and preferences.
    </p>
  </Modal>
);
```

## Best Practices

### ✅ Do

- Use meaningful titles
- Provide clear action buttons
- Keep content focused and concise
- Use appropriate sizes for content
- Handle loading states in forms
- Validate before closing on submit

```tsx
// Good: Clear title, actions, and content
const goodModal = (
  <Modal
    title="Delete Account"
    isOpen={isOpen}
    onClose={() => isOpen(false)}
    footer={
      <>
        <Button variant="outline" onClick={() => isOpen(false)}>
          Cancel
        </Button>
        <Button color="danger" onClick={handleDelete}>
          Delete
        </Button>
      </>
    }
  >
    <p>This action is permanent and cannot be undone.</p>
  </Modal>
);
```

### ❌ Don't

- Don't nest modals (use sequential flow instead)
- Don't use for simple notifications (use alerts/toasts)
- Don't make critical content only accessible via modal
- Don't forget to handle loading states
- Don't use very small sizes for forms

```tsx
// Bad: Nested modals
const badModal = (
  <Modal isOpen={isOpen1}>
    <Modal isOpen={isOpen2}>
      <Modal isOpen={isOpen3}>
        Too many modals!
      </Modal>
    </Modal>
  </Modal>
);

// Better: Sequential flow
const betterFlow = () => {
  const step = Pulse.signal(1);
  
  return (
    <Modal isOpen={isOpen}>
      {step() === 1 && <Step1 onNext={() => step(2)} />}
      {step() === 2 && <Step2 onNext={() => step(3)} />}
      {step() === 3 && <Step3 onComplete={() => isOpen(false)} />}
    </Modal>
  );
};
```

## Use Cases

### Image Viewer

```tsx
const ImageModal = ({ imageUrl, onClose }) => (
  <Modal
    isOpen={true}
    size="2xl"
    centered={true}
    onClose={onClose}
    showCloseButton={true}
  >
    <img src={imageUrl} alt="Full size" class="w-full h-auto" />
  </Modal>
);
```

### Video Player

```tsx
const VideoModal = ({ videoUrl, onClose }) => (
  <Modal
    isOpen={true}
    size="xl"
    centered={true}
    onClose={onClose}
  >
    <video controls class="w-full">
      <source src={videoUrl} type="video/mp4" />
    </video>
  </Modal>
);
```

### Terms and Conditions

```tsx
const TermsModal = ({ onAccept, onDecline }) => (
  <Modal
    isOpen={true}
    title="Terms and Conditions"
    size="lg"
    staticBackdrop={true}
    footer={
      <>
        <Button variant="outline" onClick={onDecline}>
          Decline
        </Button>
        <Button color="primary" onClick={onAccept}>
          Accept
        </Button>
      </>
    }
  >
    <div class="prose max-w-none">
      <p>Please read and accept our terms...</p>
      {/* Terms content */}
    </div>
  </Modal>
);
```

## Styling & Theming

All modal styles use Tailwind CSS classes and support dark mode automatically.

### Custom Styling

```tsx
const customModal = (
  <Modal
    isOpen={isOpen}
    title="Custom Styled"
    className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900"
    onClose={() => isOpen(false)}
  >
    <p>Custom styled modal with gradient background</p>
  </Modal>
);
```

## TypeScript

Full TypeScript support with complete type definitions:

```tsx
import type { ModalProps } from '@odyssee-software/components';

const props: ModalProps = {
  isOpen: true,
  title: 'TypeScript Modal',
  size: 'lg',
  centered: true,
  onClose: () => {
    console.log('Closed');
  }
};

const modal = <Modal {...props}>Content</Modal>;
```

## Related Components

- [Alert](/components/alert) - For simple notifications
- [Button](/components/button) - For modal actions
- [Form Components](/components/forms-overview) - For modal forms

---

**Version**: 1.0.0  
**Last Updated**: January 2025
