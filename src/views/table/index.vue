<template>
  <div class="table">
    <free-table
      border
      :data="data"
      :column="complexColumn"
      :columnsProps="columnsProps"
      @selection-change="selectionChange"
      pagination
      :auto-scroll="false"
      :total="100"
      :page.sync="searchBean.page"
      :limit.sync="searchBean.limit"
      @pagination="getList"
    />
  </div>
</template>

<script>
export { default } from './logic';
</script>

<style lang="less" scoped>
    .table {
        width: 100%;
    }
</style>
