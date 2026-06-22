import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    return this.prisma.category.create({
      data: {
        name: data.name,
        description: data.description,
        userId: data.userId,
      },
    });
  }
}