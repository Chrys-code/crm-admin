import styled from 'styled-components';
import { SidebarContainerStyleProps } from './sidebar.types';

export const SidebarContainer = styled.nav<SidebarContainerStyleProps>`
  ${({ theme }) => ({
    position: 'fixed',
    left: 0,
    width: '20%',
    height: '100%',
    minHeight: 'calc(100vh - 6rem)',
    padding: theme.space(3),
    backgroundColor: theme.colors.background.white,
  })}
`;
