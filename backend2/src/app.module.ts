import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';

@Module({
  imports: [NewsModule, HttpModule,MongooseModule.forRoot('mongodb://localhost:27017/hknews')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
