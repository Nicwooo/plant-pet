import { Module } from '@nestjs/common';
import { PlantModule } from './modules/plant/plant.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, PlantModule],
})
export class AppModule {}
