<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <p>© {{getFullYear}} 尚谷田园科技有限公司</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  data () {
    return {
      date: ''
    }
  },
  computed: {
    getFullYear () {
      return this.date = new Date().getFullYear()
    }
  }
}
</script>
<style scoped="" lang="scss">
.footer {
  text-align: center;
  font-size: 14px;
  line-height: 1.4em;
}
</style>