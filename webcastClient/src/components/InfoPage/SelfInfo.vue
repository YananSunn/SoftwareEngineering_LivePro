
<template>
<div class="layout">
  <span> </span>
  <p class="title">个人头像</p>
  <HR class="line" double>
  </HR>
  <Upload action="//jsonplaceholder.typicode.com/posts/">
    <Avatar icon="ios-person" size="large" />
    <Button>上传头像</Button>
  </Upload>


  <p class="title">基本资料</p>
  <HR class="line" double>
  </HR>
  <DefaultSelfInfo v-if="showDefault" v-on:edit_info="showDefault = false"></DefaultSelfInfo>
  <EditSelfInfo v-if="!showDefault" v-on:default_info="showDefault = true"></EditSelfInfo>

</div>
</template>
<script>
import DefaultSelfInfo from '@/components/InfoPage/DefaultSelfInfo.vue'
import EditSelfInfo from '@/components/InfoPage/EditSelfInfo.vue'

export default {
  data() {
    return {
      showDefault: true
    };
  },
  methods: {

  },
  computed: {

  },
  components: {
    DefaultSelfInfo,
    EditSelfInfo
  }

}
</script>

<style scoped>
.layout {
  left: 10px;
  /* border: 1px solid #d7dde4;
  background: #f5f7f9; */
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.title {
  margin-top: 20px;
  text-align: left;
  font-size: 20px;
}

.line {
  border: 3;
  width: 80%;
  color: #d9d9d9;
  SIZE: 3;
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>
