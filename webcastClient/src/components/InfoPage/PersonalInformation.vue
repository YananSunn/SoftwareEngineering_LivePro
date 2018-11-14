
<template>
<div class="layout">
  <Layout>
    <Layout :style="{padding: '30px 50px'}">
      <div class="setinfo">
        <info-board />
      </div>
    </Layout>
    <Footer class="layout-footer-center">2018 &copy; Team4.0</Footer>
  </Layout>
</div>
</div>
</template>

<script>
import InfoBoard from './InfoBoard.vue'

export default {

  components: {
    InfoBoard
  }
}
</script>
<style scoped>
.layout {
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

.layout-logo {
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

.layout-footer-center {
  text-align: center;
}
</style>
