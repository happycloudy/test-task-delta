import styled from 'styled-components';
import Link from 'next/link';

export const PlateWrap = styled(Link)`
  background: ${({theme}) => theme.colors.gray};
  border-radius: 10px;
  text-decoration: none;
  color: ${({theme}) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
`

export const PlateContent = styled.div`
  margin-top: 10px;
  padding: 0 10px 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const PlateFooter = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 10px;
  gap: 10px;
  flex: 1;
`

export const PlateImage = styled.img`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  aspect-ratio: 1920 / 1080;
`

export const PlateIcon = styled.span`
  display: flex;
  gap: 5px;
  align-items: flex-end;
`

export const PlateTitle = styled.div`
  text-decoration: none;
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.secondary};
  cursor: pointer;
  transition: ${({theme}) => theme.timings.normal};
`