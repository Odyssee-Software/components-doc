# Kbd

A keyboard key component for displaying keyboard shortcuts, commands, and key combinations. Supports multiple visual variants, sizes, icons, square keys, and grouped key sequences. Useful for documentation, tooltips, modals, and any UI where keyboard input is referenced.

---

## Import

```tsx
import { Kbd } from '@odyssee/components';
// Helpers: Kbd.Group, Kbd.Cmd, Kbd.Option, Kbd.Shift, Kbd.ArrowUp, etc.
```

---

## Examples

### Basic Keyboard Keys

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <Kbd>Ctrl</Kbd>
      <Kbd>Alt</Kbd>
      <Kbd>Shift</Kbd>
      <Kbd>Enter</Kbd>
      <Kbd>Esc</Kbd>
      <Kbd>Tab</Kbd>
      <Kbd>Space</Kbd>
      <Kbd>Delete</Kbd>
      <Kbd>A</Kbd>
      <Kbd>S</Kbd>
      <Kbd>D</Kbd>
      <Kbd>F</Kbd>
    </Container>
  )
}`" />

---

### Variants

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      {/* Text (light) */}
      <Kbd variant='text'>Ctrl</Kbd>
      <Kbd variant='text'>A</Kbd>
      <Kbd variant='text'>Enter</Kbd>
      {/* Text (dark) */}
      <Kbd variant='text-dark'>Ctrl</Kbd>
      <Kbd variant='text-dark'>A</Kbd>
      <Kbd variant='text-dark'>Enter</Kbd>
      {/* Solid (default) */}
      <Kbd variant='solid'>Ctrl</Kbd>
      <Kbd variant='solid'>A</Kbd>
      <Kbd variant='solid'>Enter</Kbd>
      {/* Bordered */}
      <Kbd variant='bordered'>Ctrl</Kbd>
      <Kbd variant='bordered'>A</Kbd>
      <Kbd variant='bordered'>Enter</Kbd>
      {/* Shadow */}
      <Kbd variant='shadow'>Ctrl</Kbd>
      <Kbd variant='shadow'>A</Kbd>
      <Kbd variant='shadow'>Enter</Kbd>
    </Container>
  )
}`" />

---

### Sizes

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <Kbd size='xs'>A</Kbd>
      <Kbd size='sm'>A</Kbd>
      <Kbd size='md'>A</Kbd>
      <Kbd size='lg'>A</Kbd>
    </Container>
  );
}`" />

---

### With Icon and Square

<LiveCodeEditor :defaultCode="`export default function Demo(){
  const ArrowUpIcon = (
    <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
      <path d='m18 15-6-6-6 6'></path>
    </svg>
  );
  return (
    <Container>
      <Kbd icon={ArrowUpIcon} square />
    </Container>
  );
}`" />

---

### Group of Keys (Kbd.Group)

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <Kbd.Group keys={['Ctrl', 'B']} separator='+' />
    </Container>
  );
}`" />

---

### Group with Custom Separator

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <Kbd.Group keys={['Shift', 'and', 'B']} separator=' and ' />
    </Container>
  );
}`" />

---

### Using Helper Components

<LiveCodeEditor :defaultCode="`export default function Demo(){
  return (
    <Container>
      <Kbd.Cmd />
      <Kbd.Option />
      <Kbd.Shift />
      <Kbd.ArrowUp />
      <Kbd.ArrowDown />
      <Kbd.ArrowLeft />
      <Kbd.ArrowRight />
      <Kbd.Enter />
      <Kbd.Esc />
      <Kbd.Tab />
      <Kbd.Space />
      <Kbd.Delete />
      <Kbd.Backspace />
    </Container>
  )
}`" />

---

## Table des props

### Kbd

| Prop       | Type                                                      | Default    | Description                                               |
|------------|-----------------------------------------------------------|------------|-----------------------------------------------------------|
| `children` | `string` \| `HTMLElement`                                 | –          | Key label or content.                                     |
| `variant`  | `"text"` \| `"text-dark"` \| `"solid"` \| `"bordered"` \| `"shadow"` | `"solid"`  | Visual style of the key.                                  |
| `size`     | `"xs"` \| `"sm"` \| `"md"` \| `"lg"`                      | `"sm"`     | Size of the key.                                          |
| `icon`     | `HTMLElement` \| `string`                                 | –          | Icon to display before the key label.                     |
| `square`   | `boolean`                                                 | `false`    | Makes the key square (useful for icons).                  |
| `className`| `string`                                                  | –          | Additional CSS classes.                                   |
| `id`       | `string`                                                  | auto-gen   | HTML id attribute.                                        |
| `style`    | `string`                                                  | –          | Inline styles.                                            |

### Kbd.Group

| Prop        | Type                                                      | Default    | Description                                               |
|-------------|-----------------------------------------------------------|------------|-----------------------------------------------------------|
| `keys`      | `(string \| HTMLElement \| Kbd.Props)[]`                  | –          | Array of keys to display in the group.                    |
| `separator` | `string`                                                  | `"+"`      | Separator string between keys.                            |
| `variant`   | `"text"` \| `"text-dark"` \| `"solid"` \| `"bordered"` \| `"shadow"` | `"solid"`  | Variant for all keys in the group.                        |
| `size`      | `"xs"` \| `"sm"` \| `"md"` \| `"lg"`                      | `"sm"`     | Size for all keys in the group.                           |
| `className` | `string`                                                  | –          | Additional CSS classes.                                   |
| `id`        | `string`                                                  | auto-gen   | HTML id attribute.                                        |
| `style`     | `string`                                                  | –          | Inline styles.                                            |

### Helper Components

- `Kbd.Cmd`, `Kbd.Option`, `Kbd.Shift`, `Kbd.ArrowUp`, `Kbd.ArrowDown`, `Kbd.ArrowLeft`, `Kbd.ArrowRight`, `Kbd.Enter`, `Kbd.Esc`, `Kbd.Tab`, `Kbd.Space`, `Kbd.Delete`, `Kbd.Backspace`  
  → Prend les mêmes props que `Kbd` (sauf `children`, déjà défini).

---

## Implementation Notes

- **Variants**:  
  - `solid` (default): filled background, borderless.
  - `bordered`: white background, border.
  - `shadow`: white background, border, subtle shadow.
  - `text`: light text, no background.
  - `text-dark`: dark text, no background.
- **Sizes**:  
  - `xs`, `sm`, `md`, `lg` — affectent la taille, le padding, la police.
- **Icons**:  
  - Utilisez `icon` pour afficher une icône à gauche du label.  
  - `square` force la touche à être carrée (utile pour les flèches, Cmd, etc.).
- **Groupes**:  
  - `Kbd.Group` permet d’afficher des séquences de touches avec séparateur personnalisable.
  - Chaque élément du tableau `keys` peut être une string, un élément, ou un objet de props.
- **Helpers**:  
  - Fournit des composants pour les touches courantes (Cmd, Option, Shift, flèches, etc.), déjà stylés et avec icône si besoin.

---

## Accessibilité

- Les touches sont rendues avec l’élément sémantique `<kbd>`.
- Les groupes utilisent `<span>` avec des séparateurs textuels.
- Les icônes SVG sont décoratives et ne nécessitent pas d’accessibilité supplémentaire.
- Pour les raccourcis importants, accompagnez toujours d’un texte explicite dans l’UI.

---

## Best Practices

- Utilisez `Kbd` pour référencer des raccourcis clavier dans vos docs, tooltips, modals, etc.
- Préférez les helpers (`Kbd.Cmd`, `Kbd.Shift`, etc.) pour les touches spéciales.
- Pour les séquences, utilisez `Kbd.Group` pour une présentation claire.
- Adaptez la variante et la taille au contexte visuel de votre application.
- N’utilisez pas les touches seules pour transmettre une information essentielle : accompagnez-les d’un texte ou d’une explication.

---

## Related

- [MDN: kbd element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd)
- [Pulse Framework](https://github.com/odyssee-software/pulse-framework)
- [Tailwind CSS Typography](https://tailwindcss.com/docs/font-family)

---
