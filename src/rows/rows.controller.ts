import { Body, Controller, Param, Post } from '@nestjs/common';
import { RowsService } from './rows.service';

@Controller('rows')
export class RowsController {
  constructor(private readonly rowsService: RowsService) {}

  @Post(':tableId/columns/:columnId')
  async addValueToColumn(
    @Param('tableId') tableId: string,
    @Param('columnId') columnId: string,
    @Body() body: { value: any },
  ) {
    return await this.rowsService.addValuesToColumn(
      tableId,
      columnId,
      body.value,
    );
  }
}
