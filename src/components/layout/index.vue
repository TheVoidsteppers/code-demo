<template>
  <div class="layout">
    <div class="layout__main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutMain',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.layout {
  height: 100%;
  display: flex;
  &__main {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
  }
}
</style>
