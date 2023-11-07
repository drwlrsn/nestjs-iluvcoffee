import { IsOptional, IsString } from 'class-validator';

export class UpdateCoffeeDto {
  @IsOptional()
  @IsString()
  readonly name?: string;
  @IsOptional()
  @IsString()
  readonly brand?: string;
  @IsOptional()
  @IsString({ each: true })
  readonly flavours?: string[];
}
