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
			HighCharts.chart(this.chartOps.id, this.chartOps.option);
		},
		watch:{
			'chartOps.option.series':function(val,oldVal){
				console.log(val,oldVal)
				// HighCharts.chart(this.chartOps.id, this.chartOps.option);
			}
		},
		methods:{
			
		}
	}
</script>
<style scoped="" lang="scss">
	// 
</style>