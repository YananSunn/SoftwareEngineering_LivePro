<template>
<div class="headerBar">
  <div class="layoutLogo">
    <img class="imgLogo" src="../assets/logo.jpg" alt="">
  </div>
  <div class="layoutMenu">
    <div class="menuItem">
      <router-link to="/TeacherPlayer" class="link">Teacher</router-link>
    </div>
    <div class="menuItem">
      <router-link to="/PersonalInformation" class="link">Account Info</router-link>
    </div>
    <div class="menuItem">
      <router-link to="/Exercise" class="link">Exercise</router-link>
    </div>
    <div class="menuItem">
      <router-link class="link" to="/">首页</router-link>
    </div>
    <div class="menuItem">
      <router-link class="link" to="/ClassList">教室列表</router-link>
    </div>
  </div>
  <div class="layoutNav">
    <Login></Login>
  </div>
</div>
</template>
<script>
import Login from './Login.vue'
export default {
  data() {
    return {}
  },
  methods: {

  },
  components: {
    Login
  }
}
</script>

<style scoped>
.headerBar {
  background: #FFFFFF;
  font-size: 0;
  line-height: 75px;
  width: 1280px;
  height: 75px;
  box-shadow: 0px 0px 10px 5px #e0e2e4;
}

.layoutLogo {
  display: inline-block;
  width: 170px;
  height: 75px;
  background: #FFFFFF;
  border-radius: 3px;
  padding-left: 20px;
  vertical-align: middle;
}

.layoutMenu {
  display: inline-block;
  background: #FFFFFF;
  width: 600px;
  height: 75px;
  font-size: 12px;
  font-weight: 600;
  vertical-align: middle;
}

.layoutNav {
  display: inline-block;
  background: #FFFFFF;
  width: 400px;
  height: 75px;
  font-size: 14px;
  padding-left: 390px;
  vertical-align: middle;
}

.menuItem {
  display: inline-block;
  font-size: 18px;
  color: #333333;
  height: 75px;
  padding-left: 30px;
}

.imgLogo {
  width: 150px;
  height: 75px;
}

.link {
  color: #333333;
}

.menuCol {}
</style>
