import PropTypes from 'prop-types'

import { LeaderboardShape } from '../../utils/shapes'
import LeaderboardSkeleton from '../skeleton/LeaderboardSkeleton'

const LeaderboardList = ({ leaderboard, isLoading = false }) => {
  return (
    <section className="card w-full bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl md:text-3xl">Leaderboard</h2>
        <hr />
        <div className='overflow-x-auto'>
          <table className="table">
            <thead>
              <tr>
                <th className='w-9/12 text-lg'>User</th>
                <th className='text-lg text-center'>Score</th>
              </tr>
            </thead>
            <tbody>
              {
                isLoading ?
                  <tr >
                    <td colSpan={2}>
                      <LeaderboardSkeleton count={6} />
                    </td>
                  </tr>
                  :
                  leaderboard.map((item, index) => (
                    <tr key={item.user.id} className={index % 2 ? "bg-base-100" : "bg-base-300"}>
                      <td>
                        <div className="flex items-center gap-3">
                          {
                            index === 0 && item.point !== 0 ?
                              <div className="avatar indicator">
                                <span className="indicator-item indicator-center text-xl">👑</span>
                                <div className="mask mask-circle w-12 h-12">
                                  <img src={item.user.avatar} alt="user avatar" />
                                </div>
                              </div>
                              :
                              <div className="avatar">
                                <div className="mask mask-circle w-12 h-12">
                                  <img src={item.user.avatar} alt="user avatar" />
                                </div>
                              </div>
                          }
                          <div>
                            <div className="font-bold">{item.user.name}</div>
                            <div className="text-sm opacity-50">{item.user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className='text-center'>
                        {item.score}
                      </td>
                    </tr>
                  ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
LeaderboardList.propTypes = {
  leaderboard: PropTypes.arrayOf(PropTypes.shape(LeaderboardShape)),
  isLoading: PropTypes.bool,

}
export default LeaderboardList