import TaskOverviewCard from "./TaskOverviewCard";

function TaskOverview(props: any) {
  const {username, statsList} = props;

  return (
    <>
      <h2 style={{margin: "20px 10px 10px 10px",}}>WELCOME {username}!</h2>
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
