/*
 * @Date: 2021-04-05 12:14:45
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-04-05 12:37:34
 * @FilePath: /zhihu-end/src/interface/response.interface.ts
 */
export interface IResponse {
  code: number;
  message: string;
  data?: any;
}
