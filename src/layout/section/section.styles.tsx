import styled from 'styled-components';
import { SectionContainerStyleProps } from './section.types';

export const SectionContainer = styled.section<SectionContainerStyleProps>`
  ${({ theme, $withBorder, $withLabel, $withPadding }) => ({
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: $withPadding ? theme.space(4) : '0px',
    paddingTop: $withLabel ? theme.space(10) : theme.space(4),
    backgroundColor: $withBorder
      ? theme.colors.background.white
      : 'transparent',
    border: $withBorder
      ? `1px solid ${theme.colors.accent.lightGreen}`
      : 'none',
    borderRadius: theme.borders.componentContainer,
  })};

  ${(p) =>
    p.$isMultipleChildNode &&
    `
    > * {
      margin: 0px ${p.theme.space(2)}
    }

    > *:first-child {
      margin-left: 0px;
    }
    > *:last-child {
      margin-right: 0px;
    }

  `}
`;
export const SectionDivContainer = styled.div<SectionContainerStyleProps>`
  ${({ theme, $withBorder, $withLabel }) => ({
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: theme.space(4),
    paddingTop: $withLabel ? theme.space(10) : theme.space(4),
    backgroundColor: $withBorder
      ? theme.colors.background.white
      : 'transparent',
    border: $withBorder
      ? `1px solid ${theme.colors.accent.lightGreen}`
      : 'none',
    borderRadius: theme.borders.componentContainer,
  })};

  ${(p) =>
    p.$isMultipleChildNode &&
    `
    > * {
      margin: 0px ${p.theme.space(2)}
    }

    > *:first-child {
      margin-left: 0px;
    }
    > *:last-child {
      margin-right: 0px;
    }

  `}
`;

export const SectionLabel = styled.span`
  ${({ theme }) => ({
    position: 'absolute',
    top: theme.space(4),
    left: theme.space(4),
    fontSize: theme.font.size.regular,
    fontWeight: theme.font.weight.bold,
  })}
`;
