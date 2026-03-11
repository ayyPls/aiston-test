import { chakra } from "@chakra-ui/react"
import { ERequestStatus } from "@shared/types/request"
import Button from "@shared/ui/button"
import Tabs from "@shared/ui/tabs"
import { ITabsProps } from "@shared/ui/tabs/interface"
import { FC } from "react"
import { useTranslation } from "react-i18next"
import TabFilterIcon from "@assets/icons/tab-filter.svg"

type IRequestsTabsProps = Pick<ITabsProps<ERequestStatus>, "value" | "onChange">

const TabIcon = chakra("div", {
    base: {
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        width: "0.75rem",
        height: "0.75rem",
        backgroundImage: `url("${TabFilterIcon}")`

    },
})

const RequestsTabsWrapper = chakra("div", {
    base: {
        fontSize: {
            base: ".875rem",
            md: "1rem"
        },
        display: "flex",
        maxWidth: "100dvw",
        gap: "10px",
        overflowX: "scroll",
        scrollSnapAlign: "start",
        scrollSnapType: "x mandatory",
        py: {
            md: "21px"
        },
        flexDirection: {
            base: "row-reverse",
            md: "initial"
        },
        _scrollbar: {
            display: "none"
        }
    }
})

const RequestsTabs: FC<IRequestsTabsProps> = (props) => {
    const { t } = useTranslation()

    const REQUEST_FILTER_TABS_OPTIONS: ITabsProps<ERequestStatus>['options'] = Object.entries(ERequestStatus).map(
        ([statusKey, statusValue]) => ({ value: statusValue, label: t(`requestStatus.${statusKey}`) })
    )
    return <RequestsTabsWrapper>
        <Tabs<ERequestStatus> options={REQUEST_FILTER_TABS_OPTIONS} {...props} />
        <Button
            flexShrink={0}
            scrollSnapAlign="start"
            variant={props.value === undefined ? "primary" : undefined}
            onClick={() => props.onChange()}
        >
            Все статусы
        </Button>
        <Button
            display={{ base: "block", md: "none" }}
            flexShrink={0}
            scrollSnapAlign="start"
        >
            <TabIcon />
        </Button>
    </RequestsTabsWrapper>
}

export default RequestsTabs