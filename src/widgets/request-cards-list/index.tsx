import { chakra, Flex, Spacer, Text } from "@chakra-ui/react"
import { IRequestDto } from "@shared/types/request"
import { mapRequestPropertyTranslation } from "@shared/utils/request"
import { FC } from "react"
import { RequestStatus } from "@shared/ui/request-status"
import { groupRequestsByCreatedAtTime } from "@shared/utils/datetime"
import { RequestPriority } from "@shared/ui/request-priority"


const RequestCardWrapper = chakra(Flex, {
    base: {
        padding: "15px 15px",
        flexDirection: "column",
        gap: "1rem",
        border: "1px solid #DDDDDD",
        borderRadius: ".5rem",
        fontSize: ".875rem",

    }
})

interface IRequestCardProps extends IRequestDto {

}

const RequestCard: FC<IRequestCardProps> = (props) => {

    return <RequestCardWrapper>
        <Flex justifyContent="space-between">
            <Text>{mapRequestPropertyTranslation(props, "theme")}</Text>
            <Flex gap=".25rem">
                <RequestPriority variant={props.priority} />
                <RequestStatus variant={props.status}>{mapRequestPropertyTranslation(props, "status")}</RequestStatus>
            </Flex>
        </Flex>
        <Flex justifyContent="space-between">
            <Flex gap="6px">
                <Text>{mapRequestPropertyTranslation(props, "code")}</Text>
                <Text color="#A4A4A4">{mapRequestPropertyTranslation(props, "address")}</Text>
            </Flex>
            <Text>{mapRequestPropertyTranslation(props, "solutionTime")}</Text>
        </Flex>
    </RequestCardWrapper>
}

interface IRequestCardsList {
    items: Array<IRequestDto>
}

const RequestCardsList: FC<IRequestCardsList> = ({ items }) => {
    return <Spacer spaceY={3} pt="6">
        {
            Object.entries<IRequestDto[]>(groupRequestsByCreatedAtTime(items)).map(([groupDateTime, groupRequests], groupIndex) => {
                return <Spacer spaceY={3} key={groupIndex}>
                    <Text fontWeight="semibold" fontSize=".875rem" textTransform="uppercase">{groupDateTime}</Text>
                    {groupRequests.map(request => <RequestCard key={request.id} {...request} />)}
                </Spacer>
            })
        }
    </Spacer>
}

export default RequestCardsList