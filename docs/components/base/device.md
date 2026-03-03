# Device

A versatile component for displaying device mockups (mobile or browser) with screenshots or custom content. Useful for showcasing apps, landing pages, portfolios, and responsive previews. Supports dark mode, alignment, custom sizing, and both image and custom children content.

---

## Import

```tsx
import { Device, MobileDevice, BrowserDevice } from '@odyssee/components';
```

---

## Examples

### Mobile Device Mockup

<LiveCodeEditor :defaultCode="`<Device
  variant='mobile'
  src='https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=800&fit=crop'
  alt='Mobile app screenshot'
/>
`" />

---

### MobileDevice Shorthand

<LiveCodeEditor :defaultCode="`<MobileDevice
  src='https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop'
  alt='Mobile interface'
/>
`" />

---

### Browser Device Mockup

<LiveCodeEditor :defaultCode="`<Device
  variant='browser'
  src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop'
  alt='Browser screenshot'
  url='app.example.com'
/>
`" />

---

### Browser Without Controls

<LiveCodeEditor :defaultCode="`<Device
  variant='browser'
  src='https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop'
  alt='Dashboard'
  showControls={false}
  url='dashboard.example.com'
/>
`" />

---

### BrowserDevice Shorthand

<LiveCodeEditor :defaultCode="`<BrowserDevice
  src='https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop'
  alt='Portfolio website'
  url='www.portfolio.com'
/>
`" />

---

### Alignment

<LiveCodeEditor :defaultCode="`<Container>
  <MobileDevice
    src='https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=800&fit=crop'
    alt='Left'
    align='left'
  />
  <MobileDevice
    src='https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&h=800&fit=crop'
    alt='Center'
    align='center'
  />
  <MobileDevice
    src='https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=800&fit=crop'
    alt='Right'
    align='right'
  />
</Container>
`" />

---

### Custom Content

<LiveCodeEditor :defaultCode="`<MobileDevice>
  <div style={{ background: 'linear-gradient(135deg, #a4508b 0%, #5f0a87 100%)', height: 320, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ color: 'white', textAlign: 'center' }}>
      <h3 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>Custom App</h3>
      <p style={{ fontSize: 14, opacity: 0.9 }}>Your content here</p>
    </div>
  </div>
</MobileDevice>
`" />

---

### Custom Sizes

<LiveCodeEditor :defaultCode="`<>
  <MobileDevice
    src='https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=800&fit=crop'
    alt='Small mobile'
    maxWidth='w-48'
  />
  <MobileDevice
    src='https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&h=800&fit=crop'
    alt='Large mobile'
    maxWidth='w-80'
  />
  <BrowserDevice
    src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop'
    alt='Small browser'
    maxWidth='max-w-xl'
    url='small.example.com'
  />
  <BrowserDevice
    src='https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop'
    alt='Large browser'
    maxWidth='max-w-6xl'
    url='large.example.com'
  />
</>
`" />

---

### Use Case: App Showcase

<LiveCodeEditor :defaultCode="`<MobileDevice
  src='https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=800&fit=crop'
  alt='App preview'
/>
`" />

---

## Props

| Prop             | Type                                              | Default         | Description                                                                                  |
|------------------|---------------------------------------------------|-----------------|----------------------------------------------------------------------------------------------|
| `variant`        | `"mobile"` \| `"browser"`                         | — (required)    | Type of device mockup to render.                                                             |
| `src`            | `string`                                          | —               | Image URL to display inside the device frame.                                                |
| `alt`            | `string`                                          | `"Device screenshot"` | Alt text for the image.                                                                |
| `children`       | `HTMLElement \| HTMLElement[] \| string`          | —               | Custom content to render inside the device (overrides `src` if provided).                    |
| `url`            | `string`                                          | `"www.preline.com"` | URL bar text (browser variant only).                                                    |
| `showControls`   | `boolean`                                         | `true`          | Show macOS-style window controls (browser variant only).                                     |
| `maxWidth`       | `string`                                          | `"w-60"` (mobile), `"max-w-3xl"` (browser) | Tailwind width class for sizing the device.      |
| `align`          | `"left"` \| `"center"` \| `"right"`               | `"center"`      | Horizontal alignment of the device mockup.                                                   |
| `className`      | `string`                                          | —               | Additional CSS classes for the outer container.                                              |
| `imageClassName` | `string`                                          | —               | Additional CSS classes for the `<img>` element.                                              |
| `frameClassName` | `string`                                          | —               | Additional CSS classes for the device frame.                                                 |
| `id`             | `string`                                          | auto-generated  | HTML id attribute.                                                                           |
| `style`          | `string`                                          | —               | Inline styles.                                                                               |

---

## Shorthand Components

- **MobileDevice**: `<MobileDevice {...props} />` is equivalent to `<Device variant="mobile" {...props} />`
- **BrowserDevice**: `<BrowserDevice {...props} />` is equivalent to `<Device variant="browser" {...props} />`

---

### Use Case: Landing Page Preview

<LiveCodeEditor :defaultCode="`<BrowserDevice
  src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop'
  alt='Platform preview'
  url='app.platform.com'
/>
`" />

---

## Implementation Notes

- **Variants:** Use `variant="mobile"` for a phone mockup, `variant="browser"` for a browser window. Prefer the shorthand components for clarity.
- **Image vs. Custom Content:** If `src` is provided, the image is displayed. If `children` is provided, it overrides the image and renders custom content.
- **Dark Mode:** Fully supports dark mode via Tailwind and system preferences.
- **Sizing:** Use Tailwind width classes (e.g., `w-48`, `w-80`, `max-w-xl`, `max-w-6xl`) for `maxWidth`.
- **Alignment:** Use `align` prop to left, center, or right align the device in its container.
- **Accessibility:** Always provide a meaningful `alt` for images. Custom content should be accessible and readable.

---

## Accessibility

- The device frame is a semantic `<figure>`.
- The image uses `alt` text for screen readers.
- Custom content should be keyboard accessible and readable.
- Ensure color contrast for custom backgrounds/content.
- The browser variant's URL bar is visually distinct for context.

---

## Best Practices

- Use the shorthand components (`MobileDevice`, `BrowserDevice`) for clarity and less boilerplate.
- Always provide `alt` text for images.
- For responsive demos, use `maxWidth` to control the device size.
- Use `align` to match your layout needs (e.g., left for feature lists, center for hero sections).
- For custom content, ensure it fits visually within the device frame and remains accessible.
- Test in both light and dark modes for visual consistency.

---

## Related

- [Tailwind CSS width utilities](https://tailwindcss.com/docs/width)
- [Pulse Framework](https://github.com/odyssee-software/pulse-framework)

---
