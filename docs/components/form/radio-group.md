---
title: RadioGroup
description: A component for managing a group of radio buttons with a single value
---

# RadioGroup

A convenient wrapper component for managing multiple radio buttons as a group. Simplifies state management and provides consistent styling. Perfect for forms with mutually exclusive options. Built for Pulse Framework with full reactivity support.

## Import

```tsx
import { RadioGroup, Pulse } from '@odyssee-software/components';
```

## Basic Usage

<LiveCodeEditor :defaultCode="`<RadioGroup
  name='color'
  options={[
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' },
    { value: 'green', label: 'Green' }
  ]}
/>`" />

## With Label and Hint

Add labels and helper text for better UX.

<LiveCodeEditor :defaultCode="`<RadioGroup
  name='plan'
  label='Select a plan'
  hint='You can change your plan anytime'
  options={[
    { value: 'free', label: 'Free Plan' },
    { value: 'pro', label: 'Pro Plan' },
    { value: 'enterprise', label: 'Enterprise Plan' }
  ]}
/>`" />

## With Descriptions

Add descriptions to each option for more context.

<LiveCodeEditor :defaultCode="`<RadioGroup
  name='subscription'
  label='Choose your subscription'
  options={[
    { value: 'free', label: 'Free', description: 'Basic features for individuals' },
    { value: 'pro', label: 'Pro', description: '$29/month - All features included' },
    { value: 'enterprise', label: 'Enterprise', description: 'Custom pricing and support' }
  ]}
/>`" />

## Sizes

Five size options control the radio button size: `xs`, `sm`, `md`, `lg`, and `xl`.

<LiveCodeEditor :defaultCode="`<div class='space-y-4'>
  <RadioGroup
    name='size-xs'
    label='Extra small'
    size='xs'
    options={[
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' }
    ]}
  />
  <RadioGroup
    name='size-sm'
    label='Small'
    size='sm'
    options={[
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' }
    ]}
  />
  <RadioGroup
    name='size-md'
    label='Medium (default)'
    size='md'
    options={[
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' }
    ]}
  />
</div>`" />

## Horizontal Layout

Display radio buttons in a horizontal row.

<LiveCodeEditor :defaultCode="`<RadioGroup
  name='size'
  label='Select size'
  direction='horizontal'
  options={[
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' },
    { value: 'xl', label: 'Extra Large' }
  ]}
/>`" />

## Required Field

Mark radio groups as required with visual indicators.

<LiveCodeEditor :defaultCode="`<RadioGroup
  name='terms'
  label='Do you accept the terms?'
  required={true}
  options={[
    { value: 'yes', label: 'Yes, I accept' },
    { value: 'no', label: 'No, I decline' }
  ]}
/>`" />

## With Error State

Display validation errors.

<LiveCodeEditor :defaultCode="`<RadioGroup
  name='preference'
  label='Contact preference'
  error='Please select a contact method'
  options={[
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone' },
    { value: 'mail', label: 'Mail' }
  ]}
/>`" />

## Disabled Options

Disable specific options within the group.

<LiveCodeEditor :defaultCode="`<RadioGroup
  name='payment'
  label='Payment method'
  options={[
    { value: 'credit', label: 'Credit Card' },
    { value: 'paypal', label: 'PayPal', disabled: true, description: 'Temporarily unavailable' },
    { value: 'crypto', label: 'Cryptocurrency' }
  ]}
/>`" />

## Disabled Group

Disable the entire radio group.

<LiveCodeEditor :defaultCode="`<RadioGroup
  name='disabled-group'
  label='Disabled group'
  disabled={true}
  value='option1'
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ]}
/>`" />

## Reactive Value

Control selected value with Pulse signals.

```tsx
const selectedPlan = Pulse.signal('pro');

const reactiveRadioGroup = (
  <div>
    <RadioGroup
      name="plan"
      label="Choose your plan"
      value={selectedPlan}
      options={[
        { value: 'free', label: 'Free', description: '$0/month' },
        { value: 'pro', label: 'Pro', description: '$29/month' },
        { value: 'enterprise', label: 'Enterprise', description: '$99/month' }
      ]}
      onChange={(value) => selectedPlan(value)}
    />
    
    <div class="mt-4">
      <p class="text-sm text-gray-600">
        Selected plan: <strong>{selectedPlan()}</strong>
      </p>
    </div>
  </div>
);
```

## Dynamic Options

Generate options dynamically from data.

```tsx
const DynamicRadioGroup = () => {
  const countries = Pulse.signal([
    { code: 'us', name: 'United States', region: 'North America' },
    { code: 'uk', name: 'United Kingdom', region: 'Europe' },
    { code: 'jp', name: 'Japan', region: 'Asia' },
    { code: 'au', name: 'Australia', region: 'Oceania' }
  ]);

  const selectedCountry = Pulse.signal('us');

  const options = Pulse.computed(() => 
    countries().map(country => ({
      value: country.code,
      label: country.name,
      description: country.region
    }))
  );

  return (
    <RadioGroup
      name="country"
      label="Select your country"
      value={selectedCountry}
      options={options()}
      onChange={(value) => selectedCountry(value)}
    />
  );
};
```

## Form Validation

Integrate with form validation.

```tsx
const SurveyForm = () => {
  const satisfaction = Pulse.signal('');
  const error = Pulse.signal('');

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    
    if (!satisfaction()) {
      error('Please select your satisfaction level');
      return;
    }
    
    error('');
    console.log('Survey submitted:', satisfaction());
  };

  return (
    <form onsubmit={handleSubmit} class="space-y-4">
      <RadioGroup
        name="satisfaction"
        label="How satisfied are you with our service?"
        value={satisfaction}
        options={[
          { value: '1', label: 'Very Dissatisfied' },
          { value: '2', label: 'Dissatisfied' },
          { value: '3', label: 'Neutral' },
          { value: '4', label: 'Satisfied' },
          { value: '5', label: 'Very Satisfied' }
        ]}
        onChange={(value) => {
          satisfaction(value);
          error('');
        }}
        error={error()}
        required
      />
      
      <Button type="submit">Submit Survey</Button>
    </form>
  );
};
```



## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | Auto-generated | Radio group name |
| `value` | `string \| number \| Signal<string \| number>` | - | Selected value |
| `options` | `RadioOption[]` | **Required** | Array of radio options |
| `label` | `string` | - | Group label |
| `hint` | `string` | - | Helper text below group |
| `error` | `string` | - | Error message |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | Radio button size |
| `direction` | `"vertical" \| "horizontal"` | `"vertical"` | Layout direction |
| `required` | `boolean` | `false` | Mark as required |
| `disabled` | `boolean` | `false` | Disable entire group |
| `onChange` | `(value: string \| number) => void` | - | Change event handler |
| `className` | `string` | - | Additional CSS classes |

### RadioOption Type

```tsx
interface RadioOption {
  value: string | number;
  label: string;
  description?: string;
  disabled?: boolean;
}
```

## Accessibility

The RadioGroup component follows accessibility best practices:

- ✅ Proper label association with group
- ✅ ARIA attributes for states
- ✅ Keyboard navigation (Arrow keys, Space, Tab)
- ✅ Focus management
- ✅ Screen reader friendly
- ✅ Required field indicators
- ✅ Group semantics with same `name`

### Keyboard Navigation

- **Arrow Up/Down**: Navigate between options
- **Arrow Left/Right**: Navigate in horizontal layout
- **Space**: Select focused option
- **Tab**: Move to next form element

## Best Practices

### ✅ Do

- Use for 2-5 mutually exclusive options
- Provide clear, distinct labels
- Add descriptions for complex options
- Use horizontal layout for short labels
- Show validation feedback
- Group related options logically

```tsx
// Good: Clear options with helpful descriptions
const goodRadioGroup = (
  <RadioGroup
    name="billing"
    label="Billing Cycle"
    options={[
      { value: 'monthly', label: 'Monthly', description: '$29/month' },
      { value: 'yearly', label: 'Yearly', description: '$290/year - Save 17%' }
    ]}
  />
);
```

### ❌ Don't

- Don't use for too many options (use Select instead)
- Don't use for multiple selections (use Checkbox instead)
- Don't forget to provide labels
- Don't mix horizontal and vertical in same form
- Don't make all options disabled

```tsx
// Bad: Too many options
const badRadioGroup = (
  <RadioGroup
    name="country"
    options={[...195 countries]}
  />
);

// Better: Use Select for many options
const betterSelect = (
  <Select
    label="Country"
    options={countries}
  />
);
```

## Use Cases

### Plan Selection

```tsx
const PlanSelector = () => (
  <RadioGroup
    name="plan"
    label="Choose your plan"
    options={[
      { value: 'free', label: 'Free', description: 'For individuals' },
      { value: 'team', label: 'Team', description: '$49/month' },
      { value: 'business', label: 'Business', description: '$99/month' }
    ]}
  />
);
```

### Shipping Method

```tsx
const ShippingSelector = () => (
  <RadioGroup
    name="shipping"
    label="Delivery method"
    options={[
      { value: 'standard', label: 'Standard', description: '5-7 days - Free' },
      { value: 'express', label: 'Express', description: '2-3 days - $9.99' },
      { value: 'overnight', label: 'Overnight', description: 'Next day - $24.99' }
    ]}
  />
);
```

### Yes/No Questions

```tsx
const YesNoQuestion = () => (
  <RadioGroup
    name="newsletter"
    label="Would you like to receive our newsletter?"
    direction="horizontal"
    options={[
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' }
    ]}
  />
);
```

### Rating Scale

```tsx
const RatingScale = () => (
  <RadioGroup
    name="rating"
    label="How would you rate our service?"
    direction="horizontal"
    options={[
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
      { value: '4', label: '4' },
      { value: '5', label: '5' }
    ]}
  />
);
```

## Styling & Theming

All RadioGroup styles use Tailwind CSS classes and support dark mode automatically.

### Custom Styling

```tsx
const customRadioGroup = (
  <RadioGroup
    className="bg-gray-50 p-4 rounded-lg"
    name="custom"
    options={options}
  />
);
```

## TypeScript

Full TypeScript support with complete type definitions:

```tsx
import type { RadioGroupProps, RadioOption } from '@odyssee-software/components';

const options: RadioOption[] = [
  { value: 'opt1', label: 'Option 1' },
  { value: 'opt2', label: 'Option 2' }
];

const props: RadioGroupProps = {
  name: 'group',
  options: options,
  onChange: (value: string | number) => {
    console.log('Selected:', value);
  }
};

const radioGroup = <RadioGroup {...props} />;
```

## Related Components

- [Radio](/components/radio) - Individual radio button
- [Checkbox](/components/checkbox) - For multiple selections
- [Select](/components/select) - For many options in dropdown
- [Toggle](/components/toggle) - For binary on/off states

---

**Version**: 1.0.0  
**Last Updated**: January 2025
