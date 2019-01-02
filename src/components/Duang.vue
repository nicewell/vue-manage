<template>
  <div class="wrap">
    <div class="box1" ref="box1">1</div>
    <div class="box2" ref="box2">2</div>
  </div>
</template>
<script>
export default {
  name: 'Duang',
  data () {
    return {
      // 
    }
  },
  components: {
    // 
  },
  methods: {
    // 
  },
  created () {
    // 
  },
  mounted () {
    console.log(this.$refs.box1)
    console.log(this.$refs.box2)
  }
}

</script>
<style scoped="" lang="scss"></style>