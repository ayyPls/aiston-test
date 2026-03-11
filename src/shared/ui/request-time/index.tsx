import { chakra, Flex } from "@chakra-ui/react"
import { FC } from "react"
import InProcessIcon from "@assets/icons/time_in_process.svg"
import SuccessIcon from "@assets/icons/time_success.svg"
import WarningIcon from "@assets/icons/warning.svg"


enum ERequestTime {
    IN_PROCESS,
    SUCCESS,
    WARNING
}

interface IRequestTimeProps {
    timeStr: string
    variant?: ERequestTime
}

const RequestTimeWrapper = chakra(Flex, {
    base: {},
    variants: {
        variant: {
            [ERequestTime.IN_PROCESS]: {
                color: "inherit"
            },
            [ERequestTime.SUCCESS]: {
                color: "#68A86A"
            },
            [ERequestTime.WARNING]: {
                color: "#B93C3C"
            }
        }
    }
})

const RequestTimeIcon = chakra(Flex, {
    base: {
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        width: "1.5rem",
        height: "1.5rem",
    },
    variants: {
        variant: {
            [ERequestTime.IN_PROCESS]: {
                backgroundImage: `url("${InProcessIcon}")`
            },
            [ERequestTime.SUCCESS]: {
                backgroundImage: `url("${SuccessIcon}")`
            },
            [ERequestTime.WARNING]: {
                backgroundImage: `url("${WarningIcon}")`
            }
        }
    }
})

const RequestTime: FC<IRequestTimeProps> = ({ timeStr, variant }) => {
    return <RequestTimeWrapper alignItems="center" variant={variant} >
        <RequestTimeIcon variant={(variant === ERequestTime.IN_PROCESS && timeStr === "—") ? undefined : variant} />
        {timeStr}
    </RequestTimeWrapper>
}

export { RequestTime, ERequestTime }