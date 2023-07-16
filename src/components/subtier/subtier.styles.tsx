import styled from 'styled-components'
import { SubtierContainerStyleProps } from './subtier.types'

export const SubtierContainer = styled.div<SubtierContainerStyleProps>`
    ${({ theme }) => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: theme.space(2),
        borderRadius: theme.borders.container,
        border: `1px solid ${theme.colors.accent.lightGreen}`,
        transition: `.5s ease`,
        cursor: 'pointer',
    })};

    &:hover {
        scale: 1.025;
        box-shadow: 0px 0px 8px 2px ${p => p.theme.colors.accent.lightGreen};
    }
`

export const SubtierHeader = styled.span`
    ${({ theme }) => ({
        width: '100%',
        textAlign: 'center',
        fontSize: theme.font.size.large,
        fontWeight: theme.font.weight.bold,
        color: theme.colors.accent.green,
        padding: theme.space(1),
    })};
`

export const SubtierInfoList = styled.ul`
    ${({ theme }) => ({
        width: '100%',
        margin: '0px',
        padding: '0px',
        listStyleType: 'none',
    })}
`

export const SubtierInfoListItem = styled.li`
    ${({ theme }) => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: theme.space(1)
    })}
`

export const Separator = styled.div`
    ${({ theme }) => ({
        width: '80%',
        height: '2px',
        borderRadius: '2px',
        backgroundColor: theme.colors.accent.green,
        margin: `${theme.space(3)} auto`,
    })}
`