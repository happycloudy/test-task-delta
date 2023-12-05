import styled from 'styled-components';
import {bigDesktopMedia, desktopMedia, tabletMedia} from '@/styles/mixins/medias';

export const GridWrap = styled.div`
  --list-gap: 20px;

  display: flex;
  gap: var(--list-gap);
  flex-wrap: wrap;
  margin-top: 10px;

  & > * {
    --plates-amount: 1;
    width: calc(100% / var(--plates-amount) - var(--list-gap));
    max-width: calc(100% / var(--plates-amount) - var(--list-gap));

    & {
      ${tabletMedia`
				--plates-amount: 3;
			`}

      ${desktopMedia`
				--plates-amount: 3;
			`}

      ${bigDesktopMedia`
				--plates-amount: 5;
			`}
    }
  }
`

export const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`