import styled from 'styled-components';

export const CodeEditorContainer = styled.div`
  ${() => ({
    width: '49%',
  })};

  > *,
  *::before,
  *::after {
    display: block !important;
  }
`;

export const PreviewFrame = styled.iframe`
  ${() => ({
    border: 'none',
    alignSelf: 'flex-start',
    minHeight: '60vh',
    width: '49%',
  })};
`;
