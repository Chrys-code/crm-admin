import { ListItemType } from '../base/list/list.types';
import { emailingRoutes, homeRoutes, profileRoutes } from './routeLinks';

export const getMenuOptionsByLocation = (
  windowLocation: any
): ListItemType[] => {
  const location: string = windowLocation.pathname;

  if (location.startsWith('/dashboard')) {
    return homeRoutes;
  }

  if (location.startsWith('/emailing')) {
    return emailingRoutes;
  }

  if (location.startsWith('/profile')) {
    return profileRoutes;
  }

  if (location.startsWith('/subscription')) {
    return profileRoutes;
  }

  return [
    {
      label: 'Home',
      action: '/dashboard',
    },
  ];
};
