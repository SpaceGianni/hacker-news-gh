import { Test, TestingModule } from '@nestjs/testing';
import { NewsService } from '../service/news.service';
import { MongoNewsRepository } from '../repository/mongoNews.repository';
import { PaginationQueryDto } from '../dto/pagination-query.dto';
import { NewsController } from './news.controller';

describe('NewsController Unit', () => {
  let newsService: NewsService;
  let mongoNewsRepo: MongoNewsRepository;
  let newsController: NewsController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [NewsController],
      providers: [NewsService, MongoNewsRepository],
    }).compile();

    newsService = moduleRef.get(NewsService);
    mongoNewsRepo = await moduleRef.resolve(MongoNewsRepository);
    newsController = moduleRef.get<NewsController>(NewsController);
  });

  describe('Get All News', () => {
    it('should return an array of news', async () => {
      const result = [];
      jest
        .spyOn(newsService, 'findAll')
        .mockImplementation(() => Promise.resolve(result));
      expect(await newsController.GetAllNews()).toBe(result);
    });
  });
});
