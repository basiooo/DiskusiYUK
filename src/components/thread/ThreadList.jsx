import PropTypes from 'prop-types'

import { useVote } from '../../hooks/UseVote'
import { threadsThunks } from '../../states/threads/action'
import { ThreadShape } from '../../utils/shapes'
import ThereadItemSkeleton from '../skeleton/ThreadItemSkeleton'
import ThreadItem from "./ThreadItem"

const ThreadList = ({ threads, isLoading = false }) => {
  const { action: voteAction } = useVote()

  return (
    <section className="card w-full bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl md:text-3xl">Threads</h2>
        <hr />
        {
          isLoading ?
            <ThereadItemSkeleton />
            :
            threads.map(thread => (
              <ThreadItem
                key={thread.id}
                thread={thread}
                upVote={voteAction(
                  threadsThunks.asyncUpVoteThread
                )}
                neutralizeUpVote={voteAction(
                  threadsThunks.asyncNeutralizeUpVoteThread
                )}
                downVote={voteAction(
                  threadsThunks.asyncDownVoteThread
                )}
                neutralizeDownVote={voteAction(
                  threadsThunks.asyncNeutralizeDownVoteThread
                )} />
            ))
        }
      </div>
    </section>
  )
}
ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(ThreadShape)),
  isLoading: PropTypes.bool,

}
export default ThreadList