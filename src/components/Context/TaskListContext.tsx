import React, { createContext }  from "react";

export interface Task {
    id: number
    taskTitle: string;
    taskDueDate: string;
    taskDescription: string;
    isTaskCompleted: boolean;
}

interface TaskListContextType {
    taskList: Task[]
    setTaskList: (tasks: Task[]) => void;
}

const TaskListContext = createContext<TaskListContextType>({
    taskList: [],
    setTaskList: () => {}
})

export default TaskListContext;
