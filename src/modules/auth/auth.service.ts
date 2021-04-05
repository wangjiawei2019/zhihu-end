/*
 * @Date: 2021-04-05 15:47:25
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-04-05 18:02:11
 * @FilePath: /zhihu-end/src/modules/auth/auth.service.ts
 */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IResponse } from 'src/interface/response.interface';
import { User } from 'src/interface/user.interface';
import { encript } from 'src/utils/encription';
import { UserService } from '../user/user.service';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    @InjectModel('USER_MODEL') private readonly userModel: Model<User>,
  ) {}

  /**
   * @description: 用户注册
   * @param { User } user
   * @return {*}
   */
  async regist(user: User): Promise<IResponse> {
    const data = await this.userService.findOneByUsername(user.username);
    if (data) {
      return {
        code: 401,
        message: `当前用户：${user.username} 已注册`,
      };
    } else {
      try {
        const createUser = new this.userModel(user);
        await createUser.save();
        return {
          code: 200,
          message: '注册成功',
        };
      } catch (error) {
        throw Error('保存用户失败' + error);
      }
    }
  }

  /**
   * @description: 用户登录验证
   * @param {User} user
   * @return {*}
   */
  private async validateUser(user: User): Promise<IResponse> {
    const { username, password } = user;
    const data = await this.userService.findOneByUsername(username);
    if (!data) return { code: 404, message: '用户尚未注册' };
    const pass = encript(password, data.salt);
    if (pass === data.password) {
      return { code: 200, message: '登陆成功', data: { userId: data._id } };
    } else {
      return { code: 500, message: '用户名或密码错误' };
    }
  }

  /**
   * @description: 用户登录
   * @param {User} user
   * @return {*}
   */
  async login(user: User): Promise<IResponse> {
    const pass = await this.validateUser(user);
    if (pass.code === 200) {
      return {
        code: 200,
        message: '登陆成功',
        data: {
          token: await this.createToken(user),
          userId: pass.data.userId,
        },
      };
    }
    return pass;
  }

  async createToken(user: User): Promise<string> {
    return await this.jwtService.sign(user);
  }
}
