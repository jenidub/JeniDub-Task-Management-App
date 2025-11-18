import { useState } from 'react';
import {Card, Form} from "react-bootstrap";

function TaskCard(props: any) {
  const {id, taskTitle, taskDueDate, taskDescription, isTaskCompleted} = props;
  const [isChecked, setIsChecked] = useState(isTaskCompleted);

  return (
    <>
      <Card style={{width: "33%", margin: "5px", border: "2px solid black",}}>
        <h4>{taskDueDate}</h4>
        <h3>{taskTitle}</h3>
        <p>{taskDescription}</p>
        <div>
          <Form>
            <Form.Check // prettier-ignore
              type="checkbox"
              id={`default-checkbox-${id}`}
              label={`Check When Completed:`}
              onClick={() => setIsChecked(!isChecked)}
            />
          </Form>
          <p><em>{isChecked ? "Task Completed" : "Task Not Completed"}</em></p>
        </div>
      </Card>
    </>
  )
}

export default TaskCard;
