import { Test, TestingModule } from '@nestjs/testing';
import { NewsController } from './news.controller';
import { MockedNewsService } from '../../_mocks_/fake.news.service';
import { FakeNewsModel } from '../../_mocks_/fake.news.model';
import { NewsService } from '../service/news.service';

jest.mock('../service/news.service');

describe('News Controller Unit Tests', () => {
  let newsController: NewsController;
  let newsService: NewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewsController],
      providers: [NewsService],
    }).compile();

    newsService = module.get(NewsService);
    newsController = module.get<NewsController>(NewsController);
  });

  it('should be defined', () => {
    expect(newsController).toBeDefined();
  });
});
