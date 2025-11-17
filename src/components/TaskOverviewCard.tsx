// import { useState } from 'react'

function TaskOverviewCard(props: any) {
  //deconstruct props like this
  const {id, statName, statValue} = props;

  return (
    <>
      <div key={id} style={{border: "1px dashed red", margin: "3px", width: "33%"}}>
        <img 
          src="https://static.vecteezy.com/system/resources/previews/025/638/355/non_2x/simple-task-icon-the-icon-can-be-used-for-websites-print-templates-presentation-templates-illustrations-etc-free-vector.jpg"
          alt="Task List Icon"
          style={{width: "20%", margin: "0 auto",}}
        />
        <h1 style={{margin: "0 auto",}}><strong>{statValue}</strong></h1>
        <p><em>{statName}</em></p>
      </div>
    </>
  )
}

export default TaskOverviewCard;
