import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { join } from 'path';
import { ThingResolver } from './thing/thing.resolver';
import { httpCacheAdapter } from './utils/httpCacheAdapter';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule.register({
      baseURL: 'https://api.thingiverse.com/',
      adapter: httpCacheAdapter,
      headers: {
        Authorization: `Bearer ${process.env.THINGIVERSE_TOKEN}`,
      },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
  ],
  providers: [ThingResolver],
})
export class AppModule {}
