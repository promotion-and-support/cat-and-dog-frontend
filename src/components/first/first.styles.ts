import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  {
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      borderRadius: 5,
      color: 'white',
      fontWeight: 'bold',
      fontSize: '1.2em',
      '& button': {
        width: '100%',
        margin: 10,
        padding: 5,
      },
    },
    info: {
      margin: 20,
    },
  },
  { name: 'First' },
);
