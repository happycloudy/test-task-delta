import {client} from '@/api/client';

const uri = (slug) => `games/${slug}`

export const getGameBySlug = async (slug) => {
	return await client(uri(slug))
}