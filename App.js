import { useState } from "react";


function App() {

  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [isLoggedIn, setIsLoggedIn]= useState(false); 

  const handleLogin =()=>
  {
    if(email.includes("@")
    {
     setIsLoggedIn(true);
    }
    else 
    {
      alert("enter valid email");
    }
  }

  return (
    <div>
  {isLoggedIn ?(
    <h1>Welcome to Dashboard</h1>
    ):(
    
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
        )}
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
