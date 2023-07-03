import styled from 'styled-components';
import { SubheaderContainerStyleProps } from './subheader.types';

export const SubheaderContainer = styled.div<SubheaderContainerStyleProps>`
  ${({ theme }) => ({
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '0px',
  })}
`;

export const SubheaderInfoContainer = styled.div<SubheaderContainerStyleProps>`
  ${({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'flex-start',
  })}
`;
