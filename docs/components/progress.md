---
title: Progress
description: A versatile progress bar component with linear, circular, and gauge variants
---

# Progress

Display progress with elegant linear bars, circular indicators, or gauge visualizations. Perfect for loading states, file uploads, and goal tracking. Built for Pulse Framework with full reactivity support.

## Import

```tsx
import { Progress, Pulse } from '@odyssee/components';
```

## Basic Usage

<LiveCodeEditor :defaultCode="`<Progress value={50} />`" />

## With Label and Value

Display progress with descriptive labels and percentage values.

<LiveCodeEditor :defaultCode="`<Progress 
  value={75} 
  label='Upload Progress' 
  showValue={true} 
/>`" />

## Sizes

Five size options control the height of linear progress bars: `xs`, `sm`, `md`, `lg`, and `xl`.

<LiveCodeEditor :defaultCode="`<div class='space-y-4'>
  <Progress value={25} size='xs' />
  <Progress value={40} size='sm' />
  <Progress value={55} size='md' />
  <Progress value={70} size='lg' />
  <Progress value={85} size='xl' />
</div>`" />

## Colors

Progress bars support multiple color schemes: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, and `dark`.

<LiveCodeEditor :defaultCode="`<div class='space-y-4'>
  <Progress value={50} color='primary' showValue={true} valuePosition='end' />
  <Progress value={75} color='success' showValue={true} valuePosition='end' />
  <Progress value={30} color='danger' showValue={true} valuePosition='end' />
  <Progress value={60} color='warning' showValue={true} valuePosition='end' />
</div>`" />

## Value Positions

Control where the percentage value is displayed.

<LiveCodeEditor :defaultCode="`<div class='space-y-6'>
  <Progress value={50} showValue={true} valuePosition='inside' label='Inside' />
  <Progress value={50} showValue={true} valuePosition='end' label='End' />
  <Progress value={50} showValue={true} valuePosition='top' label='Top' />
  <Progress value={50} showValue={true} valuePosition='floating' label='Floating' />
</div>`" />

## Segmented Progress

Display progress as discrete steps or segments.

<LiveCodeEditor :defaultCode="`<div class='space-y-4'>
  <Progress value={50} segments={4} showValue={true} valuePosition='end' />
  <Progress value={75} segments={5} color='success' showValue={true} valuePosition='end' />
</div>`" />

## Circular Progress

Display progress in a circular format.

<LiveCodeEditor :defaultCode="`<div class='flex gap-6'>
  <Progress value={35} type='circular' showValue={true} circularSize={120} />
  <Progress value={65} type='circular' showValue={true} circularSize={120} color='success' />
  <Progress value={90} type='circular' showValue={true} circularSize={120} color='danger' />
</div>`" />

## Gauge Progress

Visualize progress as a gauge or speedometer.

<LiveCodeEditor :defaultCode="`<div class='flex gap-6'>
  <Progress value={50} type='gauge' label='Score' showValue={true} circularSize={140} />
  <Progress value={75} type='gauge-half' label='Progress' showValue={true} circularSize={140} color='success' />
</div>`" />

## Vertical Progress

Display progress bars vertically.

```tsx
const verticalProgress = (
  <div class="flex gap-4 h-48">
    <Progress value={25} vertical={true} />
    <Progress value={50} vertical={true} color="success" />
    <Progress value={75} vertical={true} color="warning" />
    <Progress value={100} vertical={true} color="danger" />
  </div>
);
```

## Reactive Progress

Use Pulse signals for dynamic progress updates.

```tsx
import { Progress, Button, Pulse } from '@odyssee/components';

const FileUploader = () => {
  const uploadProgress = Pulse.signal(0);
  const isUploading = Pulse.signal(false);

  const simulateUpload = () => {
    isUploading(true);
    uploadProgress(0);

    const interval = setInterval(() => {
      uploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          isUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div class="space-y-4">
      <Progress
        value={uploadProgress}
        label="Uploading file..."
        showValue={true}
        color="primary"
        transition={true}
      />
      <Button
        onClick={simulateUpload}
        disabled={isUploading}
      >
        {isUploading() ? 'Uploading...' : 'Start Upload'}
      </Button>
    </div>
  );
};
```

## Custom Value Format

Format the displayed value with a custom function.

```tsx
const downloadProgress = (
  <Progress
    value={50}
    max={1000}
    showValue={true}
    valueFormat={(value, max) => `${value}/${max} MB`}
    label="Downloading..."
  />
);

const timeProgress = (
  <Progress
    value={300}
    max={600}
    showValue={true}
    valueFormat={(value, max) => {
      const minutes = Math.floor(value / 60);
      const seconds = value % 60;
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }}
    label="Time Remaining"
  />
);
```

## With Status Icon

Add a status icon to indicate completion or state.

```tsx
const progressWithStatus = (
  <Progress
    value={100}
    color="success"
    showValue={true}
    valuePosition="end"
    showStatus={true}
    statusIcon="✓"
  />
);
```

## Animated Progress

Enable smooth transitions for value changes.

```tsx
const animatedProgress = Pulse.signal(0);

// Animate to 100%
setTimeout(() => animatedProgress(100), 100);

const progress = (
  <Progress
    value={animatedProgress}
    transition={true}
    showValue={true}
  />
);
```

## Complete Example

Here's a comprehensive multi-step form with progress tracking:

```tsx
import { Progress, Button, Card, Badge, Pulse } from '@odyssee/components';

const MultiStepForm = () => {
  const currentStep = Pulse.signal(1);
  const totalSteps = 4;

  const steps = [
    { id: 1, title: 'Personal Info', icon: '👤' },
    { id: 2, title: 'Address', icon: '📍' },
    { id: 3, title: 'Payment', icon: '💳' },
    { id: 4, title: 'Review', icon: '✓' }
  ];

  const progress = Pulse.computed(() => 
    (currentStep() / totalSteps) * 100
  );

  const nextStep = () => {
    if (currentStep() < totalSteps) {
      currentStep(currentStep() + 1);
    }
  };

  const prevStep = () => {
    if (currentStep() > 1) {
      currentStep(currentStep() - 1);
    }
  };

  return (
    <Card size="lg">
      {/* Progress bar */}
      <Progress
        value={progress}
        segments={totalSteps}
        color="primary"
        showValue={true}
        valuePosition="end"
        transition={true}
      />

      {/* Step indicators */}
      <div class="flex justify-between mt-6 mb-8">
        {steps.map(step => (
          <div class="flex flex-col items-center">
            <div class={`
              w-10 h-10 rounded-full flex items-center justify-center
              ${currentStep() >= step.id 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-500'}
            `}>
              {step.icon}
            </div>
            <span class={`
              text-xs mt-2
              ${currentStep() >= step.id 
                ? 'text-blue-600 font-semibold' 
                : 'text-gray-500'}
            `}>
              {step.title}
            </span>
          </div>
        ))}
      </div>

      {/* Step content */}
      <div class="min-h-48 mb-6">
        <h3 class="text-xl font-bold mb-4">
          Step {currentStep()}: {steps[currentStep() - 1].title}
        </h3>
        <p class="text-gray-600">
          Form content for step {currentStep()} goes here...
        </p>
      </div>

      {/* Navigation buttons */}
      <div class="flex justify-between">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={currentStep() === 1}
        >
          Previous
        </Button>
        <Button
          variant="solid"
          color="primary"
          onClick={nextStep}
          disabled={currentStep() === totalSteps}
        >
          {currentStep() === totalSteps ? 'Complete' : 'Next'}
        </Button>
      </div>
    </Card>
  );
};
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number \| Signal<number>` | **Required** | Current progress value |
| `max` | `number` | `100` | Maximum value |
| `min` | `number` | `0` | Minimum value |
| `label` | `string` | - | Progress label text |
| `showValue` | `boolean` | `false` | Show percentage/value |
| `valuePosition` | `"inside" \| "end" \| "top" \| "floating"` | `"inside"` | Value display position |
| `valueFormat` | `(value: number, max: number) => string` | - | Custom value formatter |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | Progress bar size |
| `color` | `"primary" \| "secondary" \| "success" \| "danger" \| "warning" \| "info" \| "light" \| "dark"` | `"primary"` | Color scheme |
| `rounded` | `boolean` | `true` | Rounded corners |
| `vertical` | `boolean` | `false` | Vertical orientation |
| `height` | `string` | - | Custom height (vertical mode) |
| `segments` | `number` | - | Number of discrete segments |
| `segmentGap` | `string` | `"gap-x-1"` | Gap between segments |
| `type` | `"linear" \| "circular" \| "gauge" \| "gauge-half"` | `"linear"` | Progress display type |
| `circularSize` | `number` | `160` | Size for circular/gauge |
| `strokeWidth` | `number` | `2` | Stroke width for circular |
| `transition` | `boolean` | `true` | Smooth transitions |
| `showStatus` | `boolean` | `false` | Show status indicator |
| `statusIcon` | `string \| HTMLElement` | - | Status icon content |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | - | HTML id attribute |

## Accessibility

The Progress component follows accessibility best practices:

- ✅ Uses proper `role="progressbar"` attribute
- ✅ Includes `aria-valuenow`, `aria-valuemin`, `aria-valuemax`
- ✅ Provides descriptive labels
- ✅ Screen reader friendly
- ✅ Sufficient color contrast

### ARIA Attributes

```tsx
const accessibleProgress = (
  <Progress
    value={50}
    label="File upload progress"
    aria-label="Uploading document.pdf"
  />
);
```

## Best Practices

### ✅ Do

- Always provide labels for context
- Use appropriate colors (success for completion, danger for errors)
- Update progress smoothly with transitions
- Show percentage for clarity
- Use segments for step-based processes

```tsx
// Good: Clear label and context
const goodProgress = (
  <Progress
    value={uploadProgress}
    label="Uploading document.pdf"
    showValue={true}
    color="primary"
    transition={true}
  />
);
```

### ❌ Don't

- Don't use progress bars for indefinite waits (use spinners)
- Don't update too frequently (causes jitter)
- Don't forget to show completion state
- Don't use tiny progress bars (hard to see)

```tsx
// Bad: No context, no value display
const badProgress = (
  <Progress value={someValue} />
);

// Better: Clear and informative
const betterProgress = (
  <Progress
    value={someValue}
    label="Processing..."
    showValue={true}
    color="primary"
  />
);
```

## Use Cases

### File Upload

```tsx
const FileUpload = ({ file, progress }) => (
  <div class="space-y-2">
    <div class="flex justify-between">
      <span class="text-sm font-medium">{file.name}</span>
      <span class="text-xs text-gray-500">
        {Math.round(progress() * file.size / 100)} / {file.size} KB
      </span>
    </div>
    <Progress
      value={progress}
      color="success"
      showValue={true}
      valuePosition="end"
    />
  </div>
);
```

### Goal Tracking

```tsx
const GoalTracker = ({ goal, current }) => {
  const percentage = (current / goal) * 100;
  
  return (
    <Card>
      <h3 class="font-bold mb-2">Monthly Sales Goal</h3>
      <Progress
        value={current}
        max={goal}
        type="gauge"
        label="Sales"
        showValue={true}
        valueFormat={(val, max) => `$${val.toLocaleString()} / $${max.toLocaleString()}`}
        color={percentage >= 100 ? 'success' : percentage >= 75 ? 'warning' : 'primary'}
      />
    </Card>
  );
};
```

### Loading State

```tsx
const LoadingScreen = ({ stage }) => {
  const stages = [
    'Initializing...',
    'Loading resources...',
    'Processing data...',
    'Almost ready...'
  ];

  const progress = ((stage + 1) / stages.length) * 100;

  return (
    <div class="flex flex-col items-center justify-center h-screen">
      <div class="w-96">
        <Progress
          value={progress}
          label={stages[stage]}
          showValue={true}
          color="primary"
          transition={true}
        />
      </div>
    </div>
  );
};
```

### Skill Levels

```tsx
const SkillLevels = ({ skills }) => (
  <div class="space-y-4">
    {skills.map(skill => (
      <div>
        <div class="flex justify-between mb-1">
          <span class="text-sm font-medium">{skill.name}</span>
          <span class="text-sm text-gray-500">{skill.level}%</span>
        </div>
        <Progress
          value={skill.level}
          color={skill.level >= 80 ? 'success' : skill.level >= 50 ? 'primary' : 'warning'}
          size="sm"
        />
      </div>
    ))}
  </div>
);
```

## Styling & Theming

All progress styles use Tailwind CSS classes and support dark mode automatically.

### Custom Styling

```tsx
const customProgress = (
  <Progress
    value={75}
    className="shadow-lg"
    color="primary"
  />
);
```

## TypeScript

Full TypeScript support with complete type definitions:

```tsx
import type { ProgressProps } from '@odyssee/components';

const props: ProgressProps = {
  value: 50,
  max: 100,
  showValue: true,
  label: 'Progress',
  color: 'primary',
  type: 'linear'
};

const progress = <Progress {...props} />;
```

## Related Components

- [Spinner](/components/spinner) - For indefinite loading
- [Badge](/components/badge) - For status indicators
- [Card](/components/card) - Wrap progress in cards

---

**Version**: 1.0.0  
**Last Updated**: January 2025