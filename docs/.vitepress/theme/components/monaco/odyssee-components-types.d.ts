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
//# sourceMappingURL=types.d.ts.map