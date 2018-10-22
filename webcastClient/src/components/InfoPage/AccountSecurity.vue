
<template>
<div class="layout">
  <span> </span>
  <p class="title">修改密码</p>
  <HR class="line" double>
  </HR>

  <Password v-if="passwordDefault" v-on:edit_password_info="passwordDefault = false"></Password>
  <EditPassword v-if="!passwordDefault" v-on:default_password_info="passwordDefault = true"></EditPassword>

  <p class="title">绑定邮箱</p>
  <HR class="line" double>
  </HR>

  <Email v-if="emailDefault" v-on:edit_email_info="emailDefault = false"></Email>
  <EditEmail v-if="!emailDefault" v-on:default_email_info="emailDefault = true"></EditEmail>

</div>
</template>
<script>
import Password from '@/components/InfoPage/Password.vue'
import EditPassword from '@/components/InfoPage/EditPassword.vue'
import Email from '@/components/InfoPage/Email.vue'
import EditEmail from '@/components/InfoPage/EditEmail.vue'

export default {

  data() {
    return {
      passwordDefault: true,
      emailDefault: true
    };
  },
  methods: {

  },
  computed: {

  },
  components: {
    Password,
    EditPassword,
    Email,
    EditEmail
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
  padding-top: 20px;
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
