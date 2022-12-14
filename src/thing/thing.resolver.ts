import { HttpService } from '@nestjs/axios';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import * as camelcase from 'camelcase-object-deep';
import { firstValueFrom } from 'rxjs';
import { ThingsArgs } from './dto/things.args';
import { Thing } from './thing.model';

@Resolver(() => Thing)
export class ThingResolver {
  constructor(private readonly httpService: HttpService) {}

  @Query(() => [Thing])
  async things(@Args() args: ThingsArgs): Promise<Thing[]> {
    const params = new URLSearchParams({
      page: args.page?.toString(),
      per_page: args.perPage?.toString(),
      sort: args.sort,
      posted_after: args.postedAfter,
      type: 'trings',
    });

    const queryStirng = `/search?${params.toString()}`;

    try {
      const { data: response } = await firstValueFrom(
        this.httpService.get<{
          hits: Thing[];
          total: number;
        }>(queryStirng),
      );

      return camelcase(response.hits || []);
    } catch (error) {
      return [];
    }
  }

  @Query(() => Thing)
  async thing(@Args('id') id: number): Promise<Thing> {
    const { data } = await firstValueFrom(
      this.httpService.get<Thing>(`/things/${id}`),
    );
    return data;
  }
}
