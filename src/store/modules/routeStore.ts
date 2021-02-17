import { Any } from '@/@types';
import { cloneDeep } from 'lodash';
import { RouteRecordRaw } from 'vue-router';
import { ActionContext } from 'vuex';
// 筛选侧边栏路由
function filterSidebarRoutes(menu: Array<RouteRecordRaw>) {
  const res: Array<RouteRecordRaw> = [];
  menu.forEach((element) => {
    const r = { ...element };
    // 如果meta不存在或者meta的sidebarHidden没写true，那就塞进去
    if (!r.meta || !r.meta.sidebarHidden) {
      // 如果children存在，且chidren不为空
      if (r.children && r.children.length > 0) {
        const tmp = filterSidebarRoutes(r.children);
        if (tmp.length > 0) {
          r.children = tmp;
        } else {
          r.children = undefined;
        }
      }
      res.push(r);
    }
  });
  return res;
}

function filterAllRouter(allRoute: Array<RouteRecordRaw>, permissions: Array<string>) {
  const res: Array<RouteRecordRaw> = [];
  allRoute.forEach((element) => {
    const r = { ...element };
    // 判断是否存在authCode，且authCode是否存在在权限列表中
    if (!r.meta?.authCode || permissions.indexOf(r.meta?.authCode) !== -1) {
      // 不存在，直接塞进去
      // 权限列表存在，直接塞进去
      if (r.children && r.children.length > 0) {
        const tmp = filterAllRouter(r.children, permissions);
        if (tmp.length > 0) {
          r.children = tmp;
        } else {
          r.children = undefined;
        }
      }
      res.push(r);
    }
  });
  return res;
}
// 判断是否在权限列表中
const state = {
  // 所有route
  allRoute: [],
  // 侧边栏route
  sidebarRoute: [],
  // 是否展开
  collapsed: false,
  // 当前激活的选项卡
  activeRoute: '',
};

const actions = {
  // 匹配所有路由
  matchingRoutes(
    { commit, rootState }: ActionContext<Any, Any>,
    data: {
      defaultRoutes: Array<RouteRecordRaw>;
      dynamicRoutes: Array<RouteRecordRaw>;
    },
  ) {
    // debugger;
    // 权限匹配
    const tmp = [...data.dynamicRoutes];
    const result = filterAllRouter(tmp, rootState.userStore.permissions);
    commit('setAllRoute', result.concat(data.defaultRoutes));
    return result;
  },
  // 根据所有路由匹配侧边栏
  matchingSidebarRoutes({ state, commit }: ActionContext<Any, Any>) {
    // 从当前所有路由中，找到可匹配的侧边栏
    const result = filterSidebarRoutes(cloneDeep(state.allRoute));
    commit('setSidebarRoute', result);
  },
};

const mutations = {
  setAllRoute(state: { allRoute: RouteRecordRaw[] }, allRoute: Array<RouteRecordRaw>) {
    state.allRoute = allRoute;
  },
  setSidebarRoute(state: { sidebarRoute: RouteRecordRaw[] }, sidebarRoute: Array<RouteRecordRaw>) {
    state.sidebarRoute = sidebarRoute;
  },
  setActiveRoute(state: { activeRoute: string }, activeRoute: string) {
    state.activeRoute = activeRoute;
  },
  setCollapsed(state: { collapsed: boolean }, collapsed: boolean) {
    state.collapsed = collapsed;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  localStorage: [],
};
