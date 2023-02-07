import {
  IsString,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
} from 'class-validator';

export class CreateNewsDto {
  @IsNumber()
  @IsNotEmpty()
  story_id: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsString()
  @IsNotEmpty()
  url: string;

  @IsDateString()
  @IsNotEmpty()
  date: string;

  @IsOptional()
  delete_date: string;
}
