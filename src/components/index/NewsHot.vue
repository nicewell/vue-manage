<template>
  <div class="news-hot">
    <div class="panel panel-default">
      <div class="panel-heading">英雄热榜</div>
      <ul class="list-group">
        <li class="list-group-item" v-for="(item, index) in formatNews" :key="index">
          <a :href="item.url" target="_blank">
            <!-- <span class="glyphicon glyphicon-list-alt"></span> -->
            <span class="glyphicon glyphicon-icon-photo">
              <img :src="item.url" alt="item.name">
            </span>
            {{item.des}}
            <span class="time">{{item.date}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$w: 20px;
.glyphicon-icon-photo {
  width: $w;
  height: $w;
  overflow: hidden;
  border-radius: 50%;
  vertical-align: bottom;
  img {
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
<script>
import { formatTime } from '@/utils/utils'
export default {
  name: 'NewsHot',
  data () {
    return {
      formatNews: this.news
    }
  },
  props: ['news'],
  created () {
    this.initNews()
  },
  methods: {
    initNews () {
      this.formatNews = this.formatData([...this.news])
    },
    formatData (data) {
      if (!data || !Array.isArray(data)) {
        return
      }
      let arr = data.splice(0, 5)
      let _arr = arr.map((item, i) => {
        let step = -24 * 60 * 60 * 1000 * (i + 1)
        return {
          'url': item.logo,
          'name': item.playername,
          'des': `${item.seasonid} 战队 ${item.playername} ,累计 ${item.count} 场赛事`,
          'date': formatTime(new Date().getTime() + step)
        }
      })
      return _arr
    }
  },
  watch: {
    'news': {
      deep: true,
      handler (val, oldVal) {
        this.initNews()
      }
    }
  }
}

</script>
<style scoped="" lang="scss">
@import "../../assets/scss/public.scss";

.news-hot {
  .list-group-item {
    a {
      position: relative;
      @include line(1);
      display: block;
      box-sizing: border-box;
      padding-right: 90px;
    }
    .time {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
}
</style>