import Header from "@widgets/header"
import { ReactNode } from "react"
import { Outlet } from "react-router-dom"


const AppLayout = (): ReactNode => {
    return <>
        <Header/>
        <main>
            <Outlet/>
        </main>
    </>
}

export default AppLayout