export type CommonErrorKey = 'UNKNOWN' | 'ABORT';
export type ErrorKey<K extends string> = K | CommonErrorKey;
