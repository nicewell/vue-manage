<template>
	<div class="login">
    <div class="panel panel-default">
      <div class="panel-body">
        <h3>Login</h3>
        <div class="row">
          <div class="col-md-2"><span>用户名</span></div>
          <div class="col-md-10"><input type="text" class="form-control" /></div>
        </div>
        <div class="row">
          <div class="col-md-2"><span>密码</span></div>
          <div class="col-md-10"><input type="password" class="form-control" /></div>
        </div>
        <button type="button" class="btn btn-primary" @click="login">登录</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      // 
    }
  },
  methods: {
    login(){
      // success=>res.data
      let userInfo = {
        'name': 'duang',
        'lock': 1
      }
      console.log('success')
      window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
      this.$router.push('/')
    }
  },
  created() {
    console.log('ok')
  }
}

</script>
<style scoped="" lang="scss"></style>