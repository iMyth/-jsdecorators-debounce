interface DebounceSettings {
    leading?: boolean;
    trailing?: boolean;
    maxWait?: number;
}
export default function (wait: number, options?: DebounceSettings): (target: any, name: string, descriptor: PropertyDescriptor) => {
    configurable: boolean;
    enumerable: boolean | undefined;
    get(this: any): any;
};
export {};
