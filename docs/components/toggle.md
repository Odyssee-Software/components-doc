---
title: Toggle
description: A customizable switch component with label, description, icons, and validation states
---

# Toggle

A sleek toggle switch component for binary on/off states. Supports labels, descriptions, icons, validation states, and full reactivity. Perfect for settings, preferences, and feature toggles. Built for Pulse Framework with complete accessibility support.

## Import

```tsx
import { Toggle, Pulse } from '@odyssee-software/components';
```

## Basic Usage

<LiveCodeEditor :defaultCode="`<Toggle label='Enable notifications' />`" />

## With Description

Add helpful descriptions below the toggle label.

<LiveCodeEditor :defaultCode="`<Toggle
  label='Auto-save'
  description='Automatically save your changes as you type'
/>`" />

## Sizes

Four size options control the toggle size: `xs`, `sm`, `md`, and `lg`.

<LiveCodeEditor :defaultCode="`<div class='space-y-3'>
  <Toggle size='xs' label='Extra small toggle' />
  <Toggle size='sm' label='Small toggle' />
  <Toggle size='md' label='Medium toggle (default)' />
  <Toggle size='lg' label='Large toggle' />
</div>`" />

## Variants

The Toggle component supports two variants: `default` and `soft`.

<LiveCodeEditor :defaultCode="`<div class='space-y-3'>
  <Toggle label='Default variant' variant='default' checked={true} />
  <Toggle label='Soft variant' variant='soft' checked={true} />
</div>`" />

## With Icons

Show check/cross icons inside the toggle.

<LiveCodeEditor :defaultCode="`<div class='space-y-3'>
  <Toggle label='Toggle with icons' showIcons={true} />
  <Toggle label='Toggle with icons (checked)' showIcons={true} checked={true} />
</div>`" />

## Required Field

Mark toggles as required with visual indicators.

<LiveCodeEditor :defaultCode="`<Toggle
  label='Accept terms and conditions'
  required={true}
/>`" />

## With Error State

Display validation errors.

<LiveCodeEditor :defaultCode="`<Toggle
  label='Enable feature'
  error='This feature is currently unavailable'
  disabled={true}
/>`" />

## With Success State

Show success feedback.

<LiveCodeEditor :defaultCode="`<Toggle
  label='Two-factor authentication'
  success='Security feature enabled'
  checked={true}
/>`" />

## Disabled State

Disable toggles when they cannot be interacted with.

<LiveCodeEditor :defaultCode="`<div class='space-y-3'>
  <Toggle label='Disabled off' disabled={true} />
  <Toggle label='Disabled on' disabled={true} checked={true} />
</div>`" />

## Label Position

Control label placement with the `labelPosition` prop.

<LiveCodeEditor :defaultCode="`<div class='space-y-3'>
  <Toggle label='Label on right (default)' labelPosition='right' checked={true} />
  <Toggle label='Label on left' labelPosition='left' checked={true} />
</div>`" />

## Reactive Value

Control toggle state with Pulse signals.

```tsx
const isDarkMode = Pulse.signal(false);

const reactiveToggle = (
  <div>
    <Toggle
      label="Dark Mode"
      description="Switch between light and dark theme"
      checked={isDarkMode}
      onChange={(checked) => isDarkMode(checked)}
    />
    
    <div class="mt-4">
      <p class="text-sm text-gray-600">
        Theme: {isDarkMode() ? 'Dark 🌙' : 'Light ☀️'}
      </p>
    </div>
  </div>
);
```

## Settings Panel

Create organized settings with multiple toggles.

```tsx
const SettingsPanel = () => {
  const settings = Pulse.signal({
    notifications: true,
    autoSave: true,
    twoFactor: false,
    newsletter: false
  });

  return (
    <div class="space-y-4">
      <h3 class="text-lg font-semibold mb-3">Account Settings</h3>
      
      <Toggle
        label="Push Notifications"
        description="Receive push notifications on your devices"
        checked={settings().notifications}
        onChange={(checked) => 
          settings({ ...settings(), notifications: checked })
        }
      />
      
      <Toggle
        label="Auto-save"
        description="Automatically save your work"
        checked={settings().autoSave}
        onChange={(checked) => 
          settings({ ...settings(), autoSave: checked })
        }
      />
      
      <Toggle
        label="Two-factor Authentication"
        description="Add an extra layer of security"
        checked={settings().twoFactor}
        onChange={(checked) => 
          settings({ ...settings(), twoFactor: checked })
        }
      />
      
      <Toggle
        label="Newsletter Subscription"
        description="Receive our weekly newsletter"
        checked={settings().newsletter}
        onChange={(checked) => 
          settings({ ...settings(), newsletter: checked })
        }
      />
    </div>
  );
};
```

## Dependent Toggles

Create toggles that enable/disable other options.

```tsx
const DependentToggles = () => {
  const emailNotifications = Pulse.signal(true);
  const emailTypes = Pulse.signal({
    marketing: false,
    updates: true,
    security: true
  });

  return (
    <div class="space-y-4">
      <Toggle
        label="Email Notifications"
        description="Master toggle for all email notifications"
        checked={emailNotifications}
        onChange={(checked) => emailNotifications(checked)}
        size="lg"
      />
      
      <div class="ml-6 space-y-3">
        <Toggle
          label="Marketing Emails"
          description="Promotional content and offers"
          checked={emailTypes().marketing}
          disabled={!emailNotifications()}
          onChange={(checked) => 
            emailTypes({ ...emailTypes(), marketing: checked })
          }
        />
        
        <Toggle
          label="Product Updates"
          description="News about new features"
          checked={emailTypes().updates}
          disabled={!emailNotifications()}
          onChange={(checked) => 
            emailTypes({ ...emailTypes(), updates: checked })
          }
        />
        
        <Toggle
          label="Security Alerts"
          description="Important security notifications"
          checked={emailTypes().security}
          disabled={!emailNotifications()}
          onChange={(checked) => 
            emailTypes({ ...emailTypes(), security: checked })
          }
        />
      </div>
    </div>
  );
};
```

## Form Validation

Integrate with form validation.

```tsx
const ConsentForm = () => {
  const consent = Pulse.signal(false);
  const error = Pulse.signal('');

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    
    if (!consent()) {
      error('You must accept the terms to continue');
      return;
    }
    
    error('');
    console.log('Form submitted!');
  };

  return (
    <form onsubmit={handleSubmit} class="space-y-4">
      <Toggle
        label="I agree to the terms and conditions"
        description="By enabling this, you accept our terms of service"
        checked={consent}
        onChange={(checked) => {
          consent(checked);
          if (checked) error('');
        }}
        error={error()}
        required
      />
      
      <Button type="submit">
        Continue
      </Button>
    </form>
  );
};
```

## Complete Example

Here's a comprehensive preferences form with multiple toggle groups:

```tsx
import { Toggle, Button, Card, Alert, Pulse } from '@odyssee-software/components';

const PreferencesForm = () => {
  const preferences = Pulse.signal({
    appearance: {
      darkMode: false,
      compactView: false,
      animations: true
    },
    notifications: {
      desktop: true,
      email: true,
      sms: false
    },
    privacy: {
      profilePublic: true,
      showActivity: false,
      allowMessages: true
    }
  });

  const isSaving = Pulse.signal(false);
  const saved = Pulse.signal(false);

  const handleSave = async () => {
    isSaving(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Preferences saved:', preferences());
      saved(true);
      setTimeout(() => saved(false), 3000);
    } catch (err) {
      console.error('Failed to save preferences');
    } finally {
      isSaving(false);
    }
  };

  return (
    <div class="max-w-2xl space-y-6">
      {saved() && (
        <Alert
          color="success"
          dismissible={true}
          onDismiss={() => saved(false)}
        >
          Preferences saved successfully!
        </Alert>
      )}

      <Card title="Appearance" size="lg">
        <div class="space-y-4">
          <Toggle
            label="Dark Mode"
            description="Use dark theme throughout the app"
            showIcons={true}
            checked={preferences().appearance.darkMode}
            onChange={(checked) => 
              preferences({
                ...preferences(),
                appearance: { ...preferences().appearance, darkMode: checked }
              })
            }
          />
          
          <Toggle
            label="Compact View"
            description="Show more content on screen"
            checked={preferences().appearance.compactView}
            onChange={(checked) => 
              preferences({
                ...preferences(),
                appearance: { ...preferences().appearance, compactView: checked }
              })
            }
          />
          
          <Toggle
            label="Enable Animations"
            description="Smooth transitions and effects"
            checked={preferences().appearance.animations}
            onChange={(checked) => 
              preferences({
                ...preferences(),
                appearance: { ...preferences().appearance, animations: checked }
              })
            }
          />
        </div>
      </Card>

      <Card title="Notifications" size="lg">
        <div class="space-y-4">
          <Toggle
            label="Desktop Notifications"
            description="Show notifications on your desktop"
            checked={preferences().notifications.desktop}
            onChange={(checked) => 
              preferences({
                ...preferences(),
                notifications: { ...preferences().notifications, desktop: checked }
              })
            }
          />
          
          <Toggle
            label="Email Notifications"
            description="Receive notifications via email"
            checked={preferences().notifications.email}
            onChange={(checked) => 
              preferences({
                ...preferences(),
                notifications: { ...preferences().notifications, email: checked }
              })
            }
          />
          
          <Toggle
            label="SMS Notifications"
            description="Receive notifications via SMS"
            checked={preferences().notifications.sms}
            onChange={(checked) => 
              preferences({
                ...preferences(),
                notifications: { ...preferences().notifications, sms: checked }
              })
            }
          />
        </div>
      </Card>

      <Card title="Privacy" size="lg">
        <div class="space-y-4">
          <Toggle
            label="Public Profile"
            description="Make your profile visible to everyone"
            checked={preferences().privacy.profilePublic}
            onChange={(checked) => 
              preferences({
                ...preferences(),
                privacy: { ...preferences().privacy, profilePublic: checked }
              })
            }
          />
          
          <Toggle
            label="Show Activity Status"
            description="Let others see when you're online"
            checked={preferences().privacy.showActivity}
            disabled={!preferences().privacy.profilePublic}
            onChange={(checked) => 
              preferences({
                ...preferences(),
                privacy: { ...preferences().privacy, showActivity: checked }
              })
            }
          />
          
          <Toggle
            label="Allow Direct Messages"
            description="Receive messages from other users"
            checked={preferences().privacy.allowMessages}
            onChange={(checked) => 
              preferences({
                ...preferences(),
                privacy: { ...preferences().privacy, allowMessages: checked }
              })
            }
          />
        </div>
      </Card>

      <div class="flex justify-end">
        <Button
          color="primary"
          loading={isSaving()}
          onClick={handleSave}
        >
          Save Preferences
        </Button>
      </div>
    </div>
  );
};
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean \| Signal<boolean>` | `false` | Checked state |
| `label` | `string` | - | Toggle label |
| `description` | `string` | - | Helper text below label |
| `error` | `string` | - | Error message |
| `success` | `string` | - | Success message |
| `size` | `"xs" \| "sm" \| "md" \| "lg"` | `"md"` | Toggle size |
| `variant` | `"default" \| "soft"` | `"default"` | Visual style |
| `showIcons` | `boolean` | `false` | Show check/cross icons |
| `labelPosition` | `"left" \| "right"` | `"right"` | Label position |
| `disabled` | `boolean` | `false` | Disable toggle |
| `required` | `boolean` | `false` | Mark as required |
| `name` | `string` | - | Form field name |
| `onChange` | `(checked: boolean) => void` | - | Change event handler |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | Auto-generated | HTML id attribute |

## Accessibility

The Toggle component follows accessibility best practices:

- ✅ Uses checkbox input with proper role
- ✅ Keyboard navigation support (Space to toggle)
- ✅ Focus management with visible focus ring
- ✅ Screen reader friendly labels
- ✅ ARIA attributes for states
- ✅ Required field indicators
- ✅ Clear visual state feedback

### Keyboard Navigation

- **Space**: Toggle on/off
- **Tab**: Move to next element
- **Shift + Tab**: Move to previous element

### ARIA Attributes

```tsx
const accessibleToggle = (
  <Toggle
    label="Dark Mode"
    aria-label="Enable dark mode"
    aria-describedby="dark-mode-hint"
  />
);
```

## Best Practices

### ✅ Do

- Use toggles for binary on/off states
- Provide clear, concise labels
- Add descriptions for complex options
- Show immediate feedback on toggle
- Use appropriate sizes for context
- Group related toggles together

```tsx
// Good: Clear label with helpful description
const goodToggle = (
  <Toggle
    label="Enable two-factor authentication"
    description="Adds an extra layer of security to your account"
    onChange={handleToggle}
  />
);
```

### ❌ Don't

- Don't use for choices between options (use radio buttons)
- Don't use for multiple selections (use checkboxes)
- Don't require confirmation for toggle changes
- Don't hide important state changes
- Don't use vague labels

```tsx
// Bad: Vague label, unclear what happens
const badToggle = (
  <Toggle label="Enable" />
);

// Better: Clear label explaining the action
const betterToggle = (
  <Toggle
    label="Enable email notifications"
    description="Receive updates via email"
  />
);
```

## Use Cases

### Dark Mode Toggle

```tsx
const DarkModeToggle = () => {
  const isDark = Pulse.signal(false);

  return (
    <Toggle
      label="Dark Mode"
      description="Switch between light and dark theme"
      showIcons={true}
      checked={isDark}
      onChange={(checked) => {
        isDark(checked);
        document.body.classList.toggle('dark', checked);
      }}
    />
  );
};
```

### Feature Flags

```tsx
const FeatureFlags = () => (
  <div class="space-y-3">
    <Toggle
      label="Beta Features"
      description="Enable experimental features"
    />
    <Toggle
      label="Analytics"
      description="Help us improve by sharing usage data"
    />
  </div>
);
```

### Privacy Settings

```tsx
const PrivacySettings = () => (
  <div class="space-y-3">
    <Toggle
      label="Profile Visibility"
      description="Make your profile visible to others"
    />
    <Toggle
      label="Show Email"
      description="Display your email on your profile"
    />
  </div>
);
```

## Styling & Theming

All toggle styles use Tailwind CSS classes and support dark mode automatically.

### Custom Styling

```tsx
const customToggle = (
  <Toggle
    className="custom-toggle"
    label="Custom styled toggle"
  />
);
```

## TypeScript

Full TypeScript support with complete type definitions:

```tsx
import type { ToggleProps } from '@odyssee-software/components';

const props: ToggleProps = {
  label: 'Enable feature',
  checked: false,
  showIcons: true,
  onChange: (checked: boolean) => {
    console.log('Toggled:', checked);
  }
};

const toggle = <Toggle {...props} />;
```

## Related Components

- [Checkbox](/components/checkbox) - For multiple selections
- [Radio](/components/radio) - For single selections from options
- [Button](/components/button) - For action triggers
- [Switch (alias)](/components/toggle) - Same component, different name

---

**Version**: 1.0.0  
**Last Updated**: January 2025
