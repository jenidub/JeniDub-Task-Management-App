import { useState } from 'react';
import {Form} from "react-bootstrap";

function TaskListItem(props: any) {
  const {id, taskTitle, taskDueDate, taskDescription, isTaskCompleted} = props;
  const [isChecked, setIsChecked] = useState(isTaskCompleted);

  return (
    <>
      <div key={id.toString()} style={{textAlign: "left", border: "1px black solid", margin: "10px 5px", padding: "5px",}}>
        <h4>{id} | {taskTitle} | {taskDueDate}</h4>
        <p><em>{taskDescription}</em></p>
        <Form>
          <Form.Check // prettier-ignore
            type="checkbox"
            id={`default-checkbox-${id}`}
            label={`Check When Completed:`}
            checked={isChecked}
            onClick={() => setIsChecked(!isChecked)}
          />
        </Form>
        <p>{isChecked ? "Task Completed" : "Task Not Yet Complete"}</p>
      </div>
    </>
  )
}

export default TaskListItem;
