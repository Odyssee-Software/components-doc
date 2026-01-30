---
title: Checkbox
description: A customizable checkbox with label, description, and validation states
---

# Checkbox

A flexible checkbox component with support for labels, descriptions, indeterminate state, and validation. Perfect for forms, settings, and multi-selection interfaces. Built for Pulse Framework with full reactivity support.

## Import

```tsx
import { Checkbox, Pulse } from '@odyssee-software/components';
```

## Basic Usage

<LiveCodeEditor :defaultCode="`<Checkbox label='Accept terms and conditions' />`" />

## With Description

Add helper text below the checkbox label.

<LiveCodeEditor :defaultCode="`<Checkbox
  label='Enable notifications'
  description='Receive email notifications about your account activity'
/>`" />

## Sizes

Five size options control the checkbox size: `xs`, `sm`, `md`, `lg`, and `xl`.

<LiveCodeEditor :defaultCode="`<div class='space-y-3'>
  <Checkbox size='xs' label='Extra small checkbox' />
  <Checkbox size='sm' label='Small checkbox' />
  <Checkbox size='md' label='Medium checkbox (default)' />
  <Checkbox size='lg' label='Large checkbox' />
  <Checkbox size='xl' label='Extra large checkbox' />
</div>`" />

## Required Field

Mark checkboxes as required with visual indicators.

<LiveCodeEditor :defaultCode="`<Checkbox
  label='I accept the terms and conditions'
  required={true}
/>`" />

## With Error State

Display validation errors.

<LiveCodeEditor :defaultCode="`<Checkbox
  label='Accept terms'
  error='You must accept the terms to continue'
  required={true}
/>`" />

## With Success State

Show success feedback.

<LiveCodeEditor :defaultCode="`<Checkbox
  label='Email verified'
  success='Your email has been verified'
  checked={true}
/>`" />

## Indeterminate State

Show a partial selection state (useful for "select all" scenarios).

```tsx
const indeterminateCheckbox = (
  <Checkbox
    label="Select all"
    indeterminate={true}
    onChange={(checked) => console.log('Toggled:', checked)}
  />
);
```

## Disabled State

Disable checkboxes when they cannot be interacted with.

<LiveCodeEditor :defaultCode="`<div class='space-y-3'>
  <Checkbox label='Disabled unchecked' disabled={true} />
  <Checkbox label='Disabled checked' disabled={true} checked={true} />
</div>`" />

## Label Position

Control label placement with the `labelPosition` prop.

<LiveCodeEditor :defaultCode="`<div class='space-y-3'>
  <Checkbox label='Label on right (default)' labelPosition='right' />
  <Checkbox label='Label on left' labelPosition='left' />
</div>`" />

## Reactive Value

Control checkbox state with Pulse signals.

```tsx
const isSubscribed = Pulse.signal(false);

const reactiveCheckbox = (
  <div>
    <Checkbox
      label="Subscribe to newsletter"
      checked={isSubscribed}
      onChange={(checked) => isSubscribed(checked)}
    />
    
    <div class="mt-4">
      <p class="text-sm text-gray-600">
        Status: {isSubscribed() ? 'Subscribed ✓' : 'Not subscribed'}
      </p>
    </div>
  </div>
);
```

## Multiple Checkboxes

Create checkbox groups for multiple selections.

```tsx
const MultipleCheckboxes = () => {
  const preferences = Pulse.signal({
    email: true,
    sms: false,
    push: false
  });

  return (
    <div class="space-y-3">
      <h3 class="text-lg font-semibold mb-2">Notification Preferences</h3>
      
      <Checkbox
        label="Email notifications"
        description="Receive updates via email"
        checked={preferences().email}
        onChange={(checked) => 
          preferences({ ...preferences(), email: checked })
        }
      />
      
      <Checkbox
        label="SMS notifications"
        description="Receive updates via SMS"
        checked={preferences().sms}
        onChange={(checked) => 
          preferences({ ...preferences(), sms: checked })
        }
      />
      
      <Checkbox
        label="Push notifications"
        description="Receive push notifications on your device"
        checked={preferences().push}
        onChange={(checked) => 
          preferences({ ...preferences(), push: checked })
        }
      />
    </div>
  );
};
```

## Select All Pattern

Implement a "select all" checkbox with indeterminate state.

```tsx
const SelectAllPattern = () => {
  const items = Pulse.signal([
    { id: 1, name: 'Item 1', selected: false },
    { id: 2, name: 'Item 2', selected: false },
    { id: 3, name: 'Item 3', selected: false }
  ]);

  const allSelected = Pulse.computed(() => 
    items().every(item => item.selected)
  );

  const someSelected = Pulse.computed(() => 
    items().some(item => item.selected) && !allSelected()
  );

  const toggleAll = (checked: boolean) => {
    items(items().map(item => ({ ...item, selected: checked })));
  };

  const toggleItem = (id: number, checked: boolean) => {
    items(items().map(item => 
      item.id === id ? { ...item, selected: checked } : item
    ));
  };

  return (
    <div class="space-y-3">
      <Checkbox
        label="Select All"
        checked={allSelected()}
        indeterminate={someSelected()}
        onChange={toggleAll}
      />
      
      <div class="ml-6 space-y-2">
        {items().map(item => (
          <Checkbox
            key={item.id}
            label={item.name}
            checked={item.selected}
            onChange={(checked) => toggleItem(item.id, checked)}
          />
        ))}
      </div>
    </div>
  );
};
```

## Form Validation

Integrate with form validation.

```tsx
const TermsForm = () => {
  const accepted = Pulse.signal(false);
  const error = Pulse.signal('');

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    
    if (!accepted()) {
      error('You must accept the terms to continue');
      return;
    }
    
    error('');
    console.log('Form submitted!');
  };

  return (
    <form onsubmit={handleSubmit} class="space-y-4">
      <Checkbox
        label="I accept the terms and conditions"
        description="Please read our terms before accepting"
        checked={accepted}
        onChange={(checked) => {
          accepted(checked);
          if (checked) error('');
        }}
        error={error()}
        required
      />
      
      <Button type="submit">
        Continue
      </Button>
    </form>
  );
};
```



## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean \| Signal<boolean>` | `false` | Checked state |
| `indeterminate` | `boolean \| Signal<boolean>` | `false` | Indeterminate state |
| `label` | `string` | - | Checkbox label |
| `description` | `string` | - | Helper text below label |
| `error` | `string` | - | Error message |
| `success` | `string` | - | Success message |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | Checkbox size |
| `labelPosition` | `"left" \| "right"` | `"right"` | Label position |
| `disabled` | `boolean` | `false` | Disable checkbox |
| `required` | `boolean` | `false` | Mark as required |
| `name` | `string` | - | Form field name |
| `value` | `string \| number` | - | Form field value |
| `onChange` | `(checked: boolean) => void` | - | Change event handler |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | Auto-generated | HTML id attribute |

## Accessibility

The Checkbox component follows accessibility best practices:

- ✅ Proper label association with `for` attribute
- ✅ ARIA attributes for states
- ✅ Keyboard navigation support (Space to toggle)
- ✅ Focus management
- ✅ Screen reader friendly
- ✅ Required field indicators
- ✅ Error announcements

### ARIA Attributes

```tsx
const accessibleCheckbox = (
  <Checkbox
    label="Subscribe"
    aria-label="Subscribe to newsletter"
    aria-describedby="newsletter-hint"
    aria-invalid={hasError}
  />
);
```

## Best Practices

### ✅ Do

- Use clear, concise labels
- Provide descriptions for complex options
- Show validation feedback
- Group related checkboxes logically
- Use indeterminate state for partial selections
- Disable dependent options appropriately

```tsx
// Good: Clear label with helpful description
const goodCheckbox = (
  <Checkbox
    label="Enable two-factor authentication"
    description="Add an extra layer of security to your account"
    onChange={handleToggle}
  />
);
```

### ❌ Don't

- Don't use checkboxes for single yes/no questions (use toggle)
- Don't use for mutually exclusive options (use radio buttons)
- Don't hide important information in descriptions
- Don't forget to handle validation
- Don't make labels too long

```tsx
// Bad: Mutually exclusive options as checkboxes
const badCheckboxes = (
  <div>
    <Checkbox label="Male" />
    <Checkbox label="Female" />
  </div>
);

// Better: Use radio buttons for mutually exclusive options
const betterRadios = (
  <RadioGroup name="gender">
    <Radio value="male" label="Male" />
    <Radio value="female" label="Female" />
  </RadioGroup>
);
```

## Use Cases

### Terms Acceptance

```tsx
const TermsCheckbox = () => (
  <Checkbox
    label="I agree to the terms and conditions"
    description="By checking this box, you agree to our terms of service"
    required
  />
);
```

### Feature Toggles

```tsx
const FeatureToggles = () => (
  <div class="space-y-3">
    <Checkbox
      label="Dark Mode"
      description="Use dark theme throughout the app"
    />
    <Checkbox
      label="Compact View"
      description="Show more items on screen"
    />
  </div>
);
```

### Permission Settings

```tsx
const PermissionSettings = () => (
  <div class="space-y-3">
    <Checkbox
      label="Camera Access"
      description="Allow access to camera for profile photos"
    />
    <Checkbox
      label="Location Access"
      description="Allow access to your location"
    />
    <Checkbox
      label="Notification Access"
      description="Allow sending notifications"
    />
  </div>
);
```

### Item Selection

```tsx
const ItemSelector = ({ items }) => (
  <div class="space-y-2">
    {items.map(item => (
      <Checkbox
        key={item.id}
        label={item.name}
        checked={item.selected}
        onChange={(checked) => handleItemToggle(item.id, checked)}
      />
    ))}
  </div>
);
```

## Styling & Theming

All checkbox styles use Tailwind CSS classes and support dark mode automatically.

### Custom Styling

```tsx
const customCheckbox = (
  <Checkbox
    className="accent-purple-600"
    label="Custom colored checkbox"
  />
);
```

## TypeScript

Full TypeScript support with complete type definitions:

```tsx
import type { CheckboxProps } from '@odyssee-software/components';

const props: CheckboxProps = {
  label: 'Subscribe',
  checked: false,
  onChange: (checked: boolean) => {
    console.log('Checked:', checked);
  }
};

const checkbox = <Checkbox {...props} />;
```

## Related Components

- [Radio](/components/radio) - For single selections
- [Toggle](/components/toggle) - For on/off switches
- [RadioGroup](/components/radio-group) - For grouped radio buttons
- [FormGroup](/components/form-group) - For grouping form elements

---

**Version**: 1.0.0  
**Last Updated**: January 2025
