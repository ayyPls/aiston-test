import { chakra, Table } from "@chakra-ui/react"
import { ITableEntity, ITableProps } from "./interface"
import { useTranslation } from "react-i18next"


const StyledTableRow = chakra(Table.Row, {
    base: {
        // border: "none"
    }
})

const StyledTableCell = chakra(Table.Cell, {
    base: {
        bgColor: 'inherit',
        padding: "8px 10px",
        border: "none"
    }
})

// Generic component to render entities in table view

const TableComponent = <T extends ITableEntity,>({ data, properties = [], mapEntityPropertyFn, i18nPrefix }: ITableProps<T>) => {
    const { t } = useTranslation()
    
    return <Table.Root variant="line" marginTop="31px">
        <Table.Header bgColor="gray">
            <StyledTableRow bgColor="inherit">
                {
                    properties.map((property, index) => <StyledTableCell key={index}>
                        {t(`${i18nPrefix}.${property.toString()}`)}
                    </StyledTableCell>)
                }
            </StyledTableRow>
        </Table.Header>
        <Table.Body>
            {
                data.map((entity, index) => <StyledTableRow key={index}>
                    {
                        properties.map((property, index) => <StyledTableCell key={index}>
                            {mapEntityPropertyFn(entity, property)}
                        </StyledTableCell>)
                    }
            </StyledTableRow>)
            }
        </Table.Body>
    </Table.Root>
}

export default TableComponent