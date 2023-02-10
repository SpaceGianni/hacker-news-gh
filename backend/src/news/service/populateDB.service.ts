import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { NewsProvider } from '../provider/rawNews.provider';
import { CreateNewsDto } from '../../news/dto/create-news.dto';

@Injectable()
export class DBPopulation implements OnModuleInit {
  constructor(private readonly newsProvider: NewsProvider) {}
  async onModuleInit(): Promise<CreateNewsDto[]> {
    const { hits } = await this.newsProvider.findAllHits();
    for (const hit of hits) {
      const objectHit = new CreateNewsDto();
      objectHit.author = hit.author;
      objectHit.date = hit.created_at;
      objectHit.title = hit.story_title || hit.title;
      objectHit.url = hit.url || hit.story_url;
      objectHit.delete_date = null;
      objectHit.story_id = hit.story_id;
      if (
        objectHit.author === null ||
        objectHit.date === null ||
        objectHit.title === null ||
        objectHit.url === null ||
        objectHit.story_id === null
      ) {
        continue;
      }
    }
  }
}
