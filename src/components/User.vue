<template>
  <div class="user">
    <Layout :id="id" :navs="navs"></Layout>
  </div>
</template>
<script>
import Layout from '@/components/Layout.vue'
export default {
  name: 'User',
  components: {
    Layout
  },
  data () {
    return {
      id: 'user-layout',
      navs: [
        {
          'name': '用户管理',
          'path': 'userManager'
        },
        {
          'name': '添加用户',
          'path': 'userAddPanel'
        }
      ]
    }
  },
  methods: {
    // 
  }
}
</script>