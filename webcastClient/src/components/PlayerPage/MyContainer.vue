

<template>
<div class="container-layout">
  <div class="leftContext">
    <player/>
  </div>
  <div class="rightContext">
    <div class="editorRecommend">
      <talk-room/>
    </div>
  </div>
</div>
</template>
<script>
import Player from '@/components/PlayerPage/Player.vue'
import TalkRoom from '@/components/PlayerPage/TalkRoom.vue'
export default {

  components: {
    Player,
    TalkRoom
  }

}
</script>
<style scoped>
.container-layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.leftContext {
  float: left;
  min-width: 500px;
  min-height: 409px;
  border-bottom: 1px solid #BDBDBD;
}

.rightContext {
  float: right;
  width: 350px;

  border-left: 1px solid #BDBDBD;
}
</style>
