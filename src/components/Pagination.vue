<template>
	<div class="pagination-group">
		<ul class="pagination">
			<li @click="prevPage"><a href="javascript:;"><span>&laquo;</span></a></li>

			<li v-for="(item,index) in pages" :class="{'active':active==++index}" @click="turnPage(index)"><a href="javascript:;">{{item}}</a></li>

			<li @click="nextPage"><a href="javascript:;"><span>&raquo;</span></a></li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'Pagination',
		data(){
			return{
				active:2,
				pages:5
			}
		},
		methods:{
			prevPage(){
				if (this.active<=1) {
					return;
				}
				this.turnPage(--this.active);
			},
			nextPage(){
				if (this.active>=this.pages) {
					return;
				}
				this.turnPage(++this.active);
			},
			turnPage(m){
				this.active = m;
				console.log(this.active);
			}
		}
	}
</script>
<style scoped="" lang="scss">
	.pagination-group{
		// 
	}
</style>