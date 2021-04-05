/*
 * @Date: 2021-04-05 11:57:53
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-04-05 12:01:55
 * @FilePath: /zhihu-end/src/utils/encription.ts
 */
import * as crypto from 'crypto';

export function addSalt(): string {
  return crypto.randomBytes(3).toString('base64');
}

export function encript(password: string, salt: string): string {
  return crypto
    .pbkdf2Sync(password, salt, 10000, 16, 'sha256')
    .toString('base64');
}
