<template>
	<div class="cont-add">
		<div class="page-header userM">
			<h3>添加内容</h3>
		</div>
		<ul class="nav nav-tabs">
			<li class="active"><a href="javascript:;">添加内容</a></li>
		</ul>
		<form action="" method="post">
			<div class="form-group">
				<label for="addTitle">标题</label>
				<input type="text" name="" id="addTitle" class="form-control" placeholder="请输入文章标题">
			</div>
			<div class="form-group">
				<label for="addContent">文章内容</label>
				<textarea id="addContent" class="form-control" rows="15" cols="10" placeholder="请输入文章正文部分"></textarea>
			</div>
			<div class="checkbox">
				<label for=""><input type="checkbox" name="" id="">全局置顶</label>
				<button type="submit" class="btn btn-default pull-right">发布文章</button>
			</div>
		</form>
	</div>
</template>
<script>
	export default{
		name:'ContAdd',
		data(){
			return{
				// 
			}
		}
	}
</script>
<style scoped="" lang="scss">
	textarea{
		resize: none;
	}
	.cont-add{
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
		form{
			margin-top: 15px;
		}
	}
</style>