import { useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { USER_STATUS_MAP } from '@server/types/types';
import { MENU_ITEMS } from '@constants/menu.constants';
import { RoutesMap } from '@constants/router.constants';
import { getMenuItems } from '@utils/menu.utils';
import { modalService } from '@services/modal.service';
// import { useUser } from '@hooks/useUser';

const { ROOT } = RoutesMap;

export const useMenuItems = () => {
  // const [user, userStatus] = useUser();
  const userStatus = 'LOGGEDIN';
  const { pathname } = useLocation();
  const href = ROOT;

  const mainMenuItems = useMemo(() => getMenuItems(MENU_ITEMS), []);

  const openMainMenu = useCallback(
    () => modalService.openMenu({ items: mainMenuItems }),
    [mainMenuItems],
  );

  const showBackBtn = pathname !== href;
  const showMainMenu = USER_STATUS_MAP[userStatus] < USER_STATUS_MAP.INVITING || undefined;

  return {
    href,
    openMainMenu: showMainMenu && openMainMenu,
    showBackBtn,
  };
};
