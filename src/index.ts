import debounce = require('lodash.debounce');

interface DebounceSettings {
  leading?: boolean;
  trailing?: boolean;
  maxWait?: number;
}

export default function(wait: number, options: DebounceSettings = {}) {
  return (target: any, name: string, descriptor: PropertyDescriptor) => {
    return {
      configurable: true,
      enumerable: descriptor.enumerable,
      get(this: any): any {
        Object.defineProperty(this, name, {
          configurable: true,
          enumerable: descriptor.enumerable,
          value: debounce(descriptor.value, wait, options),
        });

        return this[name];
      },
    };
  };
}
