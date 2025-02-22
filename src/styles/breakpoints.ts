export const BREAKPOINTS = ['maxWidth', 'minHeight'] as const;

export type BreakpointKey = (typeof BREAKPOINTS)[number];
export type TBreakpoints = Record<BreakpointKey, string>;
