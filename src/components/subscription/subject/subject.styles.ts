import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ palette, vars }) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'strech',
      padding: 20,
      paddingTop: 0,
    },
    title: {
      color: palette.add.main,
      fontSize: vars.fontSize.L,
    },
  }),
  { name: 'Subject' },
);
