import styled from 'styled-components';
import { TableContainerStyleProps } from './table.types';

export const TableContainer = styled.table<TableContainerStyleProps>`
  ${({ theme }) => ({
    width: '100%',
    borderSpacing: theme.space(1),
  })};

  > thead {
    text-align: left;
    > tr {
      > th {
        padding: ${(p) => p.theme.space(0.5)} ${(p) => p.theme.space(1)};
      }
    }
  }

  > tbody {
    > tr {
      text-align: left;
      border-radius: ${(p) => p.theme.borders.wrapper};

      &:hover {
        background-color: ${(p) => p.theme.colors.accent.lightGreen};
        background: linear-gradient(
          to right,
          ${(p) => p.theme.colors.accent.lightGreen},
          white 80%
        );
        border-radius: ${(p) => p.theme.borders.wrapper};
      }

      > td {
        padding: ${(p) => p.theme.space(0.5)} ${(p) => p.theme.space(1)};
      }
    }
  }
`;
