import { Module } from '@nestjs/common';
import { PlantController } from './controllers/plant.controller';
import { CreatePlantUseCase } from './usecases/create-plant.usecase';
import { PlantRepository } from './repositories/plant.repository';

@Module({
  imports: [],
  controllers: [PlantController],
  providers: [CreatePlantUseCase, PlantRepository],
})
export class PlantModule {}
