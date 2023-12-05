import {client} from '@/api/client';

const uri = (id) => `games/${id}/screenshots`

export const getScreenshots = async (id) => {
	return await client(uri(id))
}