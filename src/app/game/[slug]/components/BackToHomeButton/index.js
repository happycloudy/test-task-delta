'use client'

import React from 'react';
import {BackToHomeButtonWrap, StyledBackToHomeButton} from '@/app/game/[slug]/components/BackToHomeButton/styles';

const BackToHomeButton = () => {
	return (
		<BackToHomeButtonWrap>
			<StyledBackToHomeButton href={'/'}>
				Back to home
			</StyledBackToHomeButton>
		</BackToHomeButtonWrap>
	);
};

export default BackToHomeButton;