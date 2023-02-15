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

@Injectable()
export class NewsService {
  constructor(
    private readonly newsProvider: NewsProvider,
    private readonly newsRepository: MongoNewsRepository,
  ) {}

  async findAll() {
    try {
      return await this.newsRepository.getAllNews();
    } catch (error) {
      throw new HttpException(
        { status: HttpStatus.INTERNAL_SERVER_ERROR, error: error.message },
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }

  async findAndSaveNews(): Promise<CreateNewsDto[]> {
    const logger = new Logger(NewsService.name);
    const { hits } = await this.newsProvider.findAll();
    const newsList = [];

    for (let hit of hits) {
      let oneObjectWithNews = {
        objId: hit.objectID,
        title: hit.story_title || hit.title,
        author: hit.author,
        date: hit.created_at,
        url: hit.story_url || hit.url,
        delete_date: null,
      };

      const newsDto = plainToClass(CreateNewsDto, oneObjectWithNews);
      const errors = await validate(newsDto, {
        whitelist: true,
        skipNullProperties: true,
      });
      if (errors.length) {
        logger.debug('Fail to save a news object', errors);
        return;
      }
      try {
        await this.newsRepository.updateOrCreateIfNotExits(
          oneObjectWithNews.objId,
          newsDto,
        );
      } catch (error) {
        logger.error('Error creating or updating the news in mongodb');
        logger.error(error);
      }

      try {
        newsList.push(oneObjectWithNews);
      } catch (error) {
        logger.error('Fail to push an object in the final array ');
      }
    }
    return newsList;
  }

  async softDelete(id: string) {
    try {
      return await this.newsRepository.deleteOneNews(id);
    } catch (error) {
      console.log(error);
      new Logger('Cannot delete the news');
      throw new InternalServerErrorException('The was a Database Error');
    }
  }
}
