import styled from 'styled-components';
import Image from 'next/image';
import {tabletMedia} from '@/styles/mixins/medias';

export const GameSectionWrap = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${tabletMedia`
  	flex-direction: row;
  `}
`

export const GameSectionColumn = styled.div`
  min-height: 30vh;
  padding: 10px;
  width: 100%;
  height: auto;

  ${tabletMedia`
  	width: 50%;
  `}
`

export const GameSectionImagesWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 50vh;
  gap: 30px;
`

export const GameSectionImage = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 10px;
  ${tabletMedia`
  	width: 70%;
  `}
`

export const GameSectionInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const GameSectionInfoTitle = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 0;

  & > a {
    margin-left: 5px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
`

export const GameSectionInfoDescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;

  & > *:first-child {
    margin-top: 0;
  }
`

export const GameSectionInfoAdditional = styled.div`
  display: flex;
  gap: 20px;
`

export const GameSectionInfoAdditionalItem = styled.div`
  display: flex;
  align-items: center;

  & > *:last-child {
    margin-left: 5px;
  }
`

export const ShowMoreButton = styled.button`
  background: transparent;
  font: inherit;
  border: none;
  outline: none;
  color: ${({theme}) => theme.colors.secondary};
  opacity: 0.3;
  width: 100px;
  padding: 5px 5px 5px 0;
  cursor: pointer;
  transition: ${({theme}) => theme.timings.normal};

  &:hover {
    text-decoration: underline;
  }
`