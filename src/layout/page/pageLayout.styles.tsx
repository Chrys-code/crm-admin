import styled from 'styled-components';
import { PageLayoutContainerStyleProps } from './pageLayout.types';

export const PageContent = styled.main<PageLayoutContainerStyleProps>`
  ${({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    padding: theme.space(3),
    paddingLeft: `calc(20% + ${theme.space(3)})`,
  })}
`;
