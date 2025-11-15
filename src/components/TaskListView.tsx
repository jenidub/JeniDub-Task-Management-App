// import { useState } from 'react'

function TaskListView(props: any) {
  const { taskList } = props;

  return (
    <>
        {/* TODO: Add a border around each task listing */}
        {taskList.map((task: {id: number; taskTitle: string; taskDueDate: string; taskDescription: string; isTaskCompleted: boolean}) => {
          return (
              <div key={task.id.toString()} style={{display: "flex", borderRadius: "3px",}}>
                <h4>{task.id} | {task.taskTitle} | {task.taskDueDate}</h4>
                <p><strong>{task.taskDescription}</strong></p>
                <p>{task.isTaskCompleted ? "Task Completed" : "Task Not Yet Complete"}</p>
                {/* TODO: Add ability to toggle completed/not completed */}
              </div>
          )
        })}
    </>
  )
}

export default TaskListView;
