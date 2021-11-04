const BASE_API_URL = "https://tidsbanken-experis.azurewebsites.net/api/"

export const fetchAllRequests = () => {
	return fetch(BASE_API_URL + "request", {
		method: 'GET',
		headers: {
			'Accept':'*/*',
			'Authorization': `Bearer ${sessionStorage.getItem('authentication')}`,
			'mode':'cors'
		}
	})
	.then(result => result.json())
}

export const postRequest = (requestBody) => {
    const request = {
		method: 'POST',
		/* headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${sessionStorage.getItem('authentication')}`,
			'mode':'cors'
		}, */
		body: JSON.stringify(requestBody)
	}
	return fetch(BASE_API_URL + "request", request)
		.then(response => response.json())
}