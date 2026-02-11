**this is the code before upgrade** 

import { useState } from "react";





function App() {



&nbsp; const \[email, setEmail]=useState("");

&nbsp; const\[password, setPassword]=useState("");



&nbsp; return (

&nbsp;   <div >

&nbsp;   <h2>Login Form</h2>



&nbsp;   <input

&nbsp;     type='text'

&nbsp;     placeholder="enter email"

&nbsp;     value={email}

&nbsp;     onChange={(e)=> setEmail(e.target.value)}

&nbsp;   />

&nbsp;   <br />

&nbsp;   <br />

&nbsp;   <input

&nbsp;     type="text"

&nbsp;     placeholder="Password"

&nbsp;     value={password}

&nbsp;     onChange={(e)=>setPassword(e.target.value)}

&nbsp;   />

&nbsp;   <br />

&nbsp;   <br />



&nbsp;   <button>Login</button>

&nbsp;   

&nbsp;   </div>

&nbsp; );

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



