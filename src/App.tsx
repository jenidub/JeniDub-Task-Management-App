import React from "react";
import './App.css'
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/AuthLayer/LoginPage.tsx";
import CallbackPage from "./components/AuthLayer/CallbackPage.tsx";
import { useAuth0 } from "@auth0/auth0-react";
import TaskDashboard from "./components/Dashboard/TaskDashboard.tsx";
import ProfilePage from "./components/PageViews/ProfilePage.tsx";
import AuthenticationGuard from "./components/AuthLayer/AuthenticationGuard.tsx";

const App: React.FC = () => {
    const { isLoading } = useAuth0();

    if(isLoading) return (<div>Loading...</div>)

    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<AuthenticationGuard component={TaskDashboard} />} />
            <Route path="/profile" element={<AuthenticationGuard component={ProfilePage} />} />
            <Route path="/callback" element={<CallbackPage />} />
            {/* <Route path="/edit-task" element={<AuthenticationGuard component={TaskEdit} />} /> */}
            {/* <Route path="/task-detail" element={<AuthenticationGuard component={TaskDetail} />} /> */}
        </Routes>
    )
}

export default App
