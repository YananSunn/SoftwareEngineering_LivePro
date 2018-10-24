
<template>
<div>
  <div class="tmp"> {{ message }} </div>
  <!-- <div class="right"> -->
    <div class="right_left">
      <Input v-model="value13" on-enter="sendMessage" class="input" v-if="keyBoardInput">
      <Select v-model="select3" slot="prepend" style="width: 60px">
        <Option value="全体">全体</Option>
        <Option value="私聊">私聊</Option>
      </Select>
      <Button slot="append" icon="md-return-left" @click="sendMessage"></Button>
      </Input>
      <button v-if="!keyBoardInput">按住说话</button>
    </div>
    <div class="right_right">
      <button v-on:click="keyBoardInput = !keyBoardInput">
        <Icon type="md-keypad" v-if="keyBoardInput"></Icon>
        <Icon type="ios-mic-outline" v-if="!keyBoardInput"></Icon>
      </button>
      <Upload action="//jsonplaceholder.typicode.com/posts/">
          <Button icon="ios-cloud-upload-outline"></Button>
      </Upload>

    </div>
  <!-- </div> -->
</div>
</template>
<script>
export default {
  data() {
    return {
      message: "聊天记录",
      value13: '',
      select3: '全体',
      keyBoardInput: true
    }
  },
  methods: {
    sendMessage: function() {
      this.message = this.message + '\n' + this.value13
      this.value13 = ''
    }
  }
}
</script>
<style scoped>
.tmp {
height: 40px;
}

/* .left{
  float: left;
} */

/* .right{
  float: right;
} */

.right_right{
  float: left;
  display: inline;
}

.right_left{
  float: left;
}

.input{
  width: 80%;
}
</style>
