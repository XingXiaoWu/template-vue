/* eslint-disable */
/** 将第三方变量挂载到每一个 vue 示例中  */
import { Api } from './src/@types/api';
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $api: Api;
  }
}
