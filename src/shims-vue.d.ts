/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 拓展less
// TODO:https://juejin.cn/post/6844903560056930311
declare module '*.less' {
  const content: any;
  export default content;
}
