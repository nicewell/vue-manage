<template>
  <div class="layout">
    <div class="container">
      <Warning></Warning>
      <div class="row">
        <div class="col-md-6">
          <WebCount :counts="counts"></WebCount>
        </div>
        <div class="col-md-6">
          <NewsHot :news="news"></NewsHot>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <TodayCount :series="series"></TodayCount>
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
import Warning from '@/components/index/Warning'
import WebCount from '@/components/index/WebCount'
import NewsHot from '@/components/index/NewsHot'
import TodayCount from '@/components/index/TodayCount'
import ServerStatus from '@/components/index/ServerStatus'
import MsgBoard from '@/components/index/MsgBoard'
import getPlayerGloryRank from '@/api/getPlayerGloryRank'
import getPlayerWeekMvp from '../api/getPlayerWeekMvp'
import getNews from '../api/getNews'

export default {
  name: 'Container',
  components: {
    Warning,
    WebCount,
    NewsHot,
    TodayCount,
    ServerStatus,
    MsgBoard
  },
  data () {
    return {
      counts: [],
      news: [],
      series: []
    }
  },
  methods: {
    async initWeb () {
      try {
        let data = await getPlayerWeekMvp()
        this.counts = data
      } catch (error) {
        console.log(`${error} 数据获取失败`)
      }
    },
    async initChart () {
      let data = await getPlayerGloryRank()
      this.series = data
    },
    async initNews () {
      let news = await getNews()
      this.news = news
    }
  },
  mounted () {
    this.initWeb()
    this.initNews()
    this.initChart()
  }
}

</script>
<style lang="scss" scoped>
* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: none;
}
</style>