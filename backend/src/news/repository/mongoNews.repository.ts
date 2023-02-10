import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNewsDto } from '../dto/create-news.dto';
import { News } from '../model/news.model';

@Injectable()
export class MongoNewsRepository {
  logger: any;
  constructor(
    @InjectModel(News.name) private readonly hackerNewsModel: Model<News>,
  ) {}

  getAll(): Promise<News[]> {
    return this.hackerNewsModel.find().exec();
  }

  create(createNewsDto: CreateNewsDto): Promise<News> {
    const createNews = new this.hackerNewsModel(createNewsDto);
    return createNews.save();
  }

  updateOrCreateIfNotExits(story_id: number, createNewsDto: CreateNewsDto) {
    try {
      return this.hackerNewsModel.findOneAndUpdate(
        { story_id: story_id },
        createNewsDto,
        {
          new: true,
          upsert: true,
        },
      );
    } catch (error) {
      this.logger.error('Cannot save or update the new');
      throw new InternalServerErrorException('Database Error');
    }
  }

  delete(story_id: number) {
    return this.hackerNewsModel.findOneAndUpdate(
      { story_id: story_id },
      { $set: { delete_date: new Date() } },
      { returnDocument: 'after' },
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log('Original doc: ', docs);
        }
      },
    );
  }

  get() {
    return this.hackerNewsModel.find({ delete_date: null });
  }
}
