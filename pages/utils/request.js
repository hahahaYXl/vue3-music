
export const baseURl = 'http://localhost:3000'

export const request = (options)=>{
	return new Promise ((resolve,reject)=>{
		uni.request({
			url: baseURl + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			header: {
				'token':uni.getStorageSync('token') || ''
			},
			success: (res) => {
				resolve(res)
			},
			fail:(err)=>{
				reject(err)
			}
		})
	}).catch((err)=>{
		console.log('111',err)
	})
}