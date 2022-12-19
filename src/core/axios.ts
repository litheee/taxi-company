import axios from 'axios'

const isDev = process.env.NODE_ENV === 'development'

export const API = axios.create({
	baseURL: isDev ? '/api' : 'https://taxivoshod.ru/api',
	withCredentials: true
})

API.interceptors.request.use((req) => {
	return req
})
