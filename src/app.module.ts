/*
 * @Date: 2021-04-04 19:22:57
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-04-05 23:44:29
 * @FilePath: /zhihu-end/src/app.module.ts
 */
import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { UserModule } from './modules/user/user.module';
import { Log4jsModule } from '@nestx-log4js/core';
import { AuthModule } from './modules/auth/auth.module';
import { RedisModule, RedisModuleOptions } from 'nestjs-redis';
import { ArticleModule } from './modules/article/article/article.module';

const options: RedisModuleOptions = {
  port: 6379,
  name: 'zhihu',
  host: '127.0.0.1',
};

@Module({
  imports: [
    DbModule,
    UserModule,
    Log4jsModule.forRoot(),
    AuthModule,
    RedisModule.register(options),
    ArticleModule,
  ],
})
export class AppModule {}
