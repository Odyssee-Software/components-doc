# Image

A versatile image component with responsive features, lazy loading, aspect ratios, object fit, rounded corners, overlays, zoom, and more. Includes several helper subcomponents for advanced use cases.

---

## Import

```ts
import { Image } from '@odyssee/components';
// Helpers (optional)
import { ImageZoom, ImageOverlay, BackgroundImage, AvatarImage } from '@odyssee/components';
```

---

## Basic Usage

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Image
      src='https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400'
      alt='Sample image'
      width='96'
    />
  );
}
`" />

---

## Object Fit

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <div style={{ width: 160, height: 192, background: '#f3f4f6', borderRadius: 8, overflow: 'hidden' }}>
        <Image
          src='https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400'
          alt='Cover'
          objectFit='cover'
          className='w-full h-full'
        />
      </div>
      <div style={{ width: 160, height: 192, background: '#f3f4f6', borderRadius: 8, overflow: 'hidden' }}>
        <Image
          src='https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400'
          alt='Contain'
          objectFit='contain'
          className='w-full h-full'
        />
      </div>
      <div style={{ width: 160, height: 192, background: '#f3f4f6', borderRadius: 8, overflow: 'hidden' }}>
        <Image
          src='https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400'
          alt='Fill'
          objectFit='fill'
          className='w-full h-full'
        />
      </div>
    </div>
  );
}
`" />

---

## Rounded Corners

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <Image
        src='https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=200'
        alt='None'
        rounded='none'
        width='80'
      />
      <Image
        src='https://images.unsplash.com/photo-1682687220199-d0124f48f95b?w=200'
        alt='Small'
        rounded='sm'
        width='80'
      />
      <Image
        src='https://images.unsplash.com/photo-1682687221038-404cb8830901?w=200'
        alt='Large'
        rounded='lg'
        width='80'
      />
      <Image
        src='https://images.unsplash.com/photo-1682687221080-5cb261c645cb?w=200&h=200&fit=crop'
        alt='Full'
        rounded='full'
        width='40'
        height='40'
        className='mx-auto'
      />
    </div>
  );
}
`" />

---

## Aspect Ratios

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <Image
        src='https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=300'
        alt='Square'
        aspectRatio='square'
        objectFit='cover'
        rounded='lg'
        width='80'
      />
      <Image
        src='https://images.unsplash.com/photo-1682687220199-d0124f48f95b?w=300'
        alt='Video'
        aspectRatio='video'
        objectFit='cover'
        rounded='lg'
        width='120'
      />
      <Image
        src='https://images.unsplash.com/photo-1682687221038-404cb8830901?w=300'
        alt='4/3'
        aspectRatio='4/3'
        objectFit='cover'
        rounded='lg'
        width='120'
      />
    </div>
  );
}
`" />

---

## Lazy Loading

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Image
      src='https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400'
      alt='Lazy loaded'
      loading='lazy'
      width='96'
    />
  );
}
`" />

---

## Image with Zoom on Hover

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <ImageZoom
      src='https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400'
      alt='Zoom'
      width='96'
      zoomScale={110}
      duration={400}
    />
  );
}
`" />

---

## Image with Overlay Content

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Image.Overlay
      src='https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400'
      alt='Overlay'
      overlayPosition='bottom'
      rounded='xl'
    >
      <h3 style={{ color: '#fff', margin: 0 }}>Overlay Title</h3>
      <p style={{ color: '#fff', margin: 0 }}>Overlay content</p>
    </Image.Overlay>
  );
}
`" />

---

## Background Image

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Image.Background
      src='https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800'
      size='cover'
      position='center'
      minHeight='200px'
      rounded='lg'
    >
      <div style={{ color: '#fff', padding: 24 }}>
        <h2>Background Image</h2>
        <p>Content over a background image</p>
      </div>
    </Image.Background>
  );
}
`" />

---

## Avatar Image

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Image.Avatar
      src='https://images.unsplash.com/photo-1682687221080-5cb261c645cb?w=200&h=200&fit=crop'
      alt='Avatar'
      size='lg'
    />
  );
}
`" />

---

## Props

| Name           | Type                                                                 | Default   | Description                                                      |
|----------------|----------------------------------------------------------------------|-----------|------------------------------------------------------------------|
| src            | string                                                               | —         | Image source URL (required)                                      |
| alt            | string                                                               | —         | Alt text for accessibility (required)                            |
| width          | string \| number                                                     | —         | Image width (e.g. '96', 'full', 'auto')                          |
| height         | string \| number                                                     | —         | Image height (e.g. '96', 'full', 'auto')                         |
| objectFit      | 'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'             | —         | Object fit behavior                                              |
| objectPosition | 'center' \| 'top' \| 'right' \| 'bottom' \| 'left' ...               | —         | Object position                                                  |
| rounded        | 'none' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| 'full'   | 'none'    | Border radius                                                    |
| loading        | 'eager' \| 'lazy'                                                    | 'lazy'    | Loading strategy                                                 |
| display        | 'block' \| 'inline' \| 'inline-block'                                | 'block'   | Display type                                                     |
| aspectRatio    | 'square' \| 'video' \| '4/3' \| '16/9' \| '21/9' \| 'auto'           | —         | Aspect ratio                                                     |
| onLoad         | () => void                                                           | —         | Callback on image load                                           |
| onError        | () => void                                                           | —         | Callback on image error                                          |
| fallbackSrc    | string                                                               | —         | Fallback image source on error                                   |
| className      | string                                                               | —         | Additional CSS classes                                           |
| id             | string                                                               | auto      | DOM id (auto-generated if not provided)                          |
| style          | string                                                               | —         | Inline styles                                                    |
| ...rest        | any                                                                  | —         | Other props are spread to the root `<img>`                       |

### ImageZoom Props

All `Image` props, plus:

| Name      | Type     | Default | Description                       |
|-----------|----------|---------|-----------------------------------|
| zoomScale | number   | 105     | Zoom scale on hover (percent)     |
| duration  | number   | 500     | Transition duration in ms         |

### ImageOverlay Props

All `Image` props (except `children`), plus:

| Name            | Type                                              | Default   | Description                                 |
|-----------------|---------------------------------------------------|-----------|---------------------------------------------|
| children        | Pulse.JSX.Element \| ... \| string                | —         | Overlay content                             |
| overlayPosition | 'top' \| 'bottom' \| 'center' \| 'full'           | 'bottom'  | Overlay position                            |
| hoverShadow     | boolean                                           | true      | Enable hover shadow                         |
| href            | string                                            | —         | Link URL (renders as `<a>` if provided)       |

### BackgroundImage Props

| Name        | Type                                              | Default   | Description                                 |
|-------------|---------------------------------------------------|-----------|---------------------------------------------|
| src         | string                                            | —         | Background image URL                        |
| size        | 'auto' \| 'cover' \| 'contain'                    | 'cover'   | Background size                             |
| position    | 'center' \| 'top' \| 'right' ...                  | 'center'  | Background position                         |
| repeat      | 'repeat' \| 'no-repeat' \| 'repeat-x' \| 'repeat-y'| 'no-repeat'| Background repeat                           |
| attachment  | 'fixed' \| 'local' \| 'scroll'                    | 'scroll'  | Background attachment                       |
| children    | Pulse.JSX.Element \| ... \| string                | —         | Content to overlay                          |
| minHeight   | string                                            | 'min-h-60'| Minimum height                              |
| rounded     | 'none' \| 'sm' \| 'md' \| 'lg' ...                | 'none'    | Border radius                               |
| className   | string                                            | —         | Additional CSS classes                      |
| id          | string                                            | —         | DOM id                                      |
| style       | string                                            | —         | Inline styles                               |

### AvatarImage Props

All `Image` props (except `rounded`), plus:

| Name | Type | Default | Description         |
|------|------|---------|---------------------|
| size | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' | 'md' | Avatar size (applies width/height) |

---

## Accessibility

- Always provide a meaningful `alt` attribute for images.
- Uses semantic `<img>` or `<div>` containers.
- Overlay and background images should ensure sufficient color contrast for text.
- Avoid using images as the only means of conveying important information.

---

## Best Practices

- Use `objectFit` and `aspectRatio` for responsive, consistent layouts.
- Prefer `loading='lazy'` for images below the fold.
- Use `ImageOverlay` for captions or actions over images.
- Use `AvatarImage` for user profile pictures.
- Test images for accessibility (alt text, contrast, keyboard focus for overlays).
- Use `fallbackSrc` for robust error handling.

---

## Subcomponents & Helpers

- **ImageZoom**: Image with zoom effect on hover.
- **ImageOverlay**: Image with overlay content and optional link.
- **BackgroundImage**: Div with background image and overlay content.
- **AvatarImage**: Circular image for avatars.

---

<!--
This documentation is based strictly on the Image component source and its playground examples.
If any prop or behavior is unclear, please clarify in the implementation.
-->
