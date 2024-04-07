import "../styles/app.css"

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import LeaderboardList from "../components/leaderboard/LeaderboardList"
import { generateLeaderboard } from '../utils/testUtils'

const leaderboards = Array.from({ length: 10 }, () => generateLeaderboard())
const storeLogin = createStore(() => ({
}))

export default {
    title: 'Components/leaderboard/LeaderboardList',
    component: LeaderboardList,
}

const Template = (args) => (
    <Provider store={storeLogin}>
        <LeaderboardList {...args} />
    </Provider>
)

export const Default = Template.bind({})
Default.args = {
    leaderboards,
}



export const Loading = Template.bind({})
Loading.args = {
    leaderboards: {},
    isLoading: true
}