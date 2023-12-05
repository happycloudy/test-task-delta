import React, {memo} from 'react';
import sortItems from '@/app/constants/sortItems';
import platformItems from '@/app/constants/platformItems';
import Dropdown from '@/app/components/Dropdown';
import FilterWrap from '@/app/components/Filter/styles';

const Search = memo((props) => {
	return (
		<FilterWrap>
			<Dropdown title={'Order by'} active={props.orderBy} values={sortItems} handleSelect={props.handleOrderBy}/>
			<Dropdown title={'Platform'} active={props.platform} values={platformItems} handleSelect={props.handlePlatform}/>
		</FilterWrap>
	);
});

export default Search;