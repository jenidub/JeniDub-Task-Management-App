import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

import LoginPage from "./components/AuthLayer/LoginPage.tsx";
import CallbackPage from "./components/AuthLayer/CallbackPage.tsx";
import TaskDashboard from "./components/Dashboard/TaskDashboard.tsx";
import ProfilePage from "./components/PageViews/ProfilePage.tsx";
import AuthenticationGuard from "./components/AuthLayer/AuthenticationGuard.tsx";
import TaskListContext from "./components/Context/TaskListContext.tsx";

function App() {
    const { isLoading } = useAuth0();

    const [ taskList, setTaskList ] = useState(() => {
        const savedTasks = localStorage.getItem('taskList');
        if (savedTasks) {
            return JSON.parse(savedTasks)
        }
    });

    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(taskList));
    }, [taskList]);

    if (isLoading) return (<div>Loading...</div>)

    return (
        <TaskListContext.Provider value={{ taskList, setTaskList }}>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/dashboard" element={<AuthenticationGuard component={TaskDashboard} />} />
                <Route path="/profile" element={<AuthenticationGuard component={ProfilePage} />} />
                <Route path="/callback" element={<CallbackPage />} />
            </Routes>
        </TaskListContext.Provider>
    )
}

export default App;
