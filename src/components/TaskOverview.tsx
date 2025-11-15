import TaskOverviewCard from "./TaskOverviewCard";

function TaskOverview(props: any) {
  const {username, statsList} = props;

  return (
    <>
        <h2>Welcome {username}! Here Is Your To Do List Overview for {Date.now()}</h2>
        <h4>Here is a snapshot of your to do list today:</h4>
          {statsList.map((stat: { statName: any; statValue: any; }) => {
            return(
              <TaskOverviewCard
                statName={stat.statName}
                statValue={stat.statValue}
              />
            )
          })}
    </>
  )
}

export default TaskOverview;
