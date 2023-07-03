import styled from 'styled-components';
import { HeaderContainerStyleProps } from './header.types';

export const HeaderContainer = styled.header<HeaderContainerStyleProps>`
  ${({ theme }) => ({
    position: 'fixed',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '6rem',
    backgroundColor: theme.colors.background.white,
    padding: theme.space(3),
    boxShadow: `0px 0px 6px 0px ${theme.colors.accent.green}`,
    zIndex: 100,
  })}
`;

export const UserInfoWrapper = styled.div`
  ${() => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  })}
`;

export const LogoPlaceholder = styled.div`
  ${({ theme }) => ({
    width: '3rem',
    height: '3rem',
    backgroundColor: theme.colors.accent.green,
    borderRadius: '0.625rem',
    marginRight: theme.space(3),
  })}
`;

export const UserAvatar = styled.img`
  ${({ theme }) => ({
    width: '3rem',
    height: '3rem',
    backgroundColor: theme.colors.accent.green,
    borderRadius: '0.625rem',
  })}
`;

export const LogoAndTitleWrapper = styled.div`
  ${() => ({
    flexDirection: 'row !important',
  })}
`;
