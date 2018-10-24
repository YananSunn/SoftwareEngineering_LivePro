

<template>
  <!-- <body onload="">

  </body> -->
<div class="player" id='player'>
</div>
</template>


<script type="text/javascript">
export default {
  data: () => ({
    uid: '',
    vid: ''

  }),
  beforeCreate(){

    console.log("before")
  },

  mounted() {
    this.updateUid('9f528fa01e')
    this.updateVid('242078')
    let recaptchaScript = document.createElement('script')
    recaptchaScript.src = 'https://player.polyv.net/livescript/liveplayer.js'
    document.body.appendChild(recaptchaScript)
    recaptchaScript.onload = () => {
      var player = polyvObject('#player').livePlayer({
        'width': '800',
        'height': '500',
        'uid': this.uid,
        'vid': this.vid
        });
    }

  },
  methods: {
    updateUid: function(_uid) {
      this.uid = _uid;
    },
    updateVid: function(_vid) {
      this.vid = _vid;
    }
  }
}
</script>
<style scoped>
.player {
  /* background-color: #00FFFF;
  height: 500px;
  width: 700px; */
}
</style>
