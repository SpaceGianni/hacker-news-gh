import { Module } from '@nestjs/common';
import { TasksService } from './cron.service';
import { NewsModule } from 'src/news/news.module';

@Module({
  imports: [NewsModule],
  providers: [TasksService],
})
export class CronModule {}
