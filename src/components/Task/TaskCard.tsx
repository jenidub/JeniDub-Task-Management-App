import { useState } from 'react';
import { Col, Card, Nav, Form, Modal } from "react-bootstrap";
import TaskDetail from './TaskDetail';

function TaskCard(props: any) {
    const {key, id, taskTitle, taskDueDate, taskDescription, isTaskCompleted} = props;
    const [isChecked, setIsChecked] = useState(props.isTaskCompleted);
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);

    function handleShow() {
        setFullscreen(true);
        setShow(true);
    }

    return (
        <div>
            <Card style={{width: "90%", margin: "5px", border: "2px solid black",}}>
                <p>{id}</p>
                <p><em>{taskDueDate}</em></p>
                <h3>{taskTitle}</h3>
                <p>{taskDescription}</p>
                <p><a onClick={handleShow}>Click Here to View/Edit Task</a></p>
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
                        id={id} 
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
