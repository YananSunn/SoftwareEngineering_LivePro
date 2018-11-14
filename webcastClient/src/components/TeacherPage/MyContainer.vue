<style scoped>
.container-layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.leftAndMidContext {
  float: left;
  min-width: 500px;
  min-height: 550px;
}

.rightContext {
  float: right;
  width: 200px;

}
</style>

<template>
<div class="container-layout">
  <div class="leftAndMidContext">
    <left-and-mid />
  </div>
  <div class="rightContext">
    <div class="editorRecommend">
      <talk-room />
    </div>
  </div>
</div>
</template>
<script>
import LeftAndMid from './LeftAndMid.vue'
import TalkRoom from './TalkRoom.vue'
export default {

  components: {
    LeftAndMid,
    TalkRoom
  }

}
</script>
