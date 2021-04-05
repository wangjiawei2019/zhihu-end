/*
 * @Date: 2021-04-05 23:36:06
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-04-06 00:22:46
 * @FilePath: /zhihu-end/src/modules/article/article/article.controller.ts
 */
import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { Article } from 'src/interface/article.interface';
import { ArticleService } from './article.service';

@Controller('article')
@ApiTags('文章模块')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('jwt')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post('create')
  @ApiOperation({
    summary: '用户发表文章',
  })
  async createArticle(@Body() articleDto: Article) {
    return await this.articleService.createArticle(articleDto);
  }

  @Post('delete/:articleId')
  @ApiOperation({
    summary: '用户删除文章',
  })
  @ApiParam({
    name: 'articleId',
    description: '文章ID',
  })
  async removeArticle(@Param('articleId') articleId: string) {
    return await this.articleService.deleteArticle(articleId);
  }

  @Post('alter/:articleId')
  @ApiOperation({
    summary: '用户更新文章',
  })
  @ApiParam({
    name: 'articleId',
    description: '文章ID',
  })
  async changeArticle(
    @Param('articleId') articleId: string,
    @Body() article: Article,
  ) {
    return await this.articleService.alterArticleById(articleId, article);
  }

  @Post('find/:articleId')
  @ApiOperation({
    summary: '用户查询文章',
  })
  @ApiParam({
    name: 'articleId',
    description: '文章ID',
  })
  async findArticleById(@Param('articleId') articleId: string) {
    return await this.articleService.findArticlebyId(articleId);
  }
}
