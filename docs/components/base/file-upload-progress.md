# FileUploadProgress

A flexible and feature-rich component for displaying file upload progress, supporting both single and multiple files, with pause/resume/delete actions, progress indicators, error/completed states, and card or inline display variants. Ideal for file upload UIs, dashboards, and admin panels.

---

## Import

```tsx
import { FileUploadProgress } from '@odyssee/components';
```

---

## Examples

### Single File Upload

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const progress = Pulse.signal(45);
  const status = Pulse.signal<'uploading' | 'completed' | 'error' | 'paused'>('uploading');
  return (
    <Container>
      <FileUploadProgress
        file={{
          id: 'file-1',
          name: 'annual-report.xlsx',
          size: '4.2 MB',
          progress,
          status: status,
        }}
        showPercentage={true}
        showActions={true}
      />
    </Container>
  );
}`" />

---

### Multiple Files (Inline Variant)

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const files = [
    { id: '1', name: 'document.pdf', size: '2.5 MB', progress: 100, status: 'completed' },
    { id: '2', name: 'presentation.pptx', size: '8.3 MB', progress: 65, status: 'uploading' },
    { id: '3', name: 'image.jpg', size: '1.2 MB', progress: 100, status: 'completed' },
    { id: '4', name: 'video.mp4', size: '105.5 MB', progress: 25, status: 'uploading' },
    { id: '5', name: 'corrupted.zip', size: '15 MB', progress: 50, status: 'error' },
  ];
  return (
    <Container>
      <FileUploadProgress
        files={files}
        showPercentage={true}
        showActions={true}
        variant='inline'
      />
    </Container>
  );
}`" />

---

### Multiple Files (Card Variant with Footer Actions)

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const files = [
    { id: '1', name: 'document.pdf', size: '2.5 MB', progress: 100, status: 'completed' },
    { id: '2', name: 'presentation.pptx', size: '8.3 MB', progress: 65, status: 'uploading' },
    { id: '3', name: 'image.jpg', size: '1.2 MB', progress: 100, status: 'completed' },
    { id: '4', name: 'video.mp4', size: '105.5 MB', progress: 25, status: 'paused' },
    { id: '5', name: 'corrupted.zip', size: '15 MB', progress: 50, status: 'error' },
  ];
  return (
    <Container>
      <FileUploadProgress
        files={files}
        variant='card'
        footerText='3 success, 1 failed'
        footerActions={
          <Button onClick={() => alert('Delete all')}>Delete All</Button>
        }
      />
    </Container>
  );
}`" />

---

### File States: Uploading, Completed, Error, Paused

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const files = [
    { id: 'upload', name: 'uploading.mp4', size: '20 MB', progress: 60, status: 'uploading' },
    { id: 'done', name: 'done.pdf', size: '1.1 MB', progress: 100, status: 'completed' },
    { id: 'fail', name: 'fail.zip', size: '5 MB', progress: 35, status: 'error' },
    { id: 'pause', name: 'paused.mov', size: '250 MB', progress: 15, status: 'paused' },
  ];
  return (
    <Container>
      <FileUploadProgress
        files={files}
        variant='inline'
        showPercentage={true}
        showActions={true}
      />
    </Container>
  );
}`" />

---

### Custom File Icon

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const files = [
    {
      id: 'img-1',
      name: 'photo.png',
      size: '2 MB',
      progress: 80,
      status: 'uploading',
      icon: (<svg width={20} height={20} fill='currentColor'><circle cx={10} cy={10} r={8} /></svg>),
    },
  ];
  return (
    <Container>
      <FileUploadProgress files={files} />
    </Container>
  )
}`" />

---

### Pause/Resume/Delete Actions

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const files = Pulse.signal([
    { id: '1', name: 'file1.txt', size: '1 MB', progress: 80, status: 'uploading' },
    { id: '2', name: 'file2.txt', size: '2 MB', progress: 100, status: 'completed' },
  ]);
  return (
    <Container>
      <FileUploadProgress
        files={files()}
        onPause={id => alert('Paused ' + id)}
        onResume={id => alert('Resumed ' + id)}
        onDelete={id => alert('Deleted ' + id)}
        onPauseAll={() => alert('Paused all')}
        onResumeAll={() => alert('Resumed all')}
        onDeleteAll={() => alert('Deleted all')}
      />
    </Container>
  )
}`" />

---

## Props

| Prop             | Type                                                                                                   | Default      | Description                                                                                      |
|------------------|--------------------------------------------------------------------------------------------------------|--------------|--------------------------------------------------------------------------------------------------|
| `file`           | `FileUploadProgress.Item`                                                                              | –            | Single file mode: object describing the file and its progress.                                   |
| `files`          | `FileUploadProgress.Item[]`                                                                            | –            | Multiple files mode: array of file objects.                                                      |
| `showPercentage` | `boolean`                                                                                              | `true`       | Show percentage progress next to the progress bar.                                               |
| `showActions`    | `boolean`                                                                                              | `true`       | Show pause/resume/delete actions for each file.                                                  |
| `variant`        | `"inline"` \| `"card"`                                                                                 | `"inline"`   | Display style: simple list (`inline`) or card with footer (`card`).                              |
| `onPause`        | `(fileId: string) => void`                                                                             | –            | Callback when a file is paused.                                                                  |
| `onResume`       | `(fileId: string) => void`                                                                             | –            | Callback when a file is resumed.                                                                 |
| `onDelete`       | `(fileId: string) => void`                                                                             | –            | Callback when a file is deleted.                                                                 |
| `onPauseAll`     | `() => void`                                                                                           | –            | Callback to pause all files (card variant).                                                      |
| `onResumeAll`    | `() => void`                                                                                           | –            | Callback to resume all files (card variant).                                                     |
| `onDeleteAll`    | `() => void`                                                                                           | –            | Callback to delete all files (card variant).                                                     |
| `footerText`     | `string`                                                                                               | –            | Custom footer text (card variant).                                                               |
| `footerActions`  | `Pulse.JSX.Element \| HTMLElement`                                                                     | –            | Custom footer actions (card variant).                                                            |
| `className`      | `string`                                                                                               | –            | Additional CSS classes.                                                                          |
| `id`             | `string`                                                                                               | auto-generated | HTML id attribute.                                                                             |
| `style`          | `string`                                                                                               | –            | Inline styles.                                                                                   |

### FileUploadProgress.Item

| Field      | Type                                                      | Description                                      |
|------------|-----------------------------------------------------------|--------------------------------------------------|
| `id`       | `string`                                                  | Unique identifier for the file.                  |
| `name`     | `string`                                                  | File name.                                       |
| `size`     | `string` \| `number`                                      | File size (e.g., `"2.5 MB"` or bytes as number). |
| `progress` | `number` \| `Signal<number>`                              | Progress (0-100).                                |
| `status`   | `"uploading"` \| `"completed"` \| `"error"` \| `"paused"` | Current status.                                  |
| `icon`     | `Pulse.JSX.Element` \| `HTMLElement`                      | (Optional) Custom file icon.                     |

---

## Implementation Notes

- **Single vs. Multiple:** Use `file` for single file mode, or `files` for multiple files. Only one of these should be provided at a time.
- **Variants:**  
  - `inline`: simple stacked list of files.
  - `card`: files are wrapped in a card with a footer (showing summary and actions).
- **Actions:**  
  - `onPause`, `onResume`, `onDelete` are called with the file id.
  - `onPauseAll`, `onResumeAll`, `onDeleteAll` are available in card variant for batch actions.
- **Progress:**  
  - Accepts both numbers and Pulse signals for progress.
  - Shows a progress bar and optionally a percentage.
- **Status:**  
  - `"uploading"`: animated progress bar, pause action available.
  - `"paused"`: progress bar with resume action.
  - `"completed"`: full bar, no actions.
  - `"error"`: error color, delete action available.
- **Custom Icons:**  
  - Provide a custom SVG or element via the `icon` prop in each file item.
- **Footer:**  
  - In card variant, you can customize the footer text and actions.

---

## Accessibility

- Each file row uses semantic markup and ARIA roles for progress.
- Progress bars use `aria-valuenow`, `aria-valuemin`, and `aria-valuemax`.
- Action buttons are keyboard accessible and have descriptive labels.
- Error and completed states use color and icon cues; ensure sufficient contrast.
- The component is fully navigable by keyboard.

---

## Best Practices

- Use Pulse signals for progress and status to enable real-time updates.
- For batch uploads, prefer the `card` variant for better UX and summary.
- Always provide unique `id` values for each file.
- Use `showActions={false}` if you want a read-only progress display.
- Provide custom icons for better file type recognition.
- Handle error and pause states in your upload logic and reflect them in the UI.

---

## Related

- [Pulse Framework](https://github.com/odyssee-software/pulse-framework)
- [ARIA Progressbar](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role)

---
