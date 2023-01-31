import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsController } from './controller/news.controller';
import { HackerNewsSchema, News } from './model/news.model';
import { NewsProvider } from './provider/rawNews.provider';
import { MongoNewsRepository } from './repository/mongoNews.repository';
import { NewsService } from './service/news.service';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: News.name, schema: HackerNewsSchema }]),
  ],
  providers: [NewsService, NewsProvider, MongoNewsRepository],
  exports: [NewsProvider, NewsService],
  controllers: [NewsController],
})
export class NewsModule {}
