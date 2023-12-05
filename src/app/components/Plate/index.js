import React from 'react';
import Image from 'next/image'
import {
	PlateContent,
	PlateFooter, PlateIcon,
	PlateImage,
	PlateTitle,
	PlateWrap
} from '@/app/components/Plate/styles';

const Plate = ({game, href}) => {
	return (
		<PlateWrap href={href}>
			<PlateImage
				src={game.background_image}/>
			<PlateContent>
				<PlateTitle>
					{game.name}
				</PlateTitle>
				<PlateFooter>
					<PlateIcon>
						<Image src={'/images/star.svg'} width={24} height={24} alt={'Star image'}/>
						{game.rating}
					</PlateIcon>
					<PlateIcon>
						<Image src={'/images/calendar.svg'} width={24} height={24} alt={'Star image'}/>
						{new Date(game.released).toLocaleDateString()}
					</PlateIcon>
				</PlateFooter>
			</PlateContent>
		</PlateWrap>
	);
};

export default Plate;