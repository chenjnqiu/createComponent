
export type EqualityFn = (newArgs: unknown[], lastArgs: unknown[]) => boolean;

const shallowEqual = (newValue: unknown, oldValue: unknown): boolean => newValue === oldValue;

const simpleIsEqual:EqualityFn = (
    newArgs:  unknown[],
    lastArgs: unknown[]
): boolean => (
    newArgs.length === lastArgs.length &&
    newArgs.every((newArg: unknown, index: number): boolean =>
    shallowEqual(newArg, lastArgs[index])
  )
) 


export default function <F extends Function>(
    resultFn: F,
    isEqual: EqualityFn = simpleIsEqual
): F {
    let lastThis: unknown;
    let lastArgs: unknown[] = [];
    let lastResult: unknown;
    let calledOnce = false;

    const result = function (...newArgs: unknown[]) {
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
          }
 
          lastResult = resultFn.apply(this, newArgs);
          calledOnce = true;
          lastThis = this;
          lastArgs = newArgs;
          return lastResult;
    }
    return result as unknown as F;
}