import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#15aa15',
    padding: 20,
    borderRadius: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.5em',
    '& button': {
      width: '100%',
      margin: 10,
      padding:5,
    },
  },
  info: {
    height: 100,
    margin: 20,
    textWrap: 'wrap',
  },
}, { name: 'First' });
