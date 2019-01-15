<template>
  <div class="cont-manager">
    <div class="page-header">
      <h3>内容管理</h3>
    </div>
    <ul class="nav nav-tabs">
      <li class="active">
        <a href="javascript:;">内容管理</a>
      </li>
    </ul>
    <table class="table">
      <thead>
        <tr>
          <th>文章标题</th>
          <th>作者</th>
          <th>发布时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in articles" :key="index">
          <th>{{item.title}}</th>
          <td>{{item.author}}</td>
          <td>{{item.date}}</td>
          <td>
            <div role="presentation" class="dropdown">
              <button
                class="btn btn-default dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                操作
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a href="javascript:;" @click="edit(item.id)">编辑</a>
                </li>
                <li>
                  <a href="javascript:;" @click="del(item.id)">删除</a>
                </li>
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <nav class="pull-right">
      <Pagination :pages="pages"></Pagination>
    </nav>
  </div>
</template>
<script>
import Pagination from '../Pagination'

export default {
  name: 'ContManager',
  components: {
    Pagination
  },
  data () {
    return {
      pages: {
        active: 1,
        total: 5
      },
      articles: [
        {
          'id': 1,
          'title': '产品经理常犯的7大错误，你造吗？',
          'url': '',
          'author': '白垩纪',
          'date': '2017-06-06'
        },
        {
          'id': 2,
          'title': '产品经理常犯的7大错误，你造吗？',
          'url': '',
          'author': '白垩纪',
          'date': '2017-06-06'
        },
        {
          'id': 3,
          'title': '产品经理常犯的7大错误，你造吗？',
          'url': '',
          'author': '白垩纪',
          'date': '2017-06-06'
        }
      ]
    }
  },
  methods: {
    del (id) {
      this.articles.forEach((item, i) => {
        if (id == item.id) {
          console.log(id)
          this.articles.splice(i, 1)
          return
        }
      })
    },
    edit (id) {
      console.log(id)
    }
  },
  watch: {
    'pages.active': (val, oldVal) => {
      console.log(val, oldVal)
    }
  }
}

</script>
<style scoped="" lang="scss">
.cont-manager {
  .page-header {
    margin: 0 0 20px;
    .h1,
    .h2,
    .h3,
    h1,
    h2,
    h3 {
      margin-top: 0;
    }
  }
  th,
  td {
    vertical-align: middle;
  }
  .caret {
    margin: 0 5px;
  }
}
</style>