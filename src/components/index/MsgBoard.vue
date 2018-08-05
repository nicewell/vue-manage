<template>
	<div class="msg-board">
		<div class="panel panel-default">
			<div class="panel-heading">团队留言板</div>
			<div class="panel-body">
				<div class="col-md-7">
					<template v-for="(item,index) in chatRecords">
						<div class="media well">
							<div class="media-left media-middle">
								<img class="media-object" :src="checkSrc(item.photo)" :alt="item.user">
							</div>
							<div class="media-body">
								<p class="media-heading">{{item.user}}</p>
								<p>{{item.cont}}</p>
							</div>
						</div>
					</template>
				</div>
				<div class="col-md-5">
					<form method="post">
						<div class="form-group">
							<label for="msg">输入留言内容</label>
							<textarea class="form-control" id="msg" rows="5" cols="10" placeholder="请输入留言内容" v-model="val"></textarea>
							<a href="javascript:;" class="btn btn-default" @click="sendMsg">留言</a>
						</div>
					</form>
					<div class="panel panel-default">
					  <div class="panel-heading">团队联系手册</div>
					  <div class="panel-body">
					  	<ul class="list-group">
					  		<li class="list-group-item" v-for="(item,index) in contacts">{{item.name}}：<span class="glyphicon glyphicon-phone"></span>{{item.phone}}</li>
					  	</ul>
					  </div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'MsgBoard',
		data(){
			return{
				placeholderPhoto:'https://placehold.it/64x64',
				val:'',
				chatRecords:[
					{
						'user':'成龙',
						'photo':'',
						'cont':'李连杰呀，今晚请把网站程序升级一下哈，现在的系统有漏洞，安全起见！'
					}
				],
				contacts:[
					{
						'name':'站长(成龙)',
						'phone':'13134848615'
					},
					{
						'name':'技术(大牛)',
						'phone':'13134848615'
					},
					{
						'name':'推广(熊二)',
						'phone':'13134848615'
					},
					{
						'name':'客服(小美)',
						'phone':'0909-9989989'
					}
				]
			}
		},
		computed:{
			// checkSrc(src){
			// 	if (src!='') {
			// 		return src;
			// 	}else {
			// 		return this.placeholderPhoto;
			// 	}
			// }
		},
		methods:{
			sendMsg(){
				if (this.val.length<=0) {
					console.log('请输入内容……');
					return;
				}
				console.log(this.val);
				this.chatRecords.push({
					'user':'MyName',
					'photo':'',
					'cont':this.val
				});
				this.val = '';
			},
			checkSrc(src){
				console.log(src)
				if (src!='') {
					return src;
				}else {
					return this.placeholderPhoto;
				}
			}
		}
	}
</script>
<style scoped="" lang="scss">
	$w: 15px;
	textarea{
		resize: none
	}
	.media-heading{
		opacity: 0.5;
	}
	.media-middle{
		position: relative;
		width: 64px;
		height: 64px;
	}
	.media-middle img{
		border-radius: 50%;
	}
	.btn-default{
		margin-top: $w;
	}
	.list-group{
		margin-left: -$w;
		margin-right: -$w;
		.list-group-item{
			border: none;
		}
		.glyphicon{
			margin: 0 5px;
		}
	}
</style>