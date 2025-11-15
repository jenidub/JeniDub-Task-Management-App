import { useState } from 'react'
import './App.css'
import TaskDashboard from './components/TaskDashboard.tsx';

function App() {
  // get customer name from Auth0
  const [customerName, setCustomerName] = useState("");
  setCustomerName("Sara Asuen"); // temp

  return (
    <>
      <div>
        <h1>The JeniDub Task Management App</h1>
        <TaskDashboard customerName={customerName}/>
      </div>
    </>
  )
}

export default App
