import { useEffect, useMemo, useState } from "react"
import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"

import CategoryList from "../components/category/CategoryList"
import Search from "../components/search/Search"
import NewThreadButton from "../components/thread/NewThreadButton"
import NewThreadModal from "../components/thread/NewThreadModal"
import ThreadList from "../components/thread/ThreadList"
import { threadsThunks } from "../states/threads/action"
import { usersThunks } from "../states/users/action"

const HomePage = () => {
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const keyword = searchParams.get('keyword')
    const category = searchParams.get('category')

    const [isLoadData, setIsLoadData] = useState(true)

    const threads = useSelector((states) => states.threads)
    const users = useSelector((states) => states.users)
    const auth = useSelector((states) => states.auth)

    const onNewThread = ({ title, category, body }) => {
        (
            async () => {
                try {
                    await dispatch(threadsThunks.asyncCreateThreads({
                        title, category, body
                    }))
                    toast.success("Success add new thread")
                    document.getElementById("close_modal").click()
                } catch (error) {
                    toast.error(error.message)
                }
            }
        )()
    }
    useEffect(() => {
        (
            async () => {
                if (isLoadData) {
                    await dispatch(usersThunks.asyncGetUsers())
                    await dispatch(threadsThunks.asyncGetThreads())
                }
                setIsLoadData(false)
            }
        )()
    }, [dispatch, isLoadData])

    const finalThreads = useMemo(() => {
        if (!isLoadData) {
            let threadList = threads
            if (keyword) {
                threadList = threads.filter((thread) =>
                    thread.title.toLowerCase().includes(keyword.toLowerCase())
                )
            }
            if (category) {
                threadList = threadList.filter((thread) =>
                    thread.category.toLowerCase().includes(category.toLowerCase())
                )
            }
            return threadList.map((thread) => ({
                ...thread,
                owner: users.find((user) => user.id === thread.ownerId),
            }))
        }
    }, [category, isLoadData, keyword, threads, users])


    return (
        <div className="container mx-auto pt-5">
            <div className="sticky top-20 z-10">
                <Search />
            </div>
            <section className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="md:sticky md:top-48 h-fit">
                    <CategoryList isLoading={isLoadData} />
                </div>
                <div className="md:col-span-2">
                    <ThreadList isLoading={isLoadData} threads={finalThreads} />
                </div>
            </section>
            {
                auth ?
                    <>
                        <NewThreadButton />
                        <NewThreadModal onNewThread={onNewThread} />
                    </>
                    : <></>
            }
        </div>
    )
}

export default HomePage