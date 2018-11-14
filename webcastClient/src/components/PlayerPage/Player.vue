<template>
<div class="layout">
  <div class="player" id='player'>
  </div>
</div>
</template>

<script type="text/javascript">
export default {
  data: () => ({
    uid: '',
    vid: ''
  }),
  mounted() {
    this.updateUid('9f528fa01e')
    this.updateVid('242078')
    let recaptchaScript = document.createElement('script')
    recaptchaScript.src = 'https://player.polyv.net/livescript/liveplayer.js'
    document.body.appendChild(recaptchaScript)
    recaptchaScript.onload = () => {
      var player = polyvObject('#player').livePlayer({
        'width': '350',
        'height': '250',
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
.layout{
  padding-left: 0;
  padding-top: 0;
}
.player {

}
</style>
