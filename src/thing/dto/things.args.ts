import { Field, ArgsType, Int, registerEnumType } from '@nestjs/graphql';

export enum ThingsArgsSort {
  POPULAR = 'popular',
  NEWEST = 'newest',
  MAKES = 'makes',
}

registerEnumType(ThingsArgsSort, {
  name: 'ThingsArgsSort',
});

export enum ThingsArgsPostedAfter {
  Last7Days = 'now-7d',
  Last30Days = 'now-30d',
  ThisYear = 'now-365d',
}

registerEnumType(ThingsArgsPostedAfter, {
  name: 'ThingsArgsPostedAfter',
});

@ArgsType()
export class ThingsArgs {
  @Field(() => Int, { nullable: true })
  page: number;

  @Field(() => Int, { nullable: true })
  perPage: number;

  @Field(() => ThingsArgsSort, { nullable: true, defaultValue: 'popular' })
  sort: ThingsArgsSort;

  @Field(() => ThingsArgsPostedAfter, { nullable: true })
  postedAfter?: ThingsArgsPostedAfter;
}
