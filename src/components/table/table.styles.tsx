import styled from 'styled-components';
import { TableContainerStyleProps } from './table.types';

export const TableContainer = styled.table<TableContainerStyleProps>`
  ${({ theme }) => ({
    width: '100%',
    borderSpacing: theme.space(1),
  })};

  > thead {
    text-align: left;
  }

  > tbody {
    > tr {
      text-align: left;

      &:hover {
        background-color: ${(p) => p.theme.colors.accent.lightGreen};
      }

      > td {
        padding: ${(p) => p.theme.space(0.5)} 0px;
      }
    }
  }
`;
