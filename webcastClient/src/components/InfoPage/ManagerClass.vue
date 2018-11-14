<template>
<Form :model="formItem" :label-width="100">
  <FormItem label="标题" class="formItem" required>
    <Input v-model="formItem.name" placeholder="请输入标题"></Input>
  </FormItem>
  <FormItem label="密码" class="formItem">
    <Input v-model="formItem.password" placeholder="请输入密码，留空则无密码"></Input>
  </FormItem>
  <FormItem class="formItem">
    <Button type="primary" v-on:click="submitClick">Submit</Button>
  </FormItem>
</Form>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default () {
        return ''
      }
    },
    password: {
      type: String,
      default () {
        return ''
      }
    },
  },
  data() {
    return {
      formItem: {
        name: this.name,
        password: this.password,
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    submitClick: function() {
      this.$ajax.post('/api/users/changeInfo', {
          title: this.formItem.name,
          password: this.formItem.password,
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      this.$emit('default_info');
    },
    cancelClick: function() {
      this.$emit('default_info');
    }
  }
}
</script>
<style scoped>
.formItem {
  width: 50%;
  /* background-color: #298372 */
}
</style>
