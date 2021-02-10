<template>
  <el-menu
    :background-color="variables.g_sidebar_background_color"
    :text-color="variables.g_sidebar_text_color"
    :active-text-color="variables.g_sidebar_active_text_color"
    unique-opened
    :default-active="$store.state.routeStore.activeRoute"
    @select="handleSelect"
  >
    <SideBarItem
      v-for="route in $store.state.routeStore.sidebarRoute"
      :key="route.path"
      :item="route"
      :base-path="route.path"
    />
  </el-menu>
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent } from 'vue';
import variables from '@/styles/variables.less';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'SideBar',
  props: {},
  computed: {
    variables() {
      return variables;
    },
  },
  setup() {
    // 开启
    const state = reactive({});
    const router = useRouter();
    const handleSelect = (key) => {
      // 点击open
      // console.log({ key, keyPath });
      // 设置打开
      router.push({
        path: key,
      });
    };
    const resolvePath = (routePath) => {
      console.log(routePath);
      return routePath;
    };
    return {
      ...toRefs(state),
      resolvePath,
      handleSelect,
    };
  },
});
</script>

<style lang="less" scoped>
.sidebar-main {
}
</style>
