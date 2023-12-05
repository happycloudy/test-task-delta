'use client'

import Main from '@/app/shared/Main';
import Search from '@/app/components/Filter';
import Grid from '@/app/components/Grid';
import {useCallback, useState} from 'react';
import Header from '@/app/components/Header';
import {useDebounce} from '@/app/hooks/useDebounce';

export default function Page() {
	const [search, setSearch] = useState('')
	const [orderBy, setOrderBy] = useState({})
	const [platforms, setPlatforms] = useState([])
	const debouncedSearch = useDebounce(search, 500)

	const handleOrderBy = useCallback((sortBy) => setOrderBy(sortBy.value.length ? sortBy : {}), [])

	const handlePlatform = useCallback((platform) => {
		if (!platform.value) {
			setPlatforms([])
			return
		}

		const existPlatform = platforms.find(item => item.value === platform.value)

		if (existPlatform) setPlatforms(prev => prev.filter(item => item.value !== platform.value))
		else setPlatforms(prev => [...prev, platform])
	}, [platforms])

	const handleSearch = useCallback((e) => setSearch(e.target.value), [])

	return (
		<>
			<Header search={search} handleSearch={handleSearch}/>
			<Main>
				<Search orderBy={orderBy}
								platform={platforms}
								handleOrderBy={handleOrderBy}
								handlePlatform={handlePlatform}/>
				<Grid ordering={orderBy.value} platforms={platforms} search={debouncedSearch}/>
			</Main>
		</>
	)
}
