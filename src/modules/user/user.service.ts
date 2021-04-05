/*
 * @Date: 2021-04-04 23:15:33
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-04-05 21:07:05
 * @FilePath: /zhihu-end/src/modules/user/user.service.ts
 */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Redis } from 'ioredis';
import { Model } from 'mongoose';
import { RedisService } from 'nestjs-redis';
import { User } from 'src/interface/user.interface';

@Injectable()
export class UserService {
  private redis: Redis;
  constructor(
    @InjectModel('USER_MODEL') private readonly userModel: Model<User>,
    private readonly redisService: RedisService,
  ) {
    this.redis = this.redisService.getClient('zhihu');
  }

  async hello() {
    return await this.redis.set('zhihu', 'wangjiawei');
  }

  /**
   * @description: 通过用户名查找用户
   * @param {*} username
   * @return {*}
   */
  async findOneByUsername(username): Promise<User> {
    return await this.userModel.findOne({ username });
  }
}
