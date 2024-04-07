import "../styles/app.css"

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import CommentList from '../components/comment/CommentList'
import { generateComment, generateUser } from '../utils/testUtils'

const comments = Array.from({ length: 10 }, () => generateComment())

const storeLogin = createStore(() => ({
    auth: generateUser(),
}))

const storeNotLogin = createStore(() => ({
    auth: null,
}))

export default {
    title: 'Components/comment/CommentList',
    component: CommentList,
}

const TemplateLogin = (args) => (
    <Provider store={storeLogin}>
        <CommentList {...args} />
    </Provider>
)

export const Authenticated = TemplateLogin.bind({})
Authenticated.args = {
    comments,
    threadId: 'thread123',
}


const TemplateNotLogin = (args) => (
    <Provider store={storeNotLogin}>
        <CommentList {...args} />
    </Provider>
)

export const NotAuthenticated = TemplateNotLogin.bind({})
NotAuthenticated.args = {
    comments,
    threadId: 'thread123',
}

export const Loading = TemplateLogin.bind({})
Loading.args = {
    comments,
    threadId: 'thread123',
    isLoading: true
}