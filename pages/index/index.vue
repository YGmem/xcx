<template>
	<div>
		  <view class="app-page">
		         <weixi-auto-swiper :items="imgs" />
		     </view>
			 
		<o-grid col="4" title="钢材类别" v-if="list.length">
			<o-grid-item v-for="(item,index) in list" :key="index"  :text="item.title" dot :icon="item.image" @click="gotoSearch(item.id)"/>
		</o-grid>
	</div>
</template>

<script>

	import {getSwiper,getType,getPro} from '@/services/homeService.js'
	import {mapMutations} from 'vuex'
	import aa from '@/static/bg1.png'
	import textSwiper from '../../uni_modules/weixi-auto-swiper/components/weixi-auto-swiper/weixi-auto-swiper.vue'
	
	export default {
		components: {
			textSwiper
		},
		data() {
			return {
				title: 'Hello',
				imgs: ['/static/bg1.png', '/static/bg2.png'
					
				],
				list: [],
				products: [],
			}
		},
		onReady() {
			
		},
		async onLoad() {
			// 获取轮播图
			const {data:swiper} = await getSwiper()
			// this.imgs = swiper.map(item=> ({src:item.img,content:item.img}) )
			this.imgs = swiper.map(item=> item.img )
			
			// 获取类别
			const {data:type}=  await getType() 
			this.inieTypeList([...type])
			if(type.length > 8){
			 this.list = type.slice(0,7).concat({title:"更多",image:'/static/更多.png'})
			}
			
			// 获取商品
			const {data:pro} = await getPro({_page:1,_limit:5})
			this.products = pro.map(item=>({...item,image:item.img[0]}))
			
		},
		methods: {
			...mapMutations(["inieTypeList"]),
			click(name) {
				this.$refs.uToast.success(`点击了第${name}个`)
			},
			product_onclick(product) {
				console.log('您点击了产品:', product)
			},
			gotoSearch(id){
				uni.navigateTo({
					url:"/pages/search/search"
				})
			}
		}
	}
</script>

<style lang="scss">
	.grid-text {
		font-size: 14px;
		color: #909399;
		padding: 10rpx 0 20rpx 0rpx;
		/* #ifndef APP-PLUS */
		box-sizing: border-box;
		/* #endif */
	}
</style>
