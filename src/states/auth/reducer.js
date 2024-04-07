import { AuthActionType } from "./action"

const authReducer = (auth = null, action = {}) => {
    switch (action.type) {
        case AuthActionType.SET:
            return action.payload.auth
        case AuthActionType.UNSET:
            return null
        default:
            return auth
    }
}

export default authReducer
