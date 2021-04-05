/*
 * @Date: 2021-04-04 19:22:57
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-04-05 15:38:14
 * @FilePath: /zhihu-end/src/app.module.ts
 */
import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { UserModule } from './modules/user/user.module';
import { Log4jsModule } from '@nestx-log4js/core';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [DbModule, UserModule, Log4jsModule.forRoot(), AuthModule],
})
export class AppModule {}
