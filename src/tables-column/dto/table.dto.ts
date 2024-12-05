import { RowsDto } from "src/rows/dto/row.dto"
import { ColumnDto } from "./columns.dto"

export class TableDto{
    id: string
    name: string
    columns: ColumnDto[]
    rows: RowsDto[]
}