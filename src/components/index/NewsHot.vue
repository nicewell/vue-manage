<template>
  <div class="news-hot">
    <div class="panel panel-default">
      <div class="panel-heading">英雄热榜</div>
      <ul class="list-group">
        <li class="list-group-item item" v-for="(item, index) in formatNews" :key="index">
          <span class="photo">
            <img :src="item.pic" alt="item.author">
          </span>
          <a :href="item.url" class="title" target="_blank" :title="item.title">{{item.title}}</a>
          <span class="time">{{item.date}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../../assets/scss/public.scss";

$w: 20px;
.item {
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  .photo {
    width: $w;
    height: $w;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 0.5em;
    img {
      display: block;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
  .title {
    flex: 1;
    @include line(1);
    margin: 0;
  }
  .time {
    text-align: right;
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
      let arr = [...data]
      let _arr = arr.map((item, i) => {
        return {
          'pic': item.pic,
          'url': item.url,
          'article': item.article,
          'author': item.author,
          'title': item.title,
          'date': formatTime(item.date)
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