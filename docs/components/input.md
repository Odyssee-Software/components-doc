---
title: Input
description: Text input component with label, hint, validation, and icons
---

# Input

A flexible text input component with labels, hints, validation states, icons, and full Pulse Framework reactivity support.

## Import

```tsx
import { Input, Pulse } from '@odyssee/components';
```

## Basic Usage

<LiveCodeEditor :defaultCode="`<Input 
  placeholder='Enter your name'
/>`" />

## Input Types

The Input component supports various HTML5 input types.

<LiveCodeEditor :defaultCode="`<div class='space-y-3'>
  <Input type='text' placeholder='Enter text' />
  <Input type='email' placeholder='you@example.com' />
  <Input type='password' placeholder='••••••••' />
  <Input type='number' placeholder='0' />
  <Input type='tel' placeholder='+1 (555) 000-0000' />
  <Input type='url' placeholder='https://example.com' />
  <Input type='search' placeholder='Search...' />
</div>`" />

## With Label

<LiveCodeEditor :defaultCode="`<Input 
  label='Email Address'
  type='email'
  placeholder='you@example.com'
/>`" />

## With Hint

<LiveCodeEditor :defaultCode="`<Input 
  label='Password'
  type='password'
  hint='Must be at least 8 characters'
  placeholder='••••••••'
/>`" />

## Validation States

<LiveCodeEditor :defaultCode="`<div class='space-y-3'>
  <Input 
    label='Email'
    type='email'
    value='invalid-email'
    error='Please enter a valid email address'
  />
  <Input 
    label='Username'
    value='john_doe'
    success='This username is available'
  />
</div>`" />

## With Icon

<LiveCodeEditor :defaultCode="`<div class='space-y-3'>
  <Input 
    icon='🔍'
    iconPosition='left'
    placeholder='Search...'
  />
  <Input 
    icon='✉️'
    iconPosition='right'
    placeholder='Email address'
  />
</div>`" />

## Sizes

Three size options are available: `sm`, `md`, and `lg`.

<LiveCodeEditor :defaultCode="`<div class='space-y-3'>
  <Input size='sm' placeholder='Small input' />
  <Input size='md' placeholder='Medium input' />
  <Input size='lg' placeholder='Large input' />
</div>`" />

## Reactive Input with Signals

Bind input values to Pulse signals for full reactivity.

```tsx
const email = Pulse.signal('');

const reactiveInput = (
  <Input 
    label="Email"
    type="email"
    value={email}
    onChange={(val) => email(val)}
    placeholder="you@example.com"
  />
);

// Use the value elsewhere
Pulse.effect(() => {
  console.log('Email changed:', email());
});
```

## Required Fields

<LiveCodeEditor :defaultCode="`<Input 
  label='Full Name'
  required={true}
  placeholder='John Doe'
/>`" />

## Disabled State

<LiveCodeEditor :defaultCode="`<Input 
  label='Username'
  value='john_doe'
  disabled={true}
/>`" />

## Readonly State

<LiveCodeEditor :defaultCode="`<Input 
  label='ID'
  value='USR-12345'
  readonly={true}
/>`" />

## Reactive Validation

Validate input in real-time with computed values.

```tsx
const email = Pulse.signal('');

const isValidEmail = Pulse.computed(() => {
  const value = email();
  return value.includes('@') && value.includes('.');
});

const errorMessage = Pulse.computed(() => {
  const value = email();
  if (value.length === 0) return '';
  return isValidEmail() ? '' : 'Please enter a valid email address';
});

const validatedInput = (
  <Input 
    label="Email Address"
    type="email"
    value={email}
    onChange={(val) => email(val)}
    error={errorMessage}
    placeholder="you@example.com"
  />
);
```

## Complete Example - Login Form

```tsx
import { Input, Button, Pulse } from '@odyssee/components';

const LoginForm = () => {
  const email = Pulse.signal('');
  const password = Pulse.signal('');
  const isLoading = Pulse.signal(false);
  
  const isValidEmail = Pulse.computed(() => {
    const val = email();
    return val.includes('@') && val.includes('.');
  });
  
  const isValidPassword = Pulse.computed(() => {
    return password().length >= 8;
  });
  
  const isFormValid = Pulse.computed(() => {
    return isValidEmail() && isValidPassword();
  });
  
  const emailError = Pulse.computed(() => {
    const val = email();
    if (val.length === 0) return '';
    return isValidEmail() ? '' : 'Invalid email format';
  });
  
  const passwordError = Pulse.computed(() => {
    const val = password();
    if (val.length === 0) return '';
    return isValidPassword() ? '' : 'Password must be at least 8 characters';
  });

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    
    if (!isFormValid()) return;
    
    isLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Login successful!', { email: email(), password: password() });
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      isLoading(false);
    }
  };

  return (
    <form onsubmit={handleSubmit} class="space-y-4 max-w-md">
      <Input
        type="email"
        label="Email Address"
        placeholder="you@example.com"
        icon="✉️"
        value={email}
        onChange={(val) => email(val)}
        error={emailError}
        required={true}
      />
      
      <Input
        type="password"
        label="Password"
        placeholder="••••••••"
        icon="🔒"
        value={password}
        onChange={(val) => password(val)}
        error={passwordError}
        hint="Must be at least 8 characters"
        required={true}
      />
      
      <Button
        type="submit"
        color="primary"
        fullWidth={true}
        loading={isLoading}
        disabled={Pulse.computed(() => !isFormValid())}
      >
        Sign In
      </Button>
    </form>
  ) as Pulse.JSX.Element;
};
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `"text" \| "email" \| "password" \| "number" \| "tel" \| "url" \| "search"` | `"text"` | Input type |
| `value` | `string \| Signal<string>` | - | Input value (reactive or static) |
| `placeholder` | `string` | `""` | Placeholder text |
| `label` | `string` | - | Label text |
| `hint` | `string` | - | Hint text below input |
| `error` | `string \| Signal<string>` | - | Error message |
| `success` | `string \| Signal<string>` | - | Success message |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Input size |
| `icon` | `string` | - | Icon to display |
| `iconPosition` | `"left" \| "right"` | `"left"` | Icon position |
| `disabled` | `boolean` | `false` | Disable input |
| `readonly` | `boolean` | `false` | Make readonly |
| `required` | `boolean` | `false` | Mark as required |
| `onChange` | `(value: string) => void` | - | Change callback |
| `className` | `string` | - | Additional CSS classes |

## Accessibility

The Input component follows accessibility best practices:

- ✅ Proper `<label>` association with `for` attribute
- ✅ `aria-describedby` for hint and error messages
- ✅ `aria-invalid` when in error state
- ✅ `required` attribute for required fields
- ✅ Keyboard navigation support
- ✅ Screen reader friendly

### ARIA Attributes

```tsx
const accessibleInput = (
  <Input
    label="Email"
    type="email"
    aria-label="Email address"
    aria-describedby="email-hint"
  />
);
```

## Best Practices

### ✅ Do

- Use appropriate input types for better UX and validation
- Provide clear labels for all inputs
- Use hints to guide users
- Show validation errors inline
- Use signals for reactive forms

```tsx
// Good: Clear label, type, validation
const goodInput = (
  <Input 
    type="email"
    label="Email Address"
    hint="We'll never share your email"
    required={true}
  />
);
```

### ❌ Don't

- Don't omit labels (except search inputs)
- Don't use vague placeholder text
- Don't validate before user interaction
- Don't forget to handle onChange

```tsx
// Bad: No label, vague placeholder
const badInput = (
  <Input placeholder="Enter something" />
);

// Better: Clear label and placeholder
const betterInput = (
  <Input 
    label="Full Name"
    placeholder="John Doe"
  />
);
```

## Common Patterns

### Pattern 1: Search Input

```tsx
const searchQuery = Pulse.signal('');

const searchInput = (
  <Input
    type="search"
    icon="🔍"
    iconPosition="left"
    placeholder="Search articles..."
    value={searchQuery}
    onChange={(val) => searchQuery(val)}
  />
);
```

### Pattern 2: Password Strength Indicator

```tsx
const password = Pulse.signal('');

const passwordStrength = Pulse.computed(() => {
  const val = password();
  if (val.length < 6) return 'weak';
  if (val.length < 10) return 'medium';
  return 'strong';
});

const strengthColor = Pulse.computed(() => {
  const strength = passwordStrength();
  return strength === 'weak' ? 'danger' : 
         strength === 'medium' ? 'warning' : 'success';
});

const passwordInput = (
  <div>
    <Input
      type="password"
      label="Password"
      value={password}
      onChange={(val) => password(val)}
      hint={`Strength: ${passwordStrength()}`}
    />
  </div>
);
```

### Pattern 3: Debounced Search

```tsx
const searchQuery = Pulse.signal('');
let debounceTimer: number;

const debouncedSearch = (value: string) => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    console.log('Searching for:', value);
    // Perform search
  }, 300);
};

const debouncedInput = (
  <Input
    type="search"
    placeholder="Search..."
    value={searchQuery}
    onChange={(val) => {
      searchQuery(val);
      debouncedSearch(val);
    }}
  />
);
```

## Styling & Theming

All input styles use Tailwind CSS classes and support dark mode automatically.

### Custom Styling

```tsx
const customInput = (
  <Input 
    className="border-2 border-blue-500 focus:ring-4"
    placeholder="Custom styled input"
  />
);
```

## TypeScript

Full TypeScript support with complete type definitions:

```tsx
import type { InputProps } from '@odyssee/components';

const props: InputProps = {
  type: 'email',
  label: 'Email',
  required: true,
  onChange: (value: string) => {
    console.log('Value changed:', value);
  }
};

const input = <Input {...props} />;
```

## Related Components

- [Textarea](/components/textarea) - Multi-line text input
- [Select](/components/select) - Dropdown selection
- [FormGroup](/components/form-group) - Group form fields
- [Button](/components/button) - Form submission

---

**Version**: 1.0.0  
**Last Updated**: January 2025