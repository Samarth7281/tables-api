import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rows } from './entity/rows.entity';
import { Repository } from 'typeorm';
import { Table } from 'src/tables-column/entity/tables.entity';

@Injectable()
export class RowsService {
  constructor(
    @InjectRepository(Rows)
    private readonly rowRepository: Repository<Rows>,
    @InjectRepository(Table)
    private readonly tableRepository: Repository<Table>,
  ) {}
  async addValuesToColumn(
    tableId: string,
    columnId: string,
    value: any,
  ): Promise<Rows> {
    // Find the table with its columns
    const table = await this.tableRepository.findOne({
      where: { id: tableId },
      relations: ['column'],
    });

    if (!table) {
      throw new NotFoundException(`Table with ID ${tableId} not found`);
    }

    // Validate that the column exists in the table
    console.log('Columns in the table:', table.column);

    const columnExists = table.column.some(col => col.id.toString() === columnId);
    if (!columnExists) {
      throw new BadRequestException(`Column with ID ${columnId} does not exist in the table`);
    }
    

    // Create new row with the value for the specific column
    console.log(value)
    const newRow = this.rowRepository.create({
      values: { [columnId]: value },
      table: table,
    });
    console.log('New Row before save:', newRow);
    // Save and return the new row
    return await this.rowRepository.save(newRow);
  }
}
