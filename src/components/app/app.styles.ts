import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  root: {
    maxWidth: 1000,
    margin: 100,
    padding: 20,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 20,
    background: '#aaaaaa',
    fontFamily: 'Tahoma',
    fontWeight: 'bold',
    fontSize: 18,
    '& > div': {
      minHeight: 200,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
    }
  }
}, { name: 'App' });
