import React, {useState} from 'react';
import {
	GameSectionInfoAdditional,
	GameSectionInfoAdditionalItem,
	GameSectionInfoDescriptionWrap,
	GameSectionInfoTitle,
	GameSectionInfoWrap,
	ShowMoreButton
} from '@/app/game/[slug]/components/GameSection/styles';
import Image from 'next/image';

const GameSectionInfo = ({
													 title = '',
													 rating = '',
													 released = '',
													 description = '',
													 description_raw = '',
													 website = ''
												 }) => {
	const [showMore, setShowMore] = useState(false)

	const handleToggleShowMore = () => setShowMore(prev => !prev)

	return (
		<GameSectionInfoWrap>
			<GameSectionInfoTitle>
				{title}
				<a href={website} target={'_blank'}>
					<Image src={'/images/link.svg'} width={24} height={24} alt={'Link image'}/>
				</a>
			</GameSectionInfoTitle>
			<GameSectionInfoAdditional>
				<GameSectionInfoAdditionalItem>
					<Image src={'/images/star.svg'} width={24} height={24} alt={'Star image'}/>
					<span>{rating}</span>
				</GameSectionInfoAdditionalItem>

				<GameSectionInfoAdditionalItem>
					<Image src={'/images/calendar.svg'} width={24} height={24} alt={'Calendar image'}/>
					<span>{new Date(released).toLocaleDateString()}</span>
				</GameSectionInfoAdditionalItem>
			</GameSectionInfoAdditional>
			<h3>
				Description:
			</h3>
			<GameSectionInfoDescriptionWrap
				dangerouslySetInnerHTML={{__html: showMore ? description : description_raw.substring(0, 250)}}/>
			<ShowMoreButton onClick={handleToggleShowMore}>
				{showMore ? 'Show less' : 'Show more'}
			</ShowMoreButton>
		</GameSectionInfoWrap>
	);
};

export default GameSectionInfo;