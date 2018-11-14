<template>
<div>
  <button @click="startRecording">开始录音</button>
  <button @click="stopRecording">停止录音</button>
  <button @click="downloadwav">下载</button>
  <button @click="sendvoice">发送</button>
  <Input v-model="dstname"></Input>
</div>
</template>

<script type="text/javascript">
import Recorder from 'recorder-js'
const audioContext = new(window.AudioContext || window.webkitAudioContext)();
const recorder = new Recorder(audioContext, {});

export default {
  data() {
    return {
      isRecording: false,
      blob: null,
      dstname:'',
      room:this.classId
    };
  },props:{
    classId:String
  },
  mounted: function() {
    this.initial();
  },
  methods: {
    initial: function() {
      navigator.mediaDevices.getUserMedia({
          audio: true
        })
        .then(stream => recorder.init(stream))
        .catch(err => console.log('Uh oh... unable to get stream...', err));
    },
    startRecording: function() {
      recorder.start()
        .then(() => this.isRecording = true);
      // console.log('startRecording');
    },
    stopRecording: function() {
      recorder.stop()
        .then(({
          blob,
          buffer
        }) => {
          console.log(blob);
          this.blob = blob;
          // buffer is an AudioBuffer
        });
      // console.log('stopRecording');
    },
    downloadwav: function() {
      Recorder.download(this.blob, 'my-audio-file'); // downloads a .wav file
    },
    sendvoice:function()
    {
      this.$socket.emit("sendvoice",{privacy:"public",room:this.room,dstname:this.dstname,data:this.blob});
    }
  },
  computed: {

  },
  components: {

  }
}
</script>
