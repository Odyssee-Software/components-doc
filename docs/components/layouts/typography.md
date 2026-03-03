# Typography

A collection of semantic text and typography components for consistent, accessible, and flexible text rendering. Includes headings, body text, lead, muted, small, strong, emphasis, code, pre, gradient text, blockquotes, and more.

---

## Import

```ts
import {
  H1, H2, H3, H4, H5, H6,
  Text, Lead, Muted, Small, Strong, Em, Mark, Code, Pre,
  GradientText, Blockquote
} from '@odyssee/components';
```

---

## Headings

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <H1>Heading 1 - The quick brown fox</H1>
      <H2>Heading 2 - The quick brown fox</H2>
      <H3>Heading 3 - The quick brown fox</H3>
      <H4>Heading 4 - The quick brown fox</H4>
      <H5>Heading 5 - The quick brown fox</H5>
      <H6>Heading 6 - The quick brown fox</H6>
    </Container>
  );
}
`" />

---

## Text Variants

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Text>This is regular body text with normal styling.</Text>
      <Lead>This is lead paragraph text, typically used for introductions.</Lead>
      <Muted>This is muted secondary text with reduced emphasis.</Muted>
      <Small>This is small fine print text.</Small>
    </Container>
  );
}
`" />

---

## Text Sizes

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Text size='xs'>Extra small text (xs)</Text>
      <Text size='sm'>Small text (sm)</Text>
      <Text size='base'>Base text (base)</Text>
      <Text size='lg'>Large text (lg)</Text>
      <Text size='xl'>Extra large text (xl)</Text>
      <Text size='2xl'>2XL text (2xl)</Text>
      <Text size='3xl'>3XL text (3xl)</Text>
    </Container>
  );
}
`" />

---

## Font Weights

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Text weight='thin'>Thin weight text</Text>
      <Text weight='light'>Light weight text</Text>
      <Text weight='normal'>Normal weight text</Text>
      <Text weight='medium'>Medium weight text</Text>
      <Text weight='semibold'>Semibold weight text</Text>
      <Text weight='bold'>Bold weight text</Text>
      <Text weight='extrabold'>Extra bold weight text</Text>
      <Text weight='black'>Black weight text</Text>
    </Container>
  );
}
`" />

---

## Text Alignment

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Text align='left'>Left aligned text</Text>
      <Text align='center'>Center aligned text</Text>
      <Text align='right'>Right aligned text</Text>
      <Text align='justify'>
        Justified text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
    </Container>
  );
}
`" />

---

## Text Transformations

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Text uppercase>uppercase text</Text>
      <Text lowercase>LOWERCASE TEXT</Text>
      <Text capitalize>capitalize each word</Text>
      <Text truncate className='max-w-xs'>
        This is a very long text that will be truncated with ellipsis when it overflows the container
      </Text>
    </Container>
  );
}
`" />

---

## Inline Text Elements

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Text>You can use <Strong>strong/bold text</Strong> for emphasis.</Text>
      <Text>You can use <Em>emphasized/italic text</Em> for subtle emphasis.</Text>
      <Text>You can <Mark>highlight text</Mark> with a background color.</Text>
      <Text>Inline code: <Code>const x = 42;</Code></Text>
      <Text>You can show <del>deleted text</del> with strikethrough.</Text>
      <Text>You can show <ins>inserted text</ins> with underline.</Text>
    </Container>
  );
}
`" />

---

## Code Blocks

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Text>
        Use the <Code>Array.map()</Code> method to transform arrays.
      </Text>
      <Pre>{\`function greet(name) {
  console.log('Hello, ' + name);
  return true;
}\`}</Pre>
    </Container>
  );
}
`" />

---

## Gradient Text

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <GradientText from='blue-500' to='purple-600' size='3xl' weight='bold'>
        Blue to Purple Gradient
      </GradientText>
      <GradientText from='pink-500' to='red-500' size='2xl' weight='bold'>
        Pink to Red Gradient
      </GradientText>
      <GradientText from='green-400' to='blue-500' size='2xl' weight='bold'>
        Green to Blue Gradient
      </GradientText>
      <GradientText from='yellow-400' via='orange-500' to='red-600' size='2xl' weight='bold'>
        Three Color Gradient
      </GradientText>
    </Container>
  );
}
`" />

---

## Blockquotes

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Blockquote>
        The best way to predict the future is to invent it.
      </Blockquote>
      <Blockquote cite='Alan Kay'>
        The best way to predict the future is to invent it.
      </Blockquote>
      <Blockquote variant='bordered' cite='Steve Jobs'>
        Design is not just what it looks like and feels like. Design is how it works.
      </Blockquote>
      <Blockquote variant='accent' cite='Linus Torvalds'>
        Talk is cheap. Show me the code.
      </Blockquote>
    </Container>
  );
}
`" />

---

## Line Clamp

<LiveCodeEditor :defaultCode="`export default function Demo() {
  return (
    <Container>
      <Text lineClamp={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Text>
      <Text lineClamp={3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </Text>
    </Container>
  );
}
`" />

---

## Props

### Headings (H1, H2, H3, H4, H5, H6)

| Name      | Type      | Default   | Description                       |
|-----------|-----------|-----------|-----------------------------------|
| children  | node      | —         | Content of the heading            |
| align     | string    | —         | Text alignment                    |
| color     | string    | —         | Text color                        |
| weight    | string    | varies    | Font weight                       |
| truncate  | boolean   | false     | Truncate with ellipsis            |
| uppercase | boolean   | false     | Uppercase text                    |
| lowercase | boolean   | false     | Lowercase text                    |
| capitalize| boolean   | false     | Capitalize first letter           |
| lineClamp | number    | —         | Max lines before truncating       |
| className | string    | —         | Additional CSS classes            |
| ...rest   | any       | —         | Other props                       |

### Text

| Name        | Type      | Default   | Description                       |
|-------------|-----------|-----------|-----------------------------------|
| children    | node      | —         | Content of the text               |
| align       | string    | —         | Text alignment                    |
| color       | string    | —         | Text color                        |
| weight      | string    | —         | Font weight                       |
| size        | string    | 'base'    | Font size                         |
| truncate    | boolean   | false     | Truncate with ellipsis            |
| uppercase   | boolean   | false     | Uppercase text                    |
| lowercase   | boolean   | false     | Lowercase text                    |
| capitalize  | boolean   | false     | Capitalize first letter           |
| lineClamp   | number    | —         | Max lines before truncating       |
| as          | string    | 'p'       | Element tag to render             |
| className   | string    | —         | Additional CSS classes            |
| ...rest     | any       | —         | Other props                       |

### Lead, Muted, Small

Same props as `Text`, with preset size and color.

### Inline Elements

- **Strong**: Renders `<strong>`, bold text.
- **Em**: Renders `<em>`, italic text.
- **Mark**: Renders `<mark>`, highlighted text.
- **Code**: Renders `<code>`, inline code.
- **Pre**: Renders `<pre>`, code block.
- **Del**: Renders `<del>`, deleted text.
- **Ins**: Renders `<ins>`, inserted text.
- **Underline**: Renders `<u>`, underlined text.
- **Strikethrough**: Renders `<s>`, strikethrough text.

### GradientText

| Name      | Type      | Default   | Description                       |
|-----------|-----------|-----------|-----------------------------------|
| from      | string    | —         | Gradient start color              |
| to        | string    | —         | Gradient end color                |
| via       | string    | —         | Optional middle color             |
| direction | string    | 'tl'      | Gradient direction                |
| ...Text   |           |           | All Text props except color       |

### Blockquote

| Name      | Type      | Default   | Description                       |
|-----------|-----------|-----------|-----------------------------------|
| children  | node      | —         | Quote content                     |
| cite      | string    | —         | Citation/author                   |
| variant   | string    | 'default' | Style variant                     |
| className | string    | —         | Additional CSS classes            |
| ...rest   | any       | —         | Other props                       |

---

## Accessibility

- All components use semantic HTML tags (`<h1>`, `<p>`, `<strong>`, etc.).
- Headings and text are accessible to screen readers.
- Use `Lead`, `Muted`, and `Small` for visual hierarchy, not for hiding important content.
- Ensure color contrast for readability.

---

## Best Practices

- Use semantic headings (`H1`–`H6`) for document structure.
- Use `Lead` for introductory paragraphs.
- Use `Muted` and `Small` for secondary or fine print text.
- Use `GradientText` for decorative headings or highlights.
- Use `Blockquote` for quotations, with `cite` for attribution.
- Use `truncate` and `lineClamp` for long text in constrained layouts.

---

## Subcomponents

- **H1, H2, H3, H4, H5, H6**: Headings
- **Text**: Body text
- **Lead**: Large lead paragraph
- **Muted**: Muted/secondary text
- **Small**: Fine print
- **Strong, Em, Mark, Code, Pre, Del, Ins, Underline, Strikethrough**: Inline elements
- **GradientText**: Text with gradient overlay
- **Blockquote**: Quotation with optional citation

---

<!--
This documentation is based strictly on the Typography component source and its playground examples.
If any prop or behavior is unclear, please clarify in the implementation.
-->
