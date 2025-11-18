interface Options {
    /**
     * default: 'opacitiy'
     */
    effectType?: "linear" | "spring" | "easeInEaseOut" | "opacitiy";
    /**
     * default: 200
     */
    duration?: number;
}
export declare function useLayoutAnimation(value: any, options?: Options): void;
export {};
