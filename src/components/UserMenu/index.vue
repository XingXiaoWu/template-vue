<template>
  <el-dropdown @command="handleCommand">
    <div class="flex row alicenter menu">
      <i class="qc-geren3x" />
      <!-- {{ $store.state.userStore.account }} -->
      <p class="left10 g-top-header-p">{{ realname }}</p>
      <p class="left10 g-top-header-p">{{ department }}</p>
      <i class="qc-xiala left10" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="change-password">修改密码</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import {
  computed, reactive, toRefs, defineComponent,
} from 'vue';
import { useStore } from 'vuex';
// 往后拓充 'a'|'b'|'c'
type Commands = 'change-password';

export default defineComponent({
  name: 'UserMenu',
  props: {},
  // 使用小写-格式
  emits: ['change-password'],
  setup(props, context) {
    // const { proxy } = getCurrentInstance();
    const state = reactive({});
    const store = useStore();
    const realname = computed(() => store.state.userStore.userInfo.realname);
    const department = computed(() => store.state.userStore.userInfo.department);
    const handleCommand = (e: Commands) => {
      // 点击
      context.emit(e);
    };
    return {
      ...toRefs(state),
      realname,
      department,
      handleCommand,
    };
  },
});
</script>

<style lang="less" scoped>
.menu {
  color: white;
  justify-content: space-around;
  .left10 {
    margin-left: 10px;
  }
}
</style>
