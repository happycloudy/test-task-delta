import styled from 'styled-components';

export const DropdownWrap = styled.div`
  position: relative;
`

export const DropdownButton = styled.button`
  padding: 15px;
  border-radius: 10px;
  background: ${({theme}) => theme.colors.gray};
  outline: none;
  border: none;
  cursor: pointer;
  color: ${({theme}) => theme.colors.secondary};

  & > span {
    font-weight: 600;
  }
`

export const DropdownContent = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  background: ${({theme}) => theme.colors.secondary};
  color: ${({theme}) => theme.colors.primary};
  width: 150px;
  min-height: 100%;
  border-radius: 10px;
  font-weight: 400;
  font-size: 12px;


  & > ul {
    width: 100%;
    padding: 10px;
    list-style: none;

    & > li {
      padding: 0 5px;
      margin: 5px 0;
      transition: ${({theme}) => theme.timings.normal};
      border-radius: 5px;
      width: 100%;

      &.active, &:hover {
        background: rgba(0, 0, 0, .1);;
      }

      & > span {
        display: flex;
        align-items: center;
        text-decoration: none;
        height: 25px;
        width: 100%;
        line-height: 20px;
        user-select: none;
        cursor: pointer;
      }

      & > span.active {
        font-weight: 600;
      }

      & > span.clear {
        color: red;
      }
    }
  }
`