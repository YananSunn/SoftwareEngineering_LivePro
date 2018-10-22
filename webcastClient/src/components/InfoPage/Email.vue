<template>
<div>
  <div>
    <span>您当前还未绑定邮箱</span>
    <button v-on:click="$emit('edit_email_info')">绑定邮箱</button>
  </div>
  <div>
    <span>当前邮箱</span>
    <span>{{myEmail}}</span>
    <button v-on:click="$emit('edit_email_info')">修改</button>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      myEmail: 'sunny@mails.tsinghua.edu.cn'
    };
  },
  methods: {

  },
  computed: {

  },
  components: {

  }
}
</script>
