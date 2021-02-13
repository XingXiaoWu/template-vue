/* eslint-disable */
import { PropType } from 'vue';
export type RawBindings = any;
export type Any = any;

// 添加全局属性
// https://github.com/vuejs/vue-next/blob/1abcb2cf61ec16807cae11cfe56acefab19487a1/packages/runtime-core/src/componentPublicInstance.ts#L41-L66
// declare module '@vue/runtime-core' {
//   interface ComponentCustomProperties {
//     // 暂时先写any，后面修改
//     $api: {};
//   }
// }
export interface TodoItem {
  text: string;
  done: boolean;
}
