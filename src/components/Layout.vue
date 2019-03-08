<template>
  <div>
    <Header></Header>
    <div :id="id" class="layout">
      <div class="container">
        <div class="row">
          <!-- <div class="col-md-2">
            <div class="list-group">
              <template v-for="(item,index) in navs">
                <router-link
                  class="list-group-item"
                  :to="item.path"
                  :key="index"
                  active-class="active"
                >{{item.name}}</router-link>
              </template>
            </div>
          </div> -->
          <div class="col-md-10" @saveData="updata">
            <keep-alive>
              <router-view/>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header"
import UserManager from '@/components/user/UserManager'
export default {
  name: 'Layout',
  components: {
    Header,
    UserManager
  },
  data () {
    return {
      // 
    }
  },
  props: {
    id: String,
    navs: [Object, Array, String]
  },
  methods: {
    updata (data) {
      console.log(data)
    }
  },
  created () {
    console.log('ok')
  }
}

</script>
<style scoped="" lang="scss"></style>