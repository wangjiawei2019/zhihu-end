/*
 * @Date: 2021-04-04 23:15:21
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-04-05 17:47:29
 * @FilePath: /zhihu-end/src/modules/user/user.module.ts
 */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { HashPasswordMiddleware } from 'src/middlewares/hash-password.middleware';

@Module({
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HashPasswordMiddleware).forRoutes('user/regist');
  }
}
