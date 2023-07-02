import styled from 'styled-components';
import { SubheaderContainerStyleProps } from './subheader.types';

export const SubheaderContainer = styled.div<SubheaderContainerStyleProps>`
  ${({ theme }) => ({
    width: '100%',
    flexDirection: 'row !important',
    alignItems: 'space-between',
    marginTop: '0px',
  })}
`;

export const SubheaderInfoContainer = styled.div<SubheaderContainerStyleProps>`
  ${({ theme }) => ({
    width: '100%',
    alignItems: 'flex-start !important',
  })}
`;
