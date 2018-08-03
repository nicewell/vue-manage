<template>
	<div class="chart">
		<div :id="id" :option="option"></div>
	</div>
</template>
<script>
	// var HighCharts = require('highcharts')
	import HighCharts from 'highcharts'

	export default{
		name: 'Chart',
		data() {
			return {
				// 
			}
		},
		// 验证类型
		props: {
			id: {
				type: String
			},
			option: {
				type: Object
			}
		},
		mounted() {
			HighCharts.chart(this.id, this.option)
		}
	}
</script>
<style scoped="" lang="scss">
	// 
</style>