import "./styles/app.css"

import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"

import App from "./App.jsx"
import store from "./states/index.js"
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
