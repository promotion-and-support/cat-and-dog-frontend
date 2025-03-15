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
];
