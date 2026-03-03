# Stepper

## Introduction

The `Stepper` component provides a flexible, accessible, and highly customizable interface for multi-step processes such as forms, wizards, onboarding flows, and checkout experiences. It supports linear and non-linear navigation, horizontal and vertical orientations, multiple visual variants, step status indicators, navigation controls, and both controlled and uncontrolled usage. Designed for complex workflows, it adapts to a wide range of use cases in dashboards, e-commerce, project setup, and more.

## Import

```ts
import { Stepper } from '@odyssee/components';
```

## LiveCodeEditor examples

### Basic Stepper

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const currentStep = Pulse.signal(1);
  const steps = [
    {
      index: 1,
      label: 'Step 1',
      description: 'First step',
      content: () => <div style={{ padding: 16 }}>Step 1 Content</div>,
    },
    {
      index: 2,
      label: 'Step 2',
      description: 'Second step',
      content: () => <div style={{ padding: 16 }}>Step 2 Content</div>,
    },
    {
      index: 3,
      label: 'Step 3',
      description: 'Third step',
      content: () => <div style={{ padding: 16 }}>Step 3 Content</div>,
    },
  ];
  return (
    <Container>
      <Stepper
        steps={steps}
        currentStep={currentStep}
        onStepChange={step => currentStep(step)}
      />
    </Container>
  );
}`" />

### Modes: Linear & Non-Linear

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const currentStep = Pulse.signal(1);
  const steps = [
    { index: 1, label: 'Step 1', content: () => <div style={{ padding: 16 }}>Step 1</div> },
    { index: 2, label: 'Step 2', content: () => <div style={{ padding: 16 }}>Step 2</div> },
    { index: 3, label: 'Step 3', content: () => <div style={{ padding: 16 }}>Step 3</div> },
  ];
  return (
    <Container>
      <Stepper
        mode='linear'
        steps={steps}
        currentStep={currentStep}
        onStepChange={step => currentStep(step)}
      />
      <Stepper
        mode='non-linear'
        steps={steps}
        currentStep={1}
        onStepChange={step => console.log('Step:', step)}
      />
    </Container>
  );
}`" />

### Orientations

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const steps = [
    { index: 1, label: 'Step 1', content: () => <div style={{ padding: 16 }}>Step 1</div> },
    { index: 2, label: 'Step 2', content: () => <div style={{ padding: 16 }}>Step 2</div> },
    { index: 3, label: 'Step 3', content: () => <div style={{ padding: 16 }}>Step 3</div> },
  ];
  return (
    <Container>
      <Stepper
        orientation='horizontal'
        steps={steps}
        currentStep={2}
        onStepChange={step => console.log('Step:', step)}
      />
      <Stepper
        orientation='vertical'
        steps={steps}
        currentStep={2}
        onStepChange={step => console.log('Step:', step)}
      />
    </Container>
  );
}`" />

### Variants

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const steps = [
    { index: 1, label: 'Step 1', content: () => <div style={{ padding: 16 }}>Step 1</div> },
    { index: 2, label: 'Step 2', content: () => <div style={{ padding: 16 }}>Step 2</div> },
    { index: 3, label: 'Step 3', content: () => <div style={{ padding: 16 }}>Step 3</div> },
  ];
  return (
    <Container>
      <Stepper
        variant='default'
        steps={steps}
        currentStep={2}
        onStepChange={step => console.log('Step:', step)}
      />
      <Stepper
        variant='white'
        steps={steps}
        currentStep={2}
        onStepChange={step => console.log('Step:', step)}
      />
    </Container>
  );
}`" />

### With Navigation Controls

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const currentStep = Pulse.signal(1);
  const steps = [
    { index: 1, label: 'Step 1', content: () => <div style={{ padding: 16 }}>Step 1</div> },
    { index: 2, label: 'Step 2', content: () => <div style={{ padding: 16 }}>Step 2</div> },
    { index: 3, label: 'Step 3', content: () => <div style={{ padding: 16 }}>Step 3</div> },
  ];
  return (
    <Container>
      <Stepper
        steps={steps}
        currentStep={currentStep}
        showControls={true}
        backText='Previous'
        nextText='Continue'
        finishText='Complete'
        onStepChange={step => currentStep(step)}
        onComplete={() => alert('Stepper completed!')}
      />
    </Container>
  );
}`" />

### Alignment

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const steps = [
    { index: 1, label: 'Step 1', content: () => <div style={{ padding: 16 }}>Step 1</div> },
    { index: 2, label: 'Step 2', content: () => <div style={{ padding: 16 }}>Step 2</div> },
    { index: 3, label: 'Step 3', content: () => <div style={{ padding: 16 }}>Step 3</div> },
  ];
  return (
    <Container>
      <Stepper
        alignment='start'
        steps={steps}
        currentStep={2}
        onStepChange={step => console.log('Step:', step)}
      />
      <Stepper
        alignment='center'
        steps={steps}
        currentStep={2}
        onStepChange={step => console.log('Step:', step)}
      />
    </Container>
  );
}`" />

### Use Case: Multi-Step Registration Form

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const currentStep = Pulse.signal(1);
  const steps = [
    {
      index: 1,
      label: 'Account Details',
      description: 'Basic information',
      content: () => <div style={{ padding: 16 }}>Account details form...</div>,
    },
    {
      index: 2,
      label: 'Billing',
      description: 'Payment information',
      content: () => <div style={{ padding: 16 }}>Billing form...</div>,
    },
    {
      index: 3,
      label: 'Confirmation',
      description: 'Review & submit',
      content: () => <div style={{ padding: 16 }}>Confirmation step...</div>,
    },
  ];
  return (
    <Container>
      <Stepper
        mode='linear'
        showControls={true}
        currentStep={currentStep}
        onStepChange={step => currentStep(step)}
        onComplete={() => alert('Registration completed!')}
        steps={steps}
      />
    </Container>
  );
}`" />

---

## Props

| Prop              | Type                                                      | Default      | Description                                                                                  |
|-------------------|-----------------------------------------------------------|--------------|----------------------------------------------------------------------------------------------|
| `steps`           | `Stepper.StepItemData[]`                                  | —            | Array of step data (see below for structure).                                                |
| `currentStep`     | `number` \| `Signal<number>`                              | —            | The current step (1-indexed).                                                                |
| `mode`            | `"linear"` \| `"non-linear"`                              | `"linear"`   | Navigation mode: sequential or free navigation.                                              |
| `orientation`     | `"horizontal"` \| `"vertical"`                            | `"horizontal"`| Stepper orientation.                                                                         |
| `variant`         | `"default"` \| `"white"` \| `"solid"`                     | `"default"`  | Visual style of the stepper.                                                                 |
| `alignment`       | `"start"` \| `"center"` \| `"end"`                        | `"start"`    | Alignment of the stepper.                                                                    |
| `showControls`    | `boolean`                                                 | `false`      | Shows navigation controls (Back, Next, Finish, etc.).                                        |
| `backText`        | `string`                                                  | `"Back"`     | Text for the back button.                                                                    |
| `nextText`        | `string`                                                  | `"Next"`     | Text for the next button.                                                                    |
| `finishText`      | `string`                                                  | `"Finish"`   | Text for the finish button.                                                                  |
| `resetText`       | `string`                                                  | `"Reset"`    | Text for the reset button.                                                                   |
| `skipText`        | `string`                                                  | `"Skip"`     | Text for the skip button.                                                                    |
| `completeStepText`| `string`                                                  | —            | Text for the complete step button.                                                           |
| `onStepChange`    | `(step: number) => void`                                  | —            | Callback fired when the step changes.                                                        |
| `onComplete`      | `() => void`                                              | —            | Callback fired when the stepper is completed.                                                |
| `onSkip`          | `(step: number) => void`                                  | —            | Callback fired when a step is skipped.                                                       |
| `onReset`         | `() => void`                                              | —            | Callback fired when the stepper is reset.                                                    |
| `onBack`          | `() => void`                                              | —            | Callback fired when the back button is pressed.                                              |
| `onNext`          | `() => void`                                              | —            | Callback fired when the next button is pressed.                                              |
| `children`        | `Pulse.JSX.Element` \| `Pulse.JSX.Element[]`              | —            | Custom children (alternative to steps array).                                                |
| `className`       | `string`                                                  | —            | Additional CSS classes for the root element.                                                 |
| `id`              | `string`                                                  | auto-generated | ID for the stepper component.                                                             |
| `style`           | `object`                                                  | —            | Inline styles for the root element.                                                          |
| ...rest           | `BaseComponentProps`                                      | —            | Any other base props supported by Odyssee components.                                        |

### Stepper.StepItemData

| Prop         | Type                           | Description                                         |
|--------------|--------------------------------|-----------------------------------------------------|
| `index`      | `number`                       | Step index (1-based).                               |
| `label`      | `string`                       | Step label.                                         |
| `description`| `string`                       | Optional description for the step.                  |
| `icon`       | `Pulse.JSX.Element`            | Optional icon for the step.                         |
| `avatar`     | `string`                       | Optional avatar image URL for the step.             |
| `content`    | `Pulse.JSX.Element` \| `() => Pulse.JSX.Element` | Step content. |
| `isOptional` | `boolean`                      | Marks the step as optional.                         |
| `isCompleted`| `boolean`                      | Marks the step as completed.                        |
| `hasError`   | `boolean`                      | Marks the step as having an error.                  |

## Implementation notes

- The component supports both controlled and uncontrolled usage via Pulse signals.
- Linear mode enforces sequential navigation; non-linear allows free navigation.
- Supports horizontal and vertical layouts, with alignment options.
- Step status is visually indicated (pending, active, completed, error, processed).
- Navigation controls (Back, Next, Finish, etc.) are built-in and customizable.
- Step content can be static or rendered via a function.
- Designed for both light and dark themes.
- All steps and interactions are accessible and keyboard-navigable.

## Accessibility

- Uses ARIA roles (`list`, `listitem`, `tabpanel`) for screen readers.
- Keyboard navigation is supported (Tab, Arrow keys, Enter/Space for controls).
- Focus and active states are clearly styled.
- Disabled steps are not focusable or clickable.
- Navigation controls use accessible buttons with proper labels.

## Best practices

- Use controlled mode (signals + callbacks) for full synchronization with your app state.
- Prefer linear mode for processes that require sequential completion.
- Use vertical orientation for sidebar or wizard layouts.
- Provide clear labels and descriptions for each step.
- Use icons or avatars to visually distinguish steps when appropriate.
- Ensure all step content is concise and accessible.
- Customize navigation controls to match your workflow.

## Related links

- [StepIndicator](./step-indicator.md)
- [Accordion](./accordion.md)
- [Pulse Framework documentation](https://github.com/odyssee-software/pulse-framework)
- [Odyssee Components documentation](../README.md)
