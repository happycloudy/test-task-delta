import React from 'react';
import Main from '@/app/shared/Main';
import GameSection from '@/app/game/[slug]/components/GameSection';
import BackToHomeButton from '@/app/game/[slug]/components/BackToHomeButton';

export const metadata = {
	title: 'Game',
	description: 'Game info'
}

const Page = ({params}) => {
	return (
		<>
			<BackToHomeButton/>
			<Main>
				<GameSection slug={params.slug}/>
			</Main>
		</>
	);
};

export default Page;