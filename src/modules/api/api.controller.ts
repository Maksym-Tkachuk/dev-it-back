import { Controller, Get, Query } from '@nestjs/common'

import type { HandleRequestResponseDto } from './dtos/handle-request-response.dto'

import { ApiService } from './api.service'
import { HandleRequestQueryDto } from './dtos/handle-request-query.dto'

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get()
  async handleRequest(
    @Query() { index }: HandleRequestQueryDto,
  ): Promise<HandleRequestResponseDto> {
    return this.apiService.handleRequestWithDelay(index)
  }
}
