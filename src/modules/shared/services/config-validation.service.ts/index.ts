import { Injectable } from '@nestjs/common'
import * as Joi from 'joi'

@Injectable()
export class ConfigValidationService {
  static createSchema() {
    return Joi.object({
      PORT: Joi.number().required(),
      CLIENT_URL: Joi.string().required(),
    })
  }
}
