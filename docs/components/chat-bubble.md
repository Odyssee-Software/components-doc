--- 
title: ChatBubble
description: Display chat messages with various layouts, avatars, and status indicators
---

# ChatBubble

Display chat messages in a conversational interface with support for user/bot messages, avatars, status indicators, and rich content. Perfect for chat applications, customer support, and messaging features. Built for Pulse Framework with full reactivity support.

## Import

```ts
import { ChatBubble } from '@odyssee-software/components';
```

## Basic Usage

<LiveCodeEditor :defaultCode="`<ChatBubble.List>
  <ChatBubble.Bot
    message='Hello! How can I help you today?'
    align='left'
  />
  <ChatBubble.User
    message='I need help with my account'
    align='right'
  />
</ChatBubble.List>`" />

## User vs Bot Messages

### Bot Message (Left-aligned)

<LiveCodeEditor :defaultCode="`<ChatBubble.Bot
  message='Welcome! I am here to assist you with any questions.'
  avatarInitials='AI'
/>`" />

### User Message (Right-aligned)

<LiveCodeEditor :defaultCode="`<ChatBubble.User
  message='Thanks! Can you explain how this works?'
/>`" />

## With Avatars

### Image Avatar

<LiveCodeEditor :defaultCode="`<ChatBubble.List>
  <ChatBubble.Bot
    message='Hi there! Thanks for reaching out.'
    avatar='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100'
    avatarAlt='Support Agent'
    align='left'
  />
  <ChatBubble.User
    message='Hello! I have a question about my order.'
    avatar='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100'
    avatarAlt='User'
    align='right'
  />
</ChatBubble.List>`" />

### Initials Avatar

<LiveCodeEditor :defaultCode="`<ChatBubble.List>
  <ChatBubble.Bot
    message='Hello! How may I assist you?'
    avatarInitials='CS'
    align='left'
  />
  <ChatBubble.User
    message='I need help with billing'
    avatarInitials='JD'
    align='right'
    variant='primary'
  />
</ChatBubble.List>`" />

## With Title

<LiveCodeEditor :defaultCode="`<ChatBubble
  title='Getting Started Guide'
  message='Here is everything you need to know to get started with our platform.'
  avatarInitials='AI'
  align='left'
/>`" />

## Message Status

<LiveCodeEditor :defaultCode="`<ChatBubble.List>
  <ChatBubble.User
    message='Message sent successfully'
    status='sent'
    showStatus={true}
  />
  <ChatBubble.User
    message='Message delivered'
    status='delivered'
    showStatus={true}
  />
  <ChatBubble.User
    message='Message read by recipient'
    status='read'
    showStatus={true}
  />
  <ChatBubble.User
    message='Failed to send'
    status='error'
    showStatus={true}
  />
</ChatBubble.List>`" />

## With Timestamps

<LiveCodeEditor :defaultCode="`<ChatBubble.List>
  <ChatBubble.Bot
    message='Good morning! How can I help you?'
    timestamp='09:00 AM'
    showTimestamp={true}
  />
  <ChatBubble.User
    message='I have a question about pricing'
    timestamp='09:02 AM'
    showTimestamp={true}
  />
</ChatBubble.List>`" />

## Rich Content

Chat bubbles can contain complex content including links and lists.

```tsx
const contentItems = [
  { type: 'text', content: 'Here are some helpful resources:' },
  { type: 'link', content: 'Documentation', href: '/docs' },
  { type: 'link', content: 'API Reference', href: '/api' },
  { type: 'link', content: 'Support Portal', href: '/support' }
];

const richBubble = (
  <ChatBubble
    title='Quick Links'
    content={contentItems}
    avatarInitials='AI'
    align='left'
  />
);
```

## Custom Styling

<LiveCodeEditor :defaultCode="`<ChatBubble.List>
  <ChatBubble
    message='Standard width message'
    align='left'
    avatarInitials='AI'
  />
  <ChatBubble
    message='This is a wider message with custom max-width'
    align='left'
    avatarInitials='AI'
    maxWidth='max-w-2xl'
  />
  <ChatBubble
    message='Compact message'
    align='left'
    avatarInitials='AI'
    maxWidth='max-w-md'
  />
</ChatBubble.List>`" />

## Reactive Chat

Create interactive chat interfaces with Pulse signals.

```tsx
import { ChatBubble, Input, Button, Pulse } from '@odyssee-software/components';

const ChatInterface = () => {
  const messages = Pulse.signal([
    {
      id: 1,
      text: 'Hello! How can I help you today?',
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  
  const inputValue = Pulse.signal('');

  const sendMessage = () => {
    const text = inputValue();
    if (!text.trim()) return;

    // Add user message
    messages([
      ...messages(),
      {
        id: messages().length + 1,
        text,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString()
      }
    ]);

    inputValue('');

    // Simulate bot response
    setTimeout(() => {
      messages([
        ...messages(),
        {
          id: messages().length + 1,
          text: 'Thanks for your message! Our team will respond shortly.',
          sender: 'bot',
          timestamp: new Date().toLocaleTimeString()
        }
      ]);
    }, 1000);
  };

  return (
    <div class='flex flex-col h-96'>
      <div class='flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-neutral-800'>
        <ChatBubble.List>
          {messages().map(msg => (
            <ChatBubble
              key={msg.id}
              message={msg.text}
              sender={msg.sender}
              align={msg.sender === 'user' ? 'right' : 'left'}
              variant={msg.sender === 'user' ? 'primary' : 'default'}
              timestamp={msg.timestamp}
              showTimestamp={true}
              avatarInitials={msg.sender === 'bot' ? 'AI' : 'You'}
            />
          ))}
        </ChatBubble.List>
      </div>
      
      <div class='p-4 border-t dark:border-neutral-700 flex gap-2'>
        <Input
          value={inputValue}
          placeholder='Type your message...'
          onChange={(val) => inputValue(val)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <Button onClick={sendMessage} color='primary'>Send</Button>
      </div>
    </div>
  );
};
```



## Props

### ChatBubble Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `message` | `string` | - | Message text content |
| `content` | `HTMLElement \| string \| ChatContentItem[]` | - | Rich content (overrides message) |
| `title` | `string` | - | Optional message title/heading |
| `sender` | `"user" \| "bot" \| "other"` | `"bot"` | Type of sender |
| `avatar` | `string` | - | Avatar image URL |
| `avatarAlt` | `string` | `"Avatar"` | Avatar alt text |
| `avatarInitials` | `string` | - | Initials for avatar fallback |
| `status` | `"sent" \| "delivered" \| "read" \| "error" \| "sending"` | - | Message status |
| `statusText` | `string` | - | Custom status text |
| `showStatus` | `boolean` | `false` | Display status indicator |
| `align` | `"left" \| "right"` | `"left"` | Message alignment |
| `variant` | `"default" \| "primary"` | Auto | Visual style variant |
| `maxWidth` | `string` | `"max-w-lg"` | Maximum width class |
| `timestamp` | `string` | - | Message timestamp |
| `showTimestamp` | `boolean` | `false` | Display timestamp |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | Auto-generated | HTML id attribute |
| `style` | `string \| object` | - | Inline styles |

### ChatBubbleList Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `HTMLElement \| HTMLElement[]` | - | Chat bubble elements |
| `spacing` | `"sm" \| "md" \| "lg"` | `"md"` | Spacing between messages |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | Auto-generated | HTML id attribute |
| `style` | `string \| object` | - | Inline styles |

### ChatContentItem Interface

| Property | Type | Description |
|----------|------|-------------|
| `type` | `"text" \| "link" \| "list"` | Content type |
| `content` | `string` | Content text |
| `href` | `string` | Link URL (for type="link") |

## Accessibility

The ChatBubble component follows accessibility best practices:

- ✅ Semantic HTML structure with `<li>` elements
- ✅ Proper alt text for avatar images
- ✅ ARIA-compliant status indicators
- ✅ Keyboard-accessible links in content
- ✅ High contrast text in all variants
- ✅ Screen reader friendly timestamps
