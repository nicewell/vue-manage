<template>
	<div class="today-count">
		<div class="panel panel-default">
			<div class="panel-heading">今日统计</div>
			<div class="panel-body">
				<div class="chart" :id="chartOps.id" :option="chartOps.option"></div>
			</div>
		</div>
	</div>
</template>
<script>
	import HighCharts from 'highcharts'
	export default{
		name:'TodayCount',
		data(){
			return{
				// 
			}
		},
		props:{
			chartOps:{
				type:Object
			}
		},
		mounted(){
			// console.log('child')
			// console.log(this.chartOps)
			// setTimeout(()=>{
			// 	console.log('child')
			// 	console.log(this.chartOps)
			// 	HighCharts.chart(this.chartOps.id, this.chartOps.option);
			// }, 1000);
		},
		watch:{
			'chartOps':{
				handler: function(val, oldVal) {
					console.log(val, oldVal)
					this.initHighCharts();
					// HighCharts.chart(this.chartOps.id, this.chartOps.option);
				},
				deep:true
			}
		},
		methods:{
			initHighCharts(){
				HighCharts.chart(this.chartOps.id, this.chartOps.option);
			}
		}
	}
</script>
<style scoped="" lang="scss">
	// 
</style>