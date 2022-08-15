import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Thing {
  @Field(type => Int)
  id: number;
}