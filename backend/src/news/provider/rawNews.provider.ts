import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { AlgoliaResponse } from '../interfaces/rawNews.interface';
import { Hit } from '../interfaces/rawNews.interface';

@Injectable()
export class NewsProvider {
  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<AlgoliaResponse> {
    const { data } = await firstValueFrom(
      this.httpService.get(
        'https://hn.algolia.com/api/v1/search_by_date?query=nodejs',
        {
          headers: {
            'Accept-Encoding': '*',
          },
        },
      ),
    );
    return data;
  }
}
