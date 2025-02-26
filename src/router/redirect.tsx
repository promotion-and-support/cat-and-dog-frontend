import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { REGEXP_BAD_HASH, REGEXP_END_ON_SLASH } from '@constants/constants';
import { RoutesMap } from '@constants/router.constants';
import { useNavigateTo } from '@hooks/useNavigateTo';

export const Redirect: FC = () => {
  // const status = useAppStatus();
  const navigate = useNavigateTo();
  const location = useLocation();

  useEffect(() => {
    // if (status !== AppStatus.READY && status !== AppStatus.ERROR) return;
    const { pathname: wPathname, hash: wHash } = window.location;
    const { pathname } = location;
    if (wPathname === RoutesMap.ROOT) {
      if (REGEXP_BAD_HASH.test(wHash)) return navigate.toIndex();
    } else if (REGEXP_END_ON_SLASH.test(pathname)) {
      return navigate.to(pathname.replace(REGEXP_END_ON_SLASH, ''));
    }
  }, [location, navigate]);

  return null;
};
