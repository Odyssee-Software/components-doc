// Auto-generated type definitions
// Do not edit manually - run npm run generate:types

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
declare function batch<T>(fn: () => T): T;
declare function bindConditional(element: Element, condition: Signal<boolean> | Computed<boolean>, template: DocumentFragment): () => void;
declare function bindEffectToElement(element: Element, effectFn: () => void | (() => void)): () => void;
declare function bindEvent(element: Element, event: string, handler: (event: Event) => void): () => void;
declare function bindList<T>(container: Element, items: Signal<T[]> | Computed<T[]>, template: (item: T, index: number) => DocumentFragment, keyFn?: (item: T, index: number) => string | number): () => void;
declare function bindProperty(element: Element, property: string, signalOrComputed: Signal | Computed, transform?: (value: any) => any): () => void;
declare function clearRegistry(): void;
declare function computed<T>(computeFn: () => T, debugName?: string): {
	(): T;
	subscribe: (subscriber: Subscriber<T>) => Unsubscribe;
} & {
	readonly value: T;
};
declare function createDSLScope(root: Element, context: Record<string, any>): {
	cleanup: () => void;
	update: (newContext: Record<string, any>) => () => void;
};
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
declare function jsx(type: string | Function, props: any, ...children: any[]): HTMLElement | SVGElement | DocumentFragment;
declare function scanDSL(root?: Element, context?: Record<string, any>): () => void;
declare function signal<T>(initialValue: T, debugName?: string): Signal<T>;
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
declare namespace CollapseContent {
	interface Props extends BaseComponentProps {
		isOpen?: boolean | Signal$1<boolean>;
		children?: HTMLElement | HTMLElement[] | string;
		duration?: number;
		triggerId?: string;
	}
}
declare namespace CollapseTrigger {
	interface Props extends BaseComponentProps {
		isOpen?: boolean | Signal$1<boolean>;
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
declare namespace GradientText {
	interface Props extends Omit<Text$1.Props, "color"> {
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
declare namespace Image$1 {
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
		size: number | Signal$1<number>;
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
/**
 * Text namespace - contains all text and typography related types
 */
declare namespace Text$1 {
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
	interface HeadingProps extends Omit<Text$1.Props, "size" | "as"> {
		/** Heading level */
		level?: 1 | 2 | 3 | 4 | 5 | 6;
	}
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
	batch: typeof batch;
	bindEffectToElement: typeof bindEffectToElement;
	flush: typeof flush;
	render: ((template: RenderTemplate, parentIsSVG?: boolean) => HTMLElement | SVGElement) & {
		fragment: (props?: {
			children?: any;
		}) => DocumentFragment;
	};
	Fragment: (props?: {
		children?: any;
	} | undefined) => DocumentFragment;
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
 * Utility functions for Odyssee Components
 * Helper functions used across components
 */
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
 * Get value from signal or static value
 */
export declare function getValue<T>(value: T | (() => T)): T;
/**
 * Check if element has class
 */
export declare function hasClass(element: HTMLElement, className: string): boolean;
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
 * Check if value is a Pulse signal
 * Pulse signals are functions with specific characteristics
 */
export declare function isSignal(value: any): boolean;
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
export declare namespace Alert {
	interface Props extends BaseComponentProps {
		variant?: "solid" | "soft" | "bordered";
		color?: Color;
		title?: string | HTMLElement;
		children?: string | HTMLElement | HTMLElement[];
		icon?: string;
		dismissible?: boolean;
		isVisible?: boolean | Signal$1<boolean>;
		actions?: HTMLElement | HTMLElement[];
		onDismiss?: EventCallback;
	}
}
export declare namespace Avatar {
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
export declare namespace Badge {
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
export declare namespace Blockquote {
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
export declare namespace Breadcrumb {
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
export declare namespace Button {
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
export declare namespace ButtonGroup {
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
export declare namespace Card {
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
export declare namespace Carousel {
	interface Slide {
		id?: string;
		content: HTMLElement | string;
		thumbnail?: HTMLElement | string;
	}
	interface Props extends BaseComponentProps {
		slides: Slide[];
		currentSlide?: number | Signal$1<number>;
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
export declare namespace Checkbox {
	interface Props extends BaseComponentProps {
		checked?: boolean | Signal$1<boolean>;
		indeterminate?: boolean | Signal$1<boolean>;
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
export declare namespace Collapse {
	interface Props extends BaseComponentProps {
		isOpen?: boolean | Signal$1<boolean>;
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
export declare namespace ColorPicker {
	interface Props extends BaseComponentProps {
		value?: string | Signal$1<string>;
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
export declare namespace ComboBox {
	interface Option {
		[key: string]: any;
	}
	interface Props extends BaseComponentProps {
		options?: ComboBox.Option[];
		value?: string | Signal$1<string>;
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
export declare namespace Container {
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
export declare namespace ContextMenu {
	interface Props extends BaseComponentProps {
		items: Dropdown.Item[];
		children: HTMLElement | HTMLElement[];
		menuClassName?: string;
		onOpen?: () => void;
		onClose?: () => void;
	}
}
export declare namespace CopyMarkup {
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
export declare namespace CustomScrollbar {
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
/**
 * DatePicker component props
 */
export declare namespace DatePicker {
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
export declare namespace Device {
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
export declare namespace Divider {
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
export declare namespace Dropdown {
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
		isOpen?: boolean | Signal$1<boolean>;
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
export declare namespace FileInput {
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
export declare namespace FileUploadProgress {
	interface Item {
		id: string;
		name: string;
		size: string | number;
		progress: number | Signal$1<number>;
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
export declare namespace FormGroup {
	interface Props extends BaseComponentProps {
		label?: string;
		description?: string;
		children?: HTMLElement | HTMLElement[];
		direction?: "vertical" | "horizontal";
		gap?: Size;
		bordered?: boolean;
	}
}
export declare namespace Icon {
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
export declare namespace Input {
	interface Props extends BaseComponentProps {
		type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search";
		value?: string | Signal$1<string>;
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
export declare namespace InputGroup {
	interface Addon {
		type: "text" | "icon" | "button" | "checkbox" | "radio" | "select";
		content?: string | Pulse.JSX.Element;
		buttonProps?: Button.Props;
		onClick?: () => void;
		checked?: boolean | Signal$1<boolean>;
		onChange?: (checked: boolean) => void;
		selectOptions?: Select.Option[];
		selectValue?: string | Signal$1<string>;
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
		loading?: boolean | Signal$1<boolean>;
		loadingPosition?: "leading" | "trailing";
		leadingSelect?: {
			options: Select.Option[];
			value?: string | Signal$1<string>;
			onChange?: (value: string) => void;
			label?: string;
		};
		trailingSelect?: {
			options: Select.Option[];
			value?: string | Signal$1<string>;
			onChange?: (value: string) => void;
			label?: string;
		};
		containerClassName?: string;
		containerStyle?: Record<string, any>;
	}
}
export declare namespace InputNumber {
	interface Props extends BaseComponentProps {
		value?: number | Signal$1<number>;
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
export declare namespace LegendIndicator {
	interface Props extends BaseComponentProps {
		label: string | Pulse.JSX.Element;
		color?: string;
		size?: LegendIndicatorSize;
		shape?: LegendIndicatorShape;
		dotClassName?: string;
		labelClassName?: string;
	}
}
export declare namespace Link {
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
export declare namespace List {
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
export declare namespace ListGroup {
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
		activeIndex?: number | Signal$1<number>;
		onItemClick?: (item: ListGroup.Item | string, index: number) => void;
	}
}
export declare namespace Modal {
	interface Props extends BaseComponentProps {
		isOpen?: boolean | Signal$1<boolean>;
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
export declare namespace Navbar {
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
export declare namespace Offcanvas {
	type Placement = "left" | "right" | "top" | "bottom";
	interface Props extends BaseComponentProps {
		isOpen?: boolean | Signal$1<boolean>;
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
export declare namespace Pagination {
	type Variant = "default" | "bordered" | "bordered-group";
	type Shape = "default" | "pilled";
	type Alignment = "start" | "center" | "end";
	type Size = "sm" | "md" | "lg";
	interface Props extends BaseComponentProps {
		currentPage: number | Signal$1<number>;
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
export declare namespace PinInput {
	interface Props extends BaseComponentProps {
		length?: number;
		value?: string | Signal$1<string>;
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
export declare namespace Popover {
	interface Props extends Omit<Tooltip.Props, "content"> {
		header?: string | Pulse.JSX.Element;
		body?: string | Pulse.JSX.Element;
		footer?: Pulse.JSX.Element;
		content?: string | Pulse.JSX.Element;
		maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
		trigger?: "hover";
	}
}
export declare namespace Progress {
	interface Props extends BaseComponentProps {
		value: number | Signal$1<number>;
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
export declare namespace Pulse {
	type Fn<PROPS extends Record<string, any> = Record<string, any>> = (props: PROPS) => Pulse.JSX.Element | null;
	namespace JSX {
		type Element = {
			tag: string;
			attributes?: Record<string, any>;
			properties?: Record<string, any>;
			events?: Record<string, any>;
			children?: any[];
		} | globalThis.Node | globalThis.DocumentFragment;
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
	}
}
export declare namespace Radio {
	interface Props extends BaseComponentProps {
		name?: string;
		value?: string | number;
		checked?: boolean | Signal$1<boolean>;
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
export declare namespace RadioGroup {
	interface Option {
		value: string | number;
		label: string;
		description?: string;
		disabled?: boolean;
	}
	interface Props extends BaseComponentProps {
		name?: string;
		value?: string | number | Signal$1<string | number>;
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
export declare namespace RangeSlider {
	interface Props extends BaseComponentProps {
		value?: number | Signal$1<number>;
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
export declare namespace Rating {
	interface Props extends BaseComponentProps {
		value?: number | Signal$1<number>;
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
export declare namespace SearchBox {
	interface Option {
		[key: string]: any;
	}
	interface Props extends BaseComponentProps {
		options?: SearchBox.Option[];
		value?: string | Signal$1<string>;
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
		loading?: boolean | Signal$1<boolean>;
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
export declare namespace Select {
	interface Option {
		value: string | number;
		label: string;
		disabled?: boolean;
		group?: string;
	}
	interface Props extends BaseComponentProps {
		value?: string | number | Signal$1<string | number>;
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
export declare namespace Spinner {
	interface Props extends BaseComponentProps {
		size?: "xs" | "sm" | "md" | "lg" | "xl";
		color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "gray" | "white" | "indigo" | "purple" | "pink" | "orange";
		thickness?: 2 | 3 | 4;
		label?: string;
		showLabel?: boolean;
		centered?: boolean;
	}
}
export declare namespace StepIndicator {
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
export declare namespace Stepper {
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
		currentStep: number | Signal$1<number>;
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
export declare namespace StrongPassword {
	interface Props extends BaseComponentProps {
		value?: string | Signal$1<string>;
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
export declare namespace Table {
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
		selectedRows?: Signal$1<(string | number)[]> | (string | number)[];
		onSelectionChange?: (selected: (string | number)[]) => void;
		sortable?: boolean;
		sortBy?: Signal$1<string | null> | string | null;
		sortDirection?: Signal$1<Table.SortDirection> | Table.SortDirection;
		onSort?: (column: string, direction: Table.SortDirection) => void;
		searchable?: boolean;
		searchValue?: Signal$1<string> | string;
		searchPlaceholder?: string;
		onSearch?: (value: string) => void;
		paginated?: boolean;
		currentPage?: Signal$1<number> | number;
		pageSize?: number;
		totalPages?: number;
		onPageChange?: (page: number) => void;
		caption?: string;
		showFooter?: boolean;
		footerContent?: Pulse.JSX.Element;
		headless?: boolean;
		loading?: boolean | Signal$1<boolean>;
		loadingRows?: number;
		emptyMessage?: string | Pulse.JSX.Element;
		onRowClick?: (row: T, index: number) => void;
		rowClassName?: (row: T, index: number) => string;
		rowKey?: keyof T;
	}
}
export declare namespace Tabs {
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
		activeTab?: string | Signal$1<string>;
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
export declare namespace Textarea {
	interface Props extends BaseComponentProps {
		value?: string | Signal$1<string>;
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
export declare namespace TimePicker {
	interface Props extends BaseComponentProps {
		value?: string | Signal$1<string>;
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
export declare namespace Toast {
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
		visible?: boolean | Signal$1<boolean>;
		onClose?: () => void;
		animated?: boolean;
	}
}
export declare namespace ToastContainer {
	interface Props extends BaseComponentProps {
		position?: ToastPosition;
		maxToasts?: number;
		offset?: number;
		gap?: number;
		children?: Pulse.JSX.Element | Pulse.JSX.Element[];
	}
}
export declare namespace Toggle {
	interface Props extends BaseComponentProps {
		checked?: boolean | Signal$1<boolean>;
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
export declare namespace ToggleCount {
	interface Props extends BaseComponentProps {
		type?: "radio" | "switch";
		variant?: "default" | "pills";
		options: [
			string,
			string
		];
		value?: 0 | 1 | Signal$1<0 | 1>;
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
export declare namespace TogglePassword {
	interface Props extends BaseComponentProps {
		value?: string | Signal$1<string>;
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
export declare namespace Tooltip {
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
export declare namespace TreeView {
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
		selected?: string[] | Signal$1<string[]>;
		onSelect?: (selected: string[]) => void;
		expanded?: string[] | Signal$1<string[]>;
		onExpand?: (expanded: string[]) => void;
		alwaysOpen?: boolean;
		showCheckboxes?: boolean;
		checked?: string[] | Signal$1<string[]>;
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
/**
 * Base component props extended by all components
 */
export interface BaseComponentProps {
	id?: string;
	className?: string;
	style?: Partial<CSSStyleDeclaration> | string;
	[key: string]: any;
}
export interface Computed<T = any> {
	(): T;
	readonly value: T;
	subscribe(subscriber: Subscriber<T>): Unsubscribe;
}
/**
 * Nested Accordion Support
 */
export interface NestedAccordionProps {
	items: Accordion.Item[];
	variant?: "default" | "bordered" | "active-bordered" | "no-arrow" | "arrow" | "stretched";
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
 * Pulse signal type
 */
type Signal$1<T> = ReturnType<typeof Pulse.signal<T>>;

declare namespace dom {
	export { bindConditional, bindEvent, bindList, bindProperty };
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
	Signal$1 as Signal,
	Skeleton$1 as Skeleton,
	Text$1 as Text,
	Timeline$1 as Timeline,
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
