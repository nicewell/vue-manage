<template>
	<div class="layout">
		<div class="container">
			<Warning></Warning>
			<div class="row">
				<div class="col-md-6">
					<WebCount :countData="countData"></WebCount>
				</div>
				<div class="col-md-6">
					<NewsHot :news="news"></NewsHot>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<TodayCount :chartOps="chartOps"></TodayCount>
				</div>
				<div class="col-md-6">
					<ServerStatus></ServerStatus>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<MsgBoard></MsgBoard>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Warning from './index/Warning'
	import WebCount from './index/WebCount'
	import NewsHot from './index/NewsHot'
	import TodayCount from './index/TodayCount'
	import ServerStatus from './index/ServerStatus'
	import MsgBoard from './index/MsgBoard'

	export default{
		name:'Container',
		components:{
			Warning,
			WebCount,
			NewsHot,
			TodayCount,
			ServerStatus,
			MsgBoard
		},
		data(){
			return{
				countData:[],
				news:[],
				chartOps:{
					id:'chart',
					option: {
						chart: {
							type: 'spline',
							height: 280,
							// margin: [0, 0, 0, 0]
						},
						credits: {
							enabled: false
						},
						plotOptions: {
							spline: {
								// 数据标签
								dataLabels: {
									enabled: false
								},
								// 鼠标跟踪，对应的提示框、点击事件
								enableMouseTracking: true
							}
						},
						title: {
							text: '' //表头文字
						},
						//x轴显示的内容
						xAxis: {
							categories: ['周一','周二','周三','周四','周五','周六','周日'],
						},
						//y轴显示的内容
						yAxis: {
							title: {
								text: ''
							}
						},
						// // 两条数据
						// series: [{
						// 	name: 'PC端',
						// 	// data: [314,455,755,814,999,905,1000]
						// 	data: []
						// }, {
						// 	name: '移动端',
						// 	// data: [114,255,455,414,599,605,500]
						// 	data: []
						// }]
					}
				}
			}
		},
		methods:{
			getData(callback){
				this.$axios.get('http://api.tgatv.qq.com/app/match/getPlayerGloryRank', {
						params: {
							appid: '10005',
							seasonid: 'KPL2018S1'
						}
					})
					.then((res) => {
						// console.log(res.data.data);
						callback && callback(res.data.data);
					})
					.catch((error) => {
						console.log(error);
					});
			},
			initWeb(){
				this.getData((data)=>{
					let arr = data.splice(0, 4);
					arr.forEach((item,i) => {
						this.countData.push({
							'tag':item.id,
							'tNum':item.count,
							'yNum':item.playername
						});
					});
				});
			},
			initHot(){
				this.getData((data)=>{
					let arr = data.splice(0, 5);
					arr.forEach((item,i) => {
						let step = -24*60*60*1000*(i+1);
						this.news.push({
							'url': item.logo,
							'des':item.seasonid+'战队'+item.playername+',累计'+item.count+'场赛事',
							'date': new Date().getTime()+step
						});
					});
				});
			},
			initChart() {
				this.getData((data) => {
					let arr = data.splice(0, 7);
					// let series = this.chartOps.option.series;
					let arrPC = [],arrM = [];
					arr.forEach((item, i) => {
						let num = Math.floor(item.id / item.position);
						arrPC.push(num);
						arrM.push(Math.floor(num * this.getRan(0.6, 0.9)));
					});
					// console.log(arrPC)
					// // console.log(series);
					// this.set(series,0,{
					// 	name: 'PC端',
					// 	data: arrPC
					// });
					// this.set(series,1,{
					// 	name: '移动端',
					// 	data: arrM
					// });
					Vue.set(this.chartOps,'haha','haha');
					let _arr = [
							{
								name: 'PC端',
								data: arrPC
							},
							{
								name: '移动端',
								data: arrM
							}
					];
					this.set(this.chartOps,'series',_arr);
				});
			},
			getRan(min, max) {
				return Math.round((max - min) * Math.random()) + min;
			}
		},
		mounted(){
			this.initWeb();
			this.initHot();
			this.initChart();
		}
	}
</script>
<style lang="scss" scoped>
	*{
		-webkit-tap-highlight-color:rgba(0,0,0,0);
		outline: none;
	}
	.layout{
		// 
	}
</style>