
<template>
<div class="layout">
  <span> </span>
  <p class="title">个人头像</p>
  <HR class="line" double>
  </HR>

  <Upload
  ref="upload"
  :format="['jpg','jpeg','png']"
  action="/api/uploadFile/userIcon"
    >
    <img class="user_avatar":src=avatar>
    <!-- <Avatar :src=avatar size="large" /> -->
    <Button v-on:click="updateAvatar">上传头像</Button>
  </Upload>

  <p class="title">基本资料</p>
  <HR class="line" double>
  </HR>
  <DefaultSelfInfo v-if="showDefault" v-on:edit_info="showDefault = false" :name="input" :gender="select" :birthday="date" :hobby="checkbox" :selfIntroduce="textarea"></DefaultSelfInfo>
  <EditSelfInfo v-if="!showDefault" v-on:default_info="showDefault = true"  :name="input" :gender="select" :birthday="date" :hobby="checkbox" :selfIntroduce="textarea"></EditSelfInfo>

</div>
</template>
<script>
import DefaultSelfInfo from './DefaultSelfInfo.vue'
import EditSelfInfo from './EditSelfInfo.vue'

export default {
  data() {
    return {
      avatar: "",
      input: '',
      select: '',
      date: new Date(),
      checkbox: [],
      textarea: new String(),
      showDefault: true,
      // reflash: false
    };
  },
  watch: {
    showDefault: function() {
      if (this.showDefault == true) {
        console.log("this is watch");
        this.initialData();
      }
    }
  },
  created() {
    console.log("this is created");
    this.initialData();
    // this.input = "sunny";
    // this.select = "male";
    // this.checkbox = ["算法", "前端"];
    // this.textarea = "哈哈哈";
  },
  mounted(){
    console.log("this is mounted");
  },
  methods: {
    updateAvatar: function(){
      console.log("this is lookUserIcon");
      this.$ajax.get('/api/uploadFile/lookUserIcon', {

        })
        .then((res)=>{
          this.avatar = res.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    initialData: function(){
      console.log("this is initialData");
        console.log("this is lookUserIcon");
        this.$ajax.get('/api/uploadFile/lookUserIcon', {
          })
          .then((res)=>{
            this.avatar = res.data.data;
          })
          .catch(function(error) {
            console.log(error);
          });

        this.$ajax.get('/api/users/current')
          .then((res)=>{
            console.log("this is inside current");
            this.input = res.data.data.name;
            this.select = res.data.data.gender;
            this.date = res.data.data.birthday;
            this.checkbox = res.data.data.hobby;
            this.textarea = res.data.data.selfIntroduce;
            // this.$router.go(0);
            // this.reflash = true;
          })
          .catch(function(error) {
            console.log(error);
          });

          console.log("current over");
    },
    upload: function() {
      console.log("this is upload()")
      let that = this;
      let _jsid = that.$route.query.id;
      if (that.file.length > 0) {
        that.loading2 = true;
        //创建 formData 对象
        let formData = new FormData();
        //向 formData 对象中添加文件
        formData.append('file', _jsid);

        //多个文件上传
        // for (var i = 0; i < that.file.length; i++) {
        //   formData.append("uploadFile", that.file[i]); // 文件对象
        // }

        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }

        axios.post('/api/uploadFile/userIcon', formData, {
          timeout: 10000
        }).then(function(rdata) {
          that.loading2 = false;
          if (rdata.data == "0") {
            that.islook = false;
            that.islookshenghe = true;
          }
          console.log(rdata);
        }).catch(function(error) {
          that.loading2 = false;
          that.$Message.error('服务器错误' + error);
        });
      } else {
        that.$Message.error("请至少上传一个文件");
      }
    },
    handleUpload: function(file) {
        let that = this;
        that.file.push(file);
        return false;
      }
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

.user_avatar{
  height: 100px;
  width: 100px;
  border-radius:50px;
}
</style>
