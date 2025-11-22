import { useState, useEffect, useContext } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Task } from "../Context/TaskListContext";
import TaskListContext from "../Context/TaskListContext";

function TaskDetail(props: any) {
    const { taskList, setTaskList } = useContext(TaskListContext);
    const { handleClose, id, taskTitle, taskDueDate, taskDescription, isTaskCompleted} = props;
    
    const [currentTaskTitle, setCurrentTaskTitle] = useState(taskTitle);
    const [currentTaskDueDate, setCurrentTaskDueDate] = useState(taskDueDate);
    const [currentTaskDescription, setCurrentTaskDescription] = useState(taskDescription);

    const handleUpdate = (e: any) => {
        e.preventDefault();
        const updatedTaskList: Task[] = taskList;

        const selectedTask: Task = taskList.filter((task: Task) => task.taskTitle === taskTitle)[0];
        const selectedTaskIndex: number = taskList.findIndex((task: Task) => task.taskTitle === taskTitle);
        selectedTask.taskTitle = currentTaskTitle;
        selectedTask.taskDueDate = currentTaskDueDate;
        selectedTask.taskDescription = currentTaskDescription;
        updatedTaskList[selectedTaskIndex] = selectedTask;

        setTaskList([...updatedTaskList]);
    }

    return (
        <div>
            <Card style={{margin: "5px",}}>
                <h3>{taskTitle}</h3>
                <h4>{taskDueDate}</h4>
                <p>{taskDescription}</p>
                <h4>{isTaskCompleted ? "Task completed" : "Task not yet completed"}</h4>
            </Card>
            <br />
            <h2>Use the form below to update any task information</h2>
            <br />
            <Form onSubmit={handleUpdate}>
                <Form.Group className='' controlId=''>
                    <Form.Label>Task Name: </Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Name of the task'
                        value={currentTaskTitle}
                        onChange={(e) => setCurrentTaskTitle(e.target.value)} 
                    />
                    <Form.Text className=''>Enter the name for your task</Form.Text>
                </Form.Group>
                <Form.Group className='' controlId=''>
                    <Form.Label>Task Due Date:  </Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Due date for the task'
                        value={currentTaskDueDate}
                        onChange={(e) => setCurrentTaskDueDate(e.target.value)} 
                    />
                    <Form.Text className=''>Enter the due date for your task</Form.Text>
                </Form.Group>
                <Form.Group className='' controlId="">
                    <Form.Label>Task Description:  </Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Describe your task' 
                        value={currentTaskDescription} 
                        onChange={(e) => setCurrentTaskDescription(e.target.value)} 
                    />
                    <Form.Text className=''>Describe your task</Form.Text>
                </Form.Group>
                <br />
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            <Button variant="secondary" type="button" onClick={handleClose}>Close Window</Button>
        </div>
    )
}

export default TaskDetail;
