import { Outlet, ScrollRestoration } from "react-router-dom"

import Footer from "../footer/Footer"
import Header from "../header/Header"

export const AppLayout = () => {

    return (
        <>
            <Header />
            <main>
                <Outlet />
                <ScrollRestoration />
            </main>
            <Footer />
        </>
    )
}
