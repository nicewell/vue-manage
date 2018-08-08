<template>
	<div class="today-count">
		<div class="panel panel-default">
			<div class="panel-heading">今日统计</div>
			<div class="panel-body">
				<div class="chart" :id="chartOps.id"></div>
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
				chartOps:{
					id:'chart',
					option: {
						chart: {
							type: 'spline',
							height: 280,
							// margin: [0, 0, 0, 0]
						},
						credits: {
							enabled: false
						},
						plotOptions: {
							spline: {
								// 数据标签
								dataLabels: {
									enabled: false
								},
								// 鼠标跟踪，对应的提示框、点击事件
								enableMouseTracking: true
							}
						},
						title: {
							text: '' //表头文字
						},
						//x轴显示的内容
						xAxis: {
							categories: ['周一','周二','周三','周四','周五','周六','周日'],
						},
						//y轴显示的内容
						yAxis: {
							title: {
								text: ''
							}
						},
						// 两条数据
						series: [{
							name: 'PC端',
							data: [314,455,755,814,999,905,1000]
							// data: []
						}, {
							name: '移动端',
							data: [114,255,455,414,599,605,500]
							// data: []
						}]
					}
				}
			}
		},
		props:{
			series:{
				type:Array
			}
		},
		mounted(){
<<<<<<< HEAD
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
=======
			this.initChart();
		},
		methods:{
			initChart(){
				this.$set(this.chartOps.option,'series',this.series);
				HighCharts.chart(this.chartOps.id, this.chartOps.option);
			}
		},
		watch:{
			'series': {
				deep: true,
				handler: function(val, oldVal) {
					this.initChart();
				}
			}
		},
>>>>>>> 5c8a42fabae0ed8b1b1ed0198aaf9d404aea0647
	}
</script>
<style scoped="" lang="scss">
	// 
</style>