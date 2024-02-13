import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { useContainer } from 'class-validator'
import cookieParser from 'cookie-parser'

import { AppModule } from './app.module'

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule)
  const config = app.get(ConfigService)

  app.enableCors({
    origin: [config.get('CLIENT_URL')],
    credentials: true,
  })

  app.use(cookieParser())

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      stopAtFirstError: true,
    }),
  )

  useContainer(app.select(AppModule), {
    fallbackOnErrors: true,
    fallback: true,
  })

  await app.listen(config.get('PORT'))
}

bootstrap()
