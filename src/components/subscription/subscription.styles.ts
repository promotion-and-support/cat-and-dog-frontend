import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  () => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'strech',
      padding: 50,
      '& button': {
        marginTop: 50,
      },
    },
  }),
  { name: 'Subscription' },
);
