import { Query, Resolver } from '@nestjs/graphql';
import { Thing } from './thing.model';

@Resolver(() => Thing)
export class ThingResolver {
  constructor() {}

  @Query(() => [Thing])
  async things(): Promise<Thing[]> {
    return [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ];
  }
}
