import { useEffect } from 'react';
import { useAppBaseContext } from '@components/app/app.base.context';
import { FirstComponent } from '@components/first/first';
import { useStyles } from './app.old.styles';

export const AppOld = () => {
  const { root } = useStyles();
  const app = useAppBaseContext();
  const { status } = app.useState(['status']);

  useEffect(() => {
    app.init().catch(() => {});
  }, [app]);

  if (status !== 'READY') {
    return <div className={root}>Loading ...</div>;
  }

  return (
    <div className={root}>
      <FirstComponent />
    </div>
  );
};
