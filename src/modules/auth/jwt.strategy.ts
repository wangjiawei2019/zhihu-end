/*
 * @Date: 2021-04-05 17:06:14
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-04-05 18:19:46
 * @FilePath: /zhihu-end/src/modules/auth/jwt.strategy.ts
 */
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JWT_CONSTANT } from './jwt.constant';
import { User } from 'src/interface/user.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JWT_CONSTANT.secret,
    });
  }

  async validate(payload: User) {
    return { userId: payload._id };
  }
}
