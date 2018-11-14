<style scoped>
.container-layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.empty {}

.upContext {
  float: left;
  min-width: 200px;
  min-height: 150px;
}

.midContext {
  float: left;
  min-width: 200px;
  min-height: 200px;
}

.downContext {
  float: right;
  min-width: 200px;
  min-height: 203px;
}
</style>

<template>
<div class="container-layout">
  <div class="upContext">
    <up />
  </div>
  <div class="midContext">
    <mid />
  </div>
  <div class="downContext">
    <down />
  </div>
</div>
</template>
<script>
import Up from './LeftUp.vue'
import Mid from './LeftMid.vue'
import Down from './LeftDown.vue'

export default {
  components: {
    Up,
    Mid,
    Down,
  }

}
</script>
