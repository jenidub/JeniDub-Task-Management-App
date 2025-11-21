import { useContext, useState } from 'react';
import { Card, Form, Modal } from "react-bootstrap";
import TaskDetail from './TaskDetail';
import TaskListContext from '../Context/TaskListContext';

function TaskCard(props: any) {
    const { taskList, setTaskList } = useContext(TaskListContext);

    const {key, id, taskTitle, taskDueDate, taskDescription, isTaskCompleted} = props;
    const [isChecked, setIsChecked] = useState(props.isTaskCompleted);
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);

    function handleShow() {
        setFullscreen(true);
        setShow(true);
    }

    function handleDelete() {
        setTaskList(taskList.filter((task) => task.taskTitle != taskTitle));
    }

    return (
        <div>
            <Card style={{width: "90%", margin: "5px", border: "2px solid black",}}>
                {/* <p>{id}</p> */}
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
                        label={`Check When Completed:`}
                        onClick={() => setIsChecked(!isChecked)}
                        />
                    </Form>
                </div>
            </Card>
            <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Task Detail Page</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    View and edit the details of the task below
                    <TaskDetail 
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
