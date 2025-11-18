// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.js'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// import "./index.css";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithNav from "./components/AuthLayer/Auth0Provider";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <BrowserRouter>
        <Auth0ProviderWithNav>
            <App />
        </Auth0ProviderWithNav>
    </BrowserRouter>
);
