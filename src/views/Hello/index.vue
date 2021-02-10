<template>
  <div class="hello-main">
    Hello
  </div>
</template>

<script lang="ts">
import {
  getCurrentInstance, reactive, toRefs, defineComponent,
} from 'vue';

export default defineComponent({
  name: 'Hello',
  props: {},
  setup() {
    const { proxy } = getCurrentInstance()!;
    console.log(proxy);
    const state = reactive({});
    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="less" scoped>
.hello-main{
}
</style>
