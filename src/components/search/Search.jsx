import { useSearchParams } from "react-router-dom"

const Search = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const keyword = searchParams.get('keyword') || ''
  const changeSearchParams = (keyword) => {
    const data = keyword.target.value
    setSearchParams({ keyword: data })
  }

  return (
    <section className="card card-compact w-full bg-base-200 shadow-xl">
      <div className="card-body">
        <label className="input input-bordered input-info border-none flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
          <input type="text" onChange={changeSearchParams} value={keyword} className="grow text-xl w-full" placeholder="Search Threads" />
        </label>
      </div>
    </section>
  )
}
export default Search