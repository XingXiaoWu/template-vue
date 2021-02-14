export interface ResponseX {
  status: string;
  message: string;
  data?: Any;
}
export interface Api {
  login: () => ResponseX<T>;
}
