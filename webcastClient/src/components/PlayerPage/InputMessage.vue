
<template>
<div>
  <div class="tmp"> {{ message }} </div>
  <div class="right_left">
    <Input v-model="value13" on-enter="sendMessage" class="input" v-if="keyBoardInput">
    </Input>
    <Select v-model="select3" slot="prepend" style="width: 60px">
      <Option value="全体">全体</Option>
      <Option value="私聊">私聊</Option>
      <Option value="禁言">禁言</Option>
      <Option value="恢复语音">恢复语音</Option>

    </Select>
    <Button slot="append" icon="md-return-left" @click="sendMessage"></Button>

    <p v-if="select3==='私聊'">私聊用户名
      <Input v-model="dstname">
      </Input>
    </p>
    <!-- <button v-if="!keyBoardInput">按住说话</button> -->
    <Recorder v-if="!keyBoardInput" :classId="this.classId"></Recorder>
  </div>
  <div class="right_right">
    <button v-on:click="keyBoardInput = !keyBoardInput">
      <Icon type="md-keypad" v-if="keyBoardInput"></Icon>
      <Icon type="ios-mic-outline" v-if="!keyBoardInput"></Icon>
    </button>
    <Form>
      <FormItem>
        <a href="javascript:;">
          <Input type="file" id="imageupload" name="imageupload">
          </Input>
        </a>
      </FormItem>
      <FormItem>
        <Button icon="ios-cloud-upload-outline" v-on:click="sendimage"></Button>
      </FormItem>
    </Form>

  </div>
</div>
</template>
<script>
import Recorder from './Recorder.vue'
export default {
  props: {
    classId: String
  },
  data() {
    return {
      message: "聊天记录",
      value13: '',
      select3: '全体',
      keyBoardInput: true,
      dstname: '',
      room: this.classId
    }
  },
  methods: {
    sendMessage: function() {
      console.log("sendtext!");
      if (this.select3 === '禁言') {
        this.$socket.emit("banWords", {
          room: this.room,
          name: this.value13
        });
        return;
      }
      if (this.select3 === '恢复语音') {
        this.$socket.emit("conWords", {
          room: this.room,
          name: this.value13
        });
        return;
      }
      let sendData = {
        privacy: "public",
        dstname: this.dstname,
        room: this.room,
        data: this.value13
      };
      if (this.select3 === '私聊') sendData.privacy = 'private';
      this.$socket.emit("sendtext", sendData);
      this.message = this.message + '\n' + this.value13
      this.value13 = ''
    },
    sendimage: function() {
      console.log("sendimage");
      let image = document.querySelector('input[id=imageupload]').files[0]
      let blobimage = new Blob([image], {
        type: 'image/png'
      });
      let sendData = {
        privacy: "public",
        dstname: this.dstname,
        room: this.room,
        data: blobimage
      }
      if (this.select3 === '私聊') sendData.privacy = 'private';
      this.$socket.emit("sendimage", sendData);
    }
  },
  components: {
    Recorder
  },
  mounted() {
    if (this.$socket) {
      this.$socket.emit("checksess");
      this.$socket.emit('join', this.room)
    }
  }

}
</script>
<style scoped>
.tmp {
  height: 40px;
}

.right_right {
  float: left;
  display: inline;
}

.right_left {
  float: left;
}

.input {
  width: 80%;
}
</style>
