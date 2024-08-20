import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule';
import { ConfigService } from '@nestjs/config';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import fastify from 'fastify';

async function bootstrap() {
  const fastifyApp = fastify({
    // this option instructs fastify to resolve ip address from x-forwarded-for header
    trustProxy: true,

    // this option treats api/users route same as api/users/
    ignoreTrailingSlash: true,
  });
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(fastifyApp),
  );

  const configService = app.get(ConfigService);

  app.setGlobalPrefix('/api');
  await app.listen(configService.get('port'));
}
bootstrap();
