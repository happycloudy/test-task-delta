'use client'

import React, {useEffect, useMemo, useRef, useState} from 'react';
import {GridWrap, LoaderWrap} from '@/app/components/Grid/styles';
import {getGames} from '@/api/game/getGames';
import Plate from '@/app/components/Plate';
import Loader from '@/app/shared/Loader';
import Error from '@/app/shared/Error';

const Grid = (props) => {
	const [games, setGames] = useState([])
	const [page, setPage] = useState(0)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(undefined)
	const ref = useRef(null)
	const filter = useMemo(() => ({
		ordering: props.ordering,
		platforms: props.platforms.map(item => item.value).join(','),
		search: props.search.trim(),
		page_size: 30,
		page: page
	}), [props.ordering, props.platforms, props.search, page])

	const handleNextPage = () => setPage(prev => ++prev)

	const handleAddGames = (games) => setGames(prev => [...prev, ...games])

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				if (entries[0].isIntersecting) {
					handleNextPage()
				}
			}
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [ref]);

	useEffect(() => {
		if (page > 0) {
			setLoading(true)
			getGames(filter).then(res => {
				setLoading(false)
				handleAddGames(res.results)
			}).catch(err => {
				setLoading(false)
				setError(err.message)
			})
		}
	}, [page])

	useEffect(() => {
		setPage(0)
		setGames([])
	}, [props.ordering, props.platforms, props.search])

	return (
		<>
			<GridWrap>
				{
					games.map(game => (
						<Plate key={game.id} game={game} href={`/game/${game.slug}`}/>
					))
				}
				<span ref={ref} id={'end_of_grid'}></span>
			</GridWrap>

			{
				error ?
					<Error error={error}/> :
					undefined
			}

			{
				loading ?
					<LoaderWrap>
						<Loader/>
					</LoaderWrap> :
					undefined
			}
		</>
	);
};

export default Grid;