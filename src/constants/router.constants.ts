import { getRoutesMap } from '../router/utils';

export const RelativeRoutesMap = {
  ROOT: '',
  ABOUT: 'about',
  CONTACTS: 'contacts',
  HELP: 'help',
  ACCOUNT: {
    INDEX: 'account',
  },
};

export const RoutesMap = getRoutesMap(RelativeRoutesMap) as typeof RelativeRoutesMap;
