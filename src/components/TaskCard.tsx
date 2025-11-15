import { useState } from 'react'

function TaskCard(props: any) {
  //deconstruct props like this
  const {id, taskTitle, taskDueDate, taskDescription, isTaskCompleted} = props;

  return (
    <>
      <div id={id.toString()}>
        <h3>{taskTitle}</h3>
        <h4>{taskDueDate}</h4>
        <p>{taskDescription}</p>
        <div>
          <p>Check when completed:</p>
          <input
            type="checkbox"
            checked={true}
            // onClick={() => setIsCompleted(!isCompleted)}
          >
            Completed?
          </input>
          <p><em>{isTaskCompleted ? "Task Completed" : "Task Not Completed"}</em></p>
        </div>
      </div>
    </>
  )
}

export default TaskCard;
