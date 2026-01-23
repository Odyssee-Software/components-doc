import { signal, computed, effect, batch, bindEffectToElement, flush } from './reactivity';
import { jsx, Fragment } from './jsx-runtime';
import { scanDSL, createDSLScope } from './dsl';
/**
 * Point d'entrée principal du framework Pulse
 * Micro-framework DOM-first réactif, "no diff, only sync"
 */
export * from './core';
export * from './reactivity';
export * from './dom';
export * from './utils';
export * from './render';
export * from './scheduler';
export * from './dsl';
export type * from './types';
export { createRef, type Ref } from './utils';
export { createApp, PulseApp } from './core';
export { signal, computed, effect, batch, bindEffectToElement, flush, } from './reactivity';
export { render } from './render';
export { scanDSL, createDSLScope, attachBinding } from './dsl';
export { scheduleSync, scheduleMicrotask, setDefaultScheduleMode, getDefaultScheduleMode, } from './scheduler';
import * as DebugAPI from './debug';
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
    enable: typeof DebugAPI.enableDebug;
    disable: typeof DebugAPI.disableDebug;
    graph: typeof DebugAPI.debugGraph;
    tree: typeof DebugAPI.debugGraphTree;
    stats: typeof DebugAPI.debugStats;
    dirty: typeof DebugAPI.debugDirtyPropagation;
    findNode: typeof DebugAPI.findNode;
    findByType: typeof DebugAPI.findNodesByType;
    clear: typeof DebugAPI.clearRegistry;
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
    render: ((template: import('./render').RenderTemplate, parentIsSVG?: boolean) => HTMLElement | SVGElement) & {
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
        enable: typeof DebugAPI.enableDebug;
        disable: typeof DebugAPI.disableDebug;
        graph: typeof DebugAPI.debugGraph;
        tree: typeof DebugAPI.debugGraphTree;
        stats: typeof DebugAPI.debugStats;
        dirty: typeof DebugAPI.debugDirtyPropagation;
        findNode: typeof DebugAPI.findNode;
        findByType: typeof DebugAPI.findNodesByType;
        clear: typeof DebugAPI.clearRegistry;
        readonly enabled: boolean;
        readonly nodeCount: number;
    };
};
export { Pulse };
export default Pulse;
//# sourceMappingURL=index.d.ts.map