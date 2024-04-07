import LeaderboardList from "../components/leaderboard/LeaderboardList"
import useLeaderboardPage from "../hooks/useLeaderboardPage"

const LeaderboardPage = () => {
    const { isLoadData, leaderboard } = useLeaderboardPage()
    return (
        <div className="container mx-auto my-5">
            <LeaderboardList leaderboards={leaderboard} isLoading={isLoadData} />
        </div>
    )
}

export default LeaderboardPage