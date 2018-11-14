<style scoped>
.messageboard-layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 440px;
  //background-color: #909090;
}

.rightContext {
  float: right;
  min-width: 200;
  min-height: 20;
}
</style>

<template>
<div>
  <div class="messageboard-layout">
    {{ messages }}
  </div>

  <textarea style="width:200px;height:100px" v-model="myMessage" placeholder="输入您想发送的消息" @keyup.enter="sendMessage">
  </textarea>
  <div class="rightContext">

    <Button @click="sendMessage">发送</Button>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      messages: '',
      myMessage: '',

    }
  },
  methods: {
    sendMessage: function() {
      this.messages = this.messages + this.myMessage + '\n'
      this.myMessage = ''
    }
  }
}
</script>
