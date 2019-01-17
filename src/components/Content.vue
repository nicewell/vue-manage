<template>
  <div class="content">
    <Layout :id="id" :navs="navs"></Layout>
  </div>
</template>
<script>
import Layout from '@/components/Layout'

export default {
  name: 'Content',
  components: {
    Layout
  },
  data () {
    return {
      id: 'content-layout',
      navs: [
        {
          'name': '内容管理',
          'path': 'contentManager'
        },
        {
          'name': '添加内容',
          'path': 'contentAdd'
        }
      ]
    }
  }
}
</script>
