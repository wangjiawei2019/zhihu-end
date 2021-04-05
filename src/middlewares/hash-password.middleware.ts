/*
 * @Date: 2021-04-05 11:54:55
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-04-05 12:09:08
 * @FilePath: /zhihu-end/src/middleware/hash-password.middleware.ts
 */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { addSalt, encript } from 'src/utils/encription';

@Injectable()
export class HashPasswordMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    let userPassword = req.body['password'];
    const salt = addSalt();
    if (userPassword) {
      userPassword = encript(userPassword, salt);
      req.body['password'] = userPassword;
      req.body['salt'] = salt;
    }
    next();
  }
}
