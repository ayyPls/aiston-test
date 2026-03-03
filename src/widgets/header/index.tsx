import { AppRouterPath } from "@app/router/paths"
import { Link as ReactRouterLink} from "react-router-dom"
import { Box, chakra, Flex, Link } from "@chakra-ui/react"
import Button from "@shared/ui/button"


const Header = () => {
    return <chakra.header minHeight="86px" paddingTop="22px" paddingLeft="130px" paddingRight="34px" display="flex" alignItems="center">
        <Box display="flex" gap="14px" flexGrow="1">
            <Link asChild>
                <ReactRouterLink to={AppRouterPath.DEFAULT}>Заявки</ReactRouterLink>
            </Link>
            <Link asChild>
                <ReactRouterLink to={AppRouterPath.NOT_FOUND}>Отчеты</ReactRouterLink>
            </Link>
        </Box>
        {/* TODO: add select */}
        <Flex gap="27px">
            {/* TODO: avatar component with chip */}
            <Button>Выйти</Button>
        </Flex>
    </chakra.header>
}

export default Header