// Auto-generated type definitions
// Do not edit manually - run npm run generate:types

/**
 * Types de base pour le framework Pulse
 */
export type Subscriber<T = any> = (value: T) => void;
export type Unsubscribe = () => void;
export interface Signal<T = any> {
    (): T;
    (value: T): void;
    readonly value: T;
    subscribe(subscriber: Subscriber<T>): Unsubscribe;
}
export interface Computed<T = any> {
    (): T;
    readonly value: T;
    subscribe(subscriber: Subscriber<T>): Unsubscribe;
}
export interface Effect {
    destroy(): void;
    readonly isActive: boolean;
}
export type ElementBindingValue = string | number | boolean | null | undefined;
export type AttributeValue = ElementBindingValue | Record<string, any>;
export interface ElementBinding {
    element: Element;
    property: string;
    signal: Signal | Computed;
    transform?: (value: any) => any;
}
export interface EventBinding {
    element: Element;
    event: string;
    handler: (event: Event) => void;
}
export interface ConditionalBinding {
    element: Element;
    condition: Signal<boolean> | Computed<boolean>;
    template: DocumentFragment;
    placeholder: Comment;
}
export interface ListBinding<T = any> {
    element: Element;
    items: Signal<T[]> | Computed<T[]>;
    template: (item: T, index: number) => DocumentFragment;
    keyFn?: (item: T, index: number) => string | number;
}

/**
 * Crée un signal réactif
 */
export declare function signal<T>(initialValue: T, debugName?: string): Signal<T>;
/**
 * Crée une valeur calculée réactive
 */
export declare function computed<T>(computeFn: () => T, debugName?: string): {
    (): T;
    subscribe: (subscriber: Subscriber<T>) => Unsubscribe;
} & {
    readonly value: T;
};
/**
 * Crée un effet qui s'exécute à chaque changement de ses dépendances
 */
export declare function effect(effectFn: () => void | (() => void), debugName?: string): {
    destroy: () => void;
    readonly isActive: boolean;
};
/**
 * Execute une fonction en batch pour éviter les mises à jour multiples
 * Utilise le scheduler pour regrouper automatiquement les updates
 */
/**
 * Scheduler pour batching des updates réactifs
 * Regroupe les mises à jour pour éviter les recalculs redondants
 * Inspiré de l'approche DOM-Graph discutée dans gpt.md
 */
type Task = () => void;
/**
 * Planifie une tâche pour exécution immédiate (synchrone)
 */
export declare function scheduleSync(task: Task): void;
/**
 * Planifie une tâche pour exécution dans une microtask
 * Permet de regrouper plusieurs updates en un seul cycle
 */
export declare function scheduleMicrotask(task: Task): void;
/**
 * Active le mode batching
 * Toutes les updates sont accumulées jusqu'à endBatch()
 */
export declare function startBatch(): void;
/**
 * Désactive le mode batching et flush toutes les tâches
 */
export declare function endBatch(): void;
/**
 * Exécute une fonction en mode batch
 * Tous les updates sont regroupés et exécutés à la fin
 *
 * @example
 * ```typescript
 * batch(() => {
 *   signal1(value1)
 *   signal2(value2)
 *   signal3(value3)
 *   // Tous les computed/effects sont mis à jour en une seule fois
 * })
 * ```
 */
export declare function batch<T>(fn: () => T): T;
/**
 * Force l'exécution immédiate de toutes les tâches en attente
 */
export declare function flush(): void;
/**
 * Nettoie toutes les tâches en attente (utile pour les tests)
 */
export declare function clearScheduler(): void;
/**
 * Statistiques du scheduler
 */
export declare function getSchedulerStats(): {
    pendingTasks: number;
    pendingMicrotasks: number;
    isFlushingSync: boolean;
    isFlushingMicro: boolean;
    isBatching: boolean;
};
/**
 * Mode de scheduling par défaut pour les signals
 */
export type ScheduleMode = 'sync' | 'micro' | 'manual';
export declare function setDefaultScheduleMode(mode: ScheduleMode): void;
export declare function getDefaultScheduleMode(): ScheduleMode;
/**
 * Schedule une tâche selon le mode par défaut
 */
export declare function schedule(task: Task, mode?: ScheduleMode): void;
export {};
/**
 * Lie un effet à un élément DOM avec gestion automatique de la mémoire
 */
export declare function bindEffectToElement(element: Element, effectFn: () => void | (() => void)): () => void;
/**
 * Runtime JSX pour Pulse Framework
 * Support pour la nouvelle transformation JSX de TypeScript
 */
/**
 * Fonction JSX principale
 * @param type - Le nom de la balise HTML ou un composant fonctionnel
 * @param props - Les propriétés (peut contenir children)
 * @param children - Enfants passés en argument (JSX transform classique)
 */
export declare function jsx(type: string | Function, props: any, ...children: any[]): HTMLElement | SVGElement | DocumentFragment;
export declare const jsxs: typeof jsx;
export declare const jsxDEV: typeof jsx;
export declare const Fragment: (props?: {
    children?: any;
} | undefined) => DocumentFragment;

/**
 * Compile une expression simple en fonction
 * Support: chemins de propriétés (user.name), expressions simples
 */
export declare function compileExpression(expr: string, context?: Record<string, any>): () => any;
/**
 * Compile une expression et retourne un computed si elle contient des signaux
 */
export declare function makeComputed(expr: string, context?: Record<string, any>): Signal<any> | Computed<any> | (() => any);
/**
 * Attache un binding DSL à un élément
 */
export declare function attachBinding(node: Element, dslType: string, expr: string, context?: Record<string, any>): () => void;
/**
 * Scanne un DOM tree et attache tous les bindings DSL
 *
 * @param root - L'élément racine à scanner
 * @param context - Le contexte contenant les signaux et données
 *
 * @example
 * ```typescript
 * const count = signal(0)
 * const context = { count }
 *
 * // HTML: <div :text="count"></div>
 * scanDSL(document.body, context)
 * ```
 */
export declare function scanDSL(root?: Element, context?: Record<string, any>): () => void;
/**
 * Helper pour créer un scope DSL avec auto-cleanup
 */
export declare function createDSLScope(root: Element, context: Record<string, any>): {
    cleanup: () => void;
    update: (newContext: Record<string, any>) => () => void;
};
/**
 * Point d'entrée principal du framework Pulse
 * Micro-framework DOM-first réactif, "no diff, only sync"
 */

/**
 * Gestionnaire de scope d'application Pulse
 * Permet d'isoler les signaux et bindings pour éviter les collisions
 * Idéal pour les SPAs avec routing où chaque route/fragment a son propre scope
 *
 * @example
 * ```typescript
 * // Route 1
 * const app1 = createApp('#view1')
 * const { count } = app1.setup(() => ({
 *   count: signal(0)
 * }))
 * app1.mount() // Scan DSL automatique
 *
 * // Route 2 - pas de collision avec Route 1 !
 * const app2 = createApp('#view2')
 * const { count } = app2.setup(() => ({
 *   count: signal(100)
 * }))
 * app2.mount()
 *
 * // Cleanup lors du changement de route
 * app1.unmount()
 * ```
 */
export declare class PulseApp {
    private rootElement?;
    private cleanupFunctions;
    private scope;
    private _isMounted;
    constructor(rootElement?: Element | undefined);
    /**
     * Configure le scope de l'app avec une fonction setup
     * Similaire à Vue Composition API
     */
    setup<T extends Record<string, any>>(setupFn: () => T): T;
    /**
     * Monte l'application et scan le DSL automatiquement
     */
    mount(element?: Element): this;
    /**
     * Démonte l'application et nettoie tous les bindings
     * Essentiel pour éviter les memory leaks lors des changements de route
     */
    unmount(): void;
    /**
     * Accède au scope de l'app (signaux, computed, handlers)
     */
    getScope(): Record<string, any>;
    /**
     * Vérifie si l'app est montée
     */
    get isMounted(): boolean;
    /**
     * Crée un signal (shortcut vers l'API globale)
     */
    signal<T>(initialValue: T): Signal<T>;
    /**
     * Crée une valeur calculée (shortcut vers l'API globale)
     */
    computed<T>(computeFn: () => T): Computed<T>;
    /**
     * Crée un effet (shortcut vers l'API globale)
     */
    effect(effectFn: () => void | (() => void)): {
        destroy: () => void;
        readonly isActive: boolean;
    };
    /**
     * Lie une propriété d'élément
     */
    bind(selector: string | Element, property: string, signalOrComputed: Signal | Computed, transform?: (value: any) => any): this;
    /**
     * Lie un événement
     */
    on(selector: string | Element, event: string, handler: (event: Event) => void): this;
    /**
     * Rendu conditionnel
     */
    if(selector: string | Element, condition: Signal<boolean> | Computed<boolean>, template: string | DocumentFragment): this;
    /**
     * Rendu de liste
     */
    list<T>(selector: string | Element, items: Signal<T[]> | Computed<T[]>, template: string | ((item: T, index: number) => DocumentFragment), keyFn?: (item: T, index: number) => string | number): this;
    /**
     * Sélectionne un élément
     */
    select(selector: string): Element | null;
    /**
     * Sélectionne plusieurs éléments
     */
    selectAll(selector: string): Element[];
    /**
     * Nettoie tous les bindings
     */
    destroy(): void;
    /**
     * Crée un fragment de template à partir d'une string HTML
     */
    private createTemplateFromString;
}
/**
 * Crée une nouvelle application Pulse avec scope isolé
 *
 * @example
 * ```typescript
 * // Approche simple avec setup()
 * const app = createApp('#root')
 * app.setup(() => ({
 *   count: signal(0),
 *   increment: () => count(count() + 1)
 * }))
 * app.mount()
 *
 * // Ou direct
 * const app = createApp()
 * const count = signal(0)
 * app.mount(document.getElementById('root')!)
 * scanDSL(document.getElementById('root')!, { count })
 * ```
 */
export declare function createApp(rootSelector?: string | Element): PulseApp;

/**
 * Lie une propriété d'élément à un signal
 */
export declare function bindProperty(element: Element, property: string, signalOrComputed: Signal | Computed, transform?: (value: any) => any): () => void;
/**
 * Lie un événement à un handler
 */
export declare function bindEvent(element: Element, event: string, handler: (event: Event) => void): () => void;
/**
 * Rendu conditionnel
 */
export declare function bindConditional(element: Element, condition: Signal<boolean> | Computed<boolean>, template: DocumentFragment): () => void;
/**
 * Rendu de liste
 */
export declare function bindList<T>(container: Element, items: Signal<T[]> | Computed<T[]>, template: (item: T, index: number) => DocumentFragment, keyFn?: (item: T, index: number) => string | number): () => void;
/**
 * Utilitaires pour le framework Pulse
 */
/**
 * Vérifie si une valeur est un objet simple
 */
export declare function isPlainObject(value: unknown): value is Record<string, unknown>;
/**
 * Clone profond d'un objet
 */
export declare function deepClone<T>(obj: T): T;
/**
 * Debounce une fonction
 */
export declare function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void;
/**
 * Throttle une fonction
 */
export declare function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void;
/**
 * Génère un ID unique
 */
export declare function generateId(): string;
/**
 * Logger de développement
 */
export declare const logger: {
    log: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    error: (...args: any[]) => void;
};
/**
 * Sélecteur de query sécurisé
 */
export declare function $(selector: string, context?: Document | Element): Element | null;
/**
 * Sélecteur multiple sécurisé
 */
export declare function $$(selector: string, context?: Document | Element): Element[];
/**
 * Interface pour les refs d'éléments DOM
 */
export interface Ref<T extends HTMLElement = HTMLElement> {
    current: T | null;
    callback: (el: T | null) => void;
}
/**
 * Crée une référence à un élément DOM
 * Compatible avec le pattern ref callback de JSX
 *
 * @example
 * ```tsx
 * const MyComponent: Pulse.Fn = () => {
 *   const inputRef = createRef<HTMLInputElement>();
 *
 *   const focusInput = () => {
 *     inputRef.current?.focus();
 *   };
 *
 *   return (
 *     <div>
 *       <input ref={inputRef.callback} type="text" />
 *       <button onClick={focusInput}>Focus Input</button>
 *     </div>
 *   );
 * };
 * ```
 */
export declare function createRef<T extends HTMLElement = HTMLElement>(): Ref<T>;

export interface RenderTemplate {
    tag: string;
    attributes?: Record<string, string | Signal<string> | Computed<string>>;
    properties?: Record<string, any | Signal<any> | Computed<any>>;
    children?: (RenderTemplate | string | Signal<string> | Computed<string> | HTMLElement | SVGElement)[];
    events?: Record<string, (event: Event) => void>;
    ref?: (el: HTMLElement | SVGElement | null) => void;
}
/**
 * Fonction de rendu déclaratif
 */
declare function renderFn(template: RenderTemplate, parentIsSVG?: boolean): HTMLElement | SVGElement;
/**
 * Fonction utilitaire pour créer des templates plus facilement
 */
/**
 * Fonction pour créer des fragments (conteneurs virtuels)
 */
export declare function fragment(...children: (RenderTemplate | string | Signal<string> | Computed<string> | HTMLElement)[]): DocumentFragment;
/**
 * Wrapper pour Fragment compatible avec JSX runtime
 * Accepte props.children et appelle fragment() avec spread
 */
declare function FragmentComponent(props?: {
    children?: any;
}): DocumentFragment;
export declare const render: typeof renderFn & {
    fragment: typeof FragmentComponent;
};
export { fragment as fragmentSpread };
/**
 * Outils de debug pour le graphe réactif Pulse
 * Inspiré de l'approche DOM-Graph avec visualisation complète des dépendances
 */
export declare const GraphRegistry: {
    nodes: Set<ReactiveNode>;
    id: number;
    enabled: boolean;
};
export interface ReactiveNode {
    __id?: number;
    __type?: 'signal' | 'computed' | 'effect';
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
 * Enregistre un node dans le registre (à appeler lors de la création)
 */
export declare function registerNode(node: ReactiveNode, type: 'signal' | 'computed' | 'effect', name?: string): ReactiveNode;
/**
 * Désactive le tracking (cleanup)
 */
export declare function unregisterNode(node: ReactiveNode): void;
/**
 * Active le système de debug
 */
export declare function enableDebug(): void;
/**
 * Désactive le système de debug
 */
export declare function disableDebug(): void;
/**
 * Debug complet du graphe réactif
 * Affiche tous les nodes avec leurs dépendances et subscribers
 */
export declare function debugGraph(): void;
/**
 * Affiche l'arbre du graphe réactif en profondeur
 * Commence par les effects (feuilles terminales) et remonte
 */
export declare function debugGraphTree(): void;
/**
 * Trace la propagation du dirty-state à partir d'un signal
 * Utile pour comprendre comment un changement se propage
 */
export declare function debugDirtyPropagation(rootNode: ReactiveNode): void;
/**
 * Statistiques sur le graphe
 */
export declare function debugStats(): void;
/**
 * Trouve un node par son ID
 */
export declare function findNode(id: number): ReactiveNode | undefined;
/**
 * Trouve tous les nodes par type
 */
export declare function findNodesByType(type: 'signal' | 'computed' | 'effect'): ReactiveNode[];
/**
 * Nettoie le registre (utile pour les tests)
 */
export declare function clearRegistry(): void;
/**
 * APIs de debug pour visualiser et analyser le graphe réactif
 * Disponibles uniquement en mode développement
 *
 * @example
 * ```typescript
 * import { __DEBUG__ } from 'pulse-framework'
 *
 * // Activer le debug
 * __DEBUG__.enable()
 *
 * // Visualiser le graphe
 * __DEBUG__.graph()
 *
 * // Voir l'arbre des dépendances
 * __DEBUG__.tree()
 *
 * // Statistiques
 * __DEBUG__.stats()
 * ```
 */
export declare const __DEBUG__: {
    enable: () => void;
    disable: () => void;
    graph: () => void;
    tree: () => void;
    stats: () => void;
    dirty: () => void;
    findNode: () => void;
    findByType: () => void;
    clear: () => void;
    readonly enabled: boolean;
    readonly nodeCount: number;
};
declare namespace Pulse {
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
export { Fragment };
declare const Pulse: {
    signal: typeof signal;
    computed: typeof computed;
    effect: typeof effect;
    batch: typeof batch;
    bindEffectToElement: typeof bindEffectToElement;
    flush: typeof flush;
    render: ((template: any, parentIsSVG?: boolean) => HTMLElement | SVGElement) & {
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
        enable: () => void;
        disable: () => void;
        graph: () => void;
        tree: () => void;
        stats: () => void;
        dirty: () => void;
        findNode: () => void;
        findByType: () => void;
        clear: () => void;
        readonly enabled: boolean;
        readonly nodeCount: number;
    };
};
export { Pulse };
export default Pulse;
