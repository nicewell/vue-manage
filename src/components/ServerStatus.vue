<template>
	<div class="server-status">
		<div class="panel panel-default">
			<div class="panel-heading">服务器状态</div>
			<div class="panel-body">
				<template v-for="(item,index) in serverData">
					<p>{{item.name}}：{{item.percent}}%</p>
					<div class="progress margin-bottom15">
					  <!-- <div class="progress-bar progress-bar-striped" :class="item.type" role="progressbar" :aria-valuenow="item.percent" aria-valuemin="0" aria-valuemax="100" :style="{width: item.percent+'%'}"></div> -->
					  <div class="progress-bar progress-bar-striped" :class="getSta(item.percent)" role="progressbar" :aria-valuenow="item.percent" aria-valuemin="0" aria-valuemax="100" :style="{width: item.percent+'%'}"></div>
					</div>
				</template>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'ServerStatus',
		data() {
			return {
				serverData: [{
					'name': '内存使用率',
					'percent': 80,
					'type': ''
				}, {
					'name': '数据库使用率',
					'percent': 20,
					'type': ''
				}, {
					'name': '磁盘使用率',
					'percent': 60,
					'type': ''
				}, {
					'name': 'CPU使用率',
					'percent': 92,
					'type': ''
				}]
			}
		},
		computed: {
			getStatus(m) {
				let status = 'success';
				if (m > 50) {
					status = 'info';
				}
				if (m > 70) {
					status = 'warning';
				}
				if (m > 90) {
					status = 'danger';
				}
				return 'progress-bar-' + status;
			}
		},
		created() {
			this.resetProgressBar()
		},
		methods: {
			resetProgressBar() {
				let data = this.serverData;
				let wekit = 'progress-bar-';
				data.forEach((item, index) => {
					let m = item.percent;
					let status = 'success';
					if (m > 50) {
						status = 'info';
					}
					if (m > 70) {
						status = 'warning';
					}
					if (m > 90) {
						status = 'danger';
					}
					item.type = wekit + status;
				});
			},
			// 为何计算属性此操作不行
			getSta(m) {
				let status = 'success';
				if (m > 50) {
					status = 'info';
				}
				if (m > 70) {
					status = 'warning';
				}
				if (m > 90) {
					status = 'danger';
				}
				return 'progress-bar-' + status;
			}
		}
	}
</script>
<style scoped="" lang="scss">
	// 
</style>