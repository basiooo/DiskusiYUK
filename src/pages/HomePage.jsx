import CategoryList from "../components/category/CategoryList"
import Search from "../components/search/Search"
import NewThreadButton from "../components/thread/NewThreadButton"
import NewThreadModal from "../components/thread/NewThreadModal"
import ThreadList from "../components/thread/ThreadList"
import useHomePage from "../hooks/useHomePage"

const HomePage = () => {
    const { finalThreads, isLoadData, onNewThread, auth } = useHomePage()
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