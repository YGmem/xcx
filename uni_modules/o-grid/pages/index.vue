<template>
	<view>
		<view class="title">{{title}}</view>
		<view style="background-color:#eee;">

			<o-grid col="4" title="4列/其他参数默认">
				<o-grid-item text="普通页跳转" badge="99+" icon="/static/logo.png" @click="goTo('../test/test')" />
				<o-grid-item text="图标列表" icon="icon-viewlist" @click="goTo('../tabbar/tabbar','tabbar')" />
				<o-grid-item text="普通跳转" dot icon="/static/logo.png" @click="goTo('../test/test')" />
				<o-grid-item text="图标列表" icon="icon-camera-fill" @click="goTo('../tabbar/tabbar','tabbar')" />
				<o-grid-item text="普通跳转" icon="icon-feeds" @click="goTo('../test/test')" />
				<o-grid-item text="普通跳转" icon="icon-service" @click="goTo('../test/test')" />
				<o-grid-item text="普通跳转" icon="icon-feeds" @click="goTo('../test/test')" />
				<o-grid-item text="普通跳转" icon="icon-service" @click="goTo('../test/test')" />
			</o-grid>
		
			<o-grid col="4" border="0" square title="正方/无边/小图标" iconSize="sm">
				<o-grid-item text="内容标题" icon="icon-help1"></o-grid-item>
				<o-grid-item text="内容标题" badge="99+" icon="/static/logo.png"></o-grid-item>
				<o-grid-item text="内容标题" dot icon="/static/logo.png"></o-grid-item>
				<o-grid-item text="内容标题" icon="icon-help"></o-grid-item>
			</o-grid>
		
			<o-grid col="5" square title="5列/正方/小图标" iconSize="sm">
				<o-grid-item text="内容标题" icon="icon-help1"></o-grid-item>
				<o-grid-item text="内容标题" badge="99+" icon="/static/logo.png"></o-grid-item>
				<o-grid-item text="内容标题" dot icon="/static/logo.png"></o-grid-item>
				<o-grid-item text="内容标题" icon="icon-help"></o-grid-item>
				<o-grid-item text="内容标题" icon="/static/logo.png"></o-grid-item>
			</o-grid>
		
			<o-grid col="2" gutter radius title="两列/间隔/圆角">
				<o-grid-item text="内容标题" icon="icon-Newuserzone-fill"></o-grid-item>
				<o-grid-item text="内容标题" badge="99+" icon="/static/logo.png"></o-grid-item>
				<o-grid-item text="内容标题" dot icon="/static/logo.png"></o-grid-item>
				<o-grid-item text="内容标题" icon="icon-product-fill"></o-grid-item>
			</o-grid>
		
			<o-grid gutter title="间隔/其他默认">
				<o-grid-item text="内容标题" badge="99+" icon="/static/logo.png" />
				<o-grid-item text="内容标题" icon="icon-brand-fill" />
				<o-grid-item text="内容标题" dot icon="/static/logo.png" />
			</o-grid>
			
			<o-grid col="4" gutter square title="4列/间隔/方正">
				<o-grid-item text="内容标题" icon="icon-filter"></o-grid-item>
				<o-grid-item text="内容标题" badge="99+" icon="/static/logo.png"></o-grid-item>
				<o-grid-item text="内容标题" dot icon="/static/logo.png"></o-grid-item>
				<o-grid-item text="内容标题" icon="icon-block"></o-grid-item>
				<o-grid-item text="内容标题" icon="/static/logo.png"></o-grid-item>
				<o-grid-item text="内容标题" icon="/static/logo.png"></o-grid-item>
			</o-grid>
			
			<o-grid col="5" gutter square radius title="5列/间隔/圆角/正方/小图标" iconSize="sm">
				<o-grid-item text="内容标题1" icon="icon-pcm" @click="goTo('../test/test')" />
				<o-grid-item text="图标列表" badge="99+" icon="/static/logo.png" @click="goTo('../tabbar/tabbar','tabbar')" />
				<o-grid-item text="内容标题" :dot='true' icon="/static/logo.png" @click="goTo('../test/test')"></o-grid-item>
				<o-grid-item text="内容标题" icon="icon-jpge-fill"></o-grid-item>
				<o-grid-item text="内容标题" icon="/static/logo.png"></o-grid-item>
			</o-grid>
		</view>

	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				title: '简单好用的Grid宫格组件 modules版本',
			}
		},
		onLoad() {

		},
		methods: {
			goTo(url,type){
				switch (type) {
					case 'tabbar':{ //跳转到tabbar页
						uni.switchTab({ url:url })
						break;
					}
					case 'back':{ //返回上一页，只有当前为非tabbar页能起作用
						uni.navigateBack({ delta:1 });
						break;
					}
					case 'modal':{ //弹出对话框
						uni.showModal({
							title:url,
							content:'test'
						});
						break;
					}
					case 'toast':{ //弹出提示框
						uni.showToast({
							icon:'none',
							title:url
						});
						break;
					}
					default:{ //非tabbar页跳转
						if (!url) { console.log('没填写路径!') }
						else {
							uni.navigateTo({ url:url});
							console.log('点了')
						}
					}
				}
			}
		}
	}
</script>

<style scoped>
	page{background-color:#eee;}
	.title{
		text-align: center;
		line-height:4;
		padding-top:var(--status-bar-height);
	}
</style>