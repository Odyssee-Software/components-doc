---
title: FormGroup
description: A container component for organizing and grouping related form fields
---

# FormGroup

Organize and structure form fields with consistent spacing, layout, and visual grouping. Perfect for complex forms, settings panels, and multi-section interfaces. Built for Pulse Framework with full reactivity support.

## Import

```ts
import { FormGroup } from '@odyssee-software/components';
```

## Basic Usage

<LiveCodeEditor :defaultCode="`<FormGroup label='Personal Information'>
  <Input label='First Name' placeholder='John' />
  <Input label='Last Name' placeholder='Doe' />
  <Input label='Email' type='email' placeholder='john@example.com' />
</FormGroup>`" />

## With Description

<LiveCodeEditor :defaultCode="`<FormGroup
  label='Account Settings'
  description='Manage your account preferences and security options'
>
  <Input label='Username' placeholder='username' />
  <Input label='Password' type='password' placeholder='••••••••' />
  <Toggle label='Two-factor authentication' />
</FormGroup>`" />

## Layout Directions

### Vertical Layout (Default)

<LiveCodeEditor :defaultCode="`<FormGroup label='Contact Information' direction='vertical'>
  <Input label='Email' type='email' />
  <Input label='Phone' type='tel' />
  <Input label='Address' />
</FormGroup>`" />

### Horizontal Layout

<LiveCodeEditor :defaultCode="`<FormGroup label='Name' direction='horizontal'>
  <Input label='First Name' placeholder='John' />
  <Input label='Last Name' placeholder='Doe' />
</FormGroup>`" />

## Gap Sizes

Control spacing between form fields.

<LiveCodeEditor :defaultCode="`<div class='space-y-6'>
  <FormGroup label='Extra Small Gap' gap='xs'>
    <Input label='Field 1' />
    <Input label='Field 2' />
  </FormGroup>
  
  <FormGroup label='Small Gap' gap='sm'>
    <Input label='Field 1' />
    <Input label='Field 2' />
  </FormGroup>
  
  <FormGroup label='Medium Gap (default)' gap='md'>
    <Input label='Field 1' />
    <Input label='Field 2' />
  </FormGroup>
  
  <FormGroup label='Large Gap' gap='lg'>
    <Input label='Field 1' />
    <Input label='Field 2' />
  </FormGroup>
</div>`" />

## Bordered Groups

<LiveCodeEditor :defaultCode="`<FormGroup
  label='Billing Information'
  description='Enter your payment details'
  bordered={true}
>
  <Input label='Card Number' placeholder='1234 5678 9012 3456' />
  <div class='grid grid-cols-2 gap-4'>
    <Input label='Expiry Date' placeholder='MM/YY' />
    <Input label='CVV' placeholder='123' />
  </div>
</FormGroup>`" />

## Multiple Form Groups

<LiveCodeEditor :defaultCode="`<div class='space-y-6'>
  <FormGroup
    label='Personal Details'
    description='Tell us about yourself'
    bordered={true}
  >
    <Input label='Full Name' />
    <Input label='Date of Birth' type='date' />
  </FormGroup>
  
  <FormGroup
    label='Contact Details'
    description='How can we reach you?'
    bordered={true}
  >
    <Input label='Email' type='email' />
    <Input label='Phone' type='tel' />
  </FormGroup>
  
  <FormGroup
    label='Preferences'
    description='Customize your experience'
    bordered={true}
  >
    <Toggle label='Email notifications' />
    <Toggle label='SMS notifications' />
  </FormGroup>
</div>`" />

## Reactive Form Groups

Build dynamic forms with Pulse signals.

```tsx
import { FormGroup, Input, Select, Button, Pulse } from '@odyssee-software/components';

const DynamicForm = () => {
  const formData = Pulse.signal({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: ''
    },
    address: {
      street: '',
      city: '',
      country: ''
    },
    preferences: {
      newsletter: false,
      notifications: true
    }
  });

  const updatePersonalInfo = (field, value) => {
    formData({
      ...formData(),
      personalInfo: {
        ...formData().personalInfo,
        [field]: value
      }
    });
  };

  const updateAddress = (field, value) => {
    formData({
      ...formData(),
      address: {
        ...formData().address,
        [field]: value
      }
    });
  };

  const isFormValid = Pulse.computed(() => {
    const data = formData();
    return data.personalInfo.firstName && 
           data.personalInfo.email && 
           data.address.city;
  });

  const submitForm = () => {
    if (isFormValid()) {
      console.log('Form data:', formData());
      alert('Form submitted successfully!');
    }
  };

  return (
    <div class='max-w-2xl space-y-6'>
      <FormGroup
        label='Personal Information'
        description='Basic details about you'
        bordered={true}
      >
        <Input
          label='First Name'
          value={formData().personalInfo.firstName}
          onChange={(val) => updatePersonalInfo('firstName', val)}
          required={true}
        />
        <Input
          label='Last Name'
          value={formData().personalInfo.lastName}
          onChange={(val) => updatePersonalInfo('lastName', val)}
        />
        <Input
          label='Email'
          type='email'
          value={formData().personalInfo.email}
          onChange={(val) => updatePersonalInfo('email', val)}
          required={true}
        />
      </FormGroup>

      <FormGroup
        label='Address'
        description='Where do you live?'
        bordered={true}
      >
        <Input
          label='Street Address'
          value={formData().address.street}
          onChange={(val) => updateAddress('street', val)}
        />
        <Input
          label='City'
          value={formData().address.city}
          onChange={(val) => updateAddress('city', val)}
          required={true}
        />
        <Select
          label='Country'
          options={[
            { value: 'us', label: 'United States' },
            { value: 'uk', label: 'United Kingdom' },
            { value: 'ca', label: 'Canada' }
          ]}
          value={formData().address.country}
          onChange={(val) => updateAddress('country', val)}
        />
      </FormGroup>

      <Button
        onClick={submitForm}
        color='primary'
        fullWidth
        disabled={!isFormValid()}
      >
        Submit Form
      </Button>
    </div>
  );
};
```



## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Group heading/title |
| `description` | `string` | - | Group description text |
| `children` | `HTMLElement \| HTMLElement[]` | - | Form field elements |
| `direction` | `"vertical" \| "horizontal"` | `"vertical"` | Layout direction |
| `gap` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | Spacing between fields |
| `bordered` | `boolean` | `false` | Add border around group |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | Auto-generated | HTML id attribute |

## Accessibility

The FormGroup component follows accessibility best practices:

- ✅ Semantic HTML structure with proper headings
- ✅ Clear visual grouping of related fields
- ✅ Screen reader friendly labels and descriptions
- ✅ Proper focus management within groups
- ✅ Keyboard navigation support
- ✅ ARIA landmarks for complex forms

```tsx
// Accessibility features are built-in
const accessibleForm = (
  <FormGroup
    label='Contact Information'
    description='How we can reach you'
  >
    <Input label='Email' type='email' required={true} />
    <Input label='Phone' type='tel' />
    {/* All fields properly associated with group */}
  </FormGroup>
);
```

## Best Practices

### ✅ Do

- Group related fields logically
- Use clear, descriptive labels
- Provide helpful descriptions
- Use appropriate gap sizes
- Border groups for visual separation

```tsx
// Good: Clear organization and context
const goodForm = (
  <div class='space-y-6'>
    <FormGroup
      label='Personal Details'
      description='Basic information about you'
      bordered={true}
    >
      <Input label='Full Name' required={true} />
      <Input label='Email' type='email' required={true} />
    </FormGroup>
    
    <FormGroup
      label='Address'
      description='Where do you live?'
      bordered={true}
    >
      <Input label='Street' />
      <Input label='City' />
    </FormGroup>
  </div>
);
```

### ❌ Don't

- Don't mix unrelated fields in one group
- Don't omit labels for form groups
- Don't use too many nested groups
- Don't forget descriptions for complex sections
- Don't use inconsistent gap sizes

```tsx
// Bad: Unclear grouping, no context
const badForm = (
  <FormGroup>
    <Input label='Name' />
    <Input label='Credit Card' />
    <Input label='Favorite Color' />
    {/* Unrelated fields mixed together */}
  </FormGroup>
);

// Better: Logical grouping
const betterForm = (
  <>
    <FormGroup label='Personal Info'>
      <Input label='Name' />
    </FormGroup>
    <FormGroup label='Payment'>
      <Input label='Credit Card' />
    </FormGroup>
  </>
);
```

## Use Cases

### Multi-Step Form

```tsx
const MultiStepForm = () => {
  const step = Pulse.signal(1);

  return (
    <div>
      {step() === 1 && (
        <FormGroup
          label='Step 1: Personal Information'
          description='Let us know who you are'
          bordered={true}
        >
          <Input label='First Name' />
          <Input label='Last Name' />
          <Input label='Email' type='email' />
        </FormGroup>
      )}

      {step() === 2 && (
        <FormGroup
          label='Step 2: Company Details'
          description='Tell us about your company'
          bordered={true}
        >
          <Input label='Company Name' />
          <Input label='Position' />
          <Select label='Company Size' options={[...]} />
        </FormGroup>
      )}
    </div>
  );
};
```

### Settings Panel

```tsx
const SettingsPanel = () => {
  return (
    <div class='space-y-6'>
      <FormGroup
        label='Account Settings'
        description='Manage your account'
        bordered={true}
      >
        <Input label='Username' />
        <Input label='Email' type='email' />
        <Button variant='outline' size='sm'>Change Password</Button>
      </FormGroup>

      <FormGroup
        label='Notifications'
        description='Choose what updates you receive'
        bordered={true}
      >
        <Toggle label='Email notifications' />
        <Toggle label='Push notifications' />
        <Toggle label='SMS notifications' />
      </FormGroup>
    </div>
  );
};
```

### Checkout Form

```tsx
const CheckoutForm = () => {
  return (
    <div class='space-y-6'>
      <FormGroup
        label='Shipping Address'
        bordered={true}
        gap='md'
      >
        <Input label='Full Name' required={true} />
        <Input label='Address Line 1' required={true} />
        <Input label='Address Line 2' />
        <div class='grid grid-cols-2 gap-4'>
          <Input label='City' required={true} />
          <Input label='ZIP Code' required={true} />
        </div>
        <Select label='Country' options={[...]} required={true} />
      </FormGroup>

      <FormGroup
        label='Payment Information'
        bordered={true}
        gap='md'
      >
        <Input label='Cardholder Name' required={true} />
        <Input label='Card Number' required={true} />
        <div class='grid grid-cols-2 gap-4'>
          <Input label='Expiry (MM/YY)' required={true} />
          <Input label='CVV' required={true} />
        </div>
      </FormGroup>
    </div>
  );
};
```

## Styling & Theming

All FormGroup styles use Tailwind CSS and support dark mode automatically.

### Custom Styling

```tsx
const customFormGroup = (
  <FormGroup
    label='Custom Styled Group'
    bordered={true}
    className='bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
  >
    <Input label='Field 1' />
    <Input label='Field 2' />
  </FormGroup>
);
```

### Dark Mode

```tsx
// Dark mode support is automatic
const darkModeForm = (
  <FormGroup
    label='Settings'
    description='Configure your preferences'
    bordered={true}
    // Automatically uses:
    // - dark:border-gray-700
    // - dark:text-gray-100
    // - dark:text-gray-400 for description
  >
    <Input label='Option 1' />
    <Toggle label='Option 2' />
  </FormGroup>
);
```

## TypeScript

Full TypeScript support with complete type definitions.

```tsx
import type { FormGroupProps } from '@odyssee-software/components';

// Type-safe props
const props: FormGroupProps = {
  label: 'User Information',
  description: 'Enter your details',
  direction: 'vertical',
  gap: 'md',
  bordered: true,
  className: 'custom-form-group'
};

const group = (
  <FormGroup {...props}>
    <Input label='Name' />
    <Input label='Email' />
  </FormGroup>
);

// Type-safe direction
type Direction = 'vertical' | 'horizontal';
const dir: Direction = 'horizontal';

const horizontalGroup = (
  <FormGroup label='Name' direction={dir}>
    <Input label='First' />
    <Input label='Last' />
  </FormGroup>
);
```

## Related Components

- [Input](/components/input) - Text input fields
- [Select](/components/select) - Dropdown selection
- [Checkbox](/components/checkbox) - Checkbox inputs
- [Toggle](/components/toggle) - Toggle switches
- [Card](/components/card) - Container for form groups

---

**Version**: 1.0.0  
**Last Updated**: January 2025
