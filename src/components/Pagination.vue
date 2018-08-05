<template>
	<div class="pagination-group">
		<ul class="pagination">
			<li @click="prevPage"><a href="javascript:;"><span>&laquo;</span></a></li>

			<li v-for="(item,index) in pages.total" :class="{'active':pages.active==++index}" :key="index" @click="turnPage(index)"><a href="javascript:;">{{item}}</a></li>

			<li @click="nextPage"><a href="javascript:;"><span>&raquo;</span></a></li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'Pagination',
		data(){
			return{
				// 
			}
		},
		props:{
			pages:{
				active:{
					type:Number,
					default:1
				},
				total:[Number]
			}
		},
		methods:{
			prevPage(){
				if (this.pages.active<=1) {
					return;
				}
				this.turnPage(--this.pages.active);
			},
			nextPage(){
				if (this.pages.active>=this.pages.total) {
					return;
				}
				this.turnPage(++this.pages.active);
			},
			turnPage(m){
				this.pages.active = m;
				console.log(this.pages.active);
			}
		}
	}
</script>
<style scoped="" lang="scss">
	.pagination-group{
		// 
	}
</style>