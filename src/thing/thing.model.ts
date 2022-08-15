import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Thing {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  url: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  thumbnail: string;

  @Field(() => String)
  previewImage: string;

  @Field(() => Int)
  likeCount: number;

  @Field(() => Int)
  makeCount: number;

  @Field(() => Int)
  commentCount: number;

  @Field(() => String, { description: 'URL to thingiverse.com page' })
  publicUrl: string;

  @Field(() => String, { description: 'ISO 8601 date string' })
  createdAt: string;
}
