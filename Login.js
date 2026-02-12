import {useState} from "react";
import { useNavigate } from "react-router-dom";

function Login()
{
    const [email, setEmail]=useState("");
    const [password, setPassword]= useState("");
    const navigate= useNavigate();

    const handleLogin=(e)=>
    {
        e.preventDefault();
    

    if(email.includes('@'))
    {
        navigate("/dashboard");
    }
    else{
        alert("enter valid email");
    }
}
    
    return(
    <div>

    <h2>Login </h2>
    <form onSubmit={handleLogin}>
        <input
        type="text"
        placeholder="Enter your email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        /> 

        <br />
        <br />
        <input
        type="text"
        placeholder="Enter the password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <br></br>
        <button type="navigate" > Login</button>
        </form>
    </div>
        
    
    );
}

export default Login;
