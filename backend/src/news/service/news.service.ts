import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from '../dto/create-news.dto';
import { NewsProvider } from '../provider/rawNews.provider';
import { MongoNewsRepository } from '../repository/mongoNews.repository';
import {validateOrReject} from "class-validator";


@Injectable()
export class NewsService {
    constructor(
        private readonly newsProvider : NewsProvider,
        private readonly newsRepository : MongoNewsRepository,
    ) {}

    async findAndSaveNews(): Promise<CreateNewsDto[]>{
        const newsList = [];
        const { hits } = await this.newsProvider.findAll();
        for (const hit of hits) {
            const objectNews = new CreateNewsDto();
            objectNews.author = hit.author;
            objectNews.date = hit.created_at;
            objectNews.title = hit.story_title || hit.title;
            objectNews.url = hit.url|| hit.story_url;
            if(objectNews.author===null || objectNews.date === null || objectNews.title===null || objectNews.url===null  ){
                continue
            }
            const news = await this.newsRepository.create(objectNews);
            objectNews.id = news._id.toString();
            await validateOrReject(objectNews)
            newsList.push(objectNews);
          }
        return newsList;
    }
}