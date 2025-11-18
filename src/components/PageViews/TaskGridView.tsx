import TaskCard from '../Task/TaskCard';

function TaskGridView(props: any) {
  const { taskList } = props;

  return (
    <>
      {/* TODO: Create a 3 card grid system for this view */}
      <div style={{display: "flex"}}>
        {taskList.map((task: {id: number; taskTitle: string; taskDueDate: string; taskDescription: string; isTaskCompleted: boolean}) => {
          return (
              <TaskCard 
                key={task.id}
                id={task.id}
                taskTitle={task.taskTitle}
                taskDueDate={task.taskDueDate}
                taskDescription={task.taskDescription}
                isTaskCompleted={task.isTaskCompleted} 
              />
          )
        })}  
      </div>
    </>
  )
}

export default TaskGridView;
