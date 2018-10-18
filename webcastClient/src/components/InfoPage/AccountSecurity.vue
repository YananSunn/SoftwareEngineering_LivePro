<style scoped>
.layout {
  left: 10px;
  /* border: 1px solid #d7dde4;
  background: #f5f7f9; */
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.title {
  padding-top: 20px;
  text-align: left;
  font-size: 20px;
}

.line {
  border: 3;
  width: 80%;
  color: #d9d9d9;
  SIZE: 3;
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>
<template>
<div class="layout">
  <span> </span>
  <p class="title">修改密码</p>
  <HR class="line" double>
  </HR>

  <router-view name="password"></router-view>

  <p class="title">绑定邮箱</p>
  <HR class="line" double>
  </HR>

  <router-view name="email"></router-view>


</div>
</template>
<script>
export default {

}
</script>
