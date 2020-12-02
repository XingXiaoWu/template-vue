import API from '@xing.wu/axios';
import { Message } from 'element-ui';
import { globalSettings } from '@/setting';
import store from '@/store';
// 错误处理
function errorHandle(error) {
  Message.error(error.toString());
}
// 处理handle
function handle(data) {
  if (data.status !== '0') {
    if (data.status === globalSettings.logonFailureCode) {
      // 清空登录数据并刷新
      store.dispatch('userStore/logonFailure');
      window.location.reload();
    }
    throw Error(data.message);
  }
  return data.data;
}
API.setResponseHandle(handle);
API.setErrorHandle(errorHandle);

export default {
  getExample: (params) => API.GET('/stastic/getCertNum', params),
  // 登录
  login: (params) => new Promise((resolve) => {
    setTimeout(() => {
      console.log(`登录${JSON.stringify(params)}`);
      resolve({
        szyxtoken: '123',
      });
    });
  }),
  // 获取权限
  getPermissions: (params) => new Promise((resolve) => {
    setTimeout(() => {
      console.log(`获取权限${JSON.stringify(params)}`);
      resolve({
        szyxtoken: '123',
      });
    });
  }),
  // 登录
  loginOut: () => new Promise((resolve) => {
    setTimeout(() => {
      // location.reload();
      resolve();
    }, 1000);
  }),
};
