---
title: Radio
description: A customizable radio button with label, description, and validation states
---

# Radio

A flexible radio button component for single selections from multiple options. Supports labels, descriptions, validation states, and full reactivity. Built for Pulse Framework with complete accessibility support.

## Import

```tsx
import { Radio, Pulse } from '@odyssee-software/components';
```

## Basic Usage

<LiveCodeEditor :defaultCode="`<div class='space-y-2'>
  <Radio name='color' value='red' label='Red' />
  <Radio name='color' value='blue' label='Blue' />
  <Radio name='color' value='green' label='Green' />
</div>`" />

## With Descriptions

Add helpful descriptions below each option.

<LiveCodeEditor :defaultCode="`<div class='space-y-3'>
  <Radio 
    name='plan' 
    value='free' 
    label='Free Plan' 
    description='Perfect for trying out our service'
  />
  <Radio 
    name='plan' 
    value='pro' 
    label='Pro Plan' 
    description='$29/month - All features included'
  />
  <Radio 
    name='plan' 
    value='enterprise' 
    label='Enterprise Plan' 
    description='$99/month - Custom solutions and support'
  />
</div>`" />

## Sizes

Five size options control the radio button size: `xs`, `sm`, `md`, `lg`, and `xl`.

<LiveCodeEditor :defaultCode="`<div class='space-y-3'>
  <Radio name='size-demo' value='xs' label='Extra small radio' size='xs' />
  <Radio name='size-demo' value='sm' label='Small radio' size='sm' />
  <Radio name='size-demo' value='md' label='Medium radio (default)' size='md' />
  <Radio name='size-demo' value='lg' label='Large radio' size='lg' />
  <Radio name='size-demo' value='xl' label='Extra large radio' size='xl' />
</div>`" />

## Required Field

Mark radio groups as required with visual indicators.

<LiveCodeEditor :defaultCode="`<div class='space-y-2'>
  <Radio name='required-demo' value='yes' label='Yes' required={true} />
  <Radio name='required-demo' value='no' label='No' required={true} />
</div>`" />

## With Error State

Display validation errors on radio options.

<LiveCodeEditor :defaultCode="`<div class='space-y-3'>
  <Radio 
    name='payment' 
    value='credit' 
    label='Credit Card' 
  />
  <Radio 
    name='payment' 
    value='paypal' 
    label='PayPal' 
    error='PayPal is temporarily unavailable'
    disabled={true}
  />
  <Radio 
    name='payment' 
    value='crypto' 
    label='Cryptocurrency' 
  />
</div>`" />

## With Success State

Show success feedback on selected options.

<LiveCodeEditor :defaultCode="`<Radio 
  name='verification' 
  value='email' 
  label='Email verified' 
  success='Your email has been verified'
  checked={true}
/>`" />

## Disabled State

Disable radio buttons when they cannot be interacted with.

<LiveCodeEditor :defaultCode="`<div class='space-y-2'>
  <Radio name='disabled-demo' value='option1' label='Available option' />
  <Radio name='disabled-demo' value='option2' label='Disabled option' disabled={true} />
  <Radio name='disabled-demo' value='option3' label='Disabled and selected' disabled={true} checked={true} />
</div>`" />

## Label Position

Control label placement with the `labelPosition` prop.

<LiveCodeEditor :defaultCode="`<div class='space-y-3'>
  <Radio name='position' value='right' label='Label on right (default)' labelPosition='right' />
  <Radio name='position' value='left' label='Label on left' labelPosition='left' />
</div>`" />

## Reactive Value

Control radio selection with Pulse signals.

```tsx
const selectedPlan = Pulse.signal('free');

const reactiveRadioGroup = (
  <div>
    <div class="space-y-2">
      <Radio
        name="plan"
        value="free"
        label="Free Plan"
        checked={Pulse.computed(() => selectedPlan() === 'free')}
        onChange={(value) => selectedPlan(value)}
      />
      <Radio
        name="plan"
        value="pro"
        label="Pro Plan"
        checked={Pulse.computed(() => selectedPlan() === 'pro')}
        onChange={(value) => selectedPlan(value)}
      />
      <Radio
        name="plan"
        value="enterprise"
        label="Enterprise Plan"
        checked={Pulse.computed(() => selectedPlan() === 'enterprise')}
        onChange={(value) => selectedPlan(value)}
      />
    </div>
    
    <div class="mt-4">
      <p class="text-sm text-gray-600">Selected: {selectedPlan()}</p>
    </div>
  </div>
);
```

## Radio Group Pattern

Create organized radio button groups.

```tsx
const RadioGroupExample = () => {
  const selectedOption = Pulse.signal('option1');

  const options = [
    { value: 'option1', label: 'Option 1', description: 'First choice' },
    { value: 'option2', label: 'Option 2', description: 'Second choice' },
    { value: 'option3', label: 'Option 3', description: 'Third choice' }
  ];

  return (
    <div class="space-y-3">
      <h3 class="text-lg font-semibold">Choose an option</h3>
      
      {options.map(option => (
        <Radio
          key={option.value}
          name="radio-group"
          value={option.value}
          label={option.label}
          description={option.description}
          checked={Pulse.computed(() => selectedOption() === option.value)}
          onChange={(value) => selectedOption(value)}
        />
      ))}
    </div>
  );
};
```

## Card-Style Radio Buttons

Create visually rich radio button cards.

```tsx
const CardRadioButtons = () => {
  const selectedPlan = Pulse.signal('pro');

  const plans = [
    {
      value: 'free',
      label: 'Free',
      price: '$0',
      features: ['5 projects', '1 GB storage', 'Basic support']
    },
    {
      value: 'pro',
      label: 'Pro',
      price: '$29',
      features: ['Unlimited projects', '100 GB storage', 'Priority support']
    },
    {
      value: 'enterprise',
      label: 'Enterprise',
      price: '$99',
      features: ['Custom solutions', 'Unlimited storage', '24/7 support']
    }
  ];

  return (
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      {plans.map(plan => (
        <label
          class={`
            relative border rounded-lg p-6 cursor-pointer transition-all
            ${selectedPlan() === plan.value 
              ? 'border-blue-500 ring-2 ring-blue-500 bg-blue-50' 
              : 'border-gray-200 hover:border-blue-300'}
          `}
        >
          <Radio
            name="plan-cards"
            value={plan.value}
            label=""
            checked={Pulse.computed(() => selectedPlan() === plan.value)}
            onChange={(value) => selectedPlan(value)}
            className="absolute top-4 right-4"
          />
          
          <div>
            <h3 class="text-xl font-bold mb-2">{plan.label}</h3>
            <p class="text-3xl font-bold text-blue-600 mb-4">
              {plan.price}<span class="text-sm text-gray-500">/mo</span>
            </p>
            <ul class="space-y-2">
              {plan.features.map(feature => (
                <li class="text-sm text-gray-600">✓ {feature}</li>
              ))}
            </ul>
          </div>
        </label>
      ))}
    </div>
  );
};
```

## Form Validation

Integrate with form validation.

```tsx
const PreferenceForm = () => {
  const preference = Pulse.signal('');
  const error = Pulse.signal('');

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    
    if (!preference()) {
      error('Please select a preference');
      return;
    }
    
    error('');
    console.log('Form submitted with:', preference());
  };

  return (
    <form onsubmit={handleSubmit} class="space-y-4">
      <div class="space-y-2">
        <label class="text-sm font-semibold">
          Contact Preference <span class="text-red-500">*</span>
        </label>
        
        <Radio
          name="contact"
          value="email"
          label="Email"
          description="We'll contact you via email"
          checked={Pulse.computed(() => preference() === 'email')}
          onChange={(value) => {
            preference(value);
            error('');
          }}
        />
        
        <Radio
          name="contact"
          value="phone"
          label="Phone"
          description="We'll call you directly"
          checked={Pulse.computed(() => preference() === 'phone')}
          onChange={(value) => {
            preference(value);
            error('');
          }}
        />
        
        <Radio
          name="contact"
          value="sms"
          label="SMS"
          description="We'll send you a text message"
          checked={Pulse.computed(() => preference() === 'sms')}
          onChange={(value) => {
            preference(value);
            error('');
          }}
        />
        
        {error() && (
          <p class="text-sm text-red-600 mt-2">{error()}</p>
        )}
      </div>
      
      <Button type="submit">Submit</Button>
    </form>
  );
};
```

## Complete Example

Here's a comprehensive checkout form with radio buttons:

```tsx
import { Radio, Input, Button, Card, Alert, Pulse } from '@odyssee-software/components';

const CheckoutForm = () => {
  const formData = Pulse.signal({
    shippingMethod: 'standard',
    paymentMethod: ''
  });

  const errors = Pulse.signal({});
  const isSubmitting = Pulse.signal(false);
  const success = Pulse.signal(false);

  const shippingOptions = [
    {
      value: 'standard',
      label: 'Standard Shipping',
      description: '5-7 business days',
      price: 'Free'
    },
    {
      value: 'express',
      label: 'Express Shipping',
      description: '2-3 business days',
      price: '$9.99'
    },
    {
      value: 'overnight',
      label: 'Overnight Shipping',
      description: 'Next business day',
      price: '$24.99'
    }
  ];

  const paymentOptions = [
    {
      value: 'credit',
      label: 'Credit Card',
      description: 'Visa, Mastercard, Amex',
      icon: '💳'
    },
    {
      value: 'paypal',
      label: 'PayPal',
      description: 'Fast and secure',
      icon: '🔵'
    },
    {
      value: 'apple',
      label: 'Apple Pay',
      description: 'One-click checkout',
      icon: '🍎'
    }
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData().paymentMethod) {
      newErrors.payment = 'Please select a payment method';
    }
    errors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    
    if (!validate()) return;

    isSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Order placed:', formData());
      success(true);
      setTimeout(() => success(false), 3000);
    } catch (err) {
      errors({ ...errors(), form: 'Failed to process order' });
    } finally {
      isSubmitting(false);
    }
  };

  return (
    <div class="max-w-2xl space-y-6">
      {success() && (
        <Alert color="success" dismissible onDismiss={() => success(false)}>
          Order placed successfully!
        </Alert>
      )}

      <form onsubmit={handleSubmit} class="space-y-6">
        <Card title="Shipping Method" size="lg">
          <div class="space-y-3">
            {shippingOptions.map(option => (
              <Radio
                key={option.value}
                name="shipping"
                value={option.value}
                label={
                  <div class="flex items-center justify-between w-full">
                    <span>{option.label}</span>
                    <span class="font-semibold text-blue-600">
                      {option.price}
                    </span>
                  </div>
                }
                description={option.description}
                checked={Pulse.computed(() => 
                  formData().shippingMethod === option.value
                )}
                onChange={(value) => 
                  formData({ ...formData(), shippingMethod: value })
                }
                disabled={isSubmitting()}
              />
            ))}
          </div>
        </Card>

        <Card title="Payment Method" size="lg">
          <div class="space-y-3">
            {paymentOptions.map(option => (
              <Radio
                key={option.value}
                name="payment"
                value={option.value}
                label={
                  <span>
                    {option.icon} {option.label}
                  </span>
                }
                description={option.description}
                checked={Pulse.computed(() => 
                  formData().paymentMethod === option.value
                )}
                onChange={(value) => {
                  formData({ ...formData(), paymentMethod: value });
                  errors({ ...errors(), payment: '' });
                }}
                disabled={isSubmitting()}
              />
            ))}
            
            {errors().payment && (
              <p class="text-sm text-red-600">{errors().payment}</p>
            )}
          </div>
        </Card>

        <div class="flex justify-between items-center">
          <div class="text-sm text-gray-600">
            Total: <span class="font-bold text-lg">$129.99</span>
          </div>
          <Button
            type="submit"
            color="primary"
            size="lg"
            loading={isSubmitting()}
          >
            Place Order
          </Button>
        </div>
      </form>
    </div>
  );
};
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | **Required** | Radio group name |
| `value` | `string \| number` | **Required** | Radio button value |
| `checked` | `boolean \| Signal<boolean>` | `false` | Checked state |
| `label` | `string \| HTMLElement` | - | Radio label |
| `description` | `string` | - | Helper text below label |
| `error` | `string` | - | Error message |
| `success` | `string` | - | Success message |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | Radio size |
| `labelPosition` | `"left" \| "right"` | `"right"` | Label position |
| `disabled` | `boolean` | `false` | Disable radio |
| `required` | `boolean` | `false` | Mark as required |
| `onChange` | `(value: string) => void` | - | Change event handler |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | Auto-generated | HTML id attribute |

## Accessibility

The Radio component follows accessibility best practices:

- ✅ Proper label association with `for` attribute
- ✅ ARIA attributes for states
- ✅ Keyboard navigation support (Arrow keys, Space, Tab)
- ✅ Focus management
- ✅ Screen reader friendly
- ✅ Required field indicators
- ✅ Group semantics with same `name` attribute

### Keyboard Navigation

- **Arrow Up/Down**: Navigate between radio buttons in the same group
- **Space**: Select focused radio button
- **Tab**: Move to next form element

### ARIA Attributes

```tsx
const accessibleRadio = (
  <Radio
    name="option"
    value="1"
    label="Option 1"
    aria-label="Select option 1"
    aria-describedby="option-hint"
  />
);
```

## Best Practices

### ✅ Do

- Use radio buttons for mutually exclusive options
- Provide clear, distinct labels
- Add descriptions for complex options
- Group related options with the same `name`
- Show validation feedback
- Use 2-5 options (use Select for more)

```tsx
// Good: Clear options with descriptions
const goodRadioGroup = (
  <div class="space-y-3">
    <Radio
      name="subscription"
      value="monthly"
      label="Monthly Billing"
      description="Pay $29 every month, cancel anytime"
    />
    <Radio
      name="subscription"
      value="yearly"
      label="Annual Billing"
      description="Pay $290/year, save 17%"
    />
  </div>
);
```

### ❌ Don't

- Don't use for multiple selections (use checkboxes)
- Don't use for on/off options (use toggle)
- Don't use too many options (use select/dropdown)
- Don't forget to set the `name` attribute
- Don't use radio buttons without labels

```tsx
// Bad: Using radio for multiple selections
const badUsage = (
  <div>
    <Radio name="features" value="feature1" label="Feature 1" />
    <Radio name="features" value="feature2" label="Feature 2" />
    {/* User can't select multiple - should use checkboxes */}
  </div>
);

// Bad: Too many options
const tooManyOptions = (
  <div>
    {countries.map(country => (
      <Radio name="country" value={country.code} label={country.name} />
    ))}
    {/* Should use Select dropdown instead */}
  </div>
);
```

## Use Cases

### Subscription Plans

```tsx
const SubscriptionSelector = () => (
  <div class="space-y-3">
    <Radio
      name="plan"
      value="free"
      label="Free Plan"
      description="Perfect for individuals"
    />
    <Radio
      name="plan"
      value="pro"
      label="Pro Plan"
      description="$29/month - For professionals"
    />
  </div>
);
```

### Delivery Options

```tsx
const DeliveryOptions = () => (
  <div class="space-y-2">
    <Radio name="delivery" value="pickup" label="Store Pickup" />
    <Radio name="delivery" value="standard" label="Standard Delivery" />
    <Radio name="delivery" value="express" label="Express Delivery" />
  </div>
);
```

### Survey Questions

```tsx
const SurveyQuestion = () => (
  <div class="space-y-2">
    <p class="font-semibold mb-3">How satisfied are you?</p>
    <Radio name="satisfaction" value="1" label="Very Dissatisfied" />
    <Radio name="satisfaction" value="2" label="Dissatisfied" />
    <Radio name="satisfaction" value="3" label="Neutral" />
    <Radio name="satisfaction" value="4" label="Satisfied" />
    <Radio name="satisfaction" value="5" label="Very Satisfied" />
  </div>
);
```

## Styling & Theming

All radio styles use Tailwind CSS classes and support dark mode automatically.

### Custom Styling

```tsx
const customRadio = (
  <Radio
    name="custom"
    value="1"
    label="Custom styled radio"
    className="accent-purple-600"
  />
);
```

## TypeScript

Full TypeScript support with complete type definitions:

```tsx
import type { RadioProps } from '@odyssee-software/components';

const props: RadioProps = {
  name: 'option',
  value: '1',
  label: 'Option 1',
  checked: false,
  onChange: (value: string) => {
    console.log('Selected:', value);
  }
};

const radio = <Radio {...props} />;
```

## Related Components

- [Checkbox](/components/checkbox) - For multiple selections
- [Toggle](/components/toggle) - For on/off switches
- [RadioGroup](/components/radio-group) - For organized radio button groups
- [Select](/components/select) - For many options in a dropdown

---

**Version**: 1.0.0  
**Last Updated**: January 2025
