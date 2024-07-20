import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // swagger integration 
  const config = new DocumentBuilder()
  .setTitle('CRM-API')
  .setDescription('Api doucmentation for CRM')
  .setVersion('1.0')
  .addBearerAuth(
    {type: 'http',scheme:'bearer', bearerFormat:'JWT'},
    'bearer'
  )
  .addSecurityRequirements('bearer')
  .build()

  const document = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('docs',app,document) // sets up the swagger in /api path with the app and the swagger document created above.

  await app.listen(3000);
}
bootstrap();
