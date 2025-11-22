import { useEffect, useState, useContext } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import PageLayout from '../PageViews/PageLayout';
import TaskOverview from './TaskOverview';
import TaskGridView from '../PageViews/TaskGridView';
import TaskListContext from '../Context/TaskListContext';

function TaskDashboard() {
    const {user} = useAuth0();
    const { taskList, setTaskList } = useContext(TaskListContext);

    const [totalTasks, setTotalTasks] = useState(0);
    const [tasksCompleted, setTasksCompleted] = useState(0);
    const [tasksRemaining, setTasksRemaining] = useState(0);

    useEffect(() => {
        console.log("updated task list:  ", taskList);
        setTotalTasks(taskList.length);
        setTasksCompleted(taskList.filter(task => task.isTaskCompleted).length);
        setTasksRemaining(taskList.filter(task => !task.isTaskCompleted).length);
    }, [taskList]);

    const statsList = [
        {id: 0, statName: "Total Tasks [Count]", statValue: totalTasks},
        {id: 1, statName: "Tasks Completed [Count]", statValue: tasksCompleted},
        {id: 2, statName: "Tasks Remaining [Count]", statValue: tasksRemaining}
    ];

    return (
        <>
            <PageLayout>
                <TaskOverview username={user?.name} statsList={statsList} />
                <TaskGridView />
            </PageLayout>
        </>
    )
}

export default TaskDashboard;
