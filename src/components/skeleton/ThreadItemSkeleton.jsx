import PropTypes from 'prop-types'

const ThereadItemSkeleton = ({ count = 2 }) => {
  const skeletons = Array.from({ length: count }, (_, index) => (
    <div className="skeleton w-full p-5 " key={index}>
      <div className="h-6 bg-gray-800 rounded"></div>
      <div className="h-4 w-1/12 bg-gray-800 rounded my-2"></div>
      <div className="h-5 w-1/5 bg-gray-800 rounded my-2"></div>
      <div className="h-20 w-full bg-gray-800 rounded my-2"></div>
      <hr />
      <div className="flex justify-between mt-2">
        <div className="flex gap-3">
          <div className="flex gap-1 items-center h-7 bg-gray-800 rounded w-7"></div>
          <div className="flex gap-1 items-center h-7 bg-gray-800 rounded w-7"></div>
        </div>
        <div className="flex gap-1 items-center h-7 bg-gray-800 rounded w-10"></div>
      </div>
    </div>
  ))
  return <>{skeletons}</>

}
ThereadItemSkeleton.propTypes = {
  count: PropTypes.number,
}
export default ThereadItemSkeleton