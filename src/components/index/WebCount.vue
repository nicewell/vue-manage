<template>
  <div class="web-count">
    <div class="panel panel-default">
      <div class="panel-heading">数据统计</div>
      <div class="panel-body">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>统计条目</th>
              <th>iid</th>
              <th>iname</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in formatCounts" :key="index">
              <td>{{item.tag}}</td>
              <td>{{item.tNum}}</td>
              <td>{{item.yNum}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'WebCount',
  data () {
    return {
      formatCounts: this.counts
    }
  },
  props: {
    counts: {
      type: Array,
      deafult: []
    }
  },
  methods: {
    initTable () {
      this.formatCounts = this.formatData([...this.counts])
    },
    formatData (data) {
      if (!data || !Array.isArray(data)) {
        return
      }
      let arr = data.splice(0, 4)
      let _arr = arr.map((item, i) => {
        return {
          'tag': item.playerid,
          'tNum': item.position,
          'yNum': item.playername
        }
      })
      return _arr
    }
  },
  watch: {
    'counts': {
      deep: true,
      handler (val, oldVal) {
        this.initTable()
      }
    }
  }
}

</script>
<style scoped="" lang="scss">
.web-count {
  .table {
    margin-bottom: 0;
  }
  th {
    text-transform: uppercase;
  }
  .panel-body {
    padding: 0 15px;
  }
  .table > tbody > tr > td,
  .table > tbody > tr > th,
  .table > tfoot > tr > td,
  .table > tfoot > tr > th,
  .table > thead > tr > td,
  .table > thead > tr > th {
    padding: 10px 8px;
  }
}
</style>