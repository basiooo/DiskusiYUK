import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"

export const AuthLayout = () => {
    const auth = useSelector((states) => states.auth)
    const navigate = useNavigate()

    useEffect(() => {
        if (auth) {
            navigate("/")
        }
    }, [auth, navigate])
    return (
        <section className="m-auto container flex h-screen justify-center items-center">
            <Outlet />
        </section>
    )
}
