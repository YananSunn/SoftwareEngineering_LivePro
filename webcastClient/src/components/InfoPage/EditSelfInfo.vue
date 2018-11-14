
<template>
<Form :model="formItem" :label-width="100">
  <FormItem label="姓名" class="formItem" required>
    <Input v-model="formItem.input" placeholder="请输入你的昵称"></Input>
  </FormItem>
  <FormItem label="性别" class="formItem" required>
    <Select v-model="formItem.select">
      <Option value="male">男</Option>
      <Option value="female">女</Option>
      <Option value="secret">保密</Option>
    </Select>
  </FormItem>
  <FormItem label="生日" class="formItem">
    <Row>
      <Col span="11">
      <DatePicker type="date" placeholder="请选择你的生日" v-model="formItem.date"></DatePicker>
      </Col>
      <Col span="2" style="text-align: center">-</Col>
    </Row>
  </FormItem>
  <FormItem label="请选择你感兴趣的领域" class="formItem">
    <CheckboxGroup v-model="formItem.checkbox">
      <Checkbox label="算法"></Checkbox>
      <Checkbox label="前端"></Checkbox>
      <Checkbox label="后端"></Checkbox>
      <Checkbox label="竞赛"></Checkbox>
    </CheckboxGroup>
  </FormItem>
  <FormItem label="自我介绍" class="formItem">
    <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="介绍一下你自己吧"></Input>
  </FormItem>
  <FormItem class="formItem">
    <Button type="primary" v-on:click="submitClick">Submit</Button>
    <Button style="margin-left: 8px" v-on:click="cancelClick">Cancel</Button>
  </FormItem>
</Form>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default () {
        return {}
      }
    },
    gender: {
      type: String,
      default () {
        return {}
      }
    },
    birthday: {
      type: Date,
      default () {
        return {}
      }
    },
    hobby: {
      type: Array,
      default () {
        return {}
      }
    },
    selfIntroduce: {
      type: String,
      default () {
        return {}
      }
    }
  },
  data() {
    return {
      formItem: {
        input: this.name,
        select: this.gender,
        date: this.birthday,
        checkbox: this.hobby,
        textarea: this.selfIntroduce
      }
    }
  },
  created() {
  },
  mounted(){
  },
  methods: {
    submitClick: function() {
      this.$ajax.post('/api/users/changeInfo', {
          name: this.formItem.input,
          gender: this.formItem.select,
          birthday: this.formItem.date,
          hobby: this.formItem.checkbox,
          selfIntroduce: this.formItem.textarea
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
