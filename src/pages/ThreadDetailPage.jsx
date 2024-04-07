
import CommentAdd from "../components/comment/CommentAdd"
import CommentList from "../components/comment/CommentList"
import ThereadItemSkeleton from "../components/skeleton/ThreadItemSkeleton"
import ThreadItem from "../components/thread/ThreadItem"
import useThreadDetailPage from "../hooks/useThreadDetailPage"
import { threadThunks } from "../states/thread/action"

const ThreadDetailPage = () => {
  const { id, isLoadData, onComment, thread, voteAction } = useThreadDetailPage()
  return (
    <div className="container mx-auto pt-5 mb-10">
      <div className="card w-full bg-base-200 shadow-xl">
        <div className="card-body">
          {
            isLoadData ?
              <ThereadItemSkeleton count={1} />
              :
              <ThreadItem
                thread={thread}
                upVote={voteAction(
                  threadThunks.asyncUpVoteThread
                )}
                neutralizeUpVote={voteAction(
                  threadThunks.asyncNeutralizeUpVoteThread
                )}
                downVote={voteAction(
                  threadThunks.asyncDownVoteThread
                )}
                neutralizeDownVote={voteAction(
                  threadThunks.asyncNeutralizeDownVoteThread
                )} />
          }
          <CommentAdd onComment={onComment} />
        </div>
      </div>

      <div className="mt-10" id="comments">
        <CommentList threadId={id} isLoading={isLoadData} comments={thread?.comments} />
      </div>
    </div>
  )
}

export default ThreadDetailPage