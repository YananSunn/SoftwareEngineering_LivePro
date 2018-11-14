//常用颜色
//图标字体颜色 登陆等按钮 #41B146
//背景颜色 #F5F5F5
//标题字颜色 #333333
//链接颜色 #99A6C4

<template>
<div class="layout">
      <HeaderBar class="headerBar"/>
    <Carousel autoplay v-model="value" loop>
      <CarouselItem>
        <div class="demo-carousel">1</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">2</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">3</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">4</div>
      </CarouselItem>
    </Carousel>
    <Footer class="layout-footer-center">2018 &copy; Team4.0</Footer>
</div>
</template>
<script>
import HeaderBar from './HeaderBar.vue'


export default {
  data() {
    return {
      value: 0
    }
  },
  components: {
    HeaderBar
  }
}
</script>
<style scoped>
.layout {
  background: #FF0000;
  background-color: #f5f7f9;
  overflow: hidden;
}

.headerBar{
  /* padding: 5px; */
}

.layout-footer-center {
  background-color: #f5f7f9;
  text-align: center;
}

.demo-carousel{
  background-color: #f5f7f9;
  width:1000px;
  height: 700px;
}
</style>
