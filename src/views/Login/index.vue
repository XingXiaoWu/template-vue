<template>
  <div class="login-main">
    Login
  </div>
</template>

<script lang="ts">
import {
  getCurrentInstance, reactive, toRefs, defineComponent, ComponentInternalInstance,
} from 'vue';

export default defineComponent({
  name: 'Login',
  props: {},
  setup() {
    const { proxy } = getCurrentInstance() as ComponentInternalInstance;
    console.log(proxy);
    const state = reactive({});
    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="less" scoped>
.login-main{
}
</style>
