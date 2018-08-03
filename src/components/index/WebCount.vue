<template>
	<div class="web-count">
		<div class="panel panel-default">
			<div class="panel-heading">网站数据统计</div>
			<div class="panel-body">
				<table class="table table-hover">
					<thead>
						<tr>
							<th>统计项目</th>
							<th>今日</th>
							<th>昨日</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item,index) in countData">
							<td>{{item.tag}}</td>
							<td>{{item.tNum}}</td>
							<td>{{item.yNum}}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'WebCount',
		data(){
			return{
				countData:[
					{
						'tag':'注册会员',
						'tNum':'200',
						'yNum':'400'
					},
					{
						'tag':'登录会员',
						'tNum':'4100',
						'yNum':'5112'
					},
					{
						'tag':'今日发帖',
						'tNum':'1540',
						'yNum':'4511'
					},
					{
						'tag':'转载次数',
						'tNum':'150',
						'yNum':'110'
					}
				]
			}
		}
	}
</script>
<style scoped="" lang="scss">
	.web-count{
		.table{
			margin-bottom: 0;
		}
		.panel-body{
			padding: 0 15px;
		}
		.table>tbody>tr>td,
		.table>tbody>tr>th,
		.table>tfoot>tr>td,
		.table>tfoot>tr>th,
		.table>thead>tr>td,
		.table>thead>tr>th{
			padding: 10px 8px;
		}
	}
</style>