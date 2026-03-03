import Header from "@widgets/header"
import { ReactNode } from "react"
import { Outlet } from "react-router-dom"
import { chakra } from "@chakra-ui/react"

const AppLayout = (): ReactNode => {
    return <>
        <Header/>
        <chakra.main  padding="21px 40px">
            <Outlet/>
        </chakra.main>
    </>
}

export default AppLayout