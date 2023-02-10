import {
  Injectable,
  Logger,
  InternalServerErrorException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateNewsDto } from '../dto/create-news.dto';
import { NewsProvider } from '../provider/rawNews.provider';
import { MongoNewsRepository } from '../repository/mongoNews.repository';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { inspect } from 'util';

@Injectable()
export class NewsService {
  constructor(
    private readonly newsProvider: NewsProvider,
    private readonly newsRepository: MongoNewsRepository,
  ) {}

  async findAll() {
    try {
      return await this.newsRepository.getAll();
    } catch (error) {
      throw new HttpException(
        { status: HttpStatus.INTERNAL_SERVER_ERROR, error: error.message },
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }

  async findAndSaveNews(): Promise<void> {
    const { hits } = await this.newsProvider.findAll();
    for (const hit of hits) {
      const objectToSave = {
        story_id: hit.story_id,
        title: hit.story_title || hit.title,
        author: hit.author,
        date: hit.created_at,
        url: hit.story_url || hit.url,
      };
      const newsDto = plainToClass(CreateNewsDto, objectToSave);
      const errors = await validate(newsDto, { whitelist: true });
      if (errors.length) {
        new Logger('Error with creation of objects');
        throw new Error(inspect(errors));
      }
    }
  }

  async softDelete(story_id: number) {
    try {
      const selectedNews = await this.newsRepository.delete(story_id);
      return selectedNews;
    } catch (error) {
      new Logger('Cannot delete the news');
      throw new InternalServerErrorException('The was a Database Error');
    }
  }

  async getNews() {
    const news = await this.newsRepository.get();
    return news;
  }
}
