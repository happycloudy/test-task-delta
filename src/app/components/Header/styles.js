import styled from 'styled-components';
import {sectionPaddings} from '@/styles/mixins/paddings';
import {desktopMedia, tabletMedia} from '@/styles/mixins/medias';

export const HeaderWrap = styled.header`
  ${sectionPaddings}
`

export const StyledHeaderSearchForm = styled.form`
  width: 100%;
`

export const HeaderSearchField = styled.input.attrs(props => ({
	type: 'text',
	placeholder: 'Search for games'
}))`
  width: 100%;
  border-radius: 15px;
  padding: 7px 10px;
  border: none;

  &:active, &:focus {
    outline: none;
    border: none;
  }
`