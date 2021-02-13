<template>
  <i class="margin30 qc-guanji" style="color:#fff;" />
  <span @click="loginOut" class="margin5 g-top-header-p loginOut">退出登录</span>
</template>

<script lang="ts">
import {
  reactive, toRefs, getCurrentInstance, defineComponent,
} from 'vue';
import { useStore } from 'vuex';
// import { router } from '@/router';

export default defineComponent({
  name: 'LoginOut',
  props: {},
  setup() {
    const store = useStore();
    const { proxy } = getCurrentInstance()!;
    const state = reactive({});
    const loginOut = () => {
      // proxy!.$api.loginOut();
      // proxy.api.loginOut().then(() => {
      // store.dispatch('userStore/logonFailure');
      // window.location.reload();
      // router.push({
      //   name: 'Login',
      // });
      // });
    };
    return {
      ...toRefs(state),
      loginOut,
    };
  },
});
</script>

<style lang="less" scoped>
.margin5{
  margin-left: 5px;
}
.margin30{
  margin-left: 30px;
}
.loginOut{
  cursor: pointer
}
</style>
