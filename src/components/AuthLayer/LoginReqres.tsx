import { useState, useEffect } from "react";
import axios from "axios";
import TaskDashboard from "../Dashboard/TaskDashboard";
//import User

const Login: React.FC = () => {
    const [customerName, setCustomerName] = useState("");
    const [email, setEmail] = useState('eve.holt@reqres.in');
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try{
            const response = await axios.post(
                "https://reqres.in/api/login", 
                {email, password},
                {headers: {'x-api-key': 'reqres-free-v1'}})

            console.log("The returned data:   ", response.data);
            const jwtToken = response.data.token;
            setToken(jwtToken);
            sessionStorage.setItem("jwtToken_key", jwtToken);
            //history.push('/dashboard);
        } catch(error){
            console.log("Login Failed - ", error);
        }

    }

    const logoutUser = () => {
        sessionStorage.clear();
        setToken("");
    }

    return (
        <div>
            <h1>LOGIN SCREEN</h1>
            <h3>In beta, you must use the following email: {email}</h3>
            <h3>The password can be anything</h3>

            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="customerName">Your First Name:</label>
                    <input type="text" id="customerName" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" onClick={handleLogin}>Login</button>
            </form>
            <button onClick={logoutUser}>Logout</button>
            {token && <TaskDashboard customerName={customerName} />}
        </div>
    )
}

export default Login;
