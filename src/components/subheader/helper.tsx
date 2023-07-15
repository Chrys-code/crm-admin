import { Location } from 'react-router-dom';
import EmailTemplatesHeaderActions from './components/emailHeaderActions/emailTemplatesHeaderActions';
import EditEmailHeaderActions from './components/emailHeaderActions/editEmailHeaderActions';
import CreateUserHeaderActions from './components/userHeaderActions/createUserHeaderActions/createUserHeaderActions';
import UsersHeaderActions from './components/userHeaderActions/usersHeaderActions/usersHeaderActions';
import TrackerHeaderActions from './components/analyticsHeaderActions/trackerHeaderActions/trackerHeaderActions';
import EditTrackerHeaderActions from './components/analyticsHeaderActions/editTrackerHeaderActions';

export const renderActionButton = (location: Location): JSX.Element => {

  if (location.pathname === '/email-templates') {
    return <EmailTemplatesHeaderActions />;
  } else if (
    location.pathname.includes('/email-templates/template-editor')
  ) {
    return <EditEmailHeaderActions />;
  }


  if (location.pathname === '/users') {
    return <UsersHeaderActions />;
  } else if (
    location.pathname.includes('/users/user-editor')) {
    return <CreateUserHeaderActions />;
  }


  if (
    location.pathname == ('/analytics')) {
    return <TrackerHeaderActions />;
  } else if (
    location.pathname.includes('/analytics/tracker-editor')) {
    return <EditTrackerHeaderActions />;
  }

  return <></>;
};

export function generateTitleFromWindowLocation(
  windowLocation: Location
): string {
  if (windowLocation.pathname === '/') return '';
  let locationPathname: string = windowLocation.pathname;

  const purifiedPanthnameEnding: string =
    getLastPieceOfPurifiedPathname(locationPathname);

  if (!purifiedPanthnameEnding.includes('-')) {
    return (
      purifiedPanthnameEnding[0].toUpperCase() +
      purifiedPanthnameEnding.substring(1)
    );
  }

  return purifiedPanthnameEnding
    .split('-')
    .map(
      (piece: string): string =>
        piece[0].toUpperCase() + piece.substring(1, piece.length)
    )
    .join(' ');
}

function getLastPieceOfPurifiedPathname(pathname: string) {
  pathname.toLowerCase();
  pathname.trim();

  if (pathname[pathname.length - 1] === '/')
    pathname = pathname.substring(0, pathname.length - 1);

  if (pathname.includes('?'))
    pathname = pathname.substring(0, pathname.indexOf('?'));

  if (pathname.includes('id='))
    pathname = pathname.substring(0, pathname.lastIndexOf('/'));

  return pathname.substring(pathname.lastIndexOf('/') + 1, pathname.length);
}
