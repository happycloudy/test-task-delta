import {css} from 'styled-components';
import {bigDesktopMedia, desktopMedia, tabletMedia} from '@/styles/mixins/medias';

export const sectionPaddings = css`
  padding: 10px 20px 0;

  ${tabletMedia`
  	padding: 24px 40px 0;
  `}

  ${desktopMedia`
  	padding: 40px 100px 0;
  `}

  ${bigDesktopMedia`
    padding: 40px 15vw 0;
  `}
`