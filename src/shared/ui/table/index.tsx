import { chakra, Flex, Table } from "@chakra-ui/react"
import { ITableEntity, ITableProps } from "./interface"
import { useTranslation } from "react-i18next"
import { useMemo, useState } from "react"
import FilterIcon from "@assets/icons/filter.svg"

const StyledTableRow = chakra(Table.Row, {
    base: {
        borderBottom: "1px solid #D9E1EC"
    }
})

const FilterIconButton = chakra("button", {
    base: {
        cursor: "pointer",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        width: "1.5rem",
        height: "1.5rem",
        backgroundImage: `url("${FilterIcon}")`
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

// TODO: filter instead of sorting

const TableComponent = <T extends ITableEntity,>({ data, properties = [], mapEntityPropertyComponent, comparePropertyFn, i18nPrefix }: ITableProps<T>) => {
    const { t } = useTranslation()

    const [tableSortProperty, setTableSortProperty] = useState<keyof T | undefined>(undefined)


    const handleSortByPropertyClick = (property: keyof T) => {
        if (property === tableSortProperty) {
            // TODO: reverse sorted list
        }
        else setTableSortProperty(property)
    }


    const sortedTableByEntityProperty = useMemo(() => {
        if (tableSortProperty !== undefined) {
            data.sort(comparePropertyFn?.(tableSortProperty))
            console.log(tableSortProperty, comparePropertyFn?.(tableSortProperty))
        }
        return data
    }, [data, tableSortProperty, comparePropertyFn])

    return <Table.Root variant="line" marginTop="31px">
        <Table.Header bgColor="gray">
            <StyledTableRow bgColor="inherit">
                {
                    properties.map((property, index) => <StyledTableCell
                        key={index}
                        onClick={() => handleSortByPropertyClick(property)}
                    >
                        <Flex justifyContent="space-between" alignItems="center">
                            {t(`${i18nPrefix}.${property.toString()}`)}
                            <FilterIconButton />
                        </Flex>
                    </StyledTableCell>)
                }
            </StyledTableRow>
        </Table.Header>
        <Table.Body>
            {
                sortedTableByEntityProperty.map((entity, index) => <StyledTableRow key={index}>
                    {
                        properties.map((property, index) => <StyledTableCell key={index}>
                            {mapEntityPropertyComponent(entity, property)}
                        </StyledTableCell>)
                    }
                </StyledTableRow>)
            }
        </Table.Body>
    </Table.Root>
}

export default TableComponent