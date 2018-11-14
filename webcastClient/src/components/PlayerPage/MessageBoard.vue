<template>
<div class="layout">
  <Scroll class="scrollMsgBoard" :on-reach-top="handleReachTop">
    <table v-for="msg in msgs">
      <p v-if="msg.type==='text'">{{msg.senderName}}:{{msg.data}}</p>
      <p v-if="msg.type==='image'">{{msg.senderName}}:<img :src=msg.data ></p>
      <p v-if="msg.type==='voice'">
        {{msg.senderName}}:
        <audio controls="controls">
          <source :src=msg.data type="audio/wav" />
          Your browser does not support this audio format.
        </audio>
      </p>
    </table>
  </Scroll>
</div>
</template>
<script>
export default {
  data() {
    return {
      msgs: []//{type:,data:}
    }
  },
  components: {

  },
  methods: {
  },
  created() {
  },
  mounted() {
    this.$socket.on("sendtext", (data) => {
      console.log("msgboard")
      console.log(data);
      this.msgs.push({type:"text",data:data.data,senderName:data.senderName})
    })
    this.$socket.on("sendimage",(data)=>{//
      this.msgs.push({type:"image",senderName:data.senderName,data:window.URL.createObjectURL(new Blob([data.data],{type:"image/png"}))});
    })
    this.$socket.on("sendvoice",(data)=>{
      this.msgs.push({type:"voice",senderName:data.senderName,data:window.URL.createObjectURL(new Blob([data.data],{type:"audio/wav"}))});
    })
    this.$socket.on("getInfoInRoom",(data)=>{
      console.log(data);
    })
    this.$socket.on("getConnectedRooms",(data)=>{
      console.log(data);
    })
  }

}
</script>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background-color: #f5f7f9;
  height: 250px;
}

.scrollMsgBoard{
  height: 250px;
}
.chatImg {
  width: 40px;
  height: 30px;
}
</style>
