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
      countData: [],
      news: [],
      series: []
    }
  },
  methods: {
    async initWeb () {
      try {
        let data = await getPlayerGloryRank()
        if (!Array.isArray(data)) {
          return
        }
        let arr = data.splice(0, 4)
        let _arr = arr.map((item, i) => {
          return {
            'tag': item.playerid,
            'tNum': item.count,
            'yNum': item.playername
          }
        })
        this.countData = _arr
      } catch (error) {
        console.log(`${error} 数据获取失败`)
      }
    },
    async initHot () {
      let data = await getPlayerGloryRank()
      if (!Array.isArray(data)) {
        return
      }
      let arr = data.splice(0, 5)
      let _arr = arr.map((item, i) => {
        let step = -24 * 60 * 60 * 1000 * (i + 1)
        return {
          'url': item.logo,
          'des': `${item.seasonid} 战队 ${item.playername} ,累计 ${item.count} 场赛事`,
          'date': new Date().getTime() + step
        }
      })
      this.news = _arr
    },
    async initChartData () {
      let data = await getPlayerGloryRank()
      if (!Array.isArray(data)) {
        return
      }
      let arr = data.splice(0, 7)
      let arrPC = []
      let arrM = []
      arr.forEach((item, i) => {
        let num = Math.floor(Number(item.playerid) / Number(item.position))
        arrPC.push(num)
        arrM.push(Math.floor(num * this.getRan(0.6, 0.9)))
      })
      let _arr = [
        {
          name: 'PC端',
          data: arrPC
        },
        {
          name: '移动端',
          data: arrM
        }
      ]
      this.series = _arr
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
    },
    getRan (min, max) {
      return Math.round((max - min) * Math.random()) + min
    }
  },
  mounted () {
    this.initWeb()
    this.initHot()
    this.initChartData()
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