import toast from "react-hot-toast"
import { useDispatch } from "react-redux"

export const useVote = () => {
    const dispatch = useDispatch()
    const action = (thunk) => async (data) => {
        try {
            await dispatch(thunk(data))
        } catch (error) {
            toast.error(error.message)
        }
    }
    const handler = ({
        auth,
        upVotesBy,
        downVotesBy,
        upVote,
        downVote,
        neutralizeUpVote,
        neutralizeDownVote,
        data
    }) => {
        const handleUpVote = () => {
            if (!auth) {
                return
            }
            if (upVotesBy.includes(auth.id)) {
                neutralizeUpVote(data)
            } else {
                neutralizeDownVote(data)
                upVote(data)
            }
        }

        const handleDownVote = () => {
            if (!auth) {
                return
            }
            if (downVotesBy.includes(auth.id)) {
                neutralizeDownVote(data)
            } else {
                neutralizeUpVote(data)
                downVote(data)
            }
        }
        return {
            handleUpVote, handleDownVote
        }
    }
    return { action, handler }
}
