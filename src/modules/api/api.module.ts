import { HttpStatus, Module } from '@nestjs/common'
import rateLimit from 'express-rate-limit'

import type { MiddlewareConsumer, NestModule } from '@nestjs/common'

import { ApiController } from './api.controller'
import { ApiService } from './api.service'

@Module({
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        rateLimit({
          windowMs: 1000,
          max: 50,
          statusCode: HttpStatus.TOO_MANY_REQUESTS,
        }),
      )
      .forRoutes('*')
  }
}
