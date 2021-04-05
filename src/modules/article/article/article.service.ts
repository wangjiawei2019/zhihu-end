/*
 * @Date: 2021-04-05 23:36:14
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-04-06 00:18:46
 * @FilePath: /zhihu-end/src/modules/article/article/article.service.ts
 */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from 'src/interface/article.interface';
import { IResponse } from 'src/interface/response.interface';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel('ARTICLE_MODEL') private readonly articleModel: Model<Article>,
  ) {}

  /**
   * @description: 用户发表文章
   * @param {Article} article
   * @return {*}
   */
  async createArticle(article: Article): Promise<IResponse> {
    const data = new this.articleModel(article);
    try {
      await data.save();
      return {
        code: 200,
        message: '发表文章成功',
        data: {
          articleId: data._id,
        },
      };
    } catch (error) {
      throw Error('发表文章失败' + error);
    }
  }

  /**
   * @description: 用户删除文章
   * @param {string} articleId
   * @return {*}
   */
  async deleteArticle(articleId: string): Promise<IResponse> {
    try {
      await this.articleModel.findByIdAndDelete(articleId);
      return { code: 200, message: `删除id：${articleId} 文章成功` };
    } catch (error) {
      throw Error(`删除id：${articleId} 文章失败-${error}`);
    }
  }

  /**
   * @description: 用户更新文章
   * @param {string} articleId
   * @param {Article} article
   * @return {*}
   */
  async alterArticleById(
    articleId: string,
    article: Article,
  ): Promise<IResponse> {
    try {
      await this.articleModel.findByIdAndUpdate(articleId, article);
      return {
        code: 200,
        message: '更新文章成功',
      };
    } catch (error) {
      throw Error(`更新id：${articleId} 文章失败-${error}`);
    }
  }

  /**
   * @description: 用户查询文章
   * @param {string} articleId
   * @return {*}
   */
  async findArticlebyId(articleId: string): Promise<IResponse> {
    try {
      const data = await this.articleModel.findById(articleId);
      return {
        code: 200,
        message: '查询文章成功',
        data,
      };
    } catch (error) {
      throw Error(`查询id：${articleId} 文章失败-${error}`);
    }
  }
}
