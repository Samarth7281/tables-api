import { Body, Controller, Param, Post } from '@nestjs/common';
import { TablesColumnService } from './tables-column.service';
import { RowsDto } from 'src/rows/dto/row.dto';
import { TableDto } from './dto/table.dto';
import { ColumnDto } from './dto/columns.dto';

@Controller('tables-column')
export class TablesColumnController {
    constructor(
        private readonly tableColumnServices: TablesColumnService
    ){}

    @Post()
    async createTable(@Body() tableDto: TableDto) {
        return await this.tableColumnServices.createTable(tableDto);
    }

    @Post(':tableId/columns')
    async addColumn(
        @Param('tableId') tableId: string,
        @Body() columnDto: ColumnDto
    ) {
        return await this.tableColumnServices.addColumns(tableId, columnDto);
    }
}
