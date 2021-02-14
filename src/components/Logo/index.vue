<template>
  <router-link :to="to" class="logo-main flex">
    <img
      v-if="globalSettings.logoType === 'logo'"
      src="@/assets/images/logo/logo.png"
      class="logo"
    >
    <i
      v-else-if="globalSettings.logoType === 'iconfont'"
      :class="globalSettings.logoIconName"
      class="icon"
    />
    <!-- <a-divider type="vertical" class="divider" /> -->
    <el-divider direction="vertical" class="divider" />
    <!-- <span v-if="showTitle" class="title">{{ globalSettings.siteName }}</span> -->
    <span v-if="showTitle" class="title">{{ $store.state.userStore.userInfo.tag }}</span>
  </router-link>
</template>

<script lang="ts">
import globalSettings from '@/setting';
import { reactive, toRefs, defineComponent } from 'vue';

export default defineComponent({
  name: 'Logo',
  props: {
    showLogo: {
      type: Boolean,
      default: true,
    },
    showTitle: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    globalSettings() {
      return globalSettings;
    },
    to() {
      const rtn = {
        path: '/',
      };
      return rtn;
    },
  },
  setup() {
    // const { proxy } = getCurrentInstance();
    const state = reactive({});
    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="less" scoped>
.logo-main {
  // display:flex;
  align-items: center;
  text-decoration: none;
  &.is-link {
    cursor: pointer;
  }
  .divider {
    height: 20px;
  }
  .title {
    // text-decoration: none;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
    white-space: nowrap;
  }
}
</style>
