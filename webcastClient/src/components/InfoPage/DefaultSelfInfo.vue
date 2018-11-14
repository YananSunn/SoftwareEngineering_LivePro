<template>
<Row style="padding:20px">
  <Col span="11">
  <Card :bordered="false">
    <p slot="title">个人资料</p>
    <p>姓名 {{name}}</p>
    <p>性别 {{gender}}</p>
    <p>生日 {{birthday}}</p>
    <p>兴趣</p>
    <li v-for="hob in hobby">
      <span>{{hob}}</span>
    </li>
    <p>自我介绍 {{selfIntroduce}}</p>
    <Button v-on:click="$emit('edit_info')">编辑</Button>
  </Card>
  </Col>
  <!-- <Button v-on:click="test()">here</Button> -->
</Row>
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
  watch: {

  },
  created() {

    // console.log("default name:" + name);
  },
  methods:{

  },
  data() {
    return {
    }
  }
}
</script>
