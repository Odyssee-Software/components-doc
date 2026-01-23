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
    batch<T>(fn: () => T): T;
    jsx(type: string | Function, props: any, ...children: any[]): HTMLElement | SVGElement | DocumentFragment;
    Fragment(props?: { children?: any }): DocumentFragment;
    render: {
        (template: any, parentIsSVG?: boolean): HTMLElement | SVGElement;
        fragment(props?: { children?: any }): DocumentFragment;
    };
};

// Declare all Odyssee components as global
declare const Button: (props: any) => HTMLElement;
declare const Input: (props: any) => HTMLElement;
declare const Select: (props: any) => HTMLElement;
declare const Checkbox: (props: any) => HTMLElement;
declare const Radio: (props: any) => HTMLElement;
declare const RadioGroup: (props: any) => HTMLElement;
declare const Toggle: (props: any) => HTMLElement;
declare const Textarea: (props: any) => HTMLElement;
declare const FileInput: (props: any) => HTMLElement;
declare const Alert: (props: any) => HTMLElement;
declare const Badge: (props: any) => HTMLElement;
declare const Card: (props: any) => HTMLElement;
declare const Avatar: (props: any) => HTMLElement;
declare const AvatarGroup: (props: any) => HTMLElement;
declare const Blockquote: (props: any) => HTMLElement;
declare const Progress: (props: any) => HTMLElement;
declare const ButtonGroup: (props: any) => HTMLElement;
declare const Collapse: (props: any) => HTMLElement;
declare const Divider: (props: any) => HTMLElement;
declare const Icon: (props: any) => HTMLElement;
declare const Spinner: (props: any) => HTMLElement;
declare const ButtonSpinner: (props: any) => HTMLElement;
declare const Skeleton: (props: any) => HTMLElement;
declare const Modal: (props: any) => HTMLElement;
declare const Tooltip: (props: any) => HTMLElement;
declare const Dropdown: (props: any) => HTMLElement;
declare const Popover: (props: any) => HTMLElement;
declare const Tabs: (props: any) => HTMLElement;
declare const Accordion: (props: any) => HTMLElement;
declare const Table: (props: any) => HTMLElement;
declare const Pagination: (props: any) => HTMLElement;
declare const Breadcrumb: (props: any) => HTMLElement;
declare const Navbar: (props: any) => HTMLElement;
declare const Container: (props: any) => HTMLElement;
declare const Grid: (props: any) => HTMLElement;
declare const Columns: (props: any) => HTMLElement;
declare const H1: (props: any) => HTMLElement;
declare const H2: (props: any) => HTMLElement;
declare const H3: (props: any) => HTMLElement;
declare const H4: (props: any) => HTMLElement;
declare const H5: (props: any) => HTMLElement;
declare const H6: (props: any) => HTMLElement;
declare const Text: (props: any) => HTMLElement;
declare const Link: (props: any) => HTMLElement;
declare const Image: (props: any) => HTMLElement;
declare const Offcanvas: (props: any) => HTMLElement;
declare const ContextMenu: (props: any) => HTMLElement;
declare const TreeView: (props: any) => HTMLElement;
declare const Stepper: (props: any) => HTMLElement;
declare const FormGroup: (props: any) => HTMLElement;
declare const InputGroup: (props: any) => HTMLElement;
declare const RangeSlider: (props: any) => HTMLElement;
declare const ColorPicker: (props: any) => HTMLElement;
declare const TimePicker: (props: any) => HTMLElement;
declare const DatePicker: (props: any) => HTMLElement;
declare const InputNumber: (props: any) => HTMLElement;
declare const PinInput: (props: any) => HTMLElement;
declare const ComboBox: (props: any) => HTMLElement;
declare const SearchBox: (props: any) => HTMLElement;
declare const StrongPassword: (props: any) => HTMLElement;
declare const TogglePassword: (props: any) => HTMLElement;
declare const Carousel: (props: any) => HTMLElement;
declare const ChatBubble: (props: any) => HTMLElement;
declare const Device: (props: any) => HTMLElement;
declare const Rating: (props: any) => HTMLElement;
declare const Timeline: (props: any) => HTMLElement;
declare const Toast: (props: any) => HTMLElement;
declare const List: (props: any) => HTMLElement;
declare const ListGroup: (props: any) => HTMLElement;
declare const Kbd: (props: any) => HTMLElement;
