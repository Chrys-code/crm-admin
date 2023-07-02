import styled from 'styled-components';

export const ListContainer = styled.ul`
  ${() => ({
    listStyleType: 'none',
    padding: '0px',
    margin: '0px',
    width: '100%',
  })}
`;

export const ListItem = styled.li<{ isActive: boolean }>`
  ${({ theme, isActive }) => ({
    width: '100%',
    padding: theme.space(2),
    margin: `${theme.space(1)} 0px`,
    cursor: 'pointer',
    borderRadius: theme.borders.wrapper,
    backgroundColor: isActive ? theme.colors.accent.lightGreen : 'transparent',
  })};

  &:hover {
    background-color: ${(p) => p.theme.colors.accent.lightGreen};
  }

  > a {
    text-decoration: none;
    color: black;
  }
`;

export const ListItemLabel = styled.span`
  ${() => ({
    width: '100%',
  })}
`;

export const ListButton = styled.button`
  ${() => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  })}
`;
