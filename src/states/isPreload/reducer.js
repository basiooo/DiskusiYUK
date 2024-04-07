import { IsPreloadActionType } from "./action"

export const isPreloadReducer = (preload = true, action = {}) => {
    switch (action.type) {
        case IsPreloadActionType.SET:
            return action.payload.preload
        default:
            return preload
    }
}