import { useState, useEffect, useContext } from "react";
import { Card, Form, Button } from "react-bootstrap";
import TaskListContext, { Task } from "../Context/TaskListContext";
import PageLayout from "../PageViews/PageLayout"; 

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
        <PageLayout>
            <h4 className='mb-4' style={{textTransform: "uppercase", textAlign: "center",}}>Selected Task</h4>
            <Card className='mt-2 mb-4' style={{margin: "5px", textAlign: "center", padding: "10px"}}>
                <p style={{fontSize: "1.25em", fontWeight: "800"}}>{taskTitle}</p>
                <p style={{fontSize: "1.1em"}}>{taskDueDate}</p>
                <p style={{fontSize: "1.1em"}}>{taskDescription}</p>
                <p style={{fontSize: "1.1em"}}>{isTaskCompleted ? "Task completed" : "Task not yet completed"}</p>
            </Card>
            <h5 className='my-2' style={{}}>Edit the Selected Task</h5>
            <Form className='my-2' onSubmit={handleUpdate}>
                <Form.Text>Use the form below to edit the task information. Once you are done, click the Submit button to save and return to the Dashboard</Form.Text>
                <Form.Group className='my-3' controlId=''>
                    <Form.Label>Task Name: </Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Name of the task'
                        value={currentTaskTitle}
                        onChange={(e) => setCurrentTaskTitle(e.target.value)} 
                    />
                    <Form.Text className=''>Edit the name for your task</Form.Text>
                </Form.Group>
                <Form.Group className='my-3' controlId=''>
                    <Form.Label>Task Due Date:  </Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Due date for the task'
                        value={currentTaskDueDate}
                        onChange={(e) => setCurrentTaskDueDate(e.target.value)} 
                    />
                    <Form.Text className=''>Edit the due date for your task</Form.Text>
                </Form.Group>
                <Form.Group className='my-3' controlId="">
                    <Form.Label>Task Description:  </Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Describe your task' 
                        value={currentTaskDescription} 
                        onChange={(e) => setCurrentTaskDescription(e.target.value)} 
                    />
                    <Form.Text className=''>Edit your task</Form.Text>
                </Form.Group>
                <Button className='mt-3' variant="primary" type="submit">Submit</Button>
            </Form>
            <Button variant="secondary" type="button" onClick={handleClose}>Close Window</Button>
        </PageLayout>
    )
}

export default TaskDetail;
