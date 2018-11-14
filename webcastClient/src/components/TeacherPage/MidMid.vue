<style scoped>
.layout-footer-center {
  text-align: center;
}

.container-layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 1px;
  overflow: hidden;
}
</style>

<template>
<div class=".container-layout">
  <!--br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <!Upload ref="upload" :format="['xls','doc','ppt']" action="/api/uploadFile/uploadPPT"-->
  <!-- <Avatar :src=avatar size="large" /> -->
  <!--Button> 添加PPT </Button>

    </Upload-->
  <!--iframe style="width:750px;height:510px" src='https://view.officeapps.live.com/op/view.aspx?src=https://webcast.blob.core.windows.net/resourses/totalMaterial/PPT/web.pptx' width='100%' height='100%' frameborder='1'>
    </iframe-->
  <iframe background="#f5f7f9" style="width:717px;height:405px" src='https://hk2-powerpoint.officeapps.live.com/p/PowerPointFrame.aspx?PowerPointView=SlideShowView&ui=zh-CN&rs=zh-CN&WOPISrc=http%3A%2F%2Fhk2-view-wopi%2Ewopi%2Elive%2Enet%3A808%2Foh%2Fwopi%2Ffiles%2F%40%2FwFileId%3FwFileId%3Dhttps%253A%252F%252Fwebcast%252Eblob%252Ecore%252Ewindows%252Enet%253A443%252Fresourses%252FtotalMaterial%252FPPT%252Fweb%252Epptx&access_token_ttl=0&wdSlideId=293&wdModeSwitchTime=1541588130681'
    width='100%' height='100%' frameborder='1'>
  </iframe>
  <!--iframe :src="'https://docs.google.com/viewer?url="fileurl"></iframe-->
</div>
</template>
<script>
//import Up from '@/components/TeacherPage/LeftUp.vue'

export default {
  methods: {
    upload: function() {
      console.log("this is upload()")
      let that = this;
      let _file = that.$route.query.id;
      if (that.file.length > 0) {
        that.loading2 = true;
        //创建 formData 对象
        let formData = new FormData();
        //向 formData 对象中添加文件
        formData.append('file', _file);

        //多个文件上传
        for (var i = 0; i < that.file.length; i++) {
          formData.append("uploadFile", that.file[i]); // 文件对象
        }

        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }

        axios.post('/api/uploadFile/uploadPPT', formData, {
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
  },
  components: {}

}
</script>
