import { FC, PropsWithChildren } from 'react';
import Jss, { ThemeProvider } from 'react-jss';
import { mixins } from './mixins';

import { palette } from './palette';
import { vars } from './vars';
import { useCssBaseline } from './hooks/useCssBaseline';

const BREAKPOINT_MEDIA_QUERY = {
  maxWidth: '(max-width: 100px)',
  minHeight: '(max-height: 100px)',
};

export const getBreakpointQueries = () => {
  const breakpointQueries = { ...BREAKPOINT_MEDIA_QUERY };
  for (const [key, value] of Object.entries(breakpointQueries)) {
    breakpointQueries[key as keyof typeof breakpointQueries] = `@media ${value}`;
  }
  return breakpointQueries;
};

const BREAKPOINT_QUERIES = getBreakpointQueries();

function createCustomTheme(): Jss.Theme {
  return {
    palette,
    mixins,
    breakpoints: BREAKPOINT_QUERIES,
    vars,
  };
}

const defaultTheme = createCustomTheme();

const CssBaseline: FC = () => {
  useCssBaseline();
  return null;
};

const Theme: FC<PropsWithChildren<{ theme?: Jss.Theme }>> = ({ theme, children }) => (
  <ThemeProvider theme={theme || defaultTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export { defaultTheme, createCustomTheme, Theme };
