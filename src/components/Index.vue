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
	import Warning from './Warning'
	import WebCount from './WebCount'
	import NewsHot from './NewsHot'
	import TodayCount from './TodayCount'
	import ServerStatus from './ServerStatus'
	import MsgBoard from './MsgBoard'

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
<style lang="scss">
	*{
		-webkit-tap-highlight-color:rgba(0,0,0,0);
		outline: none;
	}
	.layout{
		// 
	}
</style>