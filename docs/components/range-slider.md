---
title: RangeSlider
description: A customizable range slider for selecting numeric values with formatting and validation
---

# RangeSlider

Select numeric values within a defined range using an intuitive slider interface. Perfect for volume controls, price filters, settings adjustments, and any numeric input. Built for Pulse Framework with full reactivity support.

## Import

```ts
import { RangeSlider } from '@odyssee-software/components';
```

## Basic Usage

<LiveCodeEditor :defaultCode="`<RangeSlider
  label='Volume'
  value={50}
  onChange={(value) => console.log(value)}
/>`" />

## With Value Display

<LiveCodeEditor :defaultCode="`<RangeSlider
  label='Brightness'
  value={75}
  showValue={true}
  onChange={(value) => console.log(value)}
/>`" />

## Custom Range

Define custom minimum, maximum, and step values.

<LiveCodeEditor :defaultCode="`<div class='space-y-4'>
  <RangeSlider
    label='Price'
    min={0}
    max={1000}
    step={50}
    value={500}
    showValue={true}
  />
  <RangeSlider
    label='Temperature'
    min={-10}
    max={40}
    step={1}
    value={20}
    showValue={true}
  />
  <RangeSlider
    label='Progress'
    min={0}
    max={100}
    step={5}
    value={65}
    showValue={true}
  />
</div>`" />

## Custom Value Format

Format the displayed value with a custom function.

<LiveCodeEditor :defaultCode="`<div class='space-y-4'>
  <RangeSlider
    label='Temperature'
    min={-10}
    max={40}
    value={20}
    showValue={true}
    valueFormat={(val) => val + '°C'}
  />
  <RangeSlider
    label='Price Range'
    min={0}
    max={1000}
    step={10}
    value={500}
    showValue={true}
    valueFormat={(val) => '$' + val}
  />
  <RangeSlider
    label='Volume'
    min={0}
    max={100}
    value={75}
    showValue={true}
    valueFormat={(val) => val + '%'}
  />
</div>`" />

## With Hints

<LiveCodeEditor :defaultCode="`<RangeSlider
  label='Audio Volume'
  value={60}
  showValue={true}
  hint='Adjust the audio playback volume'
/>`" />

## Validation State

<LiveCodeEditor :defaultCode="`<div class='space-y-4'>
  <RangeSlider
    label='Valid range'
    value={50}
    showValue={true}
    hint='Value is within acceptable range'
  />
  <RangeSlider
    label='Invalid range'
    value={90}
    showValue={true}
    error='Value exceeds recommended maximum'
  />
</div>`" />

## Disabled State

<LiveCodeEditor :defaultCode="`<RangeSlider
  label='Disabled slider'
  value={50}
  disabled={true}
  showValue={true}
  hint='This slider is currently disabled'
/>`" />

## Reactive Slider

Control slider value with Pulse signals.

```tsx
import { RangeSlider, Button, Pulse } from '@odyssee-software/components';

const VolumeControl = () => {
  const volume = Pulse.signal(50);
  const isMuted = Pulse.signal(false);

  const displayVolume = Pulse.computed(() => {
    return isMuted() ? 0 : volume();
  });

  const toggleMute = () => {
    isMuted(!isMuted());
  };

  const increaseVolume = () => {
    const current = volume();
    if (current < 100) {
      volume(Math.min(100, current + 10));
      isMuted(false);
    }
  };

  const decreaseVolume = () => {
    const current = volume();
    if (current > 0) {
      volume(Math.max(0, current - 10));
    }
  };

  return (
    <div class='space-y-4'>
      <RangeSlider
        label='Volume Control'
        value={volume}
        min={0}
        max={100}
        showValue={true}
        valueFormat={(val) => `${val}%`}
        onChange={(val) => {
          volume(val);
          isMuted(false);
        }}
        disabled={isMuted()}
      />

      <div class='flex gap-2'>
        <Button onClick={decreaseVolume} size='sm' variant='outline'>
          Volume Down
        </Button>
        <Button onClick={toggleMute} size='sm' variant='outline'>
          {isMuted() ? 'Unmute' : 'Mute'}
        </Button>
        <Button onClick={increaseVolume} size='sm' variant='outline'>
          Volume Up
        </Button>
      </div>

      <div class='p-4 bg-gray-50 rounded-lg dark:bg-neutral-800'>
        <p class='text-sm text-gray-700 dark:text-gray-300'>
          Current Volume: {displayVolume()}%
        </p>
        <p class='text-xs text-gray-500 dark:text-gray-400'>
          Status: {isMuted() ? 'Muted' : 'Playing'}
        </p>
      </div>
    </div>
  );
};
```

## Complete Example: Image Editor

```tsx
import { RangeSlider, Card, Button, Pulse } from '@odyssee-software/components';

const ImageEditor = () => {
  const brightness = Pulse.signal(100);
  const contrast = Pulse.signal(100);
  const saturation = Pulse.signal(100);
  const blur = Pulse.signal(0);

  const imageStyle = Pulse.computed(() => {
    return {
      filter: `brightness(${brightness()}%) contrast(${contrast()}%) saturate(${saturation()}%) blur(${blur()}px)`
    };
  });

  const resetAll = () => {
    brightness(100);
    contrast(100);
    saturation(100);
    blur(0);
  };

  const hasChanges = Pulse.computed(() => {
    return brightness() !== 100 || 
           contrast() !== 100 || 
           saturation() !== 100 || 
           blur() !== 0;
  });

  return (
    <Card title='Image Editor' size='lg'>
      <div class='space-y-6'>
        {/* Preview */}
        <div class='aspect-video bg-gray-200 rounded-lg overflow-hidden dark:bg-neutral-700'>
          <img
            src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
            alt='Preview'
            class='w-full h-full object-cover'
            style={imageStyle()}
          />
        </div>

        {/* Controls */}
        <div class='space-y-4'>
          <RangeSlider
            label='Brightness'
            value={brightness}
            min={0}
            max={200}
            step={1}
            showValue={true}
            valueFormat={(val) => `${val}%`}
            onChange={(val) => brightness(val)}
          />

          <RangeSlider
            label='Contrast'
            value={contrast}
            min={0}
            max={200}
            step={1}
            showValue={true}
            valueFormat={(val) => `${val}%`}
            onChange={(val) => contrast(val)}
          />

          <RangeSlider
            label='Saturation'
            value={saturation}
            min={0}
            max={200}
            step={1}
            showValue={true}
            valueFormat={(val) => `${val}%`}
            onChange={(val) => saturation(val)}
          />

          <RangeSlider
            label='Blur'
            value={blur}
            min={0}
            max={10}
            step={0.5}
            showValue={true}
            valueFormat={(val) => `${val}px`}
            onChange={(val) => blur(val)}
          />
        </div>

        {/* Actions */}
        <div class='flex gap-3'>
          <Button
            onClick={resetAll}
            variant='outline'
            disabled={!hasChanges()}
          >
            Reset All
          </Button>
          <Button color='primary' fullWidth>
            Apply Changes
          </Button>
        </div>
      </div>
    </Card>
  );
};
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number \| Signal<number>` | `50` | Current slider value |
| `min` | `number` | `0` | Minimum value |
| `max` | `number` | `100` | Maximum value |
| `step` | `number` | `1` | Step increment |
| `label` | `string` | - | Slider label text |
| `hint` | `string` | - | Helper text below slider |
| `error` | `string` | - | Error message |
| `disabled` | `boolean` | `false` | Disable slider |
| `showValue` | `boolean` | `false` | Display current value |
| `valueFormat` | `(value: number) => string` | - | Custom value formatter |
| `onChange` | `(value: number) => void` | - | Value change callback |
| `name` | `string` | - | Input name attribute |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | Auto-generated | HTML id attribute |

## Accessibility

The RangeSlider component follows accessibility best practices:

- ✅ Semantic HTML with native `<input type="range">`
- ✅ Proper label associations
- ✅ Keyboard navigation (arrow keys, home, end)
- ✅ ARIA attributes for screen readers
- ✅ Focus indicators
- ✅ Disabled state properly communicated

```tsx
// Accessibility features are built-in
const accessibleSlider = (
  <RangeSlider
    label='Volume'
    value={50}
    showValue={true}
    // All ARIA and keyboard navigation handled automatically
  />
);
```

## Best Practices

### ✅ Do

- Use appropriate min/max ranges for the context
- Provide clear labels describing what the slider controls
- Show current value for important adjustments
- Use reasonable step increments
- Format values meaningfully (%, $, °C, etc.)

```tsx
// Good: Clear context and formatting
const goodSlider = (
  <RangeSlider
    label='Product Price Filter'
    min={0}
    max={1000}
    step={10}
    value={500}
    showValue={true}
    valueFormat={(val) => `$${val}`}
    hint='Filter products by price range'
  />
);
```

### ❌ Don't

- Don't use very large ranges with small steps (poor UX)
- Don't omit labels or value displays for important controls
- Don't use steps that are too large for precision
- Don't forget to validate against min/max
- Don't hide the current value for critical settings

```tsx
// Bad: Unclear purpose, no formatting
const badSlider = (
  <RangeSlider
    value={50}
    // No label
    // No value display
    // No formatting
  />
);

// Better: Clear and formatted
const betterSlider = (
  <RangeSlider
    label='Temperature'
    value={20}
    showValue={true}
    valueFormat={(val) => `${val}°C`}
  />
);
```

## Use Cases

### Volume Control

```tsx
const AudioPlayer = () => {
  const volume = Pulse.signal(75);

  return (
    <div class='p-4 bg-white rounded-lg shadow dark:bg-neutral-800'>
      <RangeSlider
        label='Volume'
        value={volume}
        min={0}
        max={100}
        showValue={true}
        valueFormat={(val) => `${val}%`}
        onChange={(val) => {
          volume(val);
          // Update audio element volume
          document.querySelector('audio')?.volume = val / 100;
        }}
      />
    </div>
  );
};
```

### Price Filter

```tsx
const PriceFilter = () => {
  const minPrice = Pulse.signal(0);
  const maxPrice = Pulse.signal(1000);

  return (
    <div class='space-y-4'>
      <h3 class='font-semibold'>Price Range</h3>
      
      <RangeSlider
        label='Minimum Price'
        value={minPrice}
        min={0}
        max={maxPrice()}
        step={10}
        showValue={true}
        valueFormat={(val) => `$${val}`}
        onChange={(val) => minPrice(val)}
      />

      <RangeSlider
        label='Maximum Price'
        value={maxPrice}
        min={minPrice()}
        max={2000}
        step={10}
        showValue={true}
        valueFormat={(val) => `$${val}`}
        onChange={(val) => maxPrice(val)}
      />

      <p class='text-sm text-gray-600'>
        Showing items from ${minPrice()} to ${maxPrice()}
      </p>
    </div>
  );
};
```

### Settings Panel

```tsx
const NotificationSettings = () => {
  const frequency = Pulse.signal(3);

  const frequencyLabels = {
    1: 'Every hour',
    2: 'Every 2 hours',
    3: 'Every 4 hours',
    4: 'Every 8 hours',
    5: 'Once daily'
  };

  return (
    <Card title='Notification Settings'>
      <RangeSlider
        label='Notification Frequency'
        value={frequency}
        min={1}
        max={5}
        step={1}
        showValue={true}
        valueFormat={(val) => frequencyLabels[val] || String(val)}
        hint='How often would you like to receive notifications?'
      />
    </Card>
  );
};
```

## Styling & Theming

All range slider styles use Tailwind CSS and support dark mode automatically.

### Custom Styling

```tsx
// Custom track color (via CSS)
const customSlider = (
  <div class='[&_input[type=range]]:bg-purple-200 dark:[&_input[type=range]]:bg-purple-900'>
    <RangeSlider
      label='Custom styled'
      value={50}
    />
  </div>
);
```

### Dark Mode

```tsx
// Dark mode support is automatic
const darkModeSlider = (
  <RangeSlider
    label='Volume'
    value={75}
    showValue={true}
    // Automatically uses dark:bg-gray-700, dark:text-gray-300, etc.
  />
);
```

## TypeScript

Full TypeScript support with complete type definitions.

```tsx
import type { RangeSliderProps } from '@odyssee-software/components';
import { Pulse } from '@odyssee-software/components';

// Type-safe props
const props: RangeSliderProps = {
  label: 'Volume',
  value: 50,
  min: 0,
  max: 100,
  step: 1,
  showValue: true,
  valueFormat: (val: number): string => `${val}%`,
  onChange: (value: number): void => {
    console.log(value);
  }
};

const slider = <RangeSlider {...props} />;

// Type-safe with signals
const volume = Pulse.signal<number>(75);
const typedSlider = (
  <RangeSlider
    label='Volume'
    value={volume}
    onChange={(val: number) => volume(val)}
  />
);
```

## Related Components

- [Input](/components/input) - Text input for manual value entry
- [Progress](/components/progress) - Display progress bars
- [Toggle](/components/toggle) - Binary on/off switch
- [ColorPicker](/components/color-picker) - Color selection

---

**Version**: 1.0.0  
**Last Updated**: January 2025
