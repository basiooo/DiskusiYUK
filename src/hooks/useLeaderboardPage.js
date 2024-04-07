import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { leaderboardThunks } from "../states/leaderboard/action"

const useLeaderboardPage = () => {
    const [isLoadData, setIsLoadData] = useState(true)
    const dispatch = useDispatch()

    const leaderboard = useSelector((states) => states.leaderboard)

    useEffect(() => {
        (
            async () => {
                if (isLoadData) {
                    await dispatch(leaderboardThunks.asyncSetLeaderboard())
                }
                setIsLoadData(false)
            }
        )()
    }, [dispatch, isLoadData])
    return {
        leaderboard,
        isLoadData
    }
}

export default useLeaderboardPage