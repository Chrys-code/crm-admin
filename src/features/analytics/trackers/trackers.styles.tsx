import styled from 'styled-components'
import { TrackersContainerStyleProps } from './trackers.types'

export const TrackersContainer = styled.div<TrackersContainerStyleProps>`
    ${({ theme }) => ({
        width: '100%'
    })}
`


export const TrackerTitle = styled.span`
    ${({ theme }) => ({
        fontSize: theme.font.size.regular,
        fontWeight: theme.font.weight.bold

    })}
`


export const TrackerSelector = styled.input`
    ${({ theme }) => ({
        margin: '0px',
        scale: '1.75',
        cursor: 'pointer'
    })}
`
