<template>
  <el-container class="layout-container1">
    <el-header class="layout-header flex jusb">
      <Logo />
      <div class="flex row alicenter">
        <UserMenu @change-password="visible = true" />
        <LoginOut />
      </div>
    </el-header>
    <!-- 用于产生 -->
    <el-container class="layout-container2">
      <el-aside :width="realSidebarWidth" class="layout-sidebar">
        <SideBar />
      </el-aside>
      <el-container>
        <el-main class="layout-content">
          <!-- 添加面包屑 -->
          <div class="bread-crumbs">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item v-for="item in breadcrumbList" :key="item.path" :to="item.path">
                {{ item.meta.title }}
              </el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="layout-content-main">
            <router-view />
          </div>
        </el-main>
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
    </el-container>
  </el-container>
  <PasswordDialog v-model="visible" v-model:loading="loading" @success="go2login" />
</template>

<script lang="ts">
import {
  defineComponent, reactive, toRefs, computed,
} from 'vue';

import variables from '@/styles/variables.less';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ElMessage } from 'element-plus';

export default defineComponent({
  name: 'LayoutMain',
  computed: {
    variables() {
      return variables;
    },
    realSidebarWidth() {
      // 判断当前是否收起来
      const sidebarCollapse = false;
      if (sidebarCollapse) {
        return variables.g_sidebar_open_width;
      }
      return variables.g_sidebar_open_width;
    },
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const state = reactive({
      visible: false,
      loading: false,
    });
    const breadcrumbList = computed(() => {
      const matched = route.matched.filter(
        (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false,
      );
      return matched;
    });
    const go2login = () => {
      ElMessage.success('密码修改成功，请重新登陆');
      store.dispatch('userStore/logonFailure');
      // window.location.reload();
      router.push({
        name: 'Login',
      });
    };
    return {
      ...toRefs(state),
      breadcrumbList,
      go2login,
    };
  },
});
</script>
<style lang="less" scoped>
// .el-main {
//   background-color: #e9eef3;
//   color: #333;
//   text-align: center;
//   line-height: 160px;
// }

// body > .el-container {
//   margin-bottom: 40px;
// }

.layout-container1 {
  height: 100%;
  .layout-header {
    z-index: 3;
    width: calc(100%);
    position: fixed;
    height: @g-top-header-height !important;
    background-color: @g-top-header-background-color;
    color: #fff;
  }
  .layout-container2 {
    overflow: hidden;
    margin-top: @g-top-header-height;
    .layout-sidebar {
      // firefox隐藏滚动条
      scrollbar-width: none;
      // chrome隐藏滚动条
      &::-webkit-scrollbar {
        display: none;
      }
      width: @g-sidebar-width;
      background-color: @g-sidebar-background-color;
    }
    .layout-content {
      background-color: @g-main-background-color;
      padding-right: 0px;
      padding-bottom: 0px;
      .bread-crumbs {
        display: flex;
        background-color: #ffffff;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-left: 10px;
        span {
          color: #999999 !important;
        }
      }
      .layout-content-main {
        margin-top: 1px;
        background-color: #ffffff;
        min-height: calc(100% - 40px);
      }
    }
  }
}
</style>
