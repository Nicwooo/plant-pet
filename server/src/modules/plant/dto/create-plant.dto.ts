import { IsDate, IsString } from 'class-validator';

export class CreatePlantDto {
  @IsString()
  name: string;

  @IsDate()
  createdAt: Date;
}
