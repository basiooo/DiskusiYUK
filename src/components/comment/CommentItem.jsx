import MarkdownPreview from '@uiw/react-markdown-preview'
import PropTypes from 'prop-types'
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from "react-icons/ai"
import { useSelector } from 'react-redux'

import { useVote } from '../../hooks/UseVote'
import { postedAt } from "../../utils/commons"
import { CommentShape } from '../../utils/shapes'

const CommentItem = ({ comment, threadId, upVote, neutralizeUpVote, downVote, neutralizeDownVote }) => {
  const auth = useSelector((states) => states.auth)

  const {
    id: commentId,
    content,
    createdAt,
    owner,
    upVotesBy,
    downVotesBy
  } = comment
  const { handler } = useVote()

  const { handleUpVote, handleDownVote } = handler(
    {
      auth,
      upVotesBy,
      downVotesBy,
      upVote,
      downVote,
      neutralizeUpVote,
      neutralizeDownVote,
      data: { threadId, commentId }
    }
  )
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl my-1">
      <div className="card-body">
        <div>
          <div className="avatar mt-2 flex-col md:flex-row">
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full mr-2">
              <img src={owner.avatar} />
            </div>
            <span className="text-base font-bold">{owner.name}</span>
            <span className="mx-1 text-base hidden md:block">•</span>
            <span className="text-base "> {postedAt(createdAt)} </span>
          </div>
        </div>
        <div className="text-md mx-2">
          <MarkdownPreview className='!bg-transparent' source={content} />
        </div>
        <hr />
        <div className="card-actions flex justify-between">
          <div className="flex gap-3">
            <button type="button" disabled={!auth} className="flex gap-1 items-center" onClick={handleUpVote}>
              <span>{upVotesBy.length}</span>
              {
                upVotesBy.includes(auth?.id)
                  ? <AiFillLike size={25} className='text-info' />
                  :
                  <AiOutlineLike size={25} />
              }
            </button>
            <button type="button" disabled={!auth} className="flex gap-1 items-center" onClick={handleDownVote}>
              <span>{downVotesBy.length}</span>
              {
                downVotesBy.includes(auth?.id)
                  ? <AiFillDislike size={25} className='text-info' />
                  :
                  <AiOutlineDislike size={25} />
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
CommentItem.propTypes = {
  comment: PropTypes.shape(CommentShape).isRequired,
  threadId: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  neutralizeUpVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralizeDownVote: PropTypes.func.isRequired,
}

export default CommentItem