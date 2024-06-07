import React, {StrictMode} from "react"
import ReactDOM from "react-dom/client"
import App from "../pages/main/components/app/app";

import "../styles/style.scss";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);