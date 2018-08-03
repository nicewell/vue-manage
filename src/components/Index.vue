<template>
	<div class="layout">
		<div class="container">
			<Warning></Warning>
			<div class="row">
				<div class="col-md-6">
					<WebCount></WebCount>
				</div>
				<div class="col-md-6">
					<NewsHot></NewsHot>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<TodayCount></TodayCount>
				</div>
				<div class="col-md-6">
					<ServerStatus></ServerStatus>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<MsgBoard></MsgBoard>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Warning from './index/Warning'
	import WebCount from './index/WebCount'
	import NewsHot from './index/NewsHot'
	import TodayCount from './index/TodayCount'
	import ServerStatus from './index/ServerStatus'
	import MsgBoard from './index/MsgBoard'

	export default{
		name:'Container',
		components:{
			Warning,
			WebCount,
			NewsHot,
			TodayCount,
			ServerStatus,
			MsgBoard
		},
		data(){
			return{
				// 
			}
		}
	}
</script>
<style lang="scss" scoped>
	*{
		-webkit-tap-highlight-color:rgba(0,0,0,0);
		outline: none;
	}
	.layout{
		// 
	}
</style>