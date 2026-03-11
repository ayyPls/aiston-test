import { EAppRouterPath } from "@app/router/paths"
import { Link as ReactRouterLink, useNavigate } from "react-router-dom"
import { chakra, Flex, Link, Text } from "@chakra-ui/react"
import Button from "@shared/ui/button"
import Select from "@shared/ui/select"
import i18n from "@shared/i18n"
import LogoutIcon from "@assets/icons/logout.svg"
import { Avatar } from "@shared/ui/avatar"

const LINKS_SELECT_OPTIONS: Array<{ label: string, value: EAppRouterPath }> = [
    {
        label: i18n.t(`routes.${EAppRouterPath.DEFAULT}`),
        value: EAppRouterPath.DEFAULT
    },
    {
        label: i18n.t(`routes.${EAppRouterPath.NOT_FOUND}`),
        value: EAppRouterPath.NOT_FOUND
    },
]

const SELECT_OPTION_LABELS = LINKS_SELECT_OPTIONS.map((option) => option.label)

const StyledLogoutIcon = chakra("div", {
    base: {
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        width: "1.5rem",
        height: "1.5rem",
        backgroundImage: `url("${LogoutIcon}")`
    },
})

const StyledHeader = chakra("header", {
    base: {
        // TODO: set color from palette
        borderBottom: "1px solid #D9E1EC",
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
            md: "0 34px 0 130px",
        }
    }
})

const Header = () => {
    const navigate = useNavigate()
    const onLinkSelect = (targetOption: string) => {
        const targetLink = LINKS_SELECT_OPTIONS.find(({ label }) => label === targetOption)
        if (targetLink) navigate(targetLink.value)
    }
    return <StyledHeader>
        <Flex gap="14px" flexGrow="1" display={{ base: "none", md: "flex" }}>
            <Link asChild>
                <ReactRouterLink to={EAppRouterPath.DEFAULT}>
                    {i18n.t(`routes.${EAppRouterPath.DEFAULT}`)}
                </ReactRouterLink>
            </Link>
            <Link asChild>
                <ReactRouterLink to={EAppRouterPath.NOT_FOUND}>
                    {i18n.t(`routes.${EAppRouterPath.NOT_FOUND}`)}
                </ReactRouterLink>
            </Link>
            <Link asChild>
                <ReactRouterLink to={EAppRouterPath.ANY_PATH}>
                    {i18n.t(`routes.${EAppRouterPath.ANY_PATH}`)}
                </ReactRouterLink>
            </Link>
        </Flex>
        {/* mobile only */}
        <Flex display={{ base: "flex", md: "none" }}>
            <Select options={SELECT_OPTION_LABELS} onSelect={onLinkSelect} />
        </Flex>
        <Flex alignItems="center" gap="27px" display={{ base: "none", md: "flex" }}>
            <Avatar />
            <Button padding="8px 20px">
                <Flex gap=".25rem">
                    <StyledLogoutIcon />
                    <Text fontSize="1rem">Выйти</Text>
                </Flex>
            </Button>
        </Flex>
    </StyledHeader>
}

export default Header