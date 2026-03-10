import { chakra } from "@chakra-ui/react"
import Tabs from "@shared/tabs"
import { ITabsProps } from "@shared/tabs/interface"
import { ERequestStatus } from "@shared/types/request"
import Button from "@shared/ui/button"
import { FC } from "react"
import { useTranslation } from "react-i18next"


type IRequestsTabsProps = Pick<ITabsProps<ERequestStatus>, "value" | "onChange">

const RequestsTabsWrapper = chakra("div", {
    base: {
        display: "flex",
        gap: "10px",
        py: {
            md: "21px"
        },
        // TODO: fix border color
        // borderBottom: "1px solid gray"
    }
})

const RequestsTabs:FC<IRequestsTabsProps> = (props) => {
    const { t } = useTranslation()
        
    const REQUEST_FILTER_TABS_OPTIONS: ITabsProps<ERequestStatus>['options'] = Object.entries(ERequestStatus).map(
        ([statusKey, statusValue]) => ({ value: statusValue, label: t(`requestStatus.${statusKey}`)})
    )
    return <RequestsTabsWrapper>
                <Button
                    display={{base: "block", md: "none"}}
                    flexShrink={0}
                    scrollSnapAlign="start"
                    variant={props.value === undefined  ? "primary" : undefined}
                    onClick={() => props.onChange()}
                >
                    icon
                </Button>
                <Tabs<ERequestStatus> options={REQUEST_FILTER_TABS_OPTIONS} {...props}/>
                <Button
                    flexShrink={0}
                    scrollSnapAlign="start"
                    variant={props.value === undefined  ? "primary" : undefined}
                    onClick={() => props.onChange()}
                >
                    Все статусы
                </Button>
            </RequestsTabsWrapper>
}

export default RequestsTabs