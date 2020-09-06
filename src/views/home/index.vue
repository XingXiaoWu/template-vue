<template>
  <div class="home-main">
    <p>这是home页</p>
    <el-button type="primary"
               @click="goto">
      点我跳转错误页面
    </el-button>
    <el-button type="primary" @click="gotable">
      点击跳转表格
    </el-button>
    <div>
      <div/>
    </div>
  </div>
</template>

<script>
export { default } from './logic';
</script>

<style lang="less" scoped>
    .home-main {
        color: @green;
    }
</style>
