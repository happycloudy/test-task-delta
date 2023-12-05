import styled from 'styled-components';
import {tabletMedia} from '@/styles/mixins/medias';

export const PortalWrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`

export const CloseButton = styled.button`
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
  height: 50px;
  width: 50px;
  outline: none;
  border: none;
  border-radius: 100%;
  background: ${({theme}) => theme.colors.gray};
  transition: ${({theme}) => theme.timings.normal};
  fill: #fff;


  ${tabletMedia`
  	right: 10px;
  	top: 10px;
		left: auto;
		bottom: auto;
		transform: translateX(0);
		
		&:hover {
    	background: ${({theme}) => theme.colors.secondary};

    	& path {
      	fill: #000;
    	}
  	}
	`}
`
