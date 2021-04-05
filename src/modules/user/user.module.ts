/*
 * @Date: 2021-04-04 23:15:21
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-04-05 23:21:14
 * @FilePath: /zhihu-end/src/modules/user/user.module.ts
 */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
