import { Prop, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

/*
 * @Date: 2021-04-05 23:36:36
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-04-05 23:58:06
 * @FilePath: /zhihu-end/src/interface/article.interface.ts
 */
@Schema()
export class Article extends Document {
  @Prop()
  @ApiProperty({
    description: '文章标题',
    example: '人在美国，刚下飞机',
  })
  readonly articleTitle: string;

  @Prop()
  @ApiProperty({
    description: '文章正文',
    example: '巴拉巴拉',
  })
  readonly articleContent: string;

  @Prop()
  @ApiProperty({
    description: '创建者',
    example: '王佳伟',
  })
  readonly creatorId: string;
}
