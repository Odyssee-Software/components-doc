---
title: ChatBubble
description: Display chat messages with various layouts, avatars, and status indicators
---

# ChatBubble

Display chat messages in a conversational interface with support for user/bot messages, avatars, status indicators, and rich content. Perfect for chat applications, customer support, and messaging features. Built for Pulse Framework with full reactivity support.

## Import

```ts
import { ChatBubble, UserChatBubble, BotChatBubble, ChatBubbleList } from '@odyssee/components';
```

## Basic Usage

<LiveCodeEditor :defaultCode="`<ChatBubbleList>
  <ChatBubble
    message='Hello! How can I help you today?'
    sender='bot'
    align='left'
  />
  <ChatBubble
    message='I need help with my account'
    sender='user'
    align='right'
  />
</ChatBubbleList>`" />

## User vs Bot Messages

### Bot Message (Left-aligned)

<LiveCodeEditor :defaultCode="`<BotChatBubble
  message='Welcome! I am here to assist you with any questions.'
  avatarInitials='AI'
/>`" />

### User Message (Right-aligned)

<LiveCodeEditor :defaultCode="`<UserChatBubble
  message='Thanks! Can you explain how this works?'
/>`" />

## With Avatars

### Image Avatar

<LiveCodeEditor :defaultCode="`<ChatBubbleList>
  <ChatBubble
    message='Hi there! Thanks for reaching out.'
    avatar='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100'
    avatarAlt='Support Agent'
    align='left'
  />
  <ChatBubble
    message='Hello! I have a question about my order.'
    avatar='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100'
    avatarAlt='User'
    align='right'
  />
</ChatBubbleList>`" />

### Initials Avatar

<LiveCodeEditor :defaultCode="`<ChatBubbleList>
  <ChatBubble
    message='Hello! How may I assist you?'
    avatarInitials='CS'
    align='left'
  />
  <ChatBubble
    message='I need help with billing'
    avatarInitials='JD'
    align='right'
    variant='primary'
  />
</ChatBubbleList>`" />

## With Title

<LiveCodeEditor :defaultCode="`<ChatBubble
  title='Getting Started Guide'
  message='Here is everything you need to know to get started with our platform.'
  avatarInitials='AI'
  align='left'
/>`" />

## Message Status

<LiveCodeEditor :defaultCode="`<ChatBubbleList>
  <UserChatBubble
    message='Message sent successfully'
    status='sent'
    showStatus={true}
  />
  <UserChatBubble
    message='Message delivered'
    status='delivered'
    showStatus={true}
  />
  <UserChatBubble
    message='Message read by recipient'
    status='read'
    showStatus={true}
  />
  <UserChatBubble
    message='Failed to send'
    status='error'
    showStatus={true}
  />
</ChatBubbleList>`" />

## With Timestamps

<LiveCodeEditor :defaultCode="`<ChatBubbleList>
  <BotChatBubble
    message='Good morning! How can I help you?'
    timestamp='09:00 AM'
    showTimestamp={true}
  />
  <UserChatBubble
    message='I have a question about pricing'
    timestamp='09:02 AM'
    showTimestamp={true}
  />
</ChatBubbleList>`" />

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

<LiveCodeEditor :defaultCode="`<ChatBubbleList>
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
</ChatBubbleList>`" />

## Reactive Chat

Create interactive chat interfaces with Pulse signals.

```tsx
import { ChatBubble, ChatBubbleList, Input, Button, Pulse } from '@odyssee/components';

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
        <ChatBubbleList>
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
        </ChatBubbleList>
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

## Complete Example: Customer Support Chat

```tsx
import { ChatBubble, ChatBubbleList, Card, Badge, Pulse } from '@odyssee/components';

const SupportChat = () => {
  const chatHistory = [
    {
      id: 1,
      sender: 'bot',
      message: 'Hello! Welcome to our support center. How can I assist you today?',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
      timestamp: '10:00 AM',
      status: 'read'
    },
    {
      id: 2,
      sender: 'user',
      message: 'Hi! I am having trouble accessing my account.',
      timestamp: '10:02 AM',
      status: 'read'
    },
    {
      id: 3,
      sender: 'bot',
      title: 'Account Recovery Options',
      content: [
        { type: 'text', content: 'I can help with that! Here are your options:' },
        { type: 'link', content: 'Reset your password', href: '/reset-password' },
        { type: 'link', content: 'Verify your email', href: '/verify-email' },
        { type: 'link', content: 'Contact support team', href: '/contact' }
      ],
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
      timestamp: '10:02 AM',
      status: 'read'
    },
    {
      id: 4,
      sender: 'user',
      message: 'I will try resetting my password. Thank you!',
      timestamp: '10:05 AM',
      status: 'delivered'
    },
    {
      id: 5,
      sender: 'bot',
      message: 'You are welcome! If you need further assistance, feel free to ask.',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
      timestamp: '10:05 AM',
      status: 'sent'
    }
  ];

  return (
    <Card title='Customer Support' size='lg'>
      <div class='flex items-center gap-2 mb-4 pb-4 border-b dark:border-neutral-700'>
        <Badge variant='soft' color='success' dot>Online</Badge>
        <span class='text-sm text-gray-600 dark:text-gray-400'>
          Typically responds in a few minutes
        </span>
      </div>

      <div class='h-96 overflow-y-auto pr-2'>
        <ChatBubbleList spacing='md'>
          {chatHistory.map(chat => (
            <ChatBubble
              key={chat.id}
              message={chat.message}
              title={chat.title}
              content={chat.content}
              sender={chat.sender}
              align={chat.sender === 'user' ? 'right' : 'left'}
              variant={chat.sender === 'user' ? 'primary' : 'default'}
              avatar={chat.avatar}
              timestamp={chat.timestamp}
              showTimestamp={true}
              status={chat.status}
              showStatus={chat.sender === 'user'}
            />
          ))}
        </ChatBubbleList>
      </div>
    </Card>
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

```tsx
// Accessibility features are built-in
const accessibleChat = (
  <ChatBubble
    message='Accessible message'
    avatarAlt='Customer Support Agent John'
    status='read'
    showStatus={true}
    // All ARIA and semantic HTML handled automatically
  />
);
```

## Best Practices

### ✅ Do

- Use appropriate alignment (left for bot, right for user)
- Provide avatar images or initials for context
- Show timestamps for important conversations
- Use status indicators for user messages
- Keep message widths reasonable with maxWidth

```tsx
// Good: Clear sender identification and context
const goodChat = (
  <ChatBubbleList>
    <BotChatBubble
      message='How can I help you?'
      avatarInitials='CS'
      timestamp='2:30 PM'
      showTimestamp={true}
    />
    <UserChatBubble
      message='I need assistance'
      timestamp='2:32 PM'
      showTimestamp={true}
      status='read'
      showStatus={true}
    />
  </ChatBubbleList>
);
```

### ❌ Don't

- Don't mix alignment conventions (bot right, user left)
- Don't omit avatars in multi-participant chats
- Don't use very long messages without line breaks
- Don't forget to handle error states
- Don't overflow container widths

```tsx
// Bad: Inconsistent alignment and no context
const badChat = (
  <ChatBubbleList>
    <ChatBubble message='Message' align='right' /> {/* Bot on right? */}
    <ChatBubble message='Another message' align='left' /> {/* User on left? */}
    <ChatBubble message='Very very very long message that goes on and on without any consideration for readability or layout' />
  </ChatBubbleList>
);

// Better: Consistent and clear
const betterChat = (
  <ChatBubbleList>
    <BotChatBubble message='Bot message' avatarInitials='AI' />
    <UserChatBubble message='User message' />
  </ChatBubbleList>
);
```

## Use Cases

### Customer Support

```tsx
const SupportWidget = () => {
  return (
    <div class='fixed bottom-4 right-4 w-96 shadow-xl rounded-lg overflow-hidden'>
      <div class='bg-blue-600 text-white p-4'>
        <h3 class='font-semibold'>Customer Support</h3>
        <p class='text-sm'>We typically reply in a few minutes</p>
      </div>
      <div class='bg-white dark:bg-neutral-900 h-96 overflow-y-auto p-4'>
        <ChatBubbleList>
          <BotChatBubble
            message='Hello! How can we help you today?'
            avatarInitials='CS'
          />
        </ChatBubbleList>
      </div>
    </div>
  );
};
```

### Team Chat

```tsx
const TeamChat = ({ messages }) => {
  return (
    <ChatBubbleList spacing='lg'>
      {messages.map(msg => (
        <ChatBubble
          key={msg.id}
          message={msg.text}
          avatar={msg.user.avatar}
          avatarAlt={msg.user.name}
          timestamp={msg.createdAt}
          showTimestamp={true}
          align={msg.userId === currentUserId ? 'right' : 'left'}
          variant={msg.userId === currentUserId ? 'primary' : 'default'}
        />
      ))}
    </ChatBubbleList>
  );
};
```

### AI Assistant

```tsx
const AIChat = () => {
  const conversation = [
    {
      sender: 'bot',
      title: 'AI Assistant',
      content: [
        { type: 'text', content: 'I can help you with:' },
        { type: 'list', content: 'Writing and editing content' },
        { type: 'list', content: 'Answering questions' },
        { type: 'list', content: 'Providing recommendations' }
      ],
      avatarInitials: 'AI'
    },
    {
      sender: 'user',
      message: 'Can you help me write a blog post?',
      avatarInitials: 'You'
    },
    {
      sender: 'bot',
      message: 'Of course! I would be happy to help. What topic would you like to write about?',
      avatarInitials: 'AI'
    }
  ];

  return (
    <Card title='AI Assistant' size='lg'>
      <ChatBubbleList>
        {conversation.map((msg, idx) => (
          <ChatBubble
            key={idx}
            message={msg.message}
            title={msg.title}
            content={msg.content}
            sender={msg.sender}
            align={msg.sender === 'user' ? 'right' : 'left'}
            variant={msg.sender === 'user' ? 'primary' : 'default'}
            avatarInitials={msg.avatarInitials}
          />
        ))}
      </ChatBubbleList>
    </Card>
  );
};
```

## Styling & Theming

All chat bubble styles use Tailwind CSS and support dark mode automatically.

### Custom Colors

```tsx
// Custom variant with Tailwind classes
const customBubble = (
  <ChatBubble
    message='Custom styled message'
    className='[&_.rounded-2xl]:bg-purple-600 [&_.text-sm]:text-white'
    align='right'
  />
);
```

### Dark Mode

```tsx
// Dark mode support is automatic
const darkModeChat = (
  <ChatBubbleList>
    <BotChatBubble
      message='Dark mode enabled'
      avatarInitials='AI'
      // Automatically uses dark:bg-neutral-900, dark:border-neutral-700, etc.
    />
  </ChatBubbleList>
);
```

## TypeScript

Full TypeScript support with complete type definitions.

```tsx
import type { ChatBubbleProps, ChatContentItem, ChatStatus } from '@odyssee/components';

// Type-safe content items
const contentItems: ChatContentItem[] = [
  { type: 'text', content: 'Hello!' },
  { type: 'link', content: 'Click here', href: '/link' },
  { type: 'list', content: 'List item' }
];

// Type-safe props
const props: ChatBubbleProps = {
  message: 'Hello',
  sender: 'bot',
  align: 'left',
  status: 'delivered',
  showStatus: true,
  variant: 'default',
  avatarInitials: 'AI',
  timestamp: '10:00 AM',
  showTimestamp: true
};

const bubble = <ChatBubble {...props} />;

// Type-safe status
const status: ChatStatus = 'read';
const statusBubble = (
  <ChatBubble message='Message' status={status} showStatus={true} />
);
```

## Related Components

- [Avatar](/components/avatar) - Avatar component for users
- [Card](/components/card) - Container for chat interfaces
- [Input](/components/input) - Message input field
- [Badge](/components/badge) - Online status indicators

---

**Version**: 1.0.0  
**Last Updated**: January 2025