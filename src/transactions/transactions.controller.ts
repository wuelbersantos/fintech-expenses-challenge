import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  create(@Body() body: any) {
    // por enquanto userId ainda vem do body (vamos melhorar depois com JWT)
    return this.transactionsService.create(body.userId, body);
  }

  @Get(':userId')
  findAll(@Param('userId') userId: string) {
    return this.transactionsService.findAll(userId);
  }

  @Get(':userId/:id')
  findOne(@Param('id') id: string, @Param('userId') userId: string) {
    return this.transactionsService.findOne(id, userId);
  }

  @Put(':userId/:id')
  update(
    @Param('id') id: string,
    @Param('userId') userId: string,
    @Body() body: any,
  ) {
    return this.transactionsService.update(id, userId, body);
  }

  @Delete(':userId/:id')
  remove(@Param('id') id: string, @Param('userId') userId: string) {
    return this.transactionsService.remove(id, userId);
  }
}