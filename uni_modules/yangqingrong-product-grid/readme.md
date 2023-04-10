# yangqingrong-product-grid

## 属性
`:products` 值是一个二维数组的数据变量名称，例如示例中的 products
## 事件
`@product_onclick_event` 当点击产品时，调用当前面面的方法名。
 
  
# 示例

```javascript

<template>
	<view class="container">
		 
		 <yangqingrong-product-grid :products="products" @product_onclick_event="product_onclick"></yangqingrong-product-grid>
		 
		 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 
				products:[],
				 
			}
		},
		onLoad() {
			this.products = [
				{
					image: 'https://store.d.wudimei.com/static/products/1.jpg',
					id:1,
					name:'黄小米新米5斤山东农家养胃小米月子油小米五谷杂粮小黄米',
					attr :'2500g',
					price: '17.91',
					number_sold: 0
				},
				{
					image:'https://store.d.wudimei.com/static/products/2.jpg',
					id:2,
					name:'新糯米 长粒农家自种 包粽子糯米粗粮五谷杂粮香粘5斤包邮',
					attr :'2500g',
					price: '15',
					number_sold: 123
				},
				{
					image:'https://store.d.wudimei.com/static/products/3.jpg',
					id:3,
					name:'爆米花玉米粒 球形蝶形小玉米爆米花专用原料家用商城批发1斤5斤',
					attr :'2500g',
					price: '22.8',
					number_sold: 257
				},
				{
					image:'https://store.d.wudimei.com/static/products/4.jpg',
					id:4,
					name:'广东揭阳特产小黄姜新鲜老姜土姜生姜小黄姜农家自种月子姜',
					attr :'500g',
					price: '7.8',
					number_sold: 257
				},
				 
				{
					image:'https://store.d.wudimei.com/static/products/5.jpg',
					id:5,
					name:'内蒙古黄豆农家自产大黄豆五谷杂粮豆类豆浆生豆芽黄豆批发',
					attr :'2500g',
					price: '20.59',
					number_sold: 257
				},
				{
					image:'https://store.d.wudimei.com/static/products/6.jpg',
					id:6,
					name:'新农家带壳大麦种子5斤可酿酒做种子麦芽糖发大麦苗榨汁炒大麦茶',
					attr :'2500g',
					price: '13.36',
					number_sold: 257
				}
			];
		},
		methods: {
			product_onclick(product){
				console.log('您点击了产品:',product)
			}
		}
	}
</script>

<style>
	.container {
		 
	}
 
</style>

```

vx 13714715608
