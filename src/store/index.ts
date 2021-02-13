import { Any } from '@/@types';
import { createStore, ModuleTree } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const modules: ModuleTree<Any> = {};
const modulePluginPaths: Array<string> = [];
const requireModule = require.context('./modules', false, /.js$/);
requireModule.keys().forEach((fileName: string) => {
  modules[fileName.slice(2, -3)] = requireModule(fileName).default;
  // 如果存在且大于0
  if (requireModule(fileName).default.localStorage?.length > 0) {
    requireModule(fileName).default.localStorage.forEach((item: string) => {
      modulePluginPaths.push(`${fileName.slice(2, -3)}.${item}`);
    });
  }
});

const store = createStore({
  modules,
  strict: process.env.NODE_ENV !== 'production',
  plugins: [
    createPersistedState({
      paths: modulePluginPaths,
      // storage: window.sessionStorage,
    }),
  ],
});

export default store;
