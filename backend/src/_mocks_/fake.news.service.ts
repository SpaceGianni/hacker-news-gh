import { FakeNewsModel } from './fake.news.model';

export const MockedNewsService = jest.fn().mockReturnValue({
  findAll: jest.fn().mockResolvedValue([FakeNewsModel]),
  findAndSaveNews: jest.fn().mockResolvedValue([FakeNewsModel]),
  softDelete: jest.fn().mockResolvedValue(FakeNewsModel),
});
