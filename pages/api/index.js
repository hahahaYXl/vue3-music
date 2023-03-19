import { request } from '../utils/request.js'

export const getBannerApi = ({url, method, type})=>{
	return request({
		url,
		method,
		type
	})
}