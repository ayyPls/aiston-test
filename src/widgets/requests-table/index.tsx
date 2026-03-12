import { FC } from "react"
import TableComponent from "@shared/ui/table"
import { IRequestDto } from "@shared/types/request"
import { ITableProps } from "@shared/ui/table/interface"
import { mapRequestPropertyCompareAlgorythm, mapRequestPropertyTranslation } from "@shared/utils/request"
import { IRequestTableProps } from "./interface"
import { RequestStatus } from "@shared/ui/request-status"
import { RequestPriority } from "@shared/ui/request-priority"
import { Flex, Text } from "@chakra-ui/react"
import { ERequestTime, RequestTime } from "@shared/ui/request-time"

const mapRequestPropertyToTableComponent = (entity: IRequestDto, property: keyof IRequestDto) => {
    switch (property) {
        case "status":
            return <RequestStatus variant={entity.status}>
                {mapRequestPropertyTranslation(entity, "status")}
            </RequestStatus>
        case "priority":
            return <Flex gap=".4rem" alignItems="center">
                <RequestPriority variant={entity.priority} />
                {mapRequestPropertyTranslation(entity, "priority")}
            </Flex>
        case "solutionTime":
        case "reactionTime": {
            return <RequestTime
                timeStr={mapRequestPropertyTranslation(entity, property)}
                variant={entity[property] ? (entity[property] && entity[property] > 10000)
                    ? ERequestTime.WARNING : ERequestTime.SUCCESS
                    : ERequestTime.IN_PROCESS
                }
            />
        }
        case "createdAt": {
            const date = new Date(entity[property])
            return <Flex gap="6px" color="#1C1C1C">
                {/* TODO: move in styles */}
                <span>{`${date.toLocaleDateString()}`}</span>
                <span style={{ opacity: ".3" }}>{`${date.toLocaleTimeString()}`}</span>
            </Flex>
        }
        case "address": {
            return <Flex gap="10px">
                {/* NOTE: i dont understand what this number represets */}
                <Text p="1px 3px" borderRadius="4px" backgroundColor="#F1F1F1" color="#1C1C1C">{(Math.random() * 100).toFixed().padStart(3, "0")}</Text>
                <Text>{entity[property].address}</Text>
            </Flex>
        }
        default:
            return mapRequestPropertyTranslation(entity, property)
    }
}

const RequestTableProps: Pick<ITableProps<IRequestDto>, "mapEntityPropertyComponent" | "properties" | "i18nPrefix" | "comparePropertyFn"> = {
    properties: ["code", "address", "createdAt", "priority", "theme", "category", "executor", "reactionTime", "solutionTime", "status"],
    mapEntityPropertyComponent: mapRequestPropertyToTableComponent,
    comparePropertyFn: mapRequestPropertyCompareAlgorythm,
    i18nPrefix: "request"
}

const RequestsTable: FC<IRequestTableProps> = ({ data }) => {
    return <TableComponent data={data} {...RequestTableProps} />
}

export default RequestsTable