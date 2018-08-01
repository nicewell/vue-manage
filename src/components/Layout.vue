<template>
	<div class="layout">
		<div class="container">
			<div class="row">
				<div class="col-md-2">
					<div class="list-group">
						<a href="user.html" class="list-group-item active">用户管理</a>
						<a href="user-search.html" class="list-group-item">用户搜索</a>
						<a href="#" role="button" class="list-group-item" data-toggle="modal" data-target="#myModal">添加用户</a>
					</div>
				</div>
				<div class="col-md-10">
					<UserManager></UserManager>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import UserManager from './user/UserManager'
	export default{
		name:'Layout',
		data(){
			return{
				// 
			}
		},
		props:{
			'sidebar':[Object,Array,String]
		},
		components:{
			UserManager
		}
	}
</script>
<style scoped="" lang="scss">
	.layout{

	}
</style>