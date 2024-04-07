import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import { threadThunks } from "../states/thread/action"
import { useVote } from "./UseVote"

const useThreadDetailPage = () => {
    const [isLoadData, setIsLoadData] = useState(true)
    const dispatch = useDispatch()

    const thread = useSelector((states) => states.thread)
    const { id } = useParams()
    const { action: voteAction } = useVote()

    useEffect(() => {
        (
            async () => {
                if (isLoadData) {
                    await dispatch(threadThunks.asyncGetThread(id))
                }
                setIsLoadData(false)
            }
        )()
    }, [dispatch, id, isLoadData])

    const onComment = (comment) => {
        (
            async () => {
                try {
                    await dispatch(threadThunks.asyncAddComment({
                        threadId: id, comment
                    }))
                    toast.success("Success add new comment")
                } catch (error) {
                    toast.error(error.message)
                }
            }
        )()
    }
    return {
        onComment, isLoadData, thread, voteAction, id
    }
}
export default useThreadDetailPage