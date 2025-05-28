import { Injectable } from '@nestjs/common';
import { CreatePlantDto } from '../dto/create-plant.dto';
import { PlantRepository } from '../repositories/plant.repository';
import { PlantModel } from '../models/plant.model';

@Injectable()
export class CreatePlantUseCase {
  constructor(private readonly plantRepo: PlantRepository) {}

  execute(dto: CreatePlantDto): Promise<PlantModel> {
    return this.plantRepo.create(dto.name);
  }
}
