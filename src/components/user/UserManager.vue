<template>
	<div class="user-manager">
		<div class="page-header userM">
			<h2>用户管理</h2>
		</div>
		<ul class="nav nav-tabs">
			<li class="active"><a href="javascript:;">用户列表</a></li>
		</ul>
		<table class="table">
			<thead>
				<tr>
					<th>ID</th>
					<th>用户名</th>
					<th>邮箱</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(user,index) in users" :class="{'lock':user.lock}">
					<th>{{user.id}}</th>
					<td>{{user.name}}</td>
					<td>{{user.email}}</td>
					<td>
						<div role="presentation" class="dropdown">
							<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">操作<span class="caret"></span></button>
							<ul class="dropdown-menu">
								<li><a href="javascript:;">删除</a></li>
								<li><a href="javascript:;" @click="toggleLock(index)">{{getLock}}</a></li>
								<li><a href="javascript:;">发送邮件</a></li>
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
		name:'UserManager',
		components:{
			Pagination
		},
		data(){
			return{
				users:[
					{
						'id':1,
						'name':'张三',
						'email':'zhangsan@gmail.com',
						'lock': true
					},
					{
						'id':2,
						'name':'laowang',
						'email':'laowang@gmail.com',
						'lock': false
					}
				]
			}
		},
		computed:{
			getLock(lock){
				// console.log('lock:'+lock);
				// if (lock) {
				// 	return '解锁';
				// }else {
				// 	return '锁定';
				// }
				return '锁定';
			}
		},
		methods:{
			toggleLock(m){
				this.users[m].lock = !this.users[m].lock;
			}
		}
	}
</script>
<style scoped="" lang="scss">
	.user-manager{
		th,td{
			vertical-align: middle;
		}
		tr{
			&.lock{
				color: #f00;
				background-color: #ccc;
			}
		}
		.caret{
			margin: 0 5px;
		}
	}
</style>