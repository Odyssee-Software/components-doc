---
title: Form Components Overview
description: Complete guide to all form components in Odyssee Components
---

# Form Components Overview

A comprehensive collection of form components built with Pulse Framework for creating reactive, validated, and accessible forms.

## Available Components

### Text Input Components

#### [Input](/components/input)
Text input fields with labels, hints, validation, and icons.

<LiveCodeEditor :defaultCode="`<Input 
  label='Email'
  type='email'
  placeholder='you@example.com'
/>`" />

#### [Textarea](/components/textarea)
Multi-line text input with auto-resize support.

<LiveCodeEditor :defaultCode="`<Textarea 
  label='Description'
  placeholder='Enter description...'
  autoResize={true}
/>`" />

### Selection Components

#### [Select](/components/select)
Dropdown selection with options and groups.

<LiveCodeEditor :defaultCode="`<Select 
  label='Country'
  options={[
    { value: '', label: 'Select a country' },
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'fr', label: 'France' }
  ]}
/>`" />

#### [RadioGroup](/components/radio-group)
Grouped radio buttons for single selection.

<LiveCodeEditor :defaultCode="`<RadioGroup 
  label='Plan'
  options={[
    { value: 'free', label: 'Free', description: 'Basic features' },
    { value: 'pro', label: 'Pro', description: 'Advanced features' }
  ]}
/>`" />

### Boolean Input Components

#### [Checkbox](/components/checkbox)
Checkbox input with label and description.

<LiveCodeEditor :defaultCode="`<Checkbox 
  label='I accept the Terms and Conditions'
/>`" />

#### [Toggle](/components/toggle)
Switch component for on/off states.

<LiveCodeEditor :defaultCode="`<Toggle 
  label='Enable Dark Mode'
  description='Switch between light and dark theme'
/>`" />

### Specialized Input Components

#### [FileInput](/components/file-input)
File upload input with validation.

<LiveCodeEditor :defaultCode="`<FileInput 
  label='Upload image'
  accept='image/*'
  hint='PNG, JPG or GIF (max. 5MB)'
/>`" />

#### [RangeSlider](/components/range-slider)
Numeric range slider.

<LiveCodeEditor :defaultCode="`<RangeSlider 
  label='Volume'
  min={0}
  max={100}
  value={50}
/>`" />

#### [ColorPicker](/components/color-picker)
Color selection input.

<LiveCodeEditor :defaultCode="`<ColorPicker 
  label='Brand Color'
  value='#3B82F6'
/>`" />

### Layout Components

#### [FormGroup](/components/form-group)
Container for organizing form fields.

<LiveCodeEditor :defaultCode="`<FormGroup label='Personal Info' bordered={true}>
  <Input label='First Name' placeholder='John' />
  <Input label='Last Name' placeholder='Doe' />
</FormGroup>`" />

## Complete Form Example

Here's a comprehensive example using multiple form components:

```tsx
import { 
  Input, 
  Select, 
  Checkbox, 
  Toggle,
  Textarea,
  RadioGroup,
  Button,
  FormGroup,
  Pulse 
} from '@odyssee/components';

const RegistrationForm = () => {
  // Form state
  const firstName = Pulse.signal('');
  const lastName = Pulse.signal('');
  const email = Pulse.signal('');
  const password = Pulse.signal('');
  const country = Pulse.signal('');
  const plan = Pulse.signal('free');
  const bio = Pulse.signal('');
  const acceptTerms = Pulse.signal(false);
  const newsletter = Pulse.signal(true);
  const isLoading = Pulse.signal(false);

  // Validation
  const isValidEmail = Pulse.computed(() => {
    return email().includes('@') && email().includes('.');
  });

  const isValidPassword = Pulse.computed(() => {
    return password().length >= 8;
  });

  const isFormValid = Pulse.computed(() => {
    return firstName().length > 0 &&
           lastName().length > 0 &&
           isValidEmail() &&
           isValidPassword() &&
           country().length > 0 &&
           acceptTerms();
  });

  // Submit handler
  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    
    if (!isFormValid()) return;
    
    isLoading(true);
    
    try {
      const formData = {
        firstName: firstName(),
        lastName: lastName(),
        email: email(),
        password: password(),
        country: country(),
        plan: plan(),
        bio: bio(),
        newsletter: newsletter()
      };
      
      console.log('Submitting:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert('Registration successful!');
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      isLoading(false);
    }
  };

  return (
    <form onsubmit={handleSubmit} class="max-w-2xl mx-auto space-y-6">
      {/* Personal Information */}
      <FormGroup 
        label="Personal Information" 
        description="Tell us about yourself"
        bordered={true}
      >
        <div class="grid grid-cols-2 gap-4">
          <Input
            label="First Name"
            value={firstName}
            onChange={(val) => firstName(val)}
            placeholder="John"
            required={true}
          />
          
          <Input
            label="Last Name"
            value={lastName}
            onChange={(val) => lastName(val)}
            placeholder="Doe"
            required={true}
          />
        </div>
        
        <Input
          type="email"
          label="Email Address"
          value={email}
          onChange={(val) => email(val)}
          placeholder="john@example.com"
          icon="✉️"
          error={Pulse.computed(() => {
            const val = email();
            if (val.length === 0) return '';
            return isValidEmail() ? '' : 'Invalid email format';
          })}
          required={true}
        />
        
        <Input
          type="password"
          label="Password"
          value={password}
          onChange={(val) => password(val)}
          placeholder="••••••••"
          icon="🔒"
          hint="Must be at least 8 characters"
          error={Pulse.computed(() => {
            const val = password();
            if (val.length === 0) return '';
            return isValidPassword() ? '' : 'Password too short';
          })}
          required={true}
        />
        
        <Select
          label="Country"
          value={country}
          onChange={(val) => country(val)}
          options={[
            { value: '', label: 'Select a country' },
            { value: 'us', label: 'United States' },
            { value: 'uk', label: 'United Kingdom' },
            { value: 'fr', label: 'France' },
            { value: 'de', label: 'Germany' },
            { value: 'ca', label: 'Canada' }
          ]}
          required={true}
        />
      </FormGroup>

      {/* Plan Selection */}
      <FormGroup label="Choose Your Plan">
        <RadioGroup
          name="plan"
          value={plan}
          onChange={(val) => plan(val)}
          options={[
            { 
              value: 'free', 
              label: 'Free', 
              description: 'Basic features for personal use' 
            },
            { 
              value: 'pro', 
              label: 'Pro - $29/month', 
              description: 'Advanced features for professionals' 
            },
            { 
              value: 'enterprise', 
              label: 'Enterprise', 
              description: 'Custom pricing and support' 
            }
          ]}
        />
      </FormGroup>

      {/* Bio */}
      <FormGroup label="About You">
        <Textarea
          label="Bio"
          value={bio}
          onChange={(val) => bio(val)}
          placeholder="Tell us about yourself..."
          maxLength={500}
          showCount={true}
          autoResize={true}
        />
      </FormGroup>

      {/* Preferences */}
      <FormGroup label="Preferences">
        <Checkbox
          label="I accept the Terms and Conditions"
          checked={acceptTerms}
          onChange={(val) => acceptTerms(val)}
          required={true}
        />
        
        <Toggle
          label="Subscribe to newsletter"
          description="Get updates about new features and tips"
          checked={newsletter}
          onChange={(val) => newsletter(val)}
        />
      </FormGroup>

      {/* Submit Button */}
      <Button
        type="submit"
        color="primary"
        size="lg"
        fullWidth={true}
        loading={isLoading}
        disabled={Pulse.computed(() => !isFormValid())}
      >
        Create Account
      </Button>
    </form>
  ) as Pulse.JSX.Element;
};
```

## Form Validation

### Real-time Validation

Validate fields as users type using Pulse computed values:

```tsx
const email = Pulse.signal('');

const emailError = Pulse.computed(() => {
  const value = email();
  if (value.length === 0) return '';
  if (!value.includes('@')) return 'Email must contain @';
  if (!value.includes('.')) return 'Email must contain domain';
  return '';
});

<Input
  label="Email"
  value={email}
  onChange={(val) => email(val)}
  error={emailError}
/>
```

### Form-level Validation

Validate entire form before submission:

```tsx
const isFormValid = Pulse.computed(() => {
  return email().includes('@') &&
         password().length >= 8 &&
         acceptTerms();
});

<Button
  type="submit"
  disabled={Pulse.computed(() => !isFormValid())}
>
  Submit
</Button>
```

### Custom Validators

Create reusable validation functions:

```tsx
const validators = {
  email: (value: string) => {
    return value.includes('@') && value.includes('.');
  },
  
  password: (value: string) => {
    return value.length >= 8 && /[A-Z]/.test(value);
  },
  
  phone: (value: string) => {
    return /^\+?[\d\s-()]+$/.test(value);
  }
};

const email = Pulse.signal('');
const isValidEmail = Pulse.computed(() => validators.email(email()));
```

## Accessibility Best Practices

### Labels
Always provide labels for form fields:

```tsx
// ✅ Good
<Input label="Email Address" type="email" />

// ❌ Bad
<Input placeholder="Email" />
```

### Required Fields
Mark required fields explicitly:

```tsx
<Input
  label="Email"
  required={true}
  aria-required="true"
/>
```

### Error Messages
Associate error messages with inputs:

```tsx
<Input
  label="Email"
  error="Invalid email format"
  aria-invalid="true"
/>
```

### Keyboard Navigation
Ensure proper tab order:

```tsx
<form>
  <Input label="First Name" tabindex="1" />
  <Input label="Last Name" tabindex="2" />
  <Button type="submit" tabindex="3">Submit</Button>
</form>
```

## Form Patterns

### Pattern 1: Multi-step Form

```tsx
const step = Pulse.signal(1);

const MultiStepForm = () => {
  return (
    <div>
      {step() === 1 && <PersonalInfoStep />}
      {step() === 2 && <AddressStep />}
      {step() === 3 && <ReviewStep />}
      
      <div class="flex justify-between mt-6">
        {step() > 1 && (
          <Button onClick={() => step(step() - 1)}>
            Previous
          </Button>
        )}
        {step() < 3 && (
          <Button onClick={() => step(step() + 1)}>
            Next
          </Button>
        )}
        {step() === 3 && (
          <Button type="submit">Submit</Button>
        )}
      </div>
    </div>
  );
};
```

### Pattern 2: Dynamic Fields

```tsx
const emails = Pulse.signal(['']);

const addEmail = () => {
  emails([...emails(), '']);
};

const removeEmail = (index: number) => {
  emails(emails().filter((_, i) => i !== index));
};

const DynamicFields = () => {
  return (
    <div class="space-y-2">
      {emails().map((email, index) => (
        <div class="flex gap-2">
          <Input
            value={email}
            onChange={(val) => {
              const newEmails = [...emails()];
              newEmails[index] = val;
              emails(newEmails);
            }}
          />
          <Button
            variant="ghost"
            color="danger"
            onClick={() => removeEmail(index)}
          >
            Remove
          </Button>
        </div>
      ))}
      <Button variant="outline" onClick={addEmail}>
        Add Email
      </Button>
    </div>
  );
};
```

### Pattern 3: Conditional Fields

```tsx
const accountType = Pulse.signal('personal');

<RadioGroup
  label="Account Type"
  value={accountType}
  options={[
    { value: 'personal', label: 'Personal' },
    { value: 'business', label: 'Business' }
  ]}
  onChange={(val) => accountType(val)}
/>

{accountType() === 'business' && (
  <Input
    label="Company Name"
    placeholder="Acme Inc."
    required={true}
  />
)}
```

## Styling Forms

### Layout with Tailwind

```tsx
<form class="space-y-6">
  {/* Two columns on desktop */}
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Input label="First Name" />
    <Input label="Last Name" />
  </div>
  
  {/* Full width */}
  <Input label="Email" />
  
  {/* Inline fields */}
  <div class="flex gap-4">
    <Input label="City" className="flex-1" />
    <Input label="ZIP" className="w-32" />
  </div>
</form>
```

### Responsive Forms

```tsx
<form class="max-w-2xl mx-auto px-4">
  {/* Stack on mobile, side-by-side on desktop */}
  <div class="flex flex-col md:flex-row gap-4">
    <Input label="First Name" className="flex-1" />
    <Input label="Last Name" className="flex-1" />
  </div>
</form>
```

## Performance Tips

1. **Debounce expensive validation**
   ```tsx
   let debounceTimer: number;
   const debouncedValidation = (value: string) => {
     clearTimeout(debounceTimer);
     debounceTimer = setTimeout(() => {
       // Perform validation
     }, 300);
   };
   ```

2. **Use computed values for derived state**
   ```tsx
   const fullName = Pulse.computed(() => 
     `${firstName()} ${lastName()}`
   );
   ```

3. **Avoid unnecessary re-renders**
   ```tsx
   // Good: Only update when needed
   const updateEmail = (val: string) => {
     if (val !== email()) {
       email(val);
     }
   };
   ```

## Common Mistakes

### ❌ Don't: Forget onChange handlers
```tsx
// This won't work - value is not reactive
<Input value={email} />
```

### ✅ Do: Provide onChange handlers
```tsx
<Input 
  value={email} 
  onChange={(val) => email(val)} 
/>
```

### ❌ Don't: Validate on mount
```tsx
// Bad: Shows error before user interaction
const error = Pulse.computed(() => 
  email().length === 0 ? 'Required' : ''
);
```

### ✅ Do: Validate after interaction
```tsx
const touched = Pulse.signal(false);
const error = Pulse.computed(() => 
  touched() && email().length === 0 ? 'Required' : ''
);

<Input
  value={email}
  onChange={(val) => {
    email(val);
    touched(true);
  }}
  error={error}
/>
```

## Related Resources

- [Pulse Framework Guide](/guide/pulse-framework)
- [Form Validation Patterns](/guide/validation)
- [Accessibility Guide](/guide/accessibility)

---

**Version**: 1.0.0  
**Last Updated**: January 2025