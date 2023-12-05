'use client'

import React from 'react';
import {MainContainer} from '@/app/shared/Main/style';

const Main = ({children}) => {
	return (
		<MainContainer>
			{children}
		</MainContainer>
	);
};

export default Main;