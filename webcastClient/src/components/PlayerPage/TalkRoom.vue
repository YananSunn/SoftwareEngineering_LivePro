<template>
<div class="talkroom-layout">
  <message-board />
  <input-message :classId="this.classId"/>
</div>
</template>
<script>
import MessageBoard from './MessageBoard.vue'
import InputMessage from './InputMessage.vue'
export default {
  components: {
    MessageBoard,
    InputMessage
  },
  props:{
    classId:String
  }
}
</script>
<style scoped>
.talkroom-layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 500px;
  background-color: #707070;
}
</style>
