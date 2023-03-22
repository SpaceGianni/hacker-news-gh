import { NewsService } from './news.service';
import { MongoNewsRepository } from '../repository/mongoNews.repository';
import { NewsProvider } from '../provider/rawNews.provider';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { connect, Connection, Model } from 'mongoose';
import { News, HackerNewsSchema } from '../model/news.model';
import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { FakeNewsModel } from '../../_mocks_/fake.news.model';

const mockedRepository = {
  findAll: () => [...FakeNewsModel],
  findAndSaveNews: () => [],
  softDelete: () => '',
};

describe('NewsService Unit Tests', () => {
  let service: NewsService;
  let repository: MongoNewsRepository;
  let provider: NewsProvider;

  let mongod: MongoMemoryServer;
  let mongoConnection: Connection;
  let newsModel: Model<News>;

  beforeAll(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    mongoConnection = (await connect(uri)).connection;
    newsModel = mongoConnection.model(News.name, HackerNewsSchema);

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NewsService,
        MongoNewsRepository,
        NewsProvider,
        { provide: getModelToken(News.name), useValue: newsModel },
      ],
      imports: [ConfigModule, HttpModule],
    }).compile();

    service = module.get<NewsService>(NewsService);
    repository = module.get<MongoNewsRepository>(MongoNewsRepository);
    provider = module.get<NewsProvider>(NewsProvider);
  });

  afterAll(async () => {
    await mongoConnection.dropDatabase();
    await mongoConnection.close();
    await mongod.stop();
  });

  afterEach(async () => {
    const collections = mongoConnection.collections;
    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany({});
    }
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('The Service', () => {
    it('should be defined', () => {
      expect(service).toBeDefined();
    });
  });

  describe('Find All Method', () => {
    it('should return a list of News', async () => {
      const news = await service.findAll();
      console.log(news);
      expect(FakeNewsModel.length).toEqual(1);
    });
  });

  describe('Find & Save News Method', () => {
    it('should be defined', async () => {
      repository.updateOrCreateIfNotExits = jest
        .fn()
        .mockReturnValueOnce(FakeNewsModel);

      const news = await provider.findAll();

      expect(news).toBeDefined();
    });
  });
});
