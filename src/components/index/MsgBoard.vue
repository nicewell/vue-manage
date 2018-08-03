<template>
	<div class="msg-board">
		<div class="panel panel-default">
			<div class="panel-heading">团队留言板</div>
			<div class="panel-body">
				<div class="col-md-7">
					<div class="media well">
						<div class="media-left media-middle">
							<img class="media-object" src="https://placehold.it/64x64" alt="成龙">
						</div>
						<div class="media-body">
							<p class="media-heading">成龙</p>
							<p>李连杰呀，今晚请把网站程序升级一下哈，现在的系统有漏洞，安全起见！</p>
						</div>
					</div>
				</div>
				<div class="col-md-5">
					<form method="post">
						<div class="form-group">
							<label for="text1">输入留言内容</label>
							<textarea class="form-control" id="text1" rows="5" cols="10" placeholder="请输入留言内容"></textarea>
							<a href="javascript:;" class="btn btn-default">留言</a>
						</div>
					</form>
					<div class="panel panel-default">
					  <div class="panel-heading">团队联系手册</div>
					  <div class="panel-body">
					  	<ul class="list-group">
					  		<li class="list-group-item">站长(成龙)：<span class="glyphicon glyphicon-phone"></span>13134848615</li>
					  		<li class="list-group-item">技术(大牛)：<span class="glyphicon glyphicon-phone"></span>13134848615</li>
					  		<li class="list-group-item">推广(熊二)：<span class="glyphicon glyphicon-phone"></span>13134848615</li>
					  		<li class="list-group-item">客服(小美)：<span class="glyphicon glyphicon-phone"></span>13134848615<span class="glyphicon glyphicon-phone-alt"></span>0909-9989989</li>
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
				talks:[
					{
						// 
					}
				]
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