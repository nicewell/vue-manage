<template>
  <div id="app">
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer"

export default {
  name: 'App',
  data(){
    return {
      // isLogin: true
    }
  },
  components:{
    Footer
  },
  methods:{
    // 
  },
  created(){

  }
}
</script>

<style lang="scss">
// #app {}
</style>
