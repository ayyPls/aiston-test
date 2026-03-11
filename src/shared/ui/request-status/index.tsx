import { chakra, Text } from "@chakra-ui/react"
import { ERequestStatus } from "@shared/types/request"


const RequestStatus = chakra(Text, {
    base: {
        padding: ".125rem .375rem",
        borderRadius: ".25rem",
        fontSize: ".875rem",
        fontWeight: 500,
        width: "fit-content",
        height: "fit-content",
        textWrap: "nowrap"
    },
    variants: {
        variant: {
            [ERequestStatus.NEW]: {
                backgroundColor: "#F0CDFA"
            },
            [ERequestStatus.CANCELED]: {
                border: "1px solid red",
                color: "red"
            },
            [ERequestStatus.DONE]: {
                backgroundColor: "green"
            },
            [ERequestStatus.CLOSED]: {
                backgroundColor: "#E8E8E8"
            },
            [ERequestStatus.PAUSED]: {
                border: "1px solid black",
                fontWeight: 400
            },
            [ERequestStatus.SPARE_PARTS_AWAITING]: {
                backgroundColor: "grey",
                color: "white"
            },
            [ERequestStatus.UNDER_CONCIDERATION]: {
                backgroundColor: "black",
                color: "white"
            },
            [ERequestStatus.IN_PROCESS]: {
                backgroundColor: "#FFFEB3",
            },

        }
    }
})

export { RequestStatus }