/*
 * @Date: 2021-04-04 23:15:33
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-04-05 16:59:49
 * @FilePath: /zhihu-end/src/modules/user/user.service.ts
 */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/interface/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('USER_MODEL') private readonly userModel: Model<User>,
  ) {}

  /**
   * @description: 通过用户名查找用户
   * @param {*} username
   * @return {*}
   */
  async findOneByUsername(username): Promise<User> {
    return await this.userModel.findOne({ username });
  }
}
