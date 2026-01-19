---
title: ColorPicker
description: A color selection component with hex value display and validation
---

# ColorPicker

Select colors using an intuitive color picker interface with hex value display. Perfect for theme customization, design tools, and any application requiring color input. Built for Pulse Framework with full reactivity support.

## Import

```ts
import { ColorPicker } from '@odyssee-software/components';
```

## Basic Usage

<LiveCodeEditor :defaultCode="`<ColorPicker
  label='Choose color'
  value='#3b82f6'
  onChange={(color) => console.log(color)}
/>`" />

## With Value Display

Show the hex color value alongside the picker.

<LiveCodeEditor :defaultCode="`<ColorPicker
  label='Brand Color'
  value='#10b981'
  showValue={true}
/>`" />

## Sizes

Available sizes: `xs`, `sm`, `md`, `lg`, `xl`.

<LiveCodeEditor :defaultCode="`<div class='space-y-4'>
  <ColorPicker label='Extra Small' size='xs' value='#3b82f6' />
  <ColorPicker label='Small' size='sm' value='#10b981' />
  <ColorPicker label='Medium (default)' size='md' value='#f59e0b' />
  <ColorPicker label='Large' size='lg' value='#ef4444' />
  <ColorPicker label='Extra Large' size='xl' value='#8b5cf6' />
</div>`" />

## With Hints

<LiveCodeEditor :defaultCode="`<ColorPicker
  label='Primary Theme Color'
  value='#3b82f6'
  showValue={true}
  hint='Select the primary color for your application theme'
/>`" />

## Validation State

<LiveCodeEditor :defaultCode="`<div class='space-y-4'>
  <ColorPicker
    label='Required color'
    value='#10b981'
    required={true}
    hint='This field is required'
  />
  <ColorPicker
    label='Invalid color'
    value='#ff0000'
    error='This color does not meet accessibility standards'
  />
</div>`" />

## Disabled State

<LiveCodeEditor :defaultCode="`<ColorPicker
  label='Disabled picker'
  value='#9ca3af'
  disabled={true}
  showValue={true}
  hint='Color selection is currently disabled'
/>`" />

## Reactive Color Picker

Control color with Pulse signals.

```tsx
import { ColorPicker, Card, Button, Pulse } from '@odyssee-software/components';

const ThemeCustomizer = () => {
  const primaryColor = Pulse.signal('#3b82f6');
  const secondaryColor = Pulse.signal('#10b981');
  const accentColor = Pulse.signal('#f59e0b');

  const previewStyle = Pulse.computed(() => ({
    background: `linear-gradient(135deg, ${primaryColor()} 0%, ${secondaryColor()} 50%, ${accentColor()} 100%)`
  }));

  const resetColors = () => {
    primaryColor('#3b82f6');
    secondaryColor('#10b981');
    accentColor('#f59e0b');
  };

  const randomizeColors = () => {
    const randomColor = () => {
      return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    };
    primaryColor(randomColor());
    secondaryColor(randomColor());
    accentColor(randomColor());
  };

  return (
    <div class='space-y-6'>
      {/* Preview */}
      <div 
        class='h-48 rounded-lg shadow-lg'
        style={previewStyle()}
      />

      {/* Color Pickers */}
      <div class='space-y-4'>
        <ColorPicker
          label='Primary Color'
          value={primaryColor}
          showValue={true}
          onChange={(val) => primaryColor(val)}
        />

        <ColorPicker
          label='Secondary Color'
          value={secondaryColor}
          showValue={true}
          onChange={(val) => secondaryColor(val)}
        />

        <ColorPicker
          label='Accent Color'
          value={accentColor}
          showValue={true}
          onChange={(val) => accentColor(val)}
        />
      </div>

      {/* Actions */}
      <div class='flex gap-3'>
        <Button onClick={resetColors} variant='outline'>
          Reset Colors
        </Button>
        <Button onClick={randomizeColors} variant='outline'>
          Randomize
        </Button>
      </div>

      {/* Color Info */}
      <div class='p-4 bg-gray-50 rounded-lg dark:bg-neutral-800'>
        <h4 class='font-semibold mb-2'>Selected Colors</h4>
        <div class='space-y-1 text-sm font-mono'>
          <p>Primary: {primaryColor()}</p>
          <p>Secondary: {secondaryColor()}</p>
          <p>Accent: {accentColor()}</p>
        </div>
      </div>
    </div>
  );
};
```

## Complete Example: Brand Color Manager

```tsx
import { ColorPicker, Card, Button, Badge, Pulse } from '@odyssee-software/components';

const BrandColorManager = () => {
  const brandColors = Pulse.signal([
    { id: 1, name: 'Primary', color: '#3b82f6', usage: 'Buttons, Links' },
    { id: 2, name: 'Secondary', color: '#10b981', usage: 'Success states' },
    { id: 3, name: 'Accent', color: '#f59e0b', usage: 'Highlights' },
    { id: 4, name: 'Danger', color: '#ef4444', usage: 'Errors, Warnings' }
  ]);

  const updateColor = (id, newColor) => {
    brandColors(
      brandColors().map(item => 
        item.id === id ? { ...item, color: newColor } : item
      )
    );
  };

  const exportColors = () => {
    const css = brandColors().map(item => 
      `--color-${item.name.toLowerCase()}: ${item.color};`
    ).join('\n');
    
    alert('CSS Variables:\n' + css);
  };

  const contrastRatio = (color) => {
    // Simple contrast calculation
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? 'dark' : 'light';
  };

  return (
    <Card title='Brand Color System' size='lg'>
      <div class='space-y-6'>
        {/* Color Grid */}
        <div class='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {brandColors().map(item => (
            <div 
              key={item.id}
              class='p-4 border rounded-lg dark:border-neutral-700'
            >
              <div class='flex items-start justify-between mb-3'>
                <div>
                  <h4 class='font-semibold text-gray-900 dark:text-white'>
                    {item.name}
                  </h4>
                  <p class='text-xs text-gray-600 dark:text-gray-400'>
                    {item.usage}
                  </p>
                </div>
                <Badge 
                  variant='soft' 
                  color={contrastRatio(item.color) === 'light' ? 'primary' : 'secondary'}
                >
                  {contrastRatio(item.color)}
                </Badge>
              </div>

              {/* Color Preview */}
              <div 
                class='h-20 rounded-lg mb-3 border-2 border-gray-200 dark:border-neutral-600'
                style={{ backgroundColor: item.color }}
              />

              {/* Color Picker */}
              <ColorPicker
                value={item.color}
                showValue={true}
                size='sm'
                onChange={(color) => updateColor(item.id, color)}
              />
            </div>
          ))}
        </div>

        {/* Actions */}
        <div class='flex gap-3 pt-4 border-t dark:border-neutral-700'>
          <Button onClick={exportColors} color='primary'>
            Export as CSS
          </Button>
          <Button variant='outline'>
            Save Color Palette
          </Button>
        </div>

        {/* Accessibility Info */}
        <div class='p-4 bg-blue-50 rounded-lg dark:bg-blue-900/20'>
          <p class='text-sm text-blue-900 dark:text-blue-200'>
            💡 Tip: Ensure sufficient contrast ratio (4.5:1) for text on colored backgrounds
          </p>
        </div>
      </div>
    </Card>
  );
};
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string \| Signal<string>` | `"#000000"` | Color value (hex format) |
| `label` | `string` | - | Picker label text |
| `hint` | `string` | - | Helper text below picker |
| `error` | `string` | - | Error message |
| `disabled` | `boolean` | `false` | Disable picker |
| `required` | `boolean` | `false` | Mark as required field |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | Picker size |
| `showValue` | `boolean` | `true` | Display hex value |
| `onChange` | `(color: string) => void` | - | Color change callback |
| `name` | `string` | - | Input name attribute |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | Auto-generated | HTML id attribute |

## Accessibility

The ColorPicker component follows accessibility best practices:

- ✅ Semantic HTML with native color input
- ✅ Proper label associations
- ✅ Keyboard accessible (Enter/Space to open picker)
- ✅ Focus indicators
- ✅ Screen reader friendly
- ✅ Disabled state properly communicated

```tsx
// Accessibility features are built-in
const accessiblePicker = (
  <ColorPicker
    label='Choose theme color'
    value='#3b82f6'
    required={true}
    // All ARIA and keyboard navigation handled automatically
  />
);
```

## Best Practices

### ✅ Do

- Provide clear labels describing the color's purpose
- Show the hex value for reference
- Consider color accessibility and contrast
- Validate color values if needed
- Provide hints about color usage

```tsx
// Good: Clear purpose and context
const goodColorPicker = (
  <ColorPicker
    label='Primary Button Color'
    value='#3b82f6'
    showValue={true}
    hint='Used for primary actions throughout the app'
  />
);
```

### ❌ Don't

- Don't omit labels (unclear purpose)
- Don't hide hex values for technical users
- Don't forget accessibility considerations
- Don't use colors that fail contrast requirements
- Don't allow invalid color formats

```tsx
// Bad: No context or validation
const badColorPicker = (
  <ColorPicker
    value='#ff0000'
    // No label
    // No validation
    // No accessibility check
  />
);

// Better: Clear and validated
const betterColorPicker = (
  <ColorPicker
    label='Alert Color'
    value='#ef4444'
    showValue={true}
    hint='Ensure sufficient contrast with white text'
  />
);
```

## Use Cases

### Theme Customizer

```tsx
const ThemeEditor = () => {
  const theme = Pulse.signal({
    primary: '#3b82f6',
    secondary: '#10b981',
    background: '#ffffff',
    text: '#1f2937'
  });

  const updateThemeColor = (key, color) => {
    theme({ ...theme(), [key]: color });
  };

  return (
    <div class='space-y-4'>
      <ColorPicker
        label='Primary Color'
        value={theme().primary}
        showValue={true}
        onChange={(color) => updateThemeColor('primary', color)}
      />
      <ColorPicker
        label='Background Color'
        value={theme().background}
        showValue={true}
        onChange={(color) => updateThemeColor('background', color)}
      />
    </div>
  );
};
```

### Color Palette Generator

```tsx
const PaletteGenerator = () => {
  const baseColor = Pulse.signal('#3b82f6');
  
  const palette = Pulse.computed(() => {
    const base = baseColor();
    // Generate shades (simplified)
    return {
      lightest: base + '20',
      light: base + '60',
      base: base,
      dark: base + 'cc',
      darkest: base + 'ff'
    };
  });

  return (
    <div class='space-y-4'>
      <ColorPicker
        label='Base Color'
        value={baseColor}
        showValue={true}
        onChange={(color) => baseColor(color)}
      />

      <div class='grid grid-cols-5 gap-2'>
        {Object.entries(palette()).map(([name, color]) => (
          <div key={name} class='text-center'>
            <div 
              class='h-16 rounded-lg border-2'
              style={{ backgroundColor: color }}
            />
            <p class='text-xs mt-1'>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
```

### Design System Builder

```tsx
const DesignSystemColors = () => {
  const systemColors = Pulse.signal({
    brand: '#3b82f6',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
    info: '#06b6d4',
    neutral: '#6b7280'
  });

  const updateSystemColor = (key, value) => {
    systemColors({ ...systemColors(), [key]: value });
  };

  return (
    <Card title='Design System Colors'>
      <div class='grid grid-cols-2 gap-4'>
        {Object.entries(systemColors()).map(([key, value]) => (
          <ColorPicker
            key={key}
            label={key.charAt(0).toUpperCase() + key.slice(1)}
            value={value}
            showValue={true}
            onChange={(color) => updateSystemColor(key, color)}
          />
        ))}
      </div>
    </Card>
  );
};
```

## Styling & Theming

All color picker styles use Tailwind CSS and support dark mode automatically.

### Custom Styling

```tsx
const customPicker = (
  <ColorPicker
    label='Custom styled'
    value='#3b82f6'
    className='border-4 rounded-xl'
  />
);
```

### Dark Mode

```tsx
// Dark mode support is automatic
const darkModePicker = (
  <ColorPicker
    label='Theme Color'
    value='#3b82f6'
    showValue={true}
    // Automatically uses dark:border-gray-600, dark:text-gray-300, etc.
  />
);
```

## TypeScript

Full TypeScript support with complete type definitions.

```tsx
import type { ColorPickerProps } from '@odyssee-software/components';
import { Pulse } from '@odyssee-software/components';

// Type-safe props
const props: ColorPickerProps = {
  label: 'Brand Color',
  value: '#3b82f6',
  size: 'md',
  showValue: true,
  required: false,
  onChange: (color: string): void => {
    console.log(color);
  }
};

const picker = <ColorPicker {...props} />;

// Type-safe with signals
const color = Pulse.signal<string>('#10b981');
const typedPicker = (
  <ColorPicker
    label='Color'
    value={color}
    onChange={(val: string) => color(val)}
  />
);

// Type-safe color validation
const isValidHex = (color: string): boolean => {
  return /^#[0-9A-F]{6}$/i.test(color);
};

const validateColor = (color: string) => {
  if (!isValidHex(color)) {
    throw new Error('Invalid hex color format');
  }
};
```

## Related Components

- [Input](/components/input) - Text input for hex values
- [RangeSlider](/components/range-slider) - RGB value sliders
- [Select](/components/select) - Predefined color selection
- [Button](/components/button) - Color-themed buttons

---

**Version**: 1.0.0  
**Last Updated**: January 2025
