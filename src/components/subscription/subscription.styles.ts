import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  () => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'strech',
      '& button': {
        margin: 20,
        width: 'initial',
      },
    },
  }),
  { name: 'Subscription' },
);
