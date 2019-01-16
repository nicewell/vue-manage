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
        let data = await getPlayerGloryRank()
        this.counts = data
      } catch (error) {
        console.log(`${error} 数据获取失败`)
      }
    },
    async initHot () {
      let data = await getPlayerGloryRank()
      this.news = data
    },
    async initChart () {
      let data = await getPlayerGloryRank()
      this.series = data
    },
    getNews () {
      // mock
      this.$axios.get('/news', {
        params: {}
      })
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  mounted () {
    this.initWeb()
    this.initHot()
    this.initChart()
    this.getNews()
  }
}

</script>
<style lang="scss" scoped>
* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: none;
}
</style>