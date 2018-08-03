<template>
	<div class="warning" v-if="hasBug">
		<!-- 警告框 -->
		<div class="row">
			<div class="col-md-12">
				<div class="alert alert-danger alert-dismissible" role="alert">
					<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4>{{warning.tit}}</h4>
					<p>{{warning.des}}</p>
					<div class="btns">
						<button type="button" class="btn btn-danger" @click="repair">立即修复</button>
						<button type="button" class="btn btn-default" data-dismiss="alert" @click="showDelay">稍后处理</button>
					</div>
				</div>
			</div>
		</div>
		<!-- 结束警告框 -->
	</div>
</template>
<script>
	export default {
		name: 'Warning',
		data() {
			return {
				hasBug: true,
				warning: {
					'tit': '网站程序有漏洞，急需修复！',
					'des': '当前版本程序(V1.22)存在严重安全问题，容易造成攻击，请即可修复！'
				}
			}
		},
		methods: {
			repair() {
				console.log('repair……');
			},
			showDelay() {
				let delay = 1000;
				console.log((delay / 1000) + 's后再提示');
				this.toggleShow();
				setTimeout(() => {
					this.toggleShow();
				}, delay);
			},
			toggleShow() {
				this.hasBug = !this.hasBug;
			}
		}
	}
</script>
<style scoped="" lang="scss">
	.warning{
		.alert{
			// margin-bottom: 0;
		}
	}
	.btns{
		margin-top: 15px;
	}
</style>