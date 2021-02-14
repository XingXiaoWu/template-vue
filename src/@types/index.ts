/* eslint-disable */
export type RawBindings = any;
export type Any = any;
export interface ResponseX {
  status: string;
  message: string;
  data?: Any;
}

export interface Api {
  login: (params?: any) => Promise<any>;
  loginOut: (params?: any) => Promise<any>;
  getCurrentPermissions: (params?: any) => Promise<any>;
}
