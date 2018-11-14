//常用颜色
//图标字体颜色 登陆等按钮 #41B146
//背景颜色 #f5f7f9
//标题字颜色 #333333
//链接颜色 #99A6C4
//box-shadow: 0px 0px 10px 5px #e0e2e4;

<template>
<div class="layout">
  <HeaderBar class="headerBar" />
  <!-- <Carousel autoplay v-model="value" loop>
    <CarouselItem v-for="source in loopSrc">
      <div class="demoCarousel">
        <img class="homePageImg" :src=source alt="">
      </div>
    </CarouselItem>
  </Carousel> -->
  <Carousel autoplay v-model="value" loop>
      <CarouselItem>
        <div class="demo-carousel">
          <img class="homePageImg" src='../assets/1.jpg' alt="">
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img class="homePageImg" src='../assets/2.jpg' alt="">
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img class="homePageImg" src='../assets/3.jpg' alt="">
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img class="homePageImg" src='../assets/4.jpg' alt="">
        </div>
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
      loopSrc:['../assets/1.jpg','../assets/2.jpg','../assets/3.jpg','../assets/4.jpg'],
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
  background-color: #f5f7f9;
  overflow: hidden;
  width: 1280px;
}

.headerBar {
  text-align: left;
  width: 1280px;
  margin-bottom: 50px;
}

.layout-footer-center {
  background-color: #f5f7f9;
  text-align: center;
  width: 1280px;
}

.demoCarousel {
  /* background-color: #f5f7f9; */
  background-color: #ff0000;
  margin-left: 160px;
  width: 900px;
  height: 700px;
}

.homePageImg{
  /* background-color: #ff00ff; */
  width: 900px;
}
</style>
