---
title: FileInput
description: A file upload component with validation, multiple variants, and size limits
---

# FileInput

Upload files with a polished interface supporting drag-and-drop, validation, multiple files, and custom styling. Perfect for forms, profile uploads, and document management. Built for Pulse Framework with full reactivity support.

## Import

```ts
import { FileInput } from '@odyssee-software/components';
```

## Basic Usage

<LiveCodeEditor :defaultCode="`<FileInput
  label='Upload file'
  onChange={(files) => console.log(files)}
/>`" />

## With Accept Filter

Restrict file types using the accept attribute.

<LiveCodeEditor :defaultCode="`<div class='space-y-4'>
  <FileInput
    label='Upload image'
    accept='image/*'
    hint='PNG, JPG, GIF up to 10MB'
  />
  <FileInput
    label='Upload document'
    accept='.pdf,.doc,.docx'
    hint='PDF or Word documents only'
  />
  <FileInput
    label='Upload video'
    accept='video/*'
    hint='MP4, MOV, AVI files'
  />
</div>`" />

## Multiple Files

<LiveCodeEditor :defaultCode="`<FileInput
  label='Upload documents'
  multiple={true}
  accept='.pdf,.doc,.docx'
  hint='You can select multiple files'
/>`" />

## Button Variant

Alternative button-style file input.

<LiveCodeEditor :defaultCode="`<div class='space-y-4'>
  <FileInput
    label='Choose profile photo'
    buttonText='Browse'
    variant='button'
    accept='image/*'
  />
  <FileInput
    label='Upload resume'
    buttonText='Select File'
    variant='button'
    accept='.pdf'
  />
</div>`" />

## Sizes

Available sizes: `xs`, `sm`, `md`, `lg`, `xl`.

<LiveCodeEditor :defaultCode="`<div class='space-y-4'>
  <FileInput label='Extra Small' size='xs' />
  <FileInput label='Small' size='sm' />
  <FileInput label='Medium (default)' size='md' />
  <FileInput label='Large' size='lg' />
  <FileInput label='Extra Large' size='xl' />
</div>`" />

## With Validation

<LiveCodeEditor :defaultCode="`<div class='space-y-4'>
  <FileInput
    label='Required file'
    required={true}
    hint='This field is required'
  />
  <FileInput
    label='Invalid upload'
    error='File size exceeds 5MB limit'
  />
</div>`" />

## Disabled State

<LiveCodeEditor :defaultCode="`<FileInput
  label='Disabled upload'
  disabled={true}
  hint='File upload is currently disabled'
/>`" />

## Reactive File Upload

Handle file uploads with Pulse signals.

```tsx
import { FileInput, Button, Progress, Pulse } from '@odyssee-software/components';

const FileUploader = () => {
  const selectedFiles = Pulse.signal<FileList | null>(null);
  const uploadProgress = Pulse.signal(0);
  const isUploading = Pulse.signal(false);
  const uploadError = Pulse.signal('');

  const fileNames = Pulse.computed(() => {
    const files = selectedFiles();
    if (!files || files.length === 0) return 'No files selected';
    if (files.length === 1) return files[0].name;
    return `${files.length} files selected`;
  });

  const totalSize = Pulse.computed(() => {
    const files = selectedFiles();
    if (!files) return 0;
    return Array.from(files).reduce((acc, file) => acc + file.size, 0);
  });

  const handleFileChange = (files: FileList) => {
    selectedFiles(files);
    uploadError('');
  };

  const uploadFiles = async () => {
    const files = selectedFiles();
    if (!files) return;

    isUploading(true);
    uploadProgress(0);
    uploadError('');

    try {
      // Simulate upload
      for (let i = 0; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 200));
        uploadProgress(i);
      }
      
      alert('Files uploaded successfully!');
      selectedFiles(null);
    } catch (err) {
      uploadError('Upload failed. Please try again.');
    } finally {
      isUploading(false);
      uploadProgress(0);
    }
  };

  return (
    <div class='space-y-4'>
      <FileInput
        label='Select files to upload'
        multiple={true}
        onChange={handleFileChange}
        error={uploadError()}
        disabled={isUploading()}
      />

      {selectedFiles() && (
        <div class='p-4 bg-gray-50 rounded-lg dark:bg-neutral-800'>
          <p class='text-sm font-medium text-gray-900 dark:text-white'>
            {fileNames()}
          </p>
          <p class='text-xs text-gray-600 dark:text-gray-400'>
            Total size: {(totalSize() / 1024 / 1024).toFixed(2)} MB
          </p>
        </div>
      )}

      {isUploading() && (
        <Progress
          value={uploadProgress}
          showValue={true}
          label='Uploading...'
        />
      )}

      <Button
        onClick={uploadFiles}
        disabled={!selectedFiles() || isUploading()}
        loading={isUploading()}
        color='primary'
      >
        Upload Files
      </Button>
    </div>
  );
};
```



## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Input label text |
| `hint` | `string` | - | Helper text below input |
| `error` | `string` | - | Error message |
| `accept` | `string` | - | Accepted file types |
| `multiple` | `boolean` | `false` | Allow multiple files |
| `required` | `boolean` | `false` | Mark as required field |
| `disabled` | `boolean` | `false` | Disable input |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | Input size |
| `variant` | `"default" \| "button"` | `"default"` | Visual variant |
| `buttonText` | `string` | `"Choose file"` | Button text (button variant) |
| `placeholder` | `string` | `"No file chosen"` | Placeholder text |
| `maxSize` | `number` | - | Max file size in bytes |
| `onChange` | `(files: FileList) => void` | - | Change callback |
| `name` | `string` | - | Input name attribute |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | Auto-generated | HTML id attribute |

## Accessibility

The FileInput component follows accessibility best practices:

- ✅ Proper label associations with `for` attribute
- ✅ Required field indicators
- ✅ Error messages with semantic colors
- ✅ Keyboard accessible file selection
- ✅ Screen reader friendly hints
- ✅ Disabled state properly communicated

```tsx
// Accessibility features are built-in
const accessibleFileInput = (
  <FileInput
    label='Upload document'
    required={true}
    hint='PDF files only, max 10MB'
    error='File size exceeds limit'
    // All ARIA and semantic HTML handled automatically
  />
);
```

## Best Practices

### ✅ Do

- Specify accepted file types with `accept`
- Provide helpful hints about file requirements
- Validate file size and type
- Show upload progress for large files
- Clear selection after successful upload

```tsx
// Good: Clear requirements and validation
const goodFileInput = (
  <FileInput
    label='Upload resume'
    accept='.pdf,.doc,.docx'
    maxSize={5 * 1024 * 1024}
    hint='PDF or Word document, max 5MB'
    required={true}
    onChange={(files) => {
      // Validate and upload
    }}
  />
);
```

### ❌ Don't

- Don't accept all file types without validation
- Don't forget to validate file size
- Don't hide error messages
- Don't allow uploads without user confirmation
- Don't forget to handle upload failures

```tsx
// Bad: No validation or guidance
const badFileInput = (
  <FileInput
    label='Upload'
    // No accept filter
    // No size limit
    // No hint
  />
);

// Better: With validation
const betterFileInput = (
  <FileInput
    label='Upload image'
    accept='image/*'
    maxSize={10 * 1024 * 1024}
    hint='Images only, max 10MB'
  />
);
```

## Use Cases

### Document Upload

```tsx
const DocumentUpload = () => {
  return (
    <FileInput
      label='Upload documents'
      accept='.pdf,.doc,.docx,.xls,.xlsx'
      multiple={true}
      hint='PDF, Word, or Excel files'
      onChange={(files) => {
        console.log(`${files.length} documents selected`);
      }}
    />
  );
};
```

### Image Gallery

```tsx
const ImageGalleryUpload = () => {
  const images = Pulse.signal<string[]>([]);

  const handleImageUpload = (files: FileList) => {
    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        images([...images(), e.target?.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div class='space-y-4'>
      <FileInput
        label='Add images'
        accept='image/*'
        multiple={true}
        onChange={handleImageUpload}
      />
      <div class='grid grid-cols-4 gap-4'>
        {images().map((src, idx) => (
          <img key={idx} src={src} class='rounded-lg' />
        ))}
      </div>
    </div>
  );
};
```

### CSV Import

```tsx
const CSVImport = () => {
  const handleCSV = (files: FileList) => {
    const file = files[0];
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const text = e.target?.result as string;
      const rows = text.split('\n').map(row => row.split(','));
      console.log('CSV data:', rows);
    };
    
    reader.readAsText(file);
  };

  return (
    <FileInput
      label='Import CSV file'
      accept='.csv'
      buttonText='Choose CSV'
      variant='button'
      onChange={handleCSV}
      hint='Upload a CSV file to import data'
    />
  );
};
```

## Styling & Theming

All file input styles use Tailwind CSS and support dark mode automatically.

### Custom Styling

```tsx
const customFileInput = (
  <FileInput
    label='Custom styled'
    className='border-dashed border-2'
  />
);
```

### Dark Mode

```tsx
// Dark mode support is automatic
const darkModeInput = (
  <FileInput
    label='Upload file'
    // Automatically adapts:
    // - dark:bg-gray-700
    // - dark:border-gray-600
    // - dark:text-gray-100
  />
);
```

## TypeScript

Full TypeScript support with complete type definitions.

```tsx
import type { FileInputProps } from '@odyssee-software/components';

// Type-safe props
const props: FileInputProps = {
  label: 'Upload',
  accept: 'image/*',
  multiple: true,
  maxSize: 5 * 1024 * 1024,
  onChange: (files: FileList) => {
    console.log(files);
  }
};

const input = <FileInput {...props} />;

// Type-safe file handling
const handleFiles = (files: FileList): void => {
  Array.from(files).forEach((file: File) => {
    console.log(file.name, file.size, file.type);
  });
};
```

## Related Components

- [Input](/components/input) - Text input component
- [Button](/components/button) - Button for custom file selection
- [Progress](/components/progress) - Upload progress indicator
- [Avatar](/components/avatar) - Profile photo display

---

**Version**: 1.0.0  
**Last Updated**: January 2025
