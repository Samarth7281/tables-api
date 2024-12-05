import { Module } from '@nestjs/common';
import { RowsController } from './rows.controller';
import { RowsService } from './rows.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rows } from './entity/rows.entity';
import { Table } from 'src/tables-column/entity/tables.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rows,Table])],
  controllers: [RowsController],
  providers: [RowsService]
})
export class RowsModule {}
