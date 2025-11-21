import { useEffect, useState, useContext } from 'react';
import { Button, Modal } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';

import PageLayout from '../PageViews/PageLayout';
import TaskOverview from './TaskOverview';
import TaskGridView from '../PageViews/TaskGridView';
// import TaskListView from '../PageViews/TaskListView';
import TaskListContext from '../Context/TaskListContext';
import AddTask from '../Task/AddTask';

function TaskDashboard(props: any) {
    const { customerName } = props;
    const { taskList, setTaskList } = useContext(TaskListContext);

    const [totalTasks, setTotalTasks] = useState(0);
    const [tasksCompleted, setTasksCompleted] = useState(0);
    const [tasksRemaining, setTasksRemaining] = useState(0);

    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);

    function handleShow() {
        setFullscreen(true);
        setShow(true);
    }

    // const [isGrid, setIsGrid] = useState(true);
    // const [statsList, setStatsList] = useState([{}]);
    // const [tasksCompletedPct, setTasksCompletedPct] = useState(0);
    // const [tasksRemainingPct, setTasksRemainingPct] = useState(0);
    // const [tasksDueToday, setTasksDueToday] = useState(0);
    // const [tasksDueThisWeek, setTasksDueThisWeek] = useState(0);

    useEffect(() => {
        console.log(taskList);
        setTotalTasks(taskList.length);
        setTasksCompleted(taskList.filter(task => task.isTaskCompleted).length);
        setTasksRemaining(taskList.filter(task => !task.isTaskCompleted).length);
    }, [taskList]);

    const statsList = [
        {statName: "Total Tasks [Count]", statValue: totalTasks},
        {statName: "Tasks Completed [Count]", statValue: tasksCompleted},
        {statName: "Tasks Remaining [Count]", statValue: tasksRemaining},
        // {statName: "Tasks Completed [%]", statValue: tasksCompleted/totalTasks}, //reformat for integer only result
        // {statName: "Tasks Remaining [%]", statValue: tasksRemaining/totalTasks}, //reformat for integer only result
    ];

    return (
        <>
            <PageLayout>
                <TaskOverview username={customerName} statsList={statsList} />
                <h2 style={{margin: "40px 10px 20px 10px",}}>TASK LIST</h2>
                <Button variant='primary' id='addItem' size='lg' onClick={() => {}}>
                    Add New Task
                </Button>
                {/* <Button variant="Primary" id="gridView" size="lg" onClick={() => setIsGrid(true)} style={{margin: "10px 20px",}}>Click Here for Grid View</Button> */}
                {/* <Button variant="Secondary" id="listView" size="lg" onClick={() => setIsGrid(false)}>Click Here for List View</Button> */}
                {/* {isGrid ? <TaskGridView /> : <TaskListView taskList={taskList} />} */}
                <TaskGridView />
                <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Task Detail Page</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddTask />
                    </Modal.Body>
                </Modal>
            </PageLayout>
        </>
    )
}

export default TaskDashboard;
