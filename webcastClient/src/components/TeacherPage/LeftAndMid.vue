<style scoped>
.container-layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.leftContext {
  float: left;
  width: 200px;
  min-height: 560px;
}

.midContext {
  float: right;
  min-width: 757px;
  min-height: 550px;
}

.empty {}
</style>

<template>
<div class="empty">
  <div class="leftContext">
    <left />
  </div>
  <div class="midContext">
    <mid />
  </div>
</div>
</template>
<script>
import Left from './Left.vue'
import Mid from './Mid.vue'

export default {
  components: {
    Left,
    Mid
  }

}
</script>
