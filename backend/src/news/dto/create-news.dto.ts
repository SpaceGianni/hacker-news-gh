import {
  IsString,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsDate,
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

  @IsDate()
  @IsNotEmpty()
  date: Date;

  @IsOptional()
  delete_date: Date;
}
