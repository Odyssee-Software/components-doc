---
title: Carousel
description: A slideshow component for cycling through images, content, and media with smooth transitions
---

# Carousel

Showcase content in a dynamic slideshow format with smooth transitions, autoplay, and multiple navigation options. Perfect for hero sections, image galleries, and featured content. Built for Pulse Framework with full reactivity support.

## Import

```tsx
import { Carousel, AutoPlayCarousel, ThumbnailCarousel } from '@odyssee/components';
import type { CarouselSlide } from '@odyssee/components';
```

## Basic Usage

<LiveCodeEditor :defaultCode="`const slides = [
  { content: 'First Slide' },
  { content: 'Second Slide' },
  { content: 'Third Slide' }
];

<Carousel slides={slides} />`" />

## With Images

<LiveCodeEditor :defaultCode="`const imageSlides = [
  {
    content: (
      <img
        src='https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800'
        alt='Nature 1'
        class='w-full h-full object-cover'
      />
    )
  },
  {
    content: (
      <img
        src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
        alt='Nature 2'
        class='w-full h-full object-cover'
      />
    )
  },
  {
    content: (
      <img
        src='https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800'
        alt='Nature 3'
        class='w-full h-full object-cover'
      />
    )
  }
];

<Carousel slides={imageSlides} minHeight='min-h-96' />`" />

## AutoPlay

Enable automatic slide transitions.

<LiveCodeEditor :defaultCode="`const slides = [
  { content: 'Slide 1 - Auto-advancing' },
  { content: 'Slide 2 - Every 3 seconds' },
  { content: 'Slide 3 - Loops continuously' }
];

<AutoPlayCarousel
  slides={slides}
  interval={3000}
  loop={true}
/>`" />

## With Loop

Enable infinite looping through slides.

<LiveCodeEditor :defaultCode="`const slides = [
  { content: 'First Slide' },
  { content: 'Second Slide' },
  { content: 'Last Slide - Will loop back' }
];

<Carousel
  slides={slides}
  loop={true}
  showInfo={true}
/>`" />

## Control Variants

### Default Controls

Standard controls positioned outside the carousel.

<LiveCodeEditor :defaultCode="`const slides = [
  { content: 'Slide with Default Controls' },
  { content: 'Arrow buttons with shadow' },
  { content: 'Positioned at middle edges' }
];

<Carousel
  slides={slides}
  controlsVariant='default'
/>`" />

### Overlay Controls

Controls overlaid on the carousel content.

<LiveCodeEditor :defaultCode="`const slides = [
  { content: 'Overlay Controls Style' },
  { content: 'Buttons over content' },
  { content: 'Great for full-width images' }
];

<Carousel
  slides={slides}
  controlsVariant='overlay'
/>`" />

## Pagination

Show dot indicators for navigation.

<LiveCodeEditor :defaultCode="`const slides = [
  { content: 'Slide 1' },
  { content: 'Slide 2' },
  { content: 'Slide 3' },
  { content: 'Slide 4' }
];

<Carousel
  slides={slides}
  showPagination={true}
/>`" />

## Info Counter

Display current slide number and total.

<LiveCodeEditor :defaultCode="`const slides = [
  { content: 'Slide 1 of 5' },
  { content: 'Slide 2 of 5' },
  { content: 'Slide 3 of 5' },
  { content: 'Slide 4 of 5' },
  { content: 'Slide 5 of 5' }
];

<Carousel
  slides={slides}
  showInfo={true}
  showPagination={false}
/>`" />

## With Thumbnails

### Bottom Thumbnails

<LiveCodeEditor :defaultCode="`const slides = [
  {
    content: 'Main Content 1',
    thumbnail: 'Thumb 1'
  },
  {
    content: 'Main Content 2',
    thumbnail: 'Thumb 2'
  },
  {
    content: 'Main Content 3',
    thumbnail: 'Thumb 3'
  },
  {
    content: 'Main Content 4',
    thumbnail: 'Thumb 4'
  }
];

<ThumbnailCarousel
  slides={slides}
  thumbnailsPosition='bottom'
/>`" />

### Side Thumbnails

```tsx
const slides: CarouselSlide[] = [
  {
    content: (
      <img src="image1.jpg" alt="Image 1" class="w-full h-full object-cover" />
    ),
    thumbnail: (
      <img src="thumb1.jpg" alt="Thumbnail 1" class="w-full h-full object-cover" />
    )
  },
  // ... more slides
];

const carousel = (
  <Carousel
    slides={slides}
    showThumbnails={true}
    thumbnailsPosition="right"
  />
);
```

## Reactive State

Control carousel state with Pulse signals.

```tsx
import { Carousel, Button, Pulse } from '@odyssee/components';
import type { CarouselSlide } from '@odyssee/components';

const InteractiveCarousel = () => {
  const currentSlide = Pulse.signal(0);
  const isPlaying = Pulse.signal(false);

  const slides: CarouselSlide[] = [
    { content: 'Slide 1' },
    { content: 'Slide 2' },
    { content: 'Slide 3' },
    { content: 'Slide 4' }
  ];

  const goToFirst = () => currentSlide(0);
  const goToLast = () => currentSlide(slides.length - 1);
  const toggleAutoPlay = () => isPlaying(!isPlaying());

  // Watch for slide changes
  Pulse.effect(() => {
    console.log('Current slide:', currentSlide());
  });

  return (
    <div class="space-y-4">
      <Carousel
        slides={slides}
        currentSlide={currentSlide}
        autoPlay={isPlaying}
        loop={true}
        onChange={(index) => console.log('Changed to:', index)}
      />

      <div class="flex gap-2 justify-center">
        <Button onClick={goToFirst} size="sm">First</Button>
        <Button onClick={goToLast} size="sm">Last</Button>
        <Button onClick={toggleAutoPlay} variant="outline" size="sm">
          {isPlaying() ? 'Pause' : 'Play'}
        </Button>
      </div>
    </div>
  );
};
```

## Rich Content Slides

Create slides with complex HTML content.

```tsx
const productSlides: CarouselSlide[] = [
  {
    id: 'product-1',
    content: (
      <div class="flex flex-col items-center justify-center h-full bg-gradient-to-br from-blue-50 to-blue-100 p-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Premium Headphones</h2>
        <p class="text-gray-600 mb-6 text-center max-w-md">
          Experience crystal-clear sound with our latest wireless headphones
        </p>
        <Button color="primary" size="lg">Shop Now</Button>
      </div>
    ),
    thumbnail: (
      <img src="headphones-thumb.jpg" alt="Headphones" class="w-full h-full object-cover" />
    )
  },
  {
    id: 'product-2',
    content: (
      <div class="flex flex-col items-center justify-center h-full bg-gradient-to-br from-purple-50 to-purple-100 p-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Smart Watch</h2>
        <p class="text-gray-600 mb-6 text-center max-w-md">
          Track your fitness and stay connected on the go
        </p>
        <Button color="primary" size="lg">Learn More</Button>
      </div>
    ),
    thumbnail: (
      <img src="watch-thumb.jpg" alt="Watch" class="w-full h-full object-cover" />
    )
  }
];

const productCarousel = (
  <Carousel
    slides={productSlides}
    autoPlay={true}
    interval={5000}
    loop={true}
    showThumbnails={true}
    minHeight="min-h-[500px]"
  />
);
```

## Complete Example: Hero Carousel

A full-featured hero carousel for landing pages.

```tsx
import { Carousel, Button, Badge, Pulse } from '@odyssee/components';
import type { CarouselSlide } from '@odyssee/components';

const HeroCarousel = () => {
  const currentSlide = Pulse.signal(0);

  const heroSlides: CarouselSlide[] = [
    {
      id: 'hero-1',
      content: (
        <div class="relative h-full">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200"
            alt="Nature"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div class="text-center text-white px-4">
              <Badge variant="soft" color="primary" className="mb-4">New Collection</Badge>
              <h1 class="text-5xl font-bold mb-4">Explore Nature</h1>
              <p class="text-xl mb-6">Discover the beauty of the outdoors</p>
              <div class="flex gap-3 justify-center">
                <Button color="primary" size="lg">Get Started</Button>
                <Button variant="outline" size="lg" className="text-white border-white">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'hero-2',
      content: (
        <div class="relative h-full">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200"
            alt="Mountains"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div class="text-center text-white px-4">
              <Badge variant="soft" color="success" className="mb-4">Limited Offer</Badge>
              <h1 class="text-5xl font-bold mb-4">Mountain Adventures</h1>
              <p class="text-xl mb-6">Reach new heights with our guided tours</p>
              <Button color="success" size="lg">Book Now</Button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'hero-3',
      content: (
        <div class="relative h-full">
          <img
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200"
            alt="Sunset"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div class="text-center text-white px-4">
              <Badge variant="soft" color="warning" className="mb-4">Trending</Badge>
              <h1 class="text-5xl font-bold mb-4">Sunset Views</h1>
              <p class="text-xl mb-6">Experience breathtaking moments</p>
              <Button color="warning" size="lg">Explore</Button>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <Carousel
      slides={heroSlides}
      currentSlide={currentSlide}
      autoPlay={true}
      interval={5000}
      loop={true}
      controlsVariant="overlay"
      showPagination={true}
      minHeight="min-h-[600px]"
    />
  );
};
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `slides` | `CarouselSlide[]` | **Required** | Array of slide items |
| `currentSlide` | `number \| Signal<number>` | `0` | Current active slide index |
| `autoPlay` | `boolean` | `false` | Enable automatic slide transitions |
| `interval` | `number` | `3000` | Autoplay interval in milliseconds |
| `loop` | `boolean` | `false` | Enable infinite looping |
| `showControls` | `boolean` | `true` | Show navigation controls |
| `showPagination` | `boolean` | `true` | Show pagination dots |
| `showInfo` | `boolean` | `false` | Show slide counter (e.g., "1/5") |
| `showThumbnails` | `boolean` | `false` | Show thumbnail navigation |
| `thumbnailsPosition` | `"bottom" \| "right"` | `"bottom"` | Position of thumbnails |
| `minHeight` | `string` | `"min-h-96"` | Minimum height CSS class |
| `controlsVariant` | `"default" \| "overlay"` | `"default"` | Style of navigation controls |
| `draggable` | `boolean` | `false` | Enable swipe/drag navigation |
| `rtl` | `boolean` | `false` | Enable right-to-left direction |
| `slidesPerView` | `number` | `1` | Number of slides visible at once |
| `onChange` | `(index: number) => void` | - | Callback when slide changes |
| `onSlideChange` | `(index: number) => void` | - | Alias for onChange |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | Auto-generated | HTML id attribute |
| `style` | `string \| object` | - | Inline styles |

### CarouselSlide Interface

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `id` | `string` | - | Unique identifier for slide |
| `content` | `HTMLElement \| string` | **Required** | Slide content |
| `thumbnail` | `HTMLElement \| string` | - | Thumbnail for navigation |

## Accessibility

The Carousel component follows accessibility best practices:

- ✅ Proper ARIA labels on navigation buttons
- ✅ Screen reader announcements for slide changes
- ✅ Keyboard navigation support (arrows, tab)
- ✅ Disabled state properly communicated
- ✅ Semantic HTML structure
- ✅ Pause on hover for autoplay carousels

```tsx
// Accessibility features are built-in
const accessibleCarousel = (
  <Carousel
    slides={slides}
    // Navigation buttons have aria-label
    // Slides are properly announced
    // Keyboard navigation works automatically
  />
);

// For autoplay, pause on hover
const autoplayAccessible = (
  <Carousel
    slides={slides}
    autoPlay={true}
    // Consider adding pause on hover for better UX
    // Users can stop carousel if needed
  />
);
```

## Best Practices

### ✅ Do

- Use high-quality images with consistent dimensions
- Provide meaningful alt text for images
- Keep slide count reasonable (3-7 slides ideal)
- Enable loop for autoplay carousels
- Use appropriate transition intervals (3-5 seconds)

```tsx
// Good: Optimized images and clear structure
const goodCarousel = (
  <Carousel
    slides={[
      {
        content: (
          <img
            src="optimized-image-1.webp"
            alt="Product showcase - Premium headphones"
            class="w-full h-full object-cover"
          />
        ),
        thumbnail: <img src="thumb-1.webp" alt="Headphones thumbnail" />
      },
      // ... 4-6 more slides
    ]}
    autoPlay={true}
    interval={4000}
    loop={true}
    showThumbnails={true}
    minHeight="min-h-[500px]"
  />
);
```

### ❌ Don't

- Don't use too many slides (10+)
- Don't auto-advance too quickly (<2 seconds)
- Don't hide controls on mobile
- Don't use low-quality or inconsistent images
- Don't autoplay without loop enabled

```tsx
// Bad: Too many slides, too fast
const badCarousel = (
  <Carousel
    slides={arrayOf50Slides}
    autoPlay={true}
    interval={1000} // Too fast!
    loop={false} // Will stop after last slide
    showControls={false} // Users can't navigate manually
  />
);

// Better: Reasonable count and timing
const betterCarousel = (
  <Carousel slides={arrayOf5Slides} autoPlay={true} interval={4000} loop={true} />
);
```

## Use Cases

### Image Gallery

```tsx
const ImageGallery = ({ images }) => {
  const slides = images.map(img => ({
    id: img.id,
    content: (
      <div class="relative h-full">
        <img
          src={img.url}
          alt={img.title}
          class="w-full h-full object-cover"
        />
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <h3 class="text-white text-xl font-semibold">{img.title}</h3>
          <p class="text-white/80 text-sm">{img.description}</p>
        </div>
      </div>
    ),
    thumbnail: (
      <img src={img.thumbnail} alt={img.title} class="w-full h-full object-cover" />
    )
  }));

  return (
    <Carousel
      slides={slides}
      showThumbnails={true}
      thumbnailsPosition="bottom"
      minHeight="min-h-[600px]"
    />
  );
};
```

### Product Showcase

```tsx
const ProductShowcase = ({ product }) => {
  const slides = product.images.map((img, index) => ({
    id: `${product.id}-${index}`,
    content: (
      <div class="flex items-center justify-center h-full bg-white p-8">
        <img
          src={img.url}
          alt={`${product.name} - View ${index + 1}`}
          class="max-h-full max-w-full object-contain"
        />
      </div>
    ),
    thumbnail: (
      <img src={img.thumbnail} alt={`Thumbnail ${index + 1}`} class="w-full h-full object-cover" />
    )
  }));

  return (
    <div class="max-w-4xl mx-auto">
      <Carousel
        slides={slides}
        showThumbnails={true}
        controlsVariant="default"
        minHeight="min-h-[500px]"
      />
      <div class="mt-6">
        <h2 class="text-2xl font-bold mb-2">{product.name}</h2>
        <p class="text-gray-600 mb-4">{product.description}</p>
        <Button color="primary" size="lg">Add to Cart - ${product.price}</Button>
      </div>
    </div>
  );
};
```

### Testimonials

```tsx
const TestimonialCarousel = ({ testimonials }) => {
  const slides = testimonials.map(testimonial => ({
    id: testimonial.id,
    content: (
      <div class="flex flex-col items-center justify-center h-full p-12 bg-gradient-to-br from-blue-50 to-purple-50">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          class="w-20 h-20 rounded-full mb-4 ring-4 ring-white shadow-lg"
        />
        <div class="max-w-2xl text-center">
          <p class="text-xl text-gray-700 mb-4 italic">
            "{testimonial.quote}"
          </p>
          <p class="font-semibold text-gray-900">{testimonial.name}</p>
          <p class="text-gray-600">{testimonial.role}</p>
          <div class="flex gap-1 mt-2 justify-center">
            {[...Array(5)].map((_, i) => (
              <span key={i} class="text-yellow-400">★</span>
            ))}
          </div>
        </div>
      </div>
    )
  }));

  return (
    <Card>
      <h2 class="text-2xl font-bold mb-6 text-center">What Our Customers Say</h2>
      <Carousel
        slides={slides}
        autoPlay={true}
        interval={6000}
        loop={true}
        showPagination={true}
        minHeight="min-h-[400px]"
      />
    </Card>
  );
};
```

## Styling & Theming

All carousel styles use Tailwind CSS and support dark mode automatically.

### Custom Styling

```tsx
// Custom height and styling
const customCarousel = (
  <Carousel
    slides={slides}
    minHeight="min-h-[700px]"
    className="rounded-xl shadow-2xl overflow-hidden"
  />
);

// Custom slide content styling
const styledSlides = slides.map(slide => ({
  ...slide,
  content: (
    <div class="h-full bg-gradient-to-br from-indigo-500 to-purple-600 p-12">
      <div class="text-white">
        {slide.content}
      </div>
    </div>
  )
}));

const styledCarousel = (
  <Carousel slides={styledSlides} controlsVariant="overlay" />
);
```

### Dark Mode

```tsx
// Dark mode support is automatic
const darkModeCarousel = (
  <Carousel
    slides={slides}
    // Controls adapt to dark mode
    // Thumbnails use dark:bg-neutral-900
    // Text uses dark:text-white
  />
);
```

## TypeScript

Full TypeScript support with complete type definitions.

```tsx
import type { CarouselProps, CarouselSlide } from '@odyssee/components';

// Type-safe slide definition
const slides: CarouselSlide[] = [
  {
    id: 'slide-1',
    content: (
      <div>Slide 1 content</div>
    ),
    thumbnail: 'Thumbnail 1'
  },
  {
    id: 'slide-2',
    content: 'Slide 2',
    thumbnail: (
      <img src="thumb.jpg" alt="Thumbnail" />
    )
  }
];

// Type-safe props
const props: CarouselProps = {
  slides,
  currentSlide: 0,
  autoPlay: true,
  interval: 5000,
  loop: true,
  showControls: true,
  showPagination: true,
  showThumbnails: false,
  controlsVariant: 'default',
  minHeight: 'min-h-96',
  onChange: (index: number) => {
    console.log('Changed to slide:', index);
  }
};

const carousel = <Carousel {...props} />;

// Type-safe with signals
const currentSlide = Pulse.signal<number>(0);
const carouselWithSignal = (
  <Carousel slides={slides} currentSlide={currentSlide} />
);
```

## Related Components

- [Card](/components/card) - Container for carousel
- [Badge](/components/badge) - Labels for slides
- [Button](/components/button) - Custom navigation buttons

---

**Version**: 1.0.0  
**Last Updated**: January 2025
