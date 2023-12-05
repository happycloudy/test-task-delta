import {css} from 'styled-components';

export const tabletMedia = (interpolations) => css`
  @media (min-width: ${({theme}) => theme.media.tablet}) {
    ${interpolations}
  }
`

export const desktopMedia = (interpolations) => css`
  @media (min-width: ${({theme}) => theme.media.desktop}) {
    ${interpolations}
  }
`

export const bigDesktopMedia = (interpolations) => css`
  @media (min-width: ${({theme}) => theme.media.bigDesktop}) {
    ${interpolations}
  }
`