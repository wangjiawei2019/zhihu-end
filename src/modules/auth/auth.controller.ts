/*
 * @Date: 2021-04-05 15:47:15
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-04-05 17:02:37
 * @FilePath: /zhihu-end/src/modules/auth/auth.controller.ts
 */
import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from 'src/interface/user.interface';
import { AuthService } from './auth.service';

@Controller('auth')
@ApiTags('用户验证模块')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('regist')
  @ApiOperation({
    summary: '用户注册',
  })
  async registUser(@Body() userDto: User) {
    return await this.authService.regist(userDto);
  }

  @Post('login')
  @ApiOperation({
    summary: '用户登录',
  })
  async userLogin(@Body() userDto: User) {
    return await this.authService.login(userDto);
  }
}
