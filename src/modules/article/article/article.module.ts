/*
 * @Date: 2021-04-05 23:35:55
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-04-05 23:44:14
 * @FilePath: /zhihu-end/src/modules/article/article/article.module.ts
 */
import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';

@Module({
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
