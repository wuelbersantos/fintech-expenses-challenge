import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Param, 
  Delete, 
  Put 
} from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() body: any) {
    // Nota: Futuramente, substitua 'body' por um DTO (ex: CreateCategoryDto)
    return this.categoriesService.create(body);
  }

  @Get(':userId')
  findAll(@Param('userId') userId: string) {
    return this.categoriesService.findAll(userId);
  }

  @Put(':userId/:id')
  update(
    @Param('id') id: string, 
    @Param('userId') userId: string, 
    @Body() body: any
  ) {
    return this.categoriesService.update(id, userId, body);
  }

  @Delete(':userId/:id')
  remove(@Param('id') id: string, @Param('userId') userId: string) {
    return this.categoriesService.remove(id, userId);
  }
}