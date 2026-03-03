import { ReactNode } from "react"
import { Outlet } from "react-router-dom"

const AppLayout = (): ReactNode => {
    return <main><Outlet/></main>
}

export default AppLayout