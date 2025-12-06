import { useEffect } from 'react';
import { app } from '@app/app.provider';
import { useNavigateTo } from './useNavigateTo';

export const useUser = () => {
  const { userStatus: user } = app.useState(['userStatus']);
  const { userStatus } = app.getState();
  const navigate = useNavigateTo();

  useEffect(() => {
    if (!user) return;
    const pathname = localStorage.getItem('pathname');
    localStorage.removeItem('pathname');
    pathname && navigate.to(pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return userStatus;
};
