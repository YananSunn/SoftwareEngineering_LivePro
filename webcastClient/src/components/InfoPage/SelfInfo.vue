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
  margin-top: 20px;
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

.fundamentalInfo{
  width: 130%;
  /* margin-top: 40px; */
}
</style>
<template>
<div class="layout">
  <span> </span>
  <p class="title">个人头像</p>
  <HR class="line" double>
  </HR>
  <Upload action="//jsonplaceholder.typicode.com/posts/">
    <Avatar icon="ios-person" size="large" />
    <Button>上传头像</Button>
  </Upload>


  <p class="title">基本资料</p>
  <HR class="line" double>
  </HR>

  <router-view class="fundamentalInfo"></router-view>


</div>
</template>
<script>
export default {

}
</script>
