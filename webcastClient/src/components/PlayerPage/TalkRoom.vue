<template>
<div class="layout">
  <div class="messageBoard">
    <MessageBoard>
    </MessageBoard>
  </div>
  <div class="InputMessage">
    <InputMessage :classId="this.classId">
    </InputMessage>
  </div>
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
.layout {
  height: 350px;
  width: 350px;
  padding-left: 0;
  padding-top: 0;
  background-color: #FFFFFF;
}

.messageBoard{
  height: 250px;
  width: 350px;
  background-color: #00FFFF;
}
.InputMessage{
  height: 100px;
  width: 350px;
  background-color: #FFFF00;
}
</style>
