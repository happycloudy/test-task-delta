import React from 'react';
import {ErrorText, ErrorWrap} from '@/app/shared/Error/styles';

const Error = ({error = ''}) => {
	return (
		<ErrorWrap>
			<ErrorText>
				{error}
			</ErrorText>
		</ErrorWrap>
	);
};

export default Error;