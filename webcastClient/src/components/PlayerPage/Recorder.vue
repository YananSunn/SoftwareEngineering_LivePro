<template>
<div>

  <head>
    <!-- <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> -->
    <title>Live input record and playback</title>
    <!-- /* <style type='text/css'>
      ul { list-style: none; }
      #recordingslist audio { display: block; margin-bottom: 10px; }
    </style> */ -->
  </head>

  <body>

    <!-- <h1>Recorder.js simple WAV export example</h1>

    <p>Make sure you are using a recent version of Google Chrome.</p>
    <p>Also before you enable microphone input either plug in headphones or turn the volume down if you want to avoid ear splitting feedback!</p> -->

    <button v-on:click="startRecording();">record</button>
    <button v-on:click="stopRecording();" disabled>stop</button>

    <h2>Recordings</h2>
    <ul id="recordingslist"></ul>

    <h2>Log</h2>
    <!-- <pre id="log"></pre> -->

  </body>
</div>
</template>

<script>

import Recorder from '../../../static/recorder/recorder.js'

export default {
  data: () => ({
    // audio_context,
    // recorder
  }),
  mounted() {
    let window = document.createElement('script')
    window.src = 'recorder.js'
    document.body.appendChild(window)

    var audio_context;
    var recorder;

    window.onload = function init() {
      try {
        // webkit shim
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
        window.URL = window.URL || window.webkitURL;
      audio_context = new AudioContext;
        navigator.getUserMedia({
          audio: true
        }, startUserMedia, function(e) {
        });
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
    // }
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
</script>
