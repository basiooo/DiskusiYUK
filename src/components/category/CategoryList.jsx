import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import useCategorySearch from '../../hooks/useCategorySearch'
import CategorySkeleton from '../skeleton/CategorySkeleton'

const CategoryList = ({ isLoading = false }) => {
  const threads = useSelector((state) => state.threads) ?? []
  const categories = [...new Set(threads.map(({ category }) => category.toLowerCase()))]
  const { currentCategory, changeCategorySearch } = useCategorySearch()

  return (
    <section className="card w-full h-fit bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl md:text-3xl">Categories</h2>
        <hr />
        <div className="flex flex-wrap gap-2">
          {
            isLoading ?
              <CategorySkeleton count={5} />
              :
              categories.map(category => (
                <button onClick={() => { changeCategorySearch(category, true) }} type='button' className={currentCategory === category ? 'btn btn-sm btn-outline hover:btn-info btn-info' : 'btn btn-sm btn-outline hover:btn-info'} key={category}>
                  {category}
                </button>
              ))
          }
        </div>
      </div>
    </section>
  )
}
CategoryList.propTypes = {
  isLoading: PropTypes.bool,
}

export default CategoryList