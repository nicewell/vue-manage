<template>
	<div class="web-count">
		<div class="panel panel-default">
			<div class="panel-heading">数据统计</div>
			<div class="panel-body">
				<table class="table table-hover">
					<thead>
						<tr>
							<th>统计条目</th>
							<th>iid</th>
							<th>iname</th>
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

export default {
  name: 'WebCount',
  data() {
    return {
      // 
    }
  },
  props: {
    countData: {
      type: Array,
      deafult: []
    }
  },
  watch: {
    // 
  }
}

</script>
<style scoped="" lang="scss">
	.web-count{
		.table{
			margin-bottom: 0;
		}
		th{
			text-transform: uppercase;
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