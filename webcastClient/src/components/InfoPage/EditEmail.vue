<template>
    <div>
      <Input v-model="value" placeholder="请输入您当前的邮箱"></Input>
      <Input v-model="value" placeholder="请输入您新的邮箱"></Input>
      <button v-on:click="$emit('default_email_info')">保存修改</button>
      <button v-on:click="$emit('default_email_info')">取消</button>
    </div>
</template>
<script>
    export default {
      data() {
        return {

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
