import { Location } from 'react-router-dom';

export interface HeaderProps {
  userName: string | undefined;
  userAvatar: string | undefined;
  isLoading: boolean;
  isAuthenticated: boolean;
  location: Location;
}
export interface HeaderContainerStyleProps {}
