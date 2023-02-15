import { Controller, Get, Param, Delete, Query } from '@nestjs/common';
import { NewsService } from '../service/news.service';
import { MongoNewsRepository } from '../repository/mongoNews.repository';
import { PaginationQueryDto } from '../dto/pagination-query.dto';

@Controller('news')
export class NewsController {
  constructor(
    private readonly newsService: NewsService,
    private readonly mongoRepo: MongoNewsRepository,
  ) {}

  @Get()
  GetAllNews() {
    return this.newsService.findAll();
  }

  @Delete(':id')
  removeOne(@Param('id') id: string) {
    return this.newsService.softDelete(id);
  }

  @Get('updated')
  getUpdatedNews(@Query() pagination: PaginationQueryDto) {
    return this.mongoRepo.findAllNullDates(pagination);
  }
}
