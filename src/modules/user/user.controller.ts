/*
 * @Date: 2021-04-04 23:16:01
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-04-05 18:21:11
 * @FilePath: /zhihu-end/src/modules/user/user.controller.ts
 */
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Role } from '../role/role.decorator';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('用户模块')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('jwt')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('hello')
  @Role('admin')
  hello() {
    return 'hello world';
  }
}
