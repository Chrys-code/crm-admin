import { Location } from 'react-router-dom';

export function generateTitleFromWindowLocation(
  windowLocation: Location
): string {
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

  return pathname.substring(pathname.lastIndexOf('/') + 1, pathname.length);
}
