import React, {useEffect, useState} from 'react';
import {GalleryItem, GalleryWrap} from '@/app/game/[slug]/components/Gallery/styles';
import ZoomingImage from '@/app/game/[slug]/components/ZoomingImage';
import {getScreenshots} from '@/api/game/getScreenshots';

const Gallery = ({id = ''}) => {
	const [slide, setSlide] = useState(0)
	const [images, setImages] = useState([])

	const handleNextSlide = () => setSlide(prev => prev === images.length - 1 ? 0 : ++prev)
	const handlePrevSlide = () => setSlide(prev => prev === 0 ? images.length - 1 : --prev)

	useEffect(() => {
		if (!images.length) {
			getScreenshots(id).then(res => {
				setImages(res.results)
			})
		}
	}, [id, images.length])

	return (
		images.length ?
			<GalleryWrap>
				{
					images.map((image, index) => (
						<GalleryItem key={image.id} $active={index === slide}>
							<ZoomingImage src={image.image}
														height={image.height}
														width={image.width}
														priority
														alt={'Gallery image'}/>
						</GalleryItem>
					))
				}
				<button onClick={handlePrevSlide} className={'previous'}> &lt;</button>
				<button onClick={handleNextSlide} className={'next'}> &gt;</button>
			</GalleryWrap> :
			undefined
	);
};

export default Gallery;