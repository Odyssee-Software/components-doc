# DatePicker

A flexible and advanced date picker component supporting single, range, and multiple date selection, with optional time picking, custom formatting, and full reactivity via Pulse signals. Built on top of Preline's Advanced Datepicker and Vanilla Calendar Pro.

---

## Import

```tsx
import { DatePicker } from '@odyssee/components';
```

---

## Examples

### Basic Single Date Picker

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const selectedDate = Pulse.signal<Date | null>(new Date());
  return (
    <DatePicker
      mode='single'
      value={selectedDate}
      onChange={date => selectedDate(date)}
      placeholder='Select date'
    />
  );
}`" />

---

### Date Range Picker

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const rangeStart = Pulse.signal<Date | null>(new Date());
  const rangeEnd = Pulse.signal<Date | null>(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000));
  return (<DatePicker
    mode='range'
    rangeStart={rangeStart}
    rangeEnd={rangeEnd}
    displayMonths={2}
    placeholder='Select date range'
    onRangeChange={(start, end) => {
      rangeStart(start);
      rangeEnd(end);
    }}
  />);
}`" />

---

### With Time Picker

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const eventDate = Pulse.signal<Date | null>(null);
  return (<DatePicker
    mode='single'
    value={eventDate}
    showTime={true}
    timeFormat='24h'
    placeholder='Select date and time'
    onChange={date => eventDate(date)}
  />);
}`" />

---

### Multiple Dates Selection

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const selectedDates = Pulse.signal<[]>([]);
  return (
    <DatePicker
      mode='multiple'
      placeholder='Select multiple dates'
      onMultipleChange={dates => selectedDates(dates)}
    />
  );
}`" />

---

### With Date Constraints

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const checkIn = Pulse.signal<Date | null>(null);
  const checkOut = Pulse.signal<Date | null>(null);
  return (
    <DatePicker
      mode='range'
      rangeStart={checkIn}
      rangeEnd={checkOut}
      minDate={new Date()}
      maxDate={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)}
      displayMonths={2}
      placeholder='Select booking dates'
      onRangeChange={(start, end) => {
        checkIn(start);
        checkOut(end);
      }}
    />
  );
}`" />

---

### Custom Date Format

<LiveCodeEditor :defaultCode="`<DatePicker
  mode='single'
  placeholder='Select date'
  dateFormat='D MMMM YYYY, dddd'
  onChange={date => console.log(date)}
/>
`" />

---

### Light Theme Only

<LiveCodeEditor :defaultCode="`<DatePicker
  mode='single'
  placeholder='Select date'
  theme='light'
  onChange={date => console.log(date)}
/>
`" />

---

### Range Selection with Time

<LiveCodeEditor :defaultCode="`<DatePicker
  mode='range'
  placeholder='Select date range with time'
  showTime={true}
  timeFormat='12h'
  displayMonths={2}
  onRangeChange={(start, end) => console.log(start, end)}
/>
`" />

---

## Props

| Prop              | Type                                                                 | Default      | Description                                                                                   |
|-------------------|----------------------------------------------------------------------|--------------|-----------------------------------------------------------------------------------------------|
| `id`              | `string`                                                             | –            | Input element id.                                                                             |
| `mode`            | `"single" \| "multiple" \| "range"`                                  | `"single"`   | Selection mode: single date, multiple dates, or date range.                                   |
| `value`           | `Date \| Signal<Date \| null> \| null`                               | –            | Selected date (single mode). Supports Pulse signals.                                          |
| `rangeStart`      | `Date \| Signal<Date \| null> \| null`                               | –            | Start date for range mode. Supports Pulse signals.                                            |
| `rangeEnd`        | `Date \| Signal<Date \| null> \| null`                               | –            | End date for range mode. Supports Pulse signals.                                              |
| `placeholder`     | `string`                                                             | `"Select date"` | Placeholder text.                                                                         |
| `minDate`         | `Date`                                                               | –            | Minimum selectable date.                                                                      |
| `maxDate`         | `Date`                                                               | –            | Maximum selectable date.                                                                      |
| `showTime`        | `boolean`                                                            | `false`      | Show time picker.                                                                             |
| `timeFormat`      | `"12h" \| "24h"`                                                     | `"24h"`      | Time format for time picker.                                                                  |
| `displayMonths`   | `1 \| 2`                                                             | `1` or `2`*  | Number of months displayed (2 for range mode by default).                                     |
| `dateFormat`      | `string`                                                             | –            | Custom date format string (e.g., `"D MMMM YYYY, dddd"`).                                      |
| `onChange`        | `(date: Date \| null) => void`                                       | –            | Callback when date changes (single mode).                                                     |
| `onRangeChange`   | `(start: Date \| null, end: Date \| null) => void`                   | –            | Callback when range changes (range mode).                                                     |
| `onMultipleChange`| `(dates: Date[]) => void`                                            | –            | Callback when multiple dates change (multiple mode).                                          |
| `className`       | `string`                                                             | –            | Additional CSS classes.                                                                       |
| `style`           | `string`                                                             | –            | Inline styles.                                                                                |
| `disabled`        | `boolean`                                                            | `false`      | Disabled state.                                                                               |
| `readonly`        | `boolean`                                                            | `true`       | Readonly state.                                                                               |
| `theme`           | `"light" \| "dark" \| "auto"`                                        | `"auto"`     | Theme override.                                                                               |

\* `displayMonths` defaults to `2` if `mode="range"`, otherwise `1`.

---

## Implementation Notes

- **Dependencies:**  
  Requires installation of:
  ```
  npm install vanilla-calendar-pro lodash @preline/datepicker
  ```
- **Reactivity:**  
  Fully reactive with Pulse signals for all date values.
- **Modes:**  
  - `single`: select one date.
  - `range`: select a start and end date (shows two months by default).
  - `multiple`: select multiple individual dates.
- **Time Picker:**  
  Enable with `showTime={true}` and choose `timeFormat` (`12h` or `24h`).
- **Formatting:**  
  Use `dateFormat` for custom display (see [Vanilla Calendar Pro docs](https://vanilla-calendar.pro/docs/format)).
- **Theme:**  
  Supports `"light"`, `"dark"`, or `"auto"` (follows system).

---

## Accessibility

- The input is a native `<input type="text">` with ARIA-friendly attributes.
- Keyboard navigation is supported by Vanilla Calendar Pro.
- Use `placeholder` to provide context for screen readers.
- Ensure color contrast is sufficient for custom themes.

---

## Best Practices

- Use Pulse signals for all controlled values to ensure reactivity.
- For range selection, always provide both `rangeStart` and `rangeEnd` as signals.
- Use `minDate` and `maxDate` to restrict selectable dates for booking or event scenarios.
- Prefer `readonly={true}` (default) to prevent manual text editing and ensure calendar UI is used.
- For accessibility, always provide a descriptive `placeholder` and `id` if the field is labeled.
- Test with both light and dark themes to ensure visual consistency.

---

## Related

- [Vanilla Calendar Pro documentation](https://vanilla-calendar.pro/docs/)
- [Preline Datepicker](https://preline.co/docs/datepicker.html)
- [Pulse Framework](https://github.com/odyssee-software/pulse-framework)

---
