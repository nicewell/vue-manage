<template>
	<div class="header">
		<!-- 导航区域 -->
		<nav class="navbar navbar-default">
		  <div class="container">
		    <div class="navbar-header">
		      <span class="logo">
		      	<router-link to="/"><img src="../assets/logo.png" alt=""></router-link>
		      </span>
		      <button class="navbar-toggle" data-toggle="collapse" data-target="#nav">
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>
		      </button>
		    </div>
		    <div class="navbar-collapse collapse" id="nav">
		      <ul class="nav navbar-nav">
		      	<router-link v-for="(item,index) in navList" :to="item.path" :key="index" tag="li" active-class="active">
		      		<a><span class="glyphicon" :class="item.icon"></span>{{item.tag}}</a>
		      	</router-link>
		      </ul>
		      <ul class="nav navbar-nav navbar-right">
		        <li><a href="#"><span class="glyphicon glyphicon-user"></span>name</a></li>
		        <li><a href="#"><span class="glyphicon glyphicon-off"></span>退出</a></li>
		      </ul>
		    </div>
		  </div>
		</nav>
		<!-- 导航区域结束 -->
	</div>
</template>
<script>
	export default {
		name: 'Header',
		data() {
			return {
				navList:[
					{
						'tag':'后台首页',
						'icon':'glyphicon-home',
						'path':'/'
					},
					{
						'tag':'用户管理',
						'icon':'glyphicon-user',
						'path':'/user'
					},
					{
						'tag':'内容管理',
						'icon':'glyphicon-list-alt',
						'path':'/content'
					},
					{
						'tag':'标签管理',
						'icon':'glyphicon-tags',
						'path':'/tags'
					}
				]
			}
		}
	}
</script>
<style scoped="" lang="scss">
	.navbar-header{
	  .logo{
	    display: inline-block;
	    padding: 5px 0;
	    margin: 0 30px;
	    img{
	      width: auto;
	      height: 40px;
	    }
	  }
	}
	.navbar-collapse{
	  .glyphicon{
	    margin-right: 10px;
	  }
	  .caret{
	    margin: 0 5px;
	  }
	}
</style>