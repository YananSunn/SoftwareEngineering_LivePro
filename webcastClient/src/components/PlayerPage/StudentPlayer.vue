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

.talkroom {
  background: #FF00FF;
  position: relative;
  overflow: hidden;
}
</style>
<template>
<div class="layout">
  <Layout>
    <Header>
      <header-bar-stu />
    </Header>
    <Layout :style="{padding: '30px 50px'}">
                <Content :style="{padding: '24px 0', minHeight: '280px', background: '#C0C0C0'}">
                    <Layout>
                      <div class="talkroom">
                            <my-container/>
                      </div>
                    </Layout>
                </Content>
            </Layout>
    <Footer class="layout-footer-center">2018 &copy; Team4.0</Footer>
  </Layout>
</div>
</div>
</template>

<script>
import HeaderBarStu from '@/components/PlayerPage/HeaderBarStu.vue'
import MyContainer from '@/components/PlayerPage/MyContainer.vue'

export default {

  components: {
    HeaderBarStu,
    MyContainer
  }
}
</script>
