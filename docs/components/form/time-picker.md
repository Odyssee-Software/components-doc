# TimePicker

## Introduction

The `TimePicker` component provides a user-friendly interface for selecting a time value, supporting both 12-hour (AM/PM) and 24-hour formats. It features a dropdown for hour and minute selection, customizable minute steps, optional "Now" button, and full integration with reactive signals for controlled usage. The component is suitable for use cases such as appointment booking, alarm setting, scheduling, and more.

## Import

```ts
import { TimePicker } from '@odyssee/components';
```

## LiveCodeEditor examples

### Basic 24-hour and 12-hour TimePicker

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <TimePicker label='Select time (24h)' format='24h' />
      <TimePicker label='Select time (12h)' format='12h' />
    </Container>
  );
}`" />

### Controlled value with signal

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const time = Pulse.signal('14:30');
  return (
    <Container>
      <TimePicker
        label='Meeting time'
        value={time}
        format='24h'
        onChange={val => time(val)}
      />
      <div style={{ marginTop: 8, fontSize: 12, color: '#888' }}>
        Selected: {Pulse.computed(() => time() || 'None')}
      </div>
    </Container>
  );
}`" />

### Different minute steps

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <TimePicker label='1 min step' minuteStep={1} format='24h' />
      <TimePicker label='5 min step' minuteStep={5} format='24h' />
      <TimePicker label='15 min step' minuteStep={15} format='12h' />
      <TimePicker label='30 min step' minuteStep={30} format='24h' />
    </Container>
  );
}`" />

### Sizes

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <TimePicker label='XS' size='xs' format='24h' />
      <TimePicker label='SM' size='sm' format='24h' />
      <TimePicker label='MD' size='md' format='24h' />
      <TimePicker label='LG' size='lg' format='24h' />
      <TimePicker label='XL' size='xl' format='24h' />
    </Container>
  );
}`" />

### Now button and states

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <TimePicker label='With Now button' showNowButton={true} format='24h' />
      <TimePicker label='Without Now button' showNowButton={false} format='24h' />
      <TimePicker label='Disabled' value='09:00' disabled={true} format='24h' />
      <TimePicker label='Required' required={true} format='24h' />
      <TimePicker label='With error' error='Please select a valid time' format='24h' />
      <TimePicker label='With hint' hint='Select your preferred time' format='12h' />
    </Container>
  );
}`" />

### Appointment booking use case

<LiveCodeEditor :defaultCode="`export default function Demo() {
  const appointmentTime = Pulse.signal('');
  const Appointment = () => (
    <div style={{
      marginTop: 8,
      background: '#e6ffed',
      color: '#237804',
      padding: 8,
      borderRadius: 4,
      fontSize: 13
    }}>
      ✓ Appointment scheduled for {appointmentTime()}
    </div>
  );
  return (
    <Container>
      <TimePicker
        label='Appointment Time'
        value={appointmentTime}
        format='12h'
        minuteStep={15}
        hint='Select a time slot'
        required={true}
        onChange={val => appointmentTime(val)}
      />
      {Pulse.computed(() => (
        appointmentTime() 
        ? (<Appointment/>)
        : (<></>)
      ))}
    </Container>
  );
}`" />

---

## Props

| Prop           | Type                                 | Default      | Description                                                                                  |
|----------------|--------------------------------------|--------------|----------------------------------------------------------------------------------------------|
| `value`        | `string` \| `Signal<string>`         | —            | The current time value (controlled or signal).                                               |
| `format`       | `"12h"` \| `"24h"`                   | `"24h"`      | Time format: 12-hour (`"12h"`) or 24-hour (`"24h"`).                                         |
| `label`        | `string`                             | —            | Optional label displayed above the input.                                                    |
| `hint`         | `string`                             | —            | Optional hint text displayed below the input.                                                |
| `error`        | `string`                             | —            | Error message displayed below the input.                                                     |
| `placeholder`  | `string`                             | `"HH:mm"` or `"hh:mm aa"` | Placeholder text for the input, auto-set based on format if not provided.      |
| `disabled`     | `boolean`                            | `false`      | Disables the input and dropdown if true.                                                     |
| `required`     | `boolean`                            | `false`      | Marks the field as required.                                                                 |
| `size`         | `"xs"` \| `"sm"` \| `"md"` \| `"lg"` \| `"xl"` | `"md"` | Size of the input and dropdown.                                                              |
| `minuteStep`   | `number`                             | `1`          | Step between selectable minutes (e.g., 1, 5, 15, 30).                                        |
| `showNowButton`| `boolean`                            | `true`       | Whether to show the "Now" button in the dropdown footer.                                     |
| `onChange`     | `(value: string) => void`            | —            | Callback fired when the time value changes.                                                  |
| `name`         | `string`                             | —            | Name attribute for the input (for forms).                                                    |
| `className`    | `string`                             | —            | Additional CSS classes for the root element.                                                 |
| `id`           | `string`                             | auto-generated | ID for the input element.                                                                  |
| ...rest        | `BaseComponentProps`                 | —            | Any other base props supported by Odyssee components.                                        |

## Implementation notes

- The component uses Pulse signals for internal state and supports both controlled (`value` as signal) and uncontrolled usage.
- Time can be selected via dropdowns for hours, minutes, and (if 12h) AM/PM.
- The `minuteStep` prop controls the granularity of selectable minutes.
- The "Now" button sets the picker to the current system time, rounded to the nearest `minuteStep`.
- The dropdown closes when the "OK" button is pressed.
- The input is always read-only; users must use the dropdown to select a time.
- The component auto-generates an `id` if not provided.
- The `TimePickerRadioItem` helper is used internally for hour/minute/period selection.
- The component is styled for both light and dark themes.

## Accessibility

- The input is associated with its label via `for`/`id`.
- The dropdown trigger uses `aria-haspopup="menu"` and `aria-expanded`.
- Keyboard navigation is supported for opening/closing the dropdown and selecting values.
- The input is read-only to prevent manual entry errors.
- Error and hint messages are announced for screen readers.
- The component supports required and disabled states with proper ARIA attributes.

## Best practices

- Use a `minuteStep` that matches your use case (e.g., 5 or 15 for appointments, 1 for alarms).
- For controlled usage, use a Pulse signal and update it via `onChange`.
- Always provide a `label` for accessibility and clarity.
- Use the `error` prop for validation feedback.
- Use the `hint` prop to guide users on expected input or available slots.
- Prefer 24h format for international audiences; use 12h for locales where AM/PM is standard.
- Disable the picker when the time should not be changed (e.g., read-only schedules).

## Related links

- [Input](./input.md)
- [DatePicker](./date-picker.md)
- [Pulse Framework documentation](https://github.com/odyssee-software/pulse-framework)
- [Odyssee Components documentation](../README.md)
