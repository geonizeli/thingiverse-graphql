import { Field, Int, ObjectType, } from '@nestjs/graphql';

@ObjectType()
export class Thing {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  thumbnail: string;
}
