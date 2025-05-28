import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { Plant } from '@prisma/client';

@Injectable()
export class PlantRepository {
  constructor(private prisma: PrismaService) {}

  async create(name: string): Promise<Plant> {
    return await this.prisma.plant.create({
      data: { name },
    });
  }

  async findAll(): Promise<Plant[]> {
    return await this.prisma.plant.findMany();
  }
}
