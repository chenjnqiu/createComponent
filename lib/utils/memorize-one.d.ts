export declare type EqualityFn = (newArgs: unknown[], lastArgs: unknown[]) => boolean;
export default function <F extends Function>(resultFn: F, isEqual?: EqualityFn): F;
