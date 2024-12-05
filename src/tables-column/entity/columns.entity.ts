import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Table } from "./tables.entity";

@Entity()
export class Columns{
    @PrimaryGeneratedColumn()
    id : string

    @Column()
    type: string

    @ManyToOne(() => Table, (table) => table.column)
    table: Table
}