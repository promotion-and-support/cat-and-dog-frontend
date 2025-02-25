import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { appBase } from '@components/app/app.base.provider';

export const useAppError = () => {
  const [error, setError] = useState<Error | null>(null);
  const location = useLocation();

  useEffect(() => {
    appBase.events.on('connectionError', setError);
    return () => {
      appBase.events.off('error', setError);
    };
  }, []);

  useEffect(() => setError(null), [location]);

  return error;
};
