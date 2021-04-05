/*
 * @Date: 2021-04-05 23:41:24
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-04-05 23:42:13
 * @FilePath: /zhihu-end/src/db/schema/article.schema.ts
 */
import { SchemaFactory } from '@nestjs/mongoose';
import { Article } from 'src/interface/article.interface';

export const ArticleSchema = SchemaFactory.createForClass(Article);
