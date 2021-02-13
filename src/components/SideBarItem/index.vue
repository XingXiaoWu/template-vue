<template>
  <!-- 没有隐藏,理论上不需要判断，因为已经在store里面判断过了 -->
  <!-- <template v-if="!item.meta || !item.meta.sidebarHiiden"> -->
  <!-- 没有子项 -->
  <el-menu-item v-if="!hasChildren" :index="resolvePath(item.path)">
    <template #title>
      <i v-if="item.meta && item.meta.icon" :class="item.meta.icon" class="icon" />
      <span>{{ item?.meta?.title }}</span>
    </template>
  </el-menu-item>
  <!-- 有子项 -->
  <el-submenu v-else :index="resolvePath(item.path)">
    <!-- title -->
    <template #title>
      <i v-if="item.meta && item.meta.icon" :class="item.meta.icon" class="icon" />
      <span>{{ item?.meta?.title }}</span>
    </template>
    <!-- 内容 -->
    <SideBarItem
      v-for="route in item.children"
      :key="route.path"
      :item="route"
      :base-path="resolvePath(item.path)"
    />
  </el-submenu>
</template>

<script lang="ts">
// 1.判断有没有children
// 有:渲染数组
// 无:渲染自己
import {
  reactive, toRefs, computed, defineComponent,
} from 'vue';
import { pathStart } from '@/utils/regular';
import path from 'path';

export default defineComponent({
  name: 'SideBarItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
    basePath: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const state = reactive({});
    const hasChildren = computed(() => props.item.children && props.item.children.length > 0);
    // const isExternal = (routePath) => /^(https?:|mailto:|tel:)/.test(routePath);
    const isExternal = (routePath: string) => pathStart.test(routePath);
    const resolvePath = (routePath: string) => {
      // 判断是不是/开头，是的话直接返回，不然返回basepath/path
      if (isExternal(routePath)) {
        return routePath;
      }
      return path.resolve(props.basePath, routePath);
    };
    return {
      ...toRefs(state),
      hasChildren,
      isExternal,
      resolvePath,
    };
  },
});
</script>

<style lang="less" scoped>
.sidebaritem-main {
}
</style>
