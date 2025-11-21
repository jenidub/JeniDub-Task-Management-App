import { Container, Col, Row } from 'react-bootstrap';
import { useContext } from 'react';

import { Task } from '../Context/TaskListContext';
import TaskCard from '../Task/TaskCard';
import TaskListContext from '../Context/TaskListContext';

function TaskGridView() {
    const { taskList } = useContext(TaskListContext);
    const GRID_SIZE = 3;

    const taskListGrid = [];
    for (let i = 0; i < taskList.length; i+= GRID_SIZE) {
        taskListGrid.push(taskList.slice(i, i + GRID_SIZE))
    }

    return (
        <Container>
            {taskListGrid.map((rowItems: Task[], rowIndex: number) => (
                <Row key={rowIndex}>
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
    )
}

export default TaskGridView;
