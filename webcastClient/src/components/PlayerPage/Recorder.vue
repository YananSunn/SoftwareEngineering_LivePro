<!-- <template>
<div>
  <head>
    <title>Live input record and playback</title>
  </head>
  <body>
    <button v-on:click="startRecording();">record</button>
    <button v-on:click="stopRecording();" disabled>stop</button>
    <h2>Recordings</h2>
    <ul id="recordingslist"></ul>
    <h2>Log</h2>
  </body>
</div>
</template>

<script>
import Recorder from 'recorder-js'

export default {
  data: () => ({
  }),
  mounted() {
    let window = document.createElement('script')
    window.src = 'recorder.js'
    document.body.appendChild(window)
    // var audio_context;
    // var recorder;
    const audio_context;
    const recorder;
    window.onload = function init() {
      try {
        // webkit shim
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
        window.URL = window.URL || window.webkitURL;
        audio_context = new AudioContext;
        navigator.getUserMedia({
          audio: true
        }, startUserMedia, function(e) {});

        function startUserMedia(stream) {
          var input = audio_context.createMediaStreamSource(stream);
          // Uncomment if you want the audio to feedback directly
          //input.connect(audio_context.destination);
          recorder = new Recorder(input);
        }
      } catch (e) {
        alert('No web audio support in this browser!');
      }

    };
  },
  methods: {
    startRecording: function() {
      recorder && recorder.record();
      button.disabled = true;
      button.nextElementSibling.disabled = false;
    },
    stopRecording: function() {
      recorder && recorder.stop();
      button.disabled = true;
      button.previousElementSibling.disabled = false;
      // create WAV download link using audio data blob
      createDownloadLink();
      recorder.clear();
    },
    createDownloadLink: function() {
      recorder && recorder.exportWAV(function(blob) {
        var url = URL.createObjectURL(blob);
        var li = document.createElement('li');
        var au = document.createElement('audio');
        var hf = document.createElement('a');
        au.controls = true;
        au.src = url;
        hf.href = url;
        hf.download = new Date().toISOString() + '.wav';
        hf.innerHTML = hf.download;
        li.appendChild(au);
        li.appendChild(hf);
        recordingslist.appendChild(li);
      });
    }
  }
}
</script> -->

<template>
<div >
  <button @click="handleBtnClick">发送语音</button>
  <span>录音时间：{{duration}}秒</span>
  <button @click="send_voice">发送</button>
  <button @click="cancel_mp3">取消</button>
</div>
</template>

<script type="text/javascript">
import Recorder from 'recorder-js'
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const recorder = new Recorder(audioContext,{});
let isRecording = false;
let blob = null;

export default {
  data() {
    return {

    };
  },
  methods: {
    handleBtnClick: function() {
      let that = this;

      recorder.start().then((() => isRecording = true));
      let duration = 0;
      this.duration = 0;
      clearInterval(this.timer);
      this.timer = setInterval(function(){
        duration++;
        that.duration = duration;
      },1000);
    },
    cancel_mp3:function(){
      clearInterval(this.timer);
      try{
        recorder.stop();
        if(TypeError)
        throw '错误';
      }catch(error){
        // if(error =='错误'){
        //   this.$Message.success("无音频设备");
        // }
      }
    },
    send_voice: function() {
      let that=this;
      clearInterval(this.timer);
      try{
        recorder.stop().then((({blob, buffer})=>{
          blob = blob;
          let config ={
            headers:{'Content-Type':'multipart/form-data'}
          };
          let formData = new FormData();
          formData.append('file',blob,Data.parse(new Data())+".mp3");
          formData.append('to_uid',that.user.uid);
          formData.append('accept',"client");
          formData.append('news_type',"mp3");

          //post
        }));
        if(TypeError)
        throw '错误';
      }catch(error){
        // if(error =='错误'){
        //   this.$Message.success("无音频设备");
        // }
      }

    }
  },
  computed: {

  },
  components: {

  }
}
</script>
