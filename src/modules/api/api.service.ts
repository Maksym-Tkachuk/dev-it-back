import { Injectable } from '@nestjs/common'
import { random } from 'lodash'

import type { HandleRequestResponseDto } from './dtos/handle-request-response.dto'

@Injectable()
export class ApiService {
  async handleRequestWithDelay(
    index: number,
  ): Promise<HandleRequestResponseDto> {
    const delay = random(1, 1000)

    await new Promise(resolve => {
      setTimeout(resolve, delay)
    })

    return { index }
  }
}
