<style scoped>
.player {}

.container-layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
</style>

<template>
<div class="container-layout">
  <Button>文档管理</Button>
  <Button @click="checkdoc">文档查看</Button>
  <Modal v-model="model1">
    <p slot="header" style="color:#2d8cf0;text-align:center">
      <Icon type="ios-contact" />
      <span>文档查看</span>
    </p>
    <li v-for="ppt in pptlist">
      <span> {{ppt.name}} </span>
      <Button @click="showppt(ppt.name)">查看</Button>
      <Button @click="deleteppt(ppt.name)">删除</Button>
    </li>
    <!--div id="showpptlist">
    </div-->
    <div slot="footer">
      <Button type="primary" size="large" v-on:click="show">展示</Button>
    </div>
  </Modal>
  <Button>白板</Button>
  <Button>共享屏幕</Button>
</div>
</template>


<script type="text/javascript">
//import VueCookie from 'vue-cookie';
//Vue.use(VueCookie)

export default {
  data() {
    return {
      model1: false,
      showid: 0,
      pptlist: [{
        name: 'Decaf.pdf',
        url: '123'
      }, {
        name: 'web.pptx',
        url: '123'
      }],
    }
  },
  methods: {
    checkdoc: function() {
      this.model1 = true;
      this.getList();
    },
    showppt: function(name) {
  //    this.$cookie.set('userPpt', name, 1);
    },
    deleteppt: function(name) {
      this.$ajax.get('/api/uploadFile/deletePPT', {
          timeout: 10000
        })
        .then(function(rdata) {
          alert("删除成功");
        }).catch(function(error) {
          alert("服务器错误");
        });
    },
    getList: function() {
      console.log("this is getlist()")

      this.$ajax.get('/api/uploadFile/PPTList', {
          timeout: 10000
        })
        .then(function(rdata) {
          console.log(rdata);
          this.pptlist = rdata.data.data; //[{name:'', url:''}, {}]

        }).catch(function(error) {
          this.$Message.error('服务器错误' + error);
        });
      //this.showList();
    },
    showList: function() {
      var str = '<RadioGroup v-model=showid>\n';
      console.log(this.pptlist);
      console.log(this.pptlist.length);
      for (var i = 0; i < this.pptlist.length; ++i) {
        str += '<Radio label=' + i + '>\n<span>\n';
        str += this.pptlist[i].name + '\n</span>\n</Radio>\n<br/>\n';
      }
      str += '\n</RadioGroup>';
      console.log(str);
      document.getElementById('showpptlist').innerHTML = str;
    },
    mounted: function() {

    }
  },
}
</script>
