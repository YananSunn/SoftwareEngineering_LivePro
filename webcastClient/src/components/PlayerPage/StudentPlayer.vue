<template>
<div class="layout">
  <div>
    <HeaderBar class="headerBar">
    </HeaderBar>
  </div>
  <div class="talkRoom">
    <MyContainer :classId="this.$route.params.classId"></MyContainer>
  </div>
  <Footer class="layout-footer-center">2018 &copy; Team4.0</Footer>
</div>
</template>

<script>
import HeaderBar from '../HeaderBar.vue'
import MyContainer from './MyContainer.vue'
export default {
  components: {
    HeaderBar,
    MyContainer
  },
  mounted() {

  }
}
</script>
<style scoped>
.layout {
  background: #f5f7f9;
}

.headerBar {
  text-align: left;
  width: 1280px;
}

.talkRoom {

}

.layout-footer-center {
  text-align: center;
}
</style>
