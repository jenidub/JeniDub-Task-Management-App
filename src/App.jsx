import { useState, useEffect } from 'react'
import './App.css'
import TaskDashboard from './components/TaskDashboard.tsx';

function App() {
  // get customer name from Auth0
  const [customerName, setCustomerName] = useState("");

  useEffect(() => {
    return () => {
      setCustomerName("Sara Asuen"); // temp
    };
  }, []);

  return (
    <>
      <div>
        <h2 style={{border: "3px solid black",}}>The JeniDub Task Management App</h2>
        <TaskDashboard customerName={customerName}/>
      </div>
    </>
  )
}

export default App
