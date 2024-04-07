import { useEffect } from "react"
import { Toaster } from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { RouterProvider } from "react-router-dom"

import Loading from "./components/loading/Loading"
import { routers } from "./routers"
import { isPreloadThunks } from "./states/isPreload/action"
function App() {

    const isPreload = useSelector((states) => states.isPreload)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(isPreloadThunks.asyncPreload())
    }, [dispatch])

    if (isPreload) {
        return null
    }
    return (
        <>
            <Toaster
                containerStyle={{ zIndex: 99999 }}
                position="top-right"
            />
            <Loading />
            <main>
                <RouterProvider router={routers} />
            </main>
        </>
    )
}

export default App
