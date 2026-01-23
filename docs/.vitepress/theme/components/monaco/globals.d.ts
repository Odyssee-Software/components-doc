// Global type declarations for Monaco Editor
// Makes components and Pulse available without imports in the editor

declare const Pulse: {
    signal<T>(initialValue: T, debugName?: string): {
        (): T;
        (value: T): void;
        readonly value: T;
        subscribe(subscriber: (value: T) => void): () => void;
    };
    computed<T>(computeFn: () => T, debugName?: string): {
        (): T;
        readonly value: T;
        subscribe(subscriber: (value: T) => void): () => void;
    };
    effect(effectFn: () => void | (() => void), debugName?: string): {
        destroy(): void;
        readonly isActive: boolean;
    };
    jsx(type: string | Function, props: any, ...children: any[]): HTMLElement | SVGElement | DocumentFragment;
    Fragment(props?: { children?: any }): DocumentFragment;
};

// Import all component types from the generated file
/// <reference path="./odyssee-components.d.ts" />

// Declare all components as global
declare const Button: typeof import('@odyssee-software/components').Button;
declare const Input: typeof import('@odyssee-software/components').Input;
declare const Select: typeof import('@odyssee-software/components').Select;
declare const Checkbox: typeof import('@odyssee-software/components').Checkbox;
declare const Radio: typeof import('@odyssee-software/components').Radio;
declare const RadioGroup: typeof import('@odyssee-software/components').RadioGroup;
declare const Toggle: typeof import('@odyssee-software/components').Toggle;
declare const Textarea: typeof import('@odyssee-software/components').Textarea;
declare const FileInput: typeof import('@odyssee-software/components').FileInput;
declare const Alert: typeof import('@odyssee-software/components').Alert;
declare const Badge: typeof import('@odyssee-software/components').Badge;
declare const Card: typeof import('@odyssee-software/components').Card;
declare const Avatar: typeof import('@odyssee-software/components').Avatar;
declare const AvatarGroup: typeof import('@odyssee-software/components').AvatarGroup;
declare const Blockquote: typeof import('@odyssee-software/components').Blockquote;
declare const Progress: typeof import('@odyssee-software/components').Progress;
declare const ButtonGroup: typeof import('@odyssee-software/components').ButtonGroup;
declare const Collapse: typeof import('@odyssee-software/components').Collapse;
declare const Divider: typeof import('@odyssee-software/components').Divider;
declare const Icon: typeof import('@odyssee-software/components').Icon;
declare const Spinner: typeof import('@odyssee-software/components').Spinner;
declare const ButtonSpinner: typeof import('@odyssee-software/components').ButtonSpinner;
declare const Skeleton: typeof import('@odyssee-software/components').Skeleton;
declare const Modal: typeof import('@odyssee-software/components').Modal;
declare const Tooltip: typeof import('@odyssee-software/components').Tooltip;
declare const Dropdown: typeof import('@odyssee-software/components').Dropdown;
declare const Popover: typeof import('@odyssee-software/components').Popover;
declare const Tabs: typeof import('@odyssee-software/components').Tabs;
declare const Accordion: typeof import('@odyssee-software/components').Accordion;
declare const Table: typeof import('@odyssee-software/components').Table;
declare const Pagination: typeof import('@odyssee-software/components').Pagination;
declare const Breadcrumb: typeof import('@odyssee-software/components').Breadcrumb;
declare const Navbar: typeof import('@odyssee-software/components').Navbar;
declare const Container: typeof import('@odyssee-software/components').Container;
declare const Grid: typeof import('@odyssee-software/components').Grid;
declare const Columns: typeof import('@odyssee-software/components').Columns;
