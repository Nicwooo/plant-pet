import { Controller, Post, Body } from '@nestjs/common';
import { CreatePlantUseCase } from '../usecases/create-plant.usecase';
import { CreatePlantDto } from '../dto/create-plant.dto';
import { PlantModel } from '../models/plant.model';

@Controller('plants')
export class PlantController {
  constructor(private readonly createPlant: CreatePlantUseCase) {}

  @Post()
  async create(@Body() dto: CreatePlantDto): Promise<PlantModel> {
    return this.createPlant.execute(dto);
  }
}
