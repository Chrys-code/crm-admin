import styled from 'styled-components';

export const CodeEditorContainer = styled.div`
  ${({ theme }) => ({
    width: '49%',
  })};

  > *,
  *::before,
  *::after {
    display: block !important;
  }
`;
