import { ListItemType } from '../base/list/list.types';
import { baseRoutes, profileRoutes } from './routeLinks';

export const getMenuOptionsByLocation = (
  windowLocation: any
): ListItemType[] => {
  const location: string = windowLocation.pathname;

  if (location.startsWith('/dashboard')) {
    return baseRoutes;
  }

  if (location.startsWith('/organisation')) {
    return baseRoutes;
  }

  if (location.startsWith('/users')) {
    return baseRoutes;
  }

  if (location.startsWith('/email-templates')) {
    return baseRoutes;
  }

  if (location.startsWith('/analytics')) {
    return baseRoutes;
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

