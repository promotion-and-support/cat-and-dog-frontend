import { createContext, FC, PropsWithChildren, useMemo } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { RoutesMap } from '@constants/router.constants';

const getNavigateMap = (navigate: NavigateFunction) => {
  return {
    to: navigate,
    back: () => navigate(-1),
    toIndex: (replace: boolean = false) => navigate(RoutesMap.ROOT, { replace }),
    toAccount: (replace: boolean = false) => navigate(RoutesMap.ACCOUNT.INDEX, { replace }),
  };
};

export const NavigateContext = createContext<ReturnType<typeof getNavigateMap>>(
  getNavigateMap(() => {}),
);
const Provider = NavigateContext.Provider;

export const NavigateProvider: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const value = useMemo(() => getNavigateMap(navigate), [navigate]);
  return <Provider value={value}>{children}</Provider>;
};
