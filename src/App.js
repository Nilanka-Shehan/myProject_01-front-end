
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'


// class App extends Component {
//   render() {
//     const navigate = useNavigate();
//   return (
//     <div className="App">
//       <h1 className='para1'>Welcome To CafeWeeZ</h1>
//       <button className='user-btn' onClick={()=>navigate('/users')}>Users</button>
//     </div>
//   );
// }
// } In here you cannot use hooks because this is a class

//hooks can be used in functions
const App=()=>{
    const navigate = useNavigate();
  return (
    <div className="App">
      <h1 className='para1'>Welcome To CafeWeeZ</h1>
      <button className='user-btn' onClick={()=>navigate('/user')}>Users</button>
    </div>
  );
}

export default App;
