import { useEffect } from 'react';
import { appBase } from '@components/app/app.base.provider';

export const useAppReady = () => {
  const { status } = appBase.useState(['status']);

  useEffect(() => {
    appBase.init().catch(() => {});
  }, []);

  return status === 'READY';
};
