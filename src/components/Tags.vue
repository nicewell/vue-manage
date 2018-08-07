<template>
	<div class="tags">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="page-header">
						<h4>标签管理</h4>
					</div>
				</div>
				<div class="col-md-12">
					<form action="" method="post" v-on:submit.prevent>
						<div class="col-md-10">
							<input type="text" name="" id="" class="form-control" placeholder="请输入需要添加的标签" v-model="placeHolder" @keyup.enter="addTag()" @keyup.ctrl.enter="clear">
						</div>
						<div class="col-md-2">
							<button type="button" class="btn btn-default" @click="addTag()">添加</button>
						</div>
					</form>
				</div>
				<div class="col-md-12">
					<template v-for="(item,index) in tags">
						<div class="alert alert-info alert-dismissible pull-left">
							<a href="javascript:;" class="close" @click="delTag(item.id)"><span>&times;</span></a>
							<strong>{{item.tag}}</strong>
						</div>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'Tags',
		data(){
			return{
				placeHolder:'',
				id:1,
				tags:[
					{
						'id':1,
						'tag':'King'
					},
					{
						'id':2,
						'tag':'CF'
					},
					{
						'id':3,
						'tag':'DNF'
					}
				]
			}
		},
		methods:{
			delTag(id){
				let index;
				this.tags.forEach((item, i) => {
					if (item.id==id) {
						index = i;
					}
				});
				this.tags.splice(index, 1);
				this.setItems();
			},
			addTag(){
				if (this.placeHolder.length<=0) {
					return;
				}
				this.tags.push({
					'id':++this.id,
					'tag':this.placeHolder
				});
				this.placeHolder = '';
				this.setItems();
			},
			initId(){
				this.id = this.tags[this.tags.length-1].id;
			},
			getItems(){
				// let arr = JSON.parse(localStorage.getItem('tags_key')||'[]');
				let arr = JSON.parse(localStorage.getItem('tags_key')||JSON.stringify(this.tags));
				this.tags = arr;
			},
			setItems(){
				localStorage.setItem('tags_key', JSON.stringify(this.tags));
			},
			clear(){
				localStorage.clear();
				this.tags.splice(0,this.tags.length);
			}
		},
		created(){
			this.getItems();
			this.initId();
		}
	}
</script>
<style scoped="" lang="scss">
	.tags{
		.page-header{
			margin: 0;
		}
		form{
			display: block;
			margin: 0 -15px 20px;
			overflow: hidden;
			&>div{
				margin-top: 20px;
			}
		}
		.alert{
			& + .alert{
				margin-left: 15px;
			}
		}
	}
</style>