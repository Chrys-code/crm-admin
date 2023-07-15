import styled from 'styled-components'

export const TrackerContentWrapper = styled.div`
    ${({ theme }) => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    })}
`

export const InputLabel = styled.label`
  ${({ theme }) => ({
        marginRight: theme.space(1),
    })}
`;


export const TrackerInputField = styled.input`
    ${({ theme }) => ({
        width: '100%',
        maxWidth: '600px',
        padding: theme.space(1)
    })}
`