<template>
  <div class="user-manager">
    <div class="page-header">
      <h3>用户管理</h3>
    </div>
    <ul class="nav nav-tabs">
      <li class="active">
        <a href="javascript:;">用户列表</a>
      </li>
    </ul>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>用户名</th>
          <th>邮箱</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="user.id" :class="{'lock': user.lock}">
          <th>{{user.id}}</th>
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
          <td>
            <div role="presentation" class="dropdown">
              <button
                class="btn btn-default dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                操作
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a href="javascript:;" @click="delUser(index)">删除</a>
                </li>
                <li>
                  <a href="javascript:;" @click="toggleLock(index)">{{initLockTxt(user.lock)}}</a>
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
  name: 'UserManager',
  components: {
    Pagination
  },
  data () {
    return {
      pages: {
        active: 1,
        total: 3
      },
      users: [
        {
          'id': 1,
          'name': '张三',
          'email': 'zhangsan@gmail.com',
          'lock': false
        },
        {
          'id': 2,
          'name': 'laowang',
          'email': 'laowang@gmail.com',
          'lock': true
        },
        {
          'id': 3,
          'name': '玄武',
          'email': 'xuanwu@gmail.com',
          'lock': false
        }
      ]
    }
  },
  computed: {
    initLock (lock) {
      // console.log('lock:'+lock)
      // if (lock) {
      // 	return '解锁'
      // }else {
      // 	return '锁定'
      // }
      return '锁定'
    }
  },
  methods: {
    toggleLock (m) {
      this.users[m].lock = !this.users[m].lock
    },
    initLockTxt (lock) {
      if (lock) {
        return '解锁'
      } else {
        return '锁定'
      }
    },
    delUser (index) {
      let users = this.users
      if (users[index].lock) {
        alert('已锁定用户,禁止直接删除！')
        return
      }
      users.splice(index, 1)
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
.user-manager {
  height: 800px;
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
  tr {
    &.lock {
      color: #f00;
      background-color: #fee;
    }
  }
  .caret {
    margin: 0 5px;
  }
}
</style>