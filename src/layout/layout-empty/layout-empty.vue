<template>
  <div class='layout-empty-main'>
    <router-view :key="key" />
  </div>
</template>
<script>
export { default } from './logic';
</script>
<style lang="less" scoped>
.layout-empty-main {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
