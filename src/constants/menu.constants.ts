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
    label: 'Акаунт',
    href: RoutesMap.ACCOUNT.INDEX,
    icon: 'account',
    allowForUser: 'NOT_CONFIRMED',
  },
];
