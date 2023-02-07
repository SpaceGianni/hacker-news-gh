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

  @Cron(CronExpression.EVERY_12_HOURS)
  handleCron() {
    this.logger.debug('Called every 12 hours');
    return this.newsService.findAndSaveNews();
  }
}
