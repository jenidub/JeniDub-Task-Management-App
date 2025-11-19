import React, { useEffect } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useAuth0 } from "@auth0/auth0-react";

import LoginPage from "./components/AuthLayer/LoginPage.tsx";
import CallbackPage from "./components/AuthLayer/CallbackPage.tsx";
import TaskDashboard from "./components/Dashboard/TaskDashboard.tsx";
import ProfilePage from "./components/PageViews/ProfilePage.tsx";
import AuthenticationGuard from "./components/AuthLayer/AuthenticationGuard.tsx";
import AddTask from "./components/Task/AddTask.tsx";
import TaskListContext from "./components/Context/TaskListContext.tsx";
import { Task } from "./components/Context/TaskListContext.tsx";
import TaskDetail from "./components/Task/TaskDetail.tsx";

function App() {
    const { isLoading } = useAuth0();
    const [ taskList, setTaskList ] = useState(() => {
        const savedTasks = localStorage.getItem('taskList');
        if (savedTasks) {
            return JSON.parse(savedTasks)
        }

        return [
            {id: 1, taskTitle: "Finish the Task Management App", taskDueDate: "11-16-25", taskDescription: "Finish and Submit CT FE Capstone 1", isTaskCompleted: false},
            {id: 2, taskTitle: "Review Project Requirements", taskDueDate: "11-17-25", taskDescription: "Go through all requirements and ensure nothing is missing.", isTaskCompleted: true},
            {id: 3, taskTitle: "Implement TaskCard Component", taskDueDate: "11-18-25", taskDescription: "Build and style the TaskCard component for displaying tasks.", isTaskCompleted: true},
            {id: 4, taskTitle: "Test Dashboard Functionality", taskDueDate: "11-19-25", taskDescription: "Test the dashboard to ensure all tasks display and update correctly.", isTaskCompleted: false}
        ];
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
                <Route path="/addTask" element={<AuthenticationGuard component={AddTask} />} />
                <Route path="/task-detail" element={<AuthenticationGuard component={TaskDetail} />} />
                <Route path="/callback" element={<CallbackPage />} />
                {/* <Route path="/edit-task" element={<AuthenticationGuard component={TaskEdit} />} /> */}
            </Routes>
        </TaskListContext.Provider>
    )
}

export default App
