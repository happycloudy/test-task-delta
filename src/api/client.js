const base = 'https://api.rawg.io/api/'
const API_KEY = '2e4a98b83b704c77b73ed395a4b31a17'

export const client = async (uri, params, body) => {
	const url = new URL(uri, base)
	url.searchParams.append('key', API_KEY)

	for (const param in params) {
		if (params[param]) {
			url.searchParams.append(param, params[param])
		}
	}

	const res = await fetch(url.toString(), {
		method: 'GET',
		body: body
	})

	return res.json()
}