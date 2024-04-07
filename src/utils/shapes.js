import PropTypes from 'prop-types'

export const NewThreadShape = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

export const UserShape = {
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    email: PropTypes.string,
    name: PropTypes.string.isRequired,
}

export const LeaderboardShape = {
    score: PropTypes.number.isRequired,
    user: PropTypes.shape(UserShape).isRequired
}

export const CommentShape = {
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    owner: PropTypes.shape(UserShape).isRequired,
    upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export const ThreadShape = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    ownerId: PropTypes.string,
    upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    totalComments: PropTypes.number,
    owner: PropTypes.shape(UserShape).isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape(CommentShape).isRequired)
}