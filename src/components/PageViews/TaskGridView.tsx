import { Container, Col, Row, Button, Modal } from 'react-bootstrap';
import { useState, useContext } from 'react';

import { Task } from '../Context/TaskListContext';
import TaskCard from '../Task/TaskCard';
import TaskListContext from '../Context/TaskListContext';
import AddTask from '../Task/AddTask';

function TaskGridView() {
    const { taskList } = useContext(TaskListContext);
    const GRID_SIZE = 3;

    const taskListGrid = [];
    for (let i = 0; i < taskList.length; i+= GRID_SIZE) {
        taskListGrid.push(taskList.slice(i, i + GRID_SIZE))
    }

    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);

    function handleShow() {
        setFullscreen(true);
        setShow(true);
    }

    return (
        <>
            <Container style={{textAlign: "center",}}>
                <h2 style={{margin: "30px 0px 10px 0px", textTransform: "uppercase", textAlign: "center", color: "#35D7F6", fontWeight: "800"}}>TASK LIST</h2>
                <Button variant="primary" id="addItem" size="lg" onClick={handleShow} style={{margin: "5px 0px"}}>
                    Add New Task
                </Button>              
                {taskListGrid.map((rowItems: Task[], rowIndex: number) => (
                    <Row key={rowIndex} style={{margin: "20px 0px"}}>
                        {rowItems.map((task: Task, itemIndex: number) => (
                            <Col md={4}>
                                <TaskCard 
                                    key={itemIndex}
                                    taskTitle={task.taskTitle}
                                    taskDueDate={task.taskDueDate}
                                    taskDescription={task.taskDescription}
                                    isTaskCompleted={task.isTaskCompleted} 
                                />
                            </Col>

                        ))}
                    </Row>
                ))}  
            </Container>

            <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
                <Modal.Body>
                    <AddTask />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default TaskGridView;
