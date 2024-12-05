import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TablesColumnModule } from './tables-column/tables-column.module';
import { RowsModule } from './rows/rows.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Table } from './tables-column/entity/tables.entity';
import { Columns } from './tables-column/entity/columns.entity';
import { Rows } from './rows/entity/rows.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Change to your database type
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'Samarth@12',
      database: 'Tables',
      entities: [Table, Columns, Rows],
      synchronize: true, // Don't use in production
    }),
    TablesColumnModule,
    RowsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
