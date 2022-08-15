import { Test, TestingModule } from '@nestjs/testing';
import { ThingResolver } from './thing.resolver';

describe('ThingResolver', () => {
  let resolver: ThingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThingResolver],
    }).compile();

    resolver = module.get<ThingResolver>(ThingResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
