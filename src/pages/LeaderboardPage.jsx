import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import LeaderboardList from "../components/leaderboard/LeaderboardList"
import { leaderboardThunks } from "../states/leaderboard/action"

const LeaderboardPage = () => {
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

    return (
        <div className="container mx-auto my-5">
            <LeaderboardList leaderboard={leaderboard} isLoading={isLoadData} />
        </div>
    )
}

export default LeaderboardPage