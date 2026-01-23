// Auto-generated type definitions
// Do not edit manually - run npm run generate:types

/**
 * Odyssee Components
 * A comprehensive UI component library built with Pulse Framework and styled with Tailwind CSS + Preline
 */
import "./styles.css";
import "preline";
import "@preline/datepicker";
/**
 * Base types for Odyssee Components
 * Shared utility types and interfaces used across all components
 *
 * Note: Component-specific types are now co-located in their respective
 * component namespaces (e.g., Button.Props, Dropdown.Item, etc.)
 */
import type Pulse from "@odyssee-software/pulse-framework";
/**
 * Base component props extended by all components
 */
export interface BaseComponentProps {
    id?: string;
    className?: string;
    style?: Partial<CSSStyleDeclaration> | string;
    [key: string]: any;
}
/**
 * Component size variants (used across multiple components)
 */
export type Size = "xs" | "sm" | "md" | "lg" | "xl";
/**
 * Component color variants (used across multiple components)
 */
export type Color = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
/**
 * Component variant types (used across multiple components)
 */
export type Variant = "solid" | "outline" | "ghost" | "soft" | "link";
/**
 * Position types (used for positioning elements)
 */
export type Position = "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end";
/**
 * Alignment types (used for layout components)
 */
export type Alignment = "start" | "center" | "end" | "stretch" | "baseline";
/**
 * Direction types (used for layout components)
 */
export type Direction = "horizontal" | "vertical";
/**
 * Generic event callback
 */
export type EventCallback<T = void> = (event?: Event) => T;
/**
 * Generic change callback
 */
export type ChangeCallback<T = any> = (value: T) => void;
/**
 * Generic click callback
 */
export type ClickCallback = EventCallback<void>;
/**
 * Pulse signal type
 */
export type Signal<T> = ReturnType<typeof Pulse.signal<T>>;
/**
 * Pulse computed type
 */
export type Computed<T> = ReturnType<typeof Pulse.computed<T>>;
/**
 * Utility functions for Odyssee Components
 * Helper functions used across components
 */
/**
 * Generate a unique ID
 */
export declare function generateId(prefix?: string): string;
/**
 * Merge class names
 */
export declare function cn(...classes: (string | undefined | null | false)[]): string;
/**
 * Check if value is a Pulse signal
 * Pulse signals are functions with specific characteristics
 */
export declare function isSignal(value: any): boolean;
/**
 * Get value from signal or static value
 */
export declare function getValue<T>(value: T | (() => T)): T;
/**
 * Debounce function
 */
export declare function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void;
/**
 * Throttle function
 */
export declare function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void;
/**
 * Check if element is visible in viewport
 */
export declare function isInViewport(element: HTMLElement): boolean;
/**
 * Get scroll position
 */
export declare function getScrollPosition(): {
    x: number;
    y: number;
};
/**
 * Smooth scroll to element
 */
export declare function scrollToElement(element: HTMLElement, offset?: number): void;
/**
 * Get element offset from top of page
 */
export declare function getElementOffset(element: HTMLElement): {
    top: number;
    left: number;
};
/**
 * Check if element has class
 */
export declare function hasClass(element: HTMLElement, className: string): boolean;
/**
 * Add class to element
 */
export declare function addClass(element: HTMLElement, className: string): void;
/**
 * Remove class from element
 */
export declare function removeClass(element: HTMLElement, className: string): void;
/**
 * Toggle class on element
 */
export declare function toggleClass(element: HTMLElement, className: string, force?: boolean): void;
/**
 * Format date
 */
export declare function formatDate(date: Date | string | number, format?: string): string;
/**
 * Parse query string
 */
export declare function parseQueryString(query: string): Record<string, string>;
/**
 * Build query string
 */
export declare function buildQueryString(params: Record<string, any>): string;
/**
 * Deep clone object
 */
export declare function deepClone<T>(obj: T): T;
/**
 * Deep merge objects
 */
export declare function deepMerge<T extends object>(target: T, ...sources: Partial<T>[]): T;
/**
 * Escape HTML
 */
export declare function escapeHtml(text: string): string;
/**
 * Strip HTML tags
 */
export declare function stripHtml(html: string): string;
/**
 * Truncate text
 */
export declare function truncate(text: string, length: number, suffix?: string): string;
/**
 * Capitalize first letter
 */
export declare function capitalize(text: string): string;
/**
 * Convert to kebab case
 */
export declare function kebabCase(text: string): string;
/**
 * Convert to camel case
 */
export declare function camelCase(text: string): string;
/**
 * Convert to snake case
 */
export declare function snakeCase(text: string): string;
/**
 * Random number between min and max
 */
export declare function random(min: number, max: number): number;
/**
 * Clamp number between min and max
 */
export declare function clamp(value: number, min: number, max: number): number;
/**
 * Format number with thousands separator
 */
export declare function formatNumber(num: number, decimals?: number): string;
/**
 * Format bytes to human readable
 */
export declare function formatBytes(bytes: number, decimals?: number): string;
/**
 * Get file extension
 */
export declare function getFileExtension(filename: string): string;
/**
 * Check if file is image
 */
export declare function isImageFile(filename: string): boolean;
/**
 * Load image
 */
export declare function loadImage(src: string): Promise<HTMLImageElement>;
/**
 * Wait for milliseconds
 */
export declare function wait(ms: number): Promise<void>;
/**
 * Retry function with exponential backoff
 */
export declare function retry<T>(fn: () => Promise<T>, maxRetries?: number, delay?: number): Promise<T>;
/**
 * ============================================================================
 * Interactive Group Utilities
 * Shared utilities for interactive grouped components (Tabs, ButtonGroup, Pagination)
 * ============================================================================
 */
/**
 * Standard size classes for interactive group items
 * Used by: Tabs, ButtonGroup, Pagination
 */
export declare const interactiveGroupSizes: {
    readonly sm: {
        readonly button: "py-2 px-3 text-xs";
        readonly gap: "gap-x-1";
    };
    readonly md: {
        readonly button: "py-3 px-4 text-sm";
        readonly gap: "gap-x-2";
    };
    readonly lg: {
        readonly button: "py-3 px-4 sm:p-5 text-base";
        readonly gap: "gap-x-2";
    };
};
/**
 * Type for interactive group size
 */
export type InteractiveGroupSize = keyof typeof interactiveGroupSizes;
/**
 * Selection handler factory
 * Creates a selection handler that supports single or multiple selection
 */
export declare function createSelectionHandler<T = string | number>(options: {
    currentSelected: T | T[] | undefined;
    allowMultiple?: boolean;
    onChange?: (selected: T | T[]) => void;
}): (value: T) => void;
/**
 * Check if a value is selected
 * Handles both single and multiple selection
 */
export declare function isSelectedValue<T = string | number>(value: T, selected: T | T[] | undefined): boolean;
/**
 * Render icon with label helper
 * Returns JSX structure for icon + label combination
 */
export declare function renderIconWithLabel(icon: any | undefined, label: string | any, iconPosition?: "left" | "right"): any;
/**
 * Common classes for interactive group items
 */
export declare const interactiveGroupClasses: {
    readonly base: "inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none";
    readonly hover: "hover:opacity-80";
    readonly focus: "focus:ring-2 focus:ring-offset-2";
    readonly active: "font-semibold";
};
/**
 * Get orientation classes for interactive groups
 */
export declare function getOrientationClasses(orientation: "horizontal" | "vertical"): string;
/**
 * Button Component
 * A versatile button component with multiple variants, sizes, and states
 *
 * @example
 * ```tsx
 * import { Button } from '@odyssee/components';
 *
 * // Basic button
 * <Button>Click me</Button>
 *
 * // With variant and color
 * <Button variant="solid" color="primary">Primary Button</Button>
 *
 * // With loading state
 * const isLoading = Pulse.signal(false);
 * <Button loading={isLoading}>Submit</Button>
 *
 * // With icon
 * <Button icon="🚀" iconPosition="left">Launch</Button>
 *
 * // Full width
 * <Button fullWidth variant="outline" color="secondary">Full Width</Button>
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
/**
 * Spinner Component
 * A loading indicator component with various colors and sizes
 *
 * @example
 * ```tsx
 * import { Spinner } from '@odyssee/components';
 *
 * // Basic spinner
 * <Spinner />
 *
 * // With color
 * <Spinner color="primary" />
 *
 * // With size
 * <Spinner size="lg" />
 *
 * // With label
 * <Spinner label="Loading..." showLabel />
 *
 * // Centered
 * <Spinner centered />
 *
 * // Custom thickness
 * <Spinner thickness={4} />
 *
 * // In a card
 * <div class="min-h-60 flex items-center justify-center">
 *   <Spinner />
 * </div>
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Spinner {
    interface Props extends BaseComponentProps {
        size?: "xs" | "sm" | "md" | "lg" | "xl";
        color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "gray" | "white" | "indigo" | "purple" | "pink" | "orange";
        thickness?: 2 | 3 | 4;
        label?: string;
        showLabel?: boolean;
        centered?: boolean;
    }
}
declare const Spinner: Pulse.Fn<Spinner.Props>;
/**
 * SpinnerOverlay Component
 * A spinner with an overlay backdrop for blocking content
 *
 * @example
 * ```tsx
 * <SpinnerOverlay />
 *
 * // Custom color
 * <SpinnerOverlay color="success" />
 *
 * // With label
 * <SpinnerOverlay label="Processing..." showLabel />
 * ```
 */
declare const SpinnerOverlay: Pulse.Fn<Spinner.Props>;
/**
 * SpinnerCard Component
 * A spinner inside a card container
 *
 * @example
 * ```tsx
 * <SpinnerCard />
 *
 * // Custom height
 * <SpinnerCard className="min-h-80" />
 * ```
 */
declare const SpinnerCard: Pulse.Fn<Spinner.Props>;
/**
 * ButtonSpinner Component
 * A small spinner for use inside buttons
 *
 * @example
 * ```tsx
 * <button>
 *   <ButtonSpinner />
 *   Loading...
 * </button>
 * ```
 */
declare const ButtonSpinner: Pulse.Fn<Omit<Spinner.Props, "size">>;
/**
 * FullPageSpinner Component
 * A full page loading spinner with backdrop
 *
 * @example
 * ```tsx
 * const isLoading = Pulse.signal(true);
 *
 * {isLoading() && <FullPageSpinner />}
 * ```
 */
declare const FullPageSpinner: Pulse.Fn<Spinner.Props>;
export { Spinner, SpinnerOverlay, SpinnerCard, ButtonSpinner, FullPageSpinner };
declare namespace Button {
    interface GroupedProps {
        position?: "first" | "middle" | "last" | "only";
        orientation?: "horizontal" | "vertical";
        variant?: "default" | "toolbar" | "pagination";
        shape?: "default" | "pilled";
        isActive?: boolean;
    }
    interface Props extends BaseComponentProps {
        type?: "button" | "submit" | "reset";
        variant?: Variant;
        color?: Color;
        size?: Size;
        disabled?: boolean;
        loading?: boolean;
        icon?: string | Pulse.JSX.Element;
        iconPosition?: "left" | "right";
        fullWidth?: boolean;
        onClick?: ClickCallback;
        children?: string | HTMLElement | HTMLElement[];
        spinnerProps?: Partial<Spinner.Props>;
        grouped?: GroupedProps;
    }
}
declare const Button: Pulse.Fn<Button.Props>;
export { Button };
/**
 * Alert Component
 * A notification component for displaying important messages with multiple variants and colors
 *
 * @example
 * ```tsx
 * import { Alert } from '@odyssee/components';
 *
 * // Basic alert
 * <Alert variant="solid" color="info">This is an info alert!</Alert>
 *
 * // With title and description
 * <Alert variant="soft" color="success" title="Successfully updated">
 *   You have successfully updated your email preferences.
 * </Alert>
 *
 * // With icon
 * <Alert variant="bordered" color="danger" icon="⚠️" title="Error!">
 *   Your purchase has been declined.
 * </Alert>
 *
 * // With list
 * <Alert variant="soft" color="danger" title="A problem has occurred">
 *   <ul>
 *     <li>This username is already in use</li>
 *     <li>Email field can't be empty</li>
 *     <li>Please enter a valid phone number</li>
 *   </ul>
 * </Alert>
 *
 * // Dismissible alert
 * const isVisible = Pulse.signal(true);
 * <Alert
 *   variant="solid"
 *   color="success"
 *   dismissible={true}
 *   isVisible={isVisible}
 *   onDismiss={() => isVisible(false)}
 * >
 *   File has been successfully uploaded.
 * </Alert>
 *
 * // With actions
 * <Alert
 *   variant="soft"
 *   color="primary"
 *   title="YouTube would like to send notifications"
 *   actions={
 *     <>
 *       <button>Don't allow</button>
 *       <button>Allow</button>
 *     </>
 *   }
 * >
 *   Notifications may include alerts, sounds and icon badges.
 * </Alert>
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Alert {
    interface Props extends BaseComponentProps {
        variant?: "solid" | "soft" | "bordered";
        color?: Color;
        title?: string | HTMLElement;
        children?: string | HTMLElement | HTMLElement[];
        icon?: string;
        dismissible?: boolean;
        isVisible?: boolean | Signal<boolean>;
        actions?: HTMLElement | HTMLElement[];
        onDismiss?: EventCallback;
    }
}
declare const Alert: Pulse.Fn<Alert.Props>;
export { Alert };
/**
 * Badge Component
 * A small label component for status indicators, tags, and notifications
 *
 * @example
 * ```tsx
 * import { Badge } from '@odyssee/components';
 *
 * // Basic badge
 * <Badge>New</Badge>
 *
 * // Solid variant with colors
 * <Badge variant="solid" color="primary">Primary</Badge>
 *
 * // Soft variant
 * <Badge variant="soft" color="success">Success</Badge>
 *
 * // Outline variant
 * <Badge variant="outline" color="danger">Danger</Badge>
 *
 * // With icon
 * <Badge variant="soft" color="info" icon="✓">Connected</Badge>
 *
 * // With dot indicator
 * <Badge variant="soft" color="success" dot={true}>Active</Badge>
 *
 * // Rounded/pill
 * <Badge variant="solid" color="primary" rounded="full">99+</Badge>
 *
 * // Different sizes
 * <Badge size="lg">Large badge</Badge>
 *
 * // Dismissible badge
 * <Badge variant="soft" color="primary" dismissible={true} onDismiss={() => console.log('dismissed')}>
 *   Removable
 * </Badge>
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Badge {
    interface Props extends BaseComponentProps {
        variant?: Variant;
        color?: Color;
        size?: Size;
        rounded?: boolean | "full";
        dot?: boolean;
        icon?: HTMLElement | string;
        dismissible?: boolean;
        onDismiss?: EventCallback;
        children?: string | HTMLElement;
    }
}
declare const Badge: Pulse.Fn<Badge.Props>;
export { Badge };
/**
 * Card Component
 * A versatile card component with multiple layouts, variants, and interactive features
 *
 * @example
 * ```tsx
 * import { Card } from '@odyssee/components';
 *
 * // Basic card
 * <Card title="Card title" subtitle="Card subtitle">
 *   Some quick example text to build on the card title.
 * </Card>
 *
 * // Card with image
 * <Card
 *   image="https://images.unsplash.com/photo-1680868543815-b8666dba60f7"
 *   imageAlt="Card Image"
 *   title="Card title"
 * >
 *   Some quick example text to build on the card title and make up the bulk of the card's content.
 * </Card>
 *
 * // Card with header and footer
 * <Card
 *   header={<p class="text-sm text-gray-500">Featured</p>}
 *   footer={<p class="text-xs text-gray-500">Last updated 5 mins ago</p>}
 *   title="Card title"
 * >
 *   With supporting text below as a natural lead-in to additional content.
 * </Card>
 *
 * // Clickable card with hover effect
 * <Card
 *   image="https://images.unsplash.com/photo-1680868543815-b8666dba60f7"
 *   title="Card title"
 *   clickable={true}
 *   href="#"
 *   hoverEffect="shadow"
 * >
 *   Some quick example text to build on the card title.
 * </Card>
 *
 * // Horizontal card
 * <Card
 *   image="https://images.unsplash.com/photo-1680868543815-b8666dba60f7"
 *   title="Card title"
 *   horizontal={true}
 * >
 *   Some quick example text to build on the card title and make up the bulk of the card's content.
 * </Card>
 *
 * // Centered content
 * <Card title="Card title" centered={true}>
 *   With supporting text below as a natural lead-in to additional content.
 * </Card>
 *
 * // Empty state
 * <Card
 *   emptyState={true}
 *   emptyStateIcon="📦"
 *   emptyStateText="No data to show"
 * />
 *
 * // Scrollable card
 * <Card
 *   title="Card title"
 *   scrollable={true}
 *   scrollHeight="h-80"
 * >
 *   Long content that will be scrollable...
 * </Card>
 *
 * // Image overlay
 * <Card
 *   image="https://images.unsplash.com/photo-1680868543815-b8666dba60f7"
 *   imageOverlay={true}
 *   title="Card title"
 * >
 *   Some quick example text to build on the card title.
 * </Card>
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Card {
    interface Props extends BaseComponentProps {
        title?: string;
        subtitle?: string;
        children?: HTMLElement | HTMLElement[] | string;
        header?: HTMLElement | string;
        headerBordered?: boolean;
        footer?: HTMLElement | string;
        footerBordered?: boolean;
        image?: string;
        imageAlt?: string;
        imagePosition?: "top" | "bottom";
        imageOverlay?: boolean;
        imageRounded?: boolean;
        variant?: "default" | "bordered" | "shadow" | "primary";
        size?: "sm" | "md" | "lg";
        horizontal?: boolean;
        centered?: boolean;
        clickable?: boolean;
        href?: string;
        onClick?: ClickCallback;
        scrollable?: boolean;
        scrollHeight?: string;
        emptyState?: boolean;
        emptyStateIcon?: string;
        emptyStateText?: string;
        hoverEffect?: "shadow" | "scale" | "none";
    }
}
declare const Card: Pulse.Fn<Card.Props>;
export { Card };
/**
 * Avatar Component
 * A versatile avatar component with images, initials, icons, status indicators, and badges
 *
 * @example
 * ```tsx
 * import { Avatar } from '@odyssee/components';
 *
 * // Basic image avatar
 * <Avatar src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5" alt="User" />
 *
 * // Avatar with initials
 * <Avatar initials="AC" name="Alice Cooper" />
 *
 * // Avatar with status indicator
 * <Avatar
 *   src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5"
 *   status="online"
 *   statusPosition="bottom"
 * />
 *
 * // Avatar with different sizes
 * <Avatar src="..." size="xs" />
 * <Avatar src="..." size="sm" />
 * <Avatar src="..." size="md" />
 * <Avatar src="..." size="lg" />
 * <Avatar src="..." size="xl" />
 *
 * // Avatar with initials and colors
 * <Avatar initials="AC" color="primary" colorVariant="solid" />
 * <Avatar initials="JD" color="success" colorVariant="soft" />
 * <Avatar initials="MW" color="danger" colorVariant="outline" />
 *
 * // Rounded variants
 * <Avatar src="..." rounded="full" />
 * <Avatar src="..." rounded="lg" />
 *
 * // Avatar with icon placeholder
 * <Avatar variant="icon" size="lg" />
 *
 * // Avatar with badge
 * <Avatar
 *   src="..."
 *   icon={<svg>...</svg>}
 *   iconBg={true}
 * />
 *
 * // Avatar with tooltip
 * <Avatar
 *   src="..."
 *   status="online"
 *   tooltip="Mark Wanner is online"
 * />
 *
 * // Clickable avatar
 * <Avatar
 *   src="..."
 *   href="/profile"
 *   onClick={() => console.log('clicked')}
 * />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Avatar {
    interface Props extends BaseComponentProps {
        src?: string;
        alt?: string;
        name?: string;
        initials?: string;
        variant?: "image" | "initials" | "icon";
        size?: Size;
        rounded?: boolean | "full" | "lg";
        color?: "gray" | "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "white";
        colorVariant?: "solid" | "soft" | "outline";
        status?: "online" | "offline" | "away" | "busy" | "none";
        statusPosition?: "top" | "bottom";
        statusColor?: string;
        badge?: string | number;
        badgePosition?: "top" | "bottom";
        icon?: HTMLElement | string;
        iconBg?: boolean;
        tooltip?: string;
        href?: string;
        onClick?: ClickCallback;
    }
}
declare const Avatar: Pulse.Fn<Avatar.Props>;
export { Avatar };
/**
 * AvatarGroup Component
 * A component to display multiple avatars in a group with various layouts
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace AvatarGroup {
    interface Item {
        src?: string;
        alt?: string;
        name?: string;
        initials?: string;
        tooltip?: string;
        href?: string;
        onClick?: () => void;
    }
    interface Props extends BaseComponentProps {
        avatars: Item[];
        layout?: "stack" | "grid";
        size?: Size;
        max?: number;
        showCounter?: boolean;
        counterText?: string;
        spacing?: "none" | "sm" | "md" | "lg";
        ringColor?: "white" | "gray" | "transparent";
        rounded?: boolean | "full" | "lg";
        enableTooltips?: boolean;
        dropdownItems?: Array<{
            name: string;
            href?: string;
            onClick?: () => void;
        }>;
        hoverEffect?: boolean;
    }
}
declare const AvatarGroup: Pulse.Fn<AvatarGroup.Props> & {
    Stack: Pulse.Fn<AvatarGroup.Props>;
    Grid: Pulse.Fn<AvatarGroup.Props>;
};
export { AvatarGroup };
/**
 * Blockquote Component
 * A component for displaying quoted text with various styles and layouts
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Blockquote {
    interface Author {
        name: string;
        title?: string;
        avatar?: string;
        avatarAlt?: string;
    }
    interface Props extends BaseComponentProps {
        quote: string | HTMLElement;
        children?: string | HTMLElement;
        author?: Author | string;
        size?: "sm" | "md" | "lg";
        align?: "left" | "center" | "right";
        variant?: "default" | "bordered" | "minimal";
        showIcon?: boolean;
        borderColor?: string;
    }
}
declare const Blockquote: Pulse.Fn<Blockquote.Props> & {
    Bordered: Pulse.Fn<Blockquote.Props>;
    Minimal: Pulse.Fn<Blockquote.Props>;
};
export { Blockquote };
/**
 * Progress Component
 * A versatile progress bar component with linear, circular, and gauge variants
 *
 * @example
 * ```tsx
 * import { Progress } from '@odyssee/components';
 *
 * // Basic progress bar
 * <Progress value={25} />
 *
 * // With label
 * <Progress value={50} label="Progress title" showValue={true} />
 *
 * // Different sizes
 * <Progress value={25} size="xs" />
 * <Progress value={50} size="sm" />
 * <Progress value={75} size="md" />
 * <Progress value={100} size="lg" />
 *
 * // With colors
 * <Progress value={50} color="primary" />
 * <Progress value={75} color="success" />
 * <Progress value={30} color="danger" />
 *
 * // Label positions
 * <Progress value={50} showValue={true} valuePosition="inside" />
 * <Progress value={50} showValue={true} valuePosition="end" />
 * <Progress value={50} showValue={true} valuePosition="top" />
 * <Progress value={50} showValue={true} valuePosition="floating" />
 *
 * // Reactive value with signal
 * const progress = Pulse.signal(0);
 * <Progress value={progress} showValue={true} />
 *
 * // Vertical progress
 * <Progress value={75} vertical={true} height="h-32" />
 *
 * // Segmented progress (steps)
 * <Progress value={50} segments={4} showValue={true} valuePosition="end" />
 *
 * // Circular progress
 * <Progress value={35} type="circular" showValue={true} circularSize={160} />
 *
 * // Gauge progress
 * <Progress value={50} type="gauge" label="Score" showValue={true} />
 *
 * // Half gauge
 * <Progress value={75} type="gauge-half" label="Score" showValue={true} />
 *
 * // With custom value format
 * <Progress
 *   value={50}
 *   showValue={true}
 *   valueFormat={(value, max) => `${value}/${max} MB`}
 * />
 *
 * // Animated
 * <Progress value={75} animated={true} transition={true} />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Progress {
    interface Props extends BaseComponentProps {
        value: number | Signal<number>;
        max?: number;
        min?: number;
        label?: string;
        showValue?: boolean;
        valuePosition?: "inside" | "end" | "top" | "floating";
        valueFormat?: (value: number, max: number) => string;
        size?: "xs" | "sm" | "md" | "lg" | "xl";
        color?: Color;
        variant?: "default" | "striped" | "gradient";
        rounded?: boolean;
        vertical?: boolean;
        height?: string;
        segments?: number;
        segmentGap?: string;
        type?: "linear" | "circular" | "gauge" | "gauge-half";
        circularSize?: number;
        strokeWidth?: number;
        animated?: boolean;
        transition?: boolean;
        showStatus?: boolean;
        statusIcon?: HTMLElement | string;
    }
}
declare const Progress: Pulse.Fn<Progress.Props>;
export { Progress };
/**
 * ButtonGroup Component
 * A component for grouping buttons together with various layouts and styles
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace ButtonGroup {
    interface Item {
        label: string | HTMLElement;
        value?: string | number;
        icon?: HTMLElement;
        disabled?: boolean;
        active?: boolean;
        onClick?: () => void;
        type?: "button" | "submit" | "reset";
        className?: string;
        ariaLabel?: string;
    }
    interface Props extends BaseComponentProps {
        buttons: Item[];
        orientation?: "horizontal" | "vertical";
        size?: "sm" | "md" | "lg";
        variant?: "default" | "toolbar" | "pagination";
        shape?: "default" | "pilled";
        responsive?: boolean;
        allowMultiple?: boolean;
        selected?: string | number | (string | number)[];
        fullWidth?: boolean;
        useAriaCurrent?: boolean;
        onChange?: (value: string | number | (string | number)[]) => void;
    }
}
declare const ButtonGroup: Pulse.Fn<ButtonGroup.Props> & {
    Horizontal: Pulse.Fn<ButtonGroup.Props>;
    Vertical: Pulse.Fn<ButtonGroup.Props>;
    Toolbar: Pulse.Fn<ButtonGroup.Props>;
    Responsive: Pulse.Fn<ButtonGroup.Props>;
};
export { ButtonGroup };
/**
 * ChatBubble Component
 * A component for displaying chat messages with various layouts and styles
 */
import Pulse from "@odyssee-software/pulse-framework";
type ChatStatus = "sent" | "delivered" | "read" | "error" | "sending";
declare namespace ChatBubble {
    interface ContentItem {
        type: "text" | "link" | "list";
        content: string;
        href?: string;
    }
    interface Props extends BaseComponentProps {
        message?: string;
        content?: HTMLElement | string | ContentItem[];
        title?: string;
        sender?: "user" | "bot" | "other";
        avatar?: string;
        avatarAlt?: string;
        avatarInitials?: string;
        status?: ChatStatus;
        statusText?: string;
        showStatus?: boolean;
        align?: "left" | "right";
        variant?: "default" | "primary";
        maxWidth?: string;
        timestamp?: string;
        showTimestamp?: boolean;
    }
    interface ListProps extends BaseComponentProps {
        children?: HTMLElement | HTMLElement[];
        spacing?: "sm" | "md" | "lg";
    }
}
export declare const ChatBubble: Pulse.Fn<ChatBubble.Props> & {
    List: Pulse.Fn<ChatBubble.ListProps>;
    User: Pulse.Fn<ChatBubble.Props>;
    Bot: Pulse.Fn<ChatBubble.Props>;
};
export {};
/**
 * Carousel Component
 * A slideshow component for cycling through elements with Pulse reactive state
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Carousel {
    interface Slide {
        id?: string;
        content: HTMLElement | string;
        thumbnail?: HTMLElement | string;
    }
    interface Props extends BaseComponentProps {
        slides: Slide[];
        currentSlide?: number | Signal<number>;
        autoPlay?: boolean;
        interval?: number;
        loop?: boolean;
        showControls?: boolean;
        showPagination?: boolean;
        showInfo?: boolean;
        showThumbnails?: boolean;
        thumbnailsPosition?: "bottom" | "right";
        minHeight?: string;
        controlsVariant?: "default" | "overlay";
        draggable?: boolean;
        rtl?: boolean;
        slidesPerView?: number;
        onChange?: (index: number) => void;
        onSlideChange?: (index: number) => void;
    }
}
declare const Carousel: Pulse.Fn<Carousel.Props> & {
    AutoPlay: Pulse.Fn<Carousel.Props>;
    Thumbnail: Pulse.Fn<Carousel.Props>;
};
export { Carousel };
/**
 * Collapse Component
 * A component for showing/hiding content with smooth transitions
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Collapse {
    interface Props extends BaseComponentProps {
        isOpen?: boolean | Signal<boolean>;
        trigger?: HTMLElement | string;
        children?: HTMLElement | HTMLElement[] | string;
        openText?: string;
        closedText?: string;
        showIcon?: boolean;
        triggerClassName?: string;
        triggerVariant?: "button" | "link";
        duration?: number;
        onToggle?: (isOpen: boolean) => void;
        onOpen?: () => void;
        onClose?: () => void;
    }
}
/**
 * CollapseContent - Just the collapsible content without trigger
 * Useful when you want to control the trigger separately
 */
declare namespace CollapseContent {
    interface Props extends BaseComponentProps {
        isOpen?: boolean | Signal<boolean>;
        children?: HTMLElement | HTMLElement[] | string;
        duration?: number;
        triggerId?: string;
    }
}
declare const CollapseContent: Pulse.Fn<CollapseContent.Props>;
/**
 * CollapseTrigger - Just the trigger button without content
 * Useful when you want to control the content separately
 */
declare namespace CollapseTrigger {
    interface Props extends BaseComponentProps {
        isOpen?: boolean | Signal<boolean>;
        targetId: string;
        children?: HTMLElement | string;
        showIcon?: boolean;
        variant?: "button" | "link";
        onToggle?: (isOpen: boolean) => void;
    }
}
declare const CollapseTrigger: Pulse.Fn<CollapseTrigger.Props>;
declare const Collapse: Pulse.Fn<Collapse.Props> & {
    Content: Pulse.Fn<CollapseContent.Props>;
    Trigger: Pulse.Fn<CollapseTrigger.Props>;
    ReadMore: Pulse.Fn<Collapse.Props>;
};
export { Collapse };
/**
 * Divider Component
 * A flexible divider component for separating content with optional labels
 *
 * @example
 * ```tsx
 * import { Divider } from '@odyssee/components';
 *
 * // Basic horizontal divider
 * <Divider />
 *
 * // With color
 * <Divider color="blue" />
 *
 * // With thickness
 * <Divider thickness={4} />
 *
 * // With label (center)
 * <Divider label="OR" labelPosition="center" />
 *
 * // With label (left aligned)
 * <Divider label="Left aligned" labelPosition="left" />
 *
 * // With label (right aligned)
 * <Divider label="Right aligned" labelPosition="right" />
 *
 * // Vertical divider
 * <div class="flex gap-3">
 *   <button>Button 1</button>
 *   <Divider orientation="vertical" />
 *   <button>Button 2</button>
 * </div>
 *
 * // Responsive (horizontal on mobile, vertical on desktop)
 * <Divider responsiveOrientation={{ sm: "vertical" }} />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Divider {
    interface Props extends BaseComponentProps {
        orientation?: "horizontal" | "vertical";
        label?: string | HTMLElement;
        labelPosition?: "left" | "center" | "right";
        color?: "default" | "gray" | "teal" | "blue" | "red" | "yellow" | "white";
        thickness?: 1 | 2 | 4 | 8;
        spacing?: Size;
        responsiveOrientation?: {
            sm?: "horizontal" | "vertical";
            md?: "horizontal" | "vertical";
            lg?: "horizontal" | "vertical";
        };
    }
}
declare const Divider: Pulse.Fn<Divider.Props> & {
    Vertical: Pulse.Fn<Divider.Props>;
    WithText: Pulse.Fn<Omit<Divider.Props, "labelPosition">>;
};
export { Divider };
import Pulse, { Signal } from "@odyssee-software/pulse-framework";
/**
 * DatePicker component props
 */
declare namespace DatePicker {
    interface Props {
        /** Input id */
        id?: string;
        /** Mode: single date, multiple dates, or range */
        mode?: "single" | "multiple" | "range";
        /** Selected date (for single mode) - can be a signal or static value */
        value?: Date | Signal<Date | null> | null;
        /** Start date for range mode - can be a signal or static value */
        rangeStart?: Date | Signal<Date | null> | null;
        /** End date for range mode - can be a signal or static value */
        rangeEnd?: Date | Signal<Date | null> | null;
        /** Placeholder text */
        placeholder?: string;
        /** Minimum selectable date */
        minDate?: Date;
        /** Maximum selectable date */
        maxDate?: Date;
        /** Show time picker */
        showTime?: boolean;
        /** Time format (12h or 24h) */
        timeFormat?: "12h" | "24h";
        /** Display multiple months (for range mode) */
        displayMonths?: 1 | 2;
        /** Date format string */
        dateFormat?: string;
        /** Callback when date changes (single mode) */
        onChange?: (date: Date | null) => void;
        /** Callback when range changes (range mode) */
        onRangeChange?: (start: Date | null, end: Date | null) => void;
        /** Callback when multiple dates change */
        onMultipleChange?: (dates: Date[]) => void;
        /** Additional CSS classes */
        className?: string;
        /** Inline styles */
        style?: string;
        /** Disabled state */
        disabled?: boolean;
        /** Readonly state */
        readonly?: boolean;
        /** Theme override */
        theme?: "light" | "dark" | "auto";
    }
}
/**
 * DatePicker component using Preline's Advanced Datepicker with Vanilla Calendar Pro
 *
 * @example
 * ```tsx
 * const selectedDate = Pulse.signal<Date | null>(new Date());
 *
 * <DatePicker
 *   mode="single"
 *   value={selectedDate}
 *   onChange={(date) => selectedDate(date)}
 * />
 * ```
 */
declare const DatePicker: Pulse.Fn<DatePicker.Props>;
export { DatePicker };
/**
 * Device Component
 * A component for displaying mobile and browser device mockups with screenshots
 *
 * Features:
 * - Mobile device frame with rounded corners and shadows
 * - Browser frame with navigation bar and macOS-style controls
 * - Support for images or custom content
 * - Dark mode support
 * - Customizable alignment and sizing
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Device {
    interface Props extends BaseComponentProps {
        variant: "mobile" | "browser";
        src?: string;
        alt?: string;
        children?: HTMLElement | HTMLElement[] | string;
        url?: string;
        showControls?: boolean;
        maxWidth?: string;
        align?: "left" | "center" | "right";
        imageClassName?: string;
        frameClassName?: string;
    }
}
declare const Device: Pulse.Fn<Device.Props>;
declare const MobileDevice: Pulse.Fn<Omit<Device.Props, "variant">>;
declare const BrowserDevice: Pulse.Fn<Omit<Device.Props, "variant">>;
export { Device, MobileDevice, BrowserDevice };
/**
 * Icon Component
 * A versatile icon component with SVG support, multiple variants, sizes, colors, and shapes
 *
 * @example
 * ```tsx
 * import { Icon } from '@odyssee/components';
 *
 * // Basic icon (standalone SVG)
 * <Icon>
 *   <svg>...</svg>
 * </Icon>
 *
 * // With variant and color (wrapped)
 * <Icon variant="solid" color="primary" shape="circular">
 *   <svg>...</svg>
 * </Icon>
 *
 * // Different sizes
 * <Icon size="xs" variant="soft" color="success">
 *   <svg>...</svg>
 * </Icon>
 *
 * // Ghost variant (no background)
 * <Icon variant="ghost" color="danger" shape="rounded">
 *   <svg>...</svg>
 * </Icon>
 *
 * // Outline variant
 * <Icon variant="outline" color="warning" shape="circular">
 *   <svg>...</svg>
 * </Icon>
 *
 * // Soft-outline variant
 * <Icon variant="soft-outline" color="info" shape="rounded">
 *   <svg>...</svg>
 * </Icon>
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Icon {
    interface Props extends BaseComponentProps {
        name?: string;
        children?: Pulse.JSX.Element | HTMLElement | HTMLElement[];
        size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
        width?: number | string;
        height?: number | string;
        color?: Color;
        variant?: "solid" | "outline" | "ghost" | "soft" | "soft-outline";
        shape?: "square" | "rounded" | "circular";
        strokeWidth?: number;
        fill?: boolean;
        containerClassName?: string;
    }
}
declare const Icon: Pulse.Fn<Icon.Props>;
export { Icon };
/**
 * FileUploadProgress Component
 * Displays file upload progress with visual feedback for single or multiple files
 *
 * @example
 * ```tsx
 * import { FileUploadProgress } from '@odyssee/components';
 *
 * // Single file upload
 * const file = {
 *   id: '1',
 *   name: 'preline-ui.xls',
 *   size: '7 KB',
 *   progress: 25,
 *   status: 'uploading'
 * };
 * <FileUploadProgress file={file} onPause={(id) => console.log('pause', id)} />
 *
 * // Multiple files in card
 * const files = [
 *   { id: '1', name: 'file1.html', size: '7 KB', progress: 100, status: 'completed' },
 *   { id: '2', name: 'file2.mp4', size: '105.5 MB', progress: 25, status: 'uploading' },
 *   { id: '3', name: 'file3.jpg', size: '55 KB', progress: 100, status: 'completed' }
 * ];
 * <FileUploadProgress
 *   files={files}
 *   variant="card"
 *   onPauseAll={() => console.log('pause all')}
 * />
 *
 * // With reactive progress
 * const progress = Pulse.signal(0);
 * const file = {
 *   id: '1',
 *   name: 'upload.pdf',
 *   size: '2.5 MB',
 *   progress: progress,
 *   status: 'uploading'
 * };
 * <FileUploadProgress file={file} />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace FileUploadProgress {
    interface Item {
        id: string;
        name: string;
        size: string | number;
        progress: number | Signal<number>;
        status: "uploading" | "completed" | "error" | "paused";
        icon?: Pulse.JSX.Element | HTMLElement;
    }
    interface Props extends BaseComponentProps {
        file?: Item;
        files?: Item[];
        showPercentage?: boolean;
        showActions?: boolean;
        variant?: "inline" | "card";
        onPause?: (fileId: string) => void;
        onResume?: (fileId: string) => void;
        onDelete?: (fileId: string) => void;
        onPauseAll?: () => void;
        onResumeAll?: () => void;
        onDeleteAll?: () => void;
        footerText?: string;
        footerActions?: Pulse.JSX.Element | HTMLElement;
    }
}
/**
 * FileUploadProgress - Main component
 */
declare const FileUploadProgress: Pulse.Fn<FileUploadProgress.Props>;
export { FileUploadProgress };
/**
 * Skeleton Component
 * Loading placeholder component for enhancing the user experience during data loading
 *
 * @example
 * ```tsx
 * import { Skeleton, SkeletonAvatar, SkeletonCard } from '@odyssee/components';
 *
 * // Basic skeleton line
 * <Skeleton />
 *
 * // Multiple lines
 * <Skeleton lines={3} />
 *
 * // With animation
 * <Skeleton animate lines={4} />
 *
 * // Custom width
 * <Skeleton width="40%" />
 *
 * // Circular (for avatar)
 * <Skeleton variant="circular" width={48} height={48} />
 *
 * // Avatar skeleton
 * <SkeletonAvatar size="lg" animate />
 *
 * // Card skeleton (avatar + text)
 * <SkeletonCard avatar lines={4} animate />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Skeleton {
    interface Props extends BaseComponentProps {
        variant?: "text" | "circular" | "rectangular";
        width?: string | number;
        height?: string | number;
        animate?: boolean;
        lines?: number;
        gap?: "sm" | "md" | "lg";
    }
    interface AvatarProps extends BaseComponentProps {
        size?: "xs" | "sm" | "md" | "lg" | "xl";
        animate?: boolean;
    }
    interface CardProps extends BaseComponentProps {
        avatar?: boolean;
        avatarSize?: "xs" | "sm" | "md" | "lg" | "xl";
        lines?: number;
        animate?: boolean;
        titleWidth?: string;
    }
}
export declare const Skeleton: Pulse.Fn<Skeleton.Props> & {
    Avatar: Pulse.Fn<Skeleton.AvatarProps>;
    Card: Pulse.Fn<Skeleton.CardProps>;
    Text: Pulse.Fn<Omit<Skeleton.Props, "variant">>;
    Circle: Pulse.Fn<Omit<Skeleton.Props, "variant">>;
    Rectangle: Pulse.Fn<Omit<Skeleton.Props, "variant">>;
    Button: Pulse.Fn<Omit<Skeleton.Props, "variant">>;
    Input: Pulse.Fn<Omit<Skeleton.Props, "variant">>;
    Image: Pulse.Fn<Omit<Skeleton.Props, "variant">>;
    Table: Pulse.Fn<{
        rows?: number;
        animate?: boolean;
        className?: string;
    }>;
};
export {};
/**
 * List Component
 * A versatile list component with multiple styles including bulleted, numbered, checked, and inline lists
 *
 * @example
 * ```tsx
 * import { List } from '@odyssee/components';
 *
 * // Basic disc list
 * <List items={['Item 1', 'Item 2', 'Item 3']} />
 *
 * // Numbered list
 * <List items={['Item 1', 'Item 2', 'Item 3']} type="decimal" />
 *
 * // Checked list
 * <List
 *   items={['FAQ', 'License', 'Terms & Conditions']}
 *   type="check"
 *   checkColor="primary"
 * />
 *
 * // Checked list with variant
 * <List
 *   items={['FAQ', 'License', 'Terms & Conditions']}
 *   type="check"
 *   checkColor="primary"
 *   checkVariant="solid"
 * />
 *
 * // Inline list with separator
 * <List
 *   items={['FAQ', 'License', 'Terms & Conditions']}
 *   type="inline"
 *   separator="dot"
 * />
 *
 * // Custom marker color
 * <List
 *   items={['FAQ', 'License', 'Terms & Conditions']}
 *   markerColor="text-blue-600"
 * />
 *
 * // Complex items with custom icons
 * <List
 *   items={[
 *     { content: 'Item 1', icon: <svg>...</svg>, iconColor: 'primary' },
 *     { content: 'Item 2', icon: <svg>...</svg>, iconColor: 'success' },
 *   ]}
 *   type="check"
 * />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace List {
    interface Item {
        id?: string;
        content: string | HTMLElement;
        icon?: HTMLElement | string;
        iconColor?: Color | "gray" | "white" | "teal" | "indigo" | "purple" | "pink" | "orange";
        iconVariant?: "simple" | "soft" | "solid";
    }
    interface Props extends BaseComponentProps {
        items: (string | List.Item)[];
        type?: "disc" | "decimal" | "none" | "check" | "inline";
        spacing?: "sm" | "md" | "lg";
        markerColor?: string;
        checkColor?: Color | "gray" | "white" | "teal" | "indigo" | "purple" | "pink" | "orange";
        checkVariant?: "simple" | "soft" | "solid";
        separator?: "dot" | "pipe" | "slash" | "none";
        size?: "xs" | "sm" | "md" | "lg";
        start?: number;
    }
}
declare const List: Pulse.Fn<List.Props> & {
    Check: Pulse.Fn<Omit<List.Props, "type"> & {
        color?: List.Props["checkColor"];
        variant?: List.Props["checkVariant"];
    }>;
    Inline: Pulse.Fn<Omit<List.Props, "type">>;
    Ordered: Pulse.Fn<Omit<List.Props, "type">>;
    Unordered: Pulse.Fn<Omit<List.Props, "type">>;
};
export { List };
/**
 * ListGroup Component
 * A flexible list component for displaying grouped content with various interactive states
 *
 * @example
 * ```tsx
 * import { ListGroup } from '@odyssee/components';
 *
 * // Basic list group
 * <ListGroup items={['Profile', 'Settings', 'Newsletter']} />
 *
 * // With icons
 * <ListGroup
 *   items={[
 *     { content: 'Newsletter', icon: <svg>...</svg> },
 *     { content: 'Downloads', icon: <svg>...</svg> },
 *   ]}
 * />
 *
 * // As links
 * <ListGroup
 *   as="a"
 *   items={[
 *     { content: 'Active', href: '#', active: true, icon: <svg>...</svg> },
 *     { content: 'Link', href: '#', icon: <svg>...</svg> },
 *     { content: 'Disabled', href: '#', disabled: true, icon: <svg>...</svg> },
 *   ]}
 * />
 *
 * // As buttons
 * <ListGroup
 *   as="button"
 *   items={[
 *     { content: 'Active', active: true, icon: <svg>...</svg> },
 *     { content: 'Button', icon: <svg>...</svg> },
 *   ]}
 *   onItemClick={(item, index) => console.log(item, index)}
 * />
 *
 * // Striped
 * <ListGroup items={['Profile', 'Settings', 'Newsletter']} striped />
 *
 * // Flush (no borders)
 * <ListGroup items={['Profile', 'Settings', 'Newsletter']} variant="flush" />
 *
 * // Horizontal (responsive)
 * <ListGroup
 *   items={[
 *     { content: 'Newsletter', icon: <svg>...</svg> },
 *     { content: 'Downloads', icon: <svg>...</svg> },
 *   ]}
 *   variant="horizontal"
 * />
 *
 * // With badges
 * <ListGroup
 *   items={[
 *     { content: 'Profile', badge: 'New' },
 *     { content: 'Settings', badge: 2 },
 *     { content: 'Newsletter', badge: '99+' },
 *   ]}
 * />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace ListGroup {
    interface Item {
        id?: string;
        content: string | HTMLElement;
        icon?: HTMLElement | string;
        badge?: string | number;
        badgeColor?: Color;
        href?: string;
        active?: boolean;
        disabled?: boolean;
        onClick?: ClickCallback;
    }
    interface Props extends BaseComponentProps {
        items: (string | ListGroup.Item)[];
        variant?: "default" | "flush" | "horizontal";
        as?: "li" | "button" | "a";
        striped?: boolean;
        noGutters?: boolean;
        size?: "sm" | "md" | "lg";
        activeIndex?: number | Signal<number>;
        onItemClick?: (item: ListGroup.Item | string, index: number) => void;
    }
}
declare const ListGroup: Pulse.Fn<ListGroup.Props> & {
    Link: Pulse.Fn<Omit<ListGroup.Props, "as">>;
    Button: Pulse.Fn<Omit<ListGroup.Props, "as">>;
    Flush: Pulse.Fn<Omit<ListGroup.Props, "variant">>;
    Horizontal: Pulse.Fn<Omit<ListGroup.Props, "variant">>;
};
export { ListGroup };
/**
 * Kbd Component
 * A keyboard key component for displaying keyboard shortcuts and commands
 *
 * @example
 * ```tsx
 * import { Kbd, KbdGroup } from '@odyssee/components';
 *
 * // Basic kbd
 * <Kbd>ctrl</Kbd>
 *
 * // Different variants
 * <Kbd variant="text">ctrl</Kbd>
 * <Kbd variant="text-dark">ctrl</Kbd>
 * <Kbd variant="solid">ctrl</Kbd>
 * <Kbd variant="bordered">ctrl</Kbd>
 * <Kbd variant="shadow">ctrl</Kbd>
 *
 * // Different sizes
 * <Kbd size="xs">ctrl</Kbd>
 * <Kbd size="sm">ctrl</Kbd>
 * <Kbd size="md">ctrl</Kbd>
 * <Kbd size="lg">ctrl</Kbd>
 *
 * // With icon
 * <Kbd icon={<svg>...</svg>} square />
 *
 * // Group of keys
 * <KbdGroup keys={['Ctrl', 'B']} separator="+" />
 *
 * // Group with custom separator
 * <KbdGroup keys={['shift', 'and', 'b']} />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Kbd {
    interface Props extends BaseComponentProps {
        children?: string | HTMLElement;
        variant?: "text" | "text-dark" | "solid" | "bordered" | "shadow";
        size?: "xs" | "sm" | "md" | "lg";
        icon?: HTMLElement | string;
        square?: boolean;
    }
    interface GroupProps extends BaseComponentProps {
        keys: (string | HTMLElement | Kbd.Props)[];
        separator?: string;
        variant?: "text" | "text-dark" | "solid" | "bordered" | "shadow";
        size?: "xs" | "sm" | "md" | "lg";
    }
}
export declare const Kbd: Pulse.Fn<Kbd.Props> & {
    Group: Pulse.Fn<Kbd.GroupProps>;
    Cmd: Pulse.Fn<Omit<Kbd.Props, "children">>;
    Option: Pulse.Fn<Omit<Kbd.Props, "children">>;
    Shift: Pulse.Fn<Omit<Kbd.Props, "children">>;
    ArrowUp: Pulse.Fn<Omit<Kbd.Props, "children">>;
    ArrowDown: Pulse.Fn<Omit<Kbd.Props, "children">>;
    ArrowLeft: Pulse.Fn<Omit<Kbd.Props, "children">>;
    ArrowRight: Pulse.Fn<Omit<Kbd.Props, "children">>;
    Enter: Pulse.Fn<Omit<Kbd.Props, "children">>;
    Esc: Pulse.Fn<Omit<Kbd.Props, "children">>;
    Tab: Pulse.Fn<Omit<Kbd.Props, "children">>;
    Space: Pulse.Fn<Omit<Kbd.Props, "children">>;
    Delete: Pulse.Fn<Omit<Kbd.Props, "children">>;
    Backspace: Pulse.Fn<Omit<Kbd.Props, "children">>;
};
export {};
/**
 * Rating Component
 * A versatile rating component with stars, hearts, emojis, and custom symbols
 * Supports both interactive and read-only modes
 *
 * @example
 * ```tsx
 * import { Rating } from '@odyssee/components';
 *
 * // Basic interactive rating (stars)
 * <Rating value={3} max={5} onChange={(val) => console.log(val)} />
 *
 * // Read-only display
 * <Rating value={4} max={5} mode="readonly" />
 *
 * // Different sizes
 * <Rating value={3} size="sm" />
 * <Rating value={3} size="md" /> // default
 * <Rating value={3} size="lg" />
 *
 * // Hearts
 * <Rating value={3} max={5} symbol="heart" color="red" />
 *
 * // Emoji rating (different emoji per value)
 * <Rating
 *   value={2}
 *   max={3}
 *   symbol="emoji"
 *   customSymbol={["😔", "😐️", "🤩"]}
 * />
 *
 * // Custom SVG symbol
 * <Rating
 *   value={3}
 *   max={5}
 *   symbol="custom"
 *   customSymbol={<MyCustomIcon />}
 * />
 *
 * // With label
 * <Rating
 *   value={3}
 *   max={5}
 *   showLabel
 *   label="Rate this product"
 * />
 *
 * // Reactive with Pulse Signal
 * const rating = Pulse.signal(0);
 * <Rating value={rating} max={5} onChange={(val) => rating(val)} />
 *
 * // Disabled
 * <Rating value={3} max={5} disabled />
 *
 * // Thumbs (Yes/No feedback)
 * <Rating value={1} max={2} symbol="thumbs" />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
type RatingMode = "interactive" | "readonly";
type RatingSymbol = "star" | "heart" | "emoji" | "thumbs" | "custom";
type RatingSize = "sm" | "md" | "lg";
declare namespace Rating {
    interface Props extends BaseComponentProps {
        value?: number | Signal<number>;
        max?: number;
        mode?: RatingMode;
        onChange?: (value: number) => void;
        symbol?: RatingSymbol;
        customSymbol?: Pulse.JSX.Element | Pulse.JSX.Element[] | string[];
        size?: RatingSize;
        color?: string;
        inactiveColor?: string;
        showLabel?: boolean;
        label?: string;
        name?: string;
        disabled?: boolean;
        required?: boolean;
    }
}
declare const Rating: Pulse.Fn<Rating.Props>;
export { Rating };
/**
 * LegendIndicator Component
 * A simple component to display a colored dot with a label, commonly used in chart legends
 *
 * @example
 * ```tsx
 * import { LegendIndicator } from '@odyssee/components';
 *
 * // Basic usage
 * <LegendIndicator label="Legend indicator" />
 *
 * // With colors
 * <LegendIndicator label="Red" color="red-500" />
 * <LegendIndicator label="Blue" color="blue-600" />
 * <LegendIndicator label="Green" color="green-500" />
 * <LegendIndicator label="Yellow" color="yellow-500" />
 *
 * // Different sizes
 * <LegendIndicator label="Extra small" size="xs" />
 * <LegendIndicator label="Small" size="sm" />
 * <LegendIndicator label="Medium" size="md" />
 * <LegendIndicator label="Large" size="lg" />
 *
 * // Square dot
 * <LegendIndicator label="Square" color="purple-500" shape="square" />
 *
 * // Custom classes
 * <LegendIndicator
 *   label="Custom"
 *   color="indigo-500"
 *   dotClassName="ring-2 ring-indigo-200"
 *   labelClassName="font-bold text-lg"
 * />
 *
 * // JSX label
 * <LegendIndicator
 *   label={<span>Custom <strong>Bold</strong> Label</span>}
 *   color="pink-500"
 * />
 *
 * // Chart legend example
 * <div class="flex gap-4">
 *   <LegendIndicator label="Revenue" color="blue-600" />
 *   <LegendIndicator label="Expenses" color="red-500" />
 *   <LegendIndicator label="Profit" color="green-500" />
 * </div>
 *
 * // Dashboard status indicators
 * <div class="flex flex-col gap-2">
 *   <LegendIndicator label="Active" color="green-500" />
 *   <LegendIndicator label="Pending" color="yellow-500" />
 *   <LegendIndicator label="Inactive" color="gray-500" />
 * </div>
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
type LegendIndicatorSize = "xs" | "sm" | "md" | "lg";
type LegendIndicatorShape = "circle" | "square";
declare namespace LegendIndicator {
    interface Props extends BaseComponentProps {
        label: string | Pulse.JSX.Element;
        color?: string;
        size?: LegendIndicatorSize;
        shape?: LegendIndicatorShape;
        dotClassName?: string;
        labelClassName?: string;
    }
}
declare const LegendIndicator: Pulse.Fn<LegendIndicator.Props>;
export { LegendIndicator };
/**
 * Timeline Components
 * A set of components to display chronological events in a vertical timeline
 * Includes Timeline (container), TimelineItem, and TimelineHeading
 *
 * @example
 * ```tsx
 * import { Timeline, TimelineItem, TimelineHeading } from '@odyssee/components';
 *
 * // Simple timeline with items array
 * <Timeline
 *   items={[
 *     {
 *       title: "Created task",
 *       description: "Find detailed instructions here",
 *       icon: "dot",
 *       user: { name: "James Collins", avatar: "url" }
 *     },
 *     {
 *       title: "Bug fixed",
 *       icon: "badge",
 *       initials: "A",
 *       user: { name: "Alex", initials: "A" }
 *     }
 *   ]}
 * />
 *
 * // With time display
 * <Timeline
 *   showTime
 *   timePosition="left"
 *   items={[
 *     { title: "Task created", time: "12:05PM" },
 *     { title: "Bug fixed", time: "1:30PM" }
 *   ]}
 * />
 *
 * // Grouped by date
 * <Timeline
 *   grouped
 *   groups={[
 *     {
 *       heading: "1 Aug, 2023",
 *       items: [{ title: "Task 1" }, { title: "Task 2" }]
 *     },
 *     {
 *       heading: "31 Jul, 2023",
 *       items: [{ title: "Task 3" }]
 *     }
 *   ]}
 * />
 *
 * // Hoverable + clickable
 * <Timeline
 *   hoverable
 *   items={[
 *     { title: "Task", href: "/task/123", onClick: () => {} }
 *   ]}
 * />
 *
 * // Collapsible
 * <Timeline
 *   collapsible
 *   collapsedItemsCount={3}
 *   collapseLabel="Show older"
 *   items={[...10 items]}
 * />
 *
 * // Manual composition
 * <Timeline>
 *   <TimelineHeading>1 Aug, 2023</TimelineHeading>
 *   <TimelineItem
 *     title="Created task"
 *     icon="avatar"
 *     avatar="url"
 *     user={{ name: "James", avatar: "url" }}
 *   />
 *   <TimelineItem
 *     title="Bug fixed"
 *     icon="badge"
 *     initials="A"
 *     isLast
 *   />
 * </Timeline>
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
type TimelineItemIcon = "dot" | "avatar" | "icon" | "badge";
interface TimelineItemUser {
    name: string;
    avatar?: string;
    initials?: string;
    onClick?: () => void;
}
declare namespace Timeline {
    interface ItemData {
        title: string | Pulse.JSX.Element;
        description?: string | Pulse.JSX.Element;
        icon?: TimelineItemIcon;
        iconContent?: Pulse.JSX.Element;
        avatar?: string;
        initials?: string;
        user?: TimelineItemUser;
        time?: string;
        href?: string;
        onClick?: () => void;
        hoverable?: boolean;
    }
    interface Group {
        heading: string;
        items: Timeline.ItemData[];
    }
    interface Props extends BaseComponentProps {
        items?: Timeline.ItemData[];
        grouped?: boolean;
        groups?: Timeline.Group[];
        showTime?: boolean;
        timePosition?: "left" | "right";
        hoverable?: boolean;
        collapsible?: boolean;
        collapsedItemsCount?: number;
        collapseLabel?: string;
        lineColor?: string;
        dotColor?: string;
        children?: Pulse.JSX.Element | Pulse.JSX.Element[];
    }
    interface ItemProps extends BaseComponentProps {
        title: string | Pulse.JSX.Element;
        description?: string | Pulse.JSX.Element;
        icon?: TimelineItemIcon;
        iconContent?: Pulse.JSX.Element;
        avatar?: string;
        initials?: string;
        user?: TimelineItemUser;
        time?: string;
        showTime?: boolean;
        timePosition?: "left" | "right";
        href?: string;
        onClick?: () => void;
        hoverable?: boolean;
        isLast?: boolean;
        lineColor?: string;
        dotColor?: string;
    }
    interface HeadingProps extends BaseComponentProps {
        children: string | Pulse.JSX.Element;
    }
}
export declare const Timeline: Pulse.Fn<Timeline.Props> & {
    Item: Pulse.Fn<Timeline.ItemProps>;
    Heading: Pulse.Fn<Timeline.HeadingProps>;
};
export {};
/**
 * Toast Component
 * A notification component for displaying temporary messages with auto-dismiss
 * Reuses Alert structure with positioning and animations
 *
 * @example
 * ```tsx
 * import { Toast } from '@odyssee/components';
 *
 * // Basic toast
 * <Toast type="success" message="File saved successfully!" />
 *
 * // With title and dismissible
 * <Toast
 *   type="error"
 *   title="Error"
 *   message="Failed to save file"
 *   dismissible
 *   onClose={() => console.log('Closed')}
 * />
 *
 * // With auto-dismiss
 * <Toast
 *   type="info"
 *   message="New notification"
 *   duration={3000}
 * />
 *
 * // With actions
 * <Toast
 *   type="success"
 *   message="Your email has been sent"
 *   actions={[
 *     { label: "Undo", onClick: handleUndo }
 *   ]}
 * />
 *
 * // With avatar
 * <Toast
 *   type="default"
 *   title="James mentioned you"
 *   message="Nice work! Keep it up!"
 *   avatar="https://example.com/avatar.jpg"
 *   actions={[
 *     { label: "Mark as read", onClick: handleMarkRead }
 *   ]}
 * />
 *
 * // With progress
 * <Toast
 *   type="default"
 *   title="Uploading 3 files"
 *   progress={57}
 *   progressLabel="57% · 5 seconds left"
 * />
 *
 * // With loading
 * <Toast
 *   type="default"
 *   message="Action in progress"
 *   loading
 * />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
type ToastType = "info" | "success" | "error" | "warning" | "default";
type ToastVariant = "default" | "solid" | "soft";
declare namespace Toast {
    interface Action {
        label: string;
        onClick: (e: Event) => void;
        variant?: "default" | "primary";
    }
    interface Props extends BaseComponentProps {
        type?: ToastType;
        variant?: ToastVariant;
        title?: string;
        message: string | Pulse.JSX.Element;
        icon?: Pulse.JSX.Element;
        avatar?: string;
        duration?: number;
        dismissible?: boolean;
        actions?: Action[];
        progress?: number;
        progressLabel?: string;
        loading?: boolean;
        visible?: boolean | Signal<boolean>;
        onClose?: () => void;
        animated?: boolean;
    }
}
declare const Toast: Pulse.Fn<Toast.Props>;
export { Toast };
/**
 * ToastContainer Component
 * A container for managing toast positioning and stacking
 *
 * @example
 * ```tsx
 * import { ToastContainer, Toast } from '@odyssee/components';
 *
 * // Basic container with position
 * <ToastContainer position="top-right">
 *   <Toast type="success" message="File saved!" />
 *   <Toast type="info" message="New notification" />
 * </ToastContainer>
 *
 * // Center positioned
 * <ToastContainer position="center">
 *   <Toast type="error" message="An error occurred" />
 * </ToastContainer>
 *
 * // Bottom right with custom offset and gap
 * <ToastContainer
 *   position="bottom-right"
 *   offset={20}
 *   gap={12}
 * >
 *   <Toast type="success" message="Upload complete" />
 * </ToastContainer>
 *
 * // With max toasts limit
 * <ToastContainer
 *   position="top-center"
 *   maxToasts={3}
 * >
 *   {toasts.map(toast => (
 *     <Toast key={toast.id} {...toast} />
 *   ))}
 * </ToastContainer>
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
type ToastPosition = "top-left" | "top-center" | "top-right" | "center" | "bottom-left" | "bottom-center" | "bottom-right";
declare namespace ToastContainer {
    interface Props extends BaseComponentProps {
        position?: ToastPosition;
        maxToasts?: number;
        offset?: number;
        gap?: number;
        children?: Pulse.JSX.Element | Pulse.JSX.Element[];
    }
}
declare const ToastContainer: Pulse.Fn<ToastContainer.Props>;
/**
 * TopRightToastContainer - Convenience component
 */
declare const TopRightToastContainer: Pulse.Fn<Omit<ToastContainer.Props, "position">>;
/**
 * TopCenterToastContainer - Convenience component
 */
declare const TopCenterToastContainer: Pulse.Fn<Omit<ToastContainer.Props, "position">>;
/**
 * BottomRightToastContainer - Convenience component
 */
declare const BottomRightToastContainer: Pulse.Fn<Omit<ToastContainer.Props, "position">>;
/**
 * BottomCenterToastContainer - Convenience component
 */
declare const BottomCenterToastContainer: Pulse.Fn<Omit<ToastContainer.Props, "position">>;
export { ToastContainer, TopRightToastContainer, TopCenterToastContainer, BottomRightToastContainer, BottomCenterToastContainer, };
/**
 * Container Component
 * A responsive container component that matches Tailwind's container utility
 * Sets max-width at each breakpoint without automatic centering or padding
 *
 * @example
 * ```tsx
 * import { Container } from '@odyssee/components';
 *
 * // Basic container (needs mx-auto to center)
 * <Container>
 *   <p>Content</p>
 * </Container>
 *
 * // Centered container
 * <Container centered>
 *   <p>Centered content</p>
 * </Container>
 *
 * // With padding
 * <Container centered padding="md">
 *   <p>Centered with padding</p>
 * </Container>
 *
 * // Responsive container (only container at md breakpoint and up)
 * <Container breakpoint="md">
 *   <p>Fluid until md, then container</p>
 * </Container>
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Container {
    /**
     * Container props
     */
    interface Props extends BaseComponentProps {
        /** Content to render inside container */
        children?: Pulse.JSX.Element | Pulse.JSX.Element[] | string;
        /** Center the container (applies mx-auto) */
        centered?: boolean;
        /** Add horizontal padding */
        padding?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
        /** Apply container only at specific breakpoint and up */
        breakpoint?: "sm" | "md" | "lg" | "xl" | "2xl";
        /** Use fluid container (no max-width constraints) */
        fluid?: boolean;
    }
}
/**
 * Container Component
 * Follows Tailwind's container utility pattern
 *
 * Breakpoints:
 * - sm (640px): max-width: 640px (40rem)
 * - md (768px): max-width: 768px (48rem)
 * - lg (1024px): max-width: 1024px (64rem)
 * - xl (1280px): max-width: 1280px (80rem)
 * - 2xl (1536px): max-width: 1536px (96rem)
 *
 * @example
 * ```tsx
 * <Container centered padding="md">
 *   <h1>Welcome</h1>
 *   <p>This content is centered and has padding</p>
 * </Container>
 * ```
 */
declare const Container: Pulse.Fn<Container.Props>;
/**
 * CenteredContainer - Container with automatic centering
 */
declare const CenteredContainer: Pulse.Fn<Container.Props>;
/**
 * FluidContainer - Full width container
 */
declare const FluidContainer: Pulse.Fn<Container.Props>;
export { Container, CenteredContainer, FluidContainer };
/**
 * Grid Component
 * A flexible grid layout component based on CSS Grid with responsive breakpoints
 *
 * @example
 * ```tsx
 * import { Grid, GridItem } from '@odyssee/components';
 *
 * // Basic grid with 3 columns
 * <Grid cols={3} gap={4}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Grid>
 *
 * // Responsive grid
 * <Grid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={4}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 *   <div>Item 4</div>
 * </Grid>
 *
 * // Grid with spanning items
 * <Grid cols={3} gap={4}>
 *   <GridItem colSpan={2}>Spans 2 columns</GridItem>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 *   <GridItem colSpan={2}>Spans 2 columns</GridItem>
 * </Grid>
 *
 * // Grid with rows
 * <Grid cols={3} rows={3} gap={4}>
 *   <GridItem rowSpan={2}>Spans 2 rows</GridItem>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Grid>
 *
 * // Grid with auto flow
 * <Grid cols={3} autoFlow="dense" gap={4}>
 *   <GridItem colSpan={2}>Wide item</GridItem>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Grid>
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
/**
 * Responsive breakpoint value
 */
interface ResponsiveValue<T> {
    base?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
    "2xl"?: T;
}
declare namespace Grid {
    /**
     * Grid props
     */
    interface Props extends BaseComponentProps {
        /** Content to render inside grid */
        children?: Pulse.JSX.Element | Pulse.JSX.Element[] | string;
        /** Number of columns (responsive) */
        cols?: number | ResponsiveValue<number>;
        /** Number of rows (responsive) */
        rows?: number | ResponsiveValue<number>;
        /** Gap between grid items */
        gap?: number | string;
        /** Gap between columns */
        gapX?: number | string;
        /** Gap between rows */
        gapY?: number | string;
        /** Grid auto flow direction */
        autoFlow?: "row" | "col" | "dense" | "row-dense" | "col-dense";
        /** Align items */
        alignItems?: "start" | "center" | "end" | "stretch" | "baseline";
        /** Justify items */
        justifyItems?: "start" | "center" | "end" | "stretch";
        /** Align content */
        alignContent?: "start" | "center" | "end" | "between" | "around" | "evenly";
        /** Justify content */
        justifyContent?: "start" | "center" | "end" | "between" | "around" | "evenly";
        /** Auto columns sizing */
        autoColumns?: "auto" | "min" | "max" | "fr";
        /** Auto rows sizing */
        autoRows?: "auto" | "min" | "max" | "fr";
    }
    /**
     * GridItem props
     */
    interface ItemProps extends BaseComponentProps {
        /** Content to render inside grid item */
        children?: Pulse.JSX.Element | Pulse.JSX.Element[] | string;
        /** Column span */
        colSpan?: number | "full" | "auto";
        /** Row span */
        rowSpan?: number | "full" | "auto";
        /** Column start */
        colStart?: number | "auto";
        /** Column end */
        colEnd?: number | "auto";
        /** Row start */
        rowStart?: number | "auto";
        /** Row end */
        rowEnd?: number | "auto";
        /** Align self */
        alignSelf?: "auto" | "start" | "center" | "end" | "stretch";
        /** Justify self */
        justifySelf?: "auto" | "start" | "center" | "end" | "stretch";
        /** Place self (shorthand for align-self and justify-self) */
        placeSelf?: "auto" | "start" | "center" | "end" | "stretch";
    }
}
declare namespace SimpleGrid {
    interface Props extends Omit<Grid.Props, "cols"> {
        /** Number of columns */
        columns?: number;
        /** Minimum column width (will auto-fit) */
        minChildWidth?: string;
    }
}
/**
 * SimpleGrid - Grid with equal columns
 */
declare const SimpleGrid: Pulse.Fn<SimpleGrid.Props>;
/**
 * ResponsiveGrid - Grid with predefined responsive breakpoints
 */
declare const ResponsiveGrid: Pulse.Fn<Grid.Props>;
export declare const Grid: Pulse.Fn<Grid.Props> & {
    Item: Pulse.Fn<Grid.ItemProps>;
};
export { SimpleGrid, ResponsiveGrid };
/**
 * Columns Component
 * A CSS multi-column layout component for flowing content into multiple columns (magazine/newspaper style)
 *
 * @example
 * ```tsx
 * import { Columns } from '@odyssee/components';
 *
 * // 3 columns layout
 * <Columns count={3}>
 *   <img src="..." />
 *   <img src="..." />
 *   <img src="..." />
 * </Columns>
 *
 * // Columns with specific width
 * <Columns width="xs">
 *   <p>Content flows naturally into columns...</p>
 * </Columns>
 *
 * // With gap between columns
 * <Columns count={3} gap={8}>
 *   <img src="..." />
 *   <img src="..." />
 * </Columns>
 *
 * // Responsive columns
 * <Columns count={{ base: 1, md: 2, lg: 3 }}>
 *   <div>Content...</div>
 * </Columns>
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
/**
 * Responsive column count
 */
interface ResponsiveColumns {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    "2xl"?: number;
}
declare namespace Columns {
    /**
     * Columns props
     */
    interface Props extends BaseComponentProps {
        /** Content to render inside columns */
        children?: Pulse.JSX.Element | Pulse.JSX.Element[] | string;
        /** Number of columns (can be responsive) */
        count?: number | ResponsiveColumns;
        /** Column width (t-shirt sizes) */
        width?: "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
        /** Gap between columns */
        gap?: number | string;
        /** Column rule (divider line between columns) */
        rule?: boolean;
        ruleWidth?: "thin" | "medium" | "thick" | number;
        ruleColor?: string;
        ruleStyle?: "solid" | "dashed" | "dotted" | "double";
        /** Auto-fill columns */
        auto?: boolean;
    }
    interface SpanProps extends BaseComponentProps {
        children?: Pulse.JSX.Element | Pulse.JSX.Element[] | string;
        span?: "all" | number;
    }
}
/**
 * TwoColumns - Quick 2-column layout
 */
declare const TwoColumns: Pulse.Fn<Columns.Props>;
/**
 * ThreeColumns - Quick 3-column layout
 */
declare const ThreeColumns: Pulse.Fn<Columns.Props>;
/**
 * FourColumns - Quick 4-column layout
 */
declare const FourColumns: Pulse.Fn<Columns.Props>;
/**
 * ResponsiveColumns - Responsive column layout
 * 1 column on mobile, 2 on tablet, 3 on desktop
 */
declare const ResponsiveColumns: Pulse.Fn<Columns.Props>;
export declare const Columns: Pulse.Fn<Columns.Props> & {
    Break: Pulse.Fn<BaseComponentProps>;
    Span: Pulse.Fn<Columns.SpanProps>;
};
export { TwoColumns, ThreeColumns, FourColumns, ResponsiveColumns };
/**
 * Typography Components
 * A collection of text and typography components with semantic HTML and consistent styling
 *
 * @example
 * ```tsx
 * import { H1, H2, Text, Lead, Muted, GradientText } from '@odyssee/components';
 *
 * // Headings
 * <H1>Main heading</H1>
 * <H2>Secondary heading</H2>
 *
 * // Text variants
 * <Text>Regular text</Text>
 * <Lead>Lead paragraph text</Lead>
 * <Muted>Muted secondary text</Muted>
 *
 * // Gradient text
 * <GradientText from="blue-500" to="violet-500">
 *   Gradient text
 * </GradientText>
 *
 * // Inline elements
 * <Text>You can use <Mark>highlight</Mark> text</Text>
 * <Text><Strong>Bold text</Strong> and <Em>italic text</Em></Text>
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
/**
 * Text namespace - contains all text and typography related types
 */
declare namespace Text {
    interface Props extends BaseComponentProps {
        /** Content to render */
        children?: Pulse.JSX.Element | Pulse.JSX.Element[] | string;
        /** Text alignment */
        align?: "left" | "center" | "right" | "justify";
        /** Text color */
        color?: string;
        /** Font weight */
        weight?: "thin" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";
        /** Font size */
        size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
        /** Truncate text with ellipsis */
        truncate?: boolean;
        /** Make text uppercase */
        uppercase?: boolean;
        /** Make text lowercase */
        lowercase?: boolean;
        /** Capitalize first letter */
        capitalize?: boolean;
        /** Line clamp (max lines before truncating) */
        lineClamp?: number;
        /** Element tag to render */
        as?: keyof HTMLElementTagNameMap;
    }
    interface HeadingProps extends Omit<Text.Props, "size" | "as"> {
        /** Heading level */
        level?: 1 | 2 | 3 | 4 | 5 | 6;
    }
}
declare namespace GradientText {
    interface Props extends Omit<Text.Props, "color"> {
        /** Gradient start color */
        from: string;
        /** Gradient end color */
        to: string;
        /** Gradient via color (optional middle) */
        via?: string;
        /** Gradient direction */
        direction?: "tl" | "tr" | "br" | "bl" | "t" | "r" | "b" | "l";
    }
}
declare namespace DescriptionList {
    interface Props extends BaseComponentProps {
        /** List items */
        items: Array<{
            term: string | Pulse.JSX.Element;
            description: string | Pulse.JSX.Element;
        }>;
        /** Layout orientation */
        orientation?: "vertical" | "horizontal";
        /** Truncate terms */
        truncateTerms?: boolean;
    }
}
declare namespace Blockquote {
    interface Props extends BaseComponentProps {
        /** Quote content */
        children?: Pulse.JSX.Element | string;
        /** Citation/author */
        cite?: string;
        /** Variant style */
        variant?: "default" | "bordered" | "accent";
    }
}
/**
 * H1 Component - Main heading
 */
declare const H1: Pulse.Fn<Omit<Text.HeadingProps, "level">>;
/**
 * H2 Component - Secondary heading
 */
declare const H2: Pulse.Fn<Omit<Text.HeadingProps, "level">>;
/**
 * H3 Component - Tertiary heading
 */
declare const H3: Pulse.Fn<Omit<Text.HeadingProps, "level">>;
/**
 * H4 Component
 */
declare const H4: Pulse.Fn<Omit<Text.HeadingProps, "level">>;
/**
 * H5 Component
 */
declare const H5: Pulse.Fn<Omit<Text.HeadingProps, "level">>;
/**
 * H6 Component
 */
declare const H6: Pulse.Fn<Omit<Text.HeadingProps, "level">>;
/**
 * Lead - Large lead paragraph
 */
declare const Lead: Pulse.Fn<Text.Props>;
/**
 * Muted - Secondary/muted text
 */
declare const Muted: Pulse.Fn<Text.Props>;
/**
 * Small - Fine print text
 */
declare const Small: Pulse.Fn<Text.Props>;
/**
 * Strong - Bold text
 */
declare const Strong: Pulse.Fn<BaseComponentProps>;
/**
 * Em - Emphasized/italic text
 */
declare const Em: Pulse.Fn<BaseComponentProps>;
/**
 * Mark - Highlighted text
 */
declare const Mark: Pulse.Fn<BaseComponentProps>;
/**
 * Del - Deleted text
 */
declare const Del: Pulse.Fn<BaseComponentProps>;
/**
 * Ins - Inserted text
 */
declare const Ins: Pulse.Fn<BaseComponentProps>;
/**
 * Underline - Underlined text
 */
declare const Underline: Pulse.Fn<BaseComponentProps>;
/**
 * Strikethrough - Text with strikethrough
 */
declare const Strikethrough: Pulse.Fn<BaseComponentProps>;
/**
 * Code - Inline code
 */
declare const Code: Pulse.Fn<BaseComponentProps>;
/**
 * Pre - Preformatted text block
 */
declare const Pre: Pulse.Fn<BaseComponentProps>;
declare const Text: Pulse.Fn<Text.Props> & {
    H1: Pulse.Fn<Omit<Text.HeadingProps, "level">>;
    H2: Pulse.Fn<Omit<Text.HeadingProps, "level">>;
    H3: Pulse.Fn<Omit<Text.HeadingProps, "level">>;
    H4: Pulse.Fn<Omit<Text.HeadingProps, "level">>;
    H5: Pulse.Fn<Omit<Text.HeadingProps, "level">>;
    H6: Pulse.Fn<Omit<Text.HeadingProps, "level">>;
    Lead: Pulse.Fn<Text.Props>;
    Muted: Pulse.Fn<Text.Props>;
    Small: Pulse.Fn<Text.Props>;
    Strong: Pulse.Fn<BaseComponentProps>;
    Em: Pulse.Fn<BaseComponentProps>;
    Mark: Pulse.Fn<BaseComponentProps>;
    Del: Pulse.Fn<BaseComponentProps>;
    Ins: Pulse.Fn<BaseComponentProps>;
    Underline: Pulse.Fn<BaseComponentProps>;
    Strikethrough: Pulse.Fn<BaseComponentProps>;
    Code: Pulse.Fn<BaseComponentProps>;
    Pre: Pulse.Fn<BaseComponentProps>;
};
declare const GradientTextComponent: Pulse.Fn<GradientText.Props>;
declare const DescriptionListComponent: Pulse.Fn<DescriptionList.Props>;
declare const BlockquoteComponent: Pulse.Fn<Blockquote.Props>;
export { Text, H1, H2, H3, H4, H5, H6, Lead, Muted, Small, Strong, Em, Mark, Del, Ins, Underline, Strikethrough, Code, Pre, GradientTextComponent as GradientText, DescriptionListComponent as DescriptionList, BlockquoteComponent as Blockquote, };
export default Text;
/**
 * Link Component
 * A versatile link component with multiple styles, underline variants, and icon support
 *
 * @example
 * ```tsx
 * import { Link, ExternalLink, IconLink } from '@odyssee/components';
 *
 * // Basic link
 * <Link href="/about">About Us</Link>
 *
 * // Link with underline
 * <Link href="/contact" underline="hover">
 *   Contact
 * </Link>
 *
 * // Colored link
 * <Link href="#" color="primary" underline="always">
 *   Primary Link
 * </Link>
 *
 * // Link with custom underline color
 * <Link
 *   href="#"
 *   color="blue-600"
 *   underlineColor="red-500"
 *   underline="hover"
 * >
 *   Custom underline
 * </Link>
 *
 * // Link with opacity
 * <Link href="#" opacity={80}>
 *   80% opacity link
 * </Link>
 *
 * // Link with icon
 * <IconLink href="/learn" icon="→" iconPosition="right">
 *   Learn more
 * </IconLink>
 *
 * // External link (opens in new tab)
 * <ExternalLink href="https://example.com">
 *   External Site
 * </ExternalLink>
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Link {
    /**
     * Link props
     */
    interface Props extends BaseComponentProps {
        /** Link destination */
        href: string;
        /** Link content */
        children?: Pulse.JSX.Element | Pulse.JSX.Element[] | string;
        /** Text color */
        color?: "primary" | "secondary" | "success" | "danger" | "warning" | "dark" | "light" | string;
        /** Underline style */
        underline?: "none" | "always" | "hover" | "focus";
        /** Underline color (independent from text color) */
        underlineColor?: string;
        /** Underline thickness */
        underlineThickness?: "1" | "2" | "4" | "8";
        /** Underline offset */
        underlineOffset?: "1" | "2" | "4" | "8" | "auto";
        /** Link opacity */
        opacity?: number;
        /** Hover opacity */
        hoverOpacity?: number;
        /** Font size */
        size?: "xs" | "sm" | "base" | "lg" | "xl";
        /** Font weight */
        weight?: "normal" | "medium" | "semibold" | "bold";
        /** Open in new tab */
        external?: boolean;
        /** Disabled state */
        disabled?: boolean;
        /** On click handler */
        onClick?: (e: Event) => void;
    }
}
declare namespace IconLink {
    interface Props extends Link.Props {
        /** Icon element or string */
        icon: Pulse.JSX.Element | string;
        /** Icon position */
        iconPosition?: "left" | "right";
        /** Icon size */
        iconSize?: "3" | "4" | "5" | "6";
    }
}
declare namespace NavLink {
    interface Props extends Link.Props {
        /** Active state */
        active?: boolean;
        /** Active color */
        activeColor?: string;
    }
}
declare namespace ButtonLink {
    interface Props extends Omit<Link.Props, "underline"> {
        /** Button variant */
        variant?: "solid" | "outline" | "ghost" | "soft";
        /** Size */
        size?: "sm" | "md" | "lg";
        /** Full width */
        fullWidth?: boolean;
    }
}
/**
 * Link Component
 */
declare const Link: Pulse.Fn<Link.Props>;
/**
 * IconLink - Link with icon
 */
declare const IconLink: Pulse.Fn<IconLink.Props>;
/**
 * ExternalLink - Link that opens in new tab
 */
declare const ExternalLink: Pulse.Fn<Link.Props>;
/**
 * NavLink - Link with active state
 */
declare const NavLink: Pulse.Fn<NavLink.Props>;
/**
 * ButtonLink - Link styled like a button
 */
declare const ButtonLink: Pulse.Fn<ButtonLink.Props>;
/**
 * BackLink - Link with back arrow
 */
declare const BackLink: Pulse.Fn<Omit<Link.Props, "children">>;
/**
 * NextLink - Link with next arrow
 */
declare const NextLink: Pulse.Fn<Omit<Link.Props, "children">>;
export { Link, IconLink, ExternalLink, NavLink, ButtonLink, BackLink, NextLink, };
/**
 * Image Component
 * A versatile image component with responsive features, lazy loading, and styling utilities
 *
 * @example
 * ```tsx
 * import { Image, ImageOverlay, ImageZoom } from '@odyssee/components';
 *
 * // Basic image
 * <Image src="https://example.com/image.jpg" alt="Description" />
 *
 * // Responsive image with fixed size
 * <Image
 *   src="https://example.com/image.jpg"
 *   alt="Description"
 *   width="56"
 *   height="auto"
 * />
 *
 * // Image with object fit
 * <Image
 *   src="https://example.com/image.jpg"
 *   alt="Description"
 *   objectFit="cover"
 *   className="h-48 w-96"
 * />
 *
 * // Image with zoom on hover
 * <ImageZoom src="https://example.com/image.jpg" alt="Description" />
 *
 * // Image with overlay content
 * <ImageOverlay src="https://example.com/image.jpg" alt="Description">
 *   <h3>Overlay Title</h3>
 *   <p>Overlay content</p>
 * </ImageOverlay>
 *
 * // Lazy loaded image
 * <Image
 *   src="https://example.com/image.jpg"
 *   alt="Description"
 *   loading="lazy"
 * />
 *
 * // Rounded image
 * <Image
 *   src="https://example.com/image.jpg"
 *   alt="Description"
 *   rounded="xl"
 * />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Image {
    /**
     * Image props
     */
    interface Props extends BaseComponentProps {
        /** Image source URL */
        src: string;
        /** Alt text for accessibility */
        alt: string;
        /** Image width */
        width?: string | number;
        /** Image height */
        height?: string | number;
        /** Object fit behavior */
        objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
        /** Object position */
        objectPosition?: "center" | "top" | "right" | "bottom" | "left" | "left-top" | "left-bottom" | "right-top" | "right-bottom";
        /** Border radius */
        rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
        /** Loading strategy */
        loading?: "eager" | "lazy";
        /** Image will be block or inline */
        display?: "block" | "inline" | "inline-block";
        /** Aspect ratio */
        aspectRatio?: "square" | "video" | "4/3" | "16/9" | "21/9" | "auto";
        /** On load callback */
        onLoad?: () => void;
        /** On error callback */
        onError?: () => void;
        /** Fallback image source on error */
        fallbackSrc?: string;
    }
}
declare namespace ImageZoom {
    interface Props extends Image.Props {
        /** Zoom scale on hover */
        zoomScale?: number;
        /** Transition duration in ms */
        duration?: number;
    }
}
declare namespace ImageOverlay {
    interface Props extends Omit<Image.Props, "children"> {
        /** Overlay content */
        children?: Pulse.JSX.Element | Pulse.JSX.Element[] | string;
        /** Overlay position */
        overlayPosition?: "top" | "bottom" | "center" | "full";
        /** Enable hover shadow */
        hoverShadow?: boolean;
        /** Link href */
        href?: string;
    }
}
declare namespace BackgroundImage {
    interface Props extends BaseComponentProps {
        /** Background image URL */
        src: string;
        /** Background size */
        size?: "auto" | "cover" | "contain";
        /** Background position */
        position?: "center" | "top" | "right" | "bottom" | "left" | "left-top" | "left-bottom" | "right-top" | "right-bottom";
        /** Background repeat */
        repeat?: "repeat" | "no-repeat" | "repeat-x" | "repeat-y";
        /** Background attachment */
        attachment?: "fixed" | "local" | "scroll";
        /** Content to overlay */
        children?: Pulse.JSX.Element | Pulse.JSX.Element[] | string;
        /** Min height */
        minHeight?: string;
        /** Border radius */
        rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
    }
}
declare namespace AvatarImage {
    interface Props extends Omit<Image.Props, "rounded"> {
        /** Avatar size */
        size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    }
}
/**
 * Image Component
 */
declare const Image: Pulse.Fn<Image.Props>;
/**
 * ImageZoom - Image with zoom effect on hover
 */
declare const ImageZoom: Pulse.Fn<ImageZoom.Props>;
/**
 * ImageOverlay - Image with content overlay
 */
declare const ImageOverlay: Pulse.Fn<ImageOverlay.Props>;
/**
 * BackgroundImage - Div with background image
 */
declare const BackgroundImage: Pulse.Fn<BackgroundImage.Props>;
/**
 * Avatar Image - Circular image for avatars
 */
declare const AvatarImage: Pulse.Fn<AvatarImage.Props>;
/**
 * Thumbnail - Fixed size image thumbnail
 */
export declare const Thumbnail: Pulse.Fn<Image.Props>;
/**
 * FullscreenImage - Full screen background image
 */
export declare const FullscreenImage: Pulse.Fn<BackgroundImage.Props>;
export { Image, ImageZoom, ImageOverlay, BackgroundImage, AvatarImage };
/**
 * LayoutSplitter Component
 * A resizable split pane layout component with drag handles
 *
 * @example
 * ```tsx
 * import { LayoutSplitter, SplitterPanel, SplitterHandle } from '@odyssee/components';
 *
 * // Horizontal splitter
 * <LayoutSplitter direction="horizontal">
 *   <SplitterPanel size={50}>Left panel</SplitterPanel>
 *   <SplitterPanel size={50}>Right panel</SplitterPanel>
 * </LayoutSplitter>
 *
 * // Vertical splitter
 * <LayoutSplitter direction="vertical">
 *   <SplitterPanel size={30}>Top panel</SplitterPanel>
 *   <SplitterPanel size={70}>Bottom panel</SplitterPanel>
 * </LayoutSplitter>
 *
 * // With min/max constraints
 * <LayoutSplitter direction="horizontal">
 *   <SplitterPanel size={40} minSize={20} maxSize={60}>
 *     Left with constraints
 *   </SplitterPanel>
 *   <SplitterPanel size={60}>Right panel</SplitterPanel>
 * </LayoutSplitter>
 *
 * // Nested splitters
 * <LayoutSplitter direction="vertical">
 *   <SplitterPanel size={30}>Top</SplitterPanel>
 *   <SplitterPanel size={50}>
 *     <LayoutSplitter direction="horizontal">
 *       <SplitterPanel size={50}>Left</SplitterPanel>
 *       <SplitterPanel size={50}>Right</SplitterPanel>
 *     </LayoutSplitter>
 *   </SplitterPanel>
 *   <SplitterPanel size={20}>Bottom</SplitterPanel>
 * </LayoutSplitter>
 *
 * // Manual handle placement
 * <LayoutSplitter direction="horizontal" manualHandles>
 *   <SplitterPanel size={50}>Left</SplitterPanel>
 *   <SplitterHandle />
 *   <SplitterPanel size={50}>Right</SplitterPanel>
 * </LayoutSplitter>
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace LayoutSplitter {
    /**
     * LayoutSplitter props
     */
    interface Props extends BaseComponentProps {
        /** Content (SplitterPanel components) */
        children?: Pulse.JSX.Element | Pulse.JSX.Element[];
        /** Split direction */
        direction?: "horizontal" | "vertical";
        /** Custom handle template */
        handleTemplate?: Pulse.JSX.Element | string;
        /** Custom handle classes */
        handleClasses?: string;
        /** Manual handle placement */
        manualHandles?: boolean;
        /** Callback when sizes change */
        onResize?: (sizes: number[]) => void;
        /** Enable/disable resizing */
        disabled?: boolean;
    }
    /**
     * SplitterPanel props
     */
    interface PanelProps extends BaseComponentProps {
        /** Content to render inside panel */
        children?: Pulse.JSX.Element | Pulse.JSX.Element[] | string;
        /** Initial size (percentage 0-100) */
        size: number | Signal<number>;
        /** Minimum size (percentage) */
        minSize?: number;
        /** Maximum size (percentage) */
        maxSize?: number;
        /** Custom class when min limit reached */
        limitReachedClass?: string;
    }
    /**
     * SplitterHandle props
     */
    interface HandleProps extends BaseComponentProps {
        /** Handle direction (inherited from parent if not specified) */
        direction?: "horizontal" | "vertical";
        /** Custom handle content */
        children?: Pulse.JSX.Element | string;
    }
}
declare namespace CodeEditorLayout {
    interface Props extends Omit<LayoutSplitter.Props, "children"> {
        /** Sidebar content */
        sidebar?: Pulse.JSX.Element | string;
        /** Editor content */
        editor: Pulse.JSX.Element | string;
        /** Preview content */
        preview?: Pulse.JSX.Element | string;
        /** Initial sidebar size */
        sidebarSize?: number;
        /** Initial editor size */
        editorSize?: number;
    }
}
declare namespace ThreePanelLayout {
    interface Props extends Omit<LayoutSplitter.Props, "children"> {
        /** Top panel content */
        top: Pulse.JSX.Element | string;
        /** Middle panel content */
        middle: Pulse.JSX.Element | string;
        /** Bottom panel content */
        bottom: Pulse.JSX.Element | string;
        /** Initial sizes */
        topSize?: number;
        middleSize?: number;
        bottomSize?: number;
    }
}
/**
 * HorizontalSplitter - Quick horizontal layout splitter
 */
declare const HorizontalSplitter: Pulse.Fn<LayoutSplitter.Props>;
/**
 * VerticalSplitter - Quick vertical layout splitter
 */
declare const VerticalSplitter: Pulse.Fn<LayoutSplitter.Props>;
/**
 * CodeEditorLayout - Common code editor layout (sidebar + editor + preview)
 */
declare const CodeEditorLayout: Pulse.Fn<CodeEditorLayout.Props>;
/**
 * ThreePanelLayout - Top, middle, bottom layout
 */
declare const ThreePanelLayout: Pulse.Fn<ThreePanelLayout.Props>;
export declare const LayoutSplitter: Pulse.Fn<LayoutSplitter.Props> & {
    Panel: Pulse.Fn<LayoutSplitter.PanelProps>;
    Handle: Pulse.Fn<LayoutSplitter.HandleProps>;
};
export { HorizontalSplitter, VerticalSplitter, CodeEditorLayout, ThreePanelLayout, };
/**
 * CustomScrollbar Component
 * A wrapper component that applies custom scrollbar styling to its content
 *
 * @example
 * ```tsx
 * import { CustomScrollbar, ScrollArea } from '@odyssee/components';
 *
 * // Basic custom scrollbar
 * <CustomScrollbar maxHeight="100">
 *   <p>Long content that will scroll...</p>
 * </CustomScrollbar>
 *
 * // Thin scrollbar with rounded corners
 * <CustomScrollbar
 *   maxHeight="96"
 *   width="thin"
 *   rounded={true}
 *   trackColor="gray-100"
 *   thumbColor="gray-300"
 * >
 *   <p>Content...</p>
 * </CustomScrollbar>
 *
 * // Custom colors
 * <CustomScrollbar
 *   maxHeight="80"
 *   trackColor="blue-50"
 *   thumbColor="blue-400"
 *   thumbHoverColor="blue-500"
 * >
 *   <p>Content...</p>
 * </CustomScrollbar>
 *
 * // Auto-hide scrollbar
 * <CustomScrollbar maxHeight="100" autoHide={true}>
 *   <p>Content...</p>
 * </CustomScrollbar>
 *
 * // Horizontal scrollbar
 * <CustomScrollbar orientation="horizontal" maxWidth="full">
 *   <div class="flex gap-4">
 *     <div>Item 1</div>
 *     <div>Item 2</div>
 *     <div>Item 3</div>
 *   </div>
 * </CustomScrollbar>
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace CustomScrollbar {
    /**
     * CustomScrollbar props
     */
    interface Props extends BaseComponentProps {
        /** Content to render with custom scrollbar */
        children?: Pulse.JSX.Element | Pulse.JSX.Element[] | string;
        /** Maximum height */
        maxHeight?: string;
        /** Maximum width (for horizontal scrollbars) */
        maxWidth?: string;
        /** Scrollbar width */
        width?: "thin" | "normal" | "thick" | string;
        /** Scrollbar orientation */
        orientation?: "vertical" | "horizontal" | "both";
        /** Track background color */
        trackColor?: string;
        /** Thumb (handle) color */
        thumbColor?: string;
        /** Thumb hover color */
        thumbHoverColor?: string;
        /** Rounded scrollbar */
        rounded?: boolean;
        /** Auto-hide scrollbar when not hovering */
        autoHide?: boolean;
        /** Custom scrollbar styles */
        scrollbarStyles?: Record<string, string>;
    }
}
declare namespace ScrollArea {
    interface Props extends Omit<CustomScrollbar.Props, "rounded" | "width"> {
        /** Variant style */
        variant?: "default" | "minimal" | "accent";
    }
}
/**
 * CustomScrollbar Component
 */
declare const CustomScrollbar: Pulse.Fn<CustomScrollbar.Props>;
/**
 * ScrollArea - Preset scroll area with custom scrollbar
 */
declare const ScrollArea: Pulse.Fn<ScrollArea.Props>;
/**
 * ThinScrollbar - Quick preset for thin scrollbar
 */
declare const ThinScrollbar: Pulse.Fn<CustomScrollbar.Props>;
/**
 * CodeScrollbar - Scrollbar preset for code blocks
 */
declare const CodeScrollbar: Pulse.Fn<CustomScrollbar.Props>;
/**
 * ChatScrollbar - Scrollbar preset for chat interfaces
 */
declare const ChatScrollbar: Pulse.Fn<CustomScrollbar.Props>;
/**
 * TableScrollbar - Scrollbar for tables (horizontal + vertical)
 */
declare const TableScrollbar: Pulse.Fn<CustomScrollbar.Props>;
export { CustomScrollbar, ScrollArea, ThinScrollbar, CodeScrollbar, ChatScrollbar, TableScrollbar, };
/**
 * Input Component
 * A flexible text input component with labels, hints, icons, and validation states
 *
 * @example
 * ```tsx
 * import { Input } from '@odyssee/components';
 *
 * // Basic input
 * <Input placeholder="Enter your name" onChange={(value) => console.log(value)} />
 *
 * // With label and hint
 * <Input
 *   label="Email"
 *   hint="We will never share your email"
 *   type="email"
 *   required={true}
 * />
 *
 * // With reactive value
 * const email = Pulse.signal('');
 * <Input
 *   label="Email"
 *   value={email}
 *   onChange={(val) => email(val)}
 * />
 *
 * // With error state
 * <Input
 *   label="Username"
 *   error="Username is already taken"
 *   value="john"
 * />
 *
 * // With icon
 * <Input
 *   label="Search"
 *   icon="🔍"
 *   iconPosition="left"
 *   placeholder="Search..."
 * />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Input {
    interface Props extends BaseComponentProps {
        type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search";
        value?: string | Signal<string>;
        placeholder?: string;
        disabled?: boolean;
        readonly?: boolean;
        required?: boolean;
        error?: string;
        label?: string;
        hint?: string;
        size?: Size;
        icon?: string;
        iconPosition?: "left" | "right";
        onChange?: ChangeCallback<string>;
        onFocus?: EventCallback;
        onBlur?: EventCallback;
    }
}
declare const Input: Pulse.Fn<Input.Props>;
export { Input };
/**
 * Select Component
 * A customizable select dropdown with support for groups, search, and multiple selection
 *
 * @example
 * ```tsx
 * import { Select } from '@odyssee/components';
 *
 * // Basic select
 * <Select
 *   options={[
 *     { value: '1', label: 'Option 1' },
 *     { value: '2', label: 'Option 2' },
 *     { value: '3', label: 'Option 3' }
 *   ]}
 *   onChange={(value) => console.log(value)}
 * />
 *
 * // With label and placeholder
 * <Select
 *   label="Country"
 *   placeholder="Select a country"
 *   options={[
 *     { value: 'us', label: 'United States' },
 *     { value: 'uk', label: 'United Kingdom' },
 *     { value: 'fr', label: 'France' }
 *   ]}
 * />
 *
 * // With reactive value
 * const country = Pulse.signal('us');
 * <Select
 *   label="Country"
 *   value={country}
 *   options={[...]}
 *   onChange={(val) => country(val)}
 * />
 *
 * // With groups
 * <Select
 *   label="Fruit"
 *   options={[
 *     { value: 'apple', label: 'Apple', group: 'Common' },
 *     { value: 'banana', label: 'Banana', group: 'Common' },
 *     { value: 'mango', label: 'Mango', group: 'Exotic' },
 *     { value: 'papaya', label: 'Papaya', group: 'Exotic' }
 *   ]}
 * />
 *
 * // With error
 * <Select
 *   label="Status"
 *   error="Please select a status"
 *   options={[...]}
 * />
 *
 * // Multiple selection
 * <Select
 *   label="Tags"
 *   multiple={true}
 *   options={[...]}
 * />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Select {
    interface Option {
        value: string | number;
        label: string;
        disabled?: boolean;
        group?: string;
    }
    interface Props extends BaseComponentProps {
        value?: string | number | Signal<string | number>;
        options: Select.Option[];
        placeholder?: string;
        disabled?: boolean;
        required?: boolean;
        error?: string;
        label?: string;
        hint?: string;
        size?: Size;
        multiple?: boolean;
        searchable?: boolean;
        onChange?: ChangeCallback<string | number | (string | number)[]>;
    }
}
declare const Select: Pulse.Fn<Select.Props>;
export { Select };
/**
 * Checkbox Component
 * A customizable checkbox with label, description, and validation states
 *
 * @example
 * ```tsx
 * import { Checkbox } from '@odyssee/components';
 *
 * // Basic checkbox
 * <Checkbox label="Accept terms" onChange={(checked) => console.log(checked)} />
 *
 * // With description
 * <Checkbox
 *   label="Notifications"
 *   description="Notify me when this action happens"
 *   onChange={(checked) => console.log(checked)}
 * />
 *
 * // With reactive value
 * const isChecked = Pulse.signal(false);
 * <Checkbox
 *   label="Subscribe"
 *   checked={isChecked}
 *   onChange={(checked) => isChecked(checked)}
 * />
 *
 * // With error state
 * <Checkbox
 *   label="Accept terms"
 *   error="You must accept the terms"
 *   required={true}
 * />
 *
 * // Indeterminate state
 * <Checkbox
 *   label="Select all"
 *   indeterminate={true}
 *   onChange={(checked) => console.log(checked)}
 * />
 *
 * // Disabled
 * <Checkbox label="Disabled option" disabled={true} checked={true} />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Checkbox {
    interface Props extends BaseComponentProps {
        checked?: boolean | Signal<boolean>;
        indeterminate?: boolean | Signal<boolean>;
        disabled?: boolean;
        required?: boolean;
        label?: string;
        description?: string;
        error?: string | boolean;
        success?: string | boolean;
        size?: Size;
        labelPosition?: "left" | "right";
        name?: string;
        value?: string | number;
        onChange?: ChangeCallback<boolean>;
    }
}
declare const Checkbox: Pulse.Fn<Checkbox.Props>;
export { Checkbox };
/**
 * Radio Component
 * A customizable radio button with label, description, and validation states
 *
 * @example
 * ```tsx
 * import { Radio } from '@odyssee/components';
 *
 * // Basic radio
 * <Radio
 *   name="color"
 *   value="red"
 *   label="Red"
 *   onChange={(value) => console.log(value)}
 * />
 *
 * // Radio group
 * const selectedColor = Pulse.signal('blue');
 * <Radio
 *   name="color"
 *   value="blue"
 *   label="Blue"
 *   checked={Pulse.computed(() => selectedColor() === 'blue')}
 *   onChange={(value) => selectedColor(value)}
 * />
 *
 * // With description
 * <Radio
 *   name="plan"
 *   value="pro"
 *   label="Pro Plan"
 *   description="$29/month - All features included"
 *   onChange={(value) => console.log(value)}
 * />
 *
 * // With error state
 * <Radio
 *   name="option"
 *   value="opt1"
 *   label="Option 1"
 *   error="This option is not available"
 *   disabled={true}
 * />
 *
 * // Disabled
 * <Radio
 *   name="option"
 *   value="opt2"
 *   label="Option 2"
 *   disabled={true}
 *   checked={true}
 * />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Radio {
    interface Props extends BaseComponentProps {
        name?: string;
        value?: string | number;
        checked?: boolean | Signal<boolean>;
        disabled?: boolean;
        required?: boolean;
        label?: string;
        description?: string;
        error?: string | boolean;
        success?: string | boolean;
        size?: Size;
        labelPosition?: "left" | "right";
        onChange?: ChangeCallback<string | number>;
    }
}
declare const Radio: Pulse.Fn<Radio.Props>;
export { Radio };
/**
 * RadioGroup Component
 * A component for managing a group of radio buttons with a single value
 *
 * @example
 * ```tsx
 * import { RadioGroup } from '@odyssee/components';
 *
 * // Basic radio group
 * <RadioGroup
 *   name="color"
 *   options={[
 *     { value: 'red', label: 'Red' },
 *     { value: 'blue', label: 'Blue' },
 *     { value: 'green', label: 'Green' }
 *   ]}
 *   onChange={(value) => console.log(value)}
 * />
 *
 * // With reactive value
 * const selectedColor = Pulse.signal('blue');
 * <RadioGroup
 *   name="color"
 *   label="Choose a color"
 *   value={selectedColor}
 *   options={[
 *     { value: 'red', label: 'Red' },
 *     { value: 'blue', label: 'Blue' },
 *     { value: 'green', label: 'Green' }
 *   ]}
 *   onChange={(value) => selectedColor(value)}
 * />
 *
 * // With descriptions
 * <RadioGroup
 *   name="plan"
 *   label="Select a plan"
 *   options={[
 *     { value: 'free', label: 'Free', description: 'Basic features' },
 *     { value: 'pro', label: 'Pro', description: '$29/month - All features' },
 *     { value: 'enterprise', label: 'Enterprise', description: 'Custom pricing' }
 *   ]}
 * />
 *
 * // Horizontal layout
 * <RadioGroup
 *   name="size"
 *   label="Size"
 *   direction="horizontal"
 *   options={[
 *     { value: 'sm', label: 'Small' },
 *     { value: 'md', label: 'Medium' },
 *     { value: 'lg', label: 'Large' }
 *   ]}
 * />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace RadioGroup {
    interface Option {
        value: string | number;
        label: string;
        description?: string;
        disabled?: boolean;
    }
    interface Props extends BaseComponentProps {
        name?: string;
        value?: string | number | Signal<string | number>;
        options: RadioGroup.Option[];
        label?: string;
        hint?: string;
        error?: string;
        required?: boolean;
        disabled?: boolean;
        size?: Size;
        direction?: "vertical" | "horizontal";
        onChange?: ChangeCallback<string | number>;
    }
}
declare const RadioGroup: Pulse.Fn<RadioGroup.Props>;
export { RadioGroup };
/**
 * Toggle/Switch Component
 * A customizable switch component with label, description, icons, and validation states
 *
 * @example
 * ```tsx
 * import { Toggle } from '@odyssee/components';
 *
 * // Basic toggle
 * <Toggle label="Enable notifications" onChange={(checked) => console.log(checked)} />
 *
 * // With description
 * <Toggle
 *   label="Auto-save"
 *   description="Automatically save your changes"
 *   onChange={(checked) => console.log(checked)}
 * />
 *
 * // With reactive value
 * const isEnabled = Pulse.signal(false);
 * <Toggle
 *   label="Dark mode"
 *   checked={isEnabled}
 *   onChange={(checked) => isEnabled(checked)}
 * />
 *
 * // With icons
 * <Toggle
 *   label="Power"
 *   showIcons={true}
 *   onChange={(checked) => console.log(checked)}
 * />
 *
 * // Different sizes
 * <Toggle label="Small toggle" size="sm" onChange={(checked) => console.log(checked)} />
 *
 * // Soft variant
 * <Toggle label="Soft toggle" variant="soft" onChange={(checked) => console.log(checked)} />
 *
 * // With labels on both sides (pricing toggle style)
 * <Toggle
 *   labelBefore="Monthly"
 *   label="Annual"
 *   onChange={(checked) => console.log(checked ? "Annual" : "Monthly")}
 * />
 *
 * // With error/success state
 * <Toggle label="Accept terms" error="You must accept the terms" required={true} />
 *
 * // Disabled
 * <Toggle label="Disabled option" disabled={true} checked={true} />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Toggle {
    interface Props extends BaseComponentProps {
        checked?: boolean | Signal<boolean>;
        disabled?: boolean;
        required?: boolean;
        label?: string;
        labelBefore?: string;
        description?: string;
        error?: string | boolean;
        success?: string | boolean;
        size?: "xs" | "sm" | "md" | "lg";
        variant?: "default" | "soft";
        showIcons?: boolean;
        labelPosition?: "left" | "right";
        name?: string;
        onChange?: ChangeCallback<boolean>;
    }
}
declare const Toggle: Pulse.Fn<Toggle.Props>;
export { Toggle };
/**
 * Textarea Component
 * A flexible multiline text input with labels, hints, auto-resize, and character count
 *
 * @example
 * ```tsx
 * import { Textarea } from '@odyssee/components';
 *
 * // Basic textarea
 * <Textarea placeholder="Enter your message" onChange={(value) => console.log(value)} />
 *
 * // With label and hint
 * <Textarea
 *   label="Comment"
 *   hint="We will get back to you soon."
 *   rows={3}
 *   required={true}
 * />
 *
 * // With reactive value
 * const message = Pulse.signal('');
 * <Textarea
 *   label="Message"
 *   value={message}
 *   onChange={(val) => message(val)}
 * />
 *
 * // With error state
 * <Textarea
 *   label="Feedback"
 *   error="Your message should be at least 10 characters long"
 *   value="Short"
 * />
 *
 * // With character count
 * <Textarea
 *   label="Bio"
 *   maxLength={200}
 *   showCount={true}
 *   placeholder="Tell us about yourself"
 * />
 *
 * // Auto-resize
 * <Textarea
 *   label="Description"
 *   autoResize={true}
 *   minRows={2}
 *   maxRows={8}
 * />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Textarea {
    interface Props extends BaseComponentProps {
        value?: string | Signal<string>;
        placeholder?: string;
        disabled?: boolean;
        readonly?: boolean;
        required?: boolean;
        error?: string;
        label?: string;
        hint?: string;
        size?: Size;
        rows?: number;
        maxLength?: number;
        showCount?: boolean;
        autoResize?: boolean;
        minRows?: number;
        maxRows?: number;
        onChange?: ChangeCallback<string>;
        onFocus?: EventCallback;
        onBlur?: EventCallback;
        name?: string;
        autocomplete?: string;
    }
}
declare const Textarea: Pulse.Fn<Textarea.Props>;
export { Textarea };
/**
 * FileInput Component
 * A file input component with label, validation, and multiple style variants
 *
 * @example
 * ```tsx
 * import { FileInput } from '@odyssee/components';
 *
 * // Basic file input
 * <FileInput label="Upload file" onChange={(files) => console.log(files)} />
 *
 * // With accept filter
 * <FileInput
 *   label="Upload image"
 *   accept="image/*"
 *   onChange={(files) => console.log(files)}
 * />
 *
 * // Multiple files
 * <FileInput
 *   label="Upload documents"
 *   multiple={true}
 *   accept=".pdf,.doc,.docx"
 *   onChange={(files) => console.log(files)}
 * />
 *
 * // With button style
 * <FileInput
 *   label="Choose profile photo"
 *   buttonText="Browse"
 *   variant="button"
 *   accept="image/*"
 * />
 *
 * // With error
 * <FileInput
 *   label="Upload"
 *   error="File size must be less than 5MB"
 *   required={true}
 * />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace FileInput {
    interface Props extends BaseComponentProps {
        label?: string;
        hint?: string;
        error?: string;
        accept?: string;
        multiple?: boolean;
        required?: boolean;
        disabled?: boolean;
        size?: Size;
        variant?: "default" | "button";
        buttonText?: string;
        placeholder?: string;
        maxSize?: number;
        onChange?: ChangeCallback<FileList>;
        name?: string;
    }
}
declare const FileInput: Pulse.Fn<FileInput.Props>;
export { FileInput };
/**
 * RangeSlider Component
 * A range slider component for selecting numeric values within a defined range
 *
 * @example
 * ```tsx
 * import { RangeSlider } from '@odyssee/components';
 *
 * // Basic range slider
 * <RangeSlider label="Volume" onChange={(value) => console.log(value)} />
 *
 * // With reactive value
 * const volume = Pulse.signal(50);
 * <RangeSlider
 *   label="Volume"
 *   value={volume}
 *   onChange={(val) => volume(val)}
 * />
 *
 * // With min, max, and step
 * <RangeSlider
 *   label="Price"
 *   min={0}
 *   max={1000}
 *   step={10}
 *   value={500}
 *   showValue={true}
 *   onChange={(value) => console.log(value)}
 * />
 *
 * // With custom format
 * <RangeSlider
 *   label="Temperature"
 *   min={-10}
 *   max={40}
 *   value={20}
 *   showValue={true}
 *   valueFormat={(val) => `${val}°C`}
 *   onChange={(value) => console.log(value)}
 * />
 *
 * // Disabled
 * <RangeSlider label="Brightness" value={75} disabled={true} />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace RangeSlider {
    interface Props extends BaseComponentProps {
        value?: number | Signal<number>;
        min?: number;
        max?: number;
        step?: number;
        label?: string;
        hint?: string;
        error?: string;
        disabled?: boolean;
        showValue?: boolean;
        valueFormat?: (value: number) => string;
        onChange?: ChangeCallback<number>;
        name?: string;
    }
}
declare const RangeSlider: Pulse.Fn<RangeSlider.Props>;
export { RangeSlider };
/**
 * ColorPicker Component
 * A color picker component using HTML5 color input with reactive value support
 *
 * @example
 * ```tsx
 * import { ColorPicker } from '@odyssee/components';
 *
 * // Basic color picker
 * <ColorPicker label="Choose color" onChange={(color) => console.log(color)} />
 *
 * // With reactive value
 * const color = Pulse.signal('#3b82f6');
 * <ColorPicker
 *   label="Theme color"
 *   value={color}
 *   onChange={(val) => color(val)}
 * />
 *
 * // With hint
 * <ColorPicker
 *   label="Brand color"
 *   hint="Select your primary brand color"
 *   value="#10b981"
 * />
 *
 * // With error
 * <ColorPicker
 *   label="Color"
 *   error="Please select a valid color"
 *   required={true}
 * />
 *
 * // Disabled
 * <ColorPicker label="Color" value="#ef4444" disabled={true} />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace ColorPicker {
    interface Props extends BaseComponentProps {
        value?: string | Signal<string>;
        label?: string;
        hint?: string;
        error?: string;
        disabled?: boolean;
        required?: boolean;
        size?: Size;
        showValue?: boolean;
        onChange?: ChangeCallback<string>;
        name?: string;
    }
}
declare const ColorPicker: Pulse.Fn<ColorPicker.Props>;
export { ColorPicker };
/**
 * TimePicker Component
 * A time picker with dropdown for easy time selection
 *
 * @example
 * ```tsx
 * import { TimePicker } from '@odyssee/components';
 *
 * // Basic time picker
 * <TimePicker placeholder="Select time" onChange={(time) => console.log(time)} />
 *
 * // 12-hour format
 * <TimePicker format="12h" onChange={(time) => console.log(time)} />
 *
 * // 24-hour format (default)
 * <TimePicker format="24h" onChange={(time) => console.log(time)} />
 *
 * // With reactive value
 * const time = Pulse.signal('14:30');
 * <TimePicker
 *   value={time}
 *   onChange={(val) => time(val)}
 * />
 *
 * // With label and validation
 * <TimePicker
 *   label="Appointment Time"
 *   required={true}
 *   error="Please select a time"
 * />
 *
 * // With minute step
 * <TimePicker
 *   minuteStep={15}
 *   onChange={(time) => console.log(time)}
 * />
 *
 * // Disabled state
 * <TimePicker disabled={true} value="09:00" />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace TimePicker {
    interface Props extends BaseComponentProps {
        value?: string | Signal<string>;
        format?: "12h" | "24h";
        label?: string;
        hint?: string;
        error?: string;
        placeholder?: string;
        disabled?: boolean;
        required?: boolean;
        size?: Size;
        minuteStep?: number;
        showNowButton?: boolean;
        onChange?: ChangeCallback<string>;
        name?: string;
    }
}
declare const TimePicker: Pulse.Fn<TimePicker.Props>;
export { TimePicker };
/**
 * TogglePassword Component
 * An input component that allows users to toggle between showing and hiding password text
 *
 * @example
 * ```tsx
 * import { TogglePassword } from '@odyssee/components';
 *
 * // Basic usage
 * <TogglePassword
 *   placeholder="Enter password"
 *   onChange={(value) => console.log(value)}
 * />
 *
 * // With label and validation
 * <TogglePassword
 *   label="Password"
 *   hint="Must be at least 8 characters"
 *   error="Password is required"
 *   required={true}
 * />
 *
 * // With reactive value
 * const password = Pulse.signal('');
 * <TogglePassword
 *   label="Password"
 *   value={password}
 *   onChange={(val) => password(val)}
 * />
 *
 * // Default visible
 * <TogglePassword
 *   label="Password"
 *   defaultVisible={true}
 *   placeholder="Enter password"
 * />
 *
 * // Without toggle button
 * <TogglePassword
 *   label="Password"
 *   showToggleButton={false}
 * />
 *
 * // Different sizes
 * <TogglePassword label="Small" size="sm" />
 * <TogglePassword label="Medium" size="md" />
 * <TogglePassword label="Large" size="lg" />
 *
 * // Disabled state
 * <TogglePassword
 *   label="Password"
 *   disabled={true}
 *   value="locked"
 * />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace TogglePassword {
    interface Props extends BaseComponentProps {
        value?: string | Signal<string>;
        placeholder?: string;
        disabled?: boolean;
        readonly?: boolean;
        required?: boolean;
        error?: string;
        label?: string;
        hint?: string;
        size?: Size;
        defaultVisible?: boolean;
        showToggleButton?: boolean;
        onChange?: ChangeCallback<string>;
        onFocus?: EventCallback;
        onBlur?: EventCallback;
        name?: string;
    }
}
declare const TogglePassword: Pulse.Fn<TogglePassword.Props>;
export { TogglePassword };
/**
 * InputNumber Component
 * A quantity selector component with increment/decrement buttons for numerical input
 *
 * @example
 * ```tsx
 * import { InputNumber } from '@odyssee/components';
 *
 * // Basic usage
 * <InputNumber
 *   value={1}
 *   onChange={(val) => console.log(val)}
 * />
 *
 * // With label and description
 * <InputNumber
 *   label="Quantity"
 *   description="Select quantity"
 *   value={0}
 *   onChange={(val) => console.log(val)}
 * />
 *
 * // With reactive value
 * const quantity = Pulse.signal(1);
 * <InputNumber
 *   value={quantity}
 *   onChange={(val) => quantity(val)}
 * />
 *
 * // With min, max, and step
 * <InputNumber
 *   min={0}
 *   max={10}
 *   step={2}
 *   value={0}
 * />
 *
 * // Vertical variant
 * <InputNumber
 *   variant="vertical"
 *   label="Additional seats"
 *   description="$39 monthly"
 * />
 *
 * // Horizontal variant
 * <InputNumber
 *   variant="horizontal"
 *   value={1}
 * />
 *
 * // Mini variant
 * <InputNumber
 *   variant="mini"
 *   value={0}
 * />
 *
 * // With validation error
 * <InputNumber
 *   value={10}
 *   error="Out of limit"
 *   max={5}
 * />
 *
 * // Disabled
 * <InputNumber
 *   value={5}
 *   disabled={true}
 * />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace InputNumber {
    interface Props extends BaseComponentProps {
        value?: number | Signal<number>;
        min?: number;
        max?: number;
        step?: number;
        disabled?: boolean;
        label?: string;
        description?: string;
        error?: string;
        hint?: string;
        variant?: "default" | "vertical" | "horizontal" | "mini";
        size?: Size;
        buttonShape?: "rounded" | "square";
        showButtons?: boolean;
        onChange?: ChangeCallback<number>;
        name?: string;
    }
}
declare const InputNumber: Pulse.Fn<InputNumber.Props>;
export { InputNumber };
/**
 * PinInput Component
 * A component for entering PIN codes, OTP, verification codes with auto-focus management
 *
 * @example
 * ```tsx
 * import { PinInput } from '@odyssee/components';
 *
 * // Basic usage (4 digits)
 * <PinInput
 *   length={4}
 *   onChange={(value) => console.log(value)}
 * />
 *
 * // With label and validation
 * <PinInput
 *   length={6}
 *   label="Enter verification code"
 *   hint="Check your email for the code"
 *   error="Invalid code"
 *   onChange={(value) => console.log(value)}
 * />
 *
 * // With reactive value
 * const code = Pulse.signal('');
 * <PinInput
 *   length={4}
 *   value={code}
 *   onChange={(val) => code(val)}
 * />
 *
 * // Numbers only
 * <PinInput
 *   length={4}
 *   type="numeric"
 *   placeholder="⚬"
 * />
 *
 * // Password/Masked
 * <PinInput
 *   length={4}
 *   masked={true}
 *   placeholder="⚬"
 * />
 *
 * // Gray variant
 * <PinInput
 *   length={4}
 *   variant="gray"
 *   placeholder="⚬"
 * />
 *
 * // Underline variant
 * <PinInput
 *   length={6}
 *   variant="underline"
 *   placeholder="⚬"
 * />
 *
 * // With focus effect
 * <PinInput
 *   length={4}
 *   focusEffect="scale"
 *   placeholder="⚬"
 * />
 *
 * // Different sizes
 * <PinInput length={4} size="sm" />
 * <PinInput length={4} size="md" />
 * <PinInput length={4} size="lg" />
 *
 * // Disabled state
 * <PinInput
 *   length={4}
 *   disabled={true}
 *   value="1234"
 * />
 *
 * // iOS one-time-code support
 * <PinInput
 *   length={6}
 *   autoComplete="one-time-code"
 * />
 *
 * // Custom regex validation
 * <PinInput
 *   length={4}
 *   pattern="^[0-3]+$"
 *   hint="Only numbers 0-3 allowed"
 * />
 *
 * // With onComplete callback
 * <PinInput
 *   length={6}
 *   onComplete={(value) => {
 *     console.log('PIN complete:', value);
 *     // Submit form or verify code
 *   }}
 * />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace PinInput {
    interface Props extends BaseComponentProps {
        length?: number;
        value?: string | Signal<string>;
        placeholder?: string;
        disabled?: boolean;
        readonly?: boolean;
        required?: boolean;
        masked?: boolean;
        type?: "alphanumeric" | "numeric";
        pattern?: string;
        variant?: "default" | "gray" | "underline";
        size?: "sm" | "md" | "lg";
        focusEffect?: "scale" | "none";
        error?: string;
        label?: string;
        hint?: string;
        onChange?: ChangeCallback<string>;
        onComplete?: ChangeCallback<string>;
        onFocus?: EventCallback;
        onBlur?: EventCallback;
        autoComplete?: string;
    }
}
declare const PinInput: Pulse.Fn<PinInput.Props>;
export { PinInput };
/**
 * CopyMarkup Component
 * A component for dynamically duplicating form fields and content
 *
 * @example
 * ```tsx
 * import { CopyMarkup } from '@odyssee/components';
 *
 * // Basic usage with Input
 * <CopyMarkup
 *   template={
 *     <Input placeholder="Enter name" />
 *   }
 *   buttonText="Add Name"
 *   limit={3}
 * />
 *
 * // With custom button
 * <CopyMarkup
 *   template={
 *     <Input type="email" placeholder="Enter email" />
 *   }
 *   buttonText="Add Email"
 *   buttonVariant="solid"
 *   limit={5}
 * />
 *
 * // With Select component
 * <CopyMarkup
 *   template={
 *     <Select
 *       options={[
 *         { value: 'name', label: 'Name' },
 *         { value: 'email', label: 'Email' },
 *       ]}
 *       placeholder="Select option..."
 *     />
 *   }
 *   buttonText="Add Option"
 *   limit={3}
 * />
 *
 * // With remove button on each item
 * <CopyMarkup
 *   template={
 *     <Input placeholder="Enter address" />
 *   }
 *   buttonText="Add Address"
 *   showRemoveButton={true}
 *   limit={5}
 * />
 *
 * // With onChange callback
 * <CopyMarkup
 *   template={
 *     <Input placeholder="Phone number" />
 *   }
 *   buttonText="Add Phone"
 *   onChange={(count) => console.log('Total items:', count)}
 * />
 *
 * // Custom spacing
 * <CopyMarkup
 *   template={
 *     <Textarea placeholder="Enter comment" />
 *   }
 *   buttonText="Add Comment"
 *   spacing="lg"
 * />
 *
 * // Custom button position
 * <CopyMarkup
 *   template={
 *     <Input placeholder="Enter skill" />
 *   }
 *   buttonText="Add Skill"
 *   buttonPosition="left"
 * />
 *
 * // With initial count
 * <CopyMarkup
 *   template={
 *     <Input placeholder="Enter language" />
 *   }
 *   buttonText="Add Language"
 *   initialCount={2}
 *   limit={5}
 * />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace CopyMarkup {
    interface Props extends BaseComponentProps {
        template: Pulse.JSX.Element;
        buttonText?: string;
        buttonIcon?: Pulse.JSX.Element;
        buttonVariant?: "outline" | "solid" | "ghost" | "danger";
        buttonPosition?: "left" | "center" | "right";
        limit?: number;
        initialCount?: number;
        showRemoveButton?: boolean;
        removeButtonText?: string;
        spacing?: "sm" | "md" | "lg" | "xl";
        onChange?: ChangeCallback<number>;
        onAdd?: ChangeCallback<number>;
        onRemove?: ChangeCallback<number>;
        buttonClassName?: string;
        wrapperClassName?: string;
        disabled?: boolean;
    }
}
declare const CopyMarkup: Pulse.Fn<CopyMarkup.Props>;
export { CopyMarkup };
/**
 * StrongPassword Component
 * A password input with strength indicator and validation rules
 *
 * @example
 * ```tsx
 * import { StrongPassword } from '@odyssee/components';
 *
 * // Basic usage
 * <StrongPassword
 *   placeholder="Enter password"
 *   onChange={(value) => console.log(value)}
 * />
 *
 * // With all rules displayed
 * <StrongPassword
 *   label="Password"
 *   showHints={true}
 *   minLength={8}
 *   onChange={(value) => console.log(value)}
 * />
 *
 * // With reactive value
 * const password = Pulse.signal('');
 * <StrongPassword
 *   value={password}
 *   onChange={(val) => password(val)}
 *   showHints={true}
 * />
 *
 * // Custom strength levels
 * <StrongPassword
 *   strengthLevels={["Empty", "Weak", "Fair", "Good", "Strong", "Very Strong"]}
 *   showHints={true}
 * />
 *
 * // Custom rules
 * <StrongPassword
 *   minLength={10}
 *   requireLowercase={true}
 *   requireUppercase={true}
 *   requireNumbers={true}
 *   requireSpecialChars={true}
 *   specialCharsSet="!@#$%^&*"
 *   showHints={true}
 * />
 *
 * // With toggle password visibility
 * <StrongPassword
 *   showToggleButton={true}
 *   showHints={true}
 * />
 *
 * // Disabled state
 * <StrongPassword
 *   disabled={true}
 *   value="password123"
 * />
 *
 * // With popover mode (hints in popover)
 * <StrongPassword
 *   showHints={true}
 *   hintsMode="popover"
 * />
 *
 * // Without specific checks
 * <StrongPassword
 *   checksExclude={["lowercase", "special-characters"]}
 *   showHints={true}
 * />
 *
 * // With onChange and strength callback
 * <StrongPassword
 *   onChange={(value, strength) => {
 *     console.log('Password:', value);
 *     console.log('Strength:', strength);
 *   }}
 *   showHints={true}
 * />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace StrongPassword {
    interface Props extends BaseComponentProps {
        value?: string | Signal<string>;
        placeholder?: string;
        disabled?: boolean;
        readonly?: boolean;
        required?: boolean;
        label?: string;
        hint?: string;
        error?: string;
        size?: Size;
        minLength?: number;
        requireLowercase?: boolean;
        requireUppercase?: boolean;
        requireNumbers?: boolean;
        requireSpecialChars?: boolean;
        specialCharsSet?: string;
        strengthLevels?: string[];
        showHints?: boolean;
        hintsMode?: "inline" | "popover";
        showToggleButton?: boolean;
        checksExclude?: string[];
        stripCount?: number;
        onChange?: (value: string, strength: number, strengthLevel: string) => void;
        onStrengthChange?: (strength: number, strengthLevel: string) => void;
        onFocus?: EventCallback;
        onBlur?: EventCallback;
        name?: string;
    }
}
declare const StrongPassword: Pulse.Fn<StrongPassword.Props>;
export { StrongPassword };
/**
 * ComboBox Component
 * An autocomplete input with search and filtering capabilities
 *
 * @example
 * ```tsx
 * import { ComboBox } from '@odyssee/components';
 *
 * // Basic usage with static options
 * <ComboBox
 *   options={[
 *     { id: 1, name: 'Argentina' },
 *     { id: 2, name: 'Brazil' },
 *     { id: 3, name: 'China' },
 *   ]}
 *   placeholder="Select a country"
 *   onChange={(item) => console.log(item)}
 * />
 *
 * // With label and default value
 * <ComboBox
 *   label="Country"
 *   options={countries}
 *   value="Argentina"
 *   onChange={(item) => console.log(item)}
 * />
 *
 * // With reactive value
 * const selectedCountry = Pulse.signal('');
 * <ComboBox
 *   label="Country"
 *   options={countries}
 *   value={selectedCountry}
 *   onChange={(item) => selectedCountry(item.name)}
 * />
 *
 * // With custom display fields
 * <ComboBox
 *   options={users}
 *   displayField="email"
 *   valueField="id"
 *   searchFields={['name', 'email']}
 *   placeholder="Search users..."
 * />
 *
 * // With close button
 * <ComboBox
 *   options={countries}
 *   showCloseButton={true}
 *   placeholder="Select a country"
 * />
 *
 * // With minimum search length
 * <ComboBox
 *   options={countries}
 *   minSearchLength={3}
 *   placeholder="Type at least 3 characters"
 * />
 *
 * // Disabled state
 * <ComboBox
 *   options={countries}
 *   disabled={true}
 *   value="France"
 * />
 *
 * // With error state
 * <ComboBox
 *   label="Country"
 *   options={countries}
 *   error="Please select a country"
 *   required={true}
 * />
 *
 * // With API data (async loading)
 * <ComboBox
 *   apiUrl="https://api.example.com/countries"
 *   displayField="name"
 *   valueField="id"
 *   placeholder="Search countries..."
 * />
 *
 * // With custom item template
 * <ComboBox
 *   options={countries}
 *   renderItem={(item) => (
 *     <div class="flex items-center gap-2">
 *       <span>{item.flag}</span>
 *       <span>{item.name}</span>
 *     </div>
 *   )}
 * />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace ComboBox {
    interface Option {
        [key: string]: any;
    }
    interface Props extends BaseComponentProps {
        options?: ComboBox.Option[];
        value?: string | Signal<string>;
        placeholder?: string;
        disabled?: boolean;
        readonly?: boolean;
        required?: boolean;
        label?: string;
        hint?: string;
        error?: string;
        size?: Size;
        displayField?: string;
        valueField?: string;
        searchFields?: string[];
        minSearchLength?: number;
        showCloseButton?: boolean;
        maxHeight?: string;
        apiUrl?: string;
        apiSearchQuery?: string;
        onChange?: (item: ComboBox.Option | null) => void;
        onSearch?: ChangeCallback<string>;
        onFocus?: EventCallback;
        onBlur?: EventCallback;
        dropdownClassName?: string;
        name?: string;
        renderItem?: (item: ComboBox.Option) => Pulse.JSX.Element;
    }
}
declare const ComboBox: Pulse.Fn<ComboBox.Props>;
export { ComboBox };
/**
 * SearchBox Component
 * A search-focused input with autocomplete, grouping, and filtering capabilities
 *
 * @example
 * ```tsx
 * import { SearchBox } from '@odyssee/components';
 *
 * // Basic usage with static options
 * <SearchBox
 *   options={[
 *     { id: 1, name: 'John Doe', category: 'People', status: 'online' },
 *     { id: 2, name: 'Compose email', category: 'Recent', app: 'Gmail' },
 *   ]}
 *   placeholder="Search..."
 *   onSelect={(item) => console.log(item)}
 * />
 *
 * // With grouping
 * <SearchBox
 *   options={searchData}
 *   groupBy="category"
 *   showGroupTitles={true}
 *   placeholder="Search or type a command"
 * />
 *
 * // With API search
 * <SearchBox
 *   apiUrl="https://api.example.com/search"
 *   groupBy="category"
 *   minSearchLength={2}
 *   placeholder="Type to search..."
 * />
 *
 * // Open on focus
 * <SearchBox
 *   options={recentActions}
 *   isOpenOnFocus={true}
 *   placeholder="Search..."
 * />
 *
 * // With custom item rendering
 * <SearchBox
 *   options={users}
 *   renderItem={(item) => (
 *     <div class="flex items-center gap-3">
 *       <img src={item.avatar} class="size-5 rounded-full" />
 *       <span>{item.name}</span>
 *       <span class="text-xs text-gray-400">{item.status}</span>
 *     </div>
 *   )}
 * />
 *
 * // With group title customization
 * <SearchBox
 *   options={data}
 *   groupBy="category"
 *   renderGroupTitle={(title) => (
 *     <div class="text-xs uppercase text-gray-500 m-3 mb-1">
 *       {title}
 *     </div>
 *   )}
 * />
 *
 * // Prevent selection (command palette style)
 * <SearchBox
 *   options={commands}
 *   preventSelection={true}
 *   onSelect={(item) => executeCommand(item.action)}
 * />
 *
 * // With loading state
 * const [loading, setLoading] = Pulse.signal(false);
 * <SearchBox
 *   options={results}
 *   loading={loading}
 *   placeholder="Search..."
 * />
 *
 * // Different sizes
 * <SearchBox options={data} size="sm" />
 * <SearchBox options={data} size="md" />
 * <SearchBox options={data} size="lg" />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace SearchBox {
    interface Option {
        [key: string]: any;
    }
    interface Props extends BaseComponentProps {
        options?: SearchBox.Option[];
        value?: string | Signal<string>;
        placeholder?: string;
        disabled?: boolean;
        readonly?: boolean;
        required?: boolean;
        label?: string;
        hint?: string;
        error?: string;
        size?: Size;
        displayField?: string;
        valueField?: string;
        searchFields?: string[];
        groupBy?: string;
        showGroupTitles?: boolean;
        minSearchLength?: number;
        isOpenOnFocus?: boolean;
        preventSelection?: boolean;
        preserveSelectionOnEmpty?: boolean;
        maxHeight?: string;
        apiUrl?: string;
        apiSearchQuery?: string;
        loading?: boolean | Signal<boolean>;
        onSelect?: (item: SearchBox.Option) => void;
        onSearch?: ChangeCallback<string>;
        onFocus?: EventCallback;
        onBlur?: EventCallback;
        dropdownClassName?: string;
        name?: string;
        renderItem?: (item: SearchBox.Option) => Pulse.JSX.Element;
        renderGroupTitle?: (title: string) => Pulse.JSX.Element;
    }
}
declare const SearchBox: Pulse.Fn<SearchBox.Props>;
export { SearchBox };
/**
 * ToggleCount Component
 * A pricing toggle component that switches between two values (e.g., monthly/annual pricing)
 * with animated value transitions. Commonly used on pricing pages.
 *
 * @example
 * ```tsx
 * import { ToggleCount, ToggleCountValue } from '@odyssee/components';
 *
 * // Basic usage with radio buttons
 * <ToggleCount
 *   id="pricing-toggle"
 *   options={["Monthly", "Annual"]}
 *   defaultValue={0}
 * />
 * <ToggleCountValue
 *   target="pricing-toggle"
 *   min={19}
 *   max={29}
 *   prefix="$"
 * />
 *
 * // With switch instead of radio
 * <ToggleCount
 *   id="pricing-switch"
 *   type="switch"
 *   options={["Monthly", "Annual"]}
 * />
 * <ToggleCountValue
 *   target="pricing-switch"
 *   min={99}
 *   max={149}
 *   prefix="$"
 *   suffix="/mo"
 * />
 *
 * // Multiple values synced to same toggle
 * const pricingToggle = "my-pricing";
 * <ToggleCount
 *   id={pricingToggle}
 *   options={["Monthly", "Annual"]}
 * />
 * <ToggleCountValue target={pricingToggle} min={19} max={29} prefix="$" />
 * <ToggleCountValue target={pricingToggle} min={89} max={99} prefix="$" />
 * <ToggleCountValue target={pricingToggle} min={129} max={149} prefix="$" />
 *
 * // With reactive value
 * const selectedIndex = Pulse.signal(0);
 * <ToggleCount
 *   id="reactive-toggle"
 *   options={["Basic", "Pro"]}
 *   value={selectedIndex}
 *   onChange={(index) => selectedIndex(index)}
 * />
 *
 * // Custom formatting
 * <ToggleCountValue
 *   target="pricing-toggle"
 *   min={1900}
 *   max={2900}
 *   formatter={(value) => `€${(value / 100).toFixed(2)}`}
 * />
 *
 * // With decimals
 * <ToggleCountValue
 *   target="pricing-toggle"
 *   min={19.99}
 *   max={29.99}
 *   decimals={2}
 *   prefix="$"
 * />
 *
 * // Pills variant (radio buttons)
 * <ToggleCount
 *   id="pills-toggle"
 *   type="radio"
 *   variant="pills"
 *   options={["Starter", "Enterprise"]}
 * />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace ToggleCount {
    interface Props extends BaseComponentProps {
        type?: "radio" | "switch";
        variant?: "default" | "pills";
        options: [string, string];
        value?: 0 | 1 | Signal<0 | 1>;
        defaultValue?: 0 | 1;
        disabled?: boolean;
        onChange?: (index: number, label: string) => void;
    }
    interface ValueProps extends BaseComponentProps {
        target: string;
        min: number;
        max: number;
        duration?: number;
        prefix?: string;
        suffix?: string;
        decimals?: number;
        formatter?: (value: number) => string;
    }
}
/**
 * Register a toggle signal in the global registry
 */
export declare const registerToggle: (id: string, signal: any) => void;
/**
 * Get a toggle signal from the global registry
 */
export declare const getToggleSignal: (id: string) => any | undefined;
/**
 * Unregister a toggle signal
 */
export declare const unregisterToggle: (id: string) => void;
declare const ToggleCount: Pulse.Fn<ToggleCount.Props> & {
    Value: Pulse.Fn<ToggleCount.ValueProps>;
};
export { ToggleCount };
/**
 * FormGroup Component
 * A container component for organizing and grouping form fields
 *
 * @example
 * ```tsx
 * import { FormGroup, Input, Select } from '@odyssee/components';
 *
 * // Basic form group
 * <FormGroup label="Personal Information">
 *   <Input label="First Name" name="firstName" />
 *   <Input label="Last Name" name="lastName" />
 * </FormGroup>
 *
 * // With description
 * <FormGroup
 *   label="Account Settings"
 *   description="Manage your account preferences"
 * >
 *   <Input label="Email" type="email" />
 *   <Input label="Password" type="password" />
 * </FormGroup>
 *
 * // Horizontal layout
 * <FormGroup label="Address" direction="horizontal" gap="lg">
 *   <Input label="City" name="city" />
 *   <Input label="ZIP" name="zip" />
 * </FormGroup>
 *
 * // With border
 * <FormGroup label="Billing" bordered={true}>
 *   <Input label="Card Number" />
 *   <Input label="CVV" />
 * </FormGroup>
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace FormGroup {
    interface Props extends BaseComponentProps {
        label?: string;
        description?: string;
        children?: HTMLElement | HTMLElement[];
        direction?: "vertical" | "horizontal";
        gap?: Size;
        bordered?: boolean;
    }
}
declare const FormGroup: Pulse.Fn<FormGroup.Props>;
export { FormGroup };
/**
 * InputGroup Component
 * A flexible input component with support for add-ons, inline elements, and multiple combinations
 *
 * @example
 * ```tsx
 * import { InputGroup } from '@odyssee/components';
 *
 * // Basic text addon
 * <InputGroup leadingAddon="$" placeholder="0.00" />
 *
 * // Multiple addons
 * <InputGroup
 *   leadingAddons={["$", "0.00"]}
 *   placeholder="Amount"
 * />
 *
 * // Button addon
 * <InputGroup
 *   placeholder="Search..."
 *   trailingAddon={{
 *     type: "button",
 *     content: "Search",
 *     buttonProps: { variant: "solid", color: "primary" },
 *     onClick: () => handleSearch()
 *   }}
 * />
 *
 * // Inline icons (absolute positioned)
 * <InputGroup
 *   leadingIcon={<EmailIcon />}
 *   placeholder="you@site.com"
 * />
 *
 * // Inline select
 * <InputGroup
 *   leadingSelect={{
 *     options: [
 *       { value: "us", label: "US" },
 *       { value: "ca", label: "CA" }
 *     ],
 *     value: "us",
 *     label: "Country"
 *   }}
 *   placeholder="+1 (000) 000-0000"
 * />
 *
 * // Checkbox addon
 * <InputGroup
 *   leadingAddon={{
 *     type: "checkbox",
 *     checked: agreed,
 *     onChange: (checked) => agreed(checked)
 *   }}
 *   placeholder="I agree to terms"
 * />
 *
 * // Loading state
 * <InputGroup
 *   placeholder="Searching..."
 *   loading={isLoading}
 *   loadingPosition="trailing"
 * />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace InputGroup {
    interface Addon {
        type: "text" | "icon" | "button" | "checkbox" | "radio" | "select";
        content?: string | Pulse.JSX.Element;
        buttonProps?: Button.Props;
        onClick?: () => void;
        checked?: boolean | Signal<boolean>;
        onChange?: (checked: boolean) => void;
        selectOptions?: Select.Option[];
        selectValue?: string | Signal<string>;
        onSelectChange?: (value: string) => void;
        className?: string;
    }
    interface Props extends Omit<Input.Props, "icon" | "iconPosition"> {
        leadingAddon?: InputGroup.Addon | string | Pulse.JSX.Element;
        trailingAddon?: InputGroup.Addon | string | Pulse.JSX.Element;
        leadingAddons?: (InputGroup.Addon | string | Pulse.JSX.Element)[];
        trailingAddons?: (InputGroup.Addon | string | Pulse.JSX.Element)[];
        leadingIcon?: Pulse.JSX.Element;
        trailingIcon?: Pulse.JSX.Element;
        loading?: boolean | Signal<boolean>;
        loadingPosition?: "leading" | "trailing";
        leadingSelect?: {
            options: Select.Option[];
            value?: string | Signal<string>;
            onChange?: (value: string) => void;
            label?: string;
        };
        trailingSelect?: {
            options: Select.Option[];
            value?: string | Signal<string>;
            onChange?: (value: string) => void;
            label?: string;
        };
        containerClassName?: string;
        containerStyle?: Record<string, any>;
    }
}
declare const InputGroup: Pulse.Fn<InputGroup.Props>;
export { InputGroup };
/**
 * Modal Component
 * A flexible modal/dialog overlay component following Preline design patterns
 *
 * @example
 * ```tsx
 * import { Modal, Button } from '@odyssee/components';
 *
 * // Basic modal with reactive state
 * const isOpen = Pulse.signal(false);
 *
 * <Modal
 *   isOpen={isOpen}
 *   title="Modal Title"
 *   onClose={() => isOpen(false)}
 * >
 *   <p>This is the modal content</p>
 * </Modal>
 *
 * // With footer actions
 * <Modal
 *   isOpen={isOpen}
 *   title="Confirm Action"
 *   onClose={() => isOpen(false)}
 *   footer={
 *     <>
 *       <Button variant="outline" onClick={() => isOpen(false)}>Close</Button>
 *       <Button variant="solid" color="primary" onClick={handleSave}>Save changes</Button>
 *     </>
 *   }
 * >
 *   <p>Are you sure you want to proceed?</p>
 * </Modal>
 *
 * // Different sizes
 * <Modal isOpen={isOpen} title="Large Modal" size="lg" onClose={() => isOpen(false)}>
 *   <p>Large modal content</p>
 * </Modal>
 *
 * // Vertically centered
 * <Modal isOpen={isOpen} title="Centered" centered={true} onClose={() => isOpen(false)}>
 *   <p>Centered modal content</p>
 * </Modal>
 *
 * // Static backdrop (can't close by clicking outside)
 * <Modal isOpen={isOpen} title="Static" staticBackdrop={true} onClose={() => isOpen(false)}>
 *   <p>Click close button to dismiss</p>
 * </Modal>
 *
 * // Fullscreen
 * <Modal isOpen={isOpen} title="Fullscreen" fullscreen={true} onClose={() => isOpen(false)}>
 *   <p>Fullscreen content</p>
 * </Modal>
 *
 * // Scale animation
 * <Modal isOpen={isOpen} title="Animated" animation="scale" onClose={() => isOpen(false)}>
 *   <p>Modal with scale animation</p>
 * </Modal>
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Modal {
    interface Props extends BaseComponentProps {
        isOpen?: boolean | Signal<boolean>;
        title?: string | HTMLElement;
        children?: string | HTMLElement | HTMLElement[];
        footer?: HTMLElement | HTMLElement[];
        size?: "sm" | "md" | "lg" | "xl" | "2xl";
        centered?: boolean;
        staticBackdrop?: boolean;
        fullscreen?: boolean;
        showCloseButton?: boolean;
        closeOnEscape?: boolean;
        animation?: "scale" | "slideDown" | "slideUp" | "fade";
        onClose?: EventCallback;
    }
}
declare const Modal: Pulse.Fn<Modal.Props>;
export { Modal };
/**
 * Offcanvas Component
 * A sliding panel (drawer) that can be positioned on any side of the screen
 *
 * @example
 * ```tsx
 * import { Offcanvas } from '@odyssee/components';
 *
 * // Basic offcanvas from right
 * const isOpen = Pulse.signal(false);
 * <Offcanvas
 *   isOpen={isOpen}
 *   title="Offcanvas Title"
 *   onClose={() => isOpen(false)}
 * >
 *   <p>This is the offcanvas content</p>
 * </Offcanvas>
 *
 * // From left
 * <Offcanvas
 *   isOpen={isOpen}
 *   placement="left"
 *   title="Left Panel"
 *   onClose={() => isOpen(false)}
 * >
 *   <p>Content from left side</p>
 * </Offcanvas>
 *
 * // From top
 * <Offcanvas
 *   isOpen={isOpen}
 *   placement="top"
 *   size="lg"
 *   title="Top Panel"
 *   onClose={() => isOpen(false)}
 * >
 *   <p>Content from top</p>
 * </Offcanvas>
 *
 * // No backdrop, allow body scroll
 * <Offcanvas
 *   isOpen={isOpen}
 *   placement="right"
 *   backdrop={false}
 *   bodyScroll={true}
 *   title="No Backdrop"
 *   onClose={() => isOpen(false)}
 * >
 *   <p>Body can scroll, no backdrop</p>
 * </Offcanvas>
 *
 * // With footer
 * <Offcanvas
 *   isOpen={isOpen}
 *   title="With Footer"
 *   onClose={() => isOpen(false)}
 *   footer={
 *     <>
 *       <button onClick={() => isOpen(false)}>Cancel</button>
 *       <button onClick={handleSave}>Save</button>
 *     </>
 *   }
 * >
 *   <p>Offcanvas content</p>
 * </Offcanvas>
 *
 * // Custom backdrop color
 * <Offcanvas
 *   isOpen={isOpen}
 *   title="Custom Backdrop"
 *   backdropColor="bg-blue-950/90"
 *   onClose={() => isOpen(false)}
 * >
 *   <p>Custom blue backdrop</p>
 * </Offcanvas>
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Offcanvas {
    type Placement = "left" | "right" | "top" | "bottom";
    interface Props extends BaseComponentProps {
        isOpen?: boolean | Signal<boolean>;
        placement?: Offcanvas.Placement;
        size?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
        title?: string | HTMLElement;
        children?: string | HTMLElement | HTMLElement[];
        footer?: HTMLElement | HTMLElement[];
        showCloseButton?: boolean;
        staticBackdrop?: boolean;
        closeOnEscape?: boolean;
        backdrop?: boolean;
        backdropColor?: string;
        bodyScroll?: boolean;
        onClose?: EventCallback;
    }
}
declare const Offcanvas: Pulse.Fn<Offcanvas.Props>;
export { Offcanvas };
/**
 * Tooltip Component
 * A lightweight tooltip component that displays helpful information on hover or focus
 *
 * @example
 * ```tsx
 * import { Tooltip } from '@odyssee/components';
 *
 * // Basic tooltip
 * <Tooltip content="Tooltip on top" placement="top">
 *   <button>Hover me</button>
 * </Tooltip>
 *
 * // Different placements
 * <Tooltip content="Tooltip on bottom" placement="bottom">
 *   <button>Hover me</button>
 * </Tooltip>
 *
 * <Tooltip content="Tooltip on left" placement="left">
 *   <button>Hover me</button>
 * </Tooltip>
 *
 * <Tooltip content="Tooltip on right" placement="right">
 *   <button>Hover me</button>
 * </Tooltip>
 *
 * // Auto positioning
 * <Tooltip content="Auto positioned" placement="auto">
 *   <button>Hover me</button>
 * </Tooltip>
 *
 * // Light variant
 * <Tooltip content="Light tooltip" variant="light">
 *   <button>Hover me</button>
 * </Tooltip>
 *
 * // With delays
 * <Tooltip
 *   content="Delayed tooltip"
 *   showDelay={500}
 *   hideDelay={200}
 * >
 *   <button>Hover me</button>
 * </Tooltip>
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Tooltip {
    interface Props extends BaseComponentProps {
        content: string | HTMLElement;
        placement?: "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end" | "auto";
        trigger?: "hover";
        children?: HTMLElement | HTMLElement[] | string;
        showDelay?: number;
        hideDelay?: number;
        variant?: "dark" | "light";
        arrow?: boolean;
    }
}
declare const Tooltip: Pulse.Fn<Tooltip.Props>;
export { Tooltip };
/**
 * Popover Component
 * A wrapper around Tooltip that supports rich content with header, body, and footer
 *
 * @example
 * ```tsx
 * import { Popover } from '@odyssee/components';
 *
 * // Basic popover with simple content
 * <Popover content="Simple popover content">
 *   <button>Click me</button>
 * </Popover>
 *
 * // Rich popover with header, body, footer
 * <Popover
 *   header="Popover Title"
 *   body="This is the popover content with more details."
 *   footer={<button>Action</button>}
 *   placement="top"
 * >
 *   <button>Click me</button>
 * </Popover>
 *
 * // Review popover example
 * <Popover
 *   header={<h4>5.0 ⭐⭐⭐⭐⭐</h4>}
 *   body={
 *     <div>
 *       <Progress value={78} label="5 star" />
 *       <Progress value={20} label="4 star" />
 *     </div>
 *   }
 *   footer={<a href="#">How reviews work</a>}
 *   maxWidth="sm"
 * >
 *   <button>View reviews</button>
 * </Popover>
 *
 * // User popover example
 * <Popover
 *   header={
 *     <div class="flex items-center gap-x-3">
 *       <Avatar src="..." />
 *       <div>
 *         <h4>Amanda Harvey</h4>
 *         <p>Storyteller</p>
 *       </div>
 *     </div>
 *   }
 *   body={
 *     <ul>
 *       <li>Company: Pixeel Ltd.</li>
 *       <li>Phone: (892) 312-5483</li>
 *       <li>Email: amanda@email.com</li>
 *     </ul>
 *   }
 *   footer={<button>Follow</button>}
 * >
 *   <div>User Card</div>
 * </Popover>
 *
 * // Different placements
 * <Popover content="Left popover" placement="left">
 *   <button>Left</button>
 * </Popover>
 *
 * <Popover content="Right popover" placement="right">
 *   <button>Right</button>
 * </Popover>
 *
 * // Auto positioning
 * <Popover content="Auto positioned" placement="auto">
 *   <button>Auto</button>
 * </Popover>
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Popover {
    interface Props extends Omit<Tooltip.Props, "content"> {
        header?: string | Pulse.JSX.Element;
        body?: string | Pulse.JSX.Element;
        footer?: Pulse.JSX.Element;
        content?: string | Pulse.JSX.Element;
        maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
        trigger?: "hover";
    }
}
declare const Popover: Pulse.Fn<Popover.Props>;
export { Popover };
/**
 * Dropdown Component
 * A dropdown menu component with Preline and Floating UI integration
 *
 * @example
 * ```tsx
 * import { Dropdown } from '@odyssee/components';
 *
 * // Basic dropdown with items array
 * <Dropdown
 *   trigger="Actions"
 *   items={[
 *     { label: 'Newsletter', onClick: () => console.log('Newsletter') },
 *     { label: 'Purchases', href: '/purchases' },
 *     { isDivider: true },
 *     { label: 'Downloads', icon: <DownloadIcon /> }
 *   ]}
 * />
 *
 * // Custom trigger button
 * <Dropdown
 *   trigger={
 *     <button class="custom-button">
 *       <Avatar src="..." />
 *       <span>John Doe</span>
 *     </button>
 *   }
 *   items={[...]}
 * />
 *
 * // With children (flexible approach)
 * <Dropdown trigger="Actions">
 *   <DropdownItem>Newsletter</DropdownItem>
 *   <DropdownItem href="/purchases">Purchases</DropdownItem>
 *   <DropdownDivider />
 *   <DropdownItem icon={<Icon />}>Downloads</DropdownItem>
 * </Dropdown>
 *
 * // Different placements
 * <Dropdown
 *   trigger="Menu"
 *   placement="top-start"
 *   items={[...]}
 * />
 *
 * // Hover trigger
 * <Dropdown
 *   trigger="Hover me"
 *   triggerType="hover"
 *   items={[...]}
 * />
 *
 * // Auto-close behavior
 * <Dropdown
 *   trigger="Options"
 *   autoClose="outside"
 *   items={[...]}
 * />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Dropdown {
    interface Item {
        label?: string | HTMLElement;
        value?: string | number;
        icon?: HTMLElement | string;
        href?: string;
        disabled?: boolean;
        isDivider?: boolean;
        onClick?: () => void;
        className?: string;
    }
    type Placement = "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end" | "auto";
    type Trigger = "click" | "hover" | "contextmenu";
    type AutoClose = boolean | "inside" | "outside";
    interface Props extends BaseComponentProps {
        trigger: HTMLElement | string;
        triggerClassName?: string;
        items?: Dropdown.Item[];
        children?: HTMLElement | HTMLElement[];
        placement?: Dropdown.Placement;
        strategy?: "fixed" | "absolute";
        offset?: number;
        flip?: boolean;
        scope?: "parent" | "window";
        triggerType?: Dropdown.Trigger;
        autoClose?: Dropdown.AutoClose;
        closeOnSelect?: boolean;
        hasAutofocus?: boolean;
        isOpen?: boolean | Signal<boolean>;
        menuClassName?: string;
        onOpen?: () => void;
        onClose?: () => void;
        onSelect?: (value: string | number) => void;
    }
    interface ItemProps extends BaseComponentProps {
        children: string | HTMLElement;
        icon?: HTMLElement | string;
        href?: string;
        disabled?: boolean;
        active?: boolean;
        onClick?: () => void;
    }
    interface DividerProps extends BaseComponentProps {
    }
}
declare const Dropdown: Pulse.Fn<Dropdown.Props> & {
    Item: Pulse.Fn<Dropdown.ItemProps>;
    Divider: Pulse.Fn<Dropdown.DividerProps>;
};
export { Dropdown };
/**
 * ContextMenu Component
 * A wrapper that provides right-click context menu functionality using Dropdown
 *
 * Features:
 * - Right-click (contextmenu) trigger on any wrapped element
 * - All Dropdown features inherited (items, placement, nested menus, etc.)
 * - Opens at cursor position
 * - Support for icons, dividers, nested submenus
 * - Dark mode support
 * - Customizable placement and styling
 *
 * @example
 * ```tsx
 * <ContextMenu items={menuItems}>
 *   <div>Right-click me!</div>
 * </ContextMenu>
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace ContextMenu {
    interface Props extends BaseComponentProps {
        items: Dropdown.Item[];
        children: HTMLElement | HTMLElement[];
        menuClassName?: string;
        onOpen?: () => void;
        onClose?: () => void;
    }
}
declare const ContextMenu: Pulse.Fn<ContextMenu.Props>;
export { ContextMenu };
/**
 * Accordion Component
 * A collapsible content panel component with multiple variants
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Accordion {
    interface Item {
        id: string;
        title: string;
        content: HTMLElement | string;
        disabled?: boolean;
        open?: boolean;
    }
    interface Props extends BaseComponentProps {
        items: Accordion.Item[];
        multiple?: boolean;
        bordered?: boolean;
    }
}
/**
 * Nested Accordion Support
 */
interface NestedAccordionProps {
    items: Accordion.Item[];
    variant?: "default" | "bordered" | "active-bordered" | "no-arrow" | "arrow" | "stretched";
}
declare const Accordion: Pulse.Fn<Accordion.Props> & {
    Basic: Pulse.Fn<Accordion.Props>;
    NoArrow: Pulse.Fn<Accordion.Props>;
    Arrow: Pulse.Fn<Accordion.Props>;
    Stretched: Pulse.Fn<Accordion.Props>;
    Bordered: Pulse.Fn<Accordion.Props>;
    ActiveBordered: Pulse.Fn<Accordion.Props>;
    Nested: Pulse.Fn<NestedAccordionProps>;
};
export { Accordion };
/**
 * Tabs Component
 * A tabbed navigation component with Preline integration
 *
 * @example
 * ```tsx
 * import { Tabs } from '@odyssee/components';
 *
 * // Basic tabs with items array
 * <Tabs
 *   items={[
 *     { id: 'tab1', label: 'Tab 1', content: <p>Content 1</p> },
 *     { id: 'tab2', label: 'Tab 2', content: <p>Content 2</p> },
 *     { id: 'tab3', label: 'Tab 3', content: <p>Content 3</p> }
 *   ]}
 * />
 *
 * // With active tab control
 * const activeTab = Pulse.signal('tab2');
 * <Tabs
 *   items={[...]}
 *   activeTab={activeTab}
 *   onChange={(tabId) => activeTab(tabId)}
 * />
 *
 * // With icons
 * <Tabs
 *   items={[
 *     { id: 'home', label: 'Home', icon: <HomeIcon />, content: <Home /> },
 *     { id: 'profile', label: 'Profile', icon: <UserIcon />, content: <Profile /> }
 *   ]}
 * />
 *
 * // Pills variant
 * <Tabs
 *   variant="pills"
 *   items={[...]}
 * />
 *
 * // Hover activation
 * <Tabs
 *   eventType="hover"
 *   items={[...]}
 * />
 *
 * // With children (flexible approach)
 * <Tabs>
 *   <TabPanel id="tab1" label="Tab 1">
 *     <p>Content 1</p>
 *   </TabPanel>
 *   <TabPanel id="tab2" label="Tab 2">
 *     <p>Content 2</p>
 *   </TabPanel>
 * </Tabs>
 *
 * // Vertical tabs
 * <Tabs variant="vertical" items={[...]} />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Tabs {
    interface Item {
        id: string;
        label: string | HTMLElement;
        content: string | HTMLElement | HTMLElement[];
        icon?: HTMLElement | string;
        disabled?: boolean;
        badge?: string | number;
    }
    type EventType = "click" | "hover";
    type Variant = "underline" | "pills" | "enclosed" | "vertical";
    interface PanelProps extends BaseComponentProps {
        id: string;
        label: string | HTMLElement;
        children: string | HTMLElement | HTMLElement[];
        icon?: HTMLElement | string;
        disabled?: boolean;
        badge?: string | number;
    }
    interface Props extends BaseComponentProps {
        items?: Tabs.Item[];
        children?: HTMLElement | HTMLElement[];
        activeTab?: string | Signal<string>;
        variant?: Tabs.Variant;
        eventType?: Tabs.EventType;
        bordered?: boolean;
        fullWidth?: boolean;
        size?: "sm" | "md" | "lg";
        tablistClassName?: string;
        contentClassName?: string;
        onChange?: (tabId: string, prevTabId: string) => void;
    }
}
declare const Tabs: Pulse.Fn<Tabs.Props> & {
    Panel: Pulse.Fn<Tabs.PanelProps>;
};
export { Tabs };
/**
 * TreeView Component
 * A hierarchical tree structure with expand/collapse, selection, and optional checkboxes
 *
 * Features:
 * - Recursive tree structure (folders/files)
 * - Expand/collapse using Accordion
 * - Single and multi-selection (Shift/Ctrl support)
 * - Optional checkboxes
 * - Keyboard navigation
 * - Accessibility (role="tree", aria-expanded, etc.)
 *
 * @example
 * ```tsx
 * import { TreeView } from '@odyssee/components';
 *
 * const nodes = [
 *   {
 *     value: 'folder1',
 *     label: 'Documents',
 *     isDir: true,
 *     children: [
 *       { value: 'file1', label: 'Report.pdf', isDir: false },
 *       { value: 'file2', label: 'Invoice.docx', isDir: false }
 *     ]
 *   },
 *   { value: 'file3', label: 'Notes.txt', isDir: false }
 * ];
 *
 * // Basic tree
 * <TreeView nodes={nodes} />
 *
 * // With selection
 * <TreeView nodes={nodes} selectable selected={selectedSignal} onSelect={handleSelect} />
 *
 * // With checkboxes
 * <TreeView nodes={nodes} showCheckboxes checked={checkedSignal} onCheck={handleCheck} />
 *
 * // Multi-select (Shift/Ctrl)
 * <TreeView nodes={nodes} selectable multiSelect selected={selectedSignal} />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace TreeView {
    interface Node {
        value: string;
        label: string;
        isDir?: boolean;
        icon?: Pulse.JSX.Element | string;
        disabled?: boolean;
        children?: TreeView.Node[];
    }
    interface Props extends BaseComponentProps {
        nodes: TreeView.Node[];
        selectable?: boolean;
        multiSelect?: boolean;
        selected?: string[] | Signal<string[]>;
        onSelect?: (selected: string[]) => void;
        expanded?: string[] | Signal<string[]>;
        onExpand?: (expanded: string[]) => void;
        alwaysOpen?: boolean;
        showCheckboxes?: boolean;
        checked?: string[] | Signal<string[]>;
        onCheck?: (checked: string[]) => void;
        draggable?: boolean;
        onDragEnd?: (nodes: TreeView.Node[]) => void;
        showLines?: boolean;
        iconPosition?: "left" | "right";
        ariaLabel?: string;
        ariaLabelledBy?: string;
    }
    interface NodeProps {
        node: TreeView.Node;
        level: number;
        treeId: string;
        selectable?: boolean;
        multiSelect?: boolean;
        showCheckboxes?: boolean;
        showLines?: boolean;
        iconPosition?: "left" | "right";
        selected: string[];
        expanded: string[];
        checked: string[];
        onToggleExpand: (value: string) => void;
        onSelectNode: (value: string, event: MouseEvent) => void;
        onCheckNode: (value: string, isChecked: boolean) => void;
    }
}
declare const TreeView: Pulse.Fn<TreeView.Props> & {
    Node: Pulse.Fn<TreeView.NodeProps>;
};
export { TreeView };
/**
 * Navbar Component
 * A responsive navigation bar component with collapsible mobile menu, brand, and dropdown support
 *
 * This component reuses:
 * - Link (NavLink) for navigation links
 * - Container for max-width wrapper
 * - Button for mobile toggle
 * - Badge for item badges
 * - Dropdown for sub-menus
 *
 * @example
 * ```tsx
 * import { Navbar } from '@odyssee/components';
 *
 * // Basic navbar with items array
 * <Navbar
 *   brand="Brand"
 *   items={[
 *     { label: 'Landing', href: '#', active: true },
 *     { label: 'Account', href: '#' },
 *     { label: 'Work', href: '#' },
 *     { label: 'Blog', href: '#' }
 *   ]}
 * />
 *
 * // Navbar with brand object (logo + text)
 * <Navbar
 *   brand={{
 *     content: 'Brand',
 *     logo: <img src="/logo.png" alt="Logo" />,
 *     href: '/'
 *   }}
 *   items={[...]}
 * />
 *
 * // Navbar with dropdown
 * <Navbar
 *   brand="Brand"
 *   items={[
 *     { label: 'Landing', href: '#', active: true },
 *     { label: 'Account', href: '#' },
 *     {
 *       label: 'Dropdown',
 *       dropdown: [
 *         { label: 'About', href: '#' },
 *         { label: 'Downloads', href: '#' },
 *         { label: 'Team Account', href: '#' }
 *       ]
 *     }
 *   ]}
 * />
 *
 * // Dark variant navbar
 * <Navbar
 *   brand="Brand"
 *   variant="dark"
 *   items={[...]}
 * />
 *
 * // Centered navbar with custom children
 * <Navbar
 *   brand="Brand"
 *   alignment="center"
 *   items={[...]}
 * >
 *   <Button size="sm">Sign In</Button>
 * </Navbar>
 *
 * // Sticky navbar
 * <Navbar
 *   brand="Brand"
 *   items={[...]}
 *   sticky={true}
 * />
 *
 * // With horizontal scroll on mobile
 * <Navbar
 *   brand="Brand"
 *   items={[...]}
 *   horizontalScroll={true}
 * />
 *
 * // Composable children approach
 * <Navbar brand="Brand">
 *   <NavbarLink href="#" active>Landing</NavbarLink>
 *   <NavbarLink href="#">Account</NavbarLink>
 *   <NavbarLink href="#">Work</NavbarLink>
 *   <NavbarLink href="#">Blog</NavbarLink>
 * </Navbar>
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Navbar {
    interface Item {
        id?: string;
        label: string | HTMLElement;
        href?: string;
        active?: boolean;
        disabled?: boolean;
        onClick?: ClickCallback;
        dropdown?: Dropdown.Item[];
        badge?: string | number;
        icon?: HTMLElement | string;
    }
    interface Brand {
        content: string | HTMLElement;
        href?: string;
        logo?: HTMLElement | string;
        logoAlt?: string;
        onClick?: ClickCallback;
        className?: string;
    }
    type Variant = "default" | "dark" | "primary" | "transparent";
    type Alignment = "left" | "center" | "right";
    interface Props extends BaseComponentProps {
        brand?: Navbar.Brand | string;
        items?: Navbar.Item[];
        children?: HTMLElement | HTMLElement[];
        variant?: Navbar.Variant;
        alignment?: Navbar.Alignment;
        collapsible?: boolean;
        collapseBreakpoint?: "sm" | "md" | "lg" | "xl";
        horizontalScroll?: boolean;
        sticky?: boolean;
        stickyOffset?: string;
        maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | string;
        centered?: boolean;
        padding?: "sm" | "md" | "lg";
        navClassName?: string;
        containerClassName?: string;
        brandClassName?: string;
        itemsClassName?: string;
        toggleClassName?: string;
        onBrandClick?: ClickCallback;
        onItemClick?: (item: Navbar.Item, index: number) => void;
        onToggle?: (isOpen: boolean) => void;
    }
    interface LinkProps extends BaseComponentProps {
        href?: string;
        active?: boolean;
        disabled?: boolean;
        onClick?: ClickCallback;
        children?: string | HTMLElement | HTMLElement[];
    }
}
declare const Navbar: Pulse.Fn<Navbar.Props> & {
    Link: Pulse.Fn<Navbar.LinkProps>;
    Dark: Pulse.Fn<Navbar.Props>;
    Primary: Pulse.Fn<Navbar.Props>;
    Sticky: Pulse.Fn<Navbar.Props>;
};
export { Navbar };
/**
 * Breadcrumb Component
 * A navigation component showing the current page's location within a navigational hierarchy
 *
 * @example
 * ```tsx
 * import { Breadcrumb } from '@odyssee/components';
 *
 * // Basic breadcrumb with chevron separators
 * <Breadcrumb items={['Home', 'App Center', 'Application']} />
 *
 * // With links
 * <Breadcrumb
 *   items={[
 *     { label: 'Home', href: '/' },
 *     { label: 'App Center', href: '/app-center' },
 *     { label: 'Application', active: true },
 *   ]}
 * />
 *
 * // With slash separators
 * <Breadcrumb
 *   items={['Home', 'App Center', 'Application']}
 *   separator="slash"
 * />
 *
 * // With icons
 * <Breadcrumb
 *   items={[
 *     { label: 'Home', href: '/', icon: <svg>...</svg> },
 *     { label: 'App Center', href: '/app-center', icon: <svg>...</svg> },
 *     { label: 'Application', active: true },
 *   ]}
 * />
 *
 * // Bordered
 * <Breadcrumb
 *   items={[
 *     { label: 'Home', href: '/', icon: <svg>...</svg> },
 *     { label: 'App Center', href: '/app-center', icon: <svg>...</svg> },
 *     { label: 'Application', active: true },
 *   ]}
 *   bordered
 * />
 *
 * // With 'more' indicator
 * <Breadcrumb
 *   items={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Application', active: true },
 *   ]}
 *   showMore
 * />
 *
 * // Custom separator
 * <Breadcrumb
 *   items={['Home', 'App Center', 'Application']}
 *   separator="custom"
 *   customSeparator="→"
 * />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Breadcrumb {
    interface Item {
        id?: string;
        label: string | HTMLElement;
        href?: string;
        icon?: HTMLElement | string;
        active?: boolean;
        onClick?: ClickCallback;
    }
    interface Props extends BaseComponentProps {
        items: (string | Breadcrumb.Item)[];
        separator?: "chevron" | "slash" | "custom";
        customSeparator?: HTMLElement | string;
        bordered?: boolean;
        showMore?: boolean;
        maxItems?: number;
        collapsedItems?: (string | Breadcrumb.Item)[];
        size?: "xs" | "sm" | "md" | "lg";
        onItemClick?: (item: Breadcrumb.Item | string, index: number) => void;
    }
}
declare const Breadcrumb: Pulse.Fn<Breadcrumb.Props> & {
    Chevron: Pulse.Fn<Omit<Breadcrumb.Props, "separator">>;
    Slash: Pulse.Fn<Omit<Breadcrumb.Props, "separator">>;
    Bordered: Pulse.Fn<Omit<Breadcrumb.Props, "bordered">>;
};
export { Breadcrumb };
/**
 * Pagination Component
 * A flexible pagination component with multiple variants, sizes, and features
 *
 * This component reuses:
 * - Button for page numbers and prev/next buttons
 * - Input for "Go to page" jumper
 * - Tooltip for ellipsis hints
 *
 * @example
 * ```tsx
 * import { Pagination } from '@odyssee/components';
 *
 * // Basic pagination
 * const currentPage = Pulse.signal(1);
 * <Pagination
 *   currentPage={currentPage}
 *   totalPages={10}
 *   onPageChange={(page) => currentPage(page)}
 * />
 *
 * // Bordered variant
 * <Pagination
 *   currentPage={1}
 *   totalPages={8}
 *   variant="bordered"
 *   onPageChange={(page) => console.log(page)}
 * />
 *
 * // Bordered group variant
 * <Pagination
 *   currentPage={1}
 *   totalPages={8}
 *   variant="bordered-group"
 *   showPrevNextText={true}
 * />
 *
 * // Mini variant
 * <Pagination
 *   currentPage={1}
 *   totalPages={3}
 *   mini={true}
 * />
 *
 * // Pilled shape (rounded-full)
 * <Pagination
 *   currentPage={1}
 *   totalPages={8}
 *   shape="pilled"
 * />
 *
 * // With jumper (go to page)
 * <Pagination
 *   currentPage={1}
 *   totalPages={8}
 *   showJumper={true}
 *   jumperText="Go to"
 * />
 *
 * // Center aligned
 * <Pagination
 *   currentPage={1}
 *   totalPages={8}
 *   alignment="center"
 * />
 *
 * // Stretched layout
 * <Pagination
 *   currentPage={1}
 *   totalPages={3}
 *   stretched={true}
 * />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Pagination {
    type Variant = "default" | "bordered" | "bordered-group";
    type Shape = "default" | "pilled";
    type Alignment = "start" | "center" | "end";
    type Size = "sm" | "md" | "lg";
    interface Props extends BaseComponentProps {
        currentPage: number | Signal<number>;
        totalPages: number;
        variant?: Pagination.Variant;
        shape?: Pagination.Shape;
        size?: Pagination.Size;
        alignment?: Pagination.Alignment;
        showPrevNext?: boolean;
        showPrevNextText?: boolean;
        prevText?: string;
        nextText?: string;
        showEllipsis?: boolean;
        siblingCount?: number;
        showBoundaries?: boolean;
        mini?: boolean;
        showJumper?: boolean;
        jumperText?: string;
        showItemsPerPage?: boolean;
        itemsPerPageOptions?: number[];
        itemsPerPage?: number;
        stretched?: boolean;
        disabled?: boolean;
        onPageChange?: (page: number) => void;
        onItemsPerPageChange?: (itemsPerPage: number) => void;
    }
}
declare const Pagination: Pulse.Fn<Pagination.Props>;
export { Pagination };
/**
 * Stepper Component
 * A flexible stepper component for multi-step processes with navigation controls
 *
 * @example
 * ```tsx
 * import { Stepper } from '@odyssee/components';
 *
 * // Config-based approach
 * const steps = [
 *   {
 *     index: 1,
 *     label: "Account Details",
 *     description: "Enter your information",
 *     content: <AccountForm />
 *   },
 *   {
 *     index: 2,
 *     label: "Payment",
 *     description: "Enter payment details",
 *     content: <PaymentForm />
 *   },
 *   {
 *     index: 3,
 *     label: "Confirmation",
 *     content: <ConfirmationView />
 *   }
 * ];
 *
 * const currentStep = Pulse.signal(1);
 *
 * <Stepper
 *   steps={steps}
 *   currentStep={currentStep}
 *   onStepChange={(step) => currentStep(step)}
 *   onComplete={() => console.log('Completed!')}
 * />
 *
 * // With custom controls
 * <Stepper
 *   steps={steps}
 *   currentStep={currentStep}
 *   showControls={true}
 *   backText="Previous"
 *   nextText="Continue"
 *   finishText="Submit"
 * />
 *
 * // Linear mode (sequential)
 * <Stepper
 *   steps={steps}
 *   currentStep={currentStep}
 *   mode="linear"
 * />
 *
 * // Non-linear mode (free navigation)
 * <Stepper
 *   steps={steps}
 *   currentStep={currentStep}
 *   mode="non-linear"
 * />
 *
 * // Vertical orientation
 * <Stepper
 *   steps={steps}
 *   currentStep={currentStep}
 *   orientation="vertical"
 * />
 *
 * // White variant
 * <Stepper
 *   steps={steps}
 *   currentStep={currentStep}
 *   variant="white"
 * />
 *
 * // Center aligned
 * <Stepper
 *   steps={steps}
 *   currentStep={currentStep}
 *   alignment="center"
 * />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Stepper {
    type Mode = "linear" | "non-linear";
    type Orientation = "horizontal" | "vertical";
    type Variant = "default" | "white" | "solid";
    type Alignment = "start" | "center" | "end";
    type Status = "pending" | "active" | "success" | "completed" | "error" | "processed";
    interface StepItemData {
        index: number;
        label: string;
        description?: string;
        icon?: Pulse.JSX.Element;
        avatar?: string;
        content?: Pulse.JSX.Element | (() => Pulse.JSX.Element);
        isOptional?: boolean;
        isCompleted?: boolean;
        hasError?: boolean;
    }
    interface ItemProps extends BaseComponentProps {
        index: number;
        label: string;
        description?: string;
        status: Stepper.Status;
        variant?: Stepper.Variant;
        orientation?: Stepper.Orientation;
        isLast?: boolean;
        isClickable?: boolean;
        icon?: Pulse.JSX.Element;
        avatar?: string;
        onClick?: (index: number) => void;
        children?: Pulse.JSX.Element;
    }
    interface Props extends BaseComponentProps {
        steps?: Stepper.StepItemData[];
        currentStep: number | Signal<number>;
        mode?: Stepper.Mode;
        orientation?: Stepper.Orientation;
        variant?: Stepper.Variant;
        alignment?: Stepper.Alignment;
        showControls?: boolean;
        backText?: string;
        nextText?: string;
        finishText?: string;
        resetText?: string;
        skipText?: string;
        completeStepText?: string;
        onStepChange?: (step: number) => void;
        onComplete?: () => void;
        onSkip?: (step: number) => void;
        onReset?: () => void;
        onBack?: () => void;
        onNext?: () => void;
        children?: Pulse.JSX.Element | Pulse.JSX.Element[];
    }
}
declare const Stepper: Pulse.Fn<Stepper.Props> & {
    Item: Pulse.Fn<Stepper.ItemProps>;
};
export { Stepper };
/**
 * StepIndicator Component
 * A visual indicator for stepper steps with multiple states
 *
 * @example
 * ```tsx
 * import { StepIndicator } from '@odyssee/components';
 *
 * // Basic step indicator
 * <StepIndicator index={1} status="pending" />
 *
 * // Active step
 * <StepIndicator index={2} status="active" />
 *
 * // Completed step
 * <StepIndicator index={1} status="completed" />
 *
 * // Error step
 * <StepIndicator index={2} status="error" />
 *
 * // Processing step
 * <StepIndicator index={3} status="processed" />
 *
 * // With custom icon
 * <StepIndicator index={1} status="pending" icon={<CustomIcon />} />
 *
 * // With avatar
 * <StepIndicator index={1} status="pending" avatar="https://example.com/avatar.jpg" />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace StepIndicator {
    type Status = "pending" | "active" | "success" | "completed" | "error" | "processed";
    type Variant = "default" | "white" | "solid";
    interface Props extends BaseComponentProps {
        index: number;
        status: StepIndicator.Status;
        variant?: StepIndicator.Variant;
        icon?: Pulse.JSX.Element;
        avatar?: string;
        showCheckmark?: boolean;
        showError?: boolean;
        showSpinner?: boolean;
    }
}
declare const StepIndicator: Pulse.Fn<StepIndicator.Props>;
export { StepIndicator };
/**
 * Table Component
 * A comprehensive data table component with sorting, filtering, pagination, and selection
 *
 * @example
 * ```tsx
 * import { Table } from '@odyssee/components';
 *
 * // Basic table
 * const columns = [
 *   { key: 'name', label: 'Name', sortable: true },
 *   { key: 'age', label: 'Age', align: 'center' },
 *   { key: 'address', label: 'Address' },
 * ];
 *
 * const data = [
 *   { id: 1, name: 'John Brown', age: 45, address: 'New York' },
 *   { id: 2, name: 'Jim Green', age: 27, address: 'London' },
 * ];
 *
 * <Table columns={columns} data={data} />
 *
 * // Striped + Hoverable
 * <Table columns={columns} data={data} variant="striped" hoverable />
 *
 * // With selection
 * const selected = Pulse.signal<number[]>([]);
 * <Table
 *   columns={columns}
 *   data={data}
 *   selectable
 *   selectedRows={selected}
 *   onSelectionChange={(sel) => selected(sel)}
 * />
 *
 * // With sorting
 * const sortBy = Pulse.signal<string | null>(null);
 * const sortDirection = Pulse.signal<'asc' | 'desc' | null>(null);
 * <Table
 *   columns={columns}
 *   data={data}
 *   sortable
 *   sortBy={sortBy}
 *   sortDirection={sortDirection}
 *   onSort={(col, dir) => {
 *     sortBy(col);
 *     sortDirection(dir);
 *   }}
 * />
 *
 * // With search + pagination
 * const search = Pulse.signal('');
 * const page = Pulse.signal(1);
 * <Table
 *   columns={columns}
 *   data={data}
 *   searchable
 *   searchValue={search}
 *   onSearch={(val) => search(val)}
 *   paginated
 *   currentPage={page}
 *   pageSize={10}
 *   totalPages={5}
 *   onPageChange={(p) => page(p)}
 * />
 *
 * // With custom cell renderers
 * const columns = [
 *   {
 *     key: 'user',
 *     label: 'User',
 *     render: (_, row) => (
 *       <div class="flex items-center gap-2">
 *         <Avatar src={row.avatar} size="sm" />
 *         <span>{row.name}</span>
 *       </div>
 *     )
 *   },
 *   {
 *     key: 'status',
 *     label: 'Status',
 *     render: (value) => (
 *       <Badge color={value === 'active' ? 'success' : 'danger'}>
 *         {value}
 *       </Badge>
 *     )
 *   },
 * ];
 *
 * // Loading state
 * const loading = Pulse.signal(false);
 * <Table columns={columns} data={data} loading={loading} loadingRows={5} />
 *
 * // Bordered + Rounded + Gray header
 * <Table
 *   columns={columns}
 *   data={data}
 *   variant="bordered"
 *   theadVariant="gray"
 *   size="lg"
 * />
 * ```
 */
import Pulse from "@odyssee-software/pulse-framework";
declare namespace Table {
    interface Column<T = any> {
        key: string;
        label: string;
        width?: string;
        align?: "start" | "center" | "end";
        sortable?: boolean;
        render?: (value: any, row: T, index: number) => Pulse.JSX.Element | string;
        headerRender?: () => Pulse.JSX.Element | string;
        className?: string;
        headerClassName?: string;
    }
    interface Row {
        id?: string | number;
        [key: string]: any;
    }
    type Variant = "default" | "striped" | "bordered" | "rounded" | "shadow";
    type TheadVariant = "default" | "gray" | "divided";
    type Size = "sm" | "md" | "lg";
    type SortDirection = "asc" | "desc" | null;
    interface Props<T = Table.Row> extends BaseComponentProps {
        columns: Table.Column<T>[];
        data: T[];
        variant?: Table.Variant;
        theadVariant?: Table.TheadVariant;
        size?: Table.Size;
        hoverable?: boolean;
        selectable?: boolean;
        selectedRows?: Signal<(string | number)[]> | (string | number)[];
        onSelectionChange?: (selected: (string | number)[]) => void;
        sortable?: boolean;
        sortBy?: Signal<string | null> | string | null;
        sortDirection?: Signal<Table.SortDirection> | Table.SortDirection;
        onSort?: (column: string, direction: Table.SortDirection) => void;
        searchable?: boolean;
        searchValue?: Signal<string> | string;
        searchPlaceholder?: string;
        onSearch?: (value: string) => void;
        paginated?: boolean;
        currentPage?: Signal<number> | number;
        pageSize?: number;
        totalPages?: number;
        onPageChange?: (page: number) => void;
        caption?: string;
        showFooter?: boolean;
        footerContent?: Pulse.JSX.Element;
        headless?: boolean;
        loading?: boolean | Signal<boolean>;
        loadingRows?: number;
        emptyMessage?: string | Pulse.JSX.Element;
        onRowClick?: (row: T, index: number) => void;
        rowClassName?: (row: T, index: number) => string;
        rowKey?: keyof T;
    }
}
declare const Table: <T extends Record<string, any> = Record<string, any>>(props: Table.Props<T>) => Pulse.JSX.Element;
export { Table };
export default Table;
/**
 * Initialize Preline components
 * @param immediate - If true, initialize immediately. If false, wait for 'load' event.
 */
export declare function Init(immediate?: boolean): void;
export { default as Pulse } from "@odyssee-software/pulse-framework";
