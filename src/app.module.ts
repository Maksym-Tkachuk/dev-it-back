import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { ApiModule } from './modules/api/api.module'
import { ConfigValidationService } from './modules/shared/services/config-validation.service.ts'

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: ConfigValidationService.createSchema(),
    }),
    ApiModule,
  ],
})
export class AppModule {}
