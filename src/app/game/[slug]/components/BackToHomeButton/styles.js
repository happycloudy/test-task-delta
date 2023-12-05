import styled from 'styled-components';
import {sectionPaddings} from '@/styles/mixins/paddings';
import {desktopMedia, tabletMedia} from '@/styles/mixins/medias';
import Link from 'next/link';

export const BackToHomeButtonWrap = styled.section`
  ${sectionPaddings}
`

export const StyledBackToHomeButton = styled(Link)`
  width: 100%;
  height: 100%;
  transition: ${({theme}) => theme.timings.normal};
  font-size: 32px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 10px 20px;
  background: ${({theme}) => theme.colors.secondary};
  color: ${({theme}) => theme.colors.primary};
  border: ${({theme}) => theme.colors.secondary} 2px solid;

  ${desktopMedia`
    background: #151515;
    color: #ffffff;

    &:hover {
      background: #ffffff;
      color: #151515;
    }
  `}
`