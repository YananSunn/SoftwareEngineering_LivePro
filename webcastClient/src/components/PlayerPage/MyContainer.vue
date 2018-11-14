<template>
<div class="layout">
  <div class="PPTShow">
    <PPTShow></PPTShow>
  </div>
  <div class="videoAndTalk">
    <div class="player">
      <player></player>
    </div>
    <div class="talkRoom">
      <TalkRoom :classId="this.classId"></TalkRoom>
    </div>
  </div>
</div>
</template>
<script>
import Player from './Player.vue'
import TalkRoom from './TalkRoom.vue'
import PPTShow from './PPTShow.vue'
export default {
  components: {
    Player,
    TalkRoom,
    PPTShow
  },
  props: {
    classId: String
  }
}
</script>
<style scoped>
.layout {
  background: #f5f7f9;
  width: 1280px;
  padding-left: 60px;
  padding-top: 50px;
  text-align: left;
}

.PPTShow {
  display: inline-block;
  width: 800px;
  height: 600px;
  vertical-align: top;
  box-shadow: 0px 0px 10px 5px #e0e2e4;
}

.videoAndTalk {
  display: inline-block;
  background-color: #ff00ff;
  width: 350px;
  margin-left: 10px;
}

.player {
  width: 350px;
  height: 250px;
  background-color: #00ff00;
}

.talkRoom {
  background-color: #0000ff;
  width: 350px;
  height: 350px
}
</style>
