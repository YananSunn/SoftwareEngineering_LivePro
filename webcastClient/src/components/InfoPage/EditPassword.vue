<template>
    <div>
      <span>
        输入当前密码：
        <input type="tel" style="-webkit-text-security:disc">
      </span>
      <span>忘记当前密码？</span>
      <br>
      <span>
        输入新密码：
        <input type="tel" style="-webkit-text-security:disc">
      </span>
      <br>
      <span>
        再次输入新密码：
        <input type="tel" style="-webkit-text-security:disc">
      </span>
      <br>
      <button v-on:click="$emit('default_password_info')">保存修改</button>
      <button v-on:click="$emit('default_password_info')">取消</button>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>

</style>
