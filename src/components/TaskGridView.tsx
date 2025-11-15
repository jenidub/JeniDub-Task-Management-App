import { useState } from 'react'
import TaskCard from './TaskCard';

function TaskGridView(props: any) {
  const { taskList } = props;

  return (
    <>
        {/* TODO: Create a 3 card grid system for this view */}
        {taskList.map((task: {id: number; taskTitle: string; taskDueDate: string; taskDescription: string; isTaskCompleted: boolean}) => {
          return (
              <TaskCard 
                id={task.id}
                taskTitle={task.taskTitle}
                taskDueDate={task.taskDueDate}
                taskDescription={task.taskDescription}
                isTaskCompleted={task.isTaskCompleted} 
              />
          )
        })}  
    </>
  )
}

export default TaskGridView;
