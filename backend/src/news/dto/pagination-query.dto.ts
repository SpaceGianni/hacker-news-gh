import { IsInt, IsNumber, IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsNumber()
  @IsPositive()
  @IsOptional()
  limit: number;

  @IsNumber()
  @IsInt()
  @IsOptional()
  offset: number;
}
