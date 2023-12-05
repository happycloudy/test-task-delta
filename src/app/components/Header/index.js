'use client'

import React, {memo} from 'react';
import HeaderSearchForm from '@/app/components/Header/HeaderSearchForm';
import {HeaderWrap} from '@/app/components/Header/styles';

const Header = memo((props) => {
	return (
		<HeaderWrap>
			<HeaderSearchForm {...props}/>
		</HeaderWrap>
	);
});

export default Header;