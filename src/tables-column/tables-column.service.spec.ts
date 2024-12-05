import { Test, TestingModule } from '@nestjs/testing';
import { TablesColumnService } from './tables-column.service';

describe('TablesColumnService', () => {
  let service: TablesColumnService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TablesColumnService],
    }).compile();

    service = module.get<TablesColumnService>(TablesColumnService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
