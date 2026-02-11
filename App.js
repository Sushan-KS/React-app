import { useState } from "react";


function App() {

  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [isLoggedIn, setIsLoggedIn]= useState(false); 

  const handleLogin =()=>
  {
    if(email==="suhan123@gmail.com" && password==="1234")
    {
      alert("login successful");
    }
    else 
    {
      alert("invalid credentials");
    }
  }

  return (
    <div >
    <h2>Login Form</h2>

    <input
      type='text'
      placeholder="enter email"
      value={email}
      onChange={(e)=> setEmail(e.target.value)}
    />
    <br />
    <br />
    <input
      type="text"
      placeholder="Password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
    />
    <br />
    <br />

    <button onClick={handleLogin}>Login</button>
    
    </div>
  );
}

export default App;




// function App() {
//   return (
//     <div className="App">
//       <h1>Login</h1>

//       <input type="text" placeholder="Enter Username" />
//       <br /><br />

//       <input type="password" placeholder="Enter Password" />
//       <br /><br />

//       <button>Login</button>
//     </div>
//   );
// }

// export default App;
