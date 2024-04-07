import "../styles/app.css"

import { action } from '@storybook/addon-actions'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import CommentItem from '../components/comment/CommentItem'
import { generateComment, generateUser } from '../utils/testUtils'

const comment = generateComment()

const upVote = action('upVote')
const neutralizeUpVote = action('neutralizeUpVote')
const downVote = action('downVote')
const neutralizeDownVote = action('neutralizeDownVote')

const storeLogin = createStore(() => ({
    auth: generateUser(),
}))

const storeNotLogin = createStore(() => ({
    auth: null,
}))

export default {
    title: 'Components/comment/CommentItem',
    component: CommentItem,
    argTypes: {
        upVote: { action: 'upVote' },
        neutralizeUpVote: { action: 'neutralizeUpVote' },
        downVote: { action: 'downVote' },
        neutralizeDownVote: { action: 'neutralizeDownVote' },
    },
}

const TemplateLogin = (args) => (
    <Provider store={storeLogin}>
        <CommentItem {...args} />
    </Provider>
)

export const Authenticated = TemplateLogin.bind({})
Authenticated.args = {
    comment,
    threadId: 'thread123',
    upVote,
    neutralizeUpVote,
    downVote,
    neutralizeDownVote,
}


const TemplateNotLogin = (args) => (
    <Provider store={storeNotLogin}>
        <CommentItem {...args} />
    </Provider>
)

export const NotAuthenticated = TemplateNotLogin.bind({})
NotAuthenticated.args = {
    comment,
    threadId: 'thread123',
    upVote: action('upVote'),
    neutralizeUpVote: action('neutralizeUpVote'),
    downVote: action('downVote'),
    neutralizeDownVote: action('neutralizeDownVote'),
}