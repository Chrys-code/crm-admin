import styled from 'styled-components';
import { PopupContainerStyleProps } from './popup.types';

export const PopupContainer = styled.div<PopupContainerStyleProps>`
  ${({ theme }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '250px',
    paddingTop: theme.space(7),
    paddingBottom: theme.space(6),
  })};

  > span {
    position: absolute;
    top: ${(p) => p.theme.space(1)};
    width: 100%;
    text-align: center;
    font-size: ${(p) => p.theme.font.size.large};
    font-weight: ${(p) => p.theme.font.weight.bold};
  }
`;

export const PopupActions = styled.div<PopupContainerStyleProps>`
  ${({ theme }) => ({
    position: 'absolute',
    bottom: theme.space(1),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
  })};
`;
