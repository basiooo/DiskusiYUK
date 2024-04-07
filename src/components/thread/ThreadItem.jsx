import MarkdownPreview from '@uiw/react-markdown-preview'
import PropTypes from 'prop-types'
import { AiFillDislike, AiFillLike, AiOutlineComment, AiOutlineDislike, AiOutlineLike } from "react-icons/ai"
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"

import useCategorySearch from '../../hooks/useCategorySearch'
import { useVote } from '../../hooks/UseVote'
import { postedAt } from "../../utils/commons"
import { ThreadShape } from '../../utils/shapes'

const ThreadItem = ({ thread, upVote, neutralizeUpVote, downVote, neutralizeDownVote }) => {
  const { changeCategorySearch } = useCategorySearch()
  const auth = useSelector((states) => states.auth)
  const { handler } = useVote()

  const {
    id: threadId,
    upVotesBy,
    downVotesBy,
    title,
    body,
    owner,
    comments,
    totalComments,
    category,
    createdAt
  } = thread

  const { handleUpVote, handleDownVote } = handler(
    {
      auth,
      upVotesBy,
      downVotesBy,
      upVote,
      downVote,
      neutralizeUpVote,
      neutralizeDownVote,
      data: { threadId }
    }
  )
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl my-1">
      <div className="card-body">
        <Link to={`/thread/${threadId}`} className="card-title font-bold text-1xl md:text-2xl">
          {title}
        </Link>
        <div>
          <button type='button' onClick={() => { changeCategorySearch(category.toLowerCase()) }} className="badge badge-sm badge-info badge-outline mb-2 p-3 text-md md:text-base">{category}</button>
          <br />
          <div className="avatar mt-2 flex-col md:flex-row">
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full mr-2">
              <img src={owner?.avatar} />
            </div>
            <span className="text-base md:text-base font-bold">{owner?.name}</span>
            <span className="mx-1 text-base hidden md:block">•</span>
            <span className="text-base"> {postedAt(createdAt)} </span>
          </div>
        </div>
        <div className="text-base md:text-lg break-words">
          <MarkdownPreview className='!bg-transparent' source={body} />
        </div>
        <hr />
        <div className="card-actions justify-between">
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
          <Link to={`/thread/${threadId}#comments`} className="flex gap-1 items-center">
            <span>{totalComments ?? comments.length}</span>
            <AiOutlineComment fontSize={25} />
          </Link>
        </div>
      </div>
    </div>
  )
}
ThreadItem.propTypes = {
  thread: PropTypes.shape(ThreadShape).isRequired,
  upVote: PropTypes.func.isRequired,
  neutralizeUpVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralizeDownVote: PropTypes.func.isRequired,
}

export default ThreadItem