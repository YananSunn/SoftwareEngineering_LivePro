<style scoped>
.tmp {
height: 40px;
}
</style>
<template>
<div>
  <div class="tmp"> {{ message }} </div>
  <Input v-model="value13" on-enter="sendMessage">
  <Select v-model="select3" slot="prepend" style="width: 80px">
    <Option value="全体">全体</Option>
    <Option value="私聊">私聊</Option>
  </Select>
  <Button slot="append" icon="md-return-left" @click="sendMessage"></Button>
  <Button>here</Button>
  </Input>
</div>
</template>
<script>
export default {
  data() {
    return {
      message: "聊天记录",
      value13: '',
      select3: '全体'
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
