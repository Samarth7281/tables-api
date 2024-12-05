import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Table } from './entity/tables.entity';
import { Repository } from 'typeorm';
import { Columns } from './entity/columns.entity';
import { TableDto } from './dto/table.dto';
import { ColumnDto } from './dto/columns.dto';
import { Rows } from 'src/rows/entity/rows.entity';

@Injectable()
export class TablesColumnService {
    constructor(
        @InjectRepository(Table)
        private readonly tableRepository: Repository<Table>,

        @InjectRepository(Columns)
        private readonly columnsRepository: Repository<Columns>,

        @InjectRepository(Rows)
        private readonly rowsRepository: Repository<Rows>
    ){}

    async createTable(tableDto: TableDto): Promise<Table> {
        console.log('Received DTO:', tableDto);
    
        const newTable = this.tableRepository.create({
            ...tableDto,
            column: tableDto.columns.map((col) => this.columnsRepository.create(col)),
            row: tableDto.rows.map((row) => this.rowsRepository.create(row)),
        });
    
        console.log('Constructed newTable entity:', newTable);
    
        return await this.tableRepository.save(newTable);
    }
    

    async addColumns(tableId: string,columnDto: ColumnDto) : Promise<Columns>{
        const table = await this.tableRepository.findOne({where: {id: tableId},relations: ['column']})
        if(!table){
            throw new NotFoundException(`Table with ID ${tableId} not found`)
        }
        const newColumn = this.columnsRepository.create({
            ...columnDto,
            table: table, 
        });
        return await this.columnsRepository.save(newColumn)
    }
}
