<template>
	<div :id="id" class="layout">
		<div class="container">
			<div class="row">
				<div class="col-md-2">
					<div class="list-group">
						<template v-for="(item,index) in navs">
							<router-link class="list-group-item" :to="item.path" :key="index" active-class="active">{{item.name}}</router-link>
						</template>
					</div>
				</div>
				<div class="col-md-10" @saveData="updata">
					<router-view/>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import UserManager from './user/UserManager'
	export default{
		name:'Layout',
		components:{
			UserManager
		},
		data(){
			return{
				// 
			}
		},
		props:{
			id:String,
			navs:[Object,Array,String]
		},
		methods:{
			updata(data){
				console.log(data);
			}
		},
		created(){
			console.log('ok')
		}
	}
</script>
<style scoped="" lang="scss"></style>