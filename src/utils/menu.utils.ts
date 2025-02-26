import * as T from '@server/types/types';
// import { app } from '@client/app';
import { IMenuItem } from '@components/menu/menu.types';
import { IS_DEV } from '@constants/constants';

const createNetMenuFilter = () => {
  // const { userStatus, tg } = app.getState();
  const { userStatus, tg } = {
    userStatus: 'LOGGEDIN' as T.UserStatusKeys,
    tg: true,
  };
  return (netMeuItem: IMenuItem) => {
    const { allowForUser, forTg } = netMeuItem;
    if (!tg || forTg !== false) {
      if (Array.isArray(allowForUser)) return allowForUser.includes(userStatus);
      if (T.USER_STATUS_MAP[allowForUser] <= T.USER_STATUS_MAP[userStatus]) return true;
    }
    if (IS_DEV && allowForUser === 'DEV') return true;
    return false;
  };
};

export const getMenuItems = (menuItems: IMenuItem[]) => {
  const netMenuFilter = createNetMenuFilter();
  const filteredMenuItems = menuItems.filter(netMenuFilter);
  return filteredMenuItems.length ? filteredMenuItems : undefined;
};
