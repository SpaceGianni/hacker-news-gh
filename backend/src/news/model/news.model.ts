import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class News extends Document {
  @Prop()
  created_at: Date;

  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  url: string;

  @Prop()
  story_id: string;

  @Prop()
  delete_date: Date;
}

export const HackerNewsSchema = SchemaFactory.createForClass(News);
