import * as T from '@server/types/types';
import { app } from '@app/app.provider';
import { IMenuItem } from '@components/menu/menu.types';
import { IS_DEV } from '@constants/constants';

const createNetMenuFilter = () => {
  const { userStatus, tg } = app.getState();

  return (netMeuItem: IMenuItem) => {
    const { allowForUser, forTg } = netMeuItem;
    if (!tg || forTg !== false) {
      if (Array.isArray(allowForUser)) return allowForUser.includes(userStatus || status);
      if (T.USER_STATUS_MAP[allowForUser] <= T.USER_STATUS_MAP[userStatus || status]) return true;
    }
    if (IS_DEV && allowForUser === 'DEV') return true;
    return false;
  };
};

const createInsertNetId = (netId: string) => (item: IMenuItem) => {
  const href = item.href.replace(':net_id', netId); // makeDynamicPathname ?
  return { ...item, href };
};

export const getMenuItems = (menuItems: IMenuItem[]) => {
  const netMenuFilter = createNetMenuFilter();
  let filteredMenuItems = menuItems.filter(netMenuFilter);
  const { userNet: net } = app.getState();
  if (net) {
    const netId = net?.net_id.toString();
    const insertNetId = createInsertNetId(netId);
    filteredMenuItems = filteredMenuItems.map(insertNetId);
  }
  return filteredMenuItems.length ? filteredMenuItems : undefined;
};
