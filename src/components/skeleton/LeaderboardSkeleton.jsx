import PropTypes from 'prop-types'

const LeaderboardSkeleton = ({ count = 2 }) => {
    const skeletons = Array.from({ length: count }, (_, index) => (
        <div className="skeleton w-full p-5" key={index}>
            <div className="flex gap-3 justify-between">
                <div className="w-4/12 items-center h-10 bg-gray-800 rounded"></div>
                <div className=" items-center h-7 bg-gray-800 rounded w-20"></div>
            </div>
        </div>
    ))

    return <>{skeletons}</>
}
LeaderboardSkeleton.propTypes = {
    count: PropTypes.number,
}

export default LeaderboardSkeleton