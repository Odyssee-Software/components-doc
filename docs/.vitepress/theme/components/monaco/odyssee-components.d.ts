// Auto-generated type definitions
// Do not edit manually - run npm run generate:types

declare class StepperStore {
	/**
	 * Internal ComponentStateStorage
	 */
	private storage;
	/**
	 * Cached steps data (static)
	 */
	private stepsData;
	constructor(currentStep: Signal<number>, steps: StepperStore.StepData[], mode?: Reactive$1<StepperStore.Mode>);
	/**
	 * Get the currentStep signal
	 */
	get currentStep(): Signal<number>;
	/**
	 * Get the totalSteps signal
	 */
	get totalSteps(): Signal<number>;
	/**
	 * Get the mode signal
	 */
	get mode(): Signal<StepperStore.Mode> | Pulse.Computed<StepperStore.Mode>;
	/**
	 * Get steps data (static, not reactive)
	 */
	get steps(): StepperStore.StepData[];
	/**
	 * Calculate the status of a given step index
	 * This is NOT a computed - it's a helper function that reads the signal when called
	 *
	 * Usage in a computed:
	 * ```
	 * const classes = Pulse.computed(() => {
	 *   const status = store.getStatus(stepIndex);  // Reads currentStep signal
	 *   return status === 'active' ? 'active-class' : 'inactive-class';
	 * });
	 * ```
	 */
	getStatus(stepIndex: number): StepperStore.Status;
	/**
	 * Check if a step is clickable
	 * In linear mode, only previous steps and current step are clickable
	 * In non-linear mode, all steps are clickable
	 */
	isClickable(stepIndex: number): boolean;
	/**
	 * Get step data by index
	 */
	getStepData(stepIndex: number): StepperStore.StepData | undefined;
	/**
	 * Set current step (updates the signal)
	 */
	setCurrentStep(step: number): void;
	/**
	 * Move to next step
	 */
	next(): void;
	/**
	 * Move to previous step
	 */
	previous(): void;
	/**
	 * Check if current step is the first step
	 */
	isFirstStep(): boolean;
	/**
	 * Check if current step is the last step
	 */
	isLastStep(): boolean;
	/**
	 * Check if all steps are completed
	 */
	isCompleted(): boolean;
	/**
	 * Create a computed that derives state from the store
	 * Ensures proper subscription to store signals
	 */
	derive<R>(computeFn: (store: this) => R): Pulse.Computed<R>;
	/**
	 * Get a snapshot of the current state (for debugging)
	 */
	getSnapshot(): {
		currentStep: number;
		totalSteps: number;
		mode: StepperStore.Mode;
		steps: StepperStore.StepData[];
	};
}
declare const ChatBubble$1: Pulse.Fn<ChatBubble.Props> & {
	List: Pulse.Fn<ChatBubble.ListProps>;
	User: Pulse.Fn<ChatBubble.Props>;
	Bot: Pulse.Fn<ChatBubble.Props>;
};
declare const CollapseContent: Pulse.Fn<CollapseContent.Props>;
declare const CollapseTrigger: Pulse.Fn<CollapseTrigger.Props>;
declare const Columns$1: Pulse.Fn<Columns.Props> & {
	Break: Pulse.Fn<BaseComponentProps>;
	Span: Pulse.Fn<Columns.SpanProps>;
};
declare const GradientTextComponent: Pulse.Fn<GradientText.Props>;
declare const Grid$1: Pulse.Fn<Grid.Props> & {
	Item: Pulse.Fn<Grid.ItemProps>;
};
/**
 * Image Component
 */
declare const Image$1: Pulse.Fn<Image$1.Props>;
declare const Kbd$1: Pulse.Fn<Kbd.Props> & {
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
declare const LayoutSplitter$1: Pulse.Fn<LayoutSplitter.Props> & {
	Panel: Pulse.Fn<LayoutSplitter.PanelProps>;
	Handle: Pulse.Fn<LayoutSplitter.HandleProps>;
};
declare const ResponsiveColumns: Pulse.Fn<Columns.Props>;
declare const Skeleton$1: Pulse.Fn<Skeleton.Props> & {
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
declare const Text$1: Pulse.Fn<Text$1.Props> & {
	H1: Pulse.Fn<Omit<Text$1.HeadingProps, "level">>;
	H2: Pulse.Fn<Omit<Text$1.HeadingProps, "level">>;
	H3: Pulse.Fn<Omit<Text$1.HeadingProps, "level">>;
	H4: Pulse.Fn<Omit<Text$1.HeadingProps, "level">>;
	H5: Pulse.Fn<Omit<Text$1.HeadingProps, "level">>;
	H6: Pulse.Fn<Omit<Text$1.HeadingProps, "level">>;
	Lead: Pulse.Fn<Text$1.Props>;
	Muted: Pulse.Fn<Text$1.Props>;
	Small: Pulse.Fn<Text$1.Props>;
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
declare const Timeline$1: Pulse.Fn<Timeline.Props> & {
	Item: Pulse.Fn<Timeline.ItemProps>;
	Heading: Pulse.Fn<Timeline.HeadingProps>;
};
/**
 * Re-export Pulse's native reactive type guards for convenience
 * These are the official helpers from Pulse Framework
 */
declare const isSignal$1: typeof isSignal, isComputed$1: typeof isComputed, isReactive$1: typeof isReactive;
declare function batch<T>(fn: () => T): T;
declare function bindConditional(element: Element, condition: Signal<boolean> | Computed<boolean>, template: DocumentFragment): () => void;
declare function bindEffectToElement(element: Element, effectFn: () => void | (() => void)): () => void;
declare function bindEvent(element: Element, event: string, handler: (event: Event) => void): () => void;
declare function bindList<T>(container: Element, items: Signal<T[]> | Computed<T[]>, template: (item: T, index: number) => DocumentFragment, keyFn?: (item: T, index: number) => string | number): () => void;
declare function bindProperty(element: Element, property: string, signalOrComputed: Signal | Computed, transform?: (value: any) => any): () => void;
declare function clearRegistry(): void;
declare function computed<T>(computeFn: () => T, debugName?: string): Computed<T>;
declare function createDSLScope(root: Element, context: Record<string, any>): {
	cleanup: () => void;
	update: (newContext: Record<string, any>) => () => void;
};
declare function createRef<T extends HTMLElement = HTMLElement>(): Ref<T>;
declare function debugDirtyPropagation(rootNode: ReactiveNode): void;
declare function debugGraph(): void;
declare function debugGraphTree(): void;
declare function debugStats(): void;
declare function disableDebug(): void;
declare function effect(effectFn: () => void | (() => void), debugName?: string): {
	destroy: () => void;
	readonly isActive: boolean;
};
declare function enableDebug(): void;
declare function findNode(id: number): ReactiveNode | undefined;
declare function findNodesByType(type: "signal" | "computed" | "effect"): ReactiveNode[];
declare function flush(): void;
declare function isComputed(value: any): value is Computed;
declare function isReactive(value: any): value is Signal & Computed;
declare function isSignal(value: any): value is Signal;
declare function jsx(type: string | Function, props: any, ...children: any[]): HTMLElement | SVGElement | DocumentFragment;
declare function onMount(callback: () => void | (() => void)): void;
declare function scanDSL(root?: Element, context?: Record<string, any>): () => void;
declare function signal<T>(initialValue: T, debugName?: string): Signal<T>;
declare function untrack<T>(fn: () => T): T;
declare namespace ChatBubble {
	interface ContentItem {
		type: "text" | "link" | "list";
		content: string;
		href?: string;
	}
	interface Props extends BaseComponentProps {
		message?: Reactive$1<string>;
		content?: Reactive$1<HTMLElement | string | ContentItem[]>;
		title?: Reactive$1<string>;
		sender?: Reactive$1<"user" | "bot" | "other">;
		avatar?: Reactive$1<string>;
		avatarAlt?: Reactive$1<string>;
		avatarInitials?: Reactive$1<string>;
		status?: Reactive$1<ChatStatus>;
		statusText?: Reactive$1<string>;
		showStatus?: Reactive$1<boolean>;
		align?: Reactive$1<"left" | "right">;
		variant?: Reactive$1<"default" | "primary">;
		maxWidth?: Reactive$1<string>;
		timestamp?: Reactive$1<string>;
		showTimestamp?: Reactive$1<boolean>;
	}
	interface ListProps extends BaseComponentProps {
		children?: HTMLElement | HTMLElement[];
		spacing?: "sm" | "md" | "lg";
	}
}
declare namespace CollapseContent {
	interface Props extends BaseComponentProps {
		isOpen?: boolean | Reactive$1<boolean>;
		children?: HTMLElement | HTMLElement[] | string;
		duration?: number;
		triggerId?: string;
	}
}
declare namespace CollapseTrigger {
	interface Props extends BaseComponentProps {
		isOpen?: boolean | Reactive$1<boolean>;
		targetId: string;
		children?: HTMLElement | string;
		showIcon?: boolean;
		variant?: "button" | "link";
		onToggle?: (isOpen: boolean) => void;
	}
}
declare namespace Columns {
	/**
	 * Columns props
	 */
	interface Props extends BaseComponentProps {
		/** Content to render inside columns */
		children?: Pulse.JSX.Child;
		/** Number of columns (can be responsive) */
		count?: Reactive$1<number | ResponsiveColumns>;
		/** Column width (t-shirt sizes) */
		width?: Reactive$1<"3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl">;
		/** Gap between columns */
		gap?: Reactive$1<number | string>;
		/** Column rule (divider line between columns) */
		rule?: Reactive$1<boolean>;
		ruleWidth?: Reactive$1<"thin" | "medium" | "thick" | number>;
		ruleColor?: Reactive$1<string>;
		ruleStyle?: Reactive$1<"solid" | "dashed" | "dotted" | "double">;
		/** Auto-fill columns */
		auto?: Reactive$1<boolean>;
	}
	interface SpanProps extends BaseComponentProps {
		children?: Pulse.JSX.Child;
		span?: Reactive$1<"all" | number>;
	}
}
declare namespace GradientText {
	interface Props extends Omit<Text$1.Props, "color"> {
		/** Gradient start color */
		from: Reactive$1<string>;
		/** Gradient end color */
		to: Reactive$1<string>;
		/** Gradient via color (optional middle) */
		via?: Reactive$1<string>;
		/** Gradient direction */
		direction?: Reactive$1<"tl" | "tr" | "br" | "bl" | "t" | "r" | "b" | "l">;
	}
}
declare namespace Grid {
	/**
	 * Grid props
	 */
	interface Props extends BaseComponentProps {
		/** Content to render inside grid */
		children?: Pulse.JSX.Child;
		/** Number of columns (responsive) */
		cols?: Reactive$1<number | ResponsiveValue<number>>;
		/** Number of rows (responsive) */
		rows?: Reactive$1<number | ResponsiveValue<number>>;
		/** Gap between grid items */
		gap?: Reactive$1<number | string>;
		/** Gap between columns */
		gapX?: Reactive$1<number | string>;
		/** Gap between rows */
		gapY?: Reactive$1<number | string>;
		/** Grid auto flow direction */
		autoFlow?: Reactive$1<"row" | "col" | "dense" | "row-dense" | "col-dense">;
		/** Align items */
		alignItems?: Reactive$1<"start" | "center" | "end" | "stretch" | "baseline">;
		/** Justify items */
		justifyItems?: Reactive$1<"start" | "center" | "end" | "stretch">;
		/** Align content */
		alignContent?: Reactive$1<"start" | "center" | "end" | "between" | "around" | "evenly">;
		/** Justify content */
		justifyContent?: Reactive$1<"start" | "center" | "end" | "between" | "around" | "evenly">;
		/** Auto columns sizing */
		autoColumns?: Reactive$1<"auto" | "min" | "max" | "fr">;
		/** Auto rows sizing */
		autoRows?: Reactive$1<"auto" | "min" | "max" | "fr">;
	}
	/**
	 * GridItem props
	 */
	interface ItemProps extends BaseComponentProps {
		/** Content to render inside grid item */
		children?: Pulse.JSX.Child;
		/** Column span */
		colSpan?: Reactive$1<number | "full" | "auto">;
		/** Row span */
		rowSpan?: Reactive$1<number | "full" | "auto">;
		/** Column start */
		colStart?: Reactive$1<number | "auto">;
		/** Column end */
		colEnd?: Reactive$1<number | "auto">;
		/** Row start */
		rowStart?: Reactive$1<number | "auto">;
		/** Row end */
		rowEnd?: Reactive$1<number | "auto">;
		/** Align self */
		alignSelf?: Reactive$1<"auto" | "start" | "center" | "end" | "stretch">;
		/** Justify self */
		justifySelf?: Reactive$1<"auto" | "start" | "center" | "end" | "stretch">;
		/** Place self (shorthand for align-self and justify-self) */
		placeSelf?: Reactive$1<"auto" | "start" | "center" | "end" | "stretch">;
	}
}
declare namespace Image$1 {
	/**
	 * Image props
	 */
	interface Props extends BaseComponentProps {
		/** Image source URL */
		src: Reactive$1<string>;
		/** Alt text for accessibility */
		alt: Reactive$1<string>;
		/** Image width */
		width?: Reactive$1<string | number>;
		/** Image height */
		height?: Reactive$1<string | number>;
		/** Object fit behavior */
		objectFit?: Reactive$1<"contain" | "cover" | "fill" | "none" | "scale-down">;
		/** Object position */
		objectPosition?: Reactive$1<"center" | "top" | "right" | "bottom" | "left" | "left-top" | "left-bottom" | "right-top" | "right-bottom">;
		/** Border radius */
		rounded?: Reactive$1<"none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full">;
		/** Loading strategy */
		loading?: Reactive$1<"eager" | "lazy">;
		/** Image will be block or inline */
		display?: Reactive$1<"block" | "inline" | "inline-block">;
		/** Aspect ratio */
		aspectRatio?: Reactive$1<"square" | "video" | "4/3" | "16/9" | "21/9" | "auto">;
		/** On load callback */
		onLoad?: () => void;
		/** On error callback */
		onError?: () => void;
		/** Fallback image source on error */
		fallbackSrc?: Reactive$1<string>;
	}
}
declare namespace Kbd {
	interface Props extends BaseComponentProps {
		children?: Pulse.JSX.Child;
		variant?: Reactive$1<"text" | "text-dark" | "solid" | "bordered" | "shadow">;
		size?: Reactive$1<"xs" | "sm" | "md" | "lg">;
		icon?: Reactive$1<HTMLElement | string>;
		square?: Reactive$1<boolean>;
	}
	interface GroupProps extends BaseComponentProps {
		keys: Reactive$1<(string | HTMLElement | Kbd.Props)[]>;
		separator?: Reactive$1<string>;
		variant?: Reactive$1<"text" | "text-dark" | "solid" | "bordered" | "shadow">;
		size?: Reactive$1<"xs" | "sm" | "md" | "lg">;
	}
}
declare namespace LayoutSplitter {
	/**
	 * LayoutSplitter props
	 */
	interface Props extends BaseComponentProps {
		/** Content (SplitterPanel components) */
		children?: Pulse.JSX.Child;
		/** Split direction */
		direction?: Reactive$1<"horizontal" | "vertical">;
		/** Custom handle template */
		handleTemplate?: Pulse.JSX.Child;
		/** Custom handle classes */
		handleClasses?: Reactive$1<string>;
		/** Manual handle placement */
		manualHandles?: Reactive$1<boolean>;
		/** Enable/disable resizing */
		disabled?: Reactive$1<boolean>;
		/** Callback when sizes change */
		onResize?: (sizes: number[]) => void;
	}
	/**
	 * SplitterPanel props
	 */
	interface PanelProps extends BaseComponentProps {
		/** Content to render inside panel */
		children?: Pulse.JSX.Child;
		/** Initial size (percentage 0-100) */
		size: Reactive$1<number>;
		/** Minimum size (percentage) */
		minSize?: Reactive$1<number>;
		/** Maximum size (percentage) */
		maxSize?: Reactive$1<number>;
		/** Custom class when min limit reached */
		limitReachedClass?: Reactive$1<string>;
	}
	/**
	 * SplitterHandle props
	 */
	interface HandleProps extends BaseComponentProps {
		/** Handle direction (inherited from parent if not specified) */
		direction?: Reactive$1<"horizontal" | "vertical">;
		/** Custom handle content */
		children?: Pulse.JSX.Child;
	}
}
declare namespace Skeleton {
	interface Props extends BaseComponentProps {
		variant?: Reactive$1<"text" | "circular" | "rectangular">;
		width?: Reactive$1<string | number>;
		height?: Reactive$1<string | number>;
		animate?: Reactive$1<boolean>;
		lines?: Reactive$1<number>;
		gap?: Reactive$1<"sm" | "md" | "lg">;
	}
	interface AvatarProps extends BaseComponentProps {
		size?: Reactive$1<"xs" | "sm" | "md" | "lg" | "xl">;
		animate?: Reactive$1<boolean>;
	}
	interface CardProps extends BaseComponentProps {
		avatar?: Reactive$1<boolean>;
		avatarSize?: Reactive$1<"xs" | "sm" | "md" | "lg" | "xl">;
		lines?: Reactive$1<number>;
		animate?: Reactive$1<boolean>;
		titleWidth?: Reactive$1<string>;
	}
}
declare namespace StepperStore {
	type Mode = "linear" | "non-linear";
	type Status = "pending" | "active" | "completed" | "error" | "success";
	interface StepData {
		index: number;
		label: string;
		description?: string;
		content?: () => Pulse.JSX.Element;
		icon?: Pulse.JSX.Element;
		avatar?: string;
		hasError?: boolean;
		isCompleted?: boolean;
	}
	interface State {
		currentStep: number;
		totalSteps: number;
		mode: Mode;
		steps: StepData[];
	}
}
/**
 * Text namespace - contains all text and typography related types
 */
declare namespace Text$1 {
	interface Props extends BaseComponentProps {
		/** Content to render */
		children?: Pulse.JSX.Child;
		/** Text alignment */
		align?: Reactive$1<"left" | "center" | "right" | "justify">;
		/** Text color */
		color?: Reactive$1<string>;
		/** Font weight */
		weight?: Reactive$1<"thin" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black">;
		/** Font size */
		size?: Reactive$1<"xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl">;
		/** Truncate text with ellipsis */
		truncate?: Reactive$1<boolean>;
		/** Make text uppercase */
		uppercase?: Reactive$1<boolean>;
		/** Make text lowercase */
		lowercase?: Reactive$1<boolean>;
		/** Capitalize first letter */
		capitalize?: Reactive$1<boolean>;
		/** Line clamp (max lines before truncating) */
		lineClamp?: Reactive$1<number>;
		/** Element tag to render */
		as?: Reactive$1<keyof HTMLElementTagNameMap>;
	}
	interface HeadingProps extends Omit<Text$1.Props, "size" | "as"> {
		/** Heading level */
		level?: Reactive$1<1 | 2 | 3 | 4 | 5 | 6>;
	}
}
declare namespace Timeline {
	interface ItemData {
		title: Reactive$1<string> | Pulse.JSX.Element;
		description?: Reactive$1<string> | Pulse.JSX.Element;
		icon?: Reactive$1<TimelineItemIcon>;
		iconContent?: Pulse.JSX.Element;
		avatar?: Reactive$1<string>;
		initials?: Reactive$1<string>;
		user?: Reactive$1<TimelineItemUser>;
		time?: Reactive$1<string>;
		href?: Reactive$1<string>;
		onClick?: () => void;
		hoverable?: Reactive$1<boolean>;
	}
	interface Group {
		heading: Reactive$1<string>;
		items: Reactive$1<Timeline.ItemData[]>;
	}
	interface Props extends BaseComponentProps {
		items?: Reactive$1<Timeline.ItemData[]>;
		grouped?: Reactive$1<boolean>;
		groups?: Reactive$1<Timeline.Group[]>;
		showTime?: Reactive$1<boolean>;
		timePosition?: Reactive$1<"left" | "right">;
		hoverable?: Reactive$1<boolean>;
		collapsible?: Reactive$1<boolean>;
		collapsedItemsCount?: Reactive$1<number>;
		collapseLabel?: Reactive$1<string>;
		lineColor?: Reactive$1<string>;
		dotColor?: Reactive$1<string>;
		children?: Pulse.JSX.Child;
	}
	interface ItemProps extends BaseComponentProps {
		title: Reactive$1<string> | Pulse.JSX.Element;
		description?: Reactive$1<string> | Pulse.JSX.Element;
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
/**
 * Generic ComponentStateStorage class
 */
export declare class ComponentStateStorage<T extends Record<string, any> = Record<string, any>> {
	/**
	 * Internal map storing signals/computeds by key
	 */
	private store;
	/**
	 * Set a signal or computed in the store
	 */
	set<K extends keyof T>(key: K, value: Signal<T[K]> | Computed<T[K]>): void;
	/**
	 * Get a signal or computed from the store
	 * Throws if the key doesn't exist
	 */
	get<K extends keyof T>(key: K): Signal<T[K]> | Computed<T[K]>;
	/**
	 * Get a signal/computed if it exists, otherwise return undefined
	 */
	getOptional<K extends keyof T>(key: K): Signal<T[K]> | Computed<T[K]> | undefined;
	/**
	 * Check if a key exists in the store
	 */
	has<K extends keyof T>(key: K): boolean;
	/**
	 * Read the current value of a signal/computed
	 * Shorthand for store.get(key)()
	 */
	getValue<K extends keyof T>(key: K): T[K];
	/**
	 * Read the current value if key exists, otherwise return default
	 */
	getValueOr<K extends keyof T>(key: K, defaultValue: T[K]): T[K];
	/**
	 * Update a signal value (only works for signals, not computeds)
	 */
	setValue<K extends keyof T>(key: K, value: T[K]): void;
	/**
	 * Delete a key from the store
	 */
	delete<K extends keyof T>(key: K): boolean;
	/**
	 * Clear all entries from the store
	 */
	clear(): void;
	/**
	 * Get all keys in the store
	 */
	keys(): string[];
	/**
	 * Get the size of the store
	 */
	get size(): number;
	/**
	 * Create a computed that reads multiple values from the store
	 * This ensures the computed subscribes to all the signals it reads
	 */
	createComputed<R>(computeFn: (store: this) => R): Computed<R>;
	/**
	 * Batch update multiple signals
	 */
	setValues(values: Partial<{
		[K in keyof T]: T[K];
	}>): void;
	/**
	 * Get a snapshot of all current values (for debugging)
	 */
	getSnapshot(): Partial<T>;
	/**
	 * Create a derived computed from the store
	 * Alias for createComputed for better readability
	 */
	derive<R>(computeFn: (store: this) => R): Computed<R>;
	/**
	 * Static factory: Create store from an object of signals/computeds
	 */
	static fromSignals<T extends Record<string, any>>(signals: {
		[K in keyof T]: Signal<T[K]> | Computed<T[K]>;
	}): ComponentStateStorage<T>;
	/**
	 * Static factory: Create store from an object of values (creates signals)
	 */
	static fromValues<T extends Record<string, any>>(values: T): ComponentStateStorage<T>;
}
export declare const Accordion: Pulse.Fn<Accordion.Props> & {
	Basic: Pulse.Fn<Accordion.Props>;
	NoArrow: Pulse.Fn<Accordion.Props>;
	Arrow: Pulse.Fn<Accordion.Props>;
	Stretched: Pulse.Fn<Accordion.Props>;
	Bordered: Pulse.Fn<Accordion.Props>;
	ActiveBordered: Pulse.Fn<Accordion.Props>;
	Nested: Pulse.Fn<NestedAccordionProps>;
};
export declare const Alert: Pulse.Fn<Alert.Props>;
export declare const Avatar: Pulse.Fn<Avatar.Props>;
export declare const AvatarGroup: Pulse.Fn<AvatarGroup.Props> & {
	Stack: Pulse.Fn<AvatarGroup.Props>;
	Grid: Pulse.Fn<AvatarGroup.Props>;
};
export declare const Badge: Pulse.Fn<Badge.Props>;
export declare const Blockquote: Pulse.Fn<Blockquote.Props> & {
	Bordered: Pulse.Fn<Blockquote.Props>;
	Minimal: Pulse.Fn<Blockquote.Props>;
};
/**
 * BottomCenterToastContainer - Convenience component
 */
export declare const BottomCenterToastContainer: Pulse.Fn<Omit<ToastContainer.Props, "position">>;
/**
 * BottomRightToastContainer - Convenience component
 */
export declare const BottomRightToastContainer: Pulse.Fn<Omit<ToastContainer.Props, "position">>;
export declare const Breadcrumb: Pulse.Fn<Breadcrumb.Props> & {
	Chevron: Pulse.Fn<Omit<Breadcrumb.Props, "separator">>;
	Slash: Pulse.Fn<Omit<Breadcrumb.Props, "separator">>;
	Bordered: Pulse.Fn<Omit<Breadcrumb.Props, "bordered">>;
};
export declare const BrowserDevice: Pulse.Fn<Omit<Device.Props, "variant">>;
export declare const Button: Pulse.Fn<Button.Props>;
export declare const ButtonGroup: Pulse.Fn<ButtonGroup.Props> & {
	Horizontal: Pulse.Fn<ButtonGroup.Props>;
	Vertical: Pulse.Fn<ButtonGroup.Props>;
	Toolbar: Pulse.Fn<ButtonGroup.Props>;
	Responsive: Pulse.Fn<ButtonGroup.Props>;
};
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
export declare const ButtonSpinner: Pulse.Fn<Omit<Spinner.Props, "size">>;
export declare const Card: Pulse.Fn<Card.Props>;
export declare const Carousel: Pulse.Fn<Carousel.Props> & {
	AutoPlay: Pulse.Fn<Carousel.Props>;
	Thumbnail: Pulse.Fn<Carousel.Props>;
};
export declare const Checkbox: Pulse.Fn<Checkbox.Props>;
/**
 * Code - Inline code
 */
export declare const Code: Pulse.Fn<BaseComponentProps>;
export declare const Collapse: Pulse.Fn<Collapse.Props> & {
	Content: Pulse.Fn<CollapseContent.Props>;
	Trigger: Pulse.Fn<CollapseTrigger.Props>;
	ReadMore: Pulse.Fn<Collapse.Props>;
};
export declare const ColorPicker: Pulse.Fn<ColorPicker.Props>;
export declare const ComboBox: Pulse.Fn<ComboBox.Props>;
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
export declare const Container: Pulse.Fn<Container.Props>;
export declare const ContextMenu: Pulse.Fn<ContextMenu.Props>;
export declare const CopyMarkup: Pulse.Fn<CopyMarkup.Props>;
/**
 * CustomScrollbar Component
 */
export declare const CustomScrollbar: Pulse.Fn<CustomScrollbar.Props>;
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
export declare const DatePicker: Pulse.Fn<DatePicker.Props>;
/**
 * Del - Deleted text
 */
export declare const Del: Pulse.Fn<BaseComponentProps>;
export declare const Device: Pulse.Fn<Device.Props>;
export declare const Divider: Pulse.Fn<Divider.Props> & {
	Vertical: Pulse.Fn<Divider.Props>;
	WithText: Pulse.Fn<Omit<Divider.Props, "labelPosition">>;
};
export declare const Dropdown: Pulse.Fn<Dropdown.Props> & {
	Item: Pulse.Fn<Dropdown.ItemProps>;
	Divider: Pulse.Fn<Dropdown.DividerProps>;
};
/**
 * Em - Emphasized/italic text
 */
export declare const Em: Pulse.Fn<BaseComponentProps>;
export declare const FileInput: Pulse.Fn<FileInput.Props>;
/**
 * FileUploadProgress - Main component
 */
export declare const FileUploadProgress: Pulse.Fn<FileUploadProgress.Props>;
export declare const FormGroup: Pulse.Fn<FormGroup.Props>;
/**
 * H1 Component - Main heading
 */
export declare const H1: Pulse.Fn<Omit<Text$1.HeadingProps, "level">>;
/**
 * H2 Component - Secondary heading
 */
export declare const H2: Pulse.Fn<Omit<Text$1.HeadingProps, "level">>;
/**
 * H3 Component - Tertiary heading
 */
export declare const H3: Pulse.Fn<Omit<Text$1.HeadingProps, "level">>;
/**
 * H4 Component
 */
export declare const H4: Pulse.Fn<Omit<Text$1.HeadingProps, "level">>;
/**
 * H5 Component
 */
export declare const H5: Pulse.Fn<Omit<Text$1.HeadingProps, "level">>;
/**
 * H6 Component
 */
export declare const H6: Pulse.Fn<Omit<Text$1.HeadingProps, "level">>;
/**
 * HorizontalSplitter - Quick horizontal layout splitter
 */
export declare const HorizontalSplitter: Pulse.Fn<LayoutSplitter.Props>;
export declare const Icon: Pulse.Fn<Icon.Props>;
export declare const Input: Pulse.Fn<Input.Props>;
export declare const InputGroup: Pulse.Fn<InputGroup.Props>;
export declare const InputNumber: Pulse.Fn<InputNumber.Props>;
/**
 * Ins - Inserted text
 */
export declare const Ins: Pulse.Fn<BaseComponentProps>;
/**
 * Lead - Large lead paragraph
 */
export declare const Lead: Pulse.Fn<Text$1.Props>;
export declare const LegendIndicator: Pulse.Fn<LegendIndicator.Props>;
/**
 * Link Component
 */
export declare const Link: Pulse.Fn<Link.Props>;
export declare const List: Pulse.Fn<List.Props> & {
	Check: Pulse.Fn<Omit<List.Props, "type"> & {
		color?: List.Props["checkColor"];
		variant?: List.Props["checkVariant"];
	}>;
	Inline: Pulse.Fn<Omit<List.Props, "type">>;
	Ordered: Pulse.Fn<Omit<List.Props, "type">>;
	Unordered: Pulse.Fn<Omit<List.Props, "type">>;
};
export declare const ListGroup: Pulse.Fn<ListGroup.Props> & {
	Link: Pulse.Fn<Omit<ListGroup.Props, "as">>;
	Button: Pulse.Fn<Omit<ListGroup.Props, "as">>;
	Flush: Pulse.Fn<Omit<ListGroup.Props, "variant">>;
	Horizontal: Pulse.Fn<Omit<ListGroup.Props, "variant">>;
};
/**
 * Mark - Highlighted text
 */
export declare const Mark: Pulse.Fn<BaseComponentProps>;
export declare const MobileDevice: Pulse.Fn<Omit<Device.Props, "variant">>;
export declare const Modal: Pulse.Fn<Modal.Props>;
/**
 * Muted - Secondary/muted text
 */
export declare const Muted: Pulse.Fn<Text$1.Props>;
export declare const Navbar: Pulse.Fn<Navbar.Props> & {
	Link: Pulse.Fn<Navbar.LinkProps>;
	Dark: Pulse.Fn<Navbar.Props>;
	Primary: Pulse.Fn<Navbar.Props>;
	Sticky: Pulse.Fn<Navbar.Props>;
};
export declare const Offcanvas: Pulse.Fn<Offcanvas.Props>;
export declare const Pagination: Pulse.Fn<Pagination.Props>;
export declare const PinInput: Pulse.Fn<PinInput.Props>;
export declare const Popover: Pulse.Fn<Popover.Props>;
/**
 * Pre - Preformatted text block
 */
export declare const Pre: Pulse.Fn<BaseComponentProps>;
export declare const Progress: Pulse.Fn<Progress.Props>;
export declare const Pulse: {
	dom: typeof dom;
	signal: typeof signal;
	computed: typeof computed;
	effect: typeof effect;
	createRef: typeof createRef;
	onMount: typeof onMount;
	untrack: typeof untrack;
	batch: typeof batch;
	flush: typeof flush;
	isSignal: typeof isSignal;
	isComputed: typeof isComputed;
	isReactive: typeof isReactive;
	render: ((template: RenderTemplate, parentIsSVG?: boolean) => HTMLElement | SVGElement) & {
		fragment: (props?: {
			children?: any;
		}) => DocumentFragment;
	};
	Fragment: (props?: {
		children?: any;
		key?: string | number;
	} | undefined) => DocumentFragment | HTMLElement;
	jsx: typeof jsx;
	jsxs: typeof jsx;
	scanDSL: typeof scanDSL;
	createDSLScope: typeof createDSLScope;
	__DEBUG__: {
		enable: typeof enableDebug;
		disable: typeof disableDebug;
		graph: typeof debugGraph;
		tree: typeof debugGraphTree;
		stats: typeof debugStats;
		dirty: typeof debugDirtyPropagation;
		findNode: typeof findNode;
		findByType: typeof findNodesByType;
		clear: typeof clearRegistry;
		readonly enabled: boolean;
		readonly nodeCount: number;
	};
};
export declare const Radio: Pulse.Fn<Radio.Props>;
export declare const RadioGroup: Pulse.Fn<RadioGroup.Props>;
export declare const RangeSlider: Pulse.Fn<RangeSlider.Props>;
export declare const Rating: Pulse.Fn<Rating.Props>;
export declare const SearchBox: Pulse.Fn<SearchBox.Props>;
export declare const Select: Pulse.Fn<Select.Props>;
/**
 * Small - Fine print text
 */
export declare const Small: Pulse.Fn<Text$1.Props>;
export declare const Spinner: Pulse.Fn<Spinner.Props>;
export declare const StepIndicator: Pulse.Fn<StepIndicator.Props>;
export declare const Stepper: Pulse.Fn<Stepper.Props> & {
	Item: Pulse.Fn<Stepper.ItemProps>;
};
/**
 * Strikethrough - Text with strikethrough
 */
export declare const Strikethrough: Pulse.Fn<BaseComponentProps>;
/**
 * Strong - Bold text
 */
export declare const Strong: Pulse.Fn<BaseComponentProps>;
export declare const StrongPassword: Pulse.Fn<StrongPassword.Props>;
export declare const Table: <T extends Record<string, any> = Record<string, any>>(props: Table.Props<T>) => Pulse.JSX.Element;
export declare const Tabs: Pulse.Fn<Tabs.Props> & {
	Panel: Pulse.Fn<Tabs.PanelProps>;
};
export declare const Textarea: Pulse.Fn<Textarea.Props>;
export declare const TimePicker: Pulse.Fn<TimePicker.Props>;
export declare const Toast: Pulse.Fn<Toast.Props>;
export declare const ToastContainer: Pulse.Fn<ToastContainer.Props>;
export declare const Toggle: Pulse.Fn<Toggle.Props>;
export declare const ToggleCount: Pulse.Fn<ToggleCount.Props> & {
	Value: Pulse.Fn<ToggleCount.ValueProps>;
};
export declare const TogglePassword: Pulse.Fn<TogglePassword.Props>;
export declare const Tooltip: Pulse.Fn<Tooltip.Props>;
/**
 * TopCenterToastContainer - Convenience component
 */
export declare const TopCenterToastContainer: Pulse.Fn<Omit<ToastContainer.Props, "position">>;
/**
 * TopRightToastContainer - Convenience component
 */
export declare const TopRightToastContainer: Pulse.Fn<Omit<ToastContainer.Props, "position">>;
export declare const TreeView: Pulse.Fn<TreeView.Props> & {
	Node: Pulse.Fn<TreeView.NodeProps>;
};
/**
 * Underline - Underlined text
 */
export declare const Underline: Pulse.Fn<BaseComponentProps>;
/**
 * VerticalSplitter - Quick vertical layout splitter
 */
export declare const VerticalSplitter: Pulse.Fn<LayoutSplitter.Props>;
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
 * Initialize Preline components
 * @param immediate - If true, initialize immediately. If false, wait for 'load' event.
 */
export declare function Init(immediate?: boolean): void;
/**
 * Add class to element
 */
export declare function addClass(element: HTMLElement, className: string): void;
/**
 * Build query string
 */
export declare function buildQueryString(params: Record<string, any>): string;
/**
 * Convert to camel case
 */
export declare function camelCase(text: string): string;
/**
 * Capitalize first letter
 */
export declare function capitalize(text: string): string;
/**
 * Clamp number between min and max
 */
export declare function clamp(value: number, min: number, max: number): number;
/**
 * Merge class names
 */
export declare function cn(...classes: (string | undefined | null | false)[]): string;
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
 * Debounce function
 */
export declare function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void;
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
 * Format bytes to human readable
 */
export declare function formatBytes(bytes: number, decimals?: number): string;
/**
 * Format date
 */
export declare function formatDate(date: Date | string | number, format?: string): string;
/**
 * Format number with thousands separator
 */
export declare function formatNumber(num: number, decimals?: number): string;
/**
 * Generate a unique ID
 */
export declare function generateId(prefix?: string): string;
/**
 * Get element offset from top of page
 */
export declare function getElementOffset(element: HTMLElement): {
	top: number;
	left: number;
};
/**
 * Get file extension
 */
export declare function getFileExtension(filename: string): string;
/**
 * Safely get array length from Reactive<T[]>
 *
 * @example
 * if (getLength(props.items) > 0) { ... }
 */
export declare function getLength<T>(arr: Reactive$1<T[]>): number;
/**
 * Get orientation classes for interactive groups
 */
export declare function getOrientationClasses(orientation: "horizontal" | "vertical"): string;
/**
 * Get scroll position
 */
export declare function getScrollPosition(): {
	x: number;
	y: number;
};
/**
 * Get value from Reactive<T> (static value, Signal, or Computed)
 * This is the primary helper for extracting values in Zone B (static logic)
 *
 * Uses Pulse's native isReactive() for type checking
 *
 * @example
 * const size: Reactive<"sm" | "md" | "lg"> = props.size;
 * const sizeValue = getValue(size); // Type: "sm" | "md" | "lg"
 */
export declare function getValue<T>(value: Reactive$1<T> | undefined): T | undefined;
/**
 * Check if element has class
 */
export declare function hasClass(element: HTMLElement, className: string): boolean;
/**
 * Safely check if reactive value is defined (not null/undefined)
 *
 * @example
 * if (isDefined(props.icon)) { ... }
 */
export declare function isDefined<T>(value: Reactive$1<T | undefined | null>): boolean;
/**
 * Safely check if reactive string is empty
 *
 * @example
 * if (!isEmpty(props.label)) { ... }
 */
export declare function isEmpty(value: Reactive$1<string | undefined | null>): boolean;
/**
 * Check if file is image
 */
export declare function isImageFile(filename: string): boolean;
/**
 * Check if element is visible in viewport
 */
export declare function isInViewport(element: HTMLElement): boolean;
/**
 * Check if a value is selected
 * Handles both single and multiple selection
 */
export declare function isSelectedValue<T = string | number>(value: T, selected: T | T[] | undefined): boolean;
/**
 * Convert to kebab case
 */
export declare function kebabCase(text: string): string;
/**
 * Load image
 */
export declare function loadImage(src: string): Promise<HTMLImageElement>;
/**
 * Parse query string
 */
export declare function parseQueryString(query: string): Record<string, string>;
/**
 * Random number between min and max
 */
export declare function random(min: number, max: number): number;
/**
 * Helper for conditional class with reactive boolean
 *
 * @example
 * const classes = clsx(
 *   "base-class",
 *   reactiveClass(props.disabled, "opacity-50")
 * );
 */
export declare function reactiveClass(condition: Reactive$1<boolean>, className: string): string | undefined;
/**
 * Helper for class mapping based on reactive enum values
 * Useful for size/variant/color class mappings
 *
 * @example
 * const sizeClasses = { sm: "py-1", md: "py-2", lg: "py-3" };
 * const className = reactiveClassMap(props.size, sizeClasses);
 */
export declare function reactiveClassMap<T extends string>(value: Reactive$1<T>, map: Record<T, string>): string;
/**
 * Remove class from element
 */
export declare function removeClass(element: HTMLElement, className: string): void;
/**
 * Render icon with label helper
 * Returns JSX structure for icon + label combination
 */
export declare function renderIconWithLabel(icon: any | undefined, label: string | any, iconPosition?: "left" | "right"): any;
/**
 * Retry function with exponential backoff
 */
export declare function retry<T>(fn: () => Promise<T>, maxRetries?: number, delay?: number): Promise<T>;
/**
 * Smooth scroll to element
 */
export declare function scrollToElement(element: HTMLElement, offset?: number): void;
/**
 * Convert to snake case
 */
export declare function snakeCase(text: string): string;
/**
 * Strip HTML tags
 */
export declare function stripHtml(html: string): string;
/**
 * Throttle function
 */
export declare function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void;
/**
 * Toggle class on element
 */
export declare function toggleClass(element: HTMLElement, className: string, force?: boolean): void;
/**
 * Truncate text
 */
export declare function truncate(text: string, length: number, suffix?: string): string;
/**
 * Wait for milliseconds
 */
export declare function wait(ms: number): Promise<void>;
export declare namespace Accordion {
	interface Item {
		id: Reactive$1<string>;
		title: Reactive$1<string>;
		content: Reactive$1<Pulse.JSX.Child>;
		disabled?: Reactive$1<boolean>;
		open?: Reactive$1<boolean>;
	}
	interface Props extends BaseComponentProps {
		items: Reactive$1<Accordion.Item[]>;
		multiple?: Reactive$1<boolean>;
		bordered?: Reactive$1<boolean>;
	}
}
export declare namespace Alert {
	interface Props extends BaseComponentProps {
		variant?: Reactive$1<"solid" | "soft" | "bordered">;
		color?: Reactive$1<Color>;
		title?: Reactive$1<string> | Pulse.JSX.Child;
		children?: Pulse.JSX.Child;
		icon?: Reactive$1<string>;
		dismissible?: Reactive$1<boolean>;
		isVisible?: Reactive$1<boolean>;
		actions?: Pulse.JSX.Child;
		onDismiss?: EventCallback;
	}
}
export declare namespace Avatar {
	interface Props extends BaseComponentProps {
		src?: Reactive$1<string>;
		alt?: Reactive$1<string>;
		name?: Reactive$1<string>;
		initials?: Reactive$1<string>;
		variant?: Reactive$1<"image" | "initials" | "icon">;
		size?: Reactive$1<Size>;
		rounded?: Reactive$1<boolean | "full" | "lg">;
		color?: Reactive$1<"gray" | "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "white">;
		colorVariant?: Reactive$1<"solid" | "soft" | "outline">;
		status?: Reactive$1<"online" | "offline" | "away" | "busy" | "none">;
		statusPosition?: Reactive$1<"top" | "bottom">;
		statusColor?: Reactive$1<string>;
		badge?: string | number;
		badgePosition?: "top" | "bottom";
		icon?: HTMLElement | string;
		iconBg?: boolean;
		tooltip?: string;
		href?: string;
		onClick?: ClickCallback;
	}
}
export declare namespace AvatarGroup {
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
		avatars: Reactive$1<Item[]>;
		layout?: Reactive$1<"stack" | "grid">;
		size?: Reactive$1<Size>;
		max?: Reactive$1<number>;
		showCounter?: Reactive$1<boolean>;
		counterText?: Reactive$1<string>;
		spacing?: Reactive$1<"none" | "sm" | "md" | "lg">;
		ringColor?: Reactive$1<"white" | "gray" | "transparent">;
		rounded?: Reactive$1<boolean | "full" | "lg">;
		enableTooltips?: Reactive$1<boolean>;
		dropdownItems?: Reactive$1<Array<{
			name: string;
			href?: string;
			onClick?: () => void;
		}>>;
		hoverEffect?: Reactive$1<boolean>;
	}
}
export declare namespace Badge {
	interface Props extends BaseComponentProps {
		variant?: Reactive$1<Variant>;
		color?: Reactive$1<Color>;
		size?: Reactive$1<Size>;
		rounded?: Reactive$1<boolean | "full">;
		dot?: Reactive$1<boolean>;
		icon?: Reactive$1<HTMLElement | string>;
		dismissible?: Reactive$1<boolean>;
		onDismiss?: EventCallback;
		children?: Pulse.JSX.Child;
	}
}
export declare namespace Blockquote {
	interface Author {
		name: string;
		title?: string;
		avatar?: string;
		avatarAlt?: string;
	}
	interface Props extends BaseComponentProps {
		quote: Reactive$1<string | HTMLElement>;
		children?: Pulse.JSX.Child;
		author?: Reactive$1<Author | string>;
		size?: Reactive$1<"sm" | "md" | "lg">;
		align?: Reactive$1<"left" | "center" | "right">;
		variant?: Reactive$1<"default" | "bordered" | "minimal">;
		showIcon?: Reactive$1<boolean>;
		borderColor?: Reactive$1<string>;
	}
}
export declare namespace Breadcrumb {
	interface Item {
		id?: Reactive$1<string>;
		label: Reactive$1<Pulse.JSX.Child>;
		href?: Reactive$1<string>;
		icon?: Reactive$1<Pulse.JSX.Child>;
		active?: Reactive$1<boolean>;
		onClick?: ClickCallback;
	}
	interface Props extends BaseComponentProps {
		items: Reactive$1<(string | Breadcrumb.Item)[]>;
		separator?: Reactive$1<"chevron" | "slash" | "custom">;
		customSeparator?: Reactive$1<Pulse.JSX.Child>;
		bordered?: Reactive$1<boolean>;
		showMore?: Reactive$1<boolean>;
		maxItems?: Reactive$1<number>;
		collapsedItems?: Reactive$1<(string | Breadcrumb.Item)[]>;
		size?: Reactive$1<"xs" | "sm" | "md" | "lg">;
		onItemClick?: (item: Breadcrumb.Item | string, index: number) => void;
	}
}
export declare namespace Button {
	interface GroupedProps {
		position?: "first" | "middle" | "last" | "only";
		orientation?: "horizontal" | "vertical";
		variant?: "default" | "toolbar" | "pagination";
		shape?: "default" | "pilled";
		isActive?: boolean;
	}
	interface Props extends BaseComponentProps {
		type?: Reactive$1<"button" | "submit" | "reset">;
		variant?: Reactive$1<Variant>;
		color?: Reactive$1<Color>;
		size?: Reactive$1<Size>;
		disabled?: Reactive$1<boolean>;
		loading?: Reactive$1<boolean>;
		icon?: Reactive$1<string> | Pulse.JSX.Element;
		iconPosition?: Reactive$1<"left" | "right">;
		fullWidth?: Reactive$1<boolean>;
		onClick?: ClickCallback;
		children?: Pulse.JSX.Child;
		spinnerProps?: Partial<Spinner.Props>;
		grouped?: GroupedProps;
	}
}
export declare namespace ButtonGroup {
	interface Item {
		label: Reactive$1<string> | HTMLElement;
		value?: Reactive$1<string | number>;
		icon?: HTMLElement;
		disabled?: Reactive$1<boolean>;
		active?: Reactive$1<boolean>;
		onClick?: () => void;
		type?: Reactive$1<"button" | "submit" | "reset">;
		className?: Reactive$1<string>;
		ariaLabel?: Reactive$1<string>;
	}
	interface Props extends BaseComponentProps {
		buttons: Reactive$1<Item[]>;
		orientation?: Reactive$1<"horizontal" | "vertical">;
		size?: Reactive$1<"sm" | "md" | "lg">;
		variant?: Reactive$1<"default" | "toolbar" | "pagination">;
		shape?: Reactive$1<"default" | "pilled">;
		responsive?: Reactive$1<boolean>;
		allowMultiple?: Reactive$1<boolean>;
		selected?: Reactive$1<string | number | (string | number)[]>;
		fullWidth?: Reactive$1<boolean>;
		useAriaCurrent?: Reactive$1<boolean>;
		onChange?: (value: string | number | (string | number)[]) => void;
	}
}
export declare namespace Card {
	interface Props extends BaseComponentProps {
		title?: Reactive$1<string>;
		subtitle?: Reactive$1<string>;
		children?: Pulse.JSX.Child;
		header?: Pulse.JSX.Child;
		headerBordered?: Reactive$1<boolean>;
		footer?: Pulse.JSX.Child;
		footerBordered?: Reactive$1<boolean>;
		image?: Reactive$1<string>;
		imageAlt?: Reactive$1<string>;
		imagePosition?: Reactive$1<"top" | "bottom">;
		imageOverlay?: Reactive$1<boolean>;
		imageRounded?: Reactive$1<boolean>;
		variant?: Reactive$1<"default" | "bordered" | "shadow" | "primary">;
		size?: Reactive$1<"sm" | "md" | "lg">;
		horizontal?: Reactive$1<boolean>;
		centered?: Reactive$1<boolean>;
		clickable?: Reactive$1<boolean>;
		href?: Reactive$1<string>;
		onClick?: ClickCallback;
		scrollable?: boolean;
		scrollHeight?: string;
		emptyState?: boolean;
		emptyStateIcon?: string;
		emptyStateText?: string;
		hoverEffect?: "shadow" | "scale" | "none";
	}
}
export declare namespace Carousel {
	interface Slide {
		id?: string;
		content: Pulse.JSX.Child;
		thumbnail?: Pulse.JSX.Child;
	}
	interface Props extends BaseComponentProps {
		slides: Reactive$1<Slide[]>;
		currentSlide?: Reactive$1<number>;
		autoPlay?: Reactive$1<boolean>;
		interval?: Reactive$1<number>;
		loop?: Reactive$1<boolean>;
		showControls?: Reactive$1<boolean>;
		showPagination?: Reactive$1<boolean>;
		showInfo?: Reactive$1<boolean>;
		showThumbnails?: Reactive$1<boolean>;
		thumbnailsPosition?: Reactive$1<"bottom" | "right">;
		minHeight?: Reactive$1<string>;
		controlsVariant?: Reactive$1<"default" | "overlay">;
		draggable?: Reactive$1<boolean>;
		onChange?: (index: number) => void;
	}
}
export declare namespace Checkbox {
	interface Props extends BaseComponentProps {
		checked?: Reactive$1<boolean>;
		indeterminate?: Reactive$1<boolean>;
		disabled?: Reactive$1<boolean>;
		required?: Reactive$1<boolean>;
		label?: Reactive$1<string>;
		description?: Reactive$1<string>;
		error?: Reactive$1<string | boolean>;
		success?: Reactive$1<string | boolean>;
		size?: Reactive$1<Size>;
		labelPosition?: Reactive$1<"left" | "right">;
		name?: Reactive$1<string>;
		value?: Reactive$1<string | number>;
		onChange?: ChangeCallback<boolean>;
	}
}
export declare namespace Collapse {
	interface Props extends BaseComponentProps {
		isOpen?: Reactive$1<boolean>;
		trigger?: Pulse.JSX.Child;
		children?: Pulse.JSX.Child;
		openText?: Reactive$1<string>;
		closedText?: Reactive$1<string>;
		showIcon?: Reactive$1<boolean>;
		triggerClassName?: Reactive$1<string>;
		triggerVariant?: Reactive$1<"button" | "link">;
		duration?: Reactive$1<number>;
		onToggle?: (isOpen: boolean) => void;
		onOpen?: () => void;
		onClose?: () => void;
	}
}
export declare namespace ColorPicker {
	interface Props extends BaseComponentProps {
		value?: Reactive$1<string>;
		label?: Reactive$1<string>;
		hint?: Reactive$1<string>;
		error?: Reactive$1<string>;
		disabled?: Reactive$1<boolean>;
		required?: Reactive$1<boolean>;
		size?: Reactive$1<Size>;
		showValue?: Reactive$1<boolean>;
		onChange?: ChangeCallback<string>;
		name?: Reactive$1<string>;
	}
}
export declare namespace ComboBox {
	interface Option {
		[key: string]: any;
	}
	interface Props extends BaseComponentProps {
		options?: Reactive$1<ComboBox.Option[]>;
		value?: Reactive$1<string>;
		placeholder?: Reactive$1<string>;
		disabled?: Reactive$1<boolean>;
		readonly?: Reactive$1<boolean>;
		required?: Reactive$1<boolean>;
		label?: Reactive$1<string>;
		hint?: Reactive$1<string>;
		error?: Reactive$1<string>;
		size?: Reactive$1<Size>;
		displayField?: Reactive$1<string>;
		valueField?: Reactive$1<string>;
		searchFields?: Reactive$1<string[]>;
		minSearchLength?: Reactive$1<number>;
		showCloseButton?: Reactive$1<boolean>;
		maxHeight?: Reactive$1<string>;
		apiUrl?: Reactive$1<string>;
		apiSearchQuery?: Reactive$1<string>;
		onChange?: (item: ComboBox.Option | null) => void;
		onSearch?: ChangeCallback<string>;
		onFocus?: EventCallback;
		onBlur?: EventCallback;
		dropdownClassName?: Reactive$1<string>;
		name?: Reactive$1<string>;
		renderItem?: (item: ComboBox.Option) => Pulse.JSX.Element;
	}
}
export declare namespace Container {
	/**
	 * Container props
	 */
	interface Props extends BaseComponentProps {
		/** Content to render inside container */
		children?: Pulse.JSX.Child;
		/** Center the container (applies mx-auto) */
		centered?: Reactive$1<boolean>;
		/** Add horizontal padding */
		padding?: Reactive$1<"none" | "sm" | "md" | "lg" | "xl" | "2xl">;
		/** Apply container only at specific breakpoint and up */
		breakpoint?: Reactive$1<"sm" | "md" | "lg" | "xl" | "2xl">;
		/** Use fluid container (no max-width constraints) */
		fluid?: Reactive$1<boolean>;
	}
}
export declare namespace ContextMenu {
	interface Props extends BaseComponentProps {
		items: Reactive$1<Dropdown.Item[]>;
		children: Pulse.JSX.Child;
		menuClassName?: Reactive$1<string>;
		onOpen?: () => void;
		onClose?: () => void;
	}
}
export declare namespace CopyMarkup {
	interface Props extends BaseComponentProps {
		template: Pulse.JSX.Element;
		buttonText?: Reactive$1<string>;
		buttonIcon?: Pulse.JSX.Element;
		buttonVariant?: Reactive$1<"outline" | "solid" | "ghost" | "danger">;
		buttonPosition?: Reactive$1<"left" | "center" | "right">;
		limit?: Reactive$1<number>;
		initialCount?: Reactive$1<number>;
		showRemoveButton?: Reactive$1<boolean>;
		removeButtonText?: Reactive$1<string>;
		spacing?: Reactive$1<"sm" | "md" | "lg" | "xl">;
		onChange?: ChangeCallback<number>;
		onAdd?: ChangeCallback<number>;
		onRemove?: ChangeCallback<number>;
		buttonClassName?: Reactive$1<string>;
		wrapperClassName?: Reactive$1<string>;
		disabled?: Reactive$1<boolean>;
	}
}
export declare namespace CustomScrollbar {
	/**
	 * CustomScrollbar props
	 */
	interface Props extends BaseComponentProps {
		/** Content to render with custom scrollbar */
		children?: Pulse.JSX.Child;
		/** Maximum height */
		maxHeight?: Reactive$1<string>;
		/** Maximum width (for horizontal scrollbars) */
		maxWidth?: Reactive$1<string>;
		/** Scrollbar width */
		width?: Reactive$1<"thin" | "normal" | "thick" | string>;
		/** Scrollbar orientation */
		orientation?: Reactive$1<"vertical" | "horizontal" | "both">;
		/** Track background color */
		trackColor?: Reactive$1<string>;
		/** Thumb (handle) color */
		thumbColor?: Reactive$1<string>;
		/** Thumb hover color */
		thumbHoverColor?: Reactive$1<string>;
		/** Rounded scrollbar */
		rounded?: Reactive$1<boolean>;
		/** Auto-hide scrollbar when not hovering */
		autoHide?: Reactive$1<boolean>;
		/** Custom scrollbar styles */
		scrollbarStyles?: Reactive$1<Record<string, string>>;
	}
}
/**
 * DatePicker component props
 */
export declare namespace DatePicker {
	interface Props extends BaseComponentProps {
		/** Input id */
		id?: Reactive$1<string>;
		/** Mode: single date, multiple dates, or range */
		mode?: Reactive$1<"single" | "multiple" | "range">;
		/** Selected date (for single mode) - can be a signal or static value */
		value?: Reactive$1<Date | null>;
		/** Start date for range mode - can be a signal or static value */
		rangeStart?: Reactive$1<Date | null>;
		/** End date for range mode - can be a signal or static value */
		rangeEnd?: Reactive$1<Date | null>;
		/** Placeholder text */
		placeholder?: Reactive$1<string>;
		/** Minimum selectable date */
		minDate?: Reactive$1<Date>;
		/** Maximum selectable date */
		maxDate?: Reactive$1<Date>;
		/** Show time picker */
		showTime?: Reactive$1<boolean>;
		/** Time format (12h or 24h) */
		timeFormat?: Reactive$1<"12h" | "24h">;
		/** Display multiple months (for range mode) */
		displayMonths?: Reactive$1<1 | 2>;
		/** Date format string */
		dateFormat?: Reactive$1<string>;
		/** Callback when date changes (single mode) */
		onChange?: (date: Date | null) => void;
		/** Callback when range changes (range mode) */
		onRangeChange?: (start: Date | null, end: Date | null) => void;
		/** Callback when multiple dates change */
		onMultipleChange?: (dates: Date[]) => void;
		/** Disabled state */
		disabled?: Reactive$1<boolean>;
		/** Read-only state */
		readOnly?: Reactive$1<boolean>;
		/** Custom class for input */
		inputClassName?: Reactive$1<string>;
		/** Custom class for calendar */
		calendarClassName?: Reactive$1<string>;
		/** Theme */
		theme?: Reactive$1<"light" | "dark" | "auto">;
	}
}
export declare namespace Device {
	interface Props extends BaseComponentProps {
		variant: Reactive$1<"mobile" | "browser">;
		src?: Reactive$1<string>;
		alt?: Reactive$1<string>;
		children?: Pulse.JSX.Child;
		url?: Reactive$1<string>;
		showControls?: Reactive$1<boolean>;
		maxWidth?: Reactive$1<string>;
		align?: Reactive$1<"left" | "center" | "right">;
		imageClassName?: Reactive$1<string>;
		frameClassName?: Reactive$1<string>;
	}
}
export declare namespace Divider {
	interface Props extends BaseComponentProps {
		orientation?: Reactive$1<"horizontal" | "vertical">;
		label?: Reactive$1<string> | Pulse.JSX.Child;
		labelPosition?: Reactive$1<"left" | "center" | "right">;
		color?: Reactive$1<"default" | "gray" | "teal" | "blue" | "red" | "yellow" | "white">;
		thickness?: Reactive$1<1 | 2 | 4 | 8>;
		spacing?: Reactive$1<Size>;
		responsiveOrientation?: Reactive$1<{
			sm?: "horizontal" | "vertical";
			md?: "horizontal" | "vertical";
			lg?: "horizontal" | "vertical";
		}>;
	}
}
export declare namespace Dropdown {
	interface Item {
		label?: Reactive$1<Pulse.JSX.Child>;
		value?: Reactive$1<string | number>;
		icon?: Reactive$1<Pulse.JSX.Child>;
		href?: Reactive$1<string>;
		disabled?: Reactive$1<boolean>;
		isDivider?: Reactive$1<boolean>;
		onClick?: () => void;
		className?: Reactive$1<string>;
	}
	type Placement = "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end" | "auto";
	type Trigger = "click" | "hover" | "contextmenu";
	type AutoClose = boolean | "inside" | "outside";
	interface Props extends BaseComponentProps {
		trigger: Reactive$1<Pulse.JSX.Child>;
		triggerClassName?: Reactive$1<string>;
		items?: Reactive$1<Dropdown.Item[]>;
		children?: Pulse.JSX.Child;
		placement?: Reactive$1<Dropdown.Placement>;
		strategy?: Reactive$1<"fixed" | "absolute">;
		offset?: Reactive$1<number>;
		flip?: Reactive$1<boolean>;
		scope?: Reactive$1<"parent" | "window">;
		triggerType?: Reactive$1<Dropdown.Trigger>;
		autoClose?: Reactive$1<Dropdown.AutoClose>;
		closeOnSelect?: Reactive$1<boolean>;
		hasAutofocus?: Reactive$1<boolean>;
		isOpen?: Reactive$1<boolean>;
		menuClassName?: Reactive$1<string>;
		onOpen?: () => void;
		onClose?: () => void;
		onSelect?: (value: string | number) => void;
	}
	interface ItemProps extends BaseComponentProps {
		children: Pulse.JSX.Child;
		icon?: Reactive$1<Pulse.JSX.Child>;
		href?: Reactive$1<string>;
		disabled?: Reactive$1<boolean>;
		active?: Reactive$1<boolean>;
		onClick?: () => void;
	}
	interface DividerProps extends BaseComponentProps {
	}
}
export declare namespace FileInput {
	interface Props extends BaseComponentProps {
		label?: Reactive$1<string>;
		hint?: Reactive$1<string>;
		error?: Reactive$1<string>;
		accept?: Reactive$1<string>;
		multiple?: Reactive$1<boolean>;
		required?: Reactive$1<boolean>;
		disabled?: Reactive$1<boolean>;
		size?: Reactive$1<Size>;
		variant?: Reactive$1<"default" | "button">;
		buttonText?: Reactive$1<string>;
		placeholder?: Reactive$1<string>;
		maxSize?: Reactive$1<number>;
		onChange?: ChangeCallback<FileList>;
		name?: Reactive$1<string>;
	}
}
export declare namespace FileUploadProgress {
	interface Item {
		id: string;
		name: string;
		size: string | number;
		progress: number | Reactive$1<number>;
		status: "uploading" | "completed" | "error" | "paused";
		icon?: Pulse.JSX.Element | HTMLElement;
	}
	interface Props extends BaseComponentProps {
		file?: Reactive$1<Item>;
		files?: Reactive$1<Item[]>;
		showPercentage?: Reactive$1<boolean>;
		showActions?: Reactive$1<boolean>;
		variant?: Reactive$1<"inline" | "card">;
		onPause?: (fileId: string) => void;
		onResume?: (fileId: string) => void;
		onDelete?: (fileId: string) => void;
		onPauseAll?: () => void;
		onResumeAll?: () => void;
		onDeleteAll?: () => void;
		footerText?: Reactive$1<string>;
		footerActions?: Pulse.JSX.Child;
	}
}
export declare namespace FormGroup {
	interface Props extends BaseComponentProps {
		label?: Reactive$1<string>;
		description?: Reactive$1<string>;
		children?: Pulse.JSX.Child;
		direction?: Reactive$1<"vertical" | "horizontal">;
		gap?: Reactive$1<Size>;
		bordered?: Reactive$1<boolean>;
	}
}
export declare namespace Icon {
	interface Props extends BaseComponentProps {
		name?: Reactive$1<string>;
		children?: Pulse.JSX.Child;
		size?: Reactive$1<"xs" | "sm" | "md" | "lg" | "xl" | "2xl">;
		width?: Reactive$1<number | string>;
		height?: Reactive$1<number | string>;
		color?: Reactive$1<Color>;
		variant?: Reactive$1<"solid" | "outline" | "ghost" | "soft" | "soft-outline">;
		shape?: Reactive$1<"square" | "rounded" | "circular">;
		strokeWidth?: Reactive$1<number>;
		fill?: Reactive$1<boolean>;
		containerClassName?: Reactive$1<string>;
	}
}
export declare namespace Input {
	interface Props extends BaseComponentProps {
		type?: Reactive$1<"text" | "email" | "password" | "number" | "tel" | "url" | "search">;
		value?: Reactive$1<string>;
		placeholder?: Reactive$1<string>;
		disabled?: Reactive$1<boolean>;
		readonly?: Reactive$1<boolean>;
		required?: Reactive$1<boolean>;
		error?: Reactive$1<string>;
		label?: Reactive$1<string>;
		hint?: Reactive$1<string>;
		size?: Reactive$1<Size>;
		icon?: Reactive$1<string>;
		iconPosition?: Reactive$1<"left" | "right">;
		onChange?: ChangeCallback<string>;
		onFocus?: EventCallback;
		onBlur?: EventCallback;
	}
}
export declare namespace InputGroup {
	interface Addon {
		type: Reactive$1<"text" | "icon" | "button" | "checkbox" | "radio" | "select">;
		content?: Reactive$1<string> | Pulse.JSX.Element;
		buttonProps?: Button.Props;
		onClick?: () => void;
		checked?: Reactive$1<boolean>;
		onChange?: (checked: boolean) => void;
		selectOptions?: Reactive$1<Select.Option[]>;
		selectValue?: Reactive$1<string>;
		onSelectChange?: (value: string) => void;
		className?: Reactive$1<string>;
	}
	interface Props extends Omit<Input.Props, "icon" | "iconPosition"> {
		leadingAddon?: Reactive$1<InputGroup.Addon | string> | Pulse.JSX.Element;
		trailingAddon?: Reactive$1<InputGroup.Addon | string> | Pulse.JSX.Element;
		leadingAddons?: Reactive$1<(InputGroup.Addon | string | Pulse.JSX.Element)[]>;
		trailingAddons?: Reactive$1<(InputGroup.Addon | string | Pulse.JSX.Element)[]>;
		leadingIcon?: Pulse.JSX.Element;
		trailingIcon?: Pulse.JSX.Element;
		loading?: Reactive$1<boolean>;
		loadingPosition?: Reactive$1<"leading" | "trailing">;
		leadingSelect?: {
			options: Reactive$1<Select.Option[]>;
			value?: Reactive$1<string>;
			onChange?: (value: string) => void;
			label?: Reactive$1<string>;
		};
		trailingSelect?: {
			options: Reactive$1<Select.Option[]>;
			value?: Reactive$1<string>;
			onChange?: (value: string) => void;
			label?: Reactive$1<string>;
		};
		containerClassName?: string;
		containerStyle?: Record<string, any>;
	}
}
export declare namespace InputNumber {
	interface Props extends BaseComponentProps {
		value?: Reactive$1<number>;
		min?: Reactive$1<number>;
		max?: Reactive$1<number>;
		step?: Reactive$1<number>;
		disabled?: Reactive$1<boolean>;
		label?: Reactive$1<string>;
		description?: Reactive$1<string>;
		error?: Reactive$1<string>;
		hint?: Reactive$1<string>;
		variant?: Reactive$1<"default" | "vertical" | "horizontal" | "mini">;
		size?: Reactive$1<Size>;
		buttonShape?: Reactive$1<"rounded" | "square">;
		showButtons?: Reactive$1<boolean>;
		onChange?: ChangeCallback<number>;
		name?: Reactive$1<string>;
	}
}
export declare namespace LegendIndicator {
	interface Props extends BaseComponentProps {
		label: Reactive$1<string> | Pulse.JSX.Element;
		color?: Reactive$1<string>;
		size?: Reactive$1<LegendIndicatorSize>;
		shape?: Reactive$1<LegendIndicatorShape>;
		dotClassName?: Reactive$1<string>;
		labelClassName?: Reactive$1<string>;
	}
}
export declare namespace Link {
	/**
	 * Link props
	 */
	interface Props extends BaseComponentProps {
		/** Link destination */
		href: Reactive$1<string>;
		/** Link content */
		children?: Pulse.JSX.Child;
		/** Text color */
		color?: Reactive$1<"primary" | "secondary" | "success" | "danger" | "warning" | "dark" | "light" | string>;
		/** Underline style */
		underline?: Reactive$1<"none" | "always" | "hover" | "focus">;
		/** Underline color (independent from text color) */
		underlineColor?: Reactive$1<string>;
		/** Underline thickness */
		underlineThickness?: Reactive$1<"1" | "2" | "4" | "8">;
		/** Underline offset */
		underlineOffset?: Reactive$1<"1" | "2" | "4" | "8" | "auto">;
		/** Link opacity */
		opacity?: Reactive$1<number>;
		/** Hover opacity */
		hoverOpacity?: Reactive$1<number>;
		/** Font size */
		size?: Reactive$1<"xs" | "sm" | "base" | "lg" | "xl">;
		/** Font weight */
		weight?: Reactive$1<"normal" | "medium" | "semibold" | "bold">;
		/** Open in new tab */
		external?: Reactive$1<boolean>;
		/** Disabled state */
		disabled?: Reactive$1<boolean>;
		/** On click handler */
		onClick?: (e: Event) => void;
	}
}
export declare namespace List {
	interface Item {
		id?: string;
		content: Reactive$1<string> | HTMLElement;
		icon?: Reactive$1<HTMLElement | string>;
		iconColor?: Reactive$1<Color | "gray" | "white" | "teal" | "indigo" | "purple" | "pink" | "orange">;
		iconVariant?: Reactive$1<"simple" | "soft" | "solid">;
	}
	interface Props extends BaseComponentProps {
		items: Reactive$1<(string | List.Item)[]>;
		type?: Reactive$1<"disc" | "decimal" | "none" | "check" | "inline">;
		spacing?: Reactive$1<"sm" | "md" | "lg">;
		markerColor?: Reactive$1<string>;
		checkColor?: Reactive$1<Color | "gray" | "white" | "teal" | "indigo" | "purple" | "pink" | "orange">;
		checkVariant?: Reactive$1<"simple" | "soft" | "solid">;
		separator?: Reactive$1<"dot" | "pipe" | "slash" | "none">;
		size?: Reactive$1<"xs" | "sm" | "md" | "lg">;
		start?: Reactive$1<number>;
	}
}
export declare namespace ListGroup {
	interface Item {
		id?: string;
		content: Reactive$1<string> | HTMLElement;
		icon?: Reactive$1<HTMLElement | string>;
		badge?: Reactive$1<string | number>;
		badgeColor?: Reactive$1<Color>;
		href?: Reactive$1<string>;
		active?: Reactive$1<boolean>;
		disabled?: Reactive$1<boolean>;
		onClick?: ClickCallback;
	}
	interface Props extends BaseComponentProps {
		items: Reactive$1<(string | ListGroup.Item)[]>;
		variant?: Reactive$1<"default" | "flush" | "horizontal">;
		as?: Reactive$1<"li" | "button" | "a">;
		striped?: Reactive$1<boolean>;
		noGutters?: Reactive$1<boolean>;
		size?: Reactive$1<"sm" | "md" | "lg">;
		activeIndex?: Reactive$1<number>;
		onItemClick?: (item: ListGroup.Item | string, index: number) => void;
	}
}
export declare namespace Modal {
	interface Props extends BaseComponentProps {
		isOpen?: Reactive$1<boolean>;
		title?: Reactive$1<Pulse.JSX.Child>;
		children?: Pulse.JSX.Child;
		footer?: Reactive$1<Pulse.JSX.Child>;
		size?: Reactive$1<"sm" | "md" | "lg" | "xl" | "2xl">;
		centered?: Reactive$1<boolean>;
		staticBackdrop?: Reactive$1<boolean>;
		fullscreen?: Reactive$1<boolean>;
		showCloseButton?: Reactive$1<boolean>;
		closeOnEscape?: Reactive$1<boolean>;
		animation?: Reactive$1<"scale" | "slideDown" | "slideUp" | "fade">;
		onClose?: EventCallback;
		parentSelector?: string;
		parentRef?: Pulse.Ref<HTMLElement>;
	}
}
export declare namespace Navbar {
	interface Item {
		id?: Reactive$1<string>;
		label: Reactive$1<Pulse.JSX.Child>;
		href?: Reactive$1<string>;
		active?: Reactive$1<boolean>;
		disabled?: Reactive$1<boolean>;
		onClick?: ClickCallback;
		dropdown?: Reactive$1<Dropdown.Item[]>;
		badge?: Reactive$1<string | number>;
		icon?: Reactive$1<Pulse.JSX.Child>;
	}
	interface Brand {
		content: Reactive$1<Pulse.JSX.Child>;
		href?: Reactive$1<string>;
		logo?: Reactive$1<Pulse.JSX.Child>;
		logoAlt?: Reactive$1<string>;
		onClick?: ClickCallback;
		className?: Reactive$1<string>;
	}
	type Variant = "default" | "dark" | "primary" | "transparent";
	type Alignment = "left" | "center" | "right";
	interface Props extends BaseComponentProps {
		brand?: Reactive$1<Navbar.Brand | string>;
		items?: Reactive$1<Navbar.Item[]>;
		children?: Pulse.JSX.Child;
		variant?: Reactive$1<Navbar.Variant>;
		alignment?: Reactive$1<Navbar.Alignment>;
		collapsible?: Reactive$1<boolean>;
		collapseBreakpoint?: Reactive$1<"sm" | "md" | "lg" | "xl">;
		horizontalScroll?: Reactive$1<boolean>;
		sticky?: Reactive$1<boolean>;
		stickyOffset?: Reactive$1<string>;
		maxWidth?: Reactive$1<"sm" | "md" | "lg" | "xl" | "2xl" | "full" | string>;
		centered?: Reactive$1<boolean>;
		padding?: Reactive$1<"sm" | "md" | "lg">;
		navClassName?: Reactive$1<string>;
		containerClassName?: Reactive$1<string>;
		brandClassName?: Reactive$1<string>;
		itemsClassName?: Reactive$1<string>;
		toggleClassName?: Reactive$1<string>;
		onBrandClick?: ClickCallback;
		onItemClick?: (item: Navbar.Item, index: number) => void;
		onToggle?: (isOpen: boolean) => void;
	}
	interface LinkProps extends BaseComponentProps {
		href?: Reactive$1<string>;
		active?: Reactive$1<boolean>;
		disabled?: Reactive$1<boolean>;
		onClick?: ClickCallback;
		children?: Pulse.JSX.Child;
	}
}
export declare namespace Offcanvas {
	type Placement = "left" | "right" | "top" | "bottom";
	interface Props extends BaseComponentProps {
		isOpen?: Reactive$1<boolean>;
		placement?: Reactive$1<Offcanvas.Placement>;
		size?: Reactive$1<"xs" | "sm" | "md" | "lg" | "xl" | "full">;
		title?: Reactive$1<Pulse.JSX.Child>;
		children?: Pulse.JSX.Child;
		footer?: Reactive$1<Pulse.JSX.Child>;
		showCloseButton?: Reactive$1<boolean>;
		staticBackdrop?: Reactive$1<boolean>;
		closeOnEscape?: Reactive$1<boolean>;
		backdrop?: Reactive$1<boolean>;
		backdropColor?: Reactive$1<string>;
		bodyScroll?: Reactive$1<boolean>;
		onClose?: EventCallback;
	}
}
export declare namespace Pagination {
	type Variant = "default" | "bordered" | "bordered-group";
	type Shape = "default" | "pilled";
	type Alignment = "start" | "center" | "end";
	type Size = "sm" | "md" | "lg";
	interface Props extends BaseComponentProps {
		currentPage: Reactive$1<number>;
		totalPages: Reactive$1<number>;
		variant?: Reactive$1<Pagination.Variant>;
		shape?: Reactive$1<Pagination.Shape>;
		size?: Reactive$1<Pagination.Size>;
		alignment?: Reactive$1<Pagination.Alignment>;
		showPrevNext?: Reactive$1<boolean>;
		showPrevNextText?: Reactive$1<boolean>;
		prevText?: Reactive$1<string>;
		nextText?: Reactive$1<string>;
		showEllipsis?: Reactive$1<boolean>;
		siblingCount?: Reactive$1<number>;
		showBoundaries?: Reactive$1<boolean>;
		mini?: Reactive$1<boolean>;
		showJumper?: Reactive$1<boolean>;
		jumperText?: Reactive$1<string>;
		showItemsPerPage?: Reactive$1<boolean>;
		itemsPerPageOptions?: Reactive$1<number[]>;
		itemsPerPage?: Reactive$1<number>;
		stretched?: Reactive$1<boolean>;
		disabled?: Reactive$1<boolean>;
		onPageChange?: (page: number) => void;
		onItemsPerPageChange?: (itemsPerPage: number) => void;
	}
}
export declare namespace PinInput {
	interface Props extends BaseComponentProps {
		length?: Reactive$1<number>;
		value?: Reactive$1<string>;
		placeholder?: Reactive$1<string>;
		disabled?: Reactive$1<boolean>;
		readonly?: Reactive$1<boolean>;
		required?: Reactive$1<boolean>;
		masked?: Reactive$1<boolean>;
		type?: Reactive$1<"alphanumeric" | "numeric">;
		pattern?: Reactive$1<string>;
		variant?: Reactive$1<"default" | "gray" | "underline">;
		size?: Reactive$1<"sm" | "md" | "lg">;
		focusEffect?: Reactive$1<"scale" | "none">;
		error?: Reactive$1<string>;
		label?: Reactive$1<string>;
		hint?: Reactive$1<string>;
		onChange?: ChangeCallback<string>;
		onComplete?: ChangeCallback<string>;
		onFocus?: EventCallback;
		onBlur?: EventCallback;
		autoComplete?: Reactive$1<string>;
	}
}
export declare namespace Popover {
	interface Props extends Omit<Tooltip.Props, "content"> {
		header?: Reactive$1<Pulse.JSX.Child>;
		body?: Reactive$1<Pulse.JSX.Child>;
		footer?: Reactive$1<Pulse.JSX.Child>;
		content?: Reactive$1<Pulse.JSX.Child>;
		maxWidth?: Reactive$1<"xs" | "sm" | "md" | "lg" | "xl" | "2xl">;
		trigger?: Reactive$1<"hover">;
	}
}
export declare namespace Progress {
	interface Props extends BaseComponentProps {
		value: Reactive$1<number>;
		max?: Reactive$1<number>;
		min?: Reactive$1<number>;
		label?: Reactive$1<string>;
		showValue?: Reactive$1<boolean>;
		valuePosition?: Reactive$1<"inside" | "end" | "top" | "floating">;
		valueFormat?: (value: number, max: number) => string;
		size?: Reactive$1<"xs" | "sm" | "md" | "lg" | "xl">;
		color?: Reactive$1<Color>;
		variant?: Reactive$1<"default" | "striped" | "gradient">;
		rounded?: Reactive$1<boolean>;
		vertical?: Reactive$1<boolean>;
		height?: Reactive$1<string>;
		segments?: Reactive$1<number>;
		segmentGap?: Reactive$1<string>;
		type?: Reactive$1<"linear" | "circular" | "gauge" | "gauge-half">;
		circularSize?: Reactive$1<number>;
		strokeWidth?: Reactive$1<number>;
		animated?: Reactive$1<boolean>;
		transition?: Reactive$1<boolean>;
		showStatus?: Reactive$1<boolean>;
		statusIcon?: Reactive$1<HTMLElement | string>;
	}
}
export declare namespace Pulse {
	type Signal<T> = Signal<T>;
	type Computed<T> = Computed<T>;
	type Effect = Effect;
	type Ref<T extends HTMLElement = HTMLElement> = Ref<T>;
	type Reactive<T> = Reactive<T>;
	namespace JSX {
		type ElementObject = {
			tag: string;
			attributes?: Record<string, any>;
			properties?: Record<string, any>;
			events?: Record<string, any>;
			children?: Child[];
		};
		type Node = ElementObject | globalThis.Node | globalThis.DocumentFragment | Computed<ElementObject | globalThis.Node | globalThis.DocumentFragment> | string | number | boolean | null | Signal<any> | Computed<any> | Node[] | undefined;
		type Element = Node;
		type Child = Node;
		interface IntrinsicElements {
			a: any;
			abbr: any;
			address: any;
			area: any;
			article: any;
			aside: any;
			audio: any;
			b: any;
			base: any;
			bdi: any;
			bdo: any;
			blockquote: any;
			body: any;
			br: any;
			button: any;
			canvas: any;
			caption: any;
			cite: any;
			code: any;
			col: any;
			colgroup: any;
			data: any;
			datalist: any;
			dd: any;
			del: any;
			details: any;
			dfn: any;
			dialog: any;
			div: any;
			dl: any;
			dt: any;
			em: any;
			embed: any;
			fieldset: any;
			figcaption: any;
			figure: any;
			footer: any;
			form: any;
			h1: any;
			h2: any;
			h3: any;
			h4: any;
			h5: any;
			h6: any;
			head: any;
			header: any;
			hgroup: any;
			hr: any;
			html: any;
			i: any;
			iframe: any;
			img: any;
			input: any;
			ins: any;
			kbd: any;
			label: any;
			legend: any;
			li: any;
			link: any;
			main: any;
			map: any;
			mark: any;
			menu: any;
			meta: any;
			meter: any;
			nav: any;
			noscript: any;
			object: any;
			ol: any;
			optgroup: any;
			option: any;
			output: any;
			p: any;
			param: any;
			picture: any;
			pre: any;
			progress: any;
			q: any;
			rp: any;
			rt: any;
			ruby: any;
			s: any;
			samp: any;
			script: any;
			section: any;
			select: any;
			slot: any;
			small: any;
			source: any;
			span: any;
			strong: any;
			style: any;
			sub: any;
			summary: any;
			sup: any;
			table: any;
			tbody: any;
			td: any;
			template: any;
			textarea: any;
			tfoot: any;
			th: any;
			thead: any;
			time: any;
			title: any;
			tr: any;
			track: any;
			u: any;
			ul: any;
			var: any;
			video: any;
			wbr: any;
			svg: any;
			circle: any;
			ellipse: any;
			line: any;
			polygon: any;
			polyline: any;
			rect: any;
			path: any;
			g: any;
			text: any;
			defs: any;
			use: any;
			[elemName: string]: any;
		}
		interface ElementAttributesProperty {
			props: {};
		}
		interface ElementChildrenAttribute {
			children: {};
		}
		type LibraryManagedAttributes<C, P> = P;
	}
	type Fn<PROPS extends Record<string, any> = Record<string, any>> = (props: PROPS) => JSX.Node;
}
export declare namespace Radio {
	interface Props extends BaseComponentProps {
		checked?: Reactive$1<boolean>;
		disabled?: Reactive$1<boolean>;
		required?: Reactive$1<boolean>;
		label?: Reactive$1<string>;
		description?: Reactive$1<string>;
		error?: Reactive$1<string | boolean>;
		success?: Reactive$1<string | boolean>;
		size?: Reactive$1<Size>;
		labelPosition?: Reactive$1<"left" | "right">;
		name?: Reactive$1<string>;
		value?: Reactive$1<string | number>;
		onChange?: ChangeCallback<string | number>;
	}
}
export declare namespace RadioGroup {
	interface Option {
		value: string | number;
		label: string;
		description?: string;
		disabled?: boolean;
	}
	interface Props extends BaseComponentProps {
		name?: Signal$1<string>;
		value?: Signal$1<string | number>;
		options: Signal$1<RadioGroup.Option[]>;
		label?: Signal$1<string>;
		hint?: Signal$1<string>;
		error?: Signal$1<string>;
		required?: Signal$1<boolean>;
		disabled?: Signal$1<boolean>;
		size?: Signal$1<Size>;
		direction?: Signal$1<"vertical" | "horizontal">;
		onChange?: ChangeCallback<string | number>;
	}
}
export declare namespace RangeSlider {
	interface Props extends BaseComponentProps {
		value?: Reactive$1<number>;
		min?: Reactive$1<number>;
		max?: Reactive$1<number>;
		step?: Reactive$1<number>;
		label?: Reactive$1<string>;
		hint?: Reactive$1<string>;
		error?: Reactive$1<string>;
		disabled?: Reactive$1<boolean>;
		showValue?: Reactive$1<boolean>;
		valueFormat?: (value: number) => string;
		onChange?: ChangeCallback<number>;
		name?: Reactive$1<string>;
	}
}
export declare namespace Rating {
	interface Props extends BaseComponentProps {
		value?: Reactive$1<number>;
		max?: Reactive$1<number>;
		mode?: Reactive$1<RatingMode>;
		onChange?: (value: number) => void;
		symbol?: Reactive$1<RatingSymbol>;
		customSymbol?: Pulse.JSX.Child;
		size?: Reactive$1<RatingSize>;
		color?: Reactive$1<string>;
		inactiveColor?: Reactive$1<string>;
		showLabel?: Reactive$1<boolean>;
		label?: Reactive$1<string>;
		name?: Reactive$1<string>;
		disabled?: Reactive$1<boolean>;
		required?: Reactive$1<boolean>;
	}
}
export declare namespace SearchBox {
	interface Option {
		[key: string]: any;
	}
	interface Props extends BaseComponentProps {
		options?: Reactive$1<SearchBox.Option[]>;
		value?: Reactive$1<string>;
		placeholder?: Reactive$1<string>;
		disabled?: Reactive$1<boolean>;
		readonly?: Reactive$1<boolean>;
		required?: Reactive$1<boolean>;
		label?: Reactive$1<string>;
		hint?: Reactive$1<string>;
		error?: Reactive$1<string>;
		size?: Reactive$1<Size>;
		displayField?: Reactive$1<string>;
		valueField?: Reactive$1<string>;
		searchFields?: Reactive$1<string[]>;
		groupBy?: Reactive$1<string>;
		showGroupTitles?: Reactive$1<boolean>;
		minSearchLength?: Reactive$1<number>;
		isOpenOnFocus?: Reactive$1<boolean>;
		preventSelection?: Reactive$1<boolean>;
		preserveSelectionOnEmpty?: Reactive$1<boolean>;
		maxHeight?: Reactive$1<string>;
		apiUrl?: Reactive$1<string>;
		apiSearchQuery?: Reactive$1<string>;
		loading?: Reactive$1<boolean>;
		onSelect?: (item: SearchBox.Option) => void;
		onSearch?: ChangeCallback<string>;
		onFocus?: EventCallback;
		onBlur?: EventCallback;
		dropdownClassName?: Reactive$1<string>;
		name?: string;
		renderItem?: (item: SearchBox.Option) => Pulse.JSX.Element;
		renderGroupTitle?: (title: string) => Pulse.JSX.Element;
	}
}
export declare namespace Select {
	interface Option {
		value: string | number;
		label: string;
		disabled?: boolean;
		group?: string;
	}
	interface Props extends BaseComponentProps {
		value?: Reactive$1<string | number>;
		options: Reactive$1<Select.Option[]>;
		placeholder?: Reactive$1<string>;
		disabled?: Reactive$1<boolean>;
		required?: Reactive$1<boolean>;
		error?: Reactive$1<string>;
		label?: Reactive$1<string>;
		hint?: Reactive$1<string>;
		size?: Reactive$1<Size>;
		multiple?: Reactive$1<boolean>;
		searchable?: Reactive$1<boolean>;
		onChange?: ChangeCallback<string | number | (string | number)[]>;
	}
}
export declare namespace Spinner {
	interface Props extends BaseComponentProps {
		size?: Reactive$1<"xs" | "sm" | "md" | "lg" | "xl">;
		color?: Reactive$1<"primary" | "secondary" | "success" | "danger" | "warning" | "info" | "gray" | "white" | "indigo" | "purple" | "pink" | "orange">;
		thickness?: Reactive$1<2 | 3 | 4>;
		label?: Reactive$1<string>;
		showLabel?: Reactive$1<boolean>;
		centered?: Reactive$1<boolean>;
	}
}
export declare namespace StepIndicator {
	type Status = "pending" | "active" | "success" | "completed" | "error" | "processed";
	type Variant = "default" | "white" | "solid";
	interface Props extends BaseComponentProps {
		store: StepperStore;
		stepIndex: number;
		variant?: Reactive$1<StepIndicator.Variant>;
		icon?: Pulse.JSX.Element;
		avatar?: string;
		showCheckmark?: Reactive$1<boolean>;
		showError?: Reactive$1<boolean>;
		showSpinner?: Reactive$1<boolean>;
	}
}
export declare namespace Stepper {
	type Mode = "linear" | "non-linear";
	type Orientation = "horizontal" | "vertical";
	type Variant = "default" | "white" | "solid";
	type Alignment = "start" | "center" | "end";
	type Status = "pending" | "active" | "success" | "completed" | "error" | "processed";
	interface StepItemData {
		index: Reactive$1<number>;
		label: Reactive$1<string>;
		description?: Reactive$1<string>;
		icon?: Reactive$1<Pulse.JSX.Element>;
		avatar?: Reactive$1<string>;
		content?: Reactive$1<Pulse.JSX.Element | (() => Pulse.JSX.Element)>;
		isOptional?: Reactive$1<boolean>;
		isCompleted?: Reactive$1<boolean>;
		hasError?: Reactive$1<boolean>;
	}
	interface ItemProps extends BaseComponentProps {
		store: StepperStore;
		stepIndex: number;
		label: string;
		description?: string;
		variant?: Reactive$1<Stepper.Variant>;
		orientation?: Reactive$1<Stepper.Orientation>;
		isLast?: boolean;
		icon?: Pulse.JSX.Element;
		avatar?: string;
		onClick?: (index: number) => void;
		children?: Reactive$1<Pulse.JSX.Child>;
	}
	interface Props extends BaseComponentProps {
		steps?: Reactive$1<Stepper.StepItemData[]>;
		currentStep: Reactive$1<number>;
		mode?: Reactive$1<Stepper.Mode>;
		orientation?: Reactive$1<Stepper.Orientation>;
		variant?: Reactive$1<Stepper.Variant>;
		alignment?: Reactive$1<Stepper.Alignment>;
		showControls?: Reactive$1<boolean>;
		backText?: Reactive$1<string>;
		nextText?: Reactive$1<string>;
		finishText?: Reactive$1<string>;
		resetText?: Reactive$1<string>;
		skipText?: Reactive$1<string>;
		completeStepText?: Reactive$1<string>;
		onStepChange?: (step: number) => void;
		onComplete?: () => void;
		onSkip?: (step: number) => void;
		onReset?: () => void;
		onBack?: () => void;
		onNext?: () => void;
		children?: Pulse.JSX.Child;
	}
}
export declare namespace StrongPassword {
	interface Props extends BaseComponentProps {
		value?: Reactive$1<string>;
		placeholder?: Reactive$1<string>;
		disabled?: Reactive$1<boolean>;
		readonly?: Reactive$1<boolean>;
		required?: Reactive$1<boolean>;
		label?: Reactive$1<string>;
		hint?: Reactive$1<string>;
		error?: Reactive$1<string>;
		size?: Reactive$1<Size>;
		minLength?: Reactive$1<number>;
		requireLowercase?: Reactive$1<boolean>;
		requireUppercase?: Reactive$1<boolean>;
		requireNumbers?: Reactive$1<boolean>;
		requireSpecialChars?: Reactive$1<boolean>;
		specialCharsSet?: Reactive$1<string>;
		strengthLevels?: Reactive$1<string[]>;
		showHints?: Reactive$1<boolean>;
		hintsMode?: Reactive$1<"inline" | "popover">;
		showToggleButton?: Reactive$1<boolean>;
		checksExclude?: Reactive$1<string[]>;
		stripCount?: Reactive$1<number>;
		onChange?: (value: string, strength: number, strengthLevel: string) => void;
		onStrengthChange?: (strength: number, strengthLevel: string) => void;
		onFocus?: EventCallback;
		onBlur?: EventCallback;
		name?: Reactive$1<string>;
	}
}
export declare namespace Table {
	interface Column<T = any> {
		key: Reactive$1<string>;
		label: Reactive$1<string>;
		width?: Reactive$1<string>;
		align?: Reactive$1<"start" | "center" | "end">;
		sortable?: Reactive$1<boolean>;
		render?: (value: any, row: T, index: number) => Pulse.JSX.Element | string;
		headerRender?: () => Pulse.JSX.Element | string;
		className?: Reactive$1<string>;
		headerClassName?: Reactive$1<string>;
	}
	interface Row {
		id?: Reactive$1<string | number>;
		[key: string]: any;
	}
	type Variant = "default" | "striped" | "bordered" | "rounded" | "shadow";
	type TheadVariant = "default" | "gray" | "divided";
	type Size = "sm" | "md" | "lg";
	type SortDirection = "asc" | "desc" | null;
	interface Props<T = Table.Row> extends BaseComponentProps {
		columns: Reactive$1<Table.Column<T>[]>;
		data: Reactive$1<T[]>;
		variant?: Reactive$1<Table.Variant>;
		theadVariant?: Reactive$1<Table.TheadVariant>;
		size?: Reactive$1<Table.Size>;
		hoverable?: Reactive$1<boolean>;
		selectable?: Reactive$1<boolean>;
		selectedRows?: Reactive$1<(string | number)[]>;
		onSelectionChange?: (selected: (string | number)[]) => void;
		sortable?: Reactive$1<boolean>;
		sortBy?: Reactive$1<string | null>;
		sortDirection?: Reactive$1<Table.SortDirection>;
		onSort?: (column: string, direction: Table.SortDirection) => void;
		searchable?: Reactive$1<boolean>;
		searchValue?: Reactive$1<string>;
		searchPlaceholder?: Reactive$1<string>;
		onSearch?: (value: string) => void;
		paginated?: Reactive$1<boolean>;
		currentPage?: Reactive$1<number>;
		pageSize?: Reactive$1<number>;
		totalPages?: Reactive$1<number>;
		onPageChange?: (page: number) => void;
		caption?: Reactive$1<string>;
		showFooter?: Reactive$1<boolean>;
		footerContent?: Reactive$1<Pulse.JSX.Child>;
		headless?: Reactive$1<boolean>;
		loading?: Reactive$1<boolean>;
		loadingRows?: Reactive$1<number>;
		emptyMessage?: Reactive$1<Pulse.JSX.Child>;
		onRowClick?: (row: T, index: number) => void;
		rowClassName?: (row: T, index: number) => string;
		rowKey?: Reactive$1<keyof T>;
	}
}
export declare namespace Tabs {
	interface Item {
		id: Reactive$1<string>;
		label: Reactive$1<Pulse.JSX.Child>;
		content: Reactive$1<Pulse.JSX.Child>;
		icon?: Reactive$1<Pulse.JSX.Child>;
		disabled?: Reactive$1<boolean>;
		badge?: Reactive$1<string | number>;
	}
	type EventType = "click" | "hover";
	type Variant = "underline" | "pills" | "enclosed" | "vertical";
	interface PanelProps extends BaseComponentProps {
		id: Reactive$1<string>;
		label: Reactive$1<Pulse.JSX.Child>;
		children: Pulse.JSX.Child;
		icon?: Reactive$1<Pulse.JSX.Child>;
		disabled?: Reactive$1<boolean>;
		badge?: Reactive$1<string | number>;
	}
	interface Props extends BaseComponentProps {
		items?: Reactive$1<Tabs.Item[]>;
		children?: Pulse.JSX.Child;
		activeTab?: Reactive$1<string>;
		variant?: Reactive$1<Tabs.Variant>;
		eventType?: Reactive$1<Tabs.EventType>;
		bordered?: Reactive$1<boolean>;
		fullWidth?: Reactive$1<boolean>;
		size?: Reactive$1<"sm" | "md" | "lg">;
		tablistClassName?: Reactive$1<string>;
		contentClassName?: Reactive$1<string>;
		onChange?: (tabId: string, prevTabId: string) => void;
	}
}
export declare namespace Textarea {
	interface Props extends BaseComponentProps {
		value?: Reactive$1<string>;
		placeholder?: Reactive$1<string>;
		disabled?: Reactive$1<boolean>;
		readonly?: Reactive$1<boolean>;
		required?: Reactive$1<boolean>;
		error?: Reactive$1<string>;
		label?: Reactive$1<string>;
		hint?: Reactive$1<string>;
		rows?: Reactive$1<number>;
		size?: Reactive$1<Size>;
		resize?: Reactive$1<"none" | "vertical" | "horizontal" | "both">;
		maxLength?: Reactive$1<number>;
		showCount?: Reactive$1<boolean>;
		autoGrow?: Reactive$1<boolean>;
		onChange?: ChangeCallback<string>;
		onFocus?: EventCallback;
		onBlur?: EventCallback;
	}
}
export declare namespace TimePicker {
	interface Props extends BaseComponentProps {
		value?: Reactive$1<string>;
		format?: Reactive$1<"12h" | "24h">;
		label?: Reactive$1<string>;
		hint?: Reactive$1<string>;
		error?: Reactive$1<string>;
		placeholder?: Reactive$1<string>;
		disabled?: Reactive$1<boolean>;
		required?: Reactive$1<boolean>;
		size?: Reactive$1<Size>;
		minuteStep?: Reactive$1<number>;
		showNowButton?: Reactive$1<boolean>;
		onChange?: ChangeCallback<string>;
		name?: Reactive$1<string>;
	}
}
export declare namespace Toast {
	interface Action {
		label: Reactive$1<string>;
		onClick: (e: Event) => void;
		variant?: Reactive$1<"default" | "primary">;
	}
	interface Props extends BaseComponentProps {
		type?: Reactive$1<ToastType>;
		variant?: Reactive$1<ToastVariant>;
		title?: Reactive$1<string>;
		message: Reactive$1<string> | Pulse.JSX.Element;
		icon?: Pulse.JSX.Element;
		avatar?: Reactive$1<string>;
		duration?: Reactive$1<number>;
		dismissible?: Reactive$1<boolean>;
		actions?: Reactive$1<Action[]>;
		progress?: Reactive$1<number>;
		progressLabel?: Reactive$1<string>;
		loading?: Reactive$1<boolean>;
		visible?: boolean | Reactive$1<boolean>;
		onClose?: () => void;
		animated?: boolean;
	}
}
export declare namespace ToastContainer {
	interface Props extends BaseComponentProps {
		position?: Reactive$1<ToastPosition>;
		maxToasts?: Reactive$1<number>;
		offset?: Reactive$1<number>;
		gap?: Reactive$1<number>;
		children?: Pulse.JSX.Child;
	}
}
export declare namespace Toggle {
	interface Props extends BaseComponentProps {
		checked?: Reactive$1<boolean>;
		disabled?: Reactive$1<boolean>;
		required?: Reactive$1<boolean>;
		label?: Reactive$1<string>;
		labelBefore?: Reactive$1<string>;
		description?: Reactive$1<string>;
		error?: Reactive$1<string | boolean>;
		success?: Reactive$1<string | boolean>;
		size?: Reactive$1<"xs" | "sm" | "md" | "lg">;
		variant?: Reactive$1<"default" | "soft">;
		showIcons?: Reactive$1<boolean>;
		labelPosition?: Reactive$1<"left" | "right">;
		name?: Reactive$1<string>;
		onChange?: ChangeCallback<boolean>;
	}
}
export declare namespace ToggleCount {
	interface Props extends BaseComponentProps {
		type?: Reactive$1<"radio" | "switch">;
		variant?: Reactive$1<"default" | "pills">;
		options: Reactive$1<[
			string,
			string
		]>;
		value?: Reactive$1<0 | 1>;
		defaultValue?: Reactive$1<0 | 1>;
		disabled?: Reactive$1<boolean>;
		onChange?: (index: number, label: string) => void;
	}
	interface ValueProps extends BaseComponentProps {
		target: Reactive$1<string>;
		min: Reactive$1<number>;
		max: Reactive$1<number>;
		duration?: Reactive$1<number>;
		prefix?: Reactive$1<string>;
		suffix?: Reactive$1<string>;
		decimals?: Reactive$1<number>;
		formatter?: (value: number) => string;
	}
}
export declare namespace TogglePassword {
	interface Props extends BaseComponentProps {
		value?: Reactive$1<string>;
		placeholder?: Reactive$1<string>;
		disabled?: Reactive$1<boolean>;
		readonly?: Reactive$1<boolean>;
		required?: Reactive$1<boolean>;
		error?: Reactive$1<string>;
		label?: Reactive$1<string>;
		hint?: Reactive$1<string>;
		size?: Reactive$1<Size>;
		defaultVisible?: Reactive$1<boolean>;
		showToggleButton?: Reactive$1<boolean>;
		onChange?: ChangeCallback<string>;
		onFocus?: EventCallback;
		onBlur?: EventCallback;
		name?: Reactive$1<string>;
	}
}
export declare namespace Tooltip {
	interface Props extends BaseComponentProps {
		content: Reactive$1<Pulse.JSX.Child>;
		placement?: Reactive$1<"top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end" | "auto">;
		trigger?: Reactive$1<"hover">;
		children?: Pulse.JSX.Child;
		showDelay?: Reactive$1<number>;
		hideDelay?: Reactive$1<number>;
		variant?: Reactive$1<"dark" | "light">;
		arrow?: Reactive$1<boolean>;
	}
}
export declare namespace TreeView {
	interface Node {
		value: Reactive$1<string>;
		label: Reactive$1<string>;
		isDir?: Reactive$1<boolean>;
		icon?: Reactive$1<Pulse.JSX.Element | string>;
		disabled?: Reactive$1<boolean>;
		children?: Reactive$1<TreeView.Node[]>;
	}
	interface Props extends BaseComponentProps {
		nodes: Reactive$1<TreeView.Node[]>;
		selectable?: Reactive$1<boolean>;
		multiSelect?: Reactive$1<boolean>;
		selected?: Reactive$1<string[]>;
		onSelect?: (selected: string[]) => void;
		expanded?: Reactive$1<string[]>;
		onExpand?: (expanded: string[]) => void;
		alwaysOpen?: Reactive$1<boolean>;
		showCheckboxes?: Reactive$1<boolean>;
		checked?: Reactive$1<string[]>;
		onCheck?: (checked: string[]) => void;
		draggable?: Reactive$1<boolean>;
		onDragEnd?: (nodes: TreeView.Node[]) => void;
		showLines?: Reactive$1<boolean>;
		iconPosition?: Reactive$1<"left" | "right">;
		ariaLabel?: Reactive$1<string>;
		ariaLabelledBy?: Reactive$1<string>;
	}
	interface NodeProps {
		node: Reactive$1<TreeView.Node>;
		level: Reactive$1<number>;
		treeId: Reactive$1<string>;
		selectable?: Reactive$1<boolean>;
		multiSelect?: Reactive$1<boolean>;
		showCheckboxes?: Reactive$1<boolean>;
		showLines?: Reactive$1<boolean>;
		iconPosition?: Reactive$1<"left" | "right">;
		selected: Reactive$1<string[]>;
		expanded: Reactive$1<string[]>;
		checked: Reactive$1<string[]>;
		onToggleExpand: (value: string) => void;
		onSelectNode: (value: string, event: MouseEvent) => void;
		onCheckNode: (value: string, isChecked: boolean) => void;
	}
}
/**
 * Base component props extended by all components
 * All props support reactive values (Signal/Computed)
 */
export interface BaseComponentProps {
	/** HTML id attribute (reactive) */
	id?: string | Signal$1<string> | Computed$1<string>;
	/** CSS class name (reactive) */
	className?: string | Signal$1<string> | Computed$1<string>;
	/** Inline styles (reactive) */
	style?: Partial<CSSStyleDeclaration> | string | Signal$1<Partial<CSSStyleDeclaration> | string> | Computed$1<Partial<CSSStyleDeclaration> | string>;
	/** Key for reconciliation (helps Pulse identify and cleanup components) */
	key?: string | number;
	/** Additional props */
	[key: string]: any;
}
export interface Computed<T = any> {
	(): T;
	readonly value: T;
	subscribe(subscriber: Subscriber<T>): Unsubscribe;
	readonly isComputed: true;
}
export interface Effect {
	destroy(): void;
	readonly isActive: boolean;
}
/**
 * Nested Accordion Support
 */
export interface NestedAccordionProps {
	items: Reactive$1<Accordion.Item[]>;
	variant?: Reactive$1<"default" | "bordered" | "active-bordered" | "no-arrow" | "arrow" | "stretched">;
}
export interface ReactiveNode {
	__id?: number;
	__type?: "signal" | "computed" | "effect";
	__name?: string;
	value?: any;
	dirty?: boolean;
	deps?: Set<any>;
	subs?: Set<any>;
	isSignal?: boolean;
	isComputed?: boolean;
	fn?: Function;
}
/**
 * Interface pour les refs d'éléments DOM
 */
export interface Ref<T extends HTMLElement = HTMLElement> {
	current: T | null;
	callback: (el: T | null) => void;
}
export interface RenderTemplate {
	tag: string;
	attributes?: Record<string, string | Signal<string> | Computed<string>>;
	properties?: Record<string, any | Signal<any> | Computed<any>>;
	children?: (RenderTemplate | string | Signal<string> | Computed<string> | HTMLElement | SVGElement)[];
	events?: Record<string, (event: Event) => void>;
	ref?: (el: HTMLElement | SVGElement | null) => void;
}
/**
 * Responsive column count
 */
export interface ResponsiveColumns {
	base?: number;
	sm?: number;
	md?: number;
	lg?: number;
	xl?: number;
	"2xl"?: number;
}
/**
 * Responsive breakpoint value
 */
export interface ResponsiveValue<T> {
	base?: T;
	sm?: T;
	md?: T;
	lg?: T;
	xl?: T;
	"2xl"?: T;
}
export interface Signal<T = any> {
	(): T;
	(value: T): void;
	readonly value: T;
	subscribe(subscriber: Subscriber<T>): Unsubscribe;
	readonly isSignal: true;
}
export interface TimelineItemUser {
	name: string;
	avatar?: string;
	initials?: string;
	onClick?: () => void;
}
/**
 * Alignment types (used for layout components)
 */
export type Alignment = "start" | "center" | "end" | "stretch" | "baseline";
/**
 * Generic change callback
 */
export type ChangeCallback<T = any> = (value: T) => void;
export type ChatStatus = "sent" | "delivered" | "read" | "error" | "sending";
/**
 * Generic click callback
 */
export type ClickCallback = EventCallback<void>;
/**
 * Component color variants (used across multiple components)
 */
export type Color = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
/**
 * Valid child types that can be passed to components
 * Supports DOM nodes, strings, signals, computed values, and arrays
 */
export type ComponentChild = Pulse.JSX.Child;
/**
 * Direction types (used for layout components)
 */
export type Direction = "horizontal" | "vertical";
/**
 * Generic event callback
 */
export type EventCallback<T = void> = (event?: Event) => T;
/**
 * Type for interactive group size
 */
export type InteractiveGroupSize = keyof typeof interactiveGroupSizes;
export type LegendIndicatorShape = "circle" | "square";
export type LegendIndicatorSize = "xs" | "sm" | "md" | "lg";
/**
 * Position types (used for positioning elements)
 */
export type Position = "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end";
export type RatingMode = "interactive" | "readonly";
export type RatingSize = "sm" | "md" | "lg";
export type RatingSymbol = "star" | "heart" | "emoji" | "thumbs" | "custom";
/**
 * Reactive type - accepts static value, Signal, or Computed
 * Use this for props that should support reactive values
 */
export type Reactive<T> = T | Signal<T> | Computed<T>;
/**
 * Component size variants (used across multiple components)
 */
export type Size = "xs" | "sm" | "md" | "lg" | "xl";
/**
 * Types de base pour le framework Pulse
 */
export type Subscriber<T = any> = (value: T) => void;
export type TimelineItemIcon = "dot" | "avatar" | "icon" | "badge";
export type ToastPosition = "top-left" | "top-center" | "top-right" | "center" | "bottom-left" | "bottom-center" | "bottom-right";
export type ToastType = "info" | "success" | "error" | "warning" | "default";
export type ToastVariant = "default" | "solid" | "soft";
export type Unsubscribe = () => void;
/**
 * Component variant types (used across multiple components)
 */
export type Variant = "solid" | "outline" | "ghost" | "soft" | "link";
/**
 * Pulse computed type
 */
type Computed$1<T> = ReturnType<typeof Pulse.computed<T>>;
/**
 * Reactive type - accepts static value, Signal, or Computed
 * Use this for props that should support reactive values
 */
type Reactive$1<T> = T | Signal$1<T> | Computed$1<T>;
/**
 * Pulse signal type
 */
type Signal$1<T> = ReturnType<typeof Pulse.signal<T>>;

declare namespace dom {
	export { bindConditional, bindEffectToElement, bindEvent, bindList, bindProperty };
}

export {
	ChatBubble$1 as ChatBubble,
	Columns$1 as Columns,
	Computed$1 as Computed,
	GradientTextComponent as GradientText,
	Grid$1 as Grid,
	Image$1 as Image,
	Kbd$1 as Kbd,
	LayoutSplitter$1 as LayoutSplitter,
	Reactive$1 as Reactive,
	Signal$1 as Signal,
	Skeleton$1 as Skeleton,
	Text$1 as Text,
	Timeline$1 as Timeline,
	isComputed$1 as isComputed,
	isReactive$1 as isReactive,
	isSignal$1 as isSignal,
};

export {};



// ============================================
// Global declarations for Monaco Editor
// ============================================

declare global {
  /**
   * All Odyssee components are available globally in the editor
   * No need to import them - just use them directly!
   *
   * @example
   * <Button variant="solid" color="primary">Click me</Button>
   */
  const Button: Pulse.Fn<Button.Props>;
  const Input: Pulse.Fn<Input.Props>;
  const Select: Pulse.Fn<Select.Props>;
  const Checkbox: Pulse.Fn<Checkbox.Props>;
  const Radio: Pulse.Fn<Radio.Props>;
  const RadioGroup: Pulse.Fn<RadioGroup.Props>;
  const Toggle: Pulse.Fn<Toggle.Props>;
  const Textarea: Pulse.Fn<Textarea.Props>;
  const FileInput: Pulse.Fn<FileInput.Props>;
  const Alert: Pulse.Fn<Alert.Props>;
  const Badge: Pulse.Fn<Badge.Props>;
  const Card: Pulse.Fn<Card.Props>;
  const Avatar: Pulse.Fn<Avatar.Props>;
  const AvatarGroup: Pulse.Fn<AvatarGroup.Props> & {
	Stack: Pulse.Fn<AvatarGroup.Props>;
	Grid: Pulse.Fn<AvatarGroup.Props>;
};
  const Blockquote: Pulse.Fn<Blockquote.Props> & {
	Bordered: Pulse.Fn<Blockquote.Props>;
	Minimal: Pulse.Fn<Blockquote.Props>;
};
  const Progress: Pulse.Fn<Progress.Props>;
  const ButtonGroup: Pulse.Fn<ButtonGroup.Props> & {
	Horizontal: Pulse.Fn<ButtonGroup.Props>;
	Vertical: Pulse.Fn<ButtonGroup.Props>;
	Toolbar: Pulse.Fn<ButtonGroup.Props>;
	Responsive: Pulse.Fn<ButtonGroup.Props>;
};
  const Collapse: Pulse.Fn<Collapse.Props> & {
	Content: Pulse.Fn<CollapseContent.Props>;
	Trigger: Pulse.Fn<CollapseTrigger.Props>;
	ReadMore: Pulse.Fn<Collapse.Props>;
};
  const Divider: Pulse.Fn<Divider.Props> & {
	Vertical: Pulse.Fn<Divider.Props>;
	WithText: Pulse.Fn<Omit<Divider.Props, "labelPosition">>;
};
  const Icon: Pulse.Fn<Icon.Props>;
  const Spinner: Pulse.Fn<Spinner.Props>;
  const ButtonSpinner: Pulse.Fn<Omit<Spinner.Props, "size">>;
  const Skeleton: any;
  const Modal: Pulse.Fn<Modal.Props>;
  const Tooltip: Pulse.Fn<Tooltip.Props>;
  const Dropdown: Pulse.Fn<Dropdown.Props> & {
	Item: Pulse.Fn<Dropdown.ItemProps>;
	Divider: Pulse.Fn<Dropdown.DividerProps>;
};
  const Popover: Pulse.Fn<Popover.Props>;
  const Tabs: Pulse.Fn<Tabs.Props> & {
	Panel: Pulse.Fn<Tabs.PanelProps>;
};
  const Accordion: Pulse.Fn<Accordion.Props> & {
	Basic: Pulse.Fn<Accordion.Props>;
	NoArrow: Pulse.Fn<Accordion.Props>;
	Arrow: Pulse.Fn<Accordion.Props>;
	Stretched: Pulse.Fn<Accordion.Props>;
	Bordered: Pulse.Fn<Accordion.Props>;
	ActiveBordered: Pulse.Fn<Accordion.Props>;
	Nested: Pulse.Fn<NestedAccordionProps>;
};
  const Table: <T extends Record<string, any> = Record<string, any>>(props: Table.Props<T>) => Pulse.JSX.Element;
  const Pagination: Pulse.Fn<Pagination.Props>;
  const Breadcrumb: Pulse.Fn<Breadcrumb.Props> & {
	Chevron: Pulse.Fn<Omit<Breadcrumb.Props, "separator">>;
	Slash: Pulse.Fn<Omit<Breadcrumb.Props, "separator">>;
	Bordered: Pulse.Fn<Omit<Breadcrumb.Props, "bordered">>;
};
  const Navbar: Pulse.Fn<Navbar.Props> & {
	Link: Pulse.Fn<Navbar.LinkProps>;
	Dark: Pulse.Fn<Navbar.Props>;
	Primary: Pulse.Fn<Navbar.Props>;
	Sticky: Pulse.Fn<Navbar.Props>;
};
  const Container: Pulse.Fn<Container.Props>;
  const Grid: any;
  const Columns: any;
  const H1: Pulse.Fn<Omit<Text$1.HeadingProps, "level">>;
  const H2: Pulse.Fn<Omit<Text$1.HeadingProps, "level">>;
  const H3: Pulse.Fn<Omit<Text$1.HeadingProps, "level">>;
  const H4: Pulse.Fn<Omit<Text$1.HeadingProps, "level">>;
  const H5: Pulse.Fn<Omit<Text$1.HeadingProps, "level">>;
  const H6: Pulse.Fn<Omit<Text$1.HeadingProps, "level">>;
  const Text: any;
  const Link: Pulse.Fn<Link.Props>;
  const Image: any;
  const Offcanvas: Pulse.Fn<Offcanvas.Props>;
  const ContextMenu: Pulse.Fn<ContextMenu.Props>;
  const TreeView: Pulse.Fn<TreeView.Props> & {
	Node: Pulse.Fn<TreeView.NodeProps>;
};
  const Stepper: Pulse.Fn<Stepper.Props> & {
	Item: Pulse.Fn<Stepper.ItemProps>;
};
  const FormGroup: Pulse.Fn<FormGroup.Props>;
  const InputGroup: Pulse.Fn<InputGroup.Props>;
  const RangeSlider: Pulse.Fn<RangeSlider.Props>;
  const ColorPicker: Pulse.Fn<ColorPicker.Props>;
  const TimePicker: Pulse.Fn<TimePicker.Props>;
  const DatePicker: Pulse.Fn<DatePicker.Props>;
  const InputNumber: Pulse.Fn<InputNumber.Props>;
  const PinInput: Pulse.Fn<PinInput.Props>;
  const ComboBox: Pulse.Fn<ComboBox.Props>;
  const SearchBox: Pulse.Fn<SearchBox.Props>;
  const StrongPassword: Pulse.Fn<StrongPassword.Props>;
  const TogglePassword: Pulse.Fn<TogglePassword.Props>;
  const Carousel: Pulse.Fn<Carousel.Props> & {
	AutoPlay: Pulse.Fn<Carousel.Props>;
	Thumbnail: Pulse.Fn<Carousel.Props>;
};
  const ChatBubble: any;
  const Device: Pulse.Fn<Device.Props>;
  const Rating: Pulse.Fn<Rating.Props>;
  const Timeline: any;
  const Toast: Pulse.Fn<Toast.Props>;
  const List: Pulse.Fn<List.Props> & {
	Check: Pulse.Fn<Omit<List.Props, "type"> & {
		color?: List.Props["checkColor"];
		variant?: List.Props["checkVariant"];
	}>;
	Inline: Pulse.Fn<Omit<List.Props, "type">>;
	Ordered: Pulse.Fn<Omit<List.Props, "type">>;
	Unordered: Pulse.Fn<Omit<List.Props, "type">>;
};
  const ListGroup: Pulse.Fn<ListGroup.Props> & {
	Link: Pulse.Fn<Omit<ListGroup.Props, "as">>;
	Button: Pulse.Fn<Omit<ListGroup.Props, "as">>;
	Flush: Pulse.Fn<Omit<ListGroup.Props, "variant">>;
	Horizontal: Pulse.Fn<Omit<ListGroup.Props, "variant">>;
};
  const Kbd: any;
  const FormLabel: any;
  const FormHelperText: any;
}
