import { IsString,IsMongoId, IsDateString, IsNotEmpty } from 'class-validator';

export class CreateNewsDto {
  @IsString()
  @IsNotEmpty()
  id: string;

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
}