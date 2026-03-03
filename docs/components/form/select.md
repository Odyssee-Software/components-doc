---
title: Select
description: A customizable select dropdown with support for groups, search, and multiple selection
---

# Select

A versatile dropdown select component with support for option groups, validation, and multiple selection. Perfect for forms, filters, and data selection. Built for Pulse Framework with full reactivity support.

## Import

```tsx
import { Select, Pulse } from '@odyssee-software/components';
```

## Basic Usage

<LiveCodeEditor :defaultCode="`<Select
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' }
  ]}
  placeholder='Select an option'
/>`" />

## With Label and Hint

Add labels and helper text for better UX.

<LiveCodeEditor :defaultCode="`<Select
  label='Country'
  hint='Choose your country of residence'
  placeholder='Select a country'
  options={[
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'fr', label: 'France' },
    { value: 'de', label: 'Germany' },
    { value: 'jp', label: 'Japan' }
  ]}
/>`" />

## Sizes

Five size options control padding and text size: `xs`, `sm`, `md`, `lg`, and `xl`.

<LiveCodeEditor :defaultCode="`<div class='space-y-4'>
  <Select size='xs' placeholder='Extra small' options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]} />
  <Select size='sm' placeholder='Small' options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]} />
  <Select size='md' placeholder='Medium (default)' options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]} />
  <Select size='lg' placeholder='Large' options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]} />
  <Select size='xl' placeholder='Extra large' options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]} />
</div>`" />

## Required Field

Mark fields as required with visual indicators.

<LiveCodeEditor :defaultCode="`<Select
  label='Status'
  required={true}
  placeholder='Select status'
  options={[
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'pending', label: 'Pending' }
  ]}
/>`" />

## With Error

Display validation errors.

<LiveCodeEditor :defaultCode="`<Select
  label='Priority'
  error='Please select a priority level'
  options={[
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' }
  ]}
/>`" />

## With Option Groups

Organize options into labeled groups.

<LiveCodeEditor :defaultCode="`<Select
  label='Fruit'
  placeholder='Select a fruit'
  options={[
    { value: 'apple', label: 'Apple', group: 'Common' },
    { value: 'banana', label: 'Banana', group: 'Common' },
    { value: 'orange', label: 'Orange', group: 'Common' },
    { value: 'mango', label: 'Mango', group: 'Exotic' },
    { value: 'papaya', label: 'Papaya', group: 'Exotic' },
    { value: 'dragonfruit', label: 'Dragon Fruit', group: 'Exotic' }
  ]}
/>`" />

## Disabled Options

Disable specific options.

<LiveCodeEditor :defaultCode="`<Select
  label='Plan'
  placeholder='Select a plan'
  options={[
    { value: 'free', label: 'Free', disabled: false },
    { value: 'pro', label: 'Pro - Coming Soon', disabled: true },
    { value: 'enterprise', label: 'Enterprise', disabled: false }
  ]}
/>`" />

## Disabled State

Disable the entire select.

<LiveCodeEditor :defaultCode="`<Select
  label='Disabled Select'
  disabled={true}
  value='option1'
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' }
  ]}
/>`" />

## Multiple Selection

Allow selecting multiple options.

```tsx
const multiSelect = (
  <Select
    label="Tags"
    multiple={true}
    placeholder="Select tags"
    options={[
      { value: 'javascript', label: 'JavaScript' },
      { value: 'typescript', label: 'TypeScript' },
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue' },
      { value: 'angular', label: 'Angular' }
    ]}
  />
);
```

## Reactive Value

Control select value with Pulse signals.

```tsx
const country = Pulse.signal('us');

const reactiveSelect = (
  <div>
    <Select
      label="Country"
      value={country}
      options={[
        { value: 'us', label: 'United States' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'fr', label: 'France' },
        { value: 'de', label: 'Germany' }
      ]}
      onChange={(val) => country(val)}
    />
    
    <div class="mt-4">
      <p class="text-sm text-gray-600">Selected: {country()}</p>
    </div>
  </div>
);
```

## Dependent Selects

Create cascading select dropdowns.

```tsx
const DependentSelects = () => {
  const country = Pulse.signal('');
  const city = Pulse.signal('');

  const cities = Pulse.computed(() => {
    const countryVal = country();
    if (countryVal === 'us') {
      return [
        { value: 'nyc', label: 'New York' },
        { value: 'la', label: 'Los Angeles' },
        { value: 'chicago', label: 'Chicago' }
      ];
    } else if (countryVal === 'uk') {
      return [
        { value: 'london', label: 'London' },
        { value: 'manchester', label: 'Manchester' },
        { value: 'birmingham', label: 'Birmingham' }
      ];
    }
    return [];
  });

  return (
    <div class="space-y-4">
      <Select
        label="Country"
        value={country}
        options={[
          { value: 'us', label: 'United States' },
          { value: 'uk', label: 'United Kingdom' }
        ]}
        onChange={(val) => {
          country(val);
          city(''); // Reset city when country changes
        }}
      />

      <Select
        label="City"
        value={city}
        options={cities()}
        disabled={!country()}
        onChange={(val) => city(val)}
      />
    </div>
  );
};
```

## Form Validation

Integrate with form validation.

```tsx
const RegistrationForm = () => {
  const role = Pulse.signal('');
  const error = Pulse.signal('');

  const validate = () => {
    if (!role()) {
      error('Please select a role');
      return false;
    }
    error('');
    return true;
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted with role:', role());
    }
  };

  return (
    <form onsubmit={handleSubmit} class="space-y-4">
      <Select
        label="Role"
        value={role}
        onChange={(val) => {
          role(val);
          validate();
        }}
        error={error()}
        placeholder="Select your role"
        required
        options={[
          { value: 'developer', label: 'Developer' },
          { value: 'designer', label: 'Designer' },
          { value: 'manager', label: 'Manager' },
          { value: 'other', label: 'Other' }
        ]}
      />
      <Button type="submit">Register</Button>
    </form>
  );
};
```



## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string \| string[] \| Signal<string \| string[]>` | - | Selected value(s) |
| `options` | `SelectOption[]` | **Required** | Array of options |
| `placeholder` | `string` | `"Select an option"` | Placeholder text |
| `label` | `string` | - | Label text |
| `hint` | `string` | - | Helper text below select |
| `error` | `string` | - | Error message |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | Select size |
| `multiple` | `boolean` | `false` | Enable multiple selection |
| `disabled` | `boolean` | `false` | Disable select |
| `required` | `boolean` | `false` | Mark as required |
| `onChange` | `(value: string \| string[]) => void` | - | Change event handler |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | Auto-generated | HTML id attribute |

### SelectOption Type

```tsx
interface SelectOption {
  value: string | number;
  label: string;
  group?: string;
  disabled?: boolean;
}
```

## Accessibility

The Select component follows accessibility best practices:

- ✅ Proper label association with `for` attribute
- ✅ ARIA attributes for errors and descriptions
- ✅ Required field indicators
- ✅ Keyboard navigation support
- ✅ Focus management
- ✅ Screen reader friendly error messages
- ✅ Option groups with proper semantics

### ARIA Attributes

```tsx
const accessibleSelect = (
  <Select
    label="Country"
    aria-label="Select country"
    aria-describedby="country-hint"
    aria-invalid={hasError}
    options={countries}
  />
);
```

## Best Practices

### ✅ Do

- Provide clear labels and hints
- Group related options
- Show validation errors clearly
- Use appropriate placeholder text
- Disable options when needed
- Handle loading states
- Validate on change for better UX

```tsx
// Good: Clear labels and validation
const goodSelect = (
  <Select
    label="Subscription Plan"
    hint="You can change your plan anytime"
    placeholder="Choose a plan"
    required
    options={planOptions}
  />
);
```

### ❌ Don't

- Don't use select for very long lists (use search/autocomplete)
- Don't forget to handle empty states
- Don't use vague placeholders like "Select"
- Don't hide critical options in groups
- Don't forget to reset dependent selects

```tsx
// Bad: Too many ungrouped options
const badSelect = (
  <Select
    placeholder="Select"
    options={[...100 countries]}
  />
);

// Better: Use groups or autocomplete
const betterSelect = (
  <Select
    label="Country"
    placeholder="Select your country"
    options={[
      { value: 'us', label: 'United States', group: 'North America' },
      { value: 'ca', label: 'Canada', group: 'North America' },
      // Grouped by region...
    ]}
  />
);
```

## Use Cases

### Filter Dropdown

```tsx
const FilterSelect = () => (
  <Select
    label="Filter by Status"
    placeholder="All statuses"
    options={[
      { value: 'all', label: 'All' },
      { value: 'active', label: 'Active' },
      { value: 'inactive', label: 'Inactive' },
      { value: 'pending', label: 'Pending' }
    ]}
  />
);
```

### Language Selector

```tsx
const LanguageSelector = () => (
  <Select
    label="Language"
    options={[
      { value: 'en', label: '🇺🇸 English' },
      { value: 'es', label: '🇪🇸 Español' },
      { value: 'fr', label: '🇫🇷 Français' },
      { value: 'de', label: '🇩🇪 Deutsch' }
    ]}
  />
);
```

### Priority Selector

```tsx
const PrioritySelect = () => (
  <Select
    label="Priority"
    options={[
      { value: 'low', label: '🟢 Low' },
      { value: 'medium', label: '🟡 Medium' },
      { value: 'high', label: '🔴 High' }
    ]}
  />
);
```

## Styling & Theming

All select styles use Tailwind CSS classes and support dark mode automatically.

### Custom Styling

```tsx
const customSelect = (
  <Select
    className="font-semibold"
    options={options}
  />
);
```

## TypeScript

Full TypeScript support with complete type definitions:

```tsx
import type { SelectProps, SelectOption } from '@odyssee-software/components';

const options: SelectOption[] = [
  { value: 'opt1', label: 'Option 1' },
  { value: 'opt2', label: 'Option 2' }
];

const props: SelectProps = {
  label: 'Select',
  options: options,
  onChange: (value: string | string[]) => {
    console.log('Selected:', value);
  }
};

const select = <Select {...props} />;
```

## Related Components

- [Input](/components/input) - For text input
- [Textarea](/components/textarea) - For multiline input
- [Checkbox](/components/checkbox) - For multiple selections
- [Radio](/components/radio) - For single selections

---

**Version**: 1.0.0  
**Last Updated**: January 2025
