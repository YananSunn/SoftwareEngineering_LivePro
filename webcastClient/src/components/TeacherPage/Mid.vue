<style scoped>
.container-layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.upContext {
  float: left;
  min-width: 700px;
  height: 50px;
}

.midContext {
  float: left;
  min-width: 700px;
  height: 500px;
}

.empty {}
</style>

<template>
<div class="empty">
  <div class="upContext">
    <up />
  </div>
  <br />
  <div class="midContext">
    <mid />
  </div>
</div>
</template>


<script>
import Up from './MidUp.vue'
import Mid from './MidMid.vue'

export default {
  components: {
    Up,
    Mid
  }

}
</script>
