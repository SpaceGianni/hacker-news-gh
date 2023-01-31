import { Injectable, Logger, Inject } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { NewsService } from 'src/news/service/news.service';

@Injectable()
export class TasksService {
  constructor(
    @Inject(NewsService)
    private readonly newsService: NewsService,
  ) {}

  private readonly logger = new Logger(TasksService.name);

  @Cron(CronExpression.EVERY_30_SECONDS)
  handleCron() {
    this.logger.debug('Called every 30 seconds');
    return this.newsService.findAndSaveNews();
  }
}
