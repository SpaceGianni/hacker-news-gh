import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNewsDto } from '../dto/create-news.dto';
import { News } from '../model/news.model';
import { PaginationQueryDto } from '../dto/pagination-query.dto';

@Injectable()
export class MongoNewsRepository {
  logger: any;
  constructor(
    @InjectModel(News.name) private readonly hackerNewsModel: Model<News>,
  ) {}

  getAllNews(): Promise<News[]> {
    return this.hackerNewsModel.find().exec();
  }

  createNews(createNewsDto: CreateNewsDto): Promise<News> {
    const createNews = new this.hackerNewsModel(createNewsDto);
    return createNews.save();
  }

  updateOrCreateIfNotExits(id: string, createNewsDto: CreateNewsDto) {
    try {
      return this.hackerNewsModel.findOneAndUpdate(
        { objId: id },
        createNewsDto,
        {
          new: true,
          upsert: true,
        },
      );
    } catch (error) {
      this.logger.error('Cannot save or update the news');
      throw new InternalServerErrorException('Database Error');
    }
  }

  deleteOneNews(id: string): Promise<News> {
    return this.hackerNewsModel
      .findByIdAndUpdate(id, { delete_date: new Date() }, { new: true })
      .exec();
  }

  findAllNullDates({ limit, offset }: PaginationQueryDto) {
    return this.hackerNewsModel
      .find({
        delete_date: null,
      })
      .limit(limit)
      .skip(offset)
      .sort({ date: -1 })
      .exec();
  }
}
