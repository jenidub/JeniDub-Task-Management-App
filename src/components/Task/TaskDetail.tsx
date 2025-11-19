import { useState } from 'react';
import {Card, Form} from "react-bootstrap";

function TaskDetail(props: any) {
  const {id, taskTitle, taskDueDate, taskDescription, isTaskCompleted} = props;

  return (
    <>
      <Card style={{width: "33%", margin: "5px", border: "2px solid black",}}>
        <h3>{taskTitle}</h3>
        <h4>{taskDueDate}</h4>
        <p>{taskDescription}</p>
        <h4>{isTaskCompleted ? "Task completed" : "Task not yet completed"}</h4>
      </Card>
    </>
  )
}

export default TaskDetail;
