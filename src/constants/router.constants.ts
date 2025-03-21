import { getRoutesMap } from '../router/utils';

export const RelativeRoutesMap = {
  ROOT: '',
  ABOUT: 'about',
  ACCOUNT: {
    INDEX: 'account',
  },
};

export const RoutesMap = getRoutesMap(RelativeRoutesMap) as typeof RelativeRoutesMap;
