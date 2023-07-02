import React, { FC, PropsWithChildren } from 'react';
import {
  HeaderContainer,
  LogoPlaceholder,
  UserInfoWrapper,
  UserAvatar,
  LogoAndTitleWrapper,
} from './header.styles';
import { HeaderProps } from './header.types';
import { Link } from 'react-router-dom';
import Icon from '../base/icon';
import { generateTitleFromWindowLocation } from './helper';

const Header: FC<HeaderProps> = ({
  userName,
  userAvatar,
  location,
}: PropsWithChildren<HeaderProps>): JSX.Element => {
  return (
    <HeaderContainer>
      <LogoAndTitleWrapper>
        <LogoPlaceholder />
        <h1>{generateTitleFromWindowLocation(location)}</h1>
      </LogoAndTitleWrapper>
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
