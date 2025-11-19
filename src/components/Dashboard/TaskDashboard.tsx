import { useEffect, useState, useContext } from 'react';
import { Button } from "react-bootstrap";

import PageLayout from '../PageViews/PageLayout';
import TaskOverview from './TaskOverview';
import TaskGridView from '../PageViews/TaskGridView';
import TaskListView from '../PageViews/TaskListView';
import TaskListContext from '../Context/TaskListContext';

function TaskDashboard(props: any) {
    const { customerName } = props;
    const { taskList, setTaskList } = useContext(TaskListContext);

    const [totalTasks, setTotalTasks] = useState(0);
    const [tasksCompleted, setTasksCompleted] = useState(0);
    const [tasksRemaining, setTasksRemaining] = useState(0);
    const [isGrid, setIsGrid] = useState(true);

    // const [statsList, setStatsList] = useState([{}]);
    // const [tasksCompletedPct, setTasksCompletedPct] = useState(0);
    // const [tasksRemainingPct, setTasksRemainingPct] = useState(0);
    // const [tasksDueToday, setTasksDueToday] = useState(0);
    // const [tasksDueThisWeek, setTasksDueThisWeek] = useState(0);

    useEffect(() => {
        setTotalTasks(taskList.length);
        setTasksCompleted(taskList.filter(task => task.isTaskCompleted).length);
        setTasksRemaining(taskList.filter(task => !task.isTaskCompleted).length);
    }, []);

    const statsList = [
        {statName: "Total Tasks [Count]", statValue: totalTasks},
        {statName: "Tasks Completed [Count]", statValue: tasksCompleted},
        // {statName: "Tasks Completed [%]", statValue: tasksCompleted/totalTasks}, //reformat for integer only result
        {statName: "Tasks Remaining [Count]", statValue: tasksRemaining},
        // {statName: "Tasks Remaining [%]", statValue: tasksRemaining/totalTasks}, //reformat for integer only result
    ];

    return (
        <>
            <PageLayout>
                <TaskOverview username={customerName} statsList={statsList} />
                <h2 style={{margin: "20px 10px 10px 10px",}}>TASK LIST</h2>
                <Button variant="Primary" id="gridView" size="lg" onClick={() => setIsGrid(true)} style={{margin: "10px 20px",}}>Click Here for Grid View</Button>
                <Button variant="Secondary" id="listView" size="lg" onClick={() => setIsGrid(false)}>Click Here for List View</Button>
                {isGrid ? <TaskGridView taskList={taskList} /> : <TaskListView taskList={taskList} />}
            </PageLayout>
        </>
    )
}

export default TaskDashboard;
