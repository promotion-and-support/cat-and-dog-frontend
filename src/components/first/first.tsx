import { appBase } from '../app/app.base.provider';
import { useStyles } from './first.styles';

export const FirstComponent = () => {
  const { root } = useStyles();
  const s = appBase.firstService.useState(['status', 'value']);

  const handleClick = () => {
    appBase.firstService.firstMethod().catch(() => {});
  };

  return (
    <div className={root}>
      <div>{s.value}</div>
      <button onClick={handleClick}>TEST</button>
    </div>
  );
};
