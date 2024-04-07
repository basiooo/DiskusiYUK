import PropTypes from 'prop-types'

const CategorySkeleton = ({ count = 2 }) => {
  const skeletons = Array.from({ length: count }, (_, index) => (
    <div key={index} className="skeleton bg-gray-800 w-16 h-8"></div>
  ))

  return <>{skeletons}</>
}

CategorySkeleton.propTypes = {
  count: PropTypes.number,
}

export default CategorySkeleton
