import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { app } from '@components/app/app.provider';

export const useApiError = () => {
  const [error, setError] = useState<Error | null>(null);
  const location = useLocation();

  useEffect(() => {
    return app.apiService.events.on('error', setError);
  }, []);

  useEffect(() => setError(null), [location]);

  return error;
};
