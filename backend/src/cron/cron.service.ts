import { Injectable, Logger, Inject, OnModuleInit } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { NewsService } from 'src/news/service/news.service';

@Injectable()
export class TasksService implements OnModuleInit {
  constructor(
    @Inject(NewsService)
    private readonly newsService: NewsService,
  ) {}

  private readonly logger = new Logger(TasksService.name);

  async onModuleInit(): Promise<any> {
    await this.newsService.findAndSaveNews();
  }

  @Cron(CronExpression.EVERY_30_SECONDS)
  async handleCron() {
    await this.newsService.findAndSaveNews();
  }
}
