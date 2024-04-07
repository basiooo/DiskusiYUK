import PropTypes from 'prop-types'

import { useVote } from '../../hooks/UseVote'
import { threadThunks } from '../../states/thread/action'
import { CommentShape } from '../../utils/shapes'
import CommentItemSkeleton from "../skeleton/CommentItemSkeleton"
import CommentItem from "./CommentItem"

const CommentList = ({ threadId, comments, isLoading = false }) => {
  const { action: voteAction } = useVote()

  return (
    <section className="card w-full bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl md:text-3xl">Comments ({comments?.length})</h2>
        <hr />
        {
          isLoading ?
            <CommentItemSkeleton />
            :
            comments.map(comment => (
              <CommentItem
                threadId={threadId}
                comment={comment}
                key={comment.id}
                upVote={voteAction(
                  threadThunks.asyncUpVoteComment
                )}
                neutralizeUpVote={voteAction(
                  threadThunks.asyncNeutralizeUpVoteComment
                )}
                downVote={voteAction(
                  threadThunks.asyncDownVoteComment
                )}
                neutralizeDownVote={voteAction(
                  threadThunks.asyncNeutralizeDownVoteComment
                )}
              />
            ))
        }
      </div>
    </section>
  )
}
CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(CommentShape)),
  isLoading: PropTypes.bool,
  threadId: PropTypes.string.isRequired
}
export default CommentList