import { Transform } from 'class-transformer'
import { IsNotEmpty, IsNumber } from 'class-validator'

export class HandleRequestQueryDto {
  @IsNumber()
  @Transform(({ value }) => Number(value))
  @IsNotEmpty()
  index: number
}
