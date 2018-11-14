<style scoped>
.header-layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  /* position: relative; */
  border-radius: 4px;
  overflow: hidden;
  /* 这里以下是修改 */
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  /* 这里以上是修改 */
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
  /* background-image: url(../assets/jsklogo.png); */
}

.header-layout-nav {
  width: 500px;
  height: 120px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
<template>
<div class="header-layout">

  <Menu mode="horizontal" theme="dark" active-name="1">
    <div class="header-layout-logo"></div>
    <div class="header-layout-nav">
      <MenuItem name="1">
      <span class="ui-icon ui-icon-arrowthick-1-n"></span>
      <Icon type="ios-navigate"></Icon>
      <router-link to="/">回到主页</router-link>
      </MenuItem>
      <MenuItem name="2">
      <Icon type="ios-keypad"></Icon>
      选择课程
      </MenuItem>
      <MenuItem name="3">
      <Icon type="ios-analytics"></Icon>
      课程信息
      </MenuItem>
      <MenuItem name="4">
      <Icon type="ios-paper"></Icon>
      关于我们
      </MenuItem>
    </div>
  </Menu>


</div>
</template>
<script>
export default {

}
</script>
