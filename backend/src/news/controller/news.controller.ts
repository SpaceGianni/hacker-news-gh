import { Controller, Get } from '@nestjs/common';
import { NewsService } from "../service/news.service";

@Controller('updatednews')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  findAll() {
    return this.newsService.findAndSaveNews();
  }
}
