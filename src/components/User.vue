<template>
	<div class="user">
		<Layout :sidebar="sidebar"></Layout>
	</div>
</template>
<script>
	import Layout from './Layout.vue'
	export default{
		name:'User',
		components:{
			Layout
		},
		data(){
			return{
				sidebar:[{
					'tag':'用户管理',
					'path':''
				},{
					'tag':'用户搜索',
					'path':''
				},{
					'tag':'添加用户',
					'path':''
				}]
			}
		}
	}
</script>
<style scoped="" lang="scss">
	.user{
		// 
	}
</style>