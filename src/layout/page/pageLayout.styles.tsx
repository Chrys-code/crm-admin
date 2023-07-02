import styled from 'styled-components';
import { PageLayoutContainerStyleProps } from './pageLayout.types';

export const PageContent = styled.main<PageLayoutContainerStyleProps>`
  ${({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    padding: theme.space(4),
    paddingLeft: `calc(20% + ${theme.space(4)})`,
  })};

  > * {
    margin: ${(p) => p.theme.space(2)} 0px;
  }
`;
