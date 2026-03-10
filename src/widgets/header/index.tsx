import { EAppRouterPath } from "@app/router/paths"
import { Link as ReactRouterLink, useNavigate} from "react-router-dom"
import { Box, chakra, Flex, Link } from "@chakra-ui/react"
import Button from "@shared/ui/button"
import Select from "@shared/ui/select"

// TODO: add translation
const LINKS_SELECT_OPTIONS: Array<{label: string, value: EAppRouterPath}> = [
    {
        label: "Заявки",
        value: EAppRouterPath.DEFAULT
    },
    {
        label: "Отчеты",
        value: EAppRouterPath.DEFAULT
    },
]

// const SELECT_OPTION_LABELS = createListCollection({
//     items: LINKS_SELECT_OPTIONS
// })

const SELECT_OPTION_LABELS = LINKS_SELECT_OPTIONS.map((option) => option.label)

const StyledHeader = chakra("header", {
    base : {
        // TODO: set color from palette
        borderBottom: "1px solid gray",
        minHeight: {
            base: "72px",
            md: "86px",
        },
        display: "flex",
        alignItems: {
            base: "flex-start",
            md: "center",
        },
        padding: {
            base: "16px",
            md: "22px 34px 0 130px",
        }
    }
})

const Header = () => {
    const navigate = useNavigate()
    const onLinkSelect = (targetOption: string) => {
        const targetLink = LINKS_SELECT_OPTIONS.find(({label}) => label === targetOption)
        if (targetLink) navigate(targetLink.value)
    }
    return <StyledHeader>
        <Flex gap="14px" flexGrow="1" display={{base: "none", md: "flex"}}>
            <Link asChild>
                <ReactRouterLink to={EAppRouterPath.DEFAULT}>Заявки</ReactRouterLink>
            </Link>
            <Link asChild>
                <ReactRouterLink to={EAppRouterPath.NOT_FOUND}>Отчеты</ReactRouterLink>
            </Link>
            <Link asChild>
                <ReactRouterLink to={EAppRouterPath.NOT_FOUND}>Справочники</ReactRouterLink>
            </Link>
            
        </Flex>
        {/* mobile only */}
        <Flex display={{base: "flex", md: "none"}}>
            <Select options={SELECT_OPTION_LABELS} onSelect={onLinkSelect}/>
        </Flex>
        <Flex gap="27px" display={{base: "none", md: "flex"}}>
            {/* TODO: avatar component with chip */}
            <Button>Выйти</Button>
        </Flex>
    </StyledHeader>
}

export default Header