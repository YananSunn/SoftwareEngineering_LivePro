
<template>
<div class="header-layout">

  <Menu mode="horizontal" theme="dark" active-name="1">
    <div class="header-layout-logo"></div>
    <div class="header-layout-nav">
      <MenuItem name="1">
      <Icon type="ios-navigate"></Icon>
      <router-link to="/">回到主页</router-link>
      </MenuItem>
      <MenuItem name="2">
      <Icon type="ios-keypad"></Icon>
      课程列表
      </MenuItem>
    </div>
  </Menu>

</div>
</template>
<script>
export default {

}
</script>
<style scoped>
.header-layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  border-radius: 4px;
  overflow: hidden;
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
}

.header-layout-logo {
  width: 100px;
  height: 48px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 5px;
  left: 20px;
}

.header-layout-nav {
  width: 500px;
  height: 120px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
