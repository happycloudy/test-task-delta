'use client'

import React from 'react';
import {createPortal} from 'react-dom';
import {CloseButton, PortalWrap} from '@/app/shared/Portal/styles';
import CloseIcon from '@/app/shared/Icons/CloseIcon';

const Portal = ({children, handleClose}) => {
	return createPortal(
		<PortalWrap>
			{children}
			<CloseButton onClick={handleClose}>
				<CloseIcon/>
			</CloseButton>
		</PortalWrap>, document.body)
};

export default Portal;