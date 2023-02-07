import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNewsDto } from '../dto/create-news.dto';
import { News } from '../model/news.model';

@Injectable()
export class MongoNewsRepository {
  constructor(
    @InjectModel(News.name) private readonly hackerNewsModel: Model<News>,
  ) {}

  create(createNewsDto: CreateNewsDto) {
    Promise<News>;
    const createNews = new this.hackerNewsModel(createNewsDto);
    return createNews.save();
  }

  delete(story_id: number) {
    return this.hackerNewsModel.findOneAndUpdate(
      { story_id: story_id },
      { delete_date: new Date() },
      { returnDocument: 'after' },
    );
  }

  get() {
    return this.hackerNewsModel.find({ delete_date: null });
  }
}
