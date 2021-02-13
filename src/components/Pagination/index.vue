<template>
  <div class="pagination-main flex jucenter">
    <el-pagination
      hide-on-single-page
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      v-model:currentPage="currentPage1"
      prev-text="上一页"
      next-text="下一页"
      :page-sizes="pageSizes"
      :page-size="pageSize1"
      layout="sizes, prev, pager, next, jumper"
      :total="total"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'Pagination',
  props: {
    pageSizes: {
      type: Array,
      default: () => [10, 20, 50, 100],
    },
    // 0代表从pageSizes取第0个
    pageSize: {
      type: Number,
      default: 10,
    },
    // 当前页面
    currentPage: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 100,
    },
  },
  setup(props, context) {
    const pageSize1 = computed({
      // eslint-disable-next-line max-len
      get: () => (props.pageSizes.indexOf(props.pageSize) !== -1 ? props.pageSize : props.pageSizes[0]),
      set: (val) => {
        context.emit('update:pageSize', val);
      },
    });
    const currentPage1 = computed({
      get: () => props.currentPage,
      set: (val) => {
        context.emit('update:currentPage', val);
      },
    });

    // 修改页面
    const handleCurrentChange = (val: undefined | number) => {
      if (val !== undefined) {
        context.emit('handle-current-change', val);
      }
    };
    const handleSizeChange = (val: number) => {
      context.emit('update:pageSize', val);
      handleCurrentChange(currentPage1.value);
    };
    // 初始化的时候，加载第一个

    return {
      pageSize1,
      currentPage1,
      handleSizeChange,
      handleCurrentChange,
    };
  },
});
</script>

<style lang="less" scoped>
.pagination-main {
  padding-bottom: 100px;
  padding-top: 50px;
}
</style>
