import { Api } from '@/@types/index';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $api: Api;
  }
}
