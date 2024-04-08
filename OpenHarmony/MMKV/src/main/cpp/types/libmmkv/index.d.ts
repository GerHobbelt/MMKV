export const initialize: (rootDir: string, cacheDir: string, logLevel?: number) => string;
export const version: () => string;
export const pageSize: () => number;
export const getDefaultMMKV: (mode: number, cryptKey?: string) => bigint;
export const mmkvWithID: (mmapID: string, mode: number, cryptKey?: string, rootPath?: string, expectedCapacity?: bigint) => bigint;
export const mmapID: (handle: bigint) => string;
export const encodeBool: (handle: bigint, key: string, value: boolean, expiration?: number) => boolean;
export const decodeBool: (handle: bigint, key: string, defaultValue: boolean) => boolean;
export const encodeInt32: (handle: bigint, key: string, value: number, expiration?: number) => boolean;
export const decodeInt32: (handle: bigint, key: string, defaultValue: number) => number;
export const encodeUInt32: (handle: bigint, key: string, value: number, expiration?: number) => boolean;
export const decodeUInt32: (handle: bigint, key: string, defaultValue: number) => number;
export const encodeInt64: (handle: bigint, key: string, value: bigint, expiration?: number) => boolean;
export const decodeInt64: (handle: bigint, key: string, defaultValue: bigint) => bigint;
export const encodeUInt64: (handle: bigint, key: string, value: bigint, expiration?: number) => boolean;
export const decodeUInt64: (handle: bigint, key: string, defaultValue: bigint) => bigint;
export const encodeDouble: (handle: bigint, key: string, value: number, expiration?: number) => boolean;
export const decodeDouble: (handle: bigint, key: string, defaultValue: number) => number;
export const encodeString: (handle: bigint, key: string, value: string, expiration?: number) => boolean;
export const decodeString: (handle: bigint, key: string, defaultValue?: string) => string;
export const encodeStringSet: (handle: bigint, key: string, value: string[], expiration?: number) => boolean;
export const decodeStringSet: (handle: bigint, key: string, defaultValue?: string[]) => string[];
export const encodeNumberSet: (handle: bigint, key: string, value: number[], expiration?: number) => boolean;
export const decodeNumberSet: (handle: bigint, key: string, defaultValue?: number[]) => number[];
export const encodeBoolSet: (handle: bigint, key: string, value: boolean[], expiration?: number) => boolean;
export const decodeBoolSet: (handle: bigint, key: string, defaultValue?: boolean[]) => boolean[];
export const encodeBytes: (handle: bigint, key: string, value: ArrayBuffer, expiration?: number) => boolean;
export const decodeBytes: (handle: bigint, key: string, defaultValue?: ArrayBuffer) => ArrayBuffer;
export const containsKey: (handle: bigint, key: string) => string;
export const count: (handle: bigint, filterExpire: boolean) => bigint;
export const allKeys: (handle: bigint, filterExpire: boolean) => string[];
export const removeValueForKey: (handle: bigint, key: string) => void;
export const removeValuesForKeys: (handle: bigint, keys: string[]) => void;
export const clearAll: (handle: bigint, keepSpace: boolean) => void;
export const totalSize: (handle: bigint) => bigint;
export const actualSize: (handle: bigint) => bigint;
export const sync: (handle: bigint, sync: boolean) => void;
export const clearMemoryCache: (handle: bigint) => bigint;
export const lock: (handle: bigint) => bigint;
export const unlock: (handle: bigint) => bigint;
export const tryLock: (handle: bigint) => boolean;
export const getValueSize: (handle: bigint, key: string, actualSize?: boolean) => number;
export const trim: (handle: bigint) => void;
export const close: (handle: bigint) => void;
export const removeStorage: (mmapID: string, rootPath?: string) => boolean;
export const isFileValid: (mmapID: string, rootPath?: string) => boolean;
export const cryptKey: (handle: bigint) => string;
export const reKey: (handle: bigint, newKey: string) => boolean;
export const checkReSetCryptKey: (handle: bigint, newKey: string) => void;
