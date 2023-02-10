import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsDateString,
} from 'class-validator';

export class CreateNewsDto {
  @IsNumber()
  story_id: number;

  //@IsNotEmpty()
  @IsString()
  title: string;

  //@IsNotEmpty()
  @IsString()
  author: string;

  //@IsNotEmpty()
  @IsString()
  url: string;

  //@IsNotEmpty()
  @IsDateString()
  date: Date;

  @IsOptional()
  delete_date: string;
}
