import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateNewsDto {
  @IsNotEmpty()
  @IsString()
  objId: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsString()
  url: string;

  @IsNotEmpty()
  @IsString()
  date: string;

  @IsOptional()
  delete_date: string;
}
