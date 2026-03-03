import { chakra, Table } from "@chakra-ui/react"
import { IRequestDto } from "@shared/types/request"
import { FC } from "react"

interface IRequestsTableProps {
    data: IRequestDto[]
    // TODO: pass properties to pick from data entity object?
}


// const RequestsTableHeader = chakra(Table.Header, {
//     base: {
//         padding: "8px 10px"
//     }
// })

const RequestsTableRow = chakra(Table.Row, {
    base: {
        border: "none"
    }
})

const RequestsTableCell = chakra(Table.Cell, {
    base: {
        bgColor: 'inherit',
        padding: "8px 10px"
    }
})

const RequestsTable: FC<IRequestsTableProps> = ({ data }) => {

    // TODO: to sort & filter table data
    // const sortByRequestField = () => {}
    // const filterByRequestField = () => {}
    
    return <Table.Root variant="line" marginTop="31px">
        <Table.Header bgColor="gray">
            <RequestsTableRow bgColor="inherit">
                <RequestsTableCell>&#8470;</RequestsTableCell>
                <RequestsTableCell>Аптека</RequestsTableCell>
                <RequestsTableCell>Создана</RequestsTableCell>
                <RequestsTableCell>Приоритет</RequestsTableCell>
                <RequestsTableCell>Тема</RequestsTableCell>
                <RequestsTableCell>Категория</RequestsTableCell>
                <RequestsTableCell>Техник</RequestsTableCell>
                <RequestsTableCell>Реакция</RequestsTableCell>
                <RequestsTableCell>Решение</RequestsTableCell>
                <RequestsTableCell>Статус</RequestsTableCell>
            </RequestsTableRow>
        </Table.Header>
        <Table.Body>
            {
                data.map((request) => <RequestsTableRow key={request.id}>
                <Table.Cell>{request.code}</Table.Cell>
                <Table.Cell>{request.address.address}</Table.Cell>
                <Table.Cell>{request.createdAt}</Table.Cell>
                <Table.Cell>{request.priopity}</Table.Cell>
                <Table.Cell>{request.theme}</Table.Cell>
                <Table.Cell>{request.category}</Table.Cell>
                <Table.Cell>{request.executor?.name ?? "----"}</Table.Cell>
                <Table.Cell>{request.reactionTime}</Table.Cell>
                <Table.Cell>{request.solutionTime}</Table.Cell>
                <Table.Cell>{request.status}</Table.Cell>
            </RequestsTableRow>)
            }
        </Table.Body>
    </Table.Root>
}

export default RequestsTable