import { FirstComponent } from '@components/first/first';
import { useStyles } from './main.styles';

export const Main = () => {
  const { root } = useStyles();

  return (
    <div className={root}>
      <FirstComponent />
    </div>
  );
};
