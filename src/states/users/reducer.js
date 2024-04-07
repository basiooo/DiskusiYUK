import { UsersActionType } from "./action"

export const usersReducer = (users = null, action = {}) => {
    switch (action.type) {
        case UsersActionType.SET:
            return action.payload.users
        default:
            return users
    }
}