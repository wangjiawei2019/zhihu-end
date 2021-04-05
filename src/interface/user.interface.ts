/*
 * @Date: 2021-04-04 22:55:08
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-04-05 12:50:57
 * @FilePath: /zhihu-end/src/interface/user.interface.ts
 */
import { Prop, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  @ApiProperty({
    description: '用户名',
    example: 'wangjiawei',
  })
  readonly username: string;

  @Prop()
  @ApiProperty({
    description: '用户密码',
    example: '123456',
  })
  readonly password: string;

  @Prop()
  readonly salt?: string;
}
