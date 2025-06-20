import {
  IsString,
  IsOptional,
  IsInt,
  IsDateString,
  IsNotEmpty,
  MaxLength,
} from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  author: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  categoria: string;

  @IsString()
  @IsNotEmpty()
  sinopsis?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(250)
  isbn: string;

  @IsInt()
  @IsOptional()
  stock?: number;

  @IsDateString()
  @IsOptional()
  publishedDate?: string;
}
