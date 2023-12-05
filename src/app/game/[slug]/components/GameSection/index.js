'use client'

import React, {useEffect, useState} from 'react';
import {
	GameSectionColumn,
	GameSectionImage,
	GameSectionImagesWrap,
	GameSectionWrap
} from '@/app/game/[slug]/components/GameSection/styles';
import Gallery from 'src/app/game/[slug]/components/Gallery';
import GameSectionInfo from '@/app/game/[slug]/components/GameSection/GameSectionInfo';
import {getGameBySlug} from '@/api/game/getGameBySlug';
import {LoaderWrap} from '@/app/components/Grid/styles';
import Loader from '@/app/shared/Loader';
import Error from '@/app/shared/Error';

const GameSection = ({slug}) => {
	const [game, setGame] = useState(undefined)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(undefined)

	useEffect(() => {
		if (!game) {
			setLoading(true)
			getGameBySlug(slug).then(res => {
				setLoading(false)
				setGame(res)
			}).catch(err => {
				setLoading(false)
				setError(err.message)
			})
		}
	}, [slug])

	return (
		<>
			{
				game ?
					<GameSectionWrap>
						<GameSectionColumn>
							<GameSectionInfo title={game?.name}
															 rating={game?.rating}
															 description={game?.description}
															 description_raw={game?.description_raw}
															 website={game?.website}
															 released={game?.released}/>
						</GameSectionColumn>

						<GameSectionColumn>
							<GameSectionImagesWrap>
								<GameSectionImage
									src={game.background_image}
									width={'1920'}
									height={'1080'}
									alt={'game avatar'}/>
								<Gallery id={game.id}/>
							</GameSectionImagesWrap>
						</GameSectionColumn>
					</GameSectionWrap> :
					undefined
			}

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

export default GameSection;