import { useState } from 'react'
import TaskOverview from './TaskOverview';
import TaskGridView from './TaskGridView';
import TaskListView from './TaskListView';

function TaskDashboard(props: any) {
  const { username } = props;

  const [totalTasks, setTotalTasks] = useState(0);
  const [tasksCompleted, setTasksCompleted] = useState(0);
  const [tasksRemaining, setTasksRemaining] = useState(0);
  // const [tasksDueToday, setTasksDueToday] = useState(0);
  // const [tasksDueThisWeek, setTasksDueThisWeek] = useState(0);
  const [isGrid, setIsGrid] = useState(true);

  const taskList = [
    {id: 1, taskTitle: "Finish the Task Management App", taskDueDate: "11-16-25", taskDescription: "Finish and Submit Coding Template FE Specialization Capstone 1", isTaskCompleted: false},
    {id: 2, taskTitle: "Review Project Requirements", taskDueDate: "11-17-25", taskDescription: "Go through all requirements and ensure nothing is missing.", isTaskCompleted: false},
    {id: 3, taskTitle: "Implement TaskCard Component", taskDueDate: "11-18-25", taskDescription: "Build and style the TaskCard component for displaying tasks.", isTaskCompleted: false},
    {id: 4, taskTitle: "Test Dashboard Functionality", taskDueDate: "11-19-25", taskDescription: "Test the dashboard to ensure all tasks display and update correctly.", isTaskCompleted: false}
  ]

  setTotalTasks(taskList.length);
  setTasksCompleted(taskList.filter(task => task.isTaskCompleted).length);
  setTasksRemaining(taskList.filter(task => !task.isTaskCompleted).length);
  //TODO: Format date to find tasks due today, this week stats

  const statsList = [
    {statName: "Total Tasks [Count]", statValue: totalTasks},
    {statName: "Tasks Completed [Count]", statValue: tasksCompleted},
    {statName: "Tasks Completed [%]", statValue: tasksCompleted/totalTasks}, //reformat for integer only result
    {statName: "Tasks Remaining [Count]", statValue: tasksRemaining},
    {statName: "Tasks Remaining [%]", statValue: tasksRemaining/totalTasks}, //reformat for integer only result
    // {statName: "Tasks Due Today", statValue: "##"},
    // {statName: "Tasks Due This Week", statValue: "##"}
  ]

  return (
    <>
      {/* <div id="sidebar-user-options">
        <a href="">Switch to List View</a>
      </div> */}
      <TaskOverview username={username} statsList={statsList} />
      {isGrid ? <TaskGridView /> : <TaskListView />}
    </>
  )
}

export default TaskDashboard;
