import styled from 'styled-components';

export const InputWrapper = styled.div`
  ${({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: theme.space(4),
  })};
`;

export const InputLabel = styled.label`
  ${({ theme }) => ({
    marginRight: theme.space(1),
  })}
`;

export const Input = styled.input`
  ${({ theme }) => ({
    padding: theme.space(1),
  })}
`;

export const Selector = styled.select`
  ${({ theme }) => ({
    padding: theme.space(1),
  })}
`;
