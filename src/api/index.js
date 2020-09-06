import API from '@xing.wu/axios';
import { Message } from 'element-ui';
// 错误处理
function errorHandle(data) {
  Message.error(data.toString());
}
// 处理handle
function handle(data) {
  if (data.status !== '0') {
    throw Error(data.message);
  }
  return data.data;
}
API.setResponseHandle(handle);
API.setErrorHandle(errorHandle);

export default {
  getExample: (params) => API.GET('/stastic/getCertNum', params),
};
