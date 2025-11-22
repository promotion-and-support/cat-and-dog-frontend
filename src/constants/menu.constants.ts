import { RoutesMap } from '@constants/router.constants';
import { IMenuItem } from '@components/menu/menu.types';
import { PROJECT_NAME } from './constants';

export const MENU_ITEMS: IMenuItem[] = [
  {
    label: `Про ${PROJECT_NAME}`,
    href: RoutesMap.ABOUT,
    icon: 'about',
    allowForUser: 'NOT_LOGGEDIN',
  },
  {
    label: `Довідка`,
    href: RoutesMap.HELP,
    icon: 'create',
    allowForUser: 'NOT_LOGGEDIN',
  },
  {
    label: `Контакти`,
    href: RoutesMap.CONTACTS,
    icon: 'message',
    allowForUser: 'NOT_LOGGEDIN',
  },
  {
    label: `Net`,
    href: RoutesMap.NET.INDEX,
    icon: 'message',
    allowForUser: 'LOGGEDIN',
  },
];

export const MENU_TREE_ITEMS: IMenuItem[] = [
  // {
  //   label: 'Інфо',
  //   href: RoutesMap.NET.NET_ID.TREE.INFO,
  //   icon: 'about',
  //   allowForUser: 'INSIDE_NET',
  // },
  // {
  //   label: 'Чат',
  //   href: RoutesMap.NET.NET_ID.TREE.CHAT,
  //   icon: 'post',
  //   allowForUser: 'INSIDE_NET',
  // },
];

export const MENU_CIRCLE_ITEMS: IMenuItem[] = [
  // {
  //   label: 'Інфо',
  //   href: RoutesMap.NET.NET_ID.CIRCLE.INFO,
  //   icon: 'about',
  //   allowForUser: 'INSIDE_NET',
  // },
  // {
  //   label: 'Чат',
  //   href: RoutesMap.NET.NET_ID.CIRCLE.CHAT,
  //   icon: 'post',
  //   allowForUser: 'INSIDE_NET',
  // },
];
