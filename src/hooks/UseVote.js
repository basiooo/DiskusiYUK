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
        const handleUpVote = async () => {
            if (!auth) {
                return
            }
            if (upVotesBy.includes(auth.id)) {
                await neutralizeUpVote(data)
            } else {
                await neutralizeDownVote(data)
                await upVote(data)
            }
        }

        const handleDownVote = async () => {
            if (!auth) {
                return
            }
            if (downVotesBy.includes(auth.id)) {
                await neutralizeDownVote(data)
            } else {
                await neutralizeUpVote(data)
                await downVote(data)
            }
        }
        return {
            handleUpVote, handleDownVote
        }
    }
    return { action, handler }
}
