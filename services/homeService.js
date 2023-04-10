export const getSwiper = ()=> uni.request({ // 轮播图
	url:"http://localhost:3000/swiperList"
})

export const getType = (params)=>uni.request({ // 类别
	url:"http://localhost:3000/steelList",
	params
})

export const getPro = (data) => uni.request({
	url:"http://localhost:3000/goodsList",
	data
})