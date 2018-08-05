<template>
	<div class="news-hot">
		<div class="panel panel-default">
			<div class="panel-heading">英雄热榜</div>
			<ul class="list-group">
				<li class="list-group-item" v-for="(item,index) in news">
					<a :href="item.url" target="_blank">
						<span class="glyphicon glyphicon-list-alt"></span>
						{{item.des}}
						<span class="time">{{formatTime(item.date)}}</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name:'NewsHot',
		data(){
			return{
				// news:[{
				// 	'url':'#',
				// 	'des':'上半年我国内地出入境人员总数达3.1亿人次',
				// 	'date': new Date().getTime()
				// }]
			}
		},
		props:['news'],
		created(){
			// 
		},
		methods:{
			formatTime(ms){
				let date = new Date(ms);
				let y = date.getFullYear(),
					m = date.getMonth()+1,
					d = date.getDate();
				return this.checkLength(y)+'/'+this.checkLength(m)+'/'+this.checkLength(d);
			},
			checkLength(m){
				let str = m.toString();
				if (str.length==1) {
					return '0' + str;
				}
				return str;
			}
		}
	}
</script>
<style scoped="" lang="scss">
	@import '../../assets/scss/public.scss';

	.news-hot{
		.list-group-item{
			a{
				position: relative;
				@include line(1);
				display: block;
				box-sizing: border-box;
				padding-right: 90px;
			}
			.time{
				position: absolute;
				right: 0;
				top: 0;
			}
		}
	}
</style>