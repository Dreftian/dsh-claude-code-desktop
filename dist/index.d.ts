export interface CordisContext {
    effect?: (fn: () => () => void) => void;
    on?: (event: string, listener: (...args: any[]) => void) => void;
    [key: string]: any;
}
export declare const name = "dsh-claude-code-desktop";
export declare function apply(ctx: CordisContext): void;
declare const _default: {
    name: string;
    apply: typeof apply;
};
export default _default;
