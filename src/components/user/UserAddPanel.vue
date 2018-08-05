<template>
	<div class="user-add-panel">
		<div class="panel panel-default">
			<div class="panel-heading">
				<h4>添加用户</h4>
			</div>
			<div class="panel-body">
				<form action="" method="post">
					<div class="form-group">
						<label for="addName">用户名</label>
						<input type="text" name="" id="addName" class="form-control" placeholder="请输入用户名">
					</div>
					<div class="form-group">
						<label for="addPassword">密码</label>
						<input type="text" name="" id="addPassword" class="form-control" placeholder="请输入密码">
					</div>
					<div class="form-group">
						<label for="addEmail">邮箱</label>
						<input type="email" name="" id="addEmail" class="form-control" placeholder="请输入用户邮箱">
					</div>
					<div class="form-group">
						<label for="addUserGroup">所属用户组</label>
						<select id="addUserGroup" class="form-control">
							<option>限制会员</option>
							<option>新手上路</option>
							<option>注册会员</option>
							<option>中级会员</option>
							<option>高级会员</option>
						</select>
					</div>
				</form>
			</div>
			<div class="panel-footer">
				<button type="button" class="btn btn-default">重置</button>
				<button type="button" class="btn btn-primary" @click="saveForm">保存</button>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'UserAddPanel',
		data(){
			return{
				// 
			}
		},
		methods:{
			saveForm(){
				let data = {
					'id':1,
					'name':'玄武',
					'email':'xuanwu@gmail.com',
					'lock': false
				};
				console.log(data)
			}
		}
	}
</script>
<style scoped="" lang="scss">
	.user-add-panel{
		min-height: 800px;
	}
</style>