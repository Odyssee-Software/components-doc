---
title: FormGroup
description: A container component for organizing and grouping related form fields
---

# FormGroup

Organize and structure form fields with consistent spacing, layout, and visual grouping. Perfect for complex forms, settings panels, and multi-section interfaces. Built for Pulse Framework with full reactivity support.

## Import

```ts
import { FormGroup } from '@odyssee/components';
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
import { FormGroup, Input, Select, Button, Pulse } from '@odyssee/components';

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

## Complete Example: User Profile Form

```tsx
import { FormGroup, Input, Textarea, Select, Toggle, Button, Card, Pulse } from '@odyssee/components';

const UserProfileForm = () => {
  const profile = Pulse.signal({
    basic: {
      username: '',
      email: '',
      bio: ''
    },
    settings: {
      language: 'en',
      timezone: 'UTC',
      theme: 'light'
    },
    privacy: {
      profileVisible: true,
      showEmail: false,
      showActivity: true
    }
  });

  const hasUnsavedChanges = Pulse.signal(false);

  const updateBasicInfo = (field, value) => {
    hasUnsavedChanges(true);
    profile({
      ...profile(),
      basic: { ...profile().basic, [field]: value }
    });
  };

  const updateSettings = (field, value) => {
    hasUnsavedChanges(true);
    profile({
      ...profile(),
      settings: { ...profile().settings, [field]: value }
    });
  };

  const updatePrivacy = (field, value) => {
    hasUnsavedChanges(true);
    profile({
      ...profile(),
      privacy: { ...profile().privacy, [field]: value }
    });
  };

  const saveProfile = async () => {
    // Save to API
    console.log('Saving profile:', profile());
    hasUnsavedChanges(false);
    alert('Profile saved successfully!');
  };

  const cancelChanges = () => {
    // Reset form
    hasUnsavedChanges(false);
  };

  return (
    <Card title='Edit Profile' size='lg'>
      <div class='space-y-6'>
        {/* Basic Information */}
        <FormGroup
          label='Basic Information'
          description='Your public profile information'
          bordered={true}
          gap='md'
        >
          <Input
            label='Username'
            value={profile().basic.username}
            onChange={(val) => updateBasicInfo('username', val)}
            hint='Choose a unique username'
            required={true}
          />
          
          <Input
            label='Email Address'
            type='email'
            value={profile().basic.email}
            onChange={(val) => updateBasicInfo('email', val)}
            hint='We will never share your email'
            required={true}
          />
          
          <Textarea
            label='Bio'
            value={profile().basic.bio}
            onChange={(val) => updateBasicInfo('bio', val)}
            rows={4}
            maxLength={500}
            showCount={true}
            hint='Tell us about yourself'
          />
        </FormGroup>

        {/* Settings */}
        <FormGroup
          label='Preferences'
          description='Customize your experience'
          bordered={true}
          gap='md'
        >
          <Select
            label='Language'
            value={profile().settings.language}
            options={[
              { value: 'en', label: 'English' },
              { value: 'fr', label: 'Français' },
              { value: 'es', label: 'Español' },
              { value: 'de', label: 'Deutsch' }
            ]}
            onChange={(val) => updateSettings('language', val)}
          />
          
          <Select
            label='Timezone'
            value={profile().settings.timezone}
            options={[
              { value: 'UTC', label: 'UTC' },
              { value: 'EST', label: 'Eastern Time' },
              { value: 'PST', label: 'Pacific Time' },
              { value: 'CET', label: 'Central European Time' }
            ]}
            onChange={(val) => updateSettings('timezone', val)}
          />
          
          <Select
            label='Theme'
            value={profile().settings.theme}
            options={[
              { value: 'light', label: 'Light' },
              { value: 'dark', label: 'Dark' },
              { value: 'auto', label: 'Auto' }
            ]}
            onChange={(val) => updateSettings('theme', val)}
          />
        </FormGroup>

        {/* Privacy Settings */}
        <FormGroup
          label='Privacy Settings'
          description='Control who can see your information'
          bordered={true}
          gap='sm'
        >
          <Toggle
            label='Public Profile'
            description='Make your profile visible to everyone'
            checked={profile().privacy.profileVisible}
            onChange={(val) => updatePrivacy('profileVisible', val)}
          />
          
          <Toggle
            label='Show Email'
            description='Display email on your profile'
            checked={profile().privacy.showEmail}
            onChange={(val) => updatePrivacy('showEmail', val)}
          />
          
          <Toggle
            label='Show Activity'
            description='Let others see your recent activity'
            checked={profile().privacy.showActivity}
            onChange={(val) => updatePrivacy('showActivity', val)}
          />
        </FormGroup>

        {/* Actions */}
        <div class='flex gap-3 pt-4 border-t dark:border-neutral-700'>
          <Button
            onClick={saveProfile}
            color='primary'
            disabled={!hasUnsavedChanges()}
          >
            Save Changes
          </Button>
          <Button
            onClick={cancelChanges}
            variant='outline'
            disabled={!hasUnsavedChanges()}
          >
            Cancel
          </Button>
        </div>

        {hasUnsavedChanges() && (
          <div class='p-3 bg-yellow-50 text-yellow-800 rounded-lg text-sm dark:bg-yellow-900/20 dark:text-yellow-200'>
            You have unsaved changes
          </div>
        )}
      </div>
    </Card>
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
import type { FormGroupProps } from '@odyssee/components';

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