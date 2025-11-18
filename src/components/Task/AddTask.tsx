import { useState, useContext } from 'react';
import { Form, Button } from "react-bootstrap";
import TaskListContext from '../Context/TaskListContext';

function AddTask(props: any) {
    const { taskList, setTaskList } = useContext(TaskListContext);

    const [taskId, setTaskId] = useState(taskList.length + 1);
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDueDate, setTaskDueDate] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [isTaskCompleted, setIsTaskCompleted] = useState(false);

    const updateTaskList = (e: any) => {
        e.preventDefault();
        console.log(taskList);
        console.log(taskId, taskTitle, taskDueDate, taskDescription, isTaskCompleted);
        setTaskList([...taskList, {id: taskId, taskTitle: taskTitle, taskDueDate: taskDueDate, taskDescription: taskDescription, isTaskCompleted: false}]);
        setTaskTitle("");
        setTaskDueDate("");
        setTaskDescription("");
        setTaskId(taskList.length + 1);
    }

// id: 1, 
// taskTitle: "Finish the Task Management App", 
// taskDueDate: "11-16-25", 
// taskDescription: "Finish and Submit CT FE Capstone 1", 
// isTaskCompleted: false

    return (
        <Form onSubmit={updateTaskList}>
            <Form.Group className='' controlId=''>
                <Form.Label>Task Name: </Form.Label>
                <Form.Control type='text' placeholder='Name of the task' value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
                <Form.Text className=''>Enter the name for your task</Form.Text>
            </Form.Group>
            <Form.Group className='' controlId=''>
                <Form.Label>Task Due Date:  </Form.Label>
                <Form.Control type='text' placeholder='Due date for the task' value={taskDueDate} onChange={(e) => setTaskDueDate(e.target.value)} />
                <Form.Text className=''>Enter the due date for your task</Form.Text>
            </Form.Group>
            <Form.Group className='' controlId="">
                <Form.Label>Task Description:  </Form.Label>
                <Form.Control type='text' placeholder='Describe your task' value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
                <Form.Text className=''>Describe your task</Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    )
}

export default AddTask;
