import "../styles/app.css"

import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom"
import { createStore } from 'redux'

import CategoryList from "../components/category/CategoryList"
import { generateThread } from '../utils/testUtils'

const threads = Array.from({ length: 10 }, () => generateThread())
const store = createStore(() => ({
    threads
}))

export default {
    title: 'Components/category/CategoryList',
    component: CategoryList,
}

const Template = (args) => (
    <Provider store={store}>
        <BrowserRouter>

            <CategoryList {...args} />
        </BrowserRouter>
    </Provider>
)

export const Default = Template.bind({})


export const Loading = Template.bind({})
Loading.args = {
    isLoading: true
}