import { Table } from "src/tables-column/entity/tables.entity";
import { Column, Entity,  ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rows{
    @PrimaryGeneratedColumn()
    id : string

    @Column('jsonb')
    values: {[columnId: string] : any}

    @ManyToOne(() => Table,(table) => table.row)
    table: Table
}