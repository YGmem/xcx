<template>
	<view class="yangqingrong-product-grid">
		<view v-for="p in products" :key="p.id" class="yangqingrong-product-grid-cell" @click="product_onclick(p)">

			<image :src="p.image" class="img"></image>


			<view class="name">{{p.name}}</view>
			<view class="attr">{{p.attr}}</view>
		<!-- 	<view class="sell_info">
				<view class="price">&yen;{{p.price}}</view>
				<view class="number_sold">{{p.number_sold}}人买过</view>
			</view> -->
		</view>
	</view>
</template>
<script>
	export default {
		props: {
			products: {
				type: Array,
				default: []
			}
		},
		methods: {
			product_onclick: function(p) {
				 
				this.$emit('product_onclick_event',  p );
			}
		}
	}
</script>
<style lang="scss">
	.yangqingrong-product-grid {
		background-color: #eaeaea;

		display: grid;
		grid-template-columns: repeat(auto-fill, 355rpx);
		row-gap: 10rpx;
		column-gap: 10rpx;
		justify-content: center;
		align-content: center;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
	}

	.yangqingrong-product-grid-cell {
		background-color: #FFFFFF;
		border-radius: 10rpx;
		overflow: hidden;

		.img {

			width: 365rpx;
			height: 365rpx;
		}



		.name {
			font-size: 16rpx;
			margin-top: 8rpx;
			margin-left: 15rpx;
			margin-right: 15rpx;

			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
		}

		.attr {
			color: #666666;
			font-size: 14rpx;
			margin-left: 15rpx;
			margin-right: 15rpx;
		}

		.sell_info {
			display: flex;
			justify-content: space-between;
			margin-top: 3rpx;
			margin-left: 15rpx;
			margin-right: 15rpx;
			margin-bottom: 15rpx;

			.price {
				color: #FF3535;
				font-size: 20rpx;
			}

			.number_sold {
				color: #666666;
				font-size: 12rpx;
				margin-top: 8rpx;
			}
		}
	}
</style>
