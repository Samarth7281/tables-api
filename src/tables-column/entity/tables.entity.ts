import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Columns } from "./columns.entity";
import { Rows } from "src/rows/entity/rows.entity";

@Entity()
export class Table{
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @OneToMany(() => Columns,(column) => column.table,{cascade: true,eager: true})
    column: Columns[]

    @OneToMany(() => Rows,(row) => row.table,{cascade: true,eager: true})
    row: Rows[]
}