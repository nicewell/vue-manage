<template>
	<div class="today-count">
		<div class="panel panel-default">
			<div class="panel-heading">今日访客统计</div>
			<div class="panel-body">
				<Chart :id="id" :option="option"></Chart>
			</div>
		</div>
	</div>
</template>
<script>
	import Chart from './Chart'
	export default{
		name:'TodayCount',
		components:{
			Chart
		},
		data(){
			return{
				id: 'test',
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
					//两条数据
					series: [{
						name: 'PC端',
						data: [314,455,755,814,999,905,1000]
					}, {
						name: '移动端',
						data: [114,255,455,414,599,605,500]
					}]
				}
			}
		},
		created(){
			
		},
		methods:{
			
		}
	}
</script>
<style scoped="" lang="scss">
	.today-count{
		
	}
</style>