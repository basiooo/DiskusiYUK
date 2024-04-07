import "../styles/app.css"

import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { createStore } from "redux"

import Header from "../components/header/Header"
import { generateUser } from "../utils/testUtils"

const storeLogin = createStore(() => ({
    auth: generateUser(),
}))

const storeNotLogin = createStore(() => ({
    auth: null,
}))
export default {
    title: "Components/header/Header",
    component: Header,
}
const TemplateLogin = (args) => (
    <Provider store={storeLogin}>
        <BrowserRouter>
            <Header {...args} />
        </BrowserRouter>{" "}
    </Provider>
)

export const Authenticated = TemplateLogin.bind({})

const TemplateNotLogin = (args) => (
    <Provider store={storeNotLogin}>
        <BrowserRouter>
            <Header {...args} />
        </BrowserRouter>
    </Provider>
)

export const NotAuthenticated = TemplateNotLogin.bind({})
