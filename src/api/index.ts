import API from '@xing.wu/axios';
import { AxiosResponse } from 'axios';
import { ElMessage } from 'element-plus';
import globalSettings from '@/setting';
import store from '@/store';
import { router } from '@/router';
import { Any, ResponseX } from '@/@types';

// 默认吐出来的格式

// 错误处理
const errorHandle = (error: Error) => {
  // 处理错误,尝试获取error的message展示
  try {
    const tmp = JSON.parse(error.message);
    const { message } = tmp;
    ElMessage.error(message);
  } catch (e) {
    ElMessage.error(error.toString());
  }
};

// 设置错误处理
API.setErrorHandle(errorHandle);
// 请求入口
API.interceptors.request.use((config) => {
  // 判断，如果是登陆接口就不添加
  if (config.url === '/mrqc/admin/sapi/user/login') {
    return config;
  }
  // eslint-disable-next-line no-param-reassign
  config.headers.username = encodeURIComponent(store.state.userStore.userInfo.username || '');
  // eslint-disable-next-line no-param-reassign
  config.headers.token = encodeURIComponent(store.state.userStore.token || '');
  return config;
});
// 结果拦截器
API.interceptors.response.use(
  (response: AxiosResponse<ResponseX>) => {
    // 判断状态
    if (response.data.status === '0') {
      return response;
    }
    if (response.data.status === globalSettings.logonFailureCode) {
      // 清空登录数据并刷新
      store.dispatch('userStore/logonFailure');
      router.push({
        name: 'Login',
      });
    }
    // 否则都是错了
    throw new Error(JSON.stringify(response.data));
  },
  (error) => {
    throw error;
  },
);

// 如果返回的结果不是这个格式,可以自定义修改interface并放入约束处
// export default {
//   login: (params: any) => API.POSTJSON<ResponseX>('/mrqc/admin/sapi/user/login', params),
// };
export default {
  // 登录
  login: (params?: Any) => new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: '123',
        username: params.username,
      });
    }, 3000);
  }),
  // 退出登陆
  loginOut: (params?: Any) => API.POSTJSON('', params),
  // 获取当前权限
  getCurrentPermissions: (params?: Any) => API.GET('/mrqc/admin/sapi/permission/get-current', params),
};
