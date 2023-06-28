import React, { FC, PropsWithChildren } from 'react';
import {
  HeaderContainer,
  LogoPlaceholder,
  UserInfoWrapper,
  UserAvatar,
} from './header.styles';
import { HeaderProps } from './header.types';
import { Link } from 'react-router-dom';
import Icon from '../base/icon';

const Header: FC<HeaderProps> = ({
  userName,
  userAvatar,
  isLoading,
}: PropsWithChildren<HeaderProps>): JSX.Element => {
  return (
    <HeaderContainer>
      <LogoPlaceholder />
      <UserInfoWrapper>
        {userName && <span style={{ marginRight: '12px' }}>{userName}</span>}
        <Link to="/profile">
          {userAvatar ? (
            <UserAvatar src={userAvatar} alt={userName} />
          ) : (
            <Icon
              name="group"
              size="large"
              color="white"
              background
              backgroundColor="green"
            />
          )}
        </Link>
      </UserInfoWrapper>
    </HeaderContainer>
  );
};
export default Header;
