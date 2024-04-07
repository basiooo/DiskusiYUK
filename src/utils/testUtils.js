import { faker } from '@faker-js/faker'

export const generateUser = ({ excludes = [] } = {}) => {
    const result = {
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar()
    }
    excludes.forEach(key => delete result[key])
    return result
}

export const generateLeaderboard = () => {
    return {
        score: Math.floor(Math.random() * 1000) + 1,
        user: generateUser()
    }
}

export const generateComment = ({ upVotesBy = [], downVotesBy = [] } = {}) => {
    return {
        id: faker.string.uuid(),
        content: faker.lorem.paragraphs(2),
        createdAt: faker.date.past(),
        owner: generateUser({ excludes: ["email"] }),
        upVotesBy,
        downVotesBy
    }
}
export const generateThread = ({ excludes = [], upVotesBy = [], downVotesBy = [], commentsCount = 0 } = {}) => {
    const result = {
        id: faker.string.uuid(),
        title: faker.lorem.sentence(),
        body: faker.lorem.paragraphs(4),
        category: faker.lorem.word(),
        createdAt: faker.date.past(),
        ownerId: faker.string.uuid(),
        owner: generateUser({ excludes: ["email"] }),
        upVotesBy,
        downVotesBy,
        comments: Array.from({ length: commentsCount }, () => generateComment()),
        totalComments: Math.floor(Math.random() * 10) + 1,
    }
    excludes.forEach(key => delete result[key])
    return result
}
