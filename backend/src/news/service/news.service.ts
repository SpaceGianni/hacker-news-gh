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
import { validateOrReject } from 'class-validator';

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

  async findAndSaveNews(): Promise<CreateNewsDto[]> {
    const newsList = [];
    const { hits } = await this.newsProvider.findAll();
    for (const hit of hits) {
      const objectNews = new CreateNewsDto();
      objectNews.author = hit.author;
      objectNews.date = hit.created_at;
      objectNews.title = hit.story_title || hit.title;
      objectNews.url = hit.url || hit.story_url;
      objectNews.delete_date = null;
      objectNews.story_id = hit.story_id;
      if (
        objectNews.author === null ||
        objectNews.date === null ||
        objectNews.title === null ||
        objectNews.url === null ||
        objectNews.story_id === null ||
        objectNews.created_at === null
      ) {
        continue;
      }
      await validateOrReject(objectNews);
      newsList.push(objectNews);
    }
    return newsList;
  }

  async softDelete(story_id: string) {
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
