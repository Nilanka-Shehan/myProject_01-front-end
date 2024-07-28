// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import App from './App';
// import User from './UserForm';
// import './index.css';


// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<App />} />
//       <Route path='/users' element={<User />} /> {/* Use 'User' with uppercase */}
//     </Routes>
//   </BrowserRouter>
// );

// ReactDOM.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<App/>} />
//       <Route path='/users' element={<user/>} />
//     </Routes>
//   </BrowserRouter>,
//   document.getElementById('root')
// );




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<App/>} />
//       <Route path='/users' element={<user/>} />
//     </Routes>
//   </BrowserRouter>
// );













import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import User from './User';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/user" element={<User />} />
    </Routes>
  </BrowserRouter>
);











