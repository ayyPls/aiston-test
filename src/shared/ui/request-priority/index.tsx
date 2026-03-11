import { ERequestPriority } from "@shared/types/request";
import PriorityCriticalIcon from "@assets/icons/priority_critical.svg"
import PriorityHighIcon from "@assets/icons/priority_high.svg"
import PriorityMediumIcon from "@assets/icons/priority_medium.svg"
import PriorityLowIcon from "@assets/icons/priority_low.svg"
import { chakra } from "@chakra-ui/react";

const RequestPriority = chakra("div", {
    base: {
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        width: "1.5rem",
        height: "1.5rem"
    },
    variants: {
        variant: {
            [ERequestPriority.CRITICAL]: {
                backgroundImage: `url("${PriorityCriticalIcon}")`
            },
            [ERequestPriority.HIGH]: {
                backgroundImage: `url("${PriorityHighIcon}")`
            },
            [ERequestPriority.MEDIUM]: {
                backgroundImage: `url("${PriorityMediumIcon}")`
            },
            [ERequestPriority.LOW]: {
                backgroundImage: `url("${PriorityLowIcon}")`
            },
        }
    }
})

export { RequestPriority }