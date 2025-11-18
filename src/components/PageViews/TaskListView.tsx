import { useState } from 'react'
import TaskListItem from './TaskListItem';

function TaskListView(props: any) {
  const { taskList } = props;
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
        {/* TODO: Add a border around each task listing */}
        {taskList.map((task: {id: number; taskTitle: string; taskDueDate: string; taskDescription: string; isTaskCompleted: boolean}) => {
          return (
            <TaskListItem 
                key={task.id}
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

export default TaskListView;
