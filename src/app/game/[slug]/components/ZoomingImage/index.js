import React, {useState} from 'react';
import {StyledZoomingImage, ZoomingImageWrap} from '@/app/game/[slug]/components/ZoomingImage/styles';
import Portal from '@/app/shared/Portal';

const ZoomingImage = (props) => {
	const [active, setActive] = useState(false)

	const toggleActive = () => setActive(prev => !prev)
	const handleClose = () => setActive(false)

	return (
		<>
			{
				active ?
					<Portal handleClose={handleClose}>
						<StyledZoomingImage {...props}/>
					</Portal> :
					undefined
			}

			<ZoomingImageWrap onClick={toggleActive}>
				<StyledZoomingImage {...props}/>
			</ZoomingImageWrap>
		</>
	);
};

export default ZoomingImage;