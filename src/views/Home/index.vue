<template>
  <div class="home-main">
    Home
  </div>
</template>

<script lang="ts">
import {
  getCurrentInstance, reactive, toRefs, defineComponent, ComponentInternalInstance,
} from 'vue';

export default defineComponent({
  name: 'Home',
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
.home-main{
}
</style>
