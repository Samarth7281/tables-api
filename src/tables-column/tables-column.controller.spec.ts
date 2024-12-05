import { Test, TestingModule } from '@nestjs/testing';
import { TablesColumnController } from './tables-column.controller';

describe('TablesColumnController', () => {
  let controller: TablesColumnController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TablesColumnController],
    }).compile();

    controller = module.get<TablesColumnController>(TablesColumnController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
