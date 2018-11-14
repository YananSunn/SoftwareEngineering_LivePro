<template>
<div class="headerBar">
  <div class="layoutLogo">
    <img class="imgLogo" src="../assets/logo.jpg" alt="">
  </div>
  <div class="layoutMenu">
    <div class="menuItem">
      aaaaaaa
      <!-- <router-link to="/TeacherPlayer" class="header-bar-tag">Teacher</router-link>
      <router-link to="/PersonalInformation" class="header-bar-tag">Account Info</router-link>
      <router-link to="/Exercise" class="header-bar-tag">Exercise</router-link> -->
    </div>
    <div class="menuItem">
      bbbbbbb
      <!-- <router-link class="link" to="/">回到主页</router-link> -->
    </div>
    <div class="menuItem">
      ccccccc
      <!-- <router-link class="link" to="/ClassList">教室列表</router-link> -->
    </div>
  </div>
  <div class="layoutNav">
    dddddddd
    <!-- <Login></Login> -->
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
  width: 1400px;
  height: 75px;
}

.layoutLogo {
  display: inline-block;
  width: 150px;
  height: 75px;
  background: #FFFFFF;
  border-radius: 3px;
}

.layoutMenu {
  display: inline-block;
  background: #FFFFFF;
  width: 600px;
  height: 75px;
}

.layoutNav {
  display: inline-block;
  background: #FFFFFF;
  width: 150px;
  height: 75px;
}

.menuItem {
  display: inline;
  font-size: 18px;
  color: #333333;
  width: 50px;
  height: 75px;
}

.imgLogo {
  width: 150px;
  height: 75px;
}

.link {
  color: #FF0000;
}

.menuCol {}
</style>
