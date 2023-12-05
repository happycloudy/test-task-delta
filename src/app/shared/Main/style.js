import React from 'react';
import styled from 'styled-components';
import {sectionPaddings} from '@/styles/mixins/paddings';
import {bigDesktopMedia, desktopMedia, tabletMedia} from '@/styles/mixins/medias';

export const MainContainer = styled.main`
  ${sectionPaddings};
  padding-bottom: 10px;

  ${tabletMedia`
  	  padding-bottom: 24px;
  `}

  ${desktopMedia`
  	  padding-bottom: 40px;
  `}
`