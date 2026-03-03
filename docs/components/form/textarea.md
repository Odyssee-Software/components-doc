---
title: Textarea
description: A flexible multiline text input with labels, hints, auto-resize, and character count
---

# Textarea

A versatile multiline text input component with support for labels, validation, character counting, and auto-resize. Perfect for comments, descriptions, and long-form content. Built for Pulse Framework with full reactivity support.

## Import

```tsx
import { Textarea, Pulse } from '@odyssee-software/components';
```

## Basic Usage

<LiveCodeEditor :defaultCode="`<Textarea placeholder='Enter your message...' />`" />

## With Label and Hint

Add labels and helper text for better UX.

<LiveCodeEditor :defaultCode="`<Textarea
  label='Comment'
  hint='We will get back to you soon.'
  placeholder='Share your thoughts...'
  rows={3}
/>`" />

## Sizes

Five size options control padding and text size: `xs`, `sm`, `md`, `lg`, and `xl`.

<LiveCodeEditor :defaultCode="`<div class='space-y-4'>
  <Textarea size='xs' placeholder='Extra small textarea' />
  <Textarea size='sm' placeholder='Small textarea' />
  <Textarea size='md' placeholder='Medium textarea (default)' />
  <Textarea size='lg' placeholder='Large textarea' />
  <Textarea size='xl' placeholder='Extra large textarea' />
</div>`" />

## Rows

Control the initial height with the `rows` prop.

<LiveCodeEditor :defaultCode="`<div class='space-y-4'>
  <Textarea rows={2} placeholder='2 rows' />
  <Textarea rows={4} placeholder='4 rows' />
  <Textarea rows={8} placeholder='8 rows' />
</div>`" />

## Required Field

Mark fields as required with visual indicators.

<LiveCodeEditor :defaultCode="`<Textarea
  label='Message'
  required={true}
  placeholder='This field is required'
/>`" />

## With Error

Display validation errors.

<LiveCodeEditor :defaultCode="`<Textarea
  label='Feedback'
  error='Your message should be at least 10 characters long'
  value='Short'
/>`" />

## Character Count

Show character count with maximum length.

<LiveCodeEditor :defaultCode="`<Textarea
  label='Bio'
  maxLength={200}
  showCount={true}
  placeholder='Tell us about yourself (max 200 characters)'
/>`" />

## Auto-Resize

Automatically grow/shrink based on content.

```tsx
const autoResizeTextarea = (
  <Textarea
    label="Description"
    autoResize={true}
    minRows={2}
    maxRows={8}
    placeholder="Type to see auto-resize in action..."
  />
);
```

## Disabled State

Disable the textarea.

<LiveCodeEditor :defaultCode="`<Textarea
  label='Disabled Textarea'
  disabled={true}
  value='This textarea is disabled'
/>`" />

## Readonly State

Make the textarea read-only.

<LiveCodeEditor :defaultCode="`<Textarea
  label='Terms and Conditions'
  readonly={true}
  value='These are the terms and conditions that cannot be edited...'
  rows={4}
/>`" />

## Reactive Value

Control textarea value with Pulse signals.

```tsx
const message = Pulse.signal('');

const reactiveTextarea = (
  <div>
    <Textarea
      label="Message"
      value={message}
      onChange={(val) => message(val)}
      placeholder="Type something..."
    />
    
    <div class="mt-4">
      <p class="text-sm text-gray-600">You typed:</p>
      <p class="text-sm font-mono">{message() || '(nothing yet)'}</p>
    </div>
  </div>
);
```

## With Focus Events

Handle focus and blur events.

```tsx
const textareaWithEvents = (
  <Textarea
    label="Message"
    placeholder="Focus on me..."
    onFocus={() => console.log('Focused!')}
    onBlur={() => console.log('Blurred!')}
  />
);
```

## Form Validation

Integrate with form validation.

```tsx
const FeedbackForm = () => {
  const feedback = Pulse.signal('');
  const error = Pulse.signal('');

  const validate = () => {
    const value = feedback();
    if (value.length === 0) {
      error('Feedback is required');
      return false;
    }
    if (value.length < 10) {
      error('Feedback must be at least 10 characters');
      return false;
    }
    error('');
    return true;
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (validate()) {
      console.log('Submitted:', feedback());
    }
  };

  return (
    <form onsubmit={handleSubmit} class="space-y-4">
      <Textarea
        label="Your Feedback"
        value={feedback}
        onChange={(val) => {
          feedback(val);
          validate();
        }}
        error={error()}
        placeholder="Tell us what you think..."
        rows={4}
        required
      />
      <Button type="submit">Submit Feedback</Button>
    </form>
  );
};
```



## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string \| Signal<string>` | - | Textarea value |
| `placeholder` | `string` | `""` | Placeholder text |
| `label` | `string` | - | Label text |
| `hint` | `string` | - | Helper text below input |
| `error` | `string` | - | Error message |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | Textarea size |
| `rows` | `number` | `3` | Initial number of rows |
| `maxLength` | `number` | - | Maximum character count |
| `showCount` | `boolean` | `false` | Show character counter |
| `autoResize` | `boolean` | `false` | Auto-resize based on content |
| `minRows` | `number` | `2` | Minimum rows (auto-resize) |
| `maxRows` | `number` | `10` | Maximum rows (auto-resize) |
| `disabled` | `boolean` | `false` | Disable textarea |
| `readonly` | `boolean` | `false` | Make read-only |
| `required` | `boolean` | `false` | Mark as required |
| `onChange` | `(value: string) => void` | - | Change event handler |
| `onFocus` | `(event: FocusEvent) => void` | - | Focus event handler |
| `onBlur` | `(event: FocusEvent) => void` | - | Blur event handler |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | Auto-generated | HTML id attribute |

## Accessibility

The Textarea component follows accessibility best practices:

- ✅ Proper label association with `for` attribute
- ✅ ARIA attributes for errors and descriptions
- ✅ Required field indicators
- ✅ Keyboard navigation support
- ✅ Focus management
- ✅ Screen reader friendly error messages

### ARIA Attributes

```tsx
const accessibleTextarea = (
  <Textarea
    label="Feedback"
    aria-label="User feedback"
    aria-describedby="feedback-hint"
    aria-invalid={hasError}
  />
);
```

## Best Practices

### ✅ Do

- Provide clear labels and hints
- Show character limits when applicable
- Use appropriate row heights for expected content
- Validate input and show helpful error messages
- Use auto-resize for dynamic content
- Disable during submission

```tsx
// Good: Clear label, validation, and limits
const goodTextarea = (
  <Textarea
    label="Product Review"
    hint="Share your experience with this product"
    maxLength={500}
    showCount={true}
    placeholder="Write your review..."
    required
  />
);
```

### ❌ Don't

- Don't use textarea for single-line input (use Input)
- Don't forget to handle long text gracefully
- Don't hide character limits
- Don't make textareas too small for expected content
- Don't forget to validate on blur

```tsx
// Bad: Too small for expected content
const badTextarea = (
  <Textarea
    label="Essay (500 words)"
    rows={2}
  />
);

// Better: Appropriate size with auto-resize
const betterTextarea = (
  <Textarea
    label="Essay (500 words)"
    autoResize={true}
    minRows={5}
    maxRows={20}
    maxLength={3000}
    showCount={true}
  />
);
```

## Use Cases

### Comment Section

```tsx
const CommentBox = () => (
  <Textarea
    label="Leave a comment"
    placeholder="What are your thoughts?"
    autoResize={true}
    minRows={2}
    maxRows={8}
  />
);
```

### Feedback Form

```tsx
const FeedbackBox = () => (
  <Textarea
    label="How can we improve?"
    hint="Your feedback helps us build better products"
    maxLength={1000}
    showCount={true}
    rows={5}
  />
);
```

### Bio Editor

```tsx
const BioEditor = () => (
  <Textarea
    label="About Me"
    hint="Tell others about yourself"
    maxLength={200}
    showCount={true}
    autoResize={true}
    minRows={3}
  />
);
```

### Message Composer

```tsx
const MessageComposer = () => (
  <Textarea
    label="Message"
    placeholder="Type your message..."
    autoResize={true}
    minRows={1}
    maxRows={10}
  />
);
```

## Styling & Theming

All textarea styles use Tailwind CSS classes and support dark mode automatically.

### Custom Styling

```tsx
const customTextarea = (
  <Textarea
    className="font-mono bg-gray-50 dark:bg-gray-800"
    placeholder="Custom styled textarea"
  />
);
```

## TypeScript

Full TypeScript support with complete type definitions:

```tsx
import type { TextareaProps } from '@odyssee-software/components';

const props: TextareaProps = {
  label: 'Message',
  placeholder: 'Type here...',
  maxLength: 500,
  showCount: true,
  autoResize: true,
  onChange: (value: string) => {
    console.log('Value:', value);
  }
};

const textarea = <Textarea {...props} />;
```

## Related Components

- [Input](/components/input) - For single-line text input
- [Form Group](/components/form-group) - Group form elements
- [Button](/components/button) - For form actions

---

**Version**: 1.0.0  
**Last Updated**: January 2025
