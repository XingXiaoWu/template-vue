import { Any } from '@/@types';
import api from '@/api/index';
import { ActionContext } from 'vuex';

const state = {
  // 用户名
  account: '',
  // token
  token: '',
  // 用户信息
  userInfo: {},
  // 是否获取过权限
  permissionsInit: false,
  // 权限列表
  permissions: [],
};

const actions = {
  // 获取权限信息
  async getCurrentPermissions({ commit }: ActionContext<Any, Any>): Promise<Any> {
    return api
      .getCurrentPermissions()
      .then((response: { items: (string | number)[] }) => {
        commit('setPermissionsInit', true);
        let permissions: Array<string | number> = [];
        permissions = [...response.items.toString()];
        commit('setPermissions', permissions);
        Promise.resolve();
      })
      .catch((error) => Promise.reject(error));
  },

  // 登陆失效
  logonFailure({ commit }: ActionContext<Any, Any>): void {
    // 退出登陆,store清空
    sessionStorage.clear();
    commit('setToken', '');
    commit('setUserInfo', {});
    commit('setPermissionsInit', false);
    commit('setPermissions', []);
  },
};

const mutations = {
  setAccount(state: { account: string }, account: string) {
    state.account = account;
  },
  setToken(state: { token: string }, token: string) {
    sessionStorage.setItem('szyxToken', token);
    state.token = token;
  },
  setUserInfo(state: { userInfo: Any }, userInfo: Any) {
    state.userInfo = userInfo;
  },
  setPermissionsInit(state: { permissionsInit: boolean }, permissionsInit: boolean) {
    state.permissionsInit = permissionsInit;
  },
  setPermissions(
    state: { permissions: Array<string | number> },
    permissions: Array<string | number>,
  ) {
    state.permissions = permissions;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  localStorage: ['token', 'userInfo'],
};
