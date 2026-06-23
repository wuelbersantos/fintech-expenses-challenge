import { Injectable, NotFoundException } from '@nestjs/common';
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

  // Busca todas as categorias de um user
  async findAll(userId: string) {
    return this.prisma.category.findMany({
      where: { userId },
    });
  }

  // Atualiza uma categoria
  async update(id: string, userId: string, data: any) {
    // Verifica se a categoria existe e pertence ao usuário antes de tentar atualizar
    const category = await this.prisma.category.findFirst({
      where: { id, userId },
    });

    if (!category) {
      throw new NotFoundException('Categoria não encontrada ou sem permissão.');
    }

    return this.prisma.category.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
      },
    });
  }

  // Remove uma categoria
  async remove(id: string, userId: string) {
    const category = await this.prisma.category.findFirst({
      where: { id, userId },
    });

    if (!category) {
      throw new NotFoundException('Categoria não encontrada ou sem permissão.');
    }

    return this.prisma.category.delete({
      where: { id },
    });
  }
}