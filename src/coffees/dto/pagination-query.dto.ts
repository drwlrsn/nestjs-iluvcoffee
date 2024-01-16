import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsPositive()
  @IsOptional()
  limit?: number;

  @IsPositive()
  offset: number;
}
