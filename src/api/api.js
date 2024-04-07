import { config } from "../config"
import { tokenHandler } from "../utils/accessToken"

const api = {
    baseUrl: config.BASE_API_URL,

    _fetch: async (url, options = {}) => {
        const token = tokenHandler.get()
        return fetch(url, {
            ...options,
            headers: {
                ...options.headers,
                Authorization: `Bearer ${(token)}`,
            },
        })
    },

    _handleResponse: async (response) => {
        const responseJson = await response.json()

        const { status, message } = responseJson

        if (status !== "success") {
            throw new Error(message)
        }

        return responseJson.data
    },

    get: async (url, options = {}) => {
        const response = await api._fetch(`${api.baseUrl}/${url}`, options)
        const responseData = await api._handleResponse(response)
        return responseData
    },

    post: async (url, body, options = {}) => {
        const response = await api._fetch(`${api.baseUrl}/${url}`, {
            ...options,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...options.headers,
            },
            body: JSON.stringify(body),
        })
        const responseData = await api._handleResponse(response)
        return responseData
    },

    put: async (url, body, options = {}) => {
        return api._fetch(`${api.baseUrl}/${url}`, {
            ...options,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                ...options.headers,
            },
            body: JSON.stringify(body),
        })
    },

    delete: async (url, options = {}) => {
        return api._fetch(`${api.baseUrl}/${url}`, {
            ...options,
            method: "DELETE",
        })
    },
}

const makeResponseFailed = ({
    status = "failed",
    message = "",
    data = null,
}) => {
    return { status, message, data }
}
export { api, makeResponseFailed }
