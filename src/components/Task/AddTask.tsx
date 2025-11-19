import { useState, useContext, useEffect } from 'react';
import { Form, Button } from "react-bootstrap";
import TaskListContext, {Task} from '../Context/TaskListContext';
import PageLayout from '../PageViews/PageLayout';

function AddTask() {
    const { taskList, setTaskList } = useContext(TaskListContext);

    const [taskId, setTaskId] = useState(taskList.length + 1);
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDueDate, setTaskDueDate] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [isTaskCompleted] = useState(false);

    const updateTaskList = (e: any) => {
        e.preventDefault();
        console.log(taskList);
        console.log(taskId, taskTitle, taskDueDate, taskDescription, isTaskCompleted);

        const newTask: Task = {
            id: taskId, 
            taskTitle: taskTitle, 
            taskDueDate: taskDueDate,
            taskDescription: taskDescription,
            isTaskCompleted: false
        }

        setTaskList([...taskList, newTask]);
        setTaskTitle("");
        setTaskDueDate("");
        setTaskDescription("");
        setTaskId(taskList.length + 1);
    }

    return (
        <PageLayout>
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
            <Button variant="secondary" href='/dashboard'>Return to Dashboard</Button>
        </PageLayout>
    )
}

export default AddTask;
