import TaskOverviewCard from "./TaskOverviewCard";

function TaskOverview(props: any) {
  const {username, statsList} = props;

  return (
    <>
      <h3>Welcome {username}!</h3>
      <h3><em>Here is a snapshot of your to do list today:</em></h3>
      <div style={{display: "flex", margin: "0 auto",}}>
        {statsList.map((stat: { id: number; statName: string; statValue: number; }) => {
          return(
            <TaskOverviewCard
              key={stat.id}
              statName={stat.statName}
              statValue={stat.statValue}
            />
          )
        })}
      </div>

    </>
  )
}

export default TaskOverview;
