import { useState, useContext, useEffect } from 'react';
import { Form, Button } from "react-bootstrap";
import TaskListContext, {Task} from '../Context/TaskListContext';
import PageLayout from '../PageViews/PageLayout';
import { TaskForm } from './TaskTypes';

function AddTask() {
    const { taskList, setTaskList } = useContext(TaskListContext);

    const [ formData, setFormData ] = useState<TaskForm>({
            taskTitle: "", 
            taskDueDate: "",
            taskDescription: "",
            isTaskCompleted: false
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateData = (formData: TaskForm): Record<string, string> => {
        const errors: Record <string, string> = {};
        if (!formData.taskTitle) {
            errors.taskTitle = "Task title is required"
        }
        if (!formData.taskDueDate) {
            errors.taskDueDate = "Task due date is required"
        }
        if (!formData.taskDescription) {
            errors.taskDescription = "Task description is required"
        }
        return errors;
    }

    const updateTaskList = (e: any) => {
        e.preventDefault();
        const validationErrors = validateData(formData);

        if(Object.keys(validationErrors).length === 0) {
            setTaskList([...taskList, formData]);
            setFormData({
                taskTitle: "", 
                taskDueDate: "",
                taskDescription: "",
                isTaskCompleted: false
            });
        } else {
            setErrors(validationErrors);
        }

    }

    return (
        <>
            <PageLayout>
                <h2 style={{textTransform: "uppercase", marginTop: "90px",}}><strong>Add A Task</strong></h2>
                <Form onSubmit={updateTaskList}>
                    <Form.Group className='my-2' controlId=''>
                        <Form.Label>Task Name:</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Name of the task'
                            value={formData.taskTitle}
                            onChange={(e) => setFormData(prev => ({...prev, taskTitle: e.target.value}))}
                            isInvalid={!!errors.taskTitle}
                        />
                        <Form.Text className=''>Enter the name for your task</Form.Text>
                        <Form.Control.Feedback type="invalid">
                            Invalid Task Title - please try again
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='my-2' controlId=''>
                        <Form.Label>Task Due Date:  </Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Due date for the task'
                            value={formData.taskDueDate}
                            onChange={(e) => setFormData(prev => ({...prev, taskDueDate: e.target.value}))}
                            isInvalid={!!errors.taskDueDate}
                        />
                        <Form.Text className=''>Enter the due date for your task</Form.Text>
                        <Form.Control.Feedback type="invalid">
                            Invalid Task Due Date - please try again
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='my-2' controlId="">
                        <Form.Label>Task Description:  </Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Describe your task'
                            value={formData.taskDescription}
                            onChange={(e) => setFormData(prev => ({...prev, taskDescription: e.target.value}))}
                            isInvalid={!!errors.taskDescription}
                        />
                        <Form.Text className=''>Describe your task</Form.Text>
                        <Form.Control.Feedback type="invalid">
                            Invalid Task Description - please try again
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submit" className='my-2'>Submit</Button>
                </Form>
                <Button variant="secondary" href='/dashboard' className='my-2'>Return to Dashboard</Button>
            </PageLayout>
        </>
    )
}

export default AddTask;
