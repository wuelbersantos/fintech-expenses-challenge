import { IsString, IsNumber, IsUUID } from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  title: string;

  @IsNumber()
  amount: number;

  @IsString()
  type: 'income' | 'expense';

  @IsUUID()
  categoryId: string;
}