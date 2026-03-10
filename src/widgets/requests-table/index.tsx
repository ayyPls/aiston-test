import { FC } from "react"
import TableComponent from "@shared/ui/table"
import { IRequestDto } from "@shared/types/request"
import { ITableProps } from "@shared/ui/table/interface"
import { mapRequestPropertyCompareAlgorythm, mapRequestPropertyTranslation } from "@shared/utils/map-translation"
import { IRequestTableProps } from "./interface"


const RequestTableProps: Pick<ITableProps<IRequestDto>, "mapEntityPropertyFn" | "properties" | "i18nPrefix" | "comparePropertyFn"> = {
    properties: ["code", "address", "createdAt", "priority", "theme", "category", "executor", "reactionTime", "solutionTime", "status"],
    mapEntityPropertyFn: mapRequestPropertyTranslation,
    comparePropertyFn: mapRequestPropertyCompareAlgorythm,
    i18nPrefix: "request"
}

const RequestsTable:FC<IRequestTableProps> = ({ data }) => {

    // TODO: to sort & filter table data
    // const sortByRequestField = () => {}
    // const filterByRequestField = () => {}
    
    return <TableComponent data={data} {...RequestTableProps} />
}

export default RequestsTable