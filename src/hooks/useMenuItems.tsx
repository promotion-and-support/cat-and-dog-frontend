import { useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { MENU_ITEMS } from '@constants/menu.constants';
import { RoutesMap } from '@constants/router.constants';
import { getMenuItems } from '@utils/menu.utils';
import { modalService } from '@services/modal.service';
import { useUser } from '@hooks/useUser';

const { ROOT } = RoutesMap;

export const useMenuItems = () => {
  const userStatus = useUser();
  const { pathname } = useLocation();
  const href = ROOT;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const mainMenuItems = useMemo(() => getMenuItems(MENU_ITEMS), [userStatus]);

  const openMainMenu = useCallback(
    () => modalService.openMenu({ items: mainMenuItems }),
    [mainMenuItems],
  );

  const showBackBtn = pathname !== href;
  const showMainMenu = true; // USER_STATUS_MAP[userStatus] < USER_STATUS_MAP.INVITING || undefined;

  return {
    href,
    openMainMenu: showMainMenu && openMainMenu,
    showBackBtn,
  };
};
