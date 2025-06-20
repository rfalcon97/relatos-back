import { IsInt, IsNotEmpty } from 'class-validator';

export class GetBookDto {
  @IsInt()
  @IsNotEmpty()
  idBook: number;
}
