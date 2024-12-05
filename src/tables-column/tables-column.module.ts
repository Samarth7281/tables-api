import { Module } from '@nestjs/common';
import { TablesColumnController } from './tables-column.controller';
import { TablesColumnService } from './tables-column.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Columns } from './entity/columns.entity';
import { Table } from './entity/tables.entity';
import { Rows } from 'src/rows/entity/rows.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Table, Columns,Rows])],
  controllers: [TablesColumnController],
  providers: [TablesColumnService]
})
export class TablesColumnModule {}
