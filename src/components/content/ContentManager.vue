<template>
	<div class="cont-manager">
		<div class="page-header">
			<h3>内容管理</h3>
		</div>
		<ul class="nav nav-tabs">
			<li class="active"><a href="javascript:;">内容管理</a></li>
		</ul>
		<table class="table">
			<thead>
				<tr>
					<th>文章标题</th>
					<th>作者</th>
					<th>发布时间</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>产品经理常犯的7大错误，你造吗？</th>
					<td>张三</td>
					<td>2017-05-05</td>
					<td>
						<div role="presentation" class="dropdown">
						   <button class="btn btn-default dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">操作<span class="caret"></span></button>
						   <ul class="dropdown-menu">
						     <li><a href="#">编辑</a></li>
						     <li><a href="#">删除</a></li>
						     <li><a href="#">全局置顶</a></li>
						   </ul>
						</div>
					</td>
				</tr>
				<tr>
					<th>产品经理常犯的7大错误，你造吗？</th>
					<td>张三</td>
					<td>2017-05-05</td>
					<td>
						<div role="presentation" class="dropdown">
						   <button class="btn btn-default dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">操作<span class="caret"></span></button>
						   <ul class="dropdown-menu">
						     <li><a href="#">编辑</a></li>
						     <li><a href="#">删除</a></li>
						     <li><a href="#">全局置顶</a></li>
						   </ul>
						</div>
					</td>
				</tr>
				<tr>
					<th>怎样才能成为优秀的iOS开发工程师</th>
					<td>王武</td>
					<td>2017-05-06</td>
					<td>
						<div role="presentation" class="dropdown">
						   <button class="btn btn-default dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">操作<span class="caret"></span></button>
						   <ul class="dropdown-menu">
						     <li><a href="#">编辑</a></li>
						     <li><a href="#">删除</a></li>
						     <li><a href="#">全局置顶</a></li>
						   </ul>
						</div>
					</td>
				</tr>
				<tr>
					<th>产品经理常犯的7大错误，你造吗？</th>
					<td>张三</td>
					<td>2017-05-05</td>
					<td>
						<div role="presentation" class="dropdown">
						   <button class="btn btn-default dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">操作<span class="caret"></span></button>
						   <ul class="dropdown-menu">
						     <li><a href="#">编辑</a></li>
						     <li><a href="#">删除</a></li>
						     <li><a href="#">全局置顶</a></li>
						   </ul>
						</div>
					</td>
				</tr>
				<tr>
					<th>产品经理常犯的7大错误，你造吗？</th>
					<td>张三</td>
					<td>2017-05-05</td>
					<td>
						<div role="presentation" class="dropdown">
						   <button class="btn btn-default dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">操作<span class="caret"></span></button>
						   <ul class="dropdown-menu">
						     <li><a href="#">编辑</a></li>
						     <li><a href="#">删除</a></li>
						     <li><a href="#">全局置顶</a></li>
						   </ul>
						</div>
					</td>
				</tr>
				<tr>
					<th>产品经理常犯的7大错误，你造吗？</th>
					<td>张三</td>
					<td>2017-05-05</td>
					<td>
						<div role="presentation" class="dropdown">
						   <button class="btn btn-default dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">操作<span class="caret"></span></button>
						   <ul class="dropdown-menu">
						     <li><a href="#">编辑</a></li>
						     <li><a href="#">删除</a></li>
						     <li><a href="#">全局置顶</a></li>
						   </ul>
						</div>
					</td>
				</tr>
				<tr>
					<th>产品经理常犯的7大错误，你造吗？</th>
					<td>张三</td>
					<td>2017-05-05</td>
					<td>
						<div role="presentation" class="dropdown">
						   <button class="btn btn-default dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">操作<span class="caret"></span></button>
						   <ul class="dropdown-menu">
						     <li><a href="#">编辑</a></li>
						     <li><a href="#">删除</a></li>
						     <li><a href="#">全局置顶</a></li>
						   </ul>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
		<nav class="pull-right">
			<Pagination></Pagination>
		</nav>
	</div>
</template>
<script>
	import Pagination from '../Pagination'

	export default{
		name:'ContManager',
		components:{
			Pagination
		},
		data(){
			return{
				// 
			}
		}
	}
</script>
<style scoped="" lang="scss">
	.cont-manager{
		.page-header{
		    margin: 0 0 20px;
		    .h1, .h2, .h3, h1, h2, h3{
		    	margin-top: 0;
		    }
		}
		th,td{
			vertical-align: middle;
		}
		.caret{
			margin: 0 5px;
		}
	}
</style>