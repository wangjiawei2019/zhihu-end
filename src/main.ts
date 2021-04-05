/*
 * @Date: 2021-04-04 19:22:57
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-04-05 17:43:50
 * @FilePath: /zhihu-end/src/main.ts
 */
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Log4jsLogger } from '@nestx-log4js/core';
import { AppModule } from './app.module';

const listenPort = 3000;
const logger = new Logger('main.ts');
const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('项目管理平台')
    .setDescription('知乎接口文档')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      'jwt',
    )
    .build();
  const document = SwaggerModule.createDocument(app, options);
  // 使用 swagger 输出接口文档
  SwaggerModule.setup('swagger-ui', app, document);

  // 使用 Log4 打印
  app.useLogger(app.get(Log4jsLogger));

  await app.listen(listenPort);
};
bootstrap().then(() => {
  logger.log(`http://localhost:${listenPort}/swagger-ui`);
});
