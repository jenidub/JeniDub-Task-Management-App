import { useContext, useState } from 'react';
import { Card, Form, Modal } from "react-bootstrap";

import { Task } from '../Context/TaskListContext';
import TaskDetail from './TaskDetail';
import TaskListContext from '../Context/TaskListContext';

function TaskCard(props: any) {
    const { taskList, setTaskList } = useContext(TaskListContext);

    const { id, taskTitle, taskDueDate, taskDescription, isTaskCompleted } = props;
    const [ isChecked, setIsChecked ] = useState(isTaskCompleted);
    const [ show, setShow ] = useState(false);
    // const [ fullscreen, setFullscreen ] = useState(true);

    function handleShow() {
        setShow(true);
    }

    function handleDelete() {
        setTaskList(taskList.filter((task) => task.taskTitle != taskTitle));
    }

    function handleClose() {
        setShow(false);
    }

    const handleCheck = () => {
        console.log("checkbox clicked!");
        const updatedTaskList: Task[] = taskList;
        console.log("initial list: ", updatedTaskList);
        const selectedTask: Task = taskList.filter((task: Task) => task.taskTitle === taskTitle)[0];
        const selectedTaskIndex: number = taskList.findIndex((task: Task) => task.taskTitle === taskTitle);
        console.log("selectedTask info:  ", selectedTask, selectedTaskIndex);
        selectedTask.isTaskCompleted = !isChecked;
        updatedTaskList[selectedTaskIndex] = selectedTask;
        console.log("updated list: ", updatedTaskList);
        setTaskList([...updatedTaskList]);
    }

    return (
        <div>
            <Card style={{width: "90%", margin: "5px", padding: "5px", border: "2px solid black",}}>
                <Card.Body>
                    <p><em>{taskDueDate}</em></p>
                    <h3>{taskTitle}</h3>
                    <p>{taskDescription}</p>
                    <p><a onClick={handleShow}>Click Here to View/Edit Task</a></p>
                    <p><a onClick={handleDelete}>Click Here to Delete Task</a></p>
                    <div>
                        <Form>
                            <Form.Check
                                type="checkbox"
                                id={`default-checkbox-${id}`}
                                checked={isTaskCompleted}
                                onChange={handleCheck}
                                style={{display: "flex", justifyContent: "center"}}
                                label="Task Completed?"
                            />
                        </Form>
                    </div>
                </Card.Body>
            </Card>

            <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Task Detail Page</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    View and edit the details of the task below
                    <TaskDetail
                        taskList={taskList}
                        setTaskList={setTaskList}
                        handleClose={handleClose}
                        taskTitle={taskTitle} 
                        taskDueDate={taskDueDate}  
                        taskDescription={taskDescription} 
                        isTaskCompleted={isTaskCompleted}
                    />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default TaskCard;
