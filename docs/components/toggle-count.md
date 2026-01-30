# ToggleCount

## Introduction

The `ToggleCount` component is a versatile toggle switch designed for scenarios where users need to switch between two options—most commonly used for pricing toggles (e.g., monthly/annual billing) or plan selectors. It supports both radio and switch styles, animated value transitions, and multiple visual variants. The companion `ToggleCount.Value` component displays a value that animates smoothly when the toggle changes, making it ideal for pricing displays, statistics, and dashboards.

## Import

```ts
import { ToggleCount } from '@odyssee/components';
// ToggleCount.Value is available as a static property
```

## LiveCodeEditor examples

### Basic Radio Toggle with Animated Value

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <>
      <ToggleCount
        id='basic-pricing'
        type='radio'
        options={['Monthly', 'Annual']}
        defaultValue={0}
      />
      <div style={{ marginTop: 16, textAlign: 'center', fontSize: 32, fontWeight: 'bold' }}>
        <ToggleCount.Value
          target='basic-pricing'
          min={19}
          max={29}
          prefix='$'
          suffix='/mo'
        />
      </div>
    </>
  );
}`" />

### Switch Toggle

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <>
      <ToggleCount
        id='switch-pricing'
        type='switch'
        options={['Monthly', 'Annual']}
        defaultValue={0}
      />
      <div style={{ marginTop: 16, textAlign: 'center', fontSize: 32, fontWeight: 'bold' }}>
        <ToggleCount.Value
          target='switch-pricing'
          min={99}
          max={149}
          prefix='$'
        />
      </div>
    </>
  );
}`" />

### Pills Variant (Radio)

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <>
      <ToggleCount
        id='radio-pills'
        type='radio'
        variant='pills'
        options={['Basic', 'Pro']}
        defaultValue={0}
      />
      <div style={{ marginTop: 16, textAlign: 'center', fontSize: 28, fontWeight: 'bold' }}>
        <ToggleCount.Value
          target='radio-pills'
          min={9}
          max={29}
          prefix='$'
          suffix='/mo'
        />
      </div>
    </>
  );
}`" />

### Value Formatting (Decimals, Custom Formatter)

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <>
      <ToggleCount
        id='format-decimals'
        type='radio'
        variant='pills'
        options={['Monthly', 'Annual']}
        defaultValue={0}
      />
      <div style={{ marginTop: 16, textAlign: 'center', fontSize: 28, fontWeight: 'bold' }}>
        <ToggleCount.Value
          target='format-decimals'
          min={19.99}
          max={15.99}
          decimals={2}
          prefix='$'
          suffix='/mo'
        />
      </div>
      <ToggleCount
        id='format-custom'
        type='radio'
        variant='pills'
        options={['Monthly', 'Annual']}
        defaultValue={0}
      />
      <div style={{ marginTop: 16, textAlign: 'center', fontSize: 28, fontWeight: 'bold' }}>
        <ToggleCount.Value
          target='format-custom'
          min={1900}
          max={2900}
          formatter={value => '€' + (value / 100).toFixed(2)}
        />
      </div>
    </>
  );
}`" />

### Multiple Synced Values

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <>
      <ToggleCount
        id='multi-pricing'
        type='radio'
        variant='pills'
        options={['Monthly', 'Annual']}
        defaultValue={0}
      />
      <div style={{ display: 'flex', gap: 24, marginTop: 16 }}>
        <div>
          <div style={{ fontWeight: 'bold' }}>Starter</div>
          <ToggleCount.Value target='multi-pricing' min={19} max={15} prefix='$' suffix='/mo' />
        </div>
        <div>
          <div style={{ fontWeight: 'bold' }}>Pro</div>
          <ToggleCount.Value target='multi-pricing' min={49} max={39} prefix='$' suffix='/mo' />
        </div>
        <div>
          <div style={{ fontWeight: 'bold' }}>Enterprise</div>
          <ToggleCount.Value target='multi-pricing' min={149} max={119} prefix='$' suffix='/mo' />
        </div>
      </div>
    </>
  );
}`" />

### Controlled Toggle with Signal

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const selectedIndex = Pulse.signal(0);
  return (
    <Container>
      <ToggleCount
        id='controlled-toggle'
        type='radio'
        variant='pills'
        options={['Option A', 'Option B']}
        value={selectedIndex}
        onChange={index => selectedIndex(index)}
      />
      <div style={{ marginTop: 8, fontSize: 14 }}>
        Current selection: {Pulse.computed(() => selectedIndex() === 0 ? 'Option A' : 'Option B')}
      </div>
    </Container>
  );
}`" />

---

## Props

### ToggleCount

| Prop           | Type                                 | Default      | Description                                                                                  |
|----------------|--------------------------------------|--------------|----------------------------------------------------------------------------------------------|
| `id`           | `string`                             | auto-generated | Unique identifier for the toggle group (required for linking with `ToggleCount.Value`).      |
| `type`         | `"radio"` \| `"switch"`              | `"radio"`    | Toggle style: radio buttons or switch.                                                       |
| `variant`      | `"default"` \| `"pills"`             | `"default"`  | Visual variant for radio: default (rectangular) or pills (rounded).                          |
| `options`      | `[string, string]`                   | —            | The two toggle options (must be exactly two).                                                |
| `value`        | `0 \| 1 \| Signal<0 \| 1>`           | —            | Controlled value (index of selected option, or Pulse signal).                                |
| `defaultValue` | `0 \| 1`                             | `0`          | Initial value for uncontrolled usage.                                                        |
| `disabled`     | `boolean`                            | `false`      | Disables the toggle.                                                                         |
| `onChange`     | `(index: number, label: string) => void` | —         | Callback fired when the selection changes.                                                   |
| `className`    | `string`                             | —            | Additional CSS classes for the root element.                                                 |
| ...rest        | `BaseComponentProps`                 | —            | Any other base props supported by Odyssee components.                                        |

### ToggleCount.Value

| Prop         | Type                                   | Default   | Description                                                                                  |
|--------------|----------------------------------------|-----------|----------------------------------------------------------------------------------------------|
| `target`     | `string`                               | —         | The `id` of the associated `ToggleCount` component.                                          |
| `min`        | `number`                               | —         | Value to display when the first option is selected.                                          |
| `max`        | `number`                               | —         | Value to display when the second option is selected.                                         |
| `duration`   | `number`                               | `300`     | Animation duration in milliseconds.                                                          |
| `prefix`     | `string`                               | `""`      | String to display before the value.                                                          |
| `suffix`     | `string`                               | `""`      | String to display after the value.                                                           |
| `decimals`   | `number`                               | `0`       | Number of decimal places to display.                                                         |
| `formatter`  | `(value: number) => string`            | —         | Custom formatting function for the value.                                                    |
| `className`  | `string`                               | —         | Additional CSS classes for the value element.                                                |
| ...rest      | `BaseComponentProps`                   | —         | Any other base props supported by Odyssee components.                                        |

## Implementation notes

- `ToggleCount` manages its state internally with Pulse signals, but can also be fully controlled via the `value` prop.
- The component registers itself in a global registry by `id` so that any number of `ToggleCount.Value` components can sync to the same toggle.
- Supports both radio (default and pills) and switch styles for maximum flexibility.
- `ToggleCount.Value` animates the value change using a smooth cubic ease-out transition.
- Supports custom formatting, decimals, and prefix/suffix for currency or unit display.
- The registry is cleaned up automatically on unmount.
- Designed for both light and dark themes.

## Accessibility

- All toggle options are rendered as native radio inputs or switches for proper accessibility.
- Each option is associated with a label for screen readers.
- The toggle group is keyboard navigable (Tab, Arrow keys, Space/Enter).
- Disabled state is properly announced and prevents interaction.
- The `id` prop ensures correct association between toggle and value displays.

## Best practices

- Always provide a unique `id` for each `ToggleCount` group, especially when using multiple toggles on the same page.
- Use the `variant="pills"` for a more modern, rounded look on radio toggles.
- For pricing, use `prefix` and `suffix` to clearly indicate currency and billing period.
- Use the controlled mode (`value` + `onChange`) when you need to synchronize the toggle state with other parts of your app.
- Use `ToggleCount.Value` for any animated value display that should react to the toggle.
- Prefer exactly two options; the component is not designed for more.

## Related links

- [Toggle](./toggle.md)
- [Radio](./radio.md)
- [Pulse Framework documentation](https://github.com/odyssee-software/pulse-framework)
- [Odyssee Components documentation](../README.md)
