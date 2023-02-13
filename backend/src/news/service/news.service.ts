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
    const logger = new Logger(NewsService.name);
    logger.debug('Inside find and save news');

    const arrayOfPromises = hits.map(async (hit) => {
      const objectToSave = {
        story_id: hit.story_id,
        title: hit.story_title || hit.title,
        author: hit.author,
        date: hit.created_at,
        url: hit.story_url || hit.url,
      };
      const newsDto = plainToClass(CreateNewsDto, objectToSave);
      const errors = await validate(newsDto, {
        whitelist: true,
        skipNullProperties: true,
      });

      if (errors.length) {
        logger.debug('Fail to save new', errors);
        return;
      }
      logger.debug('Before saving news');
      await this.newsRepository.updateOrCreateIfNotExits(
        objectToSave.story_id,
        newsDto,
      );
    });
    try {
      await Promise.all(arrayOfPromises);
    } catch (error) {
      logger.error("don't");
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
