import styled from 'styled-components';
import {GameSectionImage} from '@/app/game/[slug]/components/GameSection/styles';

export const ZoomingImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledZoomingImage = styled(GameSectionImage)`
  border-radius: 10px;
  user-select: none;
  cursor: pointer;
  max-height: 100vh;
  max-width: 100vw;
`