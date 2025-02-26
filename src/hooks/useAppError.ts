import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { app } from '@components/app/app.provider';

export const useAppError = () => {
  const [error, setError] = useState<Error | null>(null);
  const location = useLocation();

  useEffect(() => {
    app.events.on('connectionError', setError);
    return () => {
      app.events.off('error', setError);
    };
  }, []);

  useEffect(() => setError(null), [location]);

  return error;
};
