import PropTypes from 'prop-types'
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import useInput from '../../hooks/useInput'
import MarkdownEditor from "../markdownEditor/MarkdownEditor"

const CommentAdd = ({ onComment }) => {
  const auth = useSelector((states) => states.auth)
  const [comment, onCommentChange] = useInput('')

  const handleSubmit = () => {
    onComment(comment)
    onCommentChange({
      target: ""
    })
  }

  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl my-2">
      <div className="card-body">
        <h4 className="card-title text-lg">Add New Comment</h4>
        {
          auth ?
            <>
              <MarkdownEditor value={comment} onChange={onCommentChange} />
              <button disabled={!comment.trim()} onClick={handleSubmit} className='btn w-full btn-info text-lg' type='button'>Send</button>
            </>
            :
            <div className="text-center pb-3">
              <h4 className="text-lg">Login to add new comment</h4>
              <Link to="/login" className="btn btn-info btn-sm mt-2" >Login</Link>
            </div>
        }
      </div>
    </div>
  )
}
CommentAdd.propTypes = {
  onComment: PropTypes.func.isRequired,
}
export default CommentAdd