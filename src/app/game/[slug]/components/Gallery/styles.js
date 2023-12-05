import styled from 'styled-components';

export const GalleryWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  & > button.next, & > button.previous {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    background-color: transparent;
    border: none;
    font-size: 24px;
    color: white;
    cursor: pointer;
  }

  & > button.previous {
    left: 20px;
  }

  & > button.next {
    right: 20px;
  }
`

export const GalleryItem = styled.div`
  display: ${props => props.$active ? 'block' : 'none'};
`