import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  // CREATE
   async create(userId: string, data: Prisma.TransactionUncheckedCreateInput) {
    return this.prisma.transaction.create({
      data: {
        title: data.title,
        amount: data.amount,
        type: data.type,
        categoryId: data.categoryId,
        userId: userId,
      },
    });
  }


  // FIND ALL BY USER
  async findAll(userId: string) {
    return this.prisma.transaction.findMany({
      where: { userId },
      include: {
        category: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  // FIND ONE
  async findOne(id: string, userId: string) {
    const transaction = await this.prisma.transaction.findUnique({
      where: { id },
    });

    if (!transaction || transaction.userId !== userId) {
      throw new NotFoundException('Transação não encontrada');
    }

    return transaction;
  }

  // UPDATE
  async update(
    id: string,
    userId: string,
    data: Prisma.TransactionUpdateInput,
  ) {
    const transaction = await this.prisma.transaction.findUnique({
      where: { id },
    });

    if (!transaction || transaction.userId !== userId) {
      throw new NotFoundException('Transação não encontrada');
    }

    return this.prisma.transaction.update({
      where: { id },
      data,
    });
  }

  // DELETE
  async remove(id: string, userId: string) {
    const transaction = await this.prisma.transaction.findUnique({
      where: { id },
    });

    if (!transaction || transaction.userId !== userId) {
      throw new NotFoundException('Transação não encontrada');
    }

    return this.prisma.transaction.delete({
      where: { id },
    });
  }
}