<template>
	<view>
		<view class="select"> 
			<uni-data-select
			class="selcet-item"
		      v-model="value"
		      :localdata="typelist"
		      @change="change"
		    ></uni-data-select>
			<view></view>
		</view>
		<button open-type="getUserInfo" @click="getUser">登录</button>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	
	export default {
		data() {
			return {
				value:0,
				typelist:[]
			}
		},
		onLoad(){
			this.typelist = this.typeList.map(item=>({ value: item.id, text:item.title }))
			
			console.log(this.typelist);
		},
		computed:{
			...mapState(["count","typeList"])
		},
		methods: {
			...mapMutations(["inieTypeList"]),
			change(){
				
			},
			getUser(){
				wx.getUserProfile({
					desc:"完善用户信息",
					success:(res)=> {
						console.log(res);
					}
				})
			}
		}
	}
</script>

<style>
	.select{
		display: flex;
	}
	.select .selcet-item{
		flex: 1;
	}
	.select view{
		flex: 4;
	}

</style>
