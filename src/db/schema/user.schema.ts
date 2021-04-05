/*
 * @Date: 2021-04-04 23:06:18
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-04-04 23:07:26
 * @FilePath: /zhihu-end/src/db/schema/user.schema.ts
 */

import { SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/interface/user.interface';

export const UserSchema = SchemaFactory.createForClass(User);
