import {client} from '@/api/client';

const uri = 'games'

export const getGames = async (filter) => {
	return await client(uri, filter)
}