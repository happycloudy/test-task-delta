import React from 'react';
import {HeaderSearchField, StyledHeaderSearchForm} from '@/app/components/Header/styles';

const HeaderSearchForm = ({search, handleSearch}) => {
	return (
		<StyledHeaderSearchForm onSubmit={e => e.preventDefault()}>
			<HeaderSearchField value={search} onChange={handleSearch}/>
		</StyledHeaderSearchForm>
	);
};

export default HeaderSearchForm;